// ============================================================
// Nightingale — Department-Specific AI Summary (Gemini)
// Model: Gemini 2.5 Pro (configurable via gemini-config.js)
// ============================================================

// ── System instruction (role boundary) ───────────────────────
const AI_SYSTEM_PROMPT = `You are a clinical data summary assistant for hospital staff at Srinagarind Hospital (Khon Kaen University), Thailand.

Your role:
- Summarise available EMR, ICU, and registration data to support medical staff
- Use simple, clear hospital language appropriate for trained staff
- Provide both English and Thai summaries of equal quality
- Never make clinical diagnoses, recommend treatments, or act as a physician
- Highlight missing data or data quality concerns as noted observations
- Stay strictly within the data provided — do not add assumptions

Always respond with valid JSON matching the schema specified in the user prompt.`;

// ── Config helper (session overrides file config) ─────────────
const aiGetConfig = () => {
  const base = { ...GEMINI_CONFIG };
  try {
    const stored = sessionStorage.getItem("nightingale-ai-config");
    if (stored) {
      const merged = { ...base, ...JSON.parse(stored) };
      // If a key is configured in file, prefer it over stale session overrides.
      const fileKey = String(base.apiKey || "").trim();
      if (fileKey) merged.apiKey = fileKey;
      // Keep file key as fallback if a blank session key was saved earlier.
      if (!merged.apiKey && base.apiKey) merged.apiKey = base.apiKey;
      return merged;
    }
  } catch { /* ignore */ }
  return base;
};

const aiSaveConfig = (patch) => {
  const current = aiGetConfig();
  sessionStorage.setItem("nightingale-ai-config", JSON.stringify({ ...current, ...patch }));
};

const aiResetConfig = () => {
  sessionStorage.removeItem("nightingale-ai-config");
};

// ── Department definitions ────────────────────────────────────
const AI_DEPT_META = {
  registration: {
    label:       "Registration Department",
    labelTH:     "แผนกทะเบียน",
    icon:        "REG",
    needsPatient: true,
    patientPool: "vq",
    focusAreas:  [
      "Patient identity status",
      "ID verification confidence score",
      "Missing or low-confidence demographic fields",
      "Patient matching result against existing HN database"
    ]
  },
  opd: {
    label:       "OPD / General Clinic",
    labelTH:     "แผนกผู้ป่วยนอก / คลินิกทั่วไป",
    icon:        "OPD",
    needsPatient: true,
    patientPool: "all",
    focusAreas:  [
      "Short patient history summary",
      "Current condition based on most recent visit",
      "Recent vitals (BP, HR, BMI, O₂ saturation)",
      "Recent lab values",
      "Follow-up needs identified from longitudinal data"
    ]
  },
  diabetes: {
    label:       "Diabetes Clinic",
    labelTH:     "คลินิกเบาหวาน",
    icon:        "DM",
    needsPatient: true,
    patientPool: "dm",
    focusAreas:  [
      "HbA1c trend across recorded periods",
      "Fasting plasma glucose (FPG) trend",
      "C-peptide availability and value",
      "Diabetes diagnosis timing and type",
      "Diabetes medication history by period",
      "Diabetes-related comorbidities (HT, CAD, CKD)"
    ]
  },
  hypertension: {
    label:       "Hypertension Clinic",
    labelTH:     "คลินิกความดันโลหิตสูง",
    icon:        "HT",
    needsPatient: true,
    patientPool: "ht",
    focusAreas:  [
      "Systolic/diastolic blood pressure trend across periods",
      "Antihypertensive medication history",
      "Cardiovascular risk indicators (LDL, BNP, BMI)",
      "Comorbidities (DM, CAD, HF, Stroke, CKD)",
      "Treatment response pattern over time"
    ]
  },
  icu: {
    label:       "ICU Department",
    labelTH:     "แผนกผู้ป่วยหนัก (ICU)",
    icon:        "ICU",
    needsPatient: true,
    patientPool: "icu",
    focusAreas:  [
      "Ventilator waveform summary (Flow, Pressure, Volume)",
      "Abnormal signal detection (peak pressure, flow pattern)",
      "ICU stay duration and daily capture count",
      "Diagnosis and operation/procedure record",
      "Patient-ventilator interaction indicators"
    ]
  },
  ward: {
    label:       "Ward Department",
    labelTH:     "แผนกผู้ป่วยใน (Ward)",
    icon:        "WARD",
    needsPatient: true,
    patientPool: "all",
    focusAreas:  [
      "Patient handover summary",
      "Important medical history",
      "Current active medications",
      "Risk notes from recent period data",
      "Follow-up and monitoring needs"
    ]
  },
  admin: {
    label:       "Admin Department",
    labelTH:     "แผนกบริหาร",
    icon:        "ADMIN",
    needsPatient: false,
    patientPool: null,
    focusAreas:  [
      "Patient group trends across all departments",
      "Department workload (VQ queue, ICU occupancy)",
      "Disease burden summary (DM, HT, ICU cases)",
      "High-risk patient count by condition",
      "Data completeness assessment"
    ]
  }
};

// ── Label helpers ─────────────────────────────────────────────
const _COMORB_LABEL = {
  ht: "Hypertension",   dm: "Diabetes",     cad: "Coronary Artery Disease",
  hf: "Heart Failure",  stroke: "Stroke",   ckd: "Chronic Kidney Disease",
  arrhythmias: "Arrhythmia", atrial_fibrillation: "Atrial Fibrillation"
};
const _MED_LABEL = {
  metformin_500mg: "Metformin 500mg",     metformin_1000mg: "Metformin 1000mg",
  insulin_basal:   "Insulin (Basal)",     dapagliflozin_10mg: "Dapagliflozin 10mg",
  sitagliptin_100mg: "Sitagliptin 100mg", semaglutide: "Semaglutide",
  ARB_valsartan: "ARB – Valsartan",       ARB_losartan_50mg: "ARB – Losartan 50mg",
  ARB_losartan_100mg: "ARB – Losartan 100mg",
  ACEI_enalapril_5mg: "ACEI – Enalapril 5mg", ACEI_enalapril_10mg: "ACEI – Enalapril 10mg",
  ACEI_perindopril_4mg: "ACEI – Perindopril 4mg", ACEI_perindopril_8mg: "ACEI – Perindopril 8mg",
  CCB_amlodipine: "CCB – Amlodipine",     CCB_amlodipine_5mg: "CCB – Amlodipine 5mg",
  CCB_amlodipine_10mg: "CCB – Amlodipine 10mg",
  beta_blocker_bisoprolol_5mg: "Beta-Blocker – Bisoprolol 5mg",
  diuretics_hydrochlorothiazide_12_5mg: "Diuretic – HCTZ 12.5mg",
  diuretics_hydrochlorothiazide_25mg: "Diuretic – HCTZ 25mg",
  rosuvastatin_10mg: "Rosuvastatin 10mg", rosuvastatin_20mg: "Rosuvastatin 20mg"
};
const _medLabel  = (k) => _MED_LABEL[k]  || k.replace(/_/g, " ");
const _combLabel = (k) => _COMORB_LABEL[k] || k.replace(/_/g, " ");

// ── Context builders ──────────────────────────────────────────

const aiBuildContextRegistration = (patientId) => {
  if (patientId) {
    const rec = VQ_RECORDS.find((r) => r.id === patientId);
    if (!rec) return null;
    const missingFields = [];
    if (!rec.hn)    missingFields.push("Hospital Number (HN)");
    if (!rec.phone) missingFields.push("Phone");
    const linked = (typeof emrGetLinkedData === "function") ? emrGetLinkedData(rec.id) : null;
    return {
      type: "single",
      record: {
        id: rec.id, name: rec.patientName, thaiName: rec.thaiName,
        thaiId: rec.thaiId, dob: rec.dob, gender: rec.gender,
        address: rec.address, phone: rec.phone || "Not provided",
        hn: rec.hn || "Not assigned", department: rec.department,
        status: rec.status, ocrConfidence: rec.ocrConfidence,
        scanTime: rec.scanTime, notes: rec.notes,
        assignedTo: rec.assignedTo
      },
      missingFields,
      linkedEMR: linked ? Object.entries(linked).filter(([, v]) => v).map(([k]) => k.toUpperCase()).join(", ") || "None" : "N/A"
    };
  }
  const stats = {
    total: VQ_RECORDS.length,
    pending:      VQ_RECORDS.filter((r) => r.status === "pending").length,
    approved:     VQ_RECORDS.filter((r) => r.status === "approved").length,
    rejected:     VQ_RECORDS.filter((r) => r.status === "rejected").length,
    needsRescan:  VQ_RECORDS.filter((r) => r.status === "needs-rescan").length,
    lowConfidence: VQ_RECORDS.filter((r) => r.ocrConfidence < 70).length,
    missingHN:    VQ_RECORDS.filter((r) => !r.hn).length
  };
  return { type: "aggregate", stats, records: VQ_RECORDS.map((r) => ({ id: r.id, name: r.patientName, status: r.status, confidence: r.ocrConfidence, dept: r.department })) };
};

