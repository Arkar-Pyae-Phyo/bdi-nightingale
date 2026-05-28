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
  try {
    const stored = sessionStorage.getItem("nightingale-ai-config");
    if (stored) return { ...GEMINI_CONFIG, ...JSON.parse(stored) };
  } catch { /* ignore */ }
  return { ...GEMINI_CONFIG };
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
    icon:        "🪪",
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
    icon:        "🩺",
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
    icon:        "🩸",
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
    icon:        "❤️",
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
    icon:        "📈",
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
    icon:        "🛏️",
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
    icon:        "📊",
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

// ── Gemini API call ───────────────────────────────────────────
const aiCallGemini = async (prompt) => {
  const cfg = aiGetConfig();
  const url = `${cfg.endpoint}/${cfg.model}:generateContent?key=${cfg.apiKey}`;

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
    throw new Error(errMsg);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error("Empty response from Gemini API.");

  // Parse JSON — strip markdown fences if present
  const cleaned = rawText.replace(/^```json\s*/i, "").replace(/\s*```$/i, "").trim();
  return JSON.parse(cleaned);
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

const aiRenderOutput = (result, deptId, patientId) => {
  const meta = AI_DEPT_META[deptId];
  const cfg  = aiGetConfig();

  // Show output area
  document.getElementById("aiOutputArea").hidden = false;
  document.getElementById("aiEmptyState").hidden  = true;
  document.getElementById("aiLoadingState").hidden = true;

  // Model badge (header)
  const badge = document.getElementById("aiModelBadge");
  if (badge) badge.textContent = `${cfg.model}`;

  // Dept label in banner
  const bannerDept = document.getElementById("aiBannerDept");
  if (bannerDept) bannerDept.textContent = `${meta.icon} ${meta.label}`;

  // English summary
  const enEl = document.getElementById("aiSummaryEN");
  if (enEl) enEl.innerHTML = `<p>${aiEscape(result.summaryEN)}</p>`;

  // Thai summary
  const thEl = document.getElementById("aiSummaryTH");
  if (thEl) thEl.innerHTML = `<p class="ai-thai-text">${aiEscape(result.summaryTH)}</p>`;

  // Key findings
  const findingsEl = document.getElementById("aiKeyFindings");
  if (findingsEl && result.keyFindings) {
    findingsEl.innerHTML = result.keyFindings.map((f, i) => `
      <div class="ai-finding-item">
        <div class="ai-finding-en">${aiEscape(f)}</div>
        ${result.keyFindingsTH?.[i] ? `<div class="ai-finding-th">${aiEscape(result.keyFindingsTH[i])}</div>` : ""}
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
  if (reviewEl && result.staffReviewRequired) {
    reviewEl.innerHTML = result.staffReviewRequired.map((r) =>
      `<div class="ai-review-item"><span class="ai-review-icon">⚠</span>${aiEscape(r)}</div>`
    ).join("") || `<div class="ai-review-item ai-review-ok"><span>✓</span> No critical review items identified.</div>`;
  }

  // Timestamp
  const tsEl = document.getElementById("aiTimestamp");
  if (tsEl) tsEl.textContent = `Generated ${new Date().toLocaleString("en-GB")} · ${meta.label}${patientId ? " · " + patientId : " · All patients"}`;
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
        <p class="ai-error-hint">Check your API key in ⚙ API Settings. The default key may have expired. Get a new key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Google AI Studio</a>.</p>
      </div>
    </div>`;
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

    try {
      const prompt = aiBuildPrompt(deptId, context || aiBuildContextAdmin());
      const result = await aiCallGemini(prompt);
      aiRenderOutput(result, deptId, patientId);
    } catch (err) {
      aiShowError(err.message || "Unknown error");
    } finally {
      genBtn.disabled = false;
      document.getElementById("aiLoadingState").hidden = true;
    }
  });
};