const aiBuildContextDiabetes = (patientId) => {
  if (!patientId) {
    const pts = Array.isArray(EMR_DIABETES_PATIENTS) ? EMR_DIABETES_PATIENTS : [];
    const latestRows = pts.map((p) => {
      const periods = Array.isArray(p.periods) ? p.periods : [];
      return { patient: p, latest: periods.length ? periods[periods.length - 1] : null };
    });

    const avg = (arr) => {
      const vals = arr.filter((v) => typeof v === "number" && Number.isFinite(v));
      if (!vals.length) return null;
      return +(vals.reduce((s, v) => s + v, 0) / vals.length).toFixed(2);
    };

    const hba1cVals = latestRows.map((r) => r.latest?.labs?.hba1c);
    const fpgVals = latestRows.map((r) => r.latest?.labs?.fpg);

    const sbpDbpRows = latestRows.filter((r) =>
      typeof r.latest?.vitals?.sbp === "number" && typeof r.latest?.vitals?.dbp === "number"
    );
    const uncontrolledBp = sbpDbpRows.filter((r) => r.latest.vitals.sbp >= 140 || r.latest.vitals.dbp >= 90).length;

    const medCounts = {};
    latestRows.forEach((r) => {
      const meds = Array.isArray(r.latest?.medications) ? r.latest.medications : [];
      meds.forEach((m) => {
        const name = _medLabel(m);
        medCounts[name] = (medCounts[name] || 0) + 1;
      });
    });

    const topMeds = Object.entries(medCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    return {
      type: "aggregate",
      clinic: "diabetes",
      patientCount: pts.length,
      avgAge: avg(pts.map((p) => p.age)),
      latestPeriodCoverage: latestRows.filter((r) => !!r.latest).length,
      hba1c: {
        mean: avg(hba1cVals),
        above7Count: hba1cVals.filter((v) => typeof v === "number" && v >= 7).length,
        above8Count: hba1cVals.filter((v) => typeof v === "number" && v >= 8).length,
        missingCount: hba1cVals.filter((v) => typeof v !== "number").length
      },
      fpg: {
        mean: avg(fpgVals),
        highCount: fpgVals.filter((v) => typeof v === "number" && v >= 7).length,
        missingCount: fpgVals.filter((v) => typeof v !== "number").length
      },
      bp: {
        uncontrolledCount: uncontrolledBp,
        measuredCount: sbpDbpRows.length
      },
      topMedications: topMeds,
      samplePatients: latestRows.slice(0, 5).map((r) => ({
        id: r.patient?.id,
        name: r.patient?.name,
        hn: r.patient?.hn,
        hba1c: r.latest?.labs?.hba1c ?? null,
        fpg: r.latest?.labs?.fpg ?? null
      }))
    };
  }

  const pt = EMR_DIABETES_PATIENTS.find((p) => p.id === patientId);
  if (!pt) return null;
  return {
    patient: { id: pt.id, name: pt.name, thaiName: pt.thaiName, age: pt.age, sex: pt.sex, hn: pt.hn, source: pt.source, type: pt.type2 ? "Type 2" : "Type 1", onset: pt.dmOnset, identifiedBy: pt.identifyBy },
    periods: pt.periods.map((per) => ({
      periodLabel: per.p === -1 ? "Pre-onset" : per.p === 0 ? "Onset" : `Post-onset P${per.p}`,
      dateRange: per.dateRange,
      vitals: { sbp: per.vitals.sbp, dbp: per.vitals.dbp, hr: per.vitals.hr, bmi: per.vitals.bmi, o2sat: per.vitals.o2sat },
      labs: { hba1c: per.labs.hba1c, fpg: per.labs.fpg, cpeptide: per.labs.cpeptide ?? "Not recorded" },
      medications: per.medications.map(_medLabel),
      comorbidities: Object.entries(per.comorbidities).filter(([, v]) => v === 1).map(([k]) => _combLabel(k))
    }))
  };
};

const aiBuildContextHypertension = (patientId) => {
  const pt = EMR_HT_PATIENTS.find((p) => p.id === patientId);
  if (!pt) return null;
  return {
    patient: { id: pt.id, name: pt.name, thaiName: pt.thaiName, age: pt.age, sex: pt.sex, hn: pt.hn, source: pt.source, onset: pt.htOnset, identifiedBy: pt.identifyBy },
    periods: pt.periods.map((per) => ({
      periodLabel: per.p === -1 ? "Pre-onset" : per.p === 0 ? "Onset" : `Post-onset P${per.p}`,
      dateRange: per.dateRange,
      vitals: { sbp: per.vitals.sbp, dbp: per.vitals.dbp, hr: per.vitals.hr, bmi: per.vitals.bmi, o2sat: per.vitals.o2sat },
      labs: { ldl: per.labs.ldl, creatinine: per.labs.creatinine, proBNP: per.labs.proBNP ?? "Not recorded", eGFR: per.labs.eGFR ?? "Not recorded" },
      medications: per.medications.map(_medLabel),
      comorbidities: Object.entries(per.comorbidities).filter(([, v]) => v === 1).map(([k]) => _combLabel(k))
    }))
  };
};

const aiBuildContextICU = (patientId) => {
  const pt = EMR_ICU_PATIENTS.find((p) => p.id === patientId);
  if (!pt) return null;
  const daysSummary = pt.days.map((d) => {
    const withData = d.captures.filter((c) => c.rows && c.rows.length > 0);
    const stats = withData.length > 0 ? emrWaveStats(withData.flatMap((c) => c.rows)) : null;
    return {
      day: d.day,
      captureCount: d.captures.length,
      waveformDataCaptures: withData.length,
      waveformStats: stats ? {
        flow:     { min: stats.flow.min,     max: stats.flow.max,     mean: stats.flow.mean     },
        pressure: { min: stats.pressure.min, max: stats.pressure.max, mean: stats.pressure.mean },
        volume:   { min: stats.volume.min,   max: stats.volume.max,   mean: stats.volume.mean   },
        samples:  stats.sampleCount
      } : null,
      dx: d.dx,
      op: d.op || "Not specified"
    };
  });
  return {
    patient: {
      displayId: pt.displayId, hn: pt.hn, name: pt.name ?? "Anonymised",
      age: pt.age, sex: pt.sexLabel, bw: pt.bw, ht: pt.ht, bmi: pt.bmi,
      ventilatorId: pt.ventilatorId, icuDays: pt.icuDays, admitDate: pt.admitDate,
      primaryDx: pt.primaryDx, secondaryDx: pt.secondaryDx
    },
    daysSummary
  };
};

const aiBuildContextOPDOrWard = (patientId) => {
  // Try all patient pools
  const dmPt = (typeof EMR_DIABETES_PATIENTS !== "undefined") ? EMR_DIABETES_PATIENTS.find((p) => "DM:" + p.id === patientId || p.id === patientId) : null;
  const htPt = (typeof EMR_HT_PATIENTS !== "undefined")       ? EMR_HT_PATIENTS.find((p) => "HT:" + p.id === patientId || p.id === patientId) : null;
  const vqPt = (typeof VQ_RECORDS !== "undefined")            ? VQ_RECORDS.find((r) => r.id === patientId) : null;

  const ctx = { patientId };
  if (vqPt) {
    ctx.registrationRecord = { name: vqPt.patientName, thaiName: vqPt.thaiName, dob: vqPt.dob, gender: vqPt.gender, hn: vqPt.hn, department: vqPt.department, status: vqPt.status, ocrConfidence: vqPt.ocrConfidence, notes: vqPt.notes };
  }
  if (dmPt) {
    const latest = dmPt.periods[dmPt.periods.length - 1];
    ctx.diabetesData = { type: dmPt.type2 ? "Type 2" : "Type 1", onset: dmPt.dmOnset, latestPeriod: latest.label, latestVitals: latest.vitals, latestLabs: { hba1c: latest.labs.hba1c, fpg: latest.labs.fpg }, latestMedications: latest.medications.map(_medLabel) };
  }
  if (htPt) {
    const latest = htPt.periods[htPt.periods.length - 1];
    ctx.hypertensionData = { onset: htPt.htOnset, latestPeriod: latest.label, latestVitals: latest.vitals, latestLabs: { ldl: latest.labs.ldl, creatinine: latest.labs.creatinine }, latestMedications: latest.medications.map(_medLabel) };
  }
  return Object.keys(ctx).length > 1 ? ctx : null;
};

const aiBuildContextAdmin = () => {
  const vqStats = (typeof VQ_RECORDS !== "undefined") ? {
    total: VQ_RECORDS.length,
    byStatus: Object.fromEntries(["pending","approved","rejected","needs-rescan"].map((s) => [s, VQ_RECORDS.filter((r) => r.status === s).length])),
    byDept: [...new Set(VQ_RECORDS.map((r) => r.department))].map((d) => ({ dept: d, count: VQ_RECORDS.filter((r) => r.department === d).length })),
    lowConfidence: VQ_RECORDS.filter((r) => r.ocrConfidence < 70).length,
    avgConfidence: +(VQ_RECORDS.reduce((s, r) => s + r.ocrConfidence, 0) / VQ_RECORDS.length).toFixed(1)
  } : null;

  const dmStats = (typeof EMR_DIABETES_PATIENTS !== "undefined") ? {
    total: EMR_DIABETES_PATIENTS.length,
    avgAge: +(EMR_DIABETES_PATIENTS.reduce((s, p) => s + p.age, 0) / EMR_DIABETES_PATIENTS.length).toFixed(1),
    highHba1c: EMR_DIABETES_PATIENTS.filter((p) => {
      const last = p.periods[p.periods.length - 1];
      return last.labs.hba1c != null && last.labs.hba1c >= 7.5;
    }).length
  } : null;

  const htStats = (typeof EMR_HT_PATIENTS !== "undefined") ? {
    total: EMR_HT_PATIENTS.length,
    avgAge: +(EMR_HT_PATIENTS.reduce((s, p) => s + p.age, 0) / EMR_HT_PATIENTS.length).toFixed(1),
    uncontrolledBP: EMR_HT_PATIENTS.filter((p) => {
      const last = p.periods[p.periods.length - 1];
      return last.vitals.sbp >= 140 || last.vitals.dbp >= 90;
    }).length
  } : null;

  const icuStats = (typeof EMR_ICU_PATIENTS !== "undefined") ? {
    total: EMR_ICU_PATIENTS.length,
    avgICUDays: +(EMR_ICU_PATIENTS.reduce((s, p) => s + p.icuDays, 0) / EMR_ICU_PATIENTS.length).toFixed(1),
    highPressureAlerts: EMR_ICU_PATIENTS.filter((pt) => {
      return pt.days.some((d) => d.captures.some((c) => {
        if (!c.rows || !c.rows.length) return false;
        return Math.max(...c.rows.map((r) => r.pressure)) > 40;
      }));
    }).length
  } : null;

  return { vqStats, dmStats, htStats, icuStats, reportDate: new Date().toISOString().split("T")[0] };
};

const aiBuildContext = (deptId, patientId) => {
  switch (deptId) {
    case "registration": return aiBuildContextRegistration(patientId);
    case "diabetes":     return aiBuildContextDiabetes(patientId);
    case "hypertension": return aiBuildContextHypertension(patientId);
    case "icu":          return aiBuildContextICU(patientId);
    case "opd":
    case "ward":         return aiBuildContextOPDOrWard(patientId);
    case "admin":        return aiBuildContextAdmin();
    default:             return null;
  }
};

// ── Prompt builder ────────────────────────────────────────────
const aiBuildPrompt = (deptId, context) => {
  const meta = AI_DEPT_META[deptId];
  const focusBlock = meta.focusAreas.map((f, i) => `  ${i + 1}. ${f}`).join("\n");
  const contextBlock = JSON.stringify(context, null, 2);

  return `=== DEPARTMENT AI SUMMARY REQUEST ===
Department: ${meta.label} (${meta.labelTH})
Hospital: Srinagarind Hospital, Khon Kaen University, Thailand
Request Date: ${new Date().toLocaleDateString("en-GB")}

FOCUS AREAS FOR THIS DEPARTMENT:
${focusBlock}

AVAILABLE DATA:
\`\`\`json
${contextBlock}
\`\`\`

TASK:
Generate a Department AI Summary for hospital staff based strictly on the data above.
Summaries must be factual, concise (3-6 sentences each), and in clear hospital language.

REQUIRED JSON RESPONSE FORMAT:
{
  "summaryEN": "Complete English summary in 3-6 sentences.",
  "summaryTH": "สรุปภาษาไทย 3-6 ประโยค ภาษาที่เข้าใจง่ายสำหรับเจ้าหน้าที่โรงพยาบาล",
  "keyFindings": [
    "Key observation 1 (English)",
    "Key observation 2 (English)",
    "Key observation 3 (English)"
  ],
  "keyFindingsTH": [
    "การสังเกตที่สำคัญ 1 (ภาษาไทย)",
    "การสังเกตที่สำคัญ 2 (ภาษาไทย)",
    "การสังเกตที่สำคัญ 3 (ภาษาไทย)"
  ],
  "evidenceUsed": [
    "Name of data source or field used"
  ],
  "staffReviewRequired": [
    "Specific item or value that needs staff review"
  ]
}

RULES:
- Do NOT diagnose, prescribe, or recommend clinical actions
- Do NOT add clinical information not present in the data
- Note any missing or incomplete data fields
- Thai text must be accurate and use standard Thai medical terminology
- Respond ONLY with the JSON object — no markdown, no extra text`;
};

const aiIsQuotaOrRateError = (message, status) => {
  const msg = String(message || "").toLowerCase();
  return (
    status === 429 ||
    msg.includes("quota") ||
    msg.includes("rate limit") ||
    msg.includes("resource exhausted") ||
    msg.includes("retry in")
  );
};

const aiPadFindings = (items, defaults) => {
  const out = (items || []).filter(Boolean);
  (defaults || []).forEach((d) => {
    if (out.length < 3) out.push(d);
  });
  return out.slice(0, 3);
};

const aiBuildLocalFallbackSummary = (deptId, context, reason = "") => {
  const meta = AI_DEPT_META[deptId] || { label: "Department", labelTH: "แผนก" };
  const findings = [];
  const findingsTH = [];
  const evidence = [];
  const review = [];

  if (deptId === "registration") {
    if (context?.type === "single" && context.record) {
      const rec = context.record;
      const missing = Array.isArray(context.missingFields) ? context.missingFields : [];
      findings.push(`Record ${rec.id || "N/A"} is ${rec.status || "pending"} with OCR confidence ${rec.ocrConfidence ?? "N/A"}%.`);
      findings.push(`Patient: ${rec.name || rec.thaiName || "Unknown"}; Thai ID: ${rec.thaiId || "not provided"}; HN: ${rec.hn || "not assigned"}.`);
      findings.push(missing.length ? `Missing fields: ${missing.join(", ")}.` : "Core identity fields are present in this record.");

      findingsTH.push(`รายการ ${rec.id || "N/A"} มีสถานะ ${rec.status || "pending"} และความเชื่อมั่น OCR ${rec.ocrConfidence ?? "N/A"}%.`);
      findingsTH.push(`ผู้ป่วย: ${rec.name || rec.thaiName || "ไม่ทราบชื่อ"}; เลขบัตร: ${rec.thaiId || "ไม่มีข้อมูล"}; HN: ${rec.hn || "ยังไม่กำหนด"}.`);
      findingsTH.push(missing.length ? `ฟิลด์ที่ยังขาด: ${missing.join(", ")}.` : "พบข้อมูลยืนยันตัวตนหลักครบถ้วนในรายการนี้.");

      evidence.push("VQ_RECORDS single record", "ocrConfidence", "status", "thaiId", "hn");
      review.push(...(missing.length ? missing.map((m) => `Verify ${m}.`) : ["Staff must confirm all identity fields before approval."]));
    } else {
      const s = context?.stats || {};
      findings.push(`Verification queue total: ${s.total || 0} record(s).`);
      findings.push(`Pending: ${s.pending || 0}, Needs rescan: ${s.needsRescan || 0}, Approved: ${s.approved || 0}, Rejected: ${s.rejected || 0}.`);
      findings.push(`Low confidence records: ${s.lowConfidence || 0}; Missing HN: ${s.missingHN || 0}.`);

      findingsTH.push(`คิวตรวจสอบมีทั้งหมด ${s.total || 0} รายการ.`);
      findingsTH.push(`รอตรวจสอบ: ${s.pending || 0}, ต้องสแกนใหม่: ${s.needsRescan || 0}, อนุมัติ: ${s.approved || 0}, ปฏิเสธ: ${s.rejected || 0}.`);
      findingsTH.push(`รายการความเชื่อมั่นต่ำ: ${s.lowConfidence || 0}; รายการที่ยังไม่มี HN: ${s.missingHN || 0}.`);

      evidence.push("VQ queue statistics", "status counts", "OCR confidence counts");
      review.push("Prioritize records with low OCR confidence and missing HN.");
    }
  } else if (deptId === "diabetes") {
    if (context?.type === "aggregate") {
      const total = context?.patientCount || 0;
      const hba1cMean = context?.hba1c?.mean;
      const hba1cAbove7 = context?.hba1c?.above7Count || 0;
      const hba1cAbove8 = context?.hba1c?.above8Count || 0;
      const fpgMean = context?.fpg?.mean;
      const fpgHigh = context?.fpg?.highCount || 0;
      const bpUncontrolled = context?.bp?.uncontrolledCount || 0;
      const bpMeasured = context?.bp?.measuredCount || 0;
      const topMedText = (context?.topMedications || [])
        .slice(0, 3)
        .map((m) => `${m.name} (${m.count})`)
        .join(", ");

      findings.push(`Diabetes clinic aggregate view includes ${total} patient(s).`);
      findings.push(`Latest mean HbA1c is ${hba1cMean ?? "N/A"}% with ${hba1cAbove7} patient(s) at or above 7% and ${hba1cAbove8} at or above 8%.`);
      findings.push(`Mean FPG is ${fpgMean ?? "N/A"} mmol/L (${fpgHigh} patient(s) >= 7.0), and uncontrolled BP appears in ${bpUncontrolled}/${bpMeasured} measured records.`);

      findingsTH.push(`ภาพรวมคลินิกเบาหวานครอบคลุมผู้ป่วยทั้งหมด ${total} ราย.`);
      findingsTH.push(`ค่า HbA1c เฉลี่ยล่าสุด ${hba1cMean ?? "N/A"}% โดยมี ${hba1cAbove7} รายที่มากกว่าหรือเท่ากับ 7% และ ${hba1cAbove8} รายที่มากกว่าหรือเท่ากับ 8%.`);
      findingsTH.push(`ค่า FPG เฉลี่ย ${fpgMean ?? "N/A"} mmol/L (มี ${fpgHigh} รายที่ >= 7.0) และพบความดันควบคุมไม่ได้ ${bpUncontrolled}/${bpMeasured} รายที่มีการวัด.`);

      evidence.push("Diabetes EMR aggregate context", "latest HbA1c/FPG values", "latest BP values", "top medication counts");
      if (topMedText) review.push(`Common current medications: ${topMedText}.`);
      if (hba1cAbove8 > 0) review.push("Prioritize review for patients with HbA1c >= 8%.");
      if (fpgHigh > 0) review.push("Review patients with fasting glucose >= 7.0 mmol/L.");
    } else {
      const pt = context?.patient || {};
      const periods = Array.isArray(context?.periods) ? context.periods : [];
      const latest = periods[periods.length - 1] || {};
      const sbp = latest?.vitals?.sbp;
      const dbp = latest?.vitals?.dbp;
      const hba1c = latest?.labs?.hba1c;
      const fpg = latest?.labs?.fpg;
      const meds = Array.isArray(latest?.medications) ? latest.medications : [];

      findings.push(`Patient ${pt.name || pt.id || "N/A"}; latest period ${latest.periodLabel || "N/A"}.`);
      findings.push(`Latest HbA1c: ${hba1c ?? "N/A"}% and FPG: ${fpg ?? "N/A"} mmol/L; BP: ${sbp ?? "N/A"}/${dbp ?? "N/A"} mmHg.`);
      findings.push(`Latest medications: ${meds.length ? meds.join(", ") : "none recorded"}.`);

      findingsTH.push(`ผู้ป่วย ${pt.name || pt.id || "N/A"}; ข้อมูลล่าสุดช่วง ${latest.periodLabel || "N/A"}.`);
      findingsTH.push(`ค่า HbA1c ล่าสุด: ${hba1c ?? "N/A"}% และ FPG: ${fpg ?? "N/A"} mmol/L; ความดัน: ${sbp ?? "N/A"}/${dbp ?? "N/A"} mmHg.`);
      findingsTH.push(`ยาล่าสุด: ${meds.length ? meds.join(", ") : "ไม่พบข้อมูลยา"}.`);

      evidence.push("Diabetes EMR periods", "latest labs", "latest vitals", "medications list");
      if (typeof hba1c === "number" && hba1c >= 7.5) review.push("Review elevated HbA1c value.");
      if (typeof fpg === "number" && fpg >= 7.0) review.push("Review elevated fasting plasma glucose.");
      if (typeof sbp === "number" && sbp >= 140) review.push("Review blood pressure control in latest period.");
    }
  } else if (deptId === "hypertension") {
    const pt = context?.patient || {};
    const periods = Array.isArray(context?.periods) ? context.periods : [];
    const latest = periods[periods.length - 1] || {};
    const sbp = latest?.vitals?.sbp;
    const dbp = latest?.vitals?.dbp;
    const ldl = latest?.labs?.ldl;
    const cr = latest?.labs?.creatinine;
    const meds = Array.isArray(latest?.medications) ? latest.medications : [];

    findings.push(`Patient ${pt.name || pt.id || "N/A"}; latest period ${latest.periodLabel || "N/A"}.`);
    findings.push(`Latest BP: ${sbp ?? "N/A"}/${dbp ?? "N/A"} mmHg; LDL: ${ldl ?? "N/A"} mg/dL; Creatinine: ${cr ?? "N/A"}.`);
    findings.push(`Current medications: ${meds.length ? meds.join(", ") : "none recorded"}.`);

    findingsTH.push(`ผู้ป่วย ${pt.name || pt.id || "N/A"}; ข้อมูลล่าสุดช่วง ${latest.periodLabel || "N/A"}.`);
    findingsTH.push(`ความดันล่าสุด: ${sbp ?? "N/A"}/${dbp ?? "N/A"} mmHg; LDL: ${ldl ?? "N/A"} mg/dL; Creatinine: ${cr ?? "N/A"}.`);
    findingsTH.push(`ยาที่ใช้อยู่: ${meds.length ? meds.join(", ") : "ไม่พบข้อมูลยา"}.`);

    evidence.push("Hypertension EMR periods", "latest vitals", "latest labs", "medications list");
    if ((typeof sbp === "number" && sbp >= 140) || (typeof dbp === "number" && dbp >= 90)) review.push("Review uncontrolled blood pressure in latest period.");
    if (typeof ldl === "number" && ldl >= 130) review.push("Review elevated LDL value.");
  } else if (deptId === "icu") {
    const pt = context?.patient || {};
    const days = Array.isArray(context?.daysSummary) ? context.daysSummary : [];
    const daysWithWave = days.filter((d) => d?.waveformStats);
    let maxPressure = null;
    daysWithWave.forEach((d) => {
      const p = d?.waveformStats?.pressure?.max;
      if (typeof p === "number") maxPressure = maxPressure == null ? p : Math.max(maxPressure, p);
    });

    findings.push(`Patient ${pt.displayId || "N/A"}; ICU stay ${pt.icuDays ?? "N/A"} day(s).`);
    findings.push(`Waveform captures found on ${daysWithWave.length}/${days.length} ICU day(s).`);
    findings.push(`Highest observed pressure: ${maxPressure != null ? maxPressure.toFixed(1) : "N/A"} cmH₂O; diagnosis: ${pt.primaryDx || "N/A"}.`);

    findingsTH.push(`ผู้ป่วย ${pt.displayId || "N/A"}; นอน ICU ${pt.icuDays ?? "N/A"} วัน.`);
    findingsTH.push(`พบข้อมูล waveform ใน ${daysWithWave.length}/${days.length} วันของ ICU.`);
    findingsTH.push(`ค่าแรงดันสูงสุดที่พบ: ${maxPressure != null ? maxPressure.toFixed(1) : "N/A"} cmH₂O; การวินิจฉัยหลัก: ${pt.primaryDx || "N/A"}.`);

    evidence.push("ICU days summary", "waveformStats.pressure", "ICU diagnosis JSON fields");
    if (maxPressure != null && maxPressure > 40) review.push("Urgent review required for pressure > 40 cmH₂O.");
    if (daysWithWave.length === 0) review.push("No waveform CSV data detected for selected ICU patient.");
  } else if (deptId === "admin") {
    const vq = context?.vqStats || {};
    const dm = context?.dmStats || {};
    const ht = context?.htStats || {};
    const icu = context?.icuStats || {};

    findings.push(`Queue overview: total ${vq.total || 0}, low-confidence ${vq.lowConfidence || 0}, average OCR ${vq.avgConfidence ?? "N/A"}%.`);
    findings.push(`Chronic clinics: DM total ${dm.total || 0} (high HbA1c ${dm.highHba1c || 0}), HT total ${ht.total || 0} (uncontrolled BP ${ht.uncontrolledBP || 0}).`);
    findings.push(`ICU load: total ${icu.total || 0} patient(s), high-pressure alerts ${icu.highPressureAlerts || 0}.`);

    findingsTH.push(`ภาพรวมคิว: ทั้งหมด ${vq.total || 0}, ความเชื่อมั่นต่ำ ${vq.lowConfidence || 0}, ค่า OCR เฉลี่ย ${vq.avgConfidence ?? "N/A"}%.`);
    findingsTH.push(`คลินิกโรคเรื้อรัง: DM ${dm.total || 0} (HbA1c สูง ${dm.highHba1c || 0}), HT ${ht.total || 0} (ควบคุมความดันไม่ได้ ${ht.uncontrolledBP || 0}).`);
    findingsTH.push(`ภาระ ICU: ผู้ป่วย ${icu.total || 0} ราย, สัญญาณแรงดันสูง ${icu.highPressureAlerts || 0}.`);

    evidence.push("VQ statistics", "DM dataset aggregate", "HT dataset aggregate", "ICU dataset aggregate");
    review.push("Admin should verify queue backlog and high-risk groups daily.");
  } else {
    const reg = context?.registrationRecord;
    const dm = context?.diabetesData;
    const ht = context?.hypertensionData;

    findings.push(`Selected department: ${meta.label}. Local summary generated from available linked records.`);
    findings.push(reg ? `Registration status: ${reg.status || "N/A"}, OCR confidence ${reg.ocrConfidence ?? "N/A"}%.` : "No linked registration record found.");
    findings.push(dm || ht
      ? `Linked chronic data available: ${dm ? "diabetes" : ""}${dm && ht ? " and " : ""}${ht ? "hypertension" : ""}.`
      : "No linked chronic clinic data found for selected patient.");

    findingsTH.push(`แผนกที่เลือก: ${meta.labelTH}. ระบบสร้างสรุปจากข้อมูลภายในที่มีอยู่.`);
    findingsTH.push(reg ? `สถานะทะเบียน: ${reg.status || "N/A"}, ความเชื่อมั่น OCR ${reg.ocrConfidence ?? "N/A"}%.` : "ไม่พบข้อมูลทะเบียนที่เชื่อมโยง.");
    findingsTH.push(dm || ht
      ? `พบข้อมูลโรคเรื้อรังที่เชื่อมโยง: ${dm ? "เบาหวาน" : ""}${dm && ht ? " และ " : ""}${ht ? "ความดันโลหิตสูง" : ""}.`
      : "ไม่พบข้อมูลคลินิกโรคเรื้อรังที่เชื่อมโยง.");

    evidence.push("Linked registration record", "Linked DM/HT context fields");
    review.push("Staff should verify linked records before final interpretation.");
  }

  const fallbackEN = aiPadFindings(findings, [
    "Data is incomplete for this selection.",
    "Please verify source fields in the linked dataset.",
    "Staff review is required before clinical use."
  ]);
  const fallbackTH = aiPadFindings(findingsTH, [
    "ข้อมูลไม่ครบถ้วนสำหรับรายการที่เลือก.",
    "กรุณาตรวจสอบฟิลด์ข้อมูลจากแหล่งต้นทาง.",
    "ต้องมีการทบทวนโดยบุคลากรก่อนใช้งานทางคลินิก."
  ]);

  const shortReason = reason ? ` Source issue: ${String(reason).split("\n")[0]}.` : "";

  return {
    summaryEN: `Gemini API is currently unavailable or quota-limited. This rule-based fallback summary was generated from local dataset fields for ${meta.label}.${shortReason}`,
    summaryTH: `ไม่สามารถใช้งาน Gemini API ได้ในขณะนี้หรือเกินโควตา ระบบจึงสร้างสรุปสำรองจากข้อมูลในระบบสำหรับ ${meta.labelTH}.`,
    keyFindings: fallbackEN,
    keyFindingsTH: fallbackTH,
    evidenceUsed: [...new Set(evidence)].slice(0, 8),
    staffReviewRequired: [...new Set(review.length ? review : ["Staff review is required for all values in fallback mode."])].slice(0, 8),
    _usedModel: "Local fallback"
  };
};

const aiBuildDiabetesClinicDemoSummary = (context) => {
  const agg = (context && context.type === "aggregate") ? context : aiBuildContextDiabetes(null);
  const total = agg?.patientCount || 0;
  const avgAge = agg?.avgAge;
  const hba1cMean = agg?.hba1c?.mean;
  const hba1cAbove7 = agg?.hba1c?.above7Count || 0;
  const hba1cAbove8 = agg?.hba1c?.above8Count || 0;
  const fpgMean = agg?.fpg?.mean;
  const fpgHigh = agg?.fpg?.highCount || 0;
  const bpUncontrolled = agg?.bp?.uncontrolledCount || 0;
  const bpMeasured = agg?.bp?.measuredCount || 0;

  const topMeds = (agg?.topMedications || [])
    .slice(0, 3)
    .map((m) => `${m.name} (${m.count})`);
  const topMedsText = topMeds.length ? topMeds.join(", ") : "No dominant medication pattern recorded";

  return {
    summaryEN:
      `Diabetes Clinic demo summary (all patients): ${total} patients are included in the aggregate view` +
      `${avgAge != null ? `, with mean age ${avgAge} years` : ""}. ` +
      `Latest mean HbA1c is ${hba1cMean ?? "N/A"}% (${hba1cAbove7} patients >= 7%, ${hba1cAbove8} patients >= 8%), ` +
      `and mean FPG is ${fpgMean ?? "N/A"} mmol/L (${fpgHigh} patients >= 7.0). ` +
      `Uncontrolled blood pressure appears in ${bpUncontrolled}/${bpMeasured} patients with BP readings. ` +
      `Most frequent current medications are ${topMedsText}. This mock summary is for staff demo and review only.`,
    summaryTH:
      `สรุปเดโมคลินิกเบาหวาน (ผู้ป่วยทั้งหมด): มีผู้ป่วยในภาพรวม ${total} ราย` +
      `${avgAge != null ? ` อายุเฉลี่ย ${avgAge} ปี` : ""}. ` +
      `ค่า HbA1c เฉลี่ยล่าสุด ${hba1cMean ?? "N/A"}% (มี ${hba1cAbove7} รายที่ >= 7% และ ${hba1cAbove8} รายที่ >= 8%) ` +
      `และค่า FPG เฉลี่ย ${fpgMean ?? "N/A"} mmol/L (มี ${fpgHigh} รายที่ >= 7.0). ` +
      `พบผู้ป่วยที่ควบคุมความดันไม่ได้ ${bpUncontrolled}/${bpMeasured} รายในกลุ่มที่มีการวัดความดัน. ` +
      `ยาที่พบใช้บ่อยคือ ${topMedsText}. สรุปนี้เป็นข้อมูลเดโมเพื่อการทบทวนของบุคลากรเท่านั้น.`,
    keyFindings: [
      `Aggregate cohort size: ${total} diabetes patient(s).`,
      `Glycemic control signal: mean HbA1c ${hba1cMean ?? "N/A"}% with ${hba1cAbove8} patient(s) in high-risk range (>= 8%).`,
      `Cardiometabolic signal: uncontrolled BP in ${bpUncontrolled}/${bpMeasured} measured records; frequent medications: ${topMedsText}.`
    ],
    keyFindingsTH: [
      `จำนวนผู้ป่วยเบาหวานในภาพรวม: ${total} ราย.`,
      `สัญญาณการคุมน้ำตาล: HbA1c เฉลี่ย ${hba1cMean ?? "N/A"}% และมีกลุ่มความเสี่ยงสูง (>= 8%) จำนวน ${hba1cAbove8} ราย.`,
      `สัญญาณหัวใจและหลอดเลือด: ความดันควบคุมไม่ได้ ${bpUncontrolled}/${bpMeasured} ราย; ยาที่ใช้บ่อย: ${topMedsText}.`
    ],
    evidenceUsed: [
      "EMR_DIABETES_PATIENTS aggregate count",
      "Latest-period HbA1c values",
      "Latest-period FPG values",
      "Latest-period blood pressure values",
      "Latest-period medication frequencies"
    ],
    staffReviewRequired: [
      "Review all patients with HbA1c >= 8% for follow-up prioritization.",
      "Review patients with FPG >= 7.0 mmol/L and uncontrolled blood pressure.",
      "Confirm medication adherence and regimen suitability in high-risk subgroup."
    ],
    _usedModel: "Demo mock"
  };
};

// ── Gemini API call ───────────────────────────────────────────
const aiCallGemini = async (prompt) => {
  const cfg = aiGetConfig();
  const apiKey = String(cfg.apiKey || "").trim();
  if (!apiKey) {
    throw new Error("Gemini API key is missing. Add it in API Settings.");
  }

  const models = [...new Set([
    cfg.model,
    "gemini-2.5-flash",
    "gemini-2.0-flash"
  ].filter(Boolean))];

  let lastError = null;

  for (const model of models) {
    const url = `${cfg.endpoint}/${model}:generateContent?key=${apiKey}`;
    const body = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: AI_SYSTEM_PROMPT }] },
      generationConfig: {
        temperature:     cfg.temperature,
        maxOutputTokens: cfg.maxOutputTokens,
        topP:            cfg.topP,
        responseMimeType: "application/json"
      }
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errText = await response.text();
      let errMsg = `API error ${response.status}`;
      try {
        const errJson = JSON.parse(errText);
        errMsg = errJson?.error?.message || errMsg;
      } catch { /* use raw text */ }

      const err = new Error(errMsg);
      err.status = response.status;
      err.model = model;
      lastError = err;

      // Retry on quota/rate/model availability issues with lighter models.
      if (aiIsQuotaOrRateError(errMsg, response.status) || response.status === 404) {
        continue;
      }

      throw err;
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      const err = new Error("Empty response from Gemini API.");
      err.model = model;
      lastError = err;
      continue;
    }

    // Parse JSON — strip markdown fences if present
    const cleaned = rawText.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim();
    const parsed = JSON.parse(cleaned);
    parsed._usedModel = model;
    return parsed;
  }

  throw lastError || new Error("Gemini API request failed.");
};

// ── Patient options builder ───────────────────────────────────
const aiPopulatePatients = (deptId) => {
  const wrap = document.getElementById("aiPatientWrap");
  const sel  = document.getElementById("aiPatientSelect");
  const meta = AI_DEPT_META[deptId];
  if (!meta) return;

  if (!meta.needsPatient) { wrap.style.display = "none"; return; }
  wrap.style.display = "flex";
  sel.innerHTML = '<option value="">— All patients —</option>';

  const add = (value, text, group) => {
    if (!group._created) {
      const og = document.createElement("optgroup");
      og.label = group.label;
      sel.appendChild(og);
      group._el = og;
      group._created = true;
    }
    const opt = document.createElement("option");
    opt.value = value; opt.textContent = text;
    group._el.appendChild(opt);
  };

  const vqGroup  = { label: "Verification Queue Records" };
  const dmGroup  = { label: "Diabetes EMR" };
  const htGroup  = { label: "Hypertension EMR" };
  const icuGroup = { label: "ICU Patients" };

  const pool = meta.patientPool;

  if ((pool === "vq" || pool === "all" || pool === "ward" || pool === "opd") && typeof VQ_RECORDS !== "undefined") {
    VQ_RECORDS.forEach((r) => add(r.id, `${r.patientName} (${r.id}) — ${r.department}`, vqGroup));
  }
  if ((pool === "dm" || pool === "all" || pool === "ward" || pool === "opd") && typeof EMR_DIABETES_PATIENTS !== "undefined") {
    EMR_DIABETES_PATIENTS.forEach((p) => add(p.id, `${p.name} — Type 2 DM`, dmGroup));
  }
  if ((pool === "ht" || pool === "all" || pool === "ward" || pool === "opd") && typeof EMR_HT_PATIENTS !== "undefined") {
    EMR_HT_PATIENTS.forEach((p) => add(p.id, `${p.name} — Hypertension`, htGroup));
  }
  if ((pool === "icu" || pool === "all") && typeof EMR_ICU_PATIENTS !== "undefined") {
    EMR_ICU_PATIENTS.forEach((p) => add(p.id, `${p.displayId} — ${p.primaryDx.split("(")[0].trim()}`, icuGroup));
  }
};

// ── Render helpers ────────────────────────────────────────────
const aiEscape = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

let aiLastRenderState = {
  result: null,
  deptId: "",
  patientId: ""
};

const aiRenderOutput = (result, deptId, patientId) => {
  const meta = AI_DEPT_META[deptId];
  const cfg  = aiGetConfig();
  const isThai = currentLang === "th";

  // Show output area
  document.getElementById("aiOutputArea").hidden = false;
  document.getElementById("aiEmptyState").hidden  = true;
  document.getElementById("aiLoadingState").hidden = true;

  // Model badge (header)
  const badge = document.getElementById("aiModelBadge");
  if (badge) badge.textContent = `${result?._usedModel || cfg.model}`;

  // Dept label in banner
  const bannerDept = document.getElementById("aiBannerDept");
  if (bannerDept) {
    const deptLabel = isThai ? (meta.labelTH || meta.label) : meta.label;
    bannerDept.textContent = meta.icon ? `${meta.icon} · ${deptLabel}` : deptLabel;
  }

  const summaryEN = result.summaryEN || "";
  const summaryTH = result.summaryTH || result.summaryEN || "";

  // English summary
  const enEl = document.getElementById("aiSummaryEN");
  if (enEl) enEl.innerHTML = `<p>${aiEscape(summaryEN)}</p>`;

  // Thai summary
  const thEl = document.getElementById("aiSummaryTH");
  if (thEl) thEl.innerHTML = `<p class="ai-thai-text">${aiEscape(summaryTH)}</p>`;

  // Show only one language panel at a time.
  const enPanel = enEl ? enEl.closest(".panel") : null;
  const thPanel = thEl ? thEl.closest(".panel") : null;
  if (enPanel) enPanel.hidden = isThai;
  if (thPanel) thPanel.hidden = !isThai;

  // Key findings
  const findingsEl = document.getElementById("aiKeyFindings");
  const findingsItems = isThai
    ? (result.keyFindingsTH || result.keyFindings || [])
    : (result.keyFindings || result.keyFindingsTH || []);
  if (findingsEl) {
    findingsEl.innerHTML = findingsItems.map((f) => `
      <div class="ai-finding-item">
        <div class="${isThai ? "ai-finding-th" : "ai-finding-en"}">${aiEscape(f)}</div>
      </div>`).join("");
  }

  // Evidence used
  const evidEl = document.getElementById("aiEvidence");
  if (evidEl && result.evidenceUsed) {
    evidEl.innerHTML = result.evidenceUsed.map((e) =>
      `<div class="ai-evidence-item"><span class="ai-evidence-dot"></span>${aiEscape(e)}</div>`
    ).join("");
  }

  // Staff review required
  const reviewEl = document.getElementById("aiReviewItems");
  const reviewItems = isThai
    ? (result.staffReviewRequiredTH || result.staffReviewRequired || [])
    : (result.staffReviewRequired || result.staffReviewRequiredTH || []);
  if (reviewEl) {
    reviewEl.innerHTML = reviewItems.map((r) =>
      `<div class="ai-review-item"><span class="ai-review-icon">!</span>${aiEscape(r)}</div>`
    ).join("") || `<div class="ai-review-item ai-review-ok"><span>OK</span>${isThai ? " ไม่พบประเด็นเร่งด่วนที่ต้องทบทวน" : " No critical review items identified."}</div>`;
  }

  // Timestamp
  const tsEl = document.getElementById("aiTimestamp");
  if (tsEl) {
    const when = new Date().toLocaleString(isThai ? "th-TH" : "en-GB");
    const deptLabel = isThai ? (meta.labelTH || meta.label) : meta.label;
    tsEl.textContent = isThai
      ? `สร้างเมื่อ ${when} · ${deptLabel}${patientId ? " · " + patientId : " · ผู้ป่วยทั้งหมด"}`
      : `Generated ${when} · ${deptLabel}${patientId ? " · " + patientId : " · All patients"}`;
  }

  // Evidence Traceback
  if (patientId) {
    const tbEntries = aiBuildEvidenceTraceback(deptId, patientId);
    aiRenderEvidenceTraceback(tbEntries);
    const tbPanel = document.getElementById("aiEvidenceTracebackPanel");
    if (tbPanel) tbPanel.hidden = false;
  } else {
    const tbPanel = document.getElementById("aiEvidenceTracebackPanel");
    if (tbPanel) {
      tbPanel.hidden = false;
      const el = document.getElementById("aiEvidenceTraceback");
      if (el) el.innerHTML = `<div class="etb-no-evidence">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <div>${isThai
          ? "<strong>การแสดงหลักฐานย้อนกลับต้องเลือกผู้ป่วยรายบุคคล.</strong><p>กรุณาเลือกผู้ป่วยจากรายการเพื่อดูหลักฐานแบบรายฟิลด์และรายช่วงเวลา.</p>"
          : "<strong>Evidence traceback requires a specific patient selection.</strong><p>Select an individual patient from the dropdown to see per-field, per-period evidence for this summary.</p>"}
        </div>
      </div>`;
    }
  }

  aiLastRenderState = { result, deptId, patientId };
};

const aiShowError = (message) => {
  document.getElementById("aiLoadingState").hidden = true;
  document.getElementById("aiOutputArea").hidden = true;
  const errEl = document.getElementById("aiErrorState");
  errEl.hidden = false;
  errEl.innerHTML = `
    <div class="ai-error-inner">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <div>
        <strong>API Error</strong>
        <p>${aiEscape(message)}</p>
        <p class="ai-error-hint">Check your API key in ⚙ API Settings. This project does not include a default key in source code. Get a key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Google AI Studio</a>.</p>
      </div>
    </div>`;
};

// ============================================================
// EVIDENCE TRACEBACK — builds structured traceback from raw EMR
// ============================================================

// ── Helpers ───────────────────────────────────────────────────
const _etbConfidence = (dataPoints, nullCount = 0) => {
  if (dataPoints === 0) return "none";
  const completeness = 1 - nullCount / dataPoints;
  if (dataPoints >= 3 && completeness >= 0.8) return "high";
  if (dataPoints >= 2 && completeness >= 0.5) return "moderate";
  return "low";
};

const _etbRangeLabel = (key, val) => {
  if (val == null) return "missing";
  if (typeof emrRangeClass !== "function") return "normal";
  const cls = emrRangeClass(key, val);
  if (cls === "emr-high")   return "high";
  if (cls === "emr-warn")   return "warn";
  if (cls === "emr-normal") return "normal";
  return "normal";
};

const _etbTrendText = (first, last, unit = "") => {
  if (first == null || last == null) return "Trend unknown — missing data in one or more periods.";
  const diff = +(last - first).toFixed(2);
  const abs  = Math.abs(diff);
  const dir  = diff > 0 ? "increased" : diff < 0 ? "decreased" : "unchanged";
  return diff === 0
    ? `Value remained stable at ${last}${unit} across recorded periods.`
    : `Value ${dir} by ${abs}${unit} from ${first}${unit} to ${last}${unit}.`;
};

const _etbMedChangeSummary = (periods) => {
  const changes = [];
  for (let i = 1; i < periods.length; i++) {
    const prev = periods[i - 1].medications || [];
    const curr = periods[i].medications     || [];
    const added   = curr.filter((m) => !prev.includes(m)).map(_medLabel);
    const removed = prev.filter((m) => !curr.includes(m)).map(_medLabel);
    if (added.length || removed.length)
      changes.push({ period: periods[i].label, added, removed });
  }
  return changes;
};

// ── Per-department builders ───────────────────────────────────

const etbBuildDm = (pt) => {
  const src    = "Diabetes EMR — Srinagarind Hospital KKU";
  const file   = "data_dictionary_diabetes_example.xlsx";
  const pid    = pt.id;
  const hn     = pt.hn;
  const periods= pt.periods;
  const entries = [];

  // 1. HbA1c trend
  const hba1cPers = periods.filter((p) => p.labs.hba1c != null);
  const hba1cFirst = hba1cPers[0]?.labs.hba1c ?? null;
  const hba1cLast  = hba1cPers[hba1cPers.length - 1]?.labs.hba1c ?? null;
  entries.push({
    claim:        "HbA1c trend across recorded periods",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "hba1c",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  p.labs.hba1c != null ? p.labs.hba1c + "%" : null,
      risk:   _etbRangeLabel("hba1c", p.labs.hba1c)
    })),
    trend:      hba1cPers.length >= 2
      ? (hba1cLast - hba1cFirst > 0.2 ? "Worsening" : hba1cLast - hba1cFirst < -0.2 ? "Improving" : "Stable")
      : "Insufficient data",
    reason:     hba1cPers.length >= 2
      ? _etbTrendText(hba1cFirst, hba1cLast, "%")
      : "Not enough evidence available. HbA1c was only recorded in " + hba1cPers.length + " period(s).",
    confidence: _etbConfidence(hba1cPers.length, 0),
    sufficient: hba1cPers.length >= 2
  });

  // 2. FPG trend
  const fpgFirst = periods[0]?.labs.fpg ?? null;
  const fpgLast  = periods[periods.length - 1]?.labs.fpg ?? null;
  entries.push({
    claim:        "Fasting plasma glucose (FPG) trend",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "fpg",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  p.labs.fpg != null ? p.labs.fpg + " mmol/L" : null,
      risk:   _etbRangeLabel("fpg", p.labs.fpg)
    })),
    trend:      periods.length >= 2
      ? (fpgLast - fpgFirst > 0.5 ? "Worsening" : fpgLast - fpgFirst < -0.5 ? "Improving" : "Stable")
      : "Insufficient data",
    reason:     periods.length >= 2
      ? _etbTrendText(fpgFirst, fpgLast, " mmol/L")
      : "Not enough evidence available.",
    confidence: _etbConfidence(periods.length, 0),
    sufficient: periods.length >= 2
  });

  // 3. C-peptide
  const cpepPers  = periods.filter((p) => p.labs.cpeptide != null);
  const cpFirst   = cpepPers[0]?.labs.cpeptide ?? null;
  const cpLast    = cpepPers[cpepPers.length - 1]?.labs.cpeptide ?? null;
  entries.push({
    claim:        "C-peptide availability and value",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "cpeptide",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  p.labs.cpeptide != null ? p.labs.cpeptide + " nmol/L" : null,
      risk:   p.labs.cpeptide == null ? "missing"
            : p.labs.cpeptide < 0.5   ? "high"
            : p.labs.cpeptide < 1.0   ? "warn"
            : "normal"
    })),
    trend:      cpepPers.length >= 2
      ? (cpLast - cpFirst > 0.1 ? "Increasing" : cpLast - cpFirst < -0.1 ? "Decreasing" : "Stable")
      : cpepPers.length === 0 ? "Not recorded" : "Insufficient data",
    reason:     cpepPers.length >= 2
      ? _etbTrendText(cpFirst, cpLast, " nmol/L")
      : cpepPers.length === 0
        ? "Not enough evidence available. C-peptide was not recorded in any period."
        : "C-peptide recorded in only 1 period — trend cannot be determined.",
    confidence: _etbConfidence(cpepPers.length, 0),
    sufficient: cpepPers.length >= 1
  });

  // 4. Blood pressure trend
  const sbpFirst = periods[0]?.vitals.sbp;
  const sbpLast  = periods[periods.length - 1]?.vitals.sbp;
  entries.push({
    claim:        "Blood pressure trend across periods",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "sbp, dbp",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  `${p.vitals.sbp}/${p.vitals.dbp} mmHg`,
      risk:   _etbRangeLabel("sbp", p.vitals.sbp)
    })),
    trend:      sbpLast - sbpFirst > 5 ? "Worsening" : sbpLast - sbpFirst < -5 ? "Improving" : "Stable",
    reason:     _etbTrendText(sbpFirst, sbpLast, " mmHg systolic"),
    confidence: _etbConfidence(periods.length, 0),
    sufficient: periods.length >= 2
  });

  // 5. Medication changes
  const medChanges = _etbMedChangeSummary(periods);
  entries.push({
    claim:        "Medication history by period",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "medications (per period)",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  p.medications.length > 0 ? p.medications.map(_medLabel).join(", ") : "None",
      risk:   "normal"
    })),
    trend:      medChanges.length > 0 ? "Modified" : "Unchanged",
    reason:     medChanges.length > 0
      ? "Medication regimen changed in " + medChanges.length + " period(s). Added: " +
        [...new Set(medChanges.flatMap((c) => c.added))].join(", ") || "none" +
        ". Stopped: " + [...new Set(medChanges.flatMap((c) => c.removed))].join(", ") || "none" + "."
      : "Medication regimen remained consistent across all recorded periods.",
    confidence: _etbConfidence(periods.length, 0),
    sufficient: true
  });

  // 6. Comorbidities
  entries.push({
    claim:        "Diabetes-related comorbidities across periods",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "comorbidities (ht, ckd, cad, hf, stroke)",
    periodValues: periods.map((p) => {
      const active = Object.entries(p.comorbidities).filter(([, v]) => v === 1).map(([k]) => _combLabel(k));
      return { period: p.label, value: active.length > 0 ? active.join(", ") : "None active", risk: active.length > 2 ? "high" : active.length > 0 ? "warn" : "normal" };
    }),
    trend:      "See per-period values",
    reason:     "Comorbidity status documented per 60-day period based on ICD-10 records.",
    confidence: _etbConfidence(periods.length, 0),
    sufficient: true
  });

  return entries;
};

const etbBuildHt = (pt) => {
  const src    = "Hypertension EMR — Srinagarind Hospital KKU";
  const file   = "data_dictionary_hypertension_example.xlsx";
  const pid    = pt.id;
  const hn     = pt.hn;
  const periods= pt.periods;
  const entries = [];

  // 1. Blood pressure trend
  const sbpFirst = periods[0]?.vitals.sbp;
  const sbpLast  = periods[periods.length - 1]?.vitals.sbp;
  entries.push({
    claim:        "Systolic/diastolic blood pressure trend",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "sbp, dbp",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  `${p.vitals.sbp}/${p.vitals.dbp} mmHg`,
      risk:   _etbRangeLabel("sbp", p.vitals.sbp)
    })),
    trend:      sbpLast - sbpFirst > 5 ? "Worsening" : sbpLast - sbpFirst < -5 ? "Improving" : "Stable",
    reason:     _etbTrendText(sbpFirst, sbpLast, " mmHg systolic"),
    confidence: _etbConfidence(periods.length, 0),
    sufficient: periods.length >= 2
  });

  // 2. LDL trend
  const ldlFirst = periods[0]?.labs.ldl;
  const ldlLast  = periods[periods.length - 1]?.labs.ldl;
  entries.push({
    claim:        "LDL cholesterol trend",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "ldl",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  p.labs.ldl != null ? p.labs.ldl + " mg/dL" : null,
      risk:   _etbRangeLabel("ldl", p.labs.ldl)
    })),
    trend:      periods.length >= 2
      ? (ldlLast - ldlFirst > 10 ? "Worsening" : ldlLast - ldlFirst < -10 ? "Improving" : "Stable")
      : "Insufficient data",
    reason:     periods.length >= 2
      ? _etbTrendText(ldlFirst, ldlLast, " mg/dL")
      : "Not enough evidence available.",
    confidence: _etbConfidence(periods.length, 0),
    sufficient: periods.length >= 2
  });

  // 3. proBNP
  const bnpPers  = periods.filter((p) => p.labs.proBNP != null);
  entries.push({
    claim:        "proBNP cardiac marker",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "proBNP",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  p.labs.proBNP != null ? p.labs.proBNP + " pg/mL" : null,
      risk:   p.labs.proBNP == null ? "missing" : p.labs.proBNP > 125 ? "warn" : "normal"
    })),
    trend:      bnpPers.length >= 2 ? "See values" : bnpPers.length === 0 ? "Not recorded" : "Single reading",
    reason:     bnpPers.length === 0
      ? "Not enough evidence available. proBNP was not recorded in any period."
      : "proBNP recorded in " + bnpPers.length + " period(s). Values above 125 pg/mL may indicate cardiac stress.",
    confidence: _etbConfidence(bnpPers.length, 0),
    sufficient: bnpPers.length >= 1
  });

  // 4. Medications
  const medChanges = _etbMedChangeSummary(periods);
  entries.push({
    claim:        "Antihypertensive medication history",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "medications (ARB, ACEI, CCB, beta_blocker, diuretics)",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  p.medications.length > 0 ? p.medications.map(_medLabel).join(", ") : "None",
      risk:   "normal"
    })),
    trend:      medChanges.length > 0 ? "Modified" : "Unchanged",
    reason:     medChanges.length > 0
      ? "Antihypertensive therapy was adjusted in " + medChanges.length + " period(s), indicating treatment titration."
      : "Antihypertensive regimen remained consistent across all recorded periods.",
    confidence: _etbConfidence(periods.length, 0),
    sufficient: true
  });

  // 5. Comorbidities
  entries.push({
    claim:        "Cardiovascular comorbidities",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "comorbidities (dm, cad, hf, stroke, ckd, arrhythmias)",
    periodValues: periods.map((p) => {
      const active = Object.entries(p.comorbidities).filter(([, v]) => v === 1).map(([k]) => _combLabel(k));
      return { period: p.label, value: active.length > 0 ? active.join(", ") : "None active", risk: active.length > 2 ? "high" : active.length > 0 ? "warn" : "normal" };
    }),
    trend:      "See per-period values",
    reason:     "Comorbidity status documented per 60-day period based on ICD-10 records.",
    confidence: _etbConfidence(periods.length, 0),
    sufficient: true
  });

  // 6. Creatinine / renal
  const crFirst = periods[0]?.labs.creatinine;
  const crLast  = periods[periods.length - 1]?.labs.creatinine;
  entries.push({
    claim:        "Renal function (creatinine)",
    dataset:      src,
    sourceFile:   file,
    patientId:    pid,
    hn,
    fieldName:    "creatinine",
    periodValues: periods.map((p) => ({
      period: p.label,
      value:  p.labs.creatinine != null ? p.labs.creatinine + " µmol/L" : null,
      risk:   p.labs.creatinine == null ? "missing" : p.labs.creatinine > 1.2 ? "warn" : "normal"
    })),
    trend:      periods.length >= 2
      ? (crLast - crFirst > 0.15 ? "Worsening" : crLast - crFirst < -0.15 ? "Improving" : "Stable")
      : "Insufficient data",
    reason:     periods.length >= 2
      ? _etbTrendText(crFirst, crLast, " µmol/L")
      : "Not enough evidence available.",
    confidence: _etbConfidence(periods.length, 0),
    sufficient: periods.length >= 2
  });

  return entries;
};

const etbBuildIcu = (pt) => {
  const src     = "ICU Ventilator Dataset — SmartICU / Srinagarind Hospital KKU";
  const entries = [];
  const daysWithData = pt.days.filter((d) => d.captures.some((c) => c.rows?.length > 0));

  // 1. Peak pressure
  entries.push({
    claim:        "Ventilator peak airway pressure",
    dataset:      src,
    sourceFile:   `${pt.id}_day_captures.csv (SmartICU)`,
    patientId:    pt.displayId,
    hn:           pt.hn,
    fieldName:    "pressure (cmH₂O)",
    periodValues: pt.days.map((d) => {
      const caps = d.captures.filter((c) => c.rows?.length > 0);
      if (!caps.length) return { period: `Day ${d.day}`, value: null, risk: "missing" };
      const mx = Math.max(...caps.flatMap((c) => c.rows.map((r) => r.pressure)));
      return { period: `Day ${d.day}`, value: mx.toFixed(1) + " cmH₂O", risk: mx > 40 ? "high" : mx > 30 ? "warn" : "normal" };
    }),
    trend:      daysWithData.length >= 2 ? "See per-day values" : "Insufficient data",
    reason:     daysWithData.length >= 1
      ? "Peak airway pressure values extracted from ventilator CSV waveform captures. Values >30 cmH₂O warrant monitoring; >40 cmH₂O indicates barotrauma risk."
      : "Not enough evidence available. No waveform data was loaded for this patient.",
    confidence: _etbConfidence(daysWithData.length, 0),
    sufficient: daysWithData.length >= 1
  });

  // 2. Mean flow
  entries.push({
    claim:        "Ventilator flow waveform",
    dataset:      src,
    sourceFile:   `${pt.id}_day_captures.csv (SmartICU)`,
    patientId:    pt.displayId,
    hn:           pt.hn,
    fieldName:    "flow (L/min)",
    periodValues: pt.days.map((d) => {
      const caps = d.captures.filter((c) => c.rows?.length > 0);
      if (!caps.length) return { period: `Day ${d.day}`, value: null, risk: "missing" };
      const mean = caps.flatMap((c) => c.rows.map((r) => r.flow)).reduce((a, b) => a + b, 0) / caps.flatMap((c) => c.rows).length;
      return { period: `Day ${d.day}`, value: mean.toFixed(1) + " L/min", risk: "normal" };
    }),
    trend:      "See per-day values",
    reason:     daysWithData.length >= 1
      ? "Mean inspiratory flow values from CSV waveform captures. Significant expiratory flow or drops during suctioning events are flagged."
      : "Not enough evidence available.",
    confidence: _etbConfidence(daysWithData.length, 0),
    sufficient: daysWithData.length >= 1
  });

  // 3. Diagnosis
  entries.push({
    claim:        "ICU diagnosis and operations record",
    dataset:      src,
    sourceFile:   `${pt.id}.json (SmartICU JSON)`,
    patientId:    pt.displayId,
    hn:           pt.hn,
    fieldName:    "dx, op (per day)",
    periodValues: pt.days.map((d) => ({
      period: `Day ${d.day}`,
      value:  d.dx || "Not specified",
      risk:   "normal"
    })),
    trend:      "See per-day values",
    reason:     "Diagnosis and operation records extracted directly from the SmartICU JSON dataset per ICU day.",
    confidence: "high",
    sufficient: true
  });

  return entries;
};

const etbBuildRegistration = (rec) => {
  const src     = "Verification Queue — Nightingale Registration System";
  const entries = [];

  const missingFields = [];
  if (!rec.hn)      missingFields.push("Hospital Number (HN)");
  if (!rec.phone)   missingFields.push("Phone number");
  if (!rec.address) missingFields.push("Address");

  entries.push({
    claim:        "Patient identity verification status",
    dataset:      src,
    sourceFile:   "VQ_RECORDS (in-memory OCR queue)",
    patientId:    rec.id,
    hn:           rec.hn || "Not assigned",
    fieldName:    "ocrConfidence, status, thaiId",
    periodValues: [
      { period: "OCR Confidence",    value: rec.ocrConfidence + "%", risk: rec.ocrConfidence >= 85 ? "normal" : rec.ocrConfidence >= 65 ? "warn" : "high" },
      { period: "Verification Status", value: rec.status,           risk: rec.status === "approved" ? "normal" : rec.status === "pending" ? "warn" : "high" },
      { period: "Thai ID Present",   value: rec.thaiId ? "Yes" : "Missing", risk: rec.thaiId ? "normal" : "high" },
      { period: "HN Assigned",       value: rec.hn     ? "Yes" : "No",      risk: rec.hn     ? "normal" : "warn"  }
    ],
    trend:      rec.status === "approved" ? "Verified" : "Pending review",
    reason:     missingFields.length > 0
      ? `Missing fields detected: ${missingFields.join(", ")}. OCR confidence: ${rec.ocrConfidence}%.`
      : `All key identity fields present. OCR confidence: ${rec.ocrConfidence}%.`,
    confidence: _etbConfidence(1, missingFields.length),
    sufficient: true
  });

  return entries;
};

const etbBuildOpdWard = (patientId) => {
  const entries = [];
  const dmPt = (typeof EMR_DIABETES_PATIENTS !== "undefined")
    ? EMR_DIABETES_PATIENTS.find((p) => "DM:" + p.id === patientId || p.id === patientId) : null;
  const htPt = (typeof EMR_HT_PATIENTS !== "undefined")
    ? EMR_HT_PATIENTS.find((p) => "HT:" + p.id === patientId || p.id === patientId) : null;

  if (dmPt) entries.push(...etbBuildDm(dmPt).slice(0, 3));
  if (htPt) entries.push(...etbBuildHt(htPt).slice(0, 3));

  if (!entries.length) {
    entries.push({
      claim: "Patient clinical history",
      dataset: "EMR (no direct match found)",
      sourceFile: "N/A",
      patientId: patientId || "N/A",
      hn: "N/A",
      fieldName: "N/A",
      periodValues: [],
      trend: "Unknown",
      reason: "Not enough evidence available. No linked EMR record found for this patient in the Diabetes or Hypertension datasets.",
      confidence: "none",
      sufficient: false
    });
  }
  return entries;
};

const aiBuildEvidenceTraceback = (deptId, patientId) => {
  try {
    switch (deptId) {
      case "diabetes":     return etbBuildDm(EMR_DIABETES_PATIENTS.find((p) => p.id === patientId));
      case "hypertension": return etbBuildHt(EMR_HT_PATIENTS.find((p) => p.id === patientId));
      case "icu":          return etbBuildIcu(EMR_ICU_PATIENTS.find((p) => p.id === patientId));
      case "registration": return etbBuildRegistration(VQ_RECORDS.find((r) => r.id === patientId));
      case "opd":
      case "ward":         return etbBuildOpdWard(patientId);
      default:             return [];
    }
  } catch { return []; }
};

// ── Evidence Traceback renderer ───────────────────────────────
const _etbConfBadge = (level) => {
  const map = {
    high:     { cls: "etb-conf-high",     label: "High Confidence"     },
    moderate: { cls: "etb-conf-moderate", label: "Moderate Confidence" },
    low:      { cls: "etb-conf-low",      label: "Low Confidence"      },
    none:     { cls: "etb-conf-none",     label: "No Evidence"         }
  };
  const m = map[level] || map.none;
  return `<span class="etb-confidence-badge ${m.cls}">${m.label}</span>`;
};

const _etbTrendBadge = (trend) => {
  const t = (trend || "").toLowerCase();
  const cls = t.includes("wors") || t.includes("increas") ? "etb-trend-bad"
            : t.includes("improv") || t.includes("decreas") ? "etb-trend-good"
            : "etb-trend-neutral";
  return `<span class="etb-trend-badge ${cls}">${aiEscape(trend)}</span>`;
};

const aiRenderEvidenceTraceback = (entries) => {
  const el = document.getElementById("aiEvidenceTraceback");
  if (!el) return;

  if (!entries || entries.length === 0) {
    el.innerHTML = `<div class="etb-no-evidence">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div><strong>Not enough evidence available.</strong><p>No linked EMR data was found to trace this summary. Ensure a patient is selected and the relevant dataset is loaded.</p></div>
    </div>`;
    return;
  }

  el.innerHTML = entries.map((entry, idx) => {
    const rowsHtml = entry.periodValues.length > 0
      ? `<div class="etb-values-table">
          ${entry.periodValues.map((pv) =>
            `<div class="etb-val-row">
              <span class="etb-val-period">${aiEscape(pv.period)}</span>
              <span class="etb-val-value ${pv.value == null ? "etb-val-missing" : "etb-val-" + pv.risk}">
                ${pv.value != null ? aiEscape(pv.value) : "— not recorded"}
              </span>
            </div>`
          ).join("")}
         </div>`
      : `<div class="etb-val-empty">No per-period values recorded.</div>`;

    return `<div class="etb-entry" id="etb-entry-${idx}">
      <div class="etb-entry-header">
        <div class="etb-entry-claim">${aiEscape(entry.claim)}</div>
        <div class="etb-entry-badges">
          ${_etbTrendBadge(entry.trend)}
          ${_etbConfBadge(entry.confidence)}
        </div>
      </div>
      <div class="etb-meta-row">
        <span class="etb-meta-pill"><span class="etb-meta-key">Dataset</span>${aiEscape(entry.dataset)}</span>
        <span class="etb-meta-pill"><span class="etb-meta-key">Source File</span>${aiEscape(entry.sourceFile)}</span>
        <span class="etb-meta-pill"><span class="etb-meta-key">Patient ID</span>${aiEscape(entry.patientId)}</span>
        <span class="etb-meta-pill"><span class="etb-meta-key">HN</span>${aiEscape(entry.hn)}</span>
        <span class="etb-meta-pill"><span class="etb-meta-key">Field</span><code class="etb-field-name">${aiEscape(entry.fieldName)}</code></span>
      </div>
      ${rowsHtml}
      <div class="etb-reason-row">
        <span class="etb-reason-label">AI Reasoning Note:</span>
        <span class="etb-reason-text ${entry.sufficient ? "" : "etb-reason-insufficient"}">${aiEscape(entry.reason)}</span>
      </div>
    </div>`;
  }).join("");
};

// ── ICU-specific AI prompt (used by ICU page inline AI) ──────
const aiBuildIcuPrompt = (pt, ctx) => {
  const ctxBlock = JSON.stringify(ctx, null, 2);
  return `=== ICU VENTILATOR WAVEFORM ANALYSIS REQUEST ===
Hospital: Srinagarind Hospital, Khon Kaen University, Thailand
Feature: ICU Ventilator AI Summary — Staff Review Tool
Request Date: ${new Date().toLocaleDateString("en-GB")}
Patient: ${pt.displayId} | HN: ${pt.hn} | Age: ${pt.age} | Diagnosis: ${pt.primaryDx}

IMPORTANT SAFETY NOTICE:
This system supports ICU staff review and does NOT replace real-time clinical monitoring.
Do NOT make clinical treatment recommendations.

AVAILABLE DATA:
\`\`\`json
${ctxBlock}
\`\`\`

TASK:
Generate an ICU Ventilator AI Summary for hospital staff review based strictly on the waveform statistics above.
Focus on: ventilator signal patterns (Flow, Pressure, Volume), potential breathing abnormalities detectable from statistics, ICU stay context, and items that require staff clinical attention.

REQUIRED JSON RESPONSE FORMAT:
{
  "summaryEN": "English summary 3-5 sentences. Describe what the waveform data shows. Flag any statistical signals that warrant review.",
  "summaryTH": "สรุปภาษาไทย 3-5 ประโยค สำหรับเจ้าหน้าที่ ICU",
  "keyFindings": [
    "Key waveform observation 1 (English)",
    "Key observation 2 (English)",
    "Key observation 3 (English)"
  ],
  "keyFindingsTH": [
    "การสังเกตสำคัญ 1 (ภาษาไทย)",
    "การสังเกตสำคัญ 2 (ภาษาไทย)",
    "การสังเกตสำคัญ 3 (ภาษาไทย)"
  ],
  "abnormalPatterns": [
    "Abnormal breathing pattern note 1 (if detected)",
    "Pattern note 2"
  ],
  "staffReviewRequired": [
    "Specific waveform value or observation requiring clinical staff review"
  ]
}

RULES:
- Only describe what the statistics show — do NOT diagnose, prescribe, or replace clinical monitoring
- If no waveform CSV data is available, state that clearly in summaryEN and summaryTH
- Pressure > 40 cmH₂O: flag as requiring urgent review
- Pressure 30-40 cmH₂O: flag as elevated
- Note any days with no capture data
- Thai text must use standard Thai medical / ICU terminology
- If abnormalPatterns has nothing to flag, return an empty array []
- Respond ONLY with the JSON object — no markdown, no extra text`;
};

// ── Settings panel ────────────────────────────────────────────
const aiSetupSettings = () => {
  const toggle  = document.getElementById("aiSettingsToggle");
  const panel   = document.getElementById("aiSettingsPanel");
  const saveBtn = document.getElementById("aiSettingsSave");
  const resetBtn= document.getElementById("aiSettingsReset");
  const keyIn   = document.getElementById("aiApiKeyInput");
  const modelIn = document.getElementById("aiModelInput");

  if (!toggle || !panel) return;

  // Pre-fill with current config
  const cfg = aiGetConfig();
  if (keyIn)   keyIn.placeholder   = "Current key hidden — paste new key to replace";
  if (modelIn) modelIn.value = cfg.model;

  toggle.addEventListener("click", () => {
    const open = panel.hidden;
    panel.hidden = !open;
    toggle.classList.toggle("active", open);
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const patch = {};
      if (keyIn?.value.trim())   patch.apiKey = keyIn.value.trim();
      if (modelIn?.value.trim()) patch.model  = modelIn.value.trim();
      if (Object.keys(patch).length) {
        aiSaveConfig(patch);
        const badge = document.getElementById("aiModelBadge");
        if (badge && patch.model) badge.textContent = patch.model;
        panel.hidden = true;
        toggle.classList.remove("active");
        if (keyIn) keyIn.value = "";
        aiShowToast("API settings saved for this session.");
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      aiResetConfig();
      if (modelIn) modelIn.value = GEMINI_CONFIG.model;
      if (keyIn)   keyIn.value   = "";
      const badge = document.getElementById("aiModelBadge");
      if (badge) badge.textContent = GEMINI_CONFIG.model;
      panel.hidden = true;
      toggle.classList.remove("active");
      aiShowToast("Reset to default configuration.");
    });
  }
};

const aiShowToast = (msg) => {
  const t = document.createElement("div");
  t.className = "ai-toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add("ai-toast-show"), 10);
  setTimeout(() => { t.classList.remove("ai-toast-show"); setTimeout(() => t.remove(), 400); }, 3000);
};

// ── Main setup ────────────────────────────────────────────────
const setupAISummary = () => {
  if (typeof GEMINI_CONFIG === "undefined") {
    console.warn("GEMINI_CONFIG not found — load gemini-config.js before ai-summary.js");
    return;
  }

  const deptSel    = document.getElementById("aiDeptSelect");
  const genBtn     = document.getElementById("aiGenerateBtn");

  if (!deptSel || !genBtn) return;

  // Set model badge
  const badge = document.getElementById("aiModelBadge");
  if (badge) badge.textContent = aiGetConfig().model;

  aiSetupSettings();

  // Department change
  deptSel.addEventListener("change", () => {
    const deptId = deptSel.value;
    document.getElementById("aiOutputArea").hidden  = true;
    document.getElementById("aiErrorState").hidden  = true;
    document.getElementById("aiEmptyState").hidden  = false;
    if (deptId) {
      aiPopulatePatients(deptId);
    } else {
      document.getElementById("aiPatientWrap").style.display = "none";
    }
  });

  // Re-render existing output when language changes.
  window.addEventListener("nightingale-lang-change", () => {
    if (aiLastRenderState.result && aiLastRenderState.deptId) {
      aiRenderOutput(aiLastRenderState.result, aiLastRenderState.deptId, aiLastRenderState.patientId);
    }
  });

  // Generate button
  genBtn.addEventListener("click", async () => {
    const deptId    = deptSel.value;
    const patientId = document.getElementById("aiPatientSelect")?.value || "";

    if (!deptId) {
      aiShowToast("Please select a department first.");
      return;
    }

    // Build context
    const context = aiBuildContext(deptId, patientId || null);
    if (!context && AI_DEPT_META[deptId]?.needsPatient && patientId) {
      aiShowToast("Could not load data for selected patient.");
      return;
    }

    // Show loading
    document.getElementById("aiEmptyState").hidden  = true;
    document.getElementById("aiErrorState").hidden  = true;
    document.getElementById("aiOutputArea").hidden  = true;
    document.getElementById("aiLoadingState").hidden = false;
    genBtn.disabled = true;

    // Demo requirement: keep loading state visible for 3 seconds after click.
    await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
      if (deptId === "diabetes" && !patientId) {
        const demoResult = aiBuildDiabetesClinicDemoSummary(context);
        aiRenderOutput(demoResult, deptId, patientId);
        return;
      }

      const prompt = aiBuildPrompt(deptId, context || aiBuildContextAdmin());
      const result = await aiCallGemini(prompt);

      // If request succeeded on a fallback model, keep that model for this session.
      const currentCfg = aiGetConfig();
      if (result?._usedModel && result._usedModel !== "Local fallback" && result._usedModel !== currentCfg.model) {
        aiSaveConfig({ model: result._usedModel });
        const modelIn = document.getElementById("aiModelInput");
        if (modelIn) modelIn.value = result._usedModel;
        aiShowToast(`Switched model to ${result._usedModel} due API limits.`);
      }

      aiRenderOutput(result, deptId, patientId);
    } catch (err) {
      const message = err?.message || "Unknown error";
      const lowMsg = String(message).toLowerCase();
      const keyIssue =
        lowMsg.includes("api key") ||
        lowMsg.includes("permission denied") ||
        lowMsg.includes("forbidden") ||
        lowMsg.includes("unauthorized");

      if (!keyIssue) {
        const fallback = aiBuildLocalFallbackSummary(deptId, context || aiBuildContextAdmin(), message);
        aiRenderOutput(fallback, deptId, patientId);
        aiShowToast("Gemini unavailable or quota exceeded. Showing local fallback summary.");
      } else {
        aiShowError(message);
      }
    } finally {
      genBtn.disabled = false;
      document.getElementById("aiLoadingState").hidden = true;
    }
  });
};
