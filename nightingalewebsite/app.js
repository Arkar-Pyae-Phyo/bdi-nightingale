const translations = {
  en: {

    labelAiNotReplace: "AI does not replace doctors. Clinical staff review is mandatory.",
    labelOcrConfirmation: "OCR data requires staff confirmation.",
    labelAiSummaryReview: "AI summaries require staff review.",
    labelEvidenceTraceback: "Evidence traceback reduces hallucination.",
    labelStandardsCompat: "ICD-10, HL7, and FHIR improve compatibility.",
    pageTitle: "Nightingale Hospital Staff Dashboard",
    brandName: "Nightingale",
    brandTagline: "Hospital Staff Intelligence Console",
    navLogin: "Login",
    navDashboard: "Main Dashboard",
    navIdScan: "ID Scan",
    navQueue: "Verification Queue",
    navProfile: "Patient Profile",
    navDepartmentSummary: "Department Summary",
    navTimeline: "Medical Timeline",
    navIcuAnalysis: "ICU Ventilator Analysis",
    navStandards: "Data Localization & Standards",
    navAdmin: "Admin Settings",
    staffOnly: "Staff-only",
    statusBadge: "Live Queue",
    platformTitle: "Hospital Staff Console",
    platformSubtitle: "Operational intelligence for registration, clinics, ICU, and admin teams.",
    logoutBtn: "Log out",
    newScan: "New Scan",
    dashboardTitle: "Main Dashboard",
    dashboardSubtitle: "Operational overview for today's patient flow.",
    shiftLive: "Shift Live",
    updatedNow: "Updated now",
    statsTotalPatients: "Total patients today",
    statsPendingQueue: "Pending verification queue",
    statsDiabetes: "Diabetes patients",
    statsHypertension: "Hypertension patients",
    statsIcuMonitored: "ICU monitored patients",
    statsHighRisk: "High-risk patient alerts",
    statsMetaLive: "Live",
    statsMetaQueue: "In review",
    statsMetaDiabetes: "Clinic active",
    statsMetaHypertension: "OPD focus",
    statsMetaIcu: "Ventilator watch",
    statsMetaAlert: "Requires action",
    highRiskTitle: "High-risk Patient Alerts",
    highRiskDesc: "Monitor ICU and chronic escalation signals.",
    highRiskView: "View all",
    highRiskAlert1: "SpO2 trending down, ventilator adjustments required.",
    highRiskAlert2: "Glucose spikes overnight, insulin review needed.",
    highRiskAlert3: "Unverified ID scan with missing DOB.",
    alertLevelIcu: "ICU",
    alertLevelWard: "Ward",
    alertLevelOpd: "OPD",
    pendingQueueTitle: "Pending Verification Queue",
    pendingQueueDesc: "Latest scans awaiting staff confirmation.",
    queueItem1: "OCR 88%, address incomplete.",
    queueItem2: "Photo glare, name mismatch.",
    queueItem3: "Duplicate with ICU profile.",
    statusPending: "Pending",
    statusNeedsReview: "Needs Review",
    statusEscalated: "Escalated",
    recentScansTitle: "Recent Scanned ID Records",
    recentScansDesc: "Latest uploads across registration desks.",
    actionExport: "Export",
    tableRecordId: "Record ID",
    tableRecordPatient: "Patient",
    tableRecordDepartment: "Department",
    tableRecordTime: "Scan Time",
    tableRecordStatus: "Status",
    tableRecordAction: "Action",
    recordStatusPending: "Pending",
    recordStatusVerified: "Verified",
    recordStatusReview: "Needs Review",
    actionView: "View",
    actionResume: "Resume",
    loginTitle: "Hospital Staff Login",
    loginSubtitle: "Secure access for verified hospital staff.",
    loginBadge: "Secure access",
    loginLangToggle: "EN / TH",
    loginFormTitle: "Staff sign-in",
    loginFormDesc: "Use your hospital credentials to continue.",
    loginStaffId: "Staff ID",
    loginStaffIdPlaceholder: "STA-20491",
    loginPassword: "Password",
    loginPasswordPlaceholder: "••••••••",
    loginRole: "Role",
    loginRoleRegistration: "Registration Staff",
    loginRoleDoctor: "Doctor",
    loginRoleNurse: "Nurse",
    loginRoleIcu: "ICU Staff",
    loginRoleAdmin: "Admin",
    loginStation: "Station",
    loginStationPlaceholder: "Registration Desk 2",
    loginShift: "Shift",
    loginShiftMorning: "Morning (07:00 - 15:00)",
    loginShiftEvening: "Evening (15:00 - 23:00)",
    loginShiftNight: "Night (23:00 - 07:00)",
    loginRemember: "Remember this device",
    loginPrimary: "Sign In",
    loginSecondary: "Request Access",
    loginSupportTitle: "Security & Shift Overview",
    loginSupportDesc: "Quick checks before accessing patient data.",
    loginCheck1Title: "MFA enabled",
    loginCheck1Detail: "Token verified for this workstation.",
    loginCheck2Title: "Policy training",
    loginCheck2Detail: "Privacy briefing completed this month.",
    loginCheck3Title: "Device status",
    loginCheck3Detail: "Antivirus update pending at 18:00.",
    loginHandoverTitle: "Shift handover notes",
    loginHandoverDesc: "Highlighted tasks for incoming teams.",
    loginHandoverNote1: "Verify ICU ID scans from Bed 12-15.",
    loginHandoverNote2: "OPD backlog: 4 diabetes clinic follow-ups.",
    idScanTitle: "ID Scanning",
    idScanSubtitle: "Capture with camera or upload image, then review OCR extraction.",
    scanCameraTitle: "Camera capture / ถ่ายบัตรด้วยกล้อง",
    scanCameraDesc: "Use the device camera to capture Thai national ID.",
    scanUploadTitle: "Upload ID image / อัปโหลดรูปบัตรประชาชน",
    scanUploadDesc: "Upload a clear photo or scan (JPG/PNG).",
    cameraHint: "Place the ID card within the frame.",
    cameraMeta: "Front desk tablet • Back camera",
    cameraCapture: "Capture ID",
    cameraRetake: "Retake photo",
    uploadHint: "Drag & drop or choose a file.",
    uploadAnother: "Upload another image",
    ocrProcessingTitle: "OCR processing results / ผลลัพธ์ OCR",
    ocrProcessingDesc: "Fields extracted from the ID card. Review and edit if needed.",
    ocrProcessingStatus: "Completed",
    ocrThaiIdLabel: "Thai national ID (เลขบัตรประชาชน)",
    ocrThaiNameLabel: "Thai full name (ชื่อ-นามสกุลภาษาไทย)",
    ocrEnglishNameLabel: "English full name (ชื่อ-นามสกุลภาษาอังกฤษ)",
    ocrDobLabel: "Date of birth (วันเกิด)",
    ocrGenderLabel: "Gender (เพศ)",
    ocrNationalityLabel: "Nationality (สัญชาติ)",
    ocrAddressLabel: "Address (ที่อยู่)",
    ocrIssueDateLabel: "Issue date (วันออกบัตร)",
    ocrExpiryDateLabel: "Expiry date (วันหมดอายุ)",
    ocrPhotoLabel: "Card photo (รูปถ่ายบนบัตร)",
    photoExtracted: "Photo extracted from ID card",
    confidenceHigh: "High / สูง",
    confidenceMedium: "Medium / กลาง",
    confidenceLow: "Low / ต่ำ",
    reviewHint: "Please review this field.",
    editDataBtn: "Edit data",
    verificationRuleTitle: "Important",
    verificationRuleDesc:
      "Do not save to the official patient profile. Always send extracted data to the verification queue first.",
    scanPanelTitle: "Camera & Upload",
    scanPanelDesc: "Scan ID card or upload an image.",
    scanReady: "OCR Ready",
    scanHint: "Align ID card or upload front side (JPG/PNG).",
    cameraBtn: "Open Camera",
    uploadBtn: "Upload ID Image",
    ocrResultTitle: "OCR Extraction Result",
    ocrResultDesc: "Review the extracted identity data.",
    ocrFieldId: "Thai ID",
    ocrFieldName: "Name",
    ocrFieldDob: "DOB",
    ocrFieldAddress: "Address",
    ocrFieldIssue: "Issue Date",
    ocrConfidenceLabel: "OCR confidence score",
    manualEdit: "Manual Edit",
    sendQueue: "Send to Verification Queue",
    registrationTitle: "Auto-filled patient registration",
    registrationDesc: "All fields are editable by hospital staff.",
    regAutoFillNote: "Auto-filled from OCR. Staff can edit every field.",
    regFormAlertTitle: "Missing required fields",
    regFormAlertDesc: "Please review highlighted fields before sending to verification.",
    regFieldRequired: "Required field",
    regSelectOption: "Select",
    regSectionBasicTitle: "Basic Personal Information / ข้อมูลส่วนบุคคล",
    regSectionBasicDesc: "Full name, DOB, gender, and nationality from the ID card.",
    regSectionIdentityTitle: "Identity Verification / การยืนยันตัวตน",
    regSectionIdentityDesc: "Thai ID, ID card image, OCR score, and verification status.",
    regSectionContactTitle: "Contact Information / ข้อมูลติดต่อ",
    regSectionContactDesc: "Phone, email, address, and emergency contacts.",
    regSectionHospitalTitle: "Hospital Information / ข้อมูลโรงพยาบาล",
    regSectionHospitalDesc: "HN, department, registration date, and staff verifier.",
    regSectionConsentTitle: "Consent / ความยินยอม",
    regSectionConsentDesc: "Required before sending to verification queue.",
    regFullName: "Full name / ชื่อเต็ม",
    regThaiName: "Thai name / ชื่อภาษาไทย",
    regEnglishName: "English name / ชื่อภาษาอังกฤษ",
    regDob: "Date of birth / วันเกิด",
    regGender: "Gender / เพศ",
    regNationality: "Nationality / สัญชาติ",
    regProfilePhoto: "Profile photo / รูปโปรไฟล์",
    regThaiIdNumber: "Thai national ID / เลขบัตรประชาชน",
    regIdCardImage: "ID card image / รูปบัตรประชาชน",
    regIdCardHint: "Captured image attached",
    regOcrScore: "OCR confidence score / คะแนน OCR",
    regVerificationStatus: "Staff verification status / สถานะตรวจสอบ",
    regPhone: "Phone number / เบอร์โทรศัพท์",
    regEmail: "Email / อีเมล",
    regEmailPlaceholder: "name@example.com",
    regAddress: "Home address / ที่อยู่บ้าน",
    regEmergencyName: "Emergency contact name / ผู้ติดต่อฉุกเฉิน",
    regEmergencyPhone: "Emergency contact phone / เบอร์ติดต่อฉุกเฉิน",
    regHospitalNumber: "Hospital number (HN) / เลข HN",
    regHospitalPlaceholder: "HN-2026-01983",
    regPatientType: "New or existing patient / ผู้ป่วยใหม่หรือเดิม",
    regPatientTypeNew: "New patient",
    regPatientTypeExisting: "Existing patient",
    regDepartment: "Department assigned / แผนกที่รับผิดชอบ",
    regRegistrationDate: "Registration date / วันที่ลงทะเบียน",
    regVerifiedBy: "Staff who verified / ผู้ตรวจสอบ",
    regConsentCollect: "Consent to collect and store medical data / ยินยอมให้เก็บข้อมูลสุขภาพ",
    regConsentShare: "Consent to share data with authorized staff / ยินยอมให้แชร์ข้อมูลกับบุคลากรที่เกี่ยวข้อง",
    regConsentPolicy: "Privacy policy agreement / ยอมรับนโยบายความเป็นส่วนตัว",
    regSendQueue: "Send to Verification Queue / ส่งไปยังคิวตรวจสอบ",
    scanFieldThaiId: "Thai national ID (เลขบัตรประชาชน)",
    scanFieldThaiName: "Thai full name (ชื่อ-นามสกุลภาษาไทย)",
    scanFieldEnglishName: "English full name (ชื่อ-นามสกุลภาษาอังกฤษ)",
    scanFieldDob: "Date of birth (วันเกิด)",
    scanFieldGender: "Gender (เพศ)",
    scanFieldNationality: "Nationality (สัญชาติ)",
    scanFieldAddress: "Address (ที่อยู่)",
    scanFieldIssueDate: "Issue date (วันออกบัตร)",
    scanFieldExpiryDate: "Expiry date (วันหมดอายุ)",
    scanFieldCardPhoto: "Card photo (รูปถ่ายบนบัตร)",
    replacePhoto: "Replace photo",
    fieldThaiId: "Thai ID",
    fieldFullName: "Full Name",
    fieldDob: "DOB",
    fieldGender: "Gender",
    fieldAddress: "Address",
    fieldPhone: "Phone",
    fieldDepartment: "Department",
    placeholderName: "Pranee Kittikul",
    placeholderAddress: "Bang Kapi, Bangkok",
    placeholderPhone: "08x-xxx-xxxx",
    genderFemale: "Female",
    genderMale: "Male",
    genderOther: "Other",
    nationalityThai: "Thai",
    nationalityOther: "Other",
    deptRegistration: "Registration",
    deptOpd: "OPD",
    deptDiabetesClinic: "Diabetes Clinic",
    deptHypertensionClinic: "Hypertension Clinic",
    deptIcu: "ICU",
    deptWard: "Ward",
    verificationTitle: "Verification Queue",
    verificationSubtitle: "Compare OCR data with editable fields.",
    pendingListTitle: "Pending Scanned IDs",
    pendingListDesc: "Sort by department and urgency.",
    queueFilter: "Filter",
    tableQueueId: "Queue ID",
    tablePatient: "Patient",
    tableStatus: "Status",
    tableAssigned: "Assigned",
    tableAction: "Action",
    actionReview: "Review",
    compareTitle: "Compare OCR vs Editable Fields",
    compareDesc: "Verify fields before approval.",
    compareExtractedTitle: "Extracted OCR Data",
    compareEditableTitle: "Editable Fields",
    approveBtn: "Approve",
    rejectBtn: "Reject",
    rescanBtn: "Request Rescan",
    matchTitle: "Match with Existing Profile",
    matchDesc: "Match with existing patient profile or create new.",
    matchScore: "Match Confidence",
    matchFound: "Match Found",
    matchLastVisit: "Last Visit",
    matchBtn: "Match Profile",
    createBtn: "Create Profile",
    profileTitle: "Patient Profile",
    profileSubtitle: "Identity, demographics, and linked EMR summary.",
    identityTitle: "Identity Information",
    identityDesc: "Verified Thai National ID.",
    labelFullName: "Full Name",
    labelThaiId: "Thai ID",
    labelDob: "DOB",
    labelGender: "Gender",
    demographicsTitle: "Demographics",
    demographicsDesc: "Contact and residency details.",
    labelAge: "Age",
    labelPhone: "Phone",
    labelAddress: "Address",
    labelInsurance: "Insurance",
    hospitalNumberTitle: "Hospital Number",
    hospitalNumberDesc: "Assigned department and care team.",
    labelHospitalNumber: "HN",
    labelPrimaryDept: "Primary Dept",
    labelCareTeam: "Care Team",
    medicalSummaryTitle: "Medical Summary",
    medicalSummaryDesc: "Key diagnoses and monitoring focus.",
    medicalSummaryItem1: "Type 2 diabetes, HbA1c 7.1% (last 30 days).",
    medicalSummaryItem2: "Hypertension on amlodipine 5mg daily.",
    medicalSummaryItem3: "ICU monitoring for respiratory support; SpO2 watch.",
    evidenceTitle: "Evidence Traceback",
    evidenceDesc: "Linked sources for each summary.",
    evidenceItem1: "Lab: HbA1c report (2026-05-03)",
    evidenceItem2: "Medication list (2026-05-14)",
    evidenceItem3: "ICU note: ventilation mode (2026-05-16)",
    evidenceItem4: "Vitals trend (2026-05-18)",
    actionOpen: "Open",
    profileTimelineTitle: "Recent Timeline",
    profileTimelineDesc: "Latest care events across departments.",
    profileTimelineItem1Title: "ICU • Ventilator adjustment",
    profileTimelineItem1Detail: "Reduced PEEP, improved tidal volume.",
    profileTimelineItem2Title: "Lab • Arterial blood gas",
    profileTimelineItem2Detail: "pH 7.39, lactate normal.",
    profileTimelineItem3Title: "OPD • Diabetes consult",
    profileTimelineItem3Detail: "Medication adherence reinforced.",
    deptSummaryTitle: "Department AI Summary",
    deptSummarySubtitle: "Generate department-specific summaries in EN/TH.",
    deptSelectLabel: "Select department",
    deptGenerateBtn: "Generate Summary",
    deptAdmin: "Admin",
    summaryEnglishTitle: "Summary (English)",
    summaryThaiTitle: "Summary (Thai)",
    summaryEnglishBody:
      "ICU census stable. Two ventilated patients require PEEP adjustments. Pending ID verifications: 3 high confidence, 1 rescan needed.",
    summaryThaiBody:
      "จำนวนผู้ป่วย ICU คงที่ มีผู้ป่วยใช้เครื่องช่วยหายใจ 2 รายต้องปรับ PEEP คิวตรวจสอบบัตร 3 รายความมั่นใจสูง และ 1 รายต้องสแกนใหม่",
    summarySignalsTitle: "Key signals",
    summarySignalsDesc: "Signals aggregated from EMR, labs, and ICU monitors.",
    summarySignal1: "Ventilator alarms: 2",
    summarySignal2: "Pending verifications: 4",
    summarySignal3: "High-risk labs: 3",
    longTimelineTitle: "Medical Timeline",
    longTimelineSubtitle: "Patient events across rolling 60-day periods.",
    ltSelectPatient: "Select Patient",
    ltFilterLabel: "Filter",
    ltFilterAll: "All Records",
    ltFilterDm: "Diabetes",
    ltFilterHt: "Hypertension",
    ltFilterIcu: "ICU Events",
    ltIndicatorNormal: "Normal",
    ltIndicatorWarn: "Warning",
    ltIndicatorHigh: "High Risk",
    ltIndicatorMissing: "Missing Data",
    ltVerticalTimelineTitle: "Patient Story Timeline",
    ltVerticalTimelineDesc: "Period-by-period narrative: diagnosis, vitals, labs, medications, and risk highlights.",
    ltEventDmDiagnosis: "Diabetes diagnosis recorded",
    ltEventHtDiagnosis: "Hypertension diagnosis recorded",
    ltEventIcuLinked: "ICU admission linked",
    ltEventStaffReview: "Staff review recommended",
    ltEventMedNone: "No medications recorded",
    ltEventMedAdded: "Medication added",
    ltEventMedStopped: "Medication stopped",
    ltEventMedUnchanged: "Medication unchanged",
    ltEventComorbNew: "New comorbidity",
    ltEventComorb: "Comorbidities",
    ltEventHba1cNotMeasured: "HbA1c: Not measured",
    ltTrendUp: "increased",
    ltTrendDown: "decreased",
    timelineTitle: "Timeline Windows",
    timelineDesc: "Vitals, labs, diagnoses, medications, comorbidities.",
    periodTitle1: "Days 0 - 60",
    periodTitle2: "Days 61 - 120",
    periodTitle3: "Days 121 - 180",
    timelineVitals: "Vitals",
    timelineLabs: "Labs",
    timelineDiagnoses: "Diagnoses",
    timelineMedications: "Medications",
    timelineComorbidities: "Comorbidities",
    period1Vitals: "BP stable, SpO2 96%",
    period1Labs: "HbA1c 7.1%, LDL 112",
    period1Diagnoses: "DM2, HTN",
    period1Medications: "Metformin, Amlodipine",
    period1Comorbidities: "Obesity",
    period2Vitals: "SpO2 94%, RR elevated",
    period2Labs: "CRP 8 mg/L, WBC 11k",
    period2Diagnoses: "Pneumonia",
    period2Medications: "Ceftriaxone, O2",
    period2Comorbidities: "DM2, HTN",
    period3Vitals: "Ventilator support, PEEP 8",
    period3Labs: "ABG normal, lactate 1.2",
    period3Diagnoses: "Respiratory failure",
    period3Medications: "Sedation, insulin",
    period3Comorbidities: "DM2, HTN",
    icuTitle: "ICU Ventilator Analysis",
    icuSubtitle: "Analyze ventilator JSON/CSV and waveform evidence.",
    icuDataSourceTitle: "Data Source",
    icuDataSourceDesc: "Upload or load ICU ventilator data.",
    icuUploadBtn: "Upload JSON/CSV",
    icuLoadSampleBtn: "Load Sample",
    icuDataPatient: "Patient",
    icuDataDevice: "Device",
    icuDataTimeRange: "Time Range",
    icuWaveTitle: "Waveform Summary",
    icuWaveDesc: "Flow, pressure, and volume trends.",
    waveFlow: "Flow",
    waveFlowStatus: "Stable",
    wavePressure: "Pressure",
    wavePressureStatus: "Watch",
    waveVolume: "Volume",
    waveVolumeStatus: "Stable",
    waveNoteFlow: "Minor flow limitation, improved after 07:20.",
    waveNotePressure: "Peak pressure elevated for 12 minutes.",
    waveNoteVolume: "Tidal volume within target range.",
    icuAbnormalTitle: "Abnormal Pattern Notes",
    icuAbnormalDesc: "Detected from waveform analysis.",
    icuAbnormalItem1: "Auto-PEEP risk detected.",
    icuAbnormalItem2: "Pressure spike above 35 cmH2O.",
    icuAbnormalItem3: "Flow drop during suction event.",
    icuEvidenceTitle: "Evidence from Original Data",
    icuEvidenceDesc: "Linked JSON/CSV excerpts.",
    icuEvidenceColumnTime: "Time",
    icuEvidenceColumnSource: "Source",
    icuEvidenceColumnSnippet: "Snippet",
    standardsTitle: "Data Localization & Standards",
    standardsSubtitle: "Mapping ICD-10, HL7, and FHIR to local hospital fields.",
    stdExLocal: "Local",
    stdIcdTitle: "ICD-10 — Diagnosis Classification",
    stdIcdPurpose: "Maps Thai diagnosis text to international disease codes for classification, billing, and epidemiology reporting.",
    stdIcdB1: "Local Thai diagnosis text → ICD-10 code via synonym lookup",
    stdIcdB2: "Supports comorbidity coding (multi-code)",
    stdIcdB3: "Used in MOH reporting and DRG grouping",
    stdHl7Title: "HL7 — Healthcare Data Exchange",
    stdHl7Purpose: "Normalizes hospital ADT, ORM, and ORU message feeds for real-time data exchange with existing hospital information systems.",
    stdHl7B1: "ADT (Admit/Discharge/Transfer) events",
    stdHl7B2: "ORM — Order messages (lab, medication)",
    stdHl7B3: "ORU — Result messages (lab results, waveforms)",
    stdFhirTitle: "FHIR — Modern EMR Interoperability",
    stdFhirPurpose: "Exposes hospital data as standardized FHIR R4 resources, enabling interoperability with modern EMR systems, mobile apps, and national health platforms.",
    stdFhirB1: "Patient, Encounter, Observation resources",
    stdFhirB2: "MedicationStatement and MedicationRequest",
    stdFhirB3: "RESTful API with JSON payloads",
    stdMappingTitle: "Field Mapping Table",
    stdMappingDesc: "Complete mapping of Srinagarind Hospital local fields to international standards.",
    stdColLocalField: "Local Hospital Field",
    stdColEnglish: "English Field Name",
    stdColThai: "Thai Field Name",
    stdColStandard: "Standard Mapping",
    stdColExample: "Example Value",
    stdColStatus: "Status",
    stdStatusActive: "Active",
    stdStatusPending: "Pending",
    stdPipelineTitle: "Import / Export Data Pipeline",
    stdPipelineDesc: "How local hospital data flows into and out of this system.",
    stdStepImportTitle: "Import",
    stdStepImportDesc: "Local hospital CSV / JSON",
    stdStepImportI1: "CSV with Thai column headers",
    stdStepImportI2: "JSON from HIS / EMR export",
    stdStepImportI3: "SmartICU waveform CSV (25 Hz)",
    stdStepMapTitle: "Internal Mapping",
    stdStepMapDesc: "Normalize to standard format",
    stdStepMapI1: "Field name normalization",
    stdStepMapI2: "Value type validation & coercion",
    stdStepMapI3: "ICD / LOINC / SNOMED code lookup",
    stdStepExportTitle: "Export",
    stdStepExportDesc: "HL7 / FHIR-compatible output",
    stdStepExportI1: "HL7 v2.5 ADT / ORU messages",
    stdStepExportI2: "FHIR R4 JSON Bundle",
    stdStepExportI3: "National Health Data Exchange",
    stdDxExTitle: "Diagnosis Mapping Examples",
    stdDxExDesc: "Common Thai diagnosis texts and their ICD-10 codes.",
    stdFhirExTitle: "FHIR R4 Bundle Example",
    stdFhirExDesc: "Local EMR fields mapped to Patient, Observation, and MedicationStatement resources.",
    staffReviewRequired: "Staff Review Required",
    icd10Mapping: "ICD-10 Mapping",
    fhirCompatibility: "FHIR Compatibility",
    icuSelectPatientLabel: "Select ICU Patient",
    icuSelectOption: "— Select ICU patient —",
    icuDayLabel: "Day",
    icuEmptyMain: "Select an ICU patient to view ventilator waveform analysis.",
    icuEmptySub: "SmartICU dataset — Flow, Pressure, Volume signals at 25 Hz — Srinagarind Hospital KKU",
    icuPatientDemoTitle: "Patient Demographics",
    icuPatientDemoDesc: "From SmartICU JSON dataset.",
    icuStayTitle: "ICU Stay Timeline",
    icuStayDesc: "Recorded days and capture count.",
    icuWaveSignalTitle: "Waveform Signal Summary",
    icuWaveSignalDesc: "Statistical overview of Flow, Pressure, and Volume per capture. Source: CSV waveform exports.",
    icuNoWaveNote: "No waveform CSV data available for captures on this day.",
    icuWaveChartsTitle: "Waveform Charts",
    icuWaveChartsDesc: "Flow, Pressure, and Volume time series from loaded capture(s). X-axis: sample index at 25 Hz (1 sample = 40 ms).",
    icuCaptureLabel: "Capture",
    icuCaptureLogTitle: "Capture Log",
    icuCaptureLogDesc: "Hourly ventilator recordings for selected day.",
    icuPatternTitle: "Abnormal Pattern Detection",
    icuPatternDesc: "Waveform pattern analysis from signal statistics. For staff review only — not a clinical diagnosis.",
    icuStaffReviewOnly: "Staff Review Only",
    icuDxOpTitle: "Diagnosis & Operation Record",
    icuDxOpDesc: "As documented in the ICU JSON file for selected day.",
    icuAiPanelTitle: "AI Ventilator Summary",
    icuAiPanelDesc: "AI-generated analysis from waveform statistics and clinical context. Powered by Gemini.",
    icuAiGenBtnText: "Generate AI Summary",
    icuAiSafetyNote: "This feature supports ICU staff review and does not replace real-time clinical monitoring.",
    icuAiLoadingText: "Analysing waveform data with Gemini AI\u2026",
    icuAiEmptyText: "Select a patient with waveform data, then click Generate AI Summary.",
    icuKeyFindingsLabel: "Key Findings",
    icuAbnPatternsLabel: "Abnormal Breathing Pattern Notes",
    icuStaffReviewLabel: "Staff Review Recommendations",
    icuEtbTitle: "Evidence Traceback",
    icuEtbDesc: "Original raw signal data behind the AI analysis — field name, per-day values, and reasoning note.",
    icuEtbVerified: "Verified from ICU CSV/JSON",
    icuDisclaimerText: "Waveform statistics are computed from raw CSV exports (SmartICU dataset, Srinagarind Hospital KKU). This feature supports ICU staff review and does not replace real-time clinical monitoring.",
    adminTitle: "Admin Settings",
    adminSubtitle: "Manage departments, roles, languages, and mappings.",
    adminDeptTitle: "Manage Departments",
    adminDeptDesc: "Enable, rename, or reorder departments.",
    adminActionAddDept: "Add Department",
    adminRoleTitle: "Manage User Roles",
    adminRoleDesc: "Configure access levels and permissions.",
    adminActionAddRole: "Add Role",
    adminLangTitle: "Manage Language",
    adminLangDesc: "Default UI language and terminology.",
    adminLangLabel: "Default Language",
    adminActionSaveLang: "Save Language",
    adminMappingTitle: "Manage Hospital Data Mapping",
    adminMappingDesc: "Update local-to-standard mappings.",
    adminActionEdit: "Edit",
    vqSubtitle: "Review OCR-extracted patient identity records before updating the official EMR.",
    vqSafetyEn: "AI extracted data must be reviewed and approved by authorized hospital staff before becoming part of the official EMR.",
    vqSafetyTh: "ข้อมูลที่ AI/OCR ดึงออกมาต้องได้รับการตรวจสอบและอนุมัติจากบุคลากรโรงพยาบาลที่ได้รับอนุญาตก่อน จึงจะถือเป็นส่วนหนึ่งของเวชระเบียนอย่างเป็นทางการ",
    vqQueueTitle: "Patient Identity Records",
    vqQueueDesc: "Scans awaiting staff verification.",
    vqStatTotal: "Total Records",
    vqStatPending: "Pending",
    vqStatNeedsRescan: "Needs Rescan",
    vqStatApproved: "Approved Today",
    vqStatRejected: "Rejected",
    vqFilterAll: "All",
    vqFilterPending: "Pending",
    vqFilterNeedsRescan: "Needs Rescan",
    vqFilterApproved: "Approved",
    vqFilterRejected: "Rejected",
    vqColPatient: "Patient",
    vqColThaiId: "Thai National ID",
    vqColScanTime: "Scan Time",
    vqColConfidence: "OCR %",
    vqColStatus: "Status",
    vqColAssigned: "Assigned",
    vqColAction: "Action",
    vqStatusPending: "Pending",
    vqStatusApproved: "Approved",
    vqStatusRejected: "Rejected",
    vqStatusNeedsRescan: "Needs Rescan",
    vqBtnReview: "Review",
    vqSelectPrompt: "Select a record from the queue to begin review",
    vqSection1: "Original ID Card Image",
    vqSection1Desc: "Scanned image received from registration desk.",
    vqSection2: "OCR Extracted Data",
    vqSection2Desc: "Automatically extracted — not yet verified by staff.",
    vqSection3: "Editable Confirmation Form",
    vqSection3Desc: "Correct any errors before approving.",
    vqSection4: "Possible Patient Matches",
    vqSection4Desc: "Based on Thai ID, name, DOB, HN, and phone number.",
    vqSection5: "Approval Controls",
    vqSection5Desc: "Your decision is final and logged to the audit trail.",
    vqEditHint: "Edit any field. All changes are logged with your staff ID.",
    vqOcrConfLabel: "OCR Confidence",
    vqOcrHigh: "High",
    vqOcrMedium: "Medium",
    vqOcrLow: "Low",
    vqFieldThaiId: "Thai National ID",
    vqFieldThaiName: "Thai Full Name",
    vqFieldEnName: "English Full Name",
    vqFieldDob: "Date of Birth",
    vqFieldGender: "Gender",
    vqFieldAddress: "Address",
    vqFieldPhone: "Phone",
    vqFieldDept: "Department",
    vqFieldNotes: "Staff Notes",
    vqMatchHn: "HN",
    vqMatchLastVisit: "Last Visit",
    vqMatchScore: "Match Score",
    vqMatchFields: "Matched on",
    vqMatchDept: "Dept",
    vqBtnSelectMatch: "Select",
    vqMatchSelected: "Selected",
    vqNoMatches: "No existing patient matches found. A new patient profile will be created upon approval.",
    vqBtnApproveNew: "Approve & Create New Patient Profile",
    vqBtnApproveMatch: "Approve & Link to Matched Profile",
    vqBtnEditFields: "Edit Incorrect Fields",
    vqBtnReject: "Reject Record",
    vqBtnRescan: "Request Rescan",
    vqAuditNote: "Your decision will be recorded with your staff ID, station, and timestamp.",
    vqBtnCancel: "Cancel",
    vqDialogApproveNewTitle: "Create New Patient Profile",
    vqDialogApproveNewBody: "This will create a new official patient record in the EMR. This action cannot be undone.",
    vqDialogApproveMatchTitle: "Link to Existing Profile",
    vqDialogApproveMatchBody: "This will link the verified OCR data to the selected existing patient profile.",
    vqDialogRejectTitle: "Reject This Record",
    vqDialogRejectBody: "This record will be marked as rejected. The patient may need to re-register.",
    vqDialogRescanTitle: "Request Rescan",
    vqDialogRescanBody: "The patient will be directed to rescan their Thai ID card.",
    vqDialogConfirm: "Confirm",
    vqReasonPlaceholder: "Enter reason (optional)...",
    vqToastApproveNew: "Patient profile created successfully.",
    vqToastApproveMatch: "Record linked to existing profile.",
    vqToastReject: "Record rejected and flagged.",
    vqToastRescan: "Rescan requested.",
    vqDescApproveNew: "Create a new official EMR record for this patient.",
    vqDescApproveMatch: "Link to the selected existing patient profile.",
    vqDescEditFields: "Scroll up to the form to correct any fields.",
    vqDescReject: "Flag this record as invalid or unreadable.",
    vqDescRescan: "Send back for a clearer ID card scan.",
    // ── Audit Log ──
    auditLogTitle: "Audit Log",
    auditLogSubtitle: "Complete trail of all staff actions on patient records.",
    auditColEntry: "Entry ID",
    auditColAction: "Action",
    auditColStaff: "Staff",
    auditColPatient: "Patient",
    auditColDetails: "Details",
    auditColTime: "Timestamp",
    auditStatTotal: "Total Entries",
    auditStatToday: "Today",
    auditStatApproved: "Approved",
    auditStatRejected: "Rejected",
    auditStatDenied: "Access Denied",
    auditFilterAll: "All Actions",
    auditFilterScan: "ID Scan",
    auditFilterQueue: "Queue",
    auditFilterApprove: "Approved",
    auditFilterReject: "Rejected",
    auditFilterEdit: "Edited",
    auditFilterDeny: "Denied",
    auditEmpty: "No audit entries recorded in this session.",
    auditExportBtn: "Export CSV",
    auditPrivacyNote: "All actions on patient data are logged with staff ID, role, station, and timestamp. Audit records are session-scoped and must be exported for permanent retention.",
    // ── Access Denied ──
    accessDeniedTitle: "Access Restricted",
    accessDeniedDesc: "Your current role does not have permission to view this section.",
    accessDeniedRoleLabel: "Your role",
    accessDeniedRequired: "Required role(s)",
    accessDeniedBackBtn: "Return to Dashboard",
    // ── Privacy rules ──
    privacyAiWarning: "AI-generated content — staff review required before clinical use.",
    privacyNoEMRUpdate: "Do not update the official EMR without explicit staff confirmation.",
    privacyAuditRequired: "All approvals, rejections, and edits are logged with your staff ID.",
    // ── Demo Guide ──
    demoGuideTitle: "Hospital Workflow Demo Guide",
    demoGuideSubtitle: "Follow these steps to experience the complete Nightingale platform workflow.",
    demoStep1: "<strong>1. Sign In:</strong> Log in as Registration Staff on the <a href='#' onclick='setActivePage(\"login\"); return false;'>Login page</a>.",
    demoStep2: "<strong>2. Patient ID Extraction:</strong> Go to <a href='#' onclick='setActivePage(\"id-scan\"); return false;'>Thai ID Scan</a> and upload a mock ID or use a camera to extract identity via OCR to auto-fill registration.",
    demoStep3: "<strong>3. Verify Data:</strong> Admins or Registration staff review extracted data in the <a href='#' onclick='setActivePage(\"verification\"); return false;'>Verification Queue</a> to securely match or create a profile.",
    demoStep4: "<strong>4. AI Summarization:</strong> Log in as a Doctor or Nurse, access <a href='#' onclick='setActivePage(\"department-summary\"); return false;'>Department Summary</a> or <a href='#' onclick='setActivePage(\"icu-analysis\"); return false;'>ICU Analysis</a>. Click <em>Generate Summary</em> for instant, bilingual clinical insights.",
    demoStep5: "<strong>5. Evidence Traceback:</strong> Inside AI summaries, click data points to reveal the transparent evidence traceback from original CSV/JSON sources.",
    demoStep6: "<strong>6. Longitudinal Timeline:</strong> Open the <a href='#' onclick='setActivePage(\"longitudinal\"); return false;'>Medical Timeline</a> to trace long-term chronic conditions seamlessly across visits.",
    demoStep7: "<strong>7. System Audit:</strong> Log in as Admin to review the <a href='#' onclick='setActivePage(\"audit-log\"); return false;'>Audit Log</a> trails."
  },
  th: {

    labelAiNotReplace: "AI ไม่ได้แทนที่แพทย์ การตัดสินใจทางคลินิกเป็นสิ่งจำเป็น",
    labelOcrConfirmation: "ข้อมูลสแกน (OCR) จำเป็นต้องได้รับการยืนยันจากเจ้าหน้าที่",
    labelAiSummaryReview: "บทสรุปจาก AI ต้องได้รับการตรวจสอบจากเจ้าหน้าที่",
    labelEvidenceTraceback: "การติดตามแหล่งที่มา (Traceback) ช่วยลดความคลาดเคลื่อน (Hallucination)",
    labelStandardsCompat: "ICD-10, HL7 และ FHIR ช่วยเพิ่มความเข้ากันได้ของระบบ",
    pageTitle: "แดชบอร์ดบุคลากรโรงพยาบาล Nightingale",
    brandName: "Nightingale",
    brandTagline: "ศูนย์ข้อมูลสำหรับบุคลากรโรงพยาบาล",
    navLogin: "เข้าสู่ระบบ",
    navDashboard: "แดชบอร์ดหลัก",
    navIdScan: "สแกนบัตรประชาชนไทย",
    navQueue: "คิวตรวจสอบข้อมูล",
    navProfile: "ข้อมูลผู้ป่วย",
    navDepartmentSummary: "สรุปข้อมูลตามแผนก",
    navTimeline: "ไทม์ไลน์ประวัติการรักษา",
    navIcuAnalysis: "วิเคราะห์เครื่องช่วยหายใจ ICU",
    navStandards: "การปรับข้อมูลและมาตรฐาน",
    navAdmin: "ตั้งค่าผู้ดูแลระบบ",
    staffOnly: "สำหรับเจ้าหน้าที่เท่านั้น",
    statusBadge: "คิวสด",
    platformTitle: "ศูนย์ควบคุมบุคลากรโรงพยาบาล Nightingale",
    platformSubtitle: "ข้อมูลเชิงปฏิบัติการสำหรับงานลงทะเบียน คลินิก ICU และผู้ดูแลระบบ",
    logoutBtn: "ออกจากระบบ",
    newScan: "สแกนใหม่",
    dashboardTitle: "แดชบอร์ดหลัก",
    dashboardSubtitle: "ภาพรวมการให้บริการผู้ป่วยของวันนี้",
    shiftLive: "เวรปฏิบัติงาน",
    updatedNow: "อัปเดตล่าสุด",
    statsTotalPatients: "ผู้ป่วยทั้งหมดวันนี้",
    statsPendingQueue: "คิวตรวจสอบที่รอดำเนินการ",
    statsDiabetes: "ผู้ป่วยเบาหวาน",
    statsHypertension: "ผู้ป่วยความดันโลหิตสูง",
    statsIcuMonitored: "ผู้ป่วย ICU ที่เฝ้าติดตาม",
    statsHighRisk: "แจ้งเตือนผู้ป่วยความเสี่ยงสูง",
    statsMetaLive: "แบบเรียลไทม์",
    statsMetaQueue: "กำลังตรวจสอบ",
    statsMetaDiabetes: "คลินิกกำลังทำงาน",
    statsMetaHypertension: "โฟกัสผู้ป่วยนอก",
    statsMetaIcu: "ติดตามเครื่องช่วยหายใจ",
    statsMetaAlert: "ต้องดำเนินการ",
    highRiskTitle: "แจ้งเตือนผู้ป่วยความเสี่ยงสูง",
    highRiskDesc: "ติดตามสัญญาณวิกฤตจาก ICU และโรคเรื้อรัง",
    highRiskView: "ดูทั้งหมด",
    highRiskAlert1: "SpO2 ลดลง ต้องปรับเครื่องช่วยหายใจ",
    highRiskAlert2: "น้ำตาลขึ้นสูงช่วงกลางคืน ต้องปรับอินซูลิน",
    highRiskAlert3: "สแกนบัตรยังไม่ยืนยันและขาดวันเกิด",
    alertLevelIcu: "ICU",
    alertLevelWard: "วอร์ด",
    alertLevelOpd: "ผู้ป่วยนอก",
    pendingQueueTitle: "คิวตรวจสอบที่รอดำเนินการ",
    pendingQueueDesc: "รายการสแกนล่าสุดที่รอเจ้าหน้าที่ตรวจสอบ",
    queueItem1: "OCR 88% ขาดข้อมูลที่อยู่",
    queueItem2: "ภาพสะท้อน แก้ไขชื่อ",
    queueItem3: "ซ้ำกับโปรไฟล์ ICU",
    statusPending: "รอดำเนินการ",
    statusNeedsReview: "ต้องตรวจสอบ",
    statusEscalated: "ยกระดับ",
    recentScansTitle: "บันทึกการสแกนล่าสุด",
    recentScansDesc: "อัปโหลดล่าสุดจากจุดลงทะเบียน",
    actionExport: "ส่งออก",
    tableRecordId: "รหัสรายการ",
    tableRecordPatient: "ผู้ป่วย",
    tableRecordDepartment: "แผนก",
    tableRecordTime: "เวลาสแกน",
    tableRecordStatus: "สถานะ",
    tableRecordAction: "การทำงาน",
    recordStatusPending: "รอดำเนินการ",
    recordStatusVerified: "ยืนยันแล้ว",
    recordStatusReview: "ต้องตรวจสอบ",
    actionView: "ดู",
    actionResume: "ดำเนินการต่อ",
    loginTitle: "เข้าสู่ระบบบุคลากรโรงพยาบาล",
    loginSubtitle: "เข้าระบบอย่างปลอดภัยสำหรับเจ้าหน้าที่ที่ผ่านการยืนยัน",
    loginBadge: "การเข้าถึงแบบปลอดภัย",
    loginLangToggle: "EN / TH",
    loginFormTitle: "ลงชื่อเข้าใช้",
    loginFormDesc: "ใช้บัญชีของโรงพยาบาลเพื่อดำเนินการต่อ",
    loginStaffId: "รหัสเจ้าหน้าที่",
    loginStaffIdPlaceholder: "STA-20491",
    loginPassword: "รหัสผ่าน",
    loginPasswordPlaceholder: "••••••••",
    loginRole: "บทบาท",
    loginRoleRegistration: "เจ้าหน้าที่ลงทะเบียน",
    loginRoleDoctor: "แพทย์",
    loginRoleNurse: "พยาบาล",
    loginRoleIcu: "เจ้าหน้าที่ ICU",
    loginRoleAdmin: "ผู้ดูแลระบบ",
    loginStation: "จุดปฏิบัติงาน",
    loginStationPlaceholder: "เคาน์เตอร์ลงทะเบียน 2",
    loginShift: "เวร",
    loginShiftMorning: "เช้า (07:00 - 15:00)",
    loginShiftEvening: "บ่าย (15:00 - 23:00)",
    loginShiftNight: "ดึก (23:00 - 07:00)",
    loginRemember: "จดจำอุปกรณ์นี้",
    loginPrimary: "เข้าสู่ระบบ",
    loginSecondary: "ขอสิทธิ์เข้าใช้งาน",
    loginSupportTitle: "ความปลอดภัยและภาพรวมเวร",
    loginSupportDesc: "ตรวจสอบก่อนเข้าถึงข้อมูลผู้ป่วย",
    loginCheck1Title: "เปิดใช้งาน MFA",
    loginCheck1Detail: "ยืนยันโทเคนสำหรับเครื่องนี้แล้ว",
    loginCheck2Title: "อบรมข้อกำหนด",
    loginCheck2Detail: "ผ่านการอบรมความเป็นส่วนตัวเดือนนี้แล้ว",
    loginCheck3Title: "สถานะอุปกรณ์",
    loginCheck3Detail: "รออัปเดตแอนติไวรัสเวลา 18:00",
    loginHandoverTitle: "บันทึกส่งต่องานเวร",
    loginHandoverDesc: "งานสำคัญสำหรับทีมต่อไป",
    loginHandoverNote1: "ตรวจสอบสแกนบัตร ICU เตียง 12-15",
    loginHandoverNote2: "คิว OPD: เบาหวานติดตาม 4 ราย",
    idScanTitle: "สแกนบัตรประชาชนไทย",
    idScanSubtitle: "ถ่ายด้วยกล้องหรืออัปโหลดภาพ แล้วตรวจสอบผล OCR",
    scanCameraTitle: "ถ่ายบัตรด้วยกล้อง / Camera capture",
    scanCameraDesc: "ใช้กล้องอุปกรณ์เพื่อถ่ายบัตรประชาชน",
    scanUploadTitle: "อัปโหลดรูปบัตรประชาชน / Upload ID image",
    scanUploadDesc: "อัปโหลดภาพหรือสแกนที่ชัดเจน (JPG/PNG)",
    cameraHint: "วางบัตรในกรอบให้ครบถ้วน",
    cameraMeta: "แท็บเล็ตหน้าเคาน์เตอร์ • กล้องหลัง",
    cameraCapture: "ถ่ายบัตร",
    cameraRetake: "ถ่ายใหม่",
    uploadHint: "ลากไฟล์มาวางหรือเลือกไฟล์",
    uploadAnother: "อัปโหลดภาพอื่น",
    ocrProcessingTitle: "ผลลัพธ์ OCR / OCR processing results",
    ocrProcessingDesc: "ข้อมูลถูกดึงจากบัตรแล้ว โปรดตรวจสอบและแก้ไข",
    ocrProcessingStatus: "เสร็จสิ้น",
    ocrThaiIdLabel: "เลขบัตรประชาชน (Thai national ID)",
    ocrThaiNameLabel: "ชื่อ-นามสกุลภาษาไทย (Thai full name)",
    ocrEnglishNameLabel: "ชื่อ-นามสกุลภาษาอังกฤษ (English full name)",
    ocrDobLabel: "วันเกิด (Date of birth)",
    ocrGenderLabel: "เพศ (Gender)",
    ocrNationalityLabel: "สัญชาติ (Nationality)",
    ocrAddressLabel: "ที่อยู่ (Address)",
    ocrIssueDateLabel: "วันออกบัตร (Issue date)",
    ocrExpiryDateLabel: "วันหมดอายุ (Expiry date)",
    ocrPhotoLabel: "รูปถ่ายบนบัตร (Card photo)",
    photoExtracted: "ดึงภาพจากบัตรประชาชนแล้ว",
    confidenceHigh: "สูง / High",
    confidenceMedium: "กลาง / Medium",
    confidenceLow: "ต่ำ / Low",
    reviewHint: "โปรดตรวจสอบข้อมูลนี้",
    editDataBtn: "แก้ไขข้อมูล",
    verificationRuleTitle: "ข้อสำคัญ",
    verificationRuleDesc: "ห้ามบันทึกลงโปรไฟล์ผู้ป่วยโดยตรง ต้องส่งเข้าคิวตรวจสอบก่อนเสมอ",
    scanPanelTitle: "กล้องและอัปโหลด",
    scanPanelDesc: "สแกนบัตรหรืออัปโหลดรูปภาพ",
    scanReady: "พร้อม OCR",
    scanHint: "จัดวางบัตรหรืออัปโหลดด้านหน้าบัตร (JPG/PNG)",
    cameraBtn: "เปิดกล้อง",
    uploadBtn: "อัปโหลดรูปบัตร",
    ocrResultTitle: "ผลลัพธ์ OCR",
    ocrResultDesc: "ตรวจสอบข้อมูลที่ดึงมา",
    ocrFieldId: "เลขบัตรประชาชน",
    ocrFieldName: "ชื่อ-นามสกุล",
    ocrFieldDob: "วันเกิด",
    ocrFieldAddress: "ที่อยู่",
    ocrFieldIssue: "วันออกบัตร",
    ocrConfidenceLabel: "คะแนนความมั่นใจของ OCR",
    manualEdit: "แก้ไขด้วยตนเอง",
    sendQueue: "ส่งเข้าคิวตรวจสอบ",
    registrationTitle: "ลงทะเบียนผู้ป่วยอัตโนมัติ",
    registrationDesc: "ทุกช่องสามารถแก้ไขได้โดยเจ้าหน้าที่",
    regAutoFillNote: "กรอกอัตโนมัติจาก OCR เจ้าหน้าที่สามารถแก้ไขได้ทุกช่อง",
    regFormAlertTitle: "ข้อมูลจำเป็นไม่ครบ",
    regFormAlertDesc: "โปรดตรวจสอบช่องที่ไฮไลต์ก่อนส่งเข้าคิวตรวจสอบ",
    regFieldRequired: "ต้องระบุ",
    regSelectOption: "เลือก",
    regSectionBasicTitle: "ข้อมูลส่วนบุคคล / Basic Personal Information",
    regSectionBasicDesc: "ชื่อ วันเกิด เพศ และสัญชาติจากบัตรประชาชน",
    regSectionIdentityTitle: "การยืนยันตัวตน / Identity Verification",
    regSectionIdentityDesc: "เลขบัตร รูปบัตร คะแนน OCR และสถานะตรวจสอบ",
    regSectionContactTitle: "ข้อมูลติดต่อ / Contact Information",
    regSectionContactDesc: "โทรศัพท์ อีเมล ที่อยู่ และผู้ติดต่อฉุกเฉิน",
    regSectionHospitalTitle: "ข้อมูลโรงพยาบาล / Hospital Information",
    regSectionHospitalDesc: "HN แผนก วันที่ลงทะเบียน และผู้ตรวจสอบ",
    regSectionConsentTitle: "ความยินยอม / Consent",
    regSectionConsentDesc: "จำเป็นก่อนส่งเข้าคิวตรวจสอบ",
    regFullName: "ชื่อเต็ม / Full name",
    regThaiName: "ชื่อภาษาไทย / Thai name",
    regEnglishName: "ชื่อภาษาอังกฤษ / English name",
    regDob: "วันเกิด / Date of birth",
    regGender: "เพศ / Gender",
    regNationality: "สัญชาติ / Nationality",
    regProfilePhoto: "รูปโปรไฟล์ / Profile photo",
    regThaiIdNumber: "เลขบัตรประชาชน / Thai national ID",
    regIdCardImage: "รูปบัตรประชาชน / ID card image",
    regIdCardHint: "แนบรูปจากการสแกนแล้ว",
    regOcrScore: "คะแนนความมั่นใจ OCR / OCR confidence score",
    regVerificationStatus: "สถานะตรวจสอบโดยเจ้าหน้าที่ / Staff verification status",
    regPhone: "เบอร์โทรศัพท์ / Phone number",
    regEmail: "อีเมล / Email",
    regEmailPlaceholder: "name@example.com",
    regAddress: "ที่อยู่บ้าน / Home address",
    regEmergencyName: "ผู้ติดต่อฉุกเฉิน / Emergency contact name",
    regEmergencyPhone: "เบอร์ติดต่อฉุกเฉิน / Emergency contact phone",
    regHospitalNumber: "เลข HN / Hospital number",
    regHospitalPlaceholder: "HN-2026-01983",
    regPatientType: "ผู้ป่วยใหม่หรือเดิม / New or existing patient",
    regPatientTypeNew: "ผู้ป่วยใหม่",
    regPatientTypeExisting: "ผู้ป่วยเดิม",
    regDepartment: "แผนกที่รับผิดชอบ / Department assigned",
    regRegistrationDate: "วันที่ลงทะเบียน / Registration date",
    regVerifiedBy: "ผู้ตรวจสอบ / Staff who verified",
    regConsentCollect: "ยินยอมให้เก็บข้อมูลสุขภาพ / Consent to collect and store medical data",
    regConsentShare: "ยินยอมให้แชร์ข้อมูลกับบุคลากรที่เกี่ยวข้อง / Consent to share data with authorized staff",
    regConsentPolicy: "ยอมรับนโยบายความเป็นส่วนตัว / Privacy policy agreement",
    regSendQueue: "ส่งไปยังคิวตรวจสอบ / Send to Verification Queue",
    scanFieldThaiId: "เลขบัตรประชาชน (Thai national ID)",
    scanFieldThaiName: "ชื่อ-นามสกุลภาษาไทย (Thai full name)",
    scanFieldEnglishName: "ชื่อ-นามสกุลภาษาอังกฤษ (English full name)",
    scanFieldDob: "วันเกิด (Date of birth)",
    scanFieldGender: "เพศ (Gender)",
    scanFieldNationality: "สัญชาติ (Nationality)",
    scanFieldAddress: "ที่อยู่ (Address)",
    scanFieldIssueDate: "วันออกบัตร (Issue date)",
    scanFieldExpiryDate: "วันหมดอายุ (Expiry date)",
    scanFieldCardPhoto: "รูปถ่ายบนบัตร (Card photo)",
    replacePhoto: "เปลี่ยนรูป",
    fieldThaiId: "เลขบัตรประชาชน",
    fieldFullName: "ชื่อ-นามสกุล",
    fieldDob: "วันเกิด",
    fieldGender: "เพศ",
    fieldAddress: "ที่อยู่",
    fieldPhone: "โทรศัพท์",
    fieldDepartment: "แผนก",
    placeholderName: "ปราณี กิตติกุล",
    placeholderAddress: "บางกะปิ กรุงเทพฯ",
    placeholderPhone: "08x-xxx-xxxx",
    genderFemale: "หญิง",
    genderMale: "ชาย",
    genderOther: "อื่นๆ",
    nationalityThai: "ไทย",
    nationalityOther: "อื่นๆ",
    deptRegistration: "ลงทะเบียน",
    deptOpd: "ผู้ป่วยนอก",
    deptDiabetesClinic: "คลินิกเบาหวาน",
    deptHypertensionClinic: "คลินิกความดัน",
    deptIcu: "ไอซียู",
    deptWard: "วอร์ด",
    verificationTitle: "คิวตรวจสอบ",
    verificationSubtitle: "เทียบข้อมูล OCR กับข้อมูลที่แก้ไขได้",
    pendingListTitle: "รายการสแกนที่รอดำเนินการ",
    pendingListDesc: "จัดเรียงตามแผนกและความเร่งด่วน",
    queueFilter: "ตัวกรอง",
    tableQueueId: "รหัสคิว",
    tablePatient: "ผู้ป่วย",
    tableStatus: "สถานะ",
    tableAssigned: "ผู้รับผิดชอบ",
    tableAction: "การทำงาน",
    actionReview: "ตรวจสอบ",
    compareTitle: "เทียบ OCR กับข้อมูลที่แก้ไข",
    compareDesc: "ตรวจสอบก่อนอนุมัติ",
    compareExtractedTitle: "ข้อมูลที่ OCR ดึงมา",
    compareEditableTitle: "ข้อมูลที่แก้ไขได้",
    approveBtn: "อนุมัติ",
    rejectBtn: "ปฏิเสธ",
    rescanBtn: "ขอให้สแกนใหม่",
    matchTitle: "จับคู่โปรไฟล์ผู้ป่วย",
    matchDesc: "จับคู่กับโปรไฟล์เดิมหรือสร้างใหม่",
    matchScore: "ความมั่นใจในการจับคู่",
    matchFound: "พบโปรไฟล์",
    matchLastVisit: "เข้ารับบริการล่าสุด",
    matchBtn: "จับคู่โปรไฟล์",
    createBtn: "สร้างโปรไฟล์",
    profileTitle: "โปรไฟล์ผู้ป่วย",
    profileSubtitle: "ข้อมูลตัวตน ประชากร และสรุป EMR",
    identityTitle: "ข้อมูลตัวตน",
    identityDesc: "ยืนยันด้วยบัตรประชาชนไทย",
    labelFullName: "ชื่อ-นามสกุล",
    labelThaiId: "เลขบัตรประชาชน",
    labelDob: "วันเกิด",
    labelGender: "เพศ",
    demographicsTitle: "ข้อมูลประชากร",
    demographicsDesc: "ข้อมูลติดต่อและที่อยู่",
    labelAge: "อายุ",
    labelPhone: "โทรศัพท์",
    labelAddress: "ที่อยู่",
    labelInsurance: "สิทธิ์การรักษา",
    hospitalNumberTitle: "หมายเลขโรงพยาบาล",
    hospitalNumberDesc: "แผนกที่รับผิดชอบและทีมดูแล",
    labelHospitalNumber: "HN",
    labelPrimaryDept: "แผนกหลัก",
    labelCareTeam: "ทีมดูแล",
    medicalSummaryTitle: "สรุปข้อมูลทางการแพทย์",
    medicalSummaryDesc: "การวินิจฉัยและจุดติดตาม",
    medicalSummaryItem1: "เบาหวานชนิดที่ 2, HbA1c 7.1% (30 วันล่าสุด)",
    medicalSummaryItem2: "ความดันโลหิตสูง ใช้ amlodipine 5mg",
    medicalSummaryItem3: "เฝ้าระวัง ICU ด้วยเครื่องช่วยหายใจและ SpO2",
    evidenceTitle: "หลักฐานอ้างอิงจากข้อมูลต้นทาง",
    evidenceDesc: "เชื่อมโยงแหล่งข้อมูลสำหรับสรุป",
    evidenceItem1: "แล็บ: รายงาน HbA1c (2026-05-03)",
    evidenceItem2: "รายการยา (2026-05-14)",
    evidenceItem3: "บันทึก ICU: โหมดเครื่องช่วยหายใจ (2026-05-16)",
    evidenceItem4: "แนวโน้มสัญญาณชีพ (2026-05-18)",
    actionOpen: "เปิด",
    profileTimelineTitle: "ไทม์ไลน์ล่าสุด",
    profileTimelineDesc: "เหตุการณ์การรักษาล่าสุดจากหลายแผนก",
    profileTimelineItem1Title: "ICU • ปรับเครื่องช่วยหายใจ",
    profileTimelineItem1Detail: "ลด PEEP และปริมาตรลมหายใจดีขึ้น",
    profileTimelineItem2Title: "แล็บ • ตรวจแก๊สในเลือด",
    profileTimelineItem2Detail: "pH 7.39, lactate ปกติ",
    profileTimelineItem3Title: "ผู้ป่วยนอก • ปรึกษาเบาหวาน",
    profileTimelineItem3Detail: "เน้นย้ำการใช้ยาอย่างสม่ำเสมอ",
    deptSummaryTitle: "สรุป AI ตามแผนก",
    deptSummarySubtitle: "สร้างสรุปเฉพาะแผนกทั้งภาษาอังกฤษและไทย",
    deptSelectLabel: "เลือกแผนก",
    deptGenerateBtn: "สร้างสรุป",
    deptAdmin: "ผู้ดูแลระบบ",
    summaryEnglishTitle: "สรุป (อังกฤษ)",
    summaryThaiTitle: "สรุป (ไทย)",
    summaryEnglishBody:
      "ICU census stable. Two ventilated patients require PEEP adjustments. Pending ID verifications: 3 high confidence, 1 rescan needed.",
    summaryThaiBody:
      "จำนวนผู้ป่วย ICU คงที่ มีผู้ป่วยใช้เครื่องช่วยหายใจ 2 รายต้องปรับ PEEP คิวตรวจสอบบัตร 3 รายความมั่นใจสูง และ 1 รายต้องสแกนใหม่",
    summarySignalsTitle: "สัญญาณสำคัญ",
    summarySignalsDesc: "สัญญาณจาก EMR แล็บ และเครื่องมอนิเตอร์ ICU",
    summarySignal1: "สัญญาณเตือนเครื่องช่วยหายใจ: 2",
    summarySignal2: "คิวตรวจสอบที่รอดำเนินการ: 4",
    summarySignal3: "แล็บเสี่ยงสูง: 3",
    longTimelineTitle: "ไทม์ไลน์ประวัติการรักษา",
    longTimelineSubtitle: "เหตุการณ์ผู้ป่วยตามช่วงเวลา 60 วัน",
    ltSelectPatient: "เลือกผู้ป่วย",
    ltFilterLabel: "กรอง",
    ltFilterAll: "ทั้งหมด",
    ltFilterDm: "เบาหวาน",
    ltFilterHt: "ความดันโลหิต",
    ltFilterIcu: "ICU",
    ltIndicatorNormal: "ปกติ",
    ltIndicatorWarn: "เฝ้าระวัง",
    ltIndicatorHigh: "เสี่ยงสูง",
    ltIndicatorMissing: "ไม่มีข้อมูล",
    ltVerticalTimelineTitle: "ไทม์ไลน์การรักษาผู้ป่วย",
    ltVerticalTimelineDesc: "เรื่องราวตามช่วงเวลา: การวินิจฉัย สัญญาณชีพ ผลแล็บ ยา และจุดเสี่ยง",
    ltEventDmDiagnosis: "บันทึกการวินิจฉัยเบาหวาน",
    ltEventHtDiagnosis: "บันทึกการวินิจฉัยความดันโลหิตสูง",
    ltEventIcuLinked: "เชื่อมโยงกับการรับเข้า ICU",
    ltEventStaffReview: "ขอแนะนำให้ทบทวนโดยเจ้าหน้าที่",
    ltEventMedNone: "ยังไม่ได้รับยา",
    ltEventMedAdded: "เพิ่มยา",
    ltEventMedStopped: "หยุดยา",
    ltEventMedUnchanged: "ยาคงเดิม",
    ltEventComorbNew: "โรคร่วมใหม่",
    ltEventComorb: "โรคร่วม",
    ltEventHba1cNotMeasured: "HbA1c: ยังไม่ได้วัด",
    ltTrendUp: "เพิ่มขึ้น",
    ltTrendDown: "ลดลง",
    timelineTitle: "หน้าต่างไทม์ไลน์",
    timelineDesc: "สัญญาณชีพ แล็บ วินิจฉัย ยา และโรคร่วม",
    periodTitle1: "วัน 0 - 60",
    periodTitle2: "วัน 61 - 120",
    periodTitle3: "วัน 121 - 180",
    timelineVitals: "สัญญาณชีพ",
    timelineLabs: "ผลแล็บ",
    timelineDiagnoses: "การวินิจฉัย",
    timelineMedications: "ยา",
    timelineComorbidities: "โรคร่วม",
    period1Vitals: "ความดันคงที่ SpO2 96%",
    period1Labs: "HbA1c 7.1%, LDL 112",
    period1Diagnoses: "เบาหวานชนิดที่ 2, ความดันสูง",
    period1Medications: "Metformin, Amlodipine",
    period1Comorbidities: "ภาวะอ้วน",
    period2Vitals: "SpO2 94%, RR สูง",
    period2Labs: "CRP 8 mg/L, WBC 11k",
    period2Diagnoses: "ปอดอักเสบ",
    period2Medications: "Ceftriaxone, ให้ออกซิเจน",
    period2Comorbidities: "เบาหวาน, ความดัน",
    period3Vitals: "ใช้เครื่องช่วยหายใจ, PEEP 8",
    period3Labs: "ABG ปกติ, lactate 1.2",
    period3Diagnoses: "ภาวะหายใจล้มเหลว",
    period3Medications: "ยากดประสาท, อินซูลิน",
    period3Comorbidities: "เบาหวาน, ความดัน",
    icuTitle: "วิเคราะห์เครื่องช่วยหายใจ ICU",
    icuSubtitle: "วิเคราะห์ข้อมูล JSON/CSV และหลักฐานคลื่น",
    icuDataSourceTitle: "แหล่งข้อมูล",
    icuDataSourceDesc: "อัปโหลดหรือโหลดข้อมูลเครื่องช่วยหายใจ",
    icuUploadBtn: "อัปโหลด JSON/CSV",
    icuLoadSampleBtn: "โหลดตัวอย่าง",
    icuDataPatient: "ผู้ป่วย",
    icuDataDevice: "อุปกรณ์",
    icuDataTimeRange: "ช่วงเวลา",
    icuWaveTitle: "สรุปคลื่นสัญญาณ",
    icuWaveDesc: "แนวโน้ม Flow, Pressure, Volume",
    waveFlow: "การไหล",
    waveFlowStatus: "คงที่",
    wavePressure: "ความดัน",
    wavePressureStatus: "เฝ้าระวัง",
    waveVolume: "ปริมาตร",
    waveVolumeStatus: "คงที่",
    waveNoteFlow: "ข้อจำกัดการไหลเล็กน้อย ดีขึ้นหลัง 07:20",
    waveNotePressure: "ความดันสูงช่วง 12 นาที",
    waveNoteVolume: "ปริมาตรลมหายใจอยู่ในเป้าหมาย",
    icuAbnormalTitle: "บันทึกความผิดปกติ",
    icuAbnormalDesc: "ตรวจพบจากการวิเคราะห์คลื่น",
    icuAbnormalItem1: "พบความเสี่ยง Auto-PEEP",
    icuAbnormalItem2: "ความดันสูงเกิน 35 cmH2O",
    icuAbnormalItem3: "การไหลลดลงขณะดูดเสมหะ",
    icuEvidenceTitle: "หลักฐานจากข้อมูลต้นทาง",
    icuEvidenceDesc: "อ้างอิงจาก JSON/CSV",
    icuEvidenceColumnTime: "เวลา",
    icuEvidenceColumnSource: "แหล่งข้อมูล",
    icuEvidenceColumnSnippet: "ตัวอย่างข้อมูล",
    standardsTitle: "การปรับข้อมูลให้เข้ากับระบบโรงพยาบาล",
    standardsSubtitle: "แมป ICD-10, HL7 และ FHIR กับฟิลด์ข้อมูลของโรงพยาบาล",
    stdExLocal: "ท้องถิ่น",
    stdIcdTitle: "ICD-10 — การจำแนกการวินิจฉัย",
    stdIcdPurpose: "แมปข้อความวินิจฉัยภาษาไทยสู่รหัสโรคสากล สำหรับการจัดประเภท การเรียกเก็บเงิน และรายงานทางระบาดวิทยา",
    stdIcdB1: "ข้อความวินิจฉัยภาษาไทย → รหัส ICD-10 ผ่าน synonym lookup",
    stdIcdB2: "รองรับการบันทึกรหัสโรคร่วม (multi-code)",
    stdIcdB3: "ใช้ในรายงาน สธ. และการจัดกลุ่ม DRG",
    stdHl7Title: "HL7 — การแลกเปลี่ยนข้อมูลสุขภาพ",
    stdHl7Purpose: "ปรับมาตรฐานสาร ADT, ORM และ ORU ของโรงพยาบาล สำหรับการแลกเปลี่ยนข้อมูลแบบ Real-time กับระบบ HIS เดิม",
    stdHl7B1: "ADT — เหตุการณ์รับ/จำหน่าย/โอนย้ายผู้ป่วย",
    stdHl7B2: "ORM — ข้อความสั่งการ (แล็บ, ยา)",
    stdHl7B3: "ORU — ข้อความผลลัพธ์ (ผลแล็บ, คลื่นสัญญาณ)",
    stdFhirTitle: "FHIR — การทำงานร่วมกันของ EMR สมัยใหม่",
    stdFhirPurpose: "เปิดเผยข้อมูลโรงพยาบาลเป็น FHIR R4 resource มาตรฐาน รองรับการทำงานร่วมกับ EMR, แอปพลิเคชันมือถือ และแพลตฟอร์มสุขภาพระดับชาติ",
    stdFhirB1: "ทรัพยากร Patient, Encounter, Observation",
    stdFhirB2: "MedicationStatement และ MedicationRequest",
    stdFhirB3: "RESTful API พร้อม JSON payload",
    stdMappingTitle: "ตารางการแมปฟิลด์",
    stdMappingDesc: "การแมปฟิลด์ข้อมูลท้องถิ่นของโรงพยาบาลศรีนครินทร์สู่มาตรฐานสากล",
    stdColLocalField: "ฟิลด์โรงพยาบาล",
    stdColEnglish: "ชื่อฟิลด์ภาษาอังกฤษ",
    stdColThai: "ชื่อฟิลด์ภาษาไทย",
    stdColStandard: "การแมปมาตรฐาน",
    stdColExample: "ตัวอย่างค่า",
    stdColStatus: "สถานะ",
    stdStatusActive: "ใช้งาน",
    stdStatusPending: "รอดำเนินการ",
    stdPipelineTitle: "Pipeline นำเข้า / ส่งออกข้อมูล",
    stdPipelineDesc: "เส้นทางการไหลของข้อมูลโรงพยาบาลท้องถิ่นเข้าและออกจากระบบ",
    stdStepImportTitle: "นำเข้า",
    stdStepImportDesc: "CSV / JSON ของโรงพยาบาล",
    stdStepImportI1: "CSV ที่มีส่วนหัวคอลัมน์ภาษาไทย",
    stdStepImportI2: "JSON จากการส่งออก HIS / EMR",
    stdStepImportI3: "CSV คลื่นสัญญาณ SmartICU (25 Hz)",
    stdStepMapTitle: "การแมปภายใน",
    stdStepMapDesc: "ปรับเป็นรูปแบบมาตรฐาน",
    stdStepMapI1: "การปรับชื่อฟิลด์ให้เป็นมาตรฐาน",
    stdStepMapI2: "ตรวจสอบและแปลงประเภทค่า",
    stdStepMapI3: "ค้นหารหัส ICD / LOINC / SNOMED",
    stdStepExportTitle: "ส่งออก",
    stdStepExportDesc: "รูปแบบ HL7 / FHIR",
    stdStepExportI1: "HL7 v2.5 ADT / ORU messages",
    stdStepExportI2: "FHIR R4 JSON Bundle",
    stdStepExportI3: "การแลกเปลี่ยนข้อมูลสุขภาพระดับชาติ",
    stdDxExTitle: "ตัวอย่างการแมปการวินิจฉัย",
    stdDxExDesc: "ข้อความวินิจฉัยภาษาไทยทั่วไปและรหัส ICD-10 ที่สอดคล้อง",
    stdFhirExTitle: "ตัวอย่าง FHIR R4 Bundle",
    stdFhirExDesc: "ฟิลด์ EMR ท้องถิ่นที่แมปเป็น Patient, Observation และ MedicationStatement resource",
    adminTitle: "ตั้งค่าผู้ดูแลระบบ",
    adminSubtitle: "จัดการแผนก บทบาท ภาษา และการแมปข้อมูล",
    adminDeptTitle: "จัดการแผนก",
    adminDeptDesc: "เปิดใช้งาน เปลี่ยนชื่อ หรือจัดลำดับ",
    adminActionAddDept: "เพิ่มแผนก",
    adminRoleTitle: "จัดการบทบาทผู้ใช้",
    adminRoleDesc: "กำหนดสิทธิ์และการเข้าถึง",
    adminActionAddRole: "เพิ่มบทบาท",
    adminLangTitle: "จัดการภาษา",
    adminLangDesc: "ภาษาเริ่มต้นและคำศัพท์",
    adminLangLabel: "ภาษาเริ่มต้น",
    adminActionSaveLang: "บันทึกภาษา",
    adminMappingTitle: "จัดการการแมปข้อมูลโรงพยาบาล",
    adminMappingDesc: "อัปเดตการแมประหว่างข้อมูลท้องถิ่นและมาตรฐาน",
    adminActionEdit: "แก้ไข",
    vqSubtitle: "ตรวจสอบข้อมูลตัวตนผู้ป่วยที่ AI/OCR ดึงออกมาก่อนอัปเดตเวชระเบียนอย่างเป็นทางการ",
    vqSafetyEn: "AI extracted data must be reviewed and approved by authorized hospital staff before becoming part of the official EMR.",
    vqSafetyTh: "ข้อมูลที่ AI/OCR ดึงออกมาต้องได้รับการตรวจสอบและอนุมัติจากบุคลากรโรงพยาบาลที่ได้รับอนุญาตก่อน จึงจะถือเป็นส่วนหนึ่งของเวชระเบียนอย่างเป็นทางการ",
    vqQueueTitle: "รายการบัตรประจำตัวผู้ป่วย",
    vqQueueDesc: "รายการที่รอการตรวจสอบจากเจ้าหน้าที่",
    vqStatTotal: "รายการทั้งหมด",
    vqStatPending: "รอดำเนินการ",
    vqStatNeedsRescan: "ต้องสแกนใหม่",
    vqStatApproved: "อนุมัติวันนี้",
    vqStatRejected: "ปฏิเสธ",
    vqFilterAll: "ทั้งหมด",
    vqFilterPending: "รอดำเนินการ",
    vqFilterNeedsRescan: "ต้องสแกนใหม่",
    vqFilterApproved: "อนุมัติแล้ว",
    vqFilterRejected: "ปฏิเสธ",
    vqColPatient: "ผู้ป่วย",
    vqColThaiId: "เลขบัตรประชาชน",
    vqColScanTime: "เวลาสแกน",
    vqColConfidence: "คะแนน OCR",
    vqColStatus: "สถานะ",
    vqColAssigned: "เจ้าหน้าที่",
    vqColAction: "การทำงาน",
    vqStatusPending: "รอดำเนินการ",
    vqStatusApproved: "อนุมัติแล้ว",
    vqStatusRejected: "ปฏิเสธ",
    vqStatusNeedsRescan: "ต้องสแกนใหม่",
    vqBtnReview: "ตรวจสอบ",
    vqSelectPrompt: "เลือกรายการจากคิวเพื่อเริ่มตรวจสอบ",
    vqSection1: "ภาพบัตรประชาชนต้นฉบับ",
    vqSection1Desc: "ภาพสแกนที่ได้รับจากจุดลงทะเบียน",
    vqSection2: "ข้อมูลที่ OCR ดึงออกมา",
    vqSection2Desc: "ดึงข้อมูลโดยอัตโนมัติ — ยังไม่ผ่านการตรวจสอบจากเจ้าหน้าที่",
    vqSection3: "แบบฟอร์มยืนยันที่แก้ไขได้",
    vqSection3Desc: "แก้ไขข้อผิดพลาดก่อนอนุมัติ",
    vqSection4: "รายชื่อผู้ป่วยที่อาจตรงกัน",
    vqSection4Desc: "จับคู่จากเลขบัตร ชื่อ วันเกิด HN และโทรศัพท์",
    vqSection5: "การควบคุมการอนุมัติ",
    vqSection5Desc: "การตัดสินใจของคุณจะถูกบันทึกในประวัติการตรวจสอบ",
    vqEditHint: "แก้ไขข้อมูลได้ ทุกการเปลี่ยนแปลงจะถูกบันทึกด้วยรหัสเจ้าหน้าที่ของคุณ",
    vqOcrConfLabel: "คะแนนความมั่นใจ OCR",
    vqOcrHigh: "สูง",
    vqOcrMedium: "กลาง",
    vqOcrLow: "ต่ำ",
    vqFieldThaiId: "เลขบัตรประชาชน",
    vqFieldThaiName: "ชื่อ-นามสกุลภาษาไทย",
    vqFieldEnName: "ชื่อ-นามสกุลภาษาอังกฤษ",
    vqFieldDob: "วันเกิด",
    vqFieldGender: "เพศ",
    vqFieldAddress: "ที่อยู่",
    vqFieldPhone: "โทรศัพท์",
    vqFieldDept: "แผนก",
    vqFieldNotes: "บันทึกเจ้าหน้าที่",
    vqMatchHn: "เลข HN",
    vqMatchLastVisit: "เข้ารับบริการล่าสุด",
    vqMatchScore: "คะแนนการจับคู่",
    vqMatchFields: "จับคู่จาก",
    vqMatchDept: "แผนก",
    vqBtnSelectMatch: "เลือก",
    vqMatchSelected: "เลือกแล้ว",
    vqNoMatches: "ไม่พบโปรไฟล์ผู้ป่วยที่ตรงกัน จะสร้างโปรไฟล์ใหม่เมื่ออนุมัติ",
    vqBtnApproveNew: "อนุมัติและสร้างโปรไฟล์ผู้ป่วยใหม่",
    vqBtnApproveMatch: "อนุมัติและเชื่อมโยงกับโปรไฟล์ที่จับคู่ได้",
    vqBtnEditFields: "แก้ไขข้อมูลที่ไม่ถูกต้อง",
    vqBtnReject: "ปฏิเสธรายการนี้",
    vqBtnRescan: "ขอให้สแกนใหม่",
    vqAuditNote: "การตัดสินใจของคุณจะถูกบันทึกพร้อมรหัสเจ้าหน้าที่ สถานี และเวลา",
    vqBtnCancel: "ยกเลิก",
    vqDialogApproveNewTitle: "สร้างโปรไฟล์ผู้ป่วยใหม่",
    vqDialogApproveNewBody: "การดำเนินการนี้จะสร้างบันทึกผู้ป่วยอย่างเป็นทางการใหม่ใน EMR ไม่สามารถยกเลิกได้",
    vqDialogApproveMatchTitle: "เชื่อมโยงกับโปรไฟล์ที่มีอยู่",
    vqDialogApproveMatchBody: "การดำเนินการนี้จะเชื่อมโยงข้อมูลที่ตรวจสอบแล้วกับโปรไฟล์ผู้ป่วยที่มีอยู่",
    vqDialogRejectTitle: "ปฏิเสธรายการนี้",
    vqDialogRejectBody: "รายการนี้จะถูกทำเครื่องหมายว่าปฏิเสธ ผู้ป่วยอาจต้องลงทะเบียนใหม่",
    vqDialogRescanTitle: "ขอสแกนใหม่",
    vqDialogRescanBody: "ผู้ป่วยจะถูกขอให้สแกนบัตรประชาชนใหม่อีกครั้ง",
    vqDialogConfirm: "ยืนยัน",
    vqReasonPlaceholder: "ระบุเหตุผล (ไม่บังคับ)...",
    vqToastApproveNew: "สร้างโปรไฟล์ผู้ป่วยสำเร็จ",
    vqToastApproveMatch: "เชื่อมโยงรายการกับโปรไฟล์เดิมแล้ว",
    vqToastReject: "ปฏิเสธและทำเครื่องหมายรายการแล้ว",
    vqToastRescan: "ส่งคำขอสแกนใหม่แล้ว",
    vqDescApproveNew: "สร้างบันทึกเวชระเบียนใหม่สำหรับผู้ป่วยรายนี้",
    vqDescApproveMatch: "เชื่อมโยงกับโปรไฟล์ผู้ป่วยเดิมที่เลือก",
    vqDescEditFields: "เลื่อนขึ้นไปที่แบบฟอร์มเพื่อแก้ไขข้อมูล",
    vqDescReject: "ทำเครื่องหมายรายการนี้ว่าไม่ถูกต้องหรืออ่านไม่ได้",
    vqDescRescan: "ส่งกลับเพื่อสแกนบัตรให้ชัดขึ้น",
    staffReviewRequired: "ต้องให้เจ้าหน้าที่ตรวจสอบ",
    icd10Mapping: "การแมปข้อมูลกับ ICD-10",
    fhirCompatibility: "ความเข้ากันได้กับ FHIR",
    icuSelectPatientLabel: "เลือกผู้ป่วย ICU",
    icuSelectOption: "— เลือกผู้ป่วย ICU —",
    icuDayLabel: "วัน",
    icuEmptyMain: "เลือกผู้ป่วย ICU เพื่อดูการวิเคราะห์คลื่นเครื่องช่วยหายใจ",
    icuEmptySub: "ชุดข้อมูล SmartICU — สัญญาณ Flow, Pressure, Volume ที่ 25 Hz — โรงพยาบาลศรีนครินทร์ มข.",
    icuPatientDemoTitle: "ข้อมูลผู้ป่วย",
    icuPatientDemoDesc: "จากชุดข้อมูล SmartICU JSON",
    icuStayTitle: "ไทม์ไลน์การอยู่ใน ICU",
    icuStayDesc: "จำนวนวันและรายการบันทึก",
    icuWaveSignalTitle: "สรุปสัญญาณคลื่น",
    icuWaveSignalDesc: "ภาพรวมสถิติ Flow, Pressure และ Volume ต่อการบันทึก — แหล่งข้อมูล: ไฟล์ CSV",
    icuNoWaveNote: "ไม่มีข้อมูล CSV คลื่นสัญญาณสำหรับการบันทึกในวันนี้",
    icuWaveChartsTitle: "กราฟคลื่นสัญญาณ",
    icuWaveChartsDesc: "อนุกรมเวลา Flow, Pressure และ Volume จากข้อมูลที่โหลด แกน X: ลำดับตัวอย่างที่ 25 Hz",
    icuCaptureLabel: "การบันทึก",
    icuCaptureLogTitle: "บันทึกการวัด",
    icuCaptureLogDesc: "บันทึกรายชั่วโมงของเครื่องช่วยหายใจในวันที่เลือก",
    icuPatternTitle: "ตรวจพบรูปแบบผิดปกติ",
    icuPatternDesc: "การวิเคราะห์รูปแบบจากสถิติสัญญาณ สำหรับเจ้าหน้าที่ตรวจสอบเท่านั้น ไม่ใช่การวินิจฉัยทางคลินิก",
    icuStaffReviewOnly: "สำหรับเจ้าหน้าที่ตรวจสอบเท่านั้น",
    icuDxOpTitle: "บันทึกการวินิจฉัยและหัตถการ",
    icuDxOpDesc: "ตามที่บันทึกไว้ในไฟล์ ICU JSON สำหรับวันที่เลือก",
    icuAiPanelTitle: "สรุปเครื่องช่วยหายใจโดย AI",
    icuAiPanelDesc: "การวิเคราะห์จาก AI จากสถิติคลื่นและบริบทคลินิก — ขับเคลื่อนด้วย Gemini",
    icuAiGenBtnText: "สร้างสรุปโดย AI",
    icuAiSafetyNote: "ระบบนี้สนับสนุนการทบทวนของเจ้าหน้าที่ ICU และไม่ใช่การตรวจติดตามผู้ป่วยแบบ Real-time",
    icuAiLoadingText: "กำลังวิเคราะห์คลื่นด้วย Gemini AI\u2026",
    icuAiEmptyText: "เลือกผู้ป่วยที่มีข้อมูลคลื่น แล้วกด สร้างสรุปโดย AI",
    icuKeyFindingsLabel: "ข้อสรุปสำคัญ",
    icuAbnPatternsLabel: "บันทึกรูปแบบการหายใจผิดปกติ",
    icuStaffReviewLabel: "คำแนะนำสำหรับเจ้าหน้าที่",
    icuEtbTitle: "หลักฐานอ้างอิงจากข้อมูลต้นทาง",
    icuEtbDesc: "ข้อมูลสัญญาณต้นฉบับที่ AI ใช้วิเคราะห์ — ชื่อฟิลด์ ค่ารายวัน และบันทึกการให้เหตุผล",
    icuEtbVerified: "ยืนยันจาก CSV/JSON ICU",
    icuDisclaimerText: "สถิติคลื่นคำนวณจากไฟล์ CSV ต้นฉบับ (SmartICU, โรงพยาบาลศรีนครินทร์ มข.) ระบบนี้สนับสนุนการทบทวนของเจ้าหน้าที่ ICU เท่านั้น ไม่ใช่การตรวจติดตามแบบ Real-time",
    // ── Audit Log ภาษาไทย ──
    auditLogTitle: "บันทึกการตรวจสอบ",
    auditLogSubtitle: "บันทึกการดำเนินงานทั้งหมดของเจ้าหน้าที่ที่เกี่ยวข้องกับข้อมูลผู้ป่วย",
    auditColEntry: "รหัสบันทึก",
    auditColAction: "การดำเนินการ",
    auditColStaff: "เจ้าหน้าที่",
    auditColPatient: "ผู้ป่วย",
    auditColDetails: "รายละเอียด",
    auditColTime: "เวลา",
    auditStatTotal: "ทั้งหมด",
    auditStatToday: "วันนี้",
    auditStatApproved: "อนุมัติ",
    auditStatRejected: "ปฏิเสธ",
    auditStatDenied: "ปฏิเสธการเข้าถึง",
    auditFilterAll: "ทุกการดำเนินการ",
    auditFilterScan: "สแกนบัตร",
    auditFilterQueue: "คิว",
    auditFilterApprove: "อนุมัติ",
    auditFilterReject: "ปฏิเสธ",
    auditFilterEdit: "แก้ไข",
    auditFilterDeny: "ปฏิเสธการเข้าถึง",
    auditEmpty: "ไม่มีบันทึกในเซสชันนี้",
    auditExportBtn: "ส่งออก CSV",
    auditPrivacyNote: "บันทึกทุกการดำเนินการเกี่ยวกับข้อมูลผู้ป่วยพร้อมรหัสเจ้าหน้าที่ บทบาท จุดปฏิบัติงาน และเวลา",
    accessDeniedTitle: "จำกัดสิทธิ์การเข้าถึง",
    accessDeniedDesc: "บทบาทปัจจุบันของคุณไม่มีสิทธิ์เข้าถึงหน้านี้",
    accessDeniedRoleLabel: "บทบาทของคุณ",
    accessDeniedRequired: "ต้องการบทบาท",
    accessDeniedBackBtn: "กลับไปแดชบอร์ด",
    privacyAiWarning: "เนื้อหาที่ AI สร้าง ต้องให้เจ้าหน้าที่ตรวจสอบก่อนใช้งานทางคลินิก",
    privacyNoEMRUpdate: "ห้ามอัปเดตเวชระเบียนโดยไม่ได้รับการยืนยันจากเจ้าหน้าที่",
    privacyAuditRequired: "การอนุมัติ ปฏิเสธ และแก้ไขทุกกระทำจะถูกบันทึกพร้อมรหัสเจ้าหน้าที่",
    demoGuideTitle: "คู่มือการทดสอบระบบ (Demo)",
    demoGuideSubtitle: "ทำตามขั้นตอนเหล่านี้เพื่อสัมผัสประสบการณ์การทำงานที่สมบูรณ์แบบ",
    demoStep1: "<strong>1. เข้าสู่ระบบ:</strong> ลงชื่อเข้าใช้ในฐานะเจ้าหน้าที่ลงทะเบียนที่หน้า <a href='#' onclick='setActivePage(\"login\"); return false;'>ลงชื่อเข้าใช้</a>",
    demoStep2: "<strong>2. สกัดข้อมูลบัตรประชาชน:</strong> ไปที่หน้า <a href='#' onclick='setActivePage(\"id-scan\"); return false;'>สแกนบัตรประชาชน</a> และสแกนเพื่อดึงข้อมูลผ่าน OCR",
    demoStep3: "<strong>3. ตรวจสอบข้อมูล:</strong> เจ้าหน้าที่ทบทวนข้อมูลที่ <a href='#' onclick='setActivePage(\"verification\"); return false;'>คิวตรวจสอบข้อมูล</a> เพื่อจับคู่หรือสร้างโปรไฟล์ใหม่",
    demoStep4: "<strong>4. สรุป AI เชิงคลินิก:</strong> เข้าสู่ระบบในฐานะแพทย์หรือพยาบาล ไปที่ <a href='#' onclick='setActivePage(\"department-summary\"); return false;'>สรุปข้อมูลแผนก</a> หรือ <a href='#' onclick='setActivePage(\"icu-analysis\"); return false;'>วิเคราะห์ ICU</a> จากนั้นสร้างบทสรุป AI",
    demoStep5: "<strong>5. ค้นหาหลักฐานอ้างอิง:</strong> ภายในผลสรุป AI คุณสามารถคลิกแต่ละจุดเพื่อดูแหล่งที่มาข้อมูล EMR เดิม",
    demoStep6: "<strong>6. ไทม์ไลน์ระยะยาว:</strong> เปิด <a href='#' onclick='setActivePage(\"longitudinal\"); return false;'>เบิกไทม์ไลน์ประวัติการรักษา</a> เพื่อติดตามโรคเรื้อรัง",
    demoStep7: "<strong>7. บันทึกระบบ:</strong> เข้าสู่ระบบในฐานะผู้ดูแลระบบเพื่อดู <a href='#' onclick='setActivePage(\"audit-log\"); return false;'>บันทึกการตรวจสอบ</a>"
  }
};

const langToggleButtons = document.querySelectorAll("[data-lang-toggle]");

// ============================================================
// SECURITY & PRIVACY — RBAC + SESSION + AUDIT LOG
// ============================================================

/** Pages each role may access. "dashboard" and "login" are always open. */
const ROLE_PERMISSIONS = {
  registration: {
    label: "Registration Staff", labelTH: "เจ้าหน้าที่ลงทะเบียน",
    pages:   [
      "login", "dashboard", "id-scan", "verification",
      "profile", "department-summary", "longitudinal", "icu-analysis", "audit-log"
    ],
    actions: [
      "scan_id", "edit_registration", "send_to_queue", "approve_identity",
      "view_profile", "view_summary", "view_timeline", "view_icu_waveform", "view_icu_summary", "view_icu_evidence"
    ]
  },
  doctor: {
    label: "Doctor", labelTH: "แพทย์",
    pages:   ["login", "dashboard", "profile", "department-summary", "longitudinal"],
    actions: ["view_profile", "view_summary", "view_timeline", "view_evidence"]
  },
  nurse: {
    label: "Nurse", labelTH: "พยาบาล",
    pages:   ["login", "dashboard", "profile", "department-summary"],
    actions: ["view_profile", "view_summary", "add_review_note"]
  },
  icu: {
    label: "ICU Staff", labelTH: "เจ้าหน้าที่ ICU",
    pages:   ["login", "dashboard", "icu-analysis"],
    actions: ["view_icu_waveform", "view_icu_summary", "view_icu_evidence"]
  },
  admin: {
    label: "Admin", labelTH: "ผู้ดูแลระบบ",
    pages:   ["login", "dashboard", "admin", "audit-log", "id-scan", "verification",
               "profile", "department-summary", "longitudinal", "icu-analysis"],
    actions: ["manage_users", "manage_departments", "manage_mapping",
               "view_analytics", "view_audit_log"]
  }
};

/** Human-readable labels for each page (used in access-denied panel). */
const PAGE_REQUIRED_ROLES = {
  "id-scan":            ["registration", "admin"],
  "verification":       ["registration", "admin"],
  "profile":            ["registration", "doctor", "nurse", "admin"],
  "department-summary": ["registration", "doctor", "nurse", "admin"],
  "longitudinal":       ["registration", "doctor", "admin"],
  "icu-analysis":       ["registration", "icu", "admin"],
  "admin":              ["admin"],
  "audit-log":          ["registration", "admin"]
};

/** Action metadata for audit log display. */
const AUDIT_ACTION_META = {
  login:         { label: "Login",              labelTH: "เข้าสู่ระบบ",             cls: "aud-login"   },
  logout:        { label: "Logout",             labelTH: "ออกจากระบบ",              cls: "aud-logout"  },
  scan_id:       { label: "ID Scan",            labelTH: "สแกนบัตร",                cls: "aud-scan"    },
  send_queue:    { label: "Sent to Queue",      labelTH: "ส่งเข้าคิว",              cls: "aud-queue"   },
  edit_field:    { label: "Field Edited",       labelTH: "แก้ไขข้อมูล",             cls: "aud-edit"    },
  approve_new:   { label: "Approved — New",     labelTH: "อนุมัติ — ผู้ป่วยใหม่",  cls: "aud-approve" },
  approve_match: { label: "Approved — Linked",  labelTH: "อนุมัติ — เชื่อมโยง",   cls: "aud-approve" },
  reject:        { label: "Rejected",           labelTH: "ปฏิเสธ",                  cls: "aud-reject"  },
  rescan:        { label: "Rescan Requested",   labelTH: "ขอสแกนใหม่",              cls: "aud-rescan"  },
  view_ai:       { label: "AI Summary Viewed",  labelTH: "ดูสรุป AI",               cls: "aud-view"    },
  view_icu:      { label: "ICU Data Viewed",    labelTH: "ดูข้อมูล ICU",            cls: "aud-view"    },
  access_denied: { label: "Access Denied",      labelTH: "ปฏิเสธการเข้าถึง",       cls: "aud-deny"    }
};

/** Current session state — persisted in sessionStorage so it survives page refresh. */
let currentSession = JSON.parse(sessionStorage.getItem("nightingale-session") || "null") || {
  staffId:     "",
  role:        "registration",
  station:     "",
  shift:       "morning",
  loginTime:   null,
  isLoggedIn:  false
};

/** In-session audit log — persisted in sessionStorage. */
let auditEntries = JSON.parse(sessionStorage.getItem("nightingale-audit") || "[]");

const _saveSession = () =>
  sessionStorage.setItem("nightingale-session", JSON.stringify(currentSession));
const _saveAudit = () =>
  sessionStorage.setItem("nightingale-audit", JSON.stringify(auditEntries.slice(0, 500)));

/**
 * Append one entry to the audit log.
 * Security note: all patient-data actions MUST call this before completing.
 */
const addAuditEntry = ({ action, patientId = null, patientName = null, changes = null, notes = null }) => {
  const entry = {
    id:          `AUD-${Date.now().toString(36).toUpperCase()}`,
    action,
    staffId:     currentSession.staffId   || "DEMO",
    staffRole:   currentSession.role      || "registration",
    station:     currentSession.station   || "—",
    patientId:   patientId                || null,
    patientName: patientName              || null,
    changes:     changes                  || null,
    notes:       notes                    || null,
    timestamp:   new Date().toISOString()
  };
  auditEntries.unshift(entry);
  if (auditEntries.length > 500) auditEntries.pop();
  _saveAudit();
  // Refresh audit page if open
  if (document.querySelector('.page[data-page="audit-log"].active')) renderAuditLog();
  return entry;
};

/** Returns true if the current session role may visit the given page. */
const canAccess = (pageId) => {
  if (!pageId || pageId === "login" || pageId === "dashboard") return true;
  if (!currentSession.isLoggedIn) return false;
  const perms = ROLE_PERMISSIONS[currentSession.role || "registration"];
  return perms ? perms.pages.includes(pageId) : false;
};

/** Returns true if the current role has the given fine-grained action permission. */
const hasPermission = (action) => {
  const perms = ROLE_PERMISSIONS[currentSession.role || "registration"];
  return perms ? perms.actions.includes(action) : false;
};

/**
 * Apply nav-item visibility and sidebar session badge based on current role.
 * Call whenever the session changes.
 */
const enforceAccess = () => {
  const role  = currentSession.role || "registration";
  const perms = ROLE_PERMISSIONS[role];

  // Visibility model:
  // - signed out: only Login button is shown
  // - signed in: Login button is hidden; role-allowed pages are shown
  const navEls = Array.from(document.querySelectorAll(".nav-item[data-page]"));
  navEls.forEach((item) => {
    const pageId = item.dataset.page;
    const isLoginPage = pageId === "login";
    const shouldShow = currentSession.isLoggedIn ? !isLoginPage : isLoginPage;

    item.hidden = !shouldShow;

    const allowed = canAccess(pageId);
    item.classList.toggle("nav-restricted", !allowed);
    item.setAttribute("aria-disabled", allowed ? "false" : "true");
  });

  // Session badge in sidebar
  const badge = document.getElementById("sessionRoleBadge");
  if (badge) {
    const lang = typeof currentLang !== "undefined" ? currentLang : "en";
    badge.textContent = lang === "th" ? (perms?.labelTH || role) : (perms?.label || role);
    badge.dataset.role = role;
  }
  const staffBadge = document.getElementById("sessionStaffId");
  if (staffBadge) {
    staffBadge.textContent = currentSession.staffId || (currentSession.isLoggedIn ? "STA-DEMO" : "Not signed in");
  }

  // Topbar session chip
  const topbarSession = document.getElementById("topbarSessionChip");
  if (topbarSession) {
    if (currentSession.isLoggedIn) {
      const lang = typeof currentLang !== "undefined" ? currentLang : "en";
      const roleLabel = lang === "th" ? (perms?.labelTH || role) : (perms?.label || role);
      const staffIdLabel = (currentSession.staffId || "STA-DEMO").trim() || "STA-DEMO";
      topbarSession.textContent = `${staffIdLabel} · ${roleLabel}`;
      topbarSession.hidden = false;
    } else {
      topbarSession.hidden = true;
    }
  }

  const newScanBtn = document.getElementById("topbarNewScanBtn");
  if (newScanBtn) {
    newScanBtn.hidden = !currentSession.isLoggedIn;
  }

  const logoutBtn = document.getElementById("topbarLogoutBtn");
  if (logoutBtn) {
    logoutBtn.hidden = !currentSession.isLoggedIn;
  }
};


const navItems = Array.from(document.querySelectorAll(".nav-item[data-page]"));
const pages = Array.from(document.querySelectorAll(".page[data-page]"));
const actionButtons = Array.from(document.querySelectorAll("[data-page-target]"));
let currentLang = localStorage.getItem("nightingale-lang") || "en";

const setText = (el, value) => {
  if (value === undefined) {
    return;
  }
  // Safety: our translations are hardcoded, not user input
  el.innerHTML = value;
};

const applyLanguage = (lang) => {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.title = dict.pageTitle || document.title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    setText(el, dict[key]);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Update language toggle button active segments
  document.querySelectorAll("[data-lang-seg]").forEach((seg) => {
    seg.classList.toggle("lang-active", seg.dataset.langSeg === lang);
  });
};

const setActivePage = (pageId, options = {}) => {
  let target = pages.find((page) => page.dataset.page === pageId) || pages[0];
  if (!target) {
    return;
  }

  let effectiveId = target.dataset.page;
  if (!currentSession.isLoggedIn && effectiveId !== "login") {
    const loginPage = pages.find((page) => page.dataset.page === "login");
    if (loginPage) {
      target = loginPage;
      effectiveId = "login";
    }
  }

  const allowed     = canAccess(effectiveId);

  // Log access denial (but only once per attempt, not for passive render)
  if (!allowed && options._fromNav !== false) {
    addAuditEntry({ action: "access_denied", notes: `Attempted: ${effectiveId}` });
  }

  pages.forEach((page) => {
    page.classList.toggle("active", page === target);
  });

  navItems.forEach((item) => {
    const isActive = item.dataset.page === effectiveId;
    item.classList.toggle("active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  // Show/hide the global access-denied overlay
  const overlay = document.getElementById("accessDeniedOverlay");
  if (overlay) {
    overlay.hidden = allowed;
    if (!allowed) {
      const lang = typeof currentLang !== "undefined" ? currentLang : "en";
      const dict = translations[lang] || translations.en;
      const role  = currentSession.role || "registration";
      const perms = ROLE_PERMISSIONS[role];
      const roleLbl = lang === "th" ? (perms?.labelTH || role) : (perms?.label || role);

      const roleEl = document.getElementById("accessDeniedCurrentRole");
      if (roleEl) {
        roleEl.textContent = roleLbl;
        roleEl.dataset.role = role;
      }
      const reqEl = document.getElementById("accessDeniedRequiredRoles");
      if (reqEl) {
        const required = PAGE_REQUIRED_ROLES[effectiveId] || [];
        reqEl.innerHTML = required.map((r) => {
          const p = ROLE_PERMISSIONS[r];
          const lbl = lang === "th" ? (p?.labelTH || r) : (p?.label || r);
          return `<span class="role-badge" data-role="${r}">${lbl}</span>`;
        }).join(" ");
      }
      const titleEl = overlay.querySelector("[data-i18n='accessDeniedTitle']");
      if (titleEl) titleEl.textContent = dict.accessDeniedTitle || "Access Restricted";
      const descEl  = overlay.querySelector("[data-i18n='accessDeniedDesc']");
      if (descEl)  descEl.textContent  = dict.accessDeniedDesc  || "Your current role does not have permission.";
    }
  }

  if (allowed && effectiveId === "profile") {
    profileRefresh();
  }

  localStorage.setItem("nightingale-page", effectiveId);

  if (options.updateHash !== false) {
    history.replaceState(null, "", `#${effectiveId}`);
  }
};

const toggleLanguage = () => {
  currentLang = currentLang === "en" ? "th" : "en";
  localStorage.setItem("nightingale-lang", currentLang);
  applyLanguage(currentLang);
  window.dispatchEvent(new Event("nightingale-lang-change"));
};

const setupRegistrationForm = () => {
  const form = document.getElementById("ocrRegistrationForm");
  if (!form) {
    return;
  }

  const alertBox = form.querySelector(".form-alert");
  const requiredFields = Array.from(form.querySelectorAll("[data-required]"));

  const validate = () => {
    let hasError = false;
    const handledRadio = new Set();
    const handledCheckbox = new Set();

    requiredFields.forEach((field) => {
      if (field.type === "radio") {
        if (handledRadio.has(field.name)) {
          return;
        }
        handledRadio.add(field.name);
        const group = Array.from(form.querySelectorAll(`input[name="${field.name}"]`));
        const valid = group.some((item) => item.checked);
        group.forEach((item) => {
          const wrapper = item.closest(".field");
          if (wrapper) {
            wrapper.classList.toggle("is-invalid", !valid);
          }
        });
        if (!valid) {
          hasError = true;
        }
        return;
      }

      if (field.type === "checkbox") {
        const wrapper = field.closest(".field");
        if (wrapper && handledCheckbox.has(wrapper)) {
          return;
        }
        if (wrapper) {
          handledCheckbox.add(wrapper);
        }
        const checkboxes = wrapper
          ? Array.from(wrapper.querySelectorAll('input[type="checkbox"][data-required]'))
          : [field];
        const valid = checkboxes.every((item) => item.checked);
        if (wrapper) {
          wrapper.classList.toggle("is-invalid", !valid);
        }
        if (!valid) {
          hasError = true;
        }
        return;
      }

      const wrapper = field.closest(".field");
      const value = field.tagName === "SELECT" ? field.value.trim() : field.value.trim();
      const valid = value !== "";
      if (wrapper) {
        wrapper.classList.toggle("is-invalid", !valid);
      }
      if (!valid) {
        hasError = true;
      }
    });

    if (alertBox) {
      alertBox.classList.toggle("show", hasError);
    }

    return !hasError;
  };

  form.addEventListener("submit", (event) => {
    if (!validate()) {
      event.preventDefault();
      if (alertBox) {
        alertBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });

  form.addEventListener("input", () => {
    if (alertBox && alertBox.classList.contains("show")) {
      validate();
    }
  });
};

// ============================================================
// ID SCAN OCR (image upload -> OCR -> auto-fill)
// ============================================================

let idScanLastImageUrl = "";
let idScanLastImageDataUrl = "";
let idScanLastExtracted = null;
let idScanLastConfidence = null;
let idScanLastFileName = "";

const idScanSetText = (id, value, fallback = "-") => {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value && String(value).trim() ? String(value).trim() : fallback;
};

const idScanSetInputValue = (id, value) => {
  const el = document.getElementById(id);
  if (!el || value == null || value === "") return;
  el.value = value;
};

const idScanSetSelectValue = (id, value) => {
  const el = document.getElementById(id);
  if (!el || !value) return;
  const hasValue = Array.from(el.options).some((opt) => opt.value === value);
  if (hasValue) el.value = value;
};

const idScanReadFileAsDataUrl = (file) =>
  new Promise((resolve) => {
    if (!file) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });

const idScanNormalizeSpaces = (text) =>
  (text || "").replace(/\u00A0/g, " ").replace(/[ \t]+/g, " ").trim();

const idScanCleanLatin = (text) =>
  idScanNormalizeSpaces((text || "")
    .replace(/^[=|:\-\s]+/g, "")
    .replace(/[^A-Za-z.'\-\s]/g, " "));

const idScanThaiIdCheckDigit = (id) => {
  if (!/^[1-9]\d{12}$/.test(id)) return false;
  const sum = id
    .slice(0, 12)
    .split("")
    .reduce((acc, ch, idx) => acc + parseInt(ch, 10) * (13 - idx), 0);
  const check = (11 - (sum % 11)) % 10;
  return check === parseInt(id[12], 10);
};

const idScanExtractIdWindows = (text) => {
  const digits = (text || "").replace(/\D/g, "");
  const out = [];
  for (let i = 0; i <= digits.length - 13; i += 1) {
    const candidate = digits.slice(i, i + 13);
    if (candidate[0] !== "0") out.push(candidate);
  }
  return out;
};

const idScanExtractThaiId = (rawText, lines) => {
  const seen = new Set();
  const candidates = [];
  const pushCandidate = (id) => {
    if (!id || id.length !== 13 || id[0] === "0") return;
    if (seen.has(id)) return;
    seen.add(id);
    candidates.push(id);
  };

  // Prefer candidates from lines that look like ID labels.
  lines.forEach((line, idx) => {
    if (/(identification\s*number|เลขประจำตัวประชาชน|บัตรประชาชน)/iu.test(line)) {
      idScanExtractIdWindows(`${line} ${lines[idx + 1] || ""}`).forEach(pushCandidate);
    }
  });

  // Generic spaced 13-digit patterns anywhere in OCR text.
  const spacedMatches = rawText.match(/\b[1-9](?:[\s-]?\d){12}\b/g) || [];
  spacedMatches.forEach((m) => pushCandidate(m.replace(/\D/g, "")));

  // Last resort: slide across all OCR digits.
  idScanExtractIdWindows(rawText).forEach(pushCandidate);

  const valid = candidates.find((id) => idScanThaiIdCheckDigit(id));
  return valid || candidates[0] || "";
};

const idScanNormalizeMonthToken = (token) =>
  (token || "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "")
    .replace(/[^a-z\u0E00-\u0E7F]/g, "");

const idScanMonthToNumber = (token) => {
  const key = idScanNormalizeMonthToken(token);
  const map = {
    jan: 1, january: 1,
    feb: 2, february: 2,
    mar: 3, march: 3,
    apr: 4, april: 4,
    may: 5,
    jun: 6, june: 6,
    jul: 7, july: 7,
    aug: 8, august: 8,
    sep: 9, sept: 9, september: 9,
    oct: 10, october: 10,
    nov: 11, november: 11,
    dec: 12, december: 12,
    มค: 1, มกราคม: 1,
    กพ: 2, กุมภาพันธ์: 2,
    มีค: 3, มีนาคม: 3,
    เมย: 4, เมษายน: 4,
    พค: 5, พฤษภาคม: 5,
    มิย: 6, มิถุนายน: 6,
    กค: 7, กรกฎาคม: 7,
    สค: 8, สิงหาคม: 8,
    กย: 9, กันยายน: 9,
    ตค: 10, ตุลาคม: 10,
    พย: 11, พฤศจิกายน: 11,
    ธค: 12, ธันวาคม: 12
  };
  return map[key] || null;
};

const idScanToIsoDate = (day, month, year) => {
  if (!day || !month || !year) return null;

  let y = parseInt(year, 10);
  const m = parseInt(month, 10);
  const d = parseInt(day, 10);

  if ([d, m, y].some((n) => Number.isNaN(n))) return null;

  if (y < 100) y += y > 30 ? 1900 : 2000;
  if (y > 2400) y -= 543;

  if (m < 1 || m > 12 || d < 1 || d > 31) return null;

  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
};

const idScanParseDateToken = (token) => {
  const parts = token.split(/[\/-]/).map((p) => parseInt(p, 10));
  if (parts.some((n) => Number.isNaN(n))) return null;
  if (parts[0] > 31) {
    return idScanToIsoDate(parts[2], parts[1], parts[0]);
  }
  return idScanToIsoDate(parts[0], parts[1], parts[2]);
};

const idScanExtractDateFromText = (text) => {
  if (!text) return "";

  const numeric = [
    ...(text.match(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}\b/g) || []),
    ...(text.match(/\b\d{4}[\/-]\d{1,2}[\/-]\d{1,2}\b/g) || [])
  ];
  for (const tk of numeric) {
    const parsed = idScanParseDateToken(tk);
    if (parsed) return parsed;
  }

  const textualRegex = /(\d{1,2})\s*([A-Za-z]{3,10}\.?|[\u0E00-\u0E7F\.]{2,12})\s*[,.\-]?\s*(\d{2,4})/gu;
  for (const m of text.matchAll(textualRegex)) {
    const month = idScanMonthToNumber(m[2]);
    if (!month) continue;
    const parsed = idScanToIsoDate(m[1], month, m[3]);
    if (parsed) return parsed;
  }

  return "";
};

const idScanExtractDateList = (rawText) => {
  const found = new Set();

  const numericTokens = [
    ...(rawText.match(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}\b/g) || []),
    ...(rawText.match(/\b\d{4}[\/-]\d{1,2}[\/-]\d{1,2}\b/g) || [])
  ];
  numericTokens.forEach((tk) => {
    const parsed = idScanParseDateToken(tk);
    if (parsed) found.add(parsed);
  });

  const textualRegex = /(\d{1,2})\s*([A-Za-z]{3,10}\.?|[\u0E00-\u0E7F\.]{2,12})\s*[,.\-]?\s*(\d{2,4})/gu;
  for (const m of rawText.matchAll(textualRegex)) {
    const month = idScanMonthToNumber(m[2]);
    if (!month) continue;
    const parsed = idScanToIsoDate(m[1], month, m[3]);
    if (parsed) found.add(parsed);
  }

  return Array.from(found).sort();
};

const idScanExtractDateByLabel = (lines, labelRegex) => {
  for (let i = 0; i < lines.length; i += 1) {
    if (!labelRegex.test(lines[i])) continue;

    // OCR often puts date one or two lines before/after the label.
    const candidates = [
      lines[i - 2] || "",
      lines[i - 1] || "",
      lines[i] || "",
      lines[i + 1] || "",
      lines[i + 2] || "",
      lines[i + 3] || ""
    ];
    for (const txt of candidates) {
      const parsed = idScanExtractDateFromText(txt);
      if (parsed) return parsed;
    }
  }
  return "";
};

const idScanLooksLikeAddressLine = (line) => {
  if (!line) return false;
  if (/(identification|name|last\s*name|date|birth|issue|expiry|religion|sex|nationality|เลข|บัตร|ชื่อ|วันเกิด|วันออกบัตร|วันหมดอายุ|สัญชาติ|ศาสนา|เพศ)/iu.test(line)) {
    return false;
  }
  if (/[\u0E00-\u0E7F]/u.test(line) && /(\d|\/|หมู่|ต\.|อ\.|จ\.|ถ\.|ซ\.|แขวง|เขต)/u.test(line)) {
    return true;
  }
  if (/[A-Za-z]/.test(line) && /\d/.test(line) && /(road|district|province|subdistrict|village|moo|bangkok)/i.test(line)) {
    return true;
  }
  return false;
};

const idScanExtractFields = (rawText) => {
  const lines = rawText
    .split(/\r?\n/)
    .map((line) => idScanNormalizeSpaces(line))
    .filter(Boolean);

  const thaiId = idScanExtractThaiId(rawText, lines);

  const allDates = idScanExtractDateList(rawText);
  const dobByLabel = idScanExtractDateByLabel(lines, /(date\s*of\s*bir\w*|เกิดวันที่|วันเกิด)/iu);
  const issueByLabel = idScanExtractDateByLabel(lines, /(date\s*of\s*iss\w*|issued?|วันออกบัตร|ออกบัตร)/iu);
  const expiryByLabel = idScanExtractDateByLabel(lines, /(date\s*of\s*exp\w*|expir\w*|วันหมดอายุ|หมดอายุ|บัตรหมดอายุ)/iu);
  const dob = dobByLabel || allDates[0] || "";
  const issueDate = issueByLabel || (allDates.length >= 3 ? allDates[1] : "");
  const expiryDate = expiryByLabel || (allDates.length >= 2 ? allDates[allDates.length - 1] : "");

  let thaiName = "";
  const thaiLabeledMatch = rawText.match(/(?:ชื่อตัวและชื่อสกุล|ชื่อ-นามสกุล)\s*([^\n]+)/u);
  if (thaiLabeledMatch) {
    thaiName = idScanNormalizeSpaces(thaiLabeledMatch[1].replace(/[^\u0E00-\u0E7F\s]/g, " "));
  }
  if (!thaiName) {
    const thaiTitleMatch = rawText.match(/(?:นาย|นางสาว|นาง)\s*[\u0E00-\u0E7F]{2,}(?:\s+[\u0E00-\u0E7F]{2,}){0,3}/u);
    if (thaiTitleMatch) thaiName = idScanNormalizeSpaces(thaiTitleMatch[0]);
  }
  if (!thaiName) {
    thaiName =
      lines.find((line) =>
        /[\u0E00-\u0E7F]{2,}/u.test(line) &&
        !/(เลข|บัตร|เกิด|ที่อยู่|วันออกบัตร|วันหมดอายุ|สัญชาติ|เพศ|ศาสนา)/u.test(line)
      ) || "";
  }

  let englishName = "";
  const firstNameMatch = rawText.match(/(?:^|\n)\s*(?:name|neme)\s*[:\-]?\s*([A-Za-z .'-]{2,50})/im);
  const lastNameMatch = rawText.match(/(?:^|\n)\s*(?:last\s*name|lastname)\s*[:\-]?\s*([A-Za-z .'-]{2,50})/im);
  if (firstNameMatch) {
    const first = idScanCleanLatin(firstNameMatch[1]);
    const last = lastNameMatch ? idScanCleanLatin(lastNameMatch[1]) : "";
    englishName = idScanNormalizeSpaces(`${first} ${last}`);
  }
  if (!englishName) {
    englishName =
      lines
        .map((line) => line.replace(/^(name|neme|fullname|full name)\s*[:\-]?\s*/i, "").trim())
        .map((line) => idScanCleanLatin(line))
        .find((line) =>
          /[A-Za-z]{2,}/.test(line) &&
          line.split(/\s+/).length >= 2 &&
          !/(THAILAND|IDENTITY|CARD|DATE|BIRTH|NATIONAL|ADDRESS|RELIGION|SEX|HEIGHT)/i.test(line)
        ) || "";
  }

  let gender = "";
  if (/\bFEMALE\b|หญิง/u.test(rawText) || /(?:นางสาว|นาง)\s*[\u0E00-\u0E7F]/u.test(thaiName) || /\b(MS|MRS|MISS)\.?\b/i.test(englishName)) {
    gender = "female";
  } else if (/\bMALE\b|ชาย/u.test(rawText) || /นาย\s*[\u0E00-\u0E7F]/u.test(thaiName) || /\bMR\.?\b/i.test(englishName)) {
    gender = "male";
  }

  let nationality = "";
  const nationalityMatch = rawText.match(/(?:nationality|สัญชาติ)\s*[:\-]?\s*([A-Za-z\u0E00-\u0E7F]+)/iu);
  if (nationalityMatch) {
    const natToken = nationalityMatch[1].toLowerCase();
    if (/thai|ไทย/u.test(natToken)) nationality = "thai";
    else nationality = "other";
  } else if (/thai\s+national\s+id\s+card/i.test(rawText) || /สัญชาติ\s*ไทย/u.test(rawText)) {
    nationality = "thai";
  }

  let address = "";
  const addressIndex = lines.findIndex((line) => /(address|ที่อยู่)/iu.test(line));
  if (addressIndex >= 0) {
    const chunks = [];
    const first = lines[addressIndex].replace(/^.*?(address|ที่อยู่)\s*[:\-]?\s*/iu, "").trim();
    if (first) chunks.push(first);
    for (let i = addressIndex + 1; i < Math.min(lines.length, addressIndex + 6); i += 1) {
      if (
        idScanLooksLikeAddressLine(lines[i]) ||
        /\d{1,4}\s*\/\s*\d{1,4}/.test(lines[i]) ||
        /(หมู่|ต\.|อ\.|จ\.|ถ\.|ซ\.|แขวง|เขต|district|province)/iu.test(lines[i])
      ) {
        chunks.push(lines[i]);
      }
      else if (/(date|issue|expiry|name|religion|sex|nationality|วัน|ชื่อ|ศาสนา|เพศ|สัญชาติ)/iu.test(lines[i])) break;
    }
    address = idScanNormalizeSpaces(chunks.join(" "));
  }
  if (!address) {
    const strongAddressLine = lines.find((line) =>
      /(\d{1,4}\s*\/\s*\d{1,4}|หมู่|ต\.|อ\.|จ\.|ถ\.|ซ\.|แขวง|เขต|district|province)/iu.test(line)
    );
    if (strongAddressLine) address = strongAddressLine;
  }
  if (!address) {
    address =
      lines.find((line) =>
        /[\u0E00-\u0E7F]/u.test(line) &&
        (line.length > 14 || /(ต\.|อ\.|จ\.)/u.test(line)) &&
        !/(เลขประจำตัว|วันเกิด|สัญชาติ|เพศ|ชื่อ|บัตร|ศาสนา|วันออกบัตร|วันหมดอายุ)/u.test(line)
      ) || "";
  }

  return {
    thaiId,
    thaiName,
    englishName,
    dob,
    gender,
    nationality,
    address,
    issueDate,
    expiryDate
  };
};

const idScanApplyImagePreview = (imageUrl) => {
  const img = document.getElementById("ocrPhotoImg");
  const placeholder = document.querySelector(".ocr-field.photo .photo-placeholder");
  if (!img) return;

  img.src = imageUrl;
  img.hidden = false;
  if (placeholder) placeholder.hidden = true;
};

const idScanApplyResult = (result, confidence, fileName, imageUrl, imageDataUrl = "") => {
  const notFound = currentLang === "th" ? "ไม่พบข้อมูล" : "Not found";
  const unknown = currentLang === "th" ? "ไม่ระบุ" : "Unknown";

  const genderLabel =
    result.gender === "female" ? "Female" :
    result.gender === "male" ? "Male" :
    result.gender === "other" ? "Other" :
    unknown;

  const nationalityLabel =
    result.nationality === "thai" ? "Thai" :
    result.nationality === "other" ? "Other" :
    unknown;

  idScanSetText("ocrThaiIdValue", result.thaiId, notFound);
  idScanSetText("ocrThaiNameValue", result.thaiName, notFound);
  idScanSetText("ocrEnglishNameValue", result.englishName, notFound);
  idScanSetText("ocrDobValue", result.dob, notFound);
  idScanSetText("ocrGenderValue", genderLabel, unknown);
  idScanSetText("ocrNationalityValue", nationalityLabel, unknown);
  idScanSetText("ocrAddressValue", result.address, notFound);
  idScanSetText("ocrIssueDateValue", result.issueDate, notFound);
  idScanSetText("ocrExpiryDateValue", result.expiryDate, notFound);

  idScanSetInputValue("regThaiIdInput", result.thaiId);
  idScanSetInputValue("regThaiNameInput", result.thaiName);
  idScanSetInputValue("regEnglishNameInput", result.englishName);
  idScanSetInputValue("regFullNameInput", result.englishName || result.thaiName);
  idScanSetInputValue("regDobInput", result.dob);
  idScanSetInputValue("regAddressInput", result.address);
  idScanSetInputValue("regOcrScoreInput", `${confidence}% (auto OCR)`);
  idScanSetSelectValue("regGenderSelect", result.gender);
  idScanSetSelectValue("regNationalitySelect", result.nationality);

  const statusPill = document.getElementById("ocrProcessingStatusPill");
  if (statusPill) {
    statusPill.classList.add("success");
    statusPill.textContent = currentLang === "th"
      ? `เสร็จสิ้น · OCR ${confidence}%`
      : `Completed · OCR ${confidence}%`;
  }

  const hint = document.getElementById("uploadHintText");
  if (hint) {
    hint.textContent = `${fileName} · OCR ${confidence}%`;
  }

  idScanLastExtracted = { ...result };
  idScanLastConfidence = confidence;
  idScanLastFileName = fileName || "";
  idScanLastImageDataUrl = imageDataUrl || "";

  const sendQueueBtn = document.getElementById("sendQueueBtn");
  if (sendQueueBtn) sendQueueBtn.disabled = false;

  if (imageUrl) {
    idScanApplyImagePreview(imageUrl);
  }

  const resultsPanel = document.getElementById("ocrResultsPanel");
  if (resultsPanel) {
    resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const idScanFormatScanTime = (date = new Date()) => {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const idScanNormalizeThaiIdDisplay = (thaiId) => {
  const digits = (thaiId || "").replace(/\D/g, "");
  if (digits.length !== 13) return thaiId || "";
  return `${digits[0]} ${digits.slice(1, 5)} ${digits.slice(5, 10)} ${digits.slice(10, 12)} ${digits.slice(12)}`;
};

const idScanCreateQueueId = () => {
  let maxId = 2100;
  VQ_RECORDS.forEach((r) => {
    const parsed = parseInt(String(r.id || "").replace(/\D/g, ""), 10);
    if (!Number.isNaN(parsed)) maxId = Math.max(maxId, parsed);
  });
  return `Q-${maxId + 1}`;
};

const idScanSendToVerificationQueue = () => {
  if (!idScanLastExtracted || !idScanLastExtracted.thaiId) {
    const hint = document.getElementById("uploadHintText");
    if (hint) {
      hint.textContent = currentLang === "th"
        ? "กรุณาอัปโหลดภาพบัตรก่อนส่งเข้าคิวตรวจสอบ"
        : "Please upload an ID image first before sending to queue.";
    }
    return;
  }

  const genderLabel =
    idScanLastExtracted.gender === "female" ? "Female" :
    idScanLastExtracted.gender === "male" ? "Male" :
    "Other";

  const queueRecord = {
    id: idScanCreateQueueId(),
    patientName: idScanLastExtracted.englishName || idScanLastExtracted.thaiName || "Unknown",
    thaiName: idScanLastExtracted.thaiName || idScanLastExtracted.englishName || "Unknown",
    thaiId: idScanNormalizeThaiIdDisplay(idScanLastExtracted.thaiId),
    scanTime: idScanFormatScanTime(),
    ocrConfidence: idScanLastConfidence || 0,
    status: "pending",
    assignedTo: currentSession.station || "Reg Desk",
    department: "Registration",
    dob: idScanLastExtracted.dob || "",
    gender: genderLabel,
    address: idScanLastExtracted.address || "",
    idCardImageDataUrl: idScanLastImageDataUrl || "",
    phone: "",
    hn: null,
    notes: idScanLastFileName
      ? `Auto OCR upload from ${idScanLastFileName}. Staff review required.`
      : "Auto OCR upload. Staff review required."
  };

  VQ_RECORDS.unshift(queueRecord);

  addAuditEntry({
    action: "send_queue",
    patientId: queueRecord.id,
    patientName: queueRecord.patientName,
    changes: `Queued OCR result (${queueRecord.ocrConfidence}% confidence)`
  });

  vqCurrentFilter = "all";
  vqSelectedRecordId = queueRecord.id;
  vqRenderStats();
  vqRenderFilters();
  vqRenderTable();

  setActivePage("verification", { _fromNav: false });
  setTimeout(() => vqOpenRecord(queueRecord.id), 120);

  if (typeof vqShowToast === "function") {
    vqShowToast(currentLang === "th"
      ? "ส่งข้อมูลไปยังคิวตรวจสอบแล้ว"
      : "Sent to Verification Queue");
  }
};

const idScanCreateEnhancedCropBlob = (file, crop = { x: 0, y: 0, w: 1, h: 1 }) =>
  new Promise((resolve, reject) => {
    const tempUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      try {
        const sx = Math.max(0, Math.floor(img.width * crop.x));
        const sy = Math.max(0, Math.floor(img.height * crop.y));
        const sw = Math.max(1, Math.floor(img.width * crop.w));
        const sh = Math.max(1, Math.floor(img.height * crop.h));

        const scale = 2;
        const canvas = document.createElement("canvas");
        canvas.width = sw * scale;
        canvas.height = sh * scale;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
          URL.revokeObjectURL(tempUrl);
          reject(new Error("Canvas context unavailable"));
          return;
        }

        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

        // Enhance contrast for tiny footer text (issue/expiry/address).
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const px = imageData.data;
        for (let i = 0; i < px.length; i += 4) {
          const gray = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
          const enhanced = Math.max(0, Math.min(255, (gray - 128) * 1.8 + 128));
          px[i] = enhanced;
          px[i + 1] = enhanced;
          px[i + 2] = enhanced;
        }
        ctx.putImageData(imageData, 0, 0);

        canvas.toBlob((blob) => {
          URL.revokeObjectURL(tempUrl);
          if (!blob) {
            reject(new Error("Could not create OCR crop blob"));
            return;
          }
          resolve(blob);
        }, "image/png");
      } catch (err) {
        URL.revokeObjectURL(tempUrl);
        reject(err);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(tempUrl);
      reject(new Error("Could not load image for OCR enhancement"));
    };
    img.src = tempUrl;
  });

const idScanCollectSupplementalText = async (file) => {
  const crops = [
    // Bottom-left address area
    { x: 0.00, y: 0.50, w: 0.68, h: 0.48 },
    // Bottom-right issue/expiry area
    { x: 0.56, y: 0.52, w: 0.44, h: 0.46 }
  ];

  let extraText = "";
  for (const crop of crops) {
    try {
      const blob = await idScanCreateEnhancedCropBlob(file, crop);
      const ocr = await window.Tesseract.recognize(blob, "tha+eng");
      extraText += `\n${ocr?.data?.text || ""}`;
    } catch (err) {
      // Best-effort enhancement; ignore crop-level failures.
      console.warn("Supplemental OCR crop failed:", err);
    }
  }
  return extraText;
};

const idScanRunOcr = async (file) => {
  if (!file) return;

  const statusPill = document.getElementById("ocrProcessingStatusPill");
  const hint = document.getElementById("uploadHintText");
  const sendQueueBtn = document.getElementById("sendQueueBtn");

  if (sendQueueBtn) sendQueueBtn.disabled = true;

  if (statusPill) {
    statusPill.classList.remove("success");
    statusPill.textContent = currentLang === "th" ? "กำลังประมวลผล OCR..." : "Processing OCR...";
  }
  if (hint) {
    hint.textContent = currentLang === "th"
      ? `กำลังอ่านไฟล์ ${file.name}`
      : `Reading file ${file.name}`;
  }

  try {
    if (!window.Tesseract || typeof window.Tesseract.recognize !== "function") {
      throw new Error("OCR engine not loaded");
    }

    if (idScanLastImageUrl) {
      URL.revokeObjectURL(idScanLastImageUrl);
      idScanLastImageUrl = "";
    }

    const imageUrl = URL.createObjectURL(file);
    idScanLastImageUrl = imageUrl;
    const imageDataUrl = await idScanReadFileAsDataUrl(file);

    const result = await window.Tesseract.recognize(file, "tha+eng", {
      logger: (msg) => {
        if (!statusPill) return;
        if (msg.status === "recognizing text" && typeof msg.progress === "number") {
          const pct = Math.round(msg.progress * 100);
          statusPill.textContent = currentLang === "th"
            ? `กำลังประมวลผล OCR... ${pct}%`
            : `Processing OCR... ${pct}%`;
        }
      }
    });

    const confidence = Math.max(0, Math.min(100, Math.round(result?.data?.confidence || 0)));
    let mergedRawText = result?.data?.text || "";
    let extracted = idScanExtractFields(mergedRawText);

    // If key footer fields are missing, run enhanced crop OCR pass.
    if (!extracted.address || !extracted.expiryDate || !extracted.issueDate) {
      if (statusPill) {
        statusPill.textContent = currentLang === "th"
          ? "กำลังปรับปรุง OCR สำหรับวันที่/ที่อยู่..."
          : "Refining OCR for date/address...";
      }
      const supplemental = await idScanCollectSupplementalText(file);
      if (supplemental.trim()) {
        mergedRawText = `${mergedRawText}\n${supplemental}`;
        extracted = idScanExtractFields(mergedRawText);
      }
    }

    idScanApplyResult(extracted, confidence, file.name, imageUrl, imageDataUrl);

  } catch (err) {
    if (statusPill) {
      statusPill.classList.remove("success");
      statusPill.textContent = currentLang === "th" ? "OCR ล้มเหลว" : "OCR failed";
    }
    if (hint) {
      hint.textContent = currentLang === "th"
        ? "ไม่สามารถอ่านข้อความจากภาพนี้ได้ กรุณาใช้ภาพที่ชัดเจนขึ้น"
        : "Could not read this image. Please upload a clearer photo.";
    }
    if (sendQueueBtn) sendQueueBtn.disabled = !idScanLastExtracted;
    console.error("ID OCR failed:", err);
  }
};

const setupIdScanOcr = () => {
  const uploadInput = document.getElementById("uploadInput");
  if (!uploadInput) return;

  const uploadAnotherBtn = document.getElementById("uploadAnotherBtn");
  const idCardImageInput = document.getElementById("idCardImage");
  const sendQueueBtn = document.getElementById("sendQueueBtn");

  if (sendQueueBtn) {
    sendQueueBtn.disabled = !idScanLastExtracted;
    sendQueueBtn.addEventListener("click", idScanSendToVerificationQueue);
  }

  uploadInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) idScanRunOcr(file);
  });

  if (uploadAnotherBtn) {
    uploadAnotherBtn.addEventListener("click", () => {
      uploadInput.click();
    });
  }

  if (idCardImageInput) {
    idCardImageInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) idScanRunOcr(file);
    });
  }
};

let profileSelectedApprovedId = null;

function profileSetText(id, value, fallback = "-") {
  const el = document.getElementById(id);
  if (!el) return;
  const out = value == null ? "" : String(value).trim();
  el.textContent = out || fallback;
}

function profileGenderLabel(gender) {
  const key = String(gender || "").trim().toLowerCase();
  if (key === "female") return currentLang === "th" ? "หญิง" : "Female";
  if (key === "male") return currentLang === "th" ? "ชาย" : "Male";
  if (key === "other") return currentLang === "th" ? "อื่นๆ" : "Other";
  return currentLang === "th" ? "ไม่ระบุ" : "Unknown";
}

function profileDeptLabel(department) {
  const dept = String(department || "").trim();
  if (!dept) return currentLang === "th" ? "ไม่ระบุ" : "Unknown";
  if (currentLang !== "th") return dept;

  const map = {
    Registration: "ลงทะเบียน",
    OPD: "ผู้ป่วยนอก",
    ICU: "ICU",
    Ward: "วอร์ด",
    Emergency: "ฉุกเฉิน",
    "Diabetes Clinic": "คลินิกเบาหวาน",
    "Hypertension Clinic": "คลินิกความดันโลหิตสูง",
    Admin: "ผู้ดูแลระบบ"
  };
  return map[dept] || dept;
}

function profileAgeFromDob(dob) {
  if (!dob) return "";
  const d = new Date(dob);
  if (Number.isNaN(d.getTime())) return "";
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age -= 1;
  if (age < 0 || age > 130) return "";
  return String(age);
}

function profileApplyRecord(record) {
  if (!record) return;

  const unknown = currentLang === "th" ? "ไม่ระบุ" : "Unknown";
  const noPhone = currentLang === "th" ? "ยังไม่มีเบอร์โทร" : "No phone";
  const noAddress = currentLang === "th" ? "ยังไม่มีที่อยู่" : "No address";
  const unassignedHn = currentLang === "th" ? "ยังไม่กำหนด" : "Not assigned";

  const fullName = record.patientName || record.thaiName || unknown;
  const thaiId = (record.thaiId || "").replace(/\s+/g, " ").trim() || unknown;
  const dob = record.dob || unknown;
  const gender = profileGenderLabel(record.gender);
  const age = profileAgeFromDob(record.dob) || unknown;
  const phone = record.phone || noPhone;
  const address = record.address || noAddress;
  const hn = record.hn || unassignedHn;
  const dept = profileDeptLabel(record.department || "Registration");
  const careTeam = record.assignedTo || (currentLang === "th" ? "ทีมลงทะเบียน" : "Registration Team");

  profileSetText("profileChipDept", dept, unknown);
  profileSetText("profileChipHn", hn, unassignedHn);

  profileSetText("profileFieldFullName", fullName, unknown);
  profileSetText("profileFieldThaiId", thaiId, unknown);
  profileSetText("profileFieldDob", dob, unknown);
  profileSetText("profileFieldGender", gender, unknown);

  profileSetText("profileFieldAge", age, unknown);
  profileSetText("profileFieldPhone", phone, noPhone);
  profileSetText("profileFieldAddress", address, noAddress);
  profileSetText("profileFieldInsurance", record.insurance || "UCS", "UCS");

  profileSetText("profileFieldHn", hn, unassignedHn);
  profileSetText("profileFieldPrimaryDept", dept, unknown);
  profileSetText("profileFieldCareTeam", careTeam, unknown);
}

function profileApplyEmptyState() {
  const unknown = currentLang === "th" ? "ไม่มีข้อมูล" : "No data";
  profileSetText("profileChipDept", unknown, unknown);
  profileSetText("profileChipHn", "-", "-");
  profileSetText("profileFieldFullName", unknown, unknown);
  profileSetText("profileFieldThaiId", unknown, unknown);
  profileSetText("profileFieldDob", unknown, unknown);
  profileSetText("profileFieldGender", unknown, unknown);
  profileSetText("profileFieldAge", unknown, unknown);
  profileSetText("profileFieldPhone", unknown, unknown);
  profileSetText("profileFieldAddress", unknown, unknown);
  profileSetText("profileFieldInsurance", unknown, unknown);
  profileSetText("profileFieldHn", unknown, unknown);
  profileSetText("profileFieldPrimaryDept", unknown, unknown);
  profileSetText("profileFieldCareTeam", unknown, unknown);
}

function profileRefresh() {
  const select = document.getElementById("profileApprovedPatientSelect");
  if (!select || !Array.isArray(VQ_RECORDS)) return;

  const hint = document.getElementById("profileApprovedHint");
  const approved = VQ_RECORDS.filter((r) => r.status === "approved");
  const placeholder = currentLang === "th"
    ? "เลือกผู้ป่วยที่อนุมัติแล้ว"
    : "Select approved patient";
  const noApproved = currentLang === "th"
    ? "ยังไม่มีผู้ป่วยที่อนุมัติจากคิวตรวจสอบ"
    : "No approved patients yet. Approve from Verification Queue first.";

  select.innerHTML = "";
  const placeholderOpt = document.createElement("option");
  placeholderOpt.value = "";
  placeholderOpt.textContent = placeholder;
  select.appendChild(placeholderOpt);

  approved.forEach((r) => {
    const opt = document.createElement("option");
    opt.value = r.id;
    const labelName = r.patientName || r.thaiName || r.id;
    opt.textContent = `${labelName} (${r.id})`;
    select.appendChild(opt);
  });

  if (!approved.length) {
    profileSelectedApprovedId = null;
    select.disabled = true;
    if (hint) hint.textContent = noApproved;
    profileApplyEmptyState();
    return;
  }

  select.disabled = false;
  if (!profileSelectedApprovedId || !approved.some((r) => r.id === profileSelectedApprovedId)) {
    profileSelectedApprovedId = approved[0].id;
  }

  select.value = profileSelectedApprovedId;
  const selected = approved.find((r) => r.id === profileSelectedApprovedId) || approved[0];
  profileApplyRecord(selected);

  if (hint) {
    hint.textContent = currentLang === "th"
      ? `กำลังแสดงข้อมูลจากคิว ${selected.id}`
      : `Showing data from queue ${selected.id}`;
  }
}

function setupPatientProfile() {
  const select = document.getElementById("profileApprovedPatientSelect");
  if (!select || select.dataset.bound === "true") return;

  select.dataset.bound = "true";
  select.addEventListener("change", () => {
    profileSelectedApprovedId = select.value || null;
    profileRefresh();
  });

  window.addEventListener("nightingale-lang-change", () => {
    profileRefresh();
  });

  profileRefresh();
}

const init = () => {
  applyLanguage(currentLang);

  const storedPage = localStorage.getItem("nightingale-page");
  const hashPage = window.location.hash.replace("#", "");
  const initialPage = currentSession.isLoggedIn
    ? (hashPage || storedPage || "dashboard")
    : "login";
  setActivePage(initialPage, { updateHash: false });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      setActivePage(item.dataset.page);
    });
  });

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActivePage(button.dataset.pageTarget);
    });
  });

  langToggleButtons.forEach((button) => {
    button.addEventListener("click", toggleLanguage);
  });

  window.addEventListener("hashchange", () => {
    const target = window.location.hash.replace("#", "");
    if (target) {
      setActivePage(target, { updateHash: false });
    }
  });

  document.body.classList.add("loaded");

  setupIdScanOcr();
  setupRegistrationForm();
  setupVerificationQueue();
  setupPatientProfile();
  setupLoginCapture();
  setupLogoutControl();
  enforceAccess();
  setupAuditLog();
  setupEmrIntelligence();
  if (typeof setupAISummary === "function") setupAISummary();
};

// ============================================================
// VERIFICATION QUEUE
// ============================================================

// Queue records start empty and are populated from real uploaded OCR data.
const VQ_RECORDS = [];

// ── Existing patient database for matching ────────────────────
const VQ_EXISTING_PATIENTS = [
  {
    hn: "HN-2026-01983",
    patientName: "Somchai Thapkhan",
    thaiName: "สมชาย ทับขัน",
    thaiId: "1 1026 00789 01 2",
    dob: "1982-06-30",
    phone: "089-776-3412",
    department: "OPD",
    lastVisit: "2026-05-14"
  },
  {
    hn: "HN-2025-00781",
    patientName: "Kanok Pornpan",
    thaiName: "กนก พรพันธ์",
    thaiId: "1 1017 00234 56 7",
    dob: "1991-09-23",
    phone: "086-100-9900",
    department: "OPD",
    lastVisit: "2026-03-08"
  },
  {
    hn: "HN-2026-00892",
    patientName: "Pisut Ruangsri",
    thaiName: "พิสุทธิ์ เรืองศรี",
    thaiId: "3 6701 00123 45 6",
    dob: "1978-03-15",
    phone: "091-445-7821",
    department: "ICU",
    lastVisit: "2026-05-20"
  },
  {
    hn: "HN-2024-01234",
    patientName: "Mali Sae-nga",
    thaiName: "มาลี แสงงา",
    thaiId: "1 3099 00456 79 0",
    dob: "1965-11-07",
    phone: "042-311-8820",
    department: "Ward",
    lastVisit: "2025-12-03"
  }
];

// ── State ─────────────────────────────────────────────────────
let vqCurrentFilter = "all";
let vqSelectedRecordId = null;
let vqSelectedMatchHn = null;
let vqPendingAction = null;

// ── Helpers ───────────────────────────────────────────────────
const vqT = (key) => (translations[currentLang] || translations.en)[key] || key;

const vqLevenshtein = (a, b) => {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => (j === 0 ? i : 0)));
  for (let j = 1; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
};

const vqStrSim = (a, b) => {
  if (!a || !b) return 0;
  a = a.toLowerCase().trim();
  b = b.toLowerCase().trim();
  if (a === b) return 1;
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  return (longer.length - vqLevenshtein(longer, shorter)) / longer.length;
};

const vqNormalizeId = (id) => (id || "").replace(/[\s-]/g, "");

const vqMatchPatients = (record) => {
  return VQ_EXISTING_PATIENTS.map((ex) => {
    let score = 0;
    const matched = [];

    // Thai ID exact match (50 pts) — strongest signal
    if (vqNormalizeId(ex.thaiId) === vqNormalizeId(record.thaiId)) {
      score += 50;
      matched.push("Thai ID");
    }

    // Name similarity (20 pts)
    const nameSim = vqStrSim(record.patientName, ex.patientName);
    if (nameSim >= 0.85) { score += 20; matched.push("Full Name"); }
    else if (nameSim >= 0.65) { score += 10; matched.push("Name (partial)"); }

    // DOB exact (15 pts)
    if (ex.dob && ex.dob === record.dob) { score += 15; matched.push("Date of Birth"); }

    // Phone match (10 pts)
    if (ex.phone && ex.phone === record.phone) { score += 10; matched.push("Phone"); }

    // HN match (5 pts)
    if (record.hn && ex.hn === record.hn) { score += 5; matched.push("HN"); }

    return { ...ex, score: Math.min(score, 100), matched };
  })
    .filter((m) => m.score >= 10)
    .sort((a, b) => b.score - a.score);
};

const vqConfLevel = (pct) => (pct >= 85 ? "high" : pct >= 70 ? "medium" : "low");

const vqStatusPillHtml = (status) => {
  const map = {
    pending: ["pending", "vqStatusPending"],
    approved: ["approved", "vqStatusApproved"],
    rejected: ["rejected", "vqStatusRejected"],
    "needs-rescan": ["needs-rescan", "vqStatusNeedsRescan"]
  };
  const [cls, key] = map[status] || ["pending", "vqStatusPending"];
  return `<span class="status-pill ${cls}">${vqT(key)}</span>`;
};

const vqShowToast = (msg) => {
  const existing = document.querySelector(".vq-toast");
  if (existing) existing.remove();
  const el = document.createElement("div");
  el.className = "vq-toast";
  el.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>${msg}`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
};

// ── Render Stats Row ──────────────────────────────────────────
const vqRenderStats = () => {
  const row = document.getElementById("vqStatsRow");
  if (!row) return;
  const counts = { total: VQ_RECORDS.length, pending: 0, "needs-rescan": 0, approved: 0, rejected: 0 };
  VQ_RECORDS.forEach((r) => { if (counts[r.status] !== undefined) counts[r.status]++; });

  row.innerHTML = `
    <div class="vq-stat">
      <div class="vq-stat-label">${vqT("vqStatTotal")}</div>
      <div class="vq-stat-value">${counts.total}</div>
      <div class="vq-stat-sub gray">All records</div>
    </div>
    <div class="vq-stat">
      <div class="vq-stat-label">${vqT("vqStatPending")}</div>
      <div class="vq-stat-value">${counts.pending}</div>
      <div class="vq-stat-sub blue">Awaiting review</div>
    </div>
    <div class="vq-stat">
      <div class="vq-stat-label">${vqT("vqStatNeedsRescan")}</div>
      <div class="vq-stat-value">${counts["needs-rescan"]}</div>
      <div class="vq-stat-sub amber">Requires rescan</div>
    </div>
    <div class="vq-stat">
      <div class="vq-stat-label">${vqT("vqStatApproved")}</div>
      <div class="vq-stat-value">${counts.approved}</div>
      <div class="vq-stat-sub green">Completed</div>
    </div>
    <div class="vq-stat">
      <div class="vq-stat-label">${vqT("vqStatRejected")}</div>
      <div class="vq-stat-value">${counts.rejected}</div>
      <div class="vq-stat-sub coral">Flagged</div>
    </div>`;

  // Header chips
  const chips = document.getElementById("vqHeaderChips");
  if (chips) {
    chips.innerHTML = `
      <span class="chip">${counts.pending} ${vqT("vqStatPending")}</span>
      <span class="chip soft">${counts["needs-rescan"]} ${vqT("vqStatNeedsRescan")}</span>`;
  }
};

// ── Render Filter Bar ─────────────────────────────────────────
const vqRenderFilters = () => {
  const bar = document.getElementById("vqFilterBar");
  if (!bar) return;
  const filters = [
    { key: "all", label: vqT("vqFilterAll") },
    { key: "pending", label: vqT("vqFilterPending") },
    { key: "needs-rescan", label: vqT("vqFilterNeedsRescan") },
    { key: "approved", label: vqT("vqFilterApproved") },
    { key: "rejected", label: vqT("vqFilterRejected") }
  ];
  bar.innerHTML = filters
    .map((f) => `<button class="vq-filter-btn${vqCurrentFilter === f.key ? " active" : ""}" type="button" data-vq-filter="${f.key}">${f.label}</button>`)
    .join("");
  bar.querySelectorAll(".vq-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      vqCurrentFilter = btn.dataset.vqFilter;
      vqRenderFilters();
      vqRenderTable();
    });
  });
};

// ── Render Queue Table ────────────────────────────────────────
const vqRenderTable = () => {
  const tbody = document.getElementById("vqTableBody");
  if (!tbody) return;
  const filtered = vqCurrentFilter === "all"
    ? VQ_RECORDS
    : VQ_RECORDS.filter((r) => r.status === vqCurrentFilter);

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--gray-400);padding:28px 0;">No records match this filter.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((r) => {
    const lvl = vqConfLevel(r.ocrConfidence);
    const isSelected = r.id === vqSelectedRecordId;
    return `<tr class="${isSelected ? "selected" : ""}" data-vq-id="${r.id}">
      <td class="vq-name-cell">
        <strong>${r.patientName}</strong>
        <span>${r.thaiName}</span>
      </td>
      <td style="font-family:monospace;font-size:0.8rem;">${r.thaiId}</td>
      <td style="font-size:0.8rem;white-space:nowrap;">${r.scanTime}</td>
      <td>
        <div class="vq-conf-cell">
          <div class="vq-mini-bar"><div class="vq-mini-fill ${lvl}" style="width:${r.ocrConfidence}%"></div></div>
          <span style="font-size:0.8rem;font-weight:600;">${r.ocrConfidence}%</span>
        </div>
      </td>
      <td>${vqStatusPillHtml(r.status)}</td>
      <td style="font-size:0.8rem;">${r.assignedTo}</td>
      <td>
        ${r.approvedBy ? `<div class="vq-approved-by" title="Approved by ${r.approvedBy} (${r.approvedByRole})">&#10003; ${r.approvedBy}</div>` : ""}
        <button class="ghost small" type="button" data-vq-open="${r.id}">${vqT("vqBtnReview")}</button>
      </td>
    </tr>`;
  }).join("");

  tbody.querySelectorAll("tr").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.dataset.vqId;
      if (id) vqOpenRecord(id);
    });
  });
};

// ── Render ID Card SVG ────────────────────────────────────────
const vqRenderIdCard = (record) => {
  const uploadedSrc = record.idCardImageDataUrl || "";
  if (uploadedSrc) {
    return `<img class="vq-id-card-image" src="${uploadedSrc}" alt="Uploaded ID card image" loading="lazy" />`;
  }

  const lvl = vqConfLevel(record.ocrConfidence);
  const confColor = lvl === "high" ? "#4ade80" : lvl === "medium" ? "#facc15" : "#f87171";
  return `<svg class="vq-id-card-svg" viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Thai National ID Card for ${record.patientName}">
    <!-- Card body -->
    <rect width="560" height="340" rx="18" fill="#1B3A6E"/>
    <!-- Thai flag stripe -->
    <rect x="0" y="0" width="560" height="10" rx="18" fill="#A51931"/>
    <rect x="0" y="0" width="560" height="6" fill="#A51931"/>
    <rect x="0" y="6" width="560" height="5" fill="#F4F5F8"/>
    <rect x="0" y="11" width="560" height="8" fill="#2D2A4A"/>
    <rect x="0" y="19" width="560" height="5" fill="#F4F5F8"/>
    <rect x="0" y="24" width="560" height="8" fill="#A51931"/>
    <!-- Header text -->
    <text x="280" y="62" text-anchor="middle" font-size="16" fill="rgba(255,255,255,0.92)" font-family="'Noto Sans Thai',Arial,sans-serif" font-weight="700" letter-spacing="1">บัตรประจำตัวประชาชน</text>
    <text x="280" y="78" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.55)" font-family="Arial,sans-serif" letter-spacing="0.8">THAILAND NATIONAL IDENTIFICATION CARD</text>
    <!-- Photo area -->
    <rect x="24" y="92" width="118" height="150" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
    <circle cx="83" cy="150" r="28" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <path d="M83 140 m-12 0 a12 12 0 0 1 24 0" fill="rgba(255,255,255,0.12)"/>
    <circle cx="83" cy="136" r="8" fill="rgba(255,255,255,0.14)"/>
    <text x="83" y="222" text-anchor="middle" font-size="8" fill="rgba(255,255,255,0.35)" font-family="Arial">PHOTO</text>
    <!-- Thai ID Number -->
    <text x="156" y="108" font-size="9" fill="rgba(255,255,255,0.5)" font-family="Arial">เลขประจำตัวประชาชน / National Identification Number</text>
    <text x="156" y="130" font-size="17" fill="white" font-family="'Courier New',monospace" font-weight="700" letter-spacing="2">${record.thaiId}</text>
    <!-- Thai Name -->
    <text x="156" y="155" font-size="9" fill="rgba(255,255,255,0.5)" font-family="Arial">ชื่อตัว-ชื่อสกุล</text>
    <text x="156" y="172" font-size="14" fill="white" font-family="'Noto Sans Thai',Arial,sans-serif">${record.thaiName}</text>
    <!-- English Name -->
    <text x="156" y="193" font-size="9" fill="rgba(255,255,255,0.5)" font-family="Arial">Name</text>
    <text x="156" y="208" font-size="13" fill="rgba(255,255,255,0.9)" font-family="Arial">${record.patientName}</text>
    <!-- DOB -->
    <text x="156" y="228" font-size="9" fill="rgba(255,255,255,0.5)" font-family="Arial">เกิดวันที่ / Date of Birth</text>
    <text x="156" y="243" font-size="13" fill="rgba(255,255,255,0.9)" font-family="Arial">${record.dob}</text>
    <!-- Divider -->
    <line x1="24" y1="265" x2="536" y2="265" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <!-- Footer info -->
    <text x="30" y="283" font-size="8.5" fill="rgba(255,255,255,0.35)" font-family="Arial">Record: ${record.id} • Dept: ${record.department} • Scanned: ${record.scanTime}</text>
    <!-- OCR confidence badge -->
    <rect x="396" y="273" width="140" height="30" rx="8" fill="rgba(0,0,0,0.35)"/>
    <text x="408" y="285" font-size="8" fill="rgba(255,255,255,0.45)" font-family="Arial">OCR Confidence</text>
    <text x="408" y="298" font-size="13" fill="${confColor}" font-family="Arial" font-weight="700">${record.ocrConfidence}%</text>
    <!-- Barcode representation -->
    <rect x="390" y="310" width="146" height="20" rx="4" fill="rgba(255,255,255,0.06)"/>
    <text x="463" y="324" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.25)" font-family="Arial" letter-spacing="1">| | | | | | | | | | | | | | |</text>
  </svg>`;
};

// ── Render OCR Data Grid ──────────────────────────────────────
const vqRenderOcrData = (record) => {
  const lvl = vqConfLevel(record.ocrConfidence);
  const flagClass = lvl === "low" ? "flag-low" : lvl === "medium" ? "flag-medium" : "";
  const fields = [
    { label: vqT("vqFieldThaiId"), value: record.thaiId, flag: "" },
    { label: vqT("vqFieldDob"), value: record.dob, flag: record.ocrConfidence < 75 ? "flag-medium" : "" },
    { label: vqT("vqFieldThaiName"), value: record.thaiName, flag: flagClass, full: false },
    { label: vqT("vqFieldEnName"), value: record.patientName, flag: "", full: false },
    { label: vqT("vqFieldGender"), value: record.gender, flag: "" },
    { label: vqT("vqFieldDept"), value: record.department, flag: "" },
    { label: vqT("vqFieldPhone"), value: record.phone, flag: "" },
    { label: vqT("vqFieldAddress"), value: record.address, flag: "", full: true }
  ];
  return fields.map((f) =>
    `<div class="vq-ocr-item${f.full ? " full" : ""} ${f.flag}">
      <span class="vq-ocr-item-label">${f.label}</span>
      <span class="vq-ocr-item-value">${f.value || "—"}</span>
    </div>`
  ).join("");
};

// ── Render Confirmation Form ──────────────────────────────────
const vqRenderConfirmForm = (record) => {
  const field = (id, label, value, type = "text", fullWidth = false) =>
    `<label class="${fullWidth ? "vq-field-full" : ""}">
      <span>${label}</span>
      <input type="${type}" id="vqF_${id}" value="${value || ""}" />
    </label>`;

  return `
    ${field("thaiId", vqT("vqFieldThaiId"), record.thaiId)}
    ${field("dob", vqT("vqFieldDob"), record.dob, "date")}
    ${field("thaiName", vqT("vqFieldThaiName"), record.thaiName)}
    ${field("enName", vqT("vqFieldEnName"), record.patientName)}
    <label>
      <span>${vqT("vqFieldGender")}</span>
      <select id="vqF_gender">
        <option value="Female" ${record.gender === "Female" ? "selected" : ""}>Female / หญิง</option>
        <option value="Male" ${record.gender === "Male" ? "selected" : ""}>Male / ชาย</option>
        <option value="Other" ${record.gender === "Other" ? "selected" : ""}>Other / อื่นๆ</option>
      </select>
    </label>
    ${field("phone", vqT("vqFieldPhone"), record.phone, "tel")}
    ${field("address", vqT("vqFieldAddress"), record.address, "text", true)}
    <label class="vq-field-full">
      <span>${vqT("vqFieldNotes")}</span>
      <input type="text" id="vqF_notes" value="${record.notes || ""}" />
    </label>`;
};

// ── Render Patient Matches ────────────────────────────────────
const vqRenderMatches = (record) => {
  const matches = vqMatchPatients(record);
  if (!matches.length) {
    return `<div class="vq-no-matches">${vqT("vqNoMatches")}</div>`;
  }
  return `<div class="vq-match-list">${matches.map((m) => {
    const lvl = m.score >= 75 ? "high" : m.score >= 40 ? "medium" : "low";
    const isSelected = vqSelectedMatchHn === m.hn;
    return `<div class="vq-match-card${isSelected ? " selected" : ""}" data-vq-match-hn="${m.hn}">
      <div class="vq-match-top">
        <div>
          <div class="vq-match-name">${m.patientName}</div>
          <div class="vq-match-thai-name">${m.thaiName}</div>
        </div>
        <span class="vq-match-score-badge ${lvl}">${m.score}% ${vqT("vqMatchScore")}</span>
      </div>
      <div class="vq-match-meta">
        <div class="vq-match-meta-item">
          <span class="vq-match-meta-label">${vqT("vqMatchHn")}</span>
          <span class="vq-match-meta-val">${m.hn}</span>
        </div>
        <div class="vq-match-meta-item">
          <span class="vq-match-meta-label">${vqT("vqMatchLastVisit")}</span>
          <span class="vq-match-meta-val">${m.lastVisit}</span>
        </div>
        <div class="vq-match-meta-item">
          <span class="vq-match-meta-label">${vqT("vqMatchDept")}</span>
          <span class="vq-match-meta-val">${m.department}</span>
        </div>
      </div>
      <div class="vq-match-fields-row">
        <span style="font-size:0.7rem;color:var(--gray-400);margin-right:4px;">${vqT("vqMatchFields")}:</span>
        ${m.matched.map((f) => `<span class="vq-match-field-tag">${f}</span>`).join("")}
      </div>
      <div class="vq-match-actions">
        <button class="ghost small" type="button" data-vq-select-match="${m.hn}">
          ${isSelected ? vqT("vqMatchSelected") : vqT("vqBtnSelectMatch")}
        </button>
      </div>
    </div>`;
  }).join("")}</div>`;
};

// ── Render Approval Controls ──────────────────────────────────
const vqRenderApprovalGrid = (record) => {
  const hasMatch = !!vqSelectedMatchHn;
  const icon = (paths) => `<svg viewBox="0 0 24 24">${paths}</svg>`;
  const icons = {
    approveNew:   icon(`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>`),
    approveMatch: icon(`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>`),
    edit:         icon(`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`),
    reject:       icon(`<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`),
    rescan:       icon(`<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>`)
  };

  return `
    <button class="vq-approval-action approve-new" type="button" data-vq-action="approve-new">
      <div class="vq-action-icon">${icons.approveNew}</div>
      <div class="vq-action-title">${vqT("vqBtnApproveNew")}</div>
      <div class="vq-action-desc">${vqT("vqDescApproveNew")}</div>
    </button>
    <button class="vq-approval-action approve-match" type="button" data-vq-action="approve-match" ${!hasMatch ? "disabled" : ""}>
      <div class="vq-action-icon">${icons.approveMatch}</div>
      <div class="vq-action-title">${vqT("vqBtnApproveMatch")}</div>
      <div class="vq-action-desc">${hasMatch ? `HN: ${vqSelectedMatchHn}` : vqT("vqDescApproveMatch")}</div>
    </button>
    <button class="vq-approval-action edit-fields" type="button" data-vq-action="edit-fields">
      <div class="vq-action-icon">${icons.edit}</div>
      <div class="vq-action-title">${vqT("vqBtnEditFields")}</div>
      <div class="vq-action-desc">${vqT("vqDescEditFields")}</div>
    </button>
    <button class="vq-approval-action rescan" type="button" data-vq-action="rescan">
      <div class="vq-action-icon">${icons.rescan}</div>
      <div class="vq-action-title">${vqT("vqBtnRescan")}</div>
      <div class="vq-action-desc">${vqT("vqDescRescan")}</div>
    </button>
    <button class="vq-approval-action reject full-width" type="button" data-vq-action="reject">
      <div class="vq-action-icon">${icons.reject}</div>
      <div class="vq-action-title">${vqT("vqBtnReject")}</div>
      <div class="vq-action-desc">${vqT("vqDescReject")}</div>
    </button>`;
};

// ── Open Record ───────────────────────────────────────────────
const vqOpenRecord = (id) => {
  const record = VQ_RECORDS.find((r) => r.id === id);
  if (!record) return;

  vqSelectedRecordId = id;
  vqSelectedMatchHn = null;

  // Highlight selected row
  document.querySelectorAll("#vqTableBody tr").forEach((row) => {
    row.classList.toggle("selected", row.dataset.vqId === id);
  });

  // Show detail panel
  document.getElementById("vqDetailEmpty").hidden = true;
  document.getElementById("vqDetailContent").hidden = false;

  // 1. ID Card
  const cardWrap = document.getElementById("vqIdCardWrap");
  if (cardWrap) cardWrap.innerHTML = vqRenderIdCard(record);

  // 2. OCR Bar + Grid
  const lvl = vqConfLevel(record.ocrConfidence);
  const lvlLabel = vqT(lvl === "high" ? "vqOcrHigh" : lvl === "medium" ? "vqOcrMedium" : "vqOcrLow");
  const ocrBar = document.getElementById("vqOcrBar");
  if (ocrBar) {
    ocrBar.innerHTML = `<div class="vq-conf-bar-wrap">
      <span class="vq-conf-label">${vqT("vqOcrConfLabel")}</span>
      <div class="vq-conf-bar"><div class="vq-conf-fill ${lvl}" style="width:${record.ocrConfidence}%"></div></div>
      <span class="vq-conf-pct ${lvl}">${record.ocrConfidence}%</span>
      <span class="vq-conf-badge ${lvl}">${lvlLabel}</span>
    </div>`;
  }
  const ocrGrid = document.getElementById("vqOcrGrid");
  if (ocrGrid) ocrGrid.innerHTML = vqRenderOcrData(record);

  // 3. Confirmation Form
  const confirmForm = document.getElementById("vqConfirmForm");
  if (confirmForm) confirmForm.innerHTML = vqRenderConfirmForm(record);

  // 4. Patient Matches
  vqRefreshMatches(record);

  // 5. Approval Grid
  vqRefreshApprovalGrid(record);

  // Scroll detail panel to top
  const detail = document.getElementById("vqDetailPanel");
  if (detail) detail.scrollTop = 0;
};

const vqRefreshMatches = (record) => {
  const matchResults = document.getElementById("vqMatchResults");
  if (!matchResults) return;
  matchResults.innerHTML = vqRenderMatches(record);

  matchResults.querySelectorAll("[data-vq-select-match]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const hn = btn.dataset.vqSelectMatch;
      vqSelectedMatchHn = vqSelectedMatchHn === hn ? null : hn;
      vqRefreshMatches(record);
      vqRefreshApprovalGrid(record);
    });
  });
};

const vqRefreshApprovalGrid = (record) => {
  const grid = document.getElementById("vqApprovalGrid");
  if (!grid) return;
  grid.innerHTML = vqRenderApprovalGrid(record);

  grid.querySelectorAll("[data-vq-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.vqAction;
      if (action === "edit-fields") {
        // Scroll to confirmation form
        const sec3 = document.querySelector("#vqDetailContent .vq-review-section:nth-child(3)");
        if (sec3) sec3.scrollIntoView({ behavior: "smooth", block: "start" });
        const firstInput = document.querySelector("#vqConfirmForm input, #vqConfirmForm select");
        if (firstInput) setTimeout(() => firstInput.focus(), 400);
        return;
      }
      vqShowDialog(action, record);
    });
  });
};

// ── Confirmation Dialog ───────────────────────────────────────
const vqSetupDialog = () => {
  const overlay = document.getElementById("vqDialogOverlay");
  const cancelBtn = document.getElementById("vqDialogCancel");
  if (!overlay || !cancelBtn) return;

  cancelBtn.addEventListener("click", () => {
    overlay.hidden = true;
    vqPendingAction = null;
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.hidden = true;
      vqPendingAction = null;
    }
  });

  document.getElementById("vqDialogConfirm").addEventListener("click", () => {
    if (!vqPendingAction) return;
    const { action, record } = vqPendingAction;
    overlay.hidden = true;

    const reason = document.getElementById("vqDialogReason")?.value.trim() || null;

    // Update record status in mock data
    const idx = VQ_RECORDS.findIndex((r) => r.id === record.id);
    if (idx !== -1) {
      if (action === "approve-new" || action === "approve-match") {
        VQ_RECORDS[idx].status = "approved";
        // Privacy rule: record who approved and when
        VQ_RECORDS[idx].approvedBy     = currentSession.staffId  || "DEMO";
        VQ_RECORDS[idx].approvedByRole = currentSession.role     || "registration";
        VQ_RECORDS[idx].approvedAt     = new Date().toISOString();
        VQ_RECORDS[idx].approvedMatchHn = action === "approve-match" ? (vqSelectedMatchHn || null) : null;
        if (action === "approve-match" && vqSelectedMatchHn) {
          VQ_RECORDS[idx].hn = vqSelectedMatchHn;
        } else if (!VQ_RECORDS[idx].hn) {
          VQ_RECORDS[idx].hn = `HN-${new Date().getFullYear()}-${String(Date.now()).slice(-5)}`;
        }
        profileSelectedApprovedId = record.id;
      } else if (action === "reject") {
        VQ_RECORDS[idx].status         = "rejected";
        VQ_RECORDS[idx].rejectedBy     = currentSession.staffId  || "DEMO";
        VQ_RECORDS[idx].rejectedAt     = new Date().toISOString();
        VQ_RECORDS[idx].rejectReason   = reason;
      } else if (action === "rescan") {
        VQ_RECORDS[idx].status         = "needs-rescan";
        VQ_RECORDS[idx].rescanReason   = reason;
      }
    }

    // Audit log — all VQ decisions must be logged (privacy rule)
    const auditActionMap = {
      "approve-new":   "approve_new",
      "approve-match": "approve_match",
      "reject":        "reject",
      "rescan":        "rescan"
    };
    addAuditEntry({
      action:      auditActionMap[action] || action,
      patientId:   record.id,
      patientName: record.patientName,
      changes:     action === "approve-new"   ? "New patient profile created" :
                   action === "approve-match" ? `Linked to HN: ${vqSelectedMatchHn || "—"}` :
                   action === "reject"        ? `Rejected${reason ? `: ${reason}` : ""}` :
                                               `Rescan requested${reason ? `: ${reason}` : ""}`,
      notes:       reason
    });

    // Toast
    const toastMap = {
      "approve-new":   "vqToastApproveNew",
      "approve-match": "vqToastApproveMatch",
      "reject":        "vqToastReject",
      "rescan":        "vqToastRescan"
    };
    vqShowToast(vqT(toastMap[action] || "vqToastApproveNew"));

    // Re-render queue and stats
    vqRenderStats();
    vqRenderTable();

    // Continue workflow by opening profile after successful approval.
    if ((action === "approve-new" || action === "approve-match") && canAccess("profile")) {
      setActivePage("profile", { _fromNav: false });
    }

    // Close detail if approved/rejected
    if (action !== "rescan") {
      document.getElementById("vqDetailEmpty").hidden = false;
      document.getElementById("vqDetailContent").hidden = true;
      vqSelectedRecordId = null;
    }

    vqPendingAction = null;
  });
};

const vqShowDialog = (action, record) => {
  const overlay = document.getElementById("vqDialogOverlay");
  const iconEl = document.getElementById("vqDialogIcon");
  const titleEl = document.getElementById("vqDialogTitle");
  const bodyEl = document.getElementById("vqDialogBody");
  const confirmBtn = document.getElementById("vqDialogConfirm");
  const reasonWrap = document.getElementById("vqDialogReasonWrap");
  const cancelBtn = document.getElementById("vqDialogCancel");

  if (!overlay) return;

  const configs = {
    "approve-new": {
      iconClass: "approve-new",
      title: vqT("vqDialogApproveNewTitle"),
      body: vqT("vqDialogApproveNewBody"),
      iconPaths: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>`,
      iconStroke: "#1f9d8f",
      showReason: false
    },
    "approve-match": {
      iconClass: "approve-match",
      title: vqT("vqDialogApproveMatchTitle"),
      body: `${vqT("vqDialogApproveMatchBody")} (HN: ${vqSelectedMatchHn || "—"})`,
      iconPaths: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>`,
      iconStroke: "var(--blue)",
      showReason: false
    },
    "reject": {
      iconClass: "reject",
      title: vqT("vqDialogRejectTitle"),
      body: vqT("vqDialogRejectBody"),
      iconPaths: `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`,
      iconStroke: "#ef6f6c",
      showReason: true
    },
    "rescan": {
      iconClass: "rescan",
      title: vqT("vqDialogRescanTitle"),
      body: vqT("vqDialogRescanBody"),
      iconPaths: `<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>`,
      iconStroke: "#b7791f",
      showReason: true
    }
  };

  const cfg = configs[action];
  if (!cfg) return;

  iconEl.className = `vq-dialog-icon ${cfg.iconClass}`;
  iconEl.innerHTML = `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="${cfg.iconStroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${cfg.iconPaths}</svg>`;
  titleEl.textContent = cfg.title;
  bodyEl.textContent = cfg.body;
  confirmBtn.textContent = vqT("vqDialogConfirm");
  cancelBtn.textContent = vqT("vqBtnCancel");
  reasonWrap.hidden = !cfg.showReason;

  const reasonInput = document.getElementById("vqDialogReason");
  if (reasonInput) {
    reasonInput.placeholder = vqT("vqReasonPlaceholder");
    reasonInput.value = "";
  }

  vqPendingAction = { action, record };
  overlay.hidden = false;

  // Focus confirm button
  setTimeout(() => confirmBtn.focus(), 100);
};

// ── Setup ─────────────────────────────────────────────────────
const setupVerificationQueue = () => {
  vqRenderStats();
  vqRenderFilters();
  vqRenderTable();
  vqSetupDialog();

  // Re-render on language change
  window.addEventListener("nightingale-lang-change", () => {
    vqRenderStats();
    vqRenderFilters();
    vqRenderTable();
    if (vqSelectedRecordId) vqOpenRecord(vqSelectedRecordId);
  });
};

// ============================================================
// EMR INTELLIGENCE — Longitudinal Timeline + ICU Analysis
// ============================================================

// ── Medication label map ──────────────────────────────────────
const EMR_MED_LABELS = {
  metformin_500mg:             "Metformin 500 mg",
  metformin_1000mg:            "Metformin 1000 mg",
  insulin_basal:               "Insulin (Basal)",
  dapagliflozin_10mg:          "Dapagliflozin 10 mg",
  sitagliptin_100mg:           "Sitagliptin 100 mg",
  semaglutide:                 "Semaglutide",
  amlodipine_5mg:              "Amlodipine 5 mg",
  CCB_amlodipine:              "CCB – Amlodipine",
  rosuvastatin_10mg:           "Rosuvastatin 10 mg",
  rosuvastatin_20mg:           "Rosuvastatin 20 mg",
  ARB_valsartan:               "ARB – Valsartan",
  ARB_losartan_50mg:           "ARB – Losartan 50 mg",
  ARB_losartan_100mg:          "ARB – Losartan 100 mg",
  ACEI_enalapril_5mg:          "ACEI – Enalapril 5 mg",
  ACEI_enalapril_10mg:         "ACEI – Enalapril 10 mg",
  ACEI_perindopril_4mg:        "ACEI – Perindopril 4 mg",
  ACEI_perindopril_8mg:        "ACEI – Perindopril 8 mg",
  CCB_amlodipine_5mg:          "CCB – Amlodipine 5 mg",
  CCB_amlodipine_10mg:         "CCB – Amlodipine 10 mg",
  beta_blocker_bisoprolol_5mg: "β-Blocker – Bisoprolol 5 mg",
  diuretics_hydrochlorothiazide_12_5mg: "Diuretic – HCTZ 12.5 mg",
  diuretics_hydrochlorothiazide_12: "Diuretic – HCTZ 12.5 mg",
  "diuretics_hydrochlorothiazide_12.5mg": "Diuretic – HCTZ 12.5 mg",
  diuretics_hydrochlorothiazide_25mg: "Diuretic – HCTZ 25 mg"
};

const emrMedLabel = (key) => EMR_MED_LABELS[key] || key.replace(/_/g, " ");

const EMR_COMORB_LABELS = {
  ht: "Hypertension",   dm: "Diabetes",       cad: "CAD",
  hf: "Heart Failure",  stroke: "Stroke",      ckd: "CKD",
  arrhythmias: "Arrhythmia", atrial_fibrillation: "Atrial Fibrillation"
};

// ── Longitudinal Timeline ─────────────────────────────────────

let ltCurrentPatientId = null;
let ltCurrentType = "dm"; // 'dm' | 'ht'
let ltActiveFilter = "all"; // 'all' | 'dm' | 'ht' | 'icu'

const ltT = (key) => (translations[currentLang] || translations.en)[key] || (translations.en)[key] || key;

// ── Filter helpers ────────────────────────────────────────────
const ltIsIcuPatient = (pt) => !!(pt.source && pt.source.toUpperCase().includes("ICU"));

const ltBuildPatientOptions = () => {
  const sel = document.getElementById("ltPatientSelect");
  if (!sel) return;

  const f = ltActiveFilter;
  const showDm  = f === "all" || f === "dm"  || f === "icu";
  const showHt  = f === "all" || f === "ht"  || f === "icu";

  const dmPts = EMR_DIABETES_PATIENTS.filter((p) => showDm && (f !== "icu" || ltIsIcuPatient(p)));
  const htPts = EMR_HT_PATIENTS.filter((p)       => showHt && (f !== "icu" || ltIsIcuPatient(p)));
  const vqPts = (f === "all" || f === "icu")
    ? VQ_RECORDS.filter((r) => r.status === "approved" || r.status === "pending")
    : [];

  // Clear and rebuild options
  sel.innerHTML = `<option value="">\u2014 Select patient \u2014</option>`;

  const groups = [
    { label: "Verified Patients (VQ)",     items: vqPts.map((r)  => ({ value: r.id,         text: `${r.patientName} \u2013 ${r.id}` })) },
    { label: "Diabetes EMR Records",        items: dmPts.map((p)  => ({ value: "DM:" + p.id, text: `${p.name} \u2013 ${p.id}` })) },
    { label: "Hypertension EMR Records",    items: htPts.map((p)  => ({ value: "HT:" + p.id, text: `${p.name} \u2013 ${p.id}` })) }
  ];
  groups.filter((g) => g.items.length > 0).forEach((g) => {
    const og = document.createElement("optgroup");
    og.label = g.label;
    g.items.forEach((it) => {
      const opt = document.createElement("option");
      opt.value = it.value;
      opt.textContent = it.text;
      og.appendChild(opt);
    });
    sel.appendChild(og);
  });
};

// ── Risk classification ───────────────────────────────────────
const ltValueRisk = (rangeClass) => {
  if (!rangeClass) return "missing";
  if (rangeClass === "emr-normal") return "normal";
  if (rangeClass === "emr-warn")   return "warn";
  if (rangeClass === "emr-high")   return "high";
  return "normal";
};

const ltGetPeriodRisk = (per, isDm) => {
  let max = 0;
  const sbpCls = emrRangeClass("sbp", per.vitals.sbp);
  if (sbpCls === "emr-high") max = Math.max(max, 2);
  else if (sbpCls === "emr-warn") max = Math.max(max, 1);
  if (isDm) {
    const h = emrRangeClass("hba1c", per.labs.hba1c);
    if (h === "emr-high") max = Math.max(max, 2);
    else if (h === "emr-warn") max = Math.max(max, 1);
    const f = emrRangeClass("fpg", per.labs.fpg);
    if (f === "emr-high") max = Math.max(max, 2);
    else if (f === "emr-warn") max = Math.max(max, 1);
  } else {
    const ldlCls = emrRangeClass("ldl", per.labs.ldl);
    if (ldlCls === "emr-high") max = Math.max(max, 1);
  }
  return max >= 2 ? "high" : max >= 1 ? "warn" : "normal";
};

// ── Period event builder ──────────────────────────────────────
const ltBuildPeriodEvents = (per, isDm, prevPer, pt) => {
  const events = [];
  const lang   = currentLang;
  const isTh   = lang === "th";

  // Diagnosis event (onset period only)
  if (per.p === 0) {
    events.push({
      risk: "high",
      text: isTh ? ltT("ltEventDmDiagnosis") : ltT("ltEventDmDiagnosis"),
      type: "diagnosis"
    });
    if (!isDm)
      events[events.length - 1].text = ltT("ltEventHtDiagnosis");
  }

  // Blood Pressure
  const sbpCls = emrRangeClass("sbp", per.vitals.sbp);
  const bpRisk = ltValueRisk(sbpCls);
  const bpLabel = isTh ? "\u0e04\u0e27\u0e32\u0e21\u0e14\u0e31\u0e19" : "BP";
  let bpText = `${bpLabel}: ${per.vitals.sbp}/${per.vitals.dbp} mmHg`;
  if (prevPer) {
    const diff = per.vitals.sbp - prevPer.vitals.sbp;
    if (Math.abs(diff) >= 5) {
      const dir = diff > 0 ? `\u2191 ${ltT("ltTrendUp")}` : `\u2193 ${ltT("ltTrendDown")}`;
      bpText += ` (${dir} ${Math.abs(diff)} mmHg)`;
    }
  }
  events.push({ risk: bpRisk, text: bpText, type: "bp" });

  if (isDm) {
    // HbA1c
    const hba1c = per.labs.hba1c;
    if (hba1c != null) {
      const hCls  = emrRangeClass("hba1c", hba1c);
      const hRisk = ltValueRisk(hCls);
      const hLabel = isTh ? "\u0e2e\u0e35\u0e42\u0e21\u0e42\u0e01\u0e25\u0e1a\u0e34\u0e19 A1c" : "HbA1c";
      let hText = `${hLabel}: ${hba1c}%`;
      if (prevPer && prevPer.labs.hba1c != null) {
        const d = +(hba1c - prevPer.labs.hba1c).toFixed(1);
        if (Math.abs(d) >= 0.2) {
          const dir = d > 0 ? `\u2191 ${ltT("ltTrendUp")}` : `\u2193 ${ltT("ltTrendDown")}`;
          hText += ` (${dir} ${Math.abs(d)}%)`;
        }
      }
      events.push({ risk: hRisk, text: hText, type: "hba1c" });
    } else {
      events.push({ risk: "missing", text: ltT("ltEventHba1cNotMeasured"), type: "hba1c" });
    }

    // C-peptide
    const cpep = per.labs.cpeptide;
    if (cpep != null) {
      const cpRisk = cpep < 0.5 ? "high" : cpep < 1.0 ? "warn" : "normal";
      let cpText = `C-peptide: ${cpep} nmol/L`;
      if (prevPer && prevPer.labs.cpeptide != null) {
        const d = +(cpep - prevPer.labs.cpeptide).toFixed(1);
        if (Math.abs(d) >= 0.1) cpText += ` (${d > 0 ? "\u2191" : "\u2193"}${Math.abs(d)})`;
      }
      events.push({ risk: cpRisk, text: cpText, type: "cpeptide" });
    }

    // FPG
    const fpg = per.labs.fpg;
    if (fpg != null) {
      const fCls  = emrRangeClass("fpg", fpg);
      const fRisk = ltValueRisk(fCls);
      const fLabel = isTh ? "\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25\u0e40\u0e25\u0e37\u0e2d\u0e14\u0e2d\u0e14\u0e2d\u0e32\u0e2b\u0e32\u0e23" : "FPG";
      let fText = `${fLabel}: ${fpg} mmol/L`;
      if (prevPer && prevPer.labs.fpg != null) {
        const d = +(fpg - prevPer.labs.fpg).toFixed(1);
        if (Math.abs(d) >= 0.3) {
          const dir = d > 0 ? `\u2191 ${ltT("ltTrendUp")}` : `\u2193 ${ltT("ltTrendDown")}`;
          fText += ` (${dir} ${Math.abs(d)})`;
        }
      }
      events.push({ risk: fRisk, text: fText, type: "fpg" });
    }
  } else {
    // Hypertension: LDL and proBNP
    const ldl = per.labs.ldl;
    if (ldl != null) {
      const lCls  = emrRangeClass("ldl", ldl);
      const lRisk = ltValueRisk(lCls);
      let lText = `LDL: ${ldl} mg/dL`;
      if (prevPer && prevPer.labs.ldl != null) {
        const d = +(ldl - prevPer.labs.ldl).toFixed(0);
        if (Math.abs(d) >= 5) {
          const dir = d > 0 ? `\u2191 ${ltT("ltTrendUp")}` : `\u2193 ${ltT("ltTrendDown")}`;
          lText += ` (${dir} ${Math.abs(d)})`;
        }
      }
      events.push({ risk: lRisk || "normal", text: lText, type: "ldl" });
    }
    if (per.labs.proBNP != null) {
      const bnpRisk = per.labs.proBNP > 125 ? "warn" : "normal";
      events.push({ risk: bnpRisk, text: `proBNP: ${per.labs.proBNP} pg/mL`, type: "bnp" });
    }
  }

  // BMI
  const bmiCls = emrRangeClass("bmi", per.vitals.bmi);
  if (bmiCls === "emr-warn" || bmiCls === "emr-high") {
    events.push({ risk: ltValueRisk(bmiCls), text: `BMI: ${per.vitals.bmi} kg/m\u00b2`, type: "bmi" });
  }

  // Medications
  const meds     = per.medications || [];
  const prevMeds = prevPer ? (prevPer.medications || []) : [];
  const addedMeds   = meds.filter((m) => !prevMeds.includes(m));
  const removedMeds = prevMeds.filter((m) => !meds.includes(m));
  const medLabel    = isTh ? "\u0e22\u0e32" : "Medication";

  if (!prevPer) {
    if (meds.length > 0)
      events.push({ risk: "normal", text: `${medLabel}: ${meds.map(emrMedLabel).join(", ")}`, type: "med" });
    else
      events.push({ risk: "missing", text: ltT("ltEventMedNone"), type: "med" });
  } else {
    if (addedMeds.length > 0)
      events.push({ risk: "normal", text: `${ltT("ltEventMedAdded")}: ${addedMeds.map(emrMedLabel).join(", ")}`, type: "med-add" });
    if (removedMeds.length > 0)
      events.push({ risk: "warn", text: `${ltT("ltEventMedStopped")}: ${removedMeds.map(emrMedLabel).join(", ")}`, type: "med-remove" });
    if (addedMeds.length === 0 && removedMeds.length === 0 && meds.length > 0)
      events.push({ risk: "normal", text: `${ltT("ltEventMedUnchanged")}: ${meds.map(emrMedLabel).join(", ")}`, type: "med" });
    if (meds.length === 0 && prevMeds.length > 0)
      events.push({ risk: "missing", text: ltT("ltEventMedNone"), type: "med" });
  }

  // Comorbidities
  const comorbs     = Object.entries(per.comorbidities).filter(([, v]) => v === 1).map(([k]) => EMR_COMORB_LABELS[k] || k);
  const prevComorbs = prevPer ? Object.entries(prevPer.comorbidities).filter(([, v]) => v === 1).map(([k]) => EMR_COMORB_LABELS[k] || k) : [];
  const newComorbs  = comorbs.filter((c) => !prevComorbs.includes(c));
  if (newComorbs.length > 0)
    events.push({ risk: "warn", text: `${ltT("ltEventComorbNew")}: ${newComorbs.join(", ")}`, type: "comorb" });
  else if (comorbs.length > 0)
    events.push({ risk: "warn", text: `${ltT("ltEventComorb")}: ${comorbs.join(", ")}`, type: "comorb" });

  // ICU linkage
  if (ltIsIcuPatient(pt) && per.p === 0)
    events.push({ risk: "high", text: `\ud83c\udfe5 ${ltT("ltEventIcuLinked")}`, type: "icu" });

  // Staff review flag when multiple high-risk events in follow-up
  const highCount = events.filter((e) => e.risk === "high").length;
  if (highCount >= 2 && per.p >= 1)
    events.push({ risk: "high", text: `\u26a0\ufe0f ${ltT("ltEventStaffReview")}`, type: "alert" });

  return events;
};

// ── Per-period evidence traceback (Timeline) ─────────────────
const _ltEtbRisk = (rangeClass) => {
  if (!rangeClass) return "missing";
  if (rangeClass === "emr-normal") return "normal";
  if (rangeClass === "emr-warn")   return "warn";
  if (rangeClass === "emr-high")   return "high";
  return "normal";
};

const _ltEtbValSpan = (value, risk) => {
  if (value == null) return `<span class="etb-val-missing">— not recorded</span>`;
  return `<span class="etb-val-value etb-val-${risk}">${value}</span>`;
};

const ltBuildPeriodTraceback = (per, isDm, pt, prevPer) => {
  // Returns array of compact traceback rows for this period
  const dataset    = isDm
    ? "Diabetes EMR — Srinagarind Hospital KKU"
    : "Hypertension EMR — Srinagarind Hospital KKU";
  const sourceFile = isDm
    ? "data_dictionary_diabetes_example.xlsx"
    : "data_dictionary_hypertension_example.xlsx";
  const patId = pt.id;
  const hn    = pt.hn;
  const onset = isDm ? pt.dmOnset : pt.htOnset;

  const rows = [];

  // Vitals
  rows.push({
    field:   "sbp, dbp",
    label:   "Blood Pressure",
    value:   `${per.vitals.sbp}/${per.vitals.dbp} mmHg`,
    risk:    _ltEtbRisk(emrRangeClass("sbp", per.vitals.sbp)),
    delta:   prevPer ? `Δ SBP ${per.vitals.sbp - prevPer.vitals.sbp >= 0 ? "+" : ""}${per.vitals.sbp - prevPer.vitals.sbp} mmHg` : null
  });
  rows.push({
    field: "hr",
    label: "Heart Rate",
    value: per.vitals.hr + " bpm",
    risk:  "normal",
    delta: null
  });
  rows.push({
    field: "bmi",
    label: "BMI",
    value: per.vitals.bmi + " kg/m²",
    risk:  _ltEtbRisk(emrRangeClass("bmi", per.vitals.bmi)),
    delta: prevPer ? `Δ ${(per.vitals.bmi - prevPer.vitals.bmi).toFixed(1)} kg/m²` : null
  });
  rows.push({
    field: "o2sat",
    label: "SpO₂",
    value: per.vitals.o2sat + "%",
    risk:  per.vitals.o2sat < 94 ? "high" : per.vitals.o2sat < 96 ? "warn" : "normal",
    delta: null
  });

  if (isDm) {
    rows.push({
      field: "hba1c",
      label: "HbA1c",
      value: per.labs.hba1c != null ? per.labs.hba1c + "%" : null,
      risk:  _ltEtbRisk(emrRangeClass("hba1c", per.labs.hba1c)),
      delta: prevPer && prevPer.labs.hba1c != null && per.labs.hba1c != null
        ? `Δ ${(per.labs.hba1c - prevPer.labs.hba1c).toFixed(1)}%` : null
    });
    rows.push({
      field: "fpg",
      label: "FPG",
      value: per.labs.fpg != null ? per.labs.fpg + " mmol/L" : null,
      risk:  _ltEtbRisk(emrRangeClass("fpg", per.labs.fpg)),
      delta: prevPer && prevPer.labs.fpg != null && per.labs.fpg != null
        ? `Δ ${(per.labs.fpg - prevPer.labs.fpg).toFixed(1)} mmol/L` : null
    });
    rows.push({
      field: "cpeptide",
      label: "C-peptide",
      value: per.labs.cpeptide != null ? per.labs.cpeptide + " nmol/L" : null,
      risk:  per.labs.cpeptide == null ? "missing"
           : per.labs.cpeptide < 0.5  ? "high"
           : per.labs.cpeptide < 1.0  ? "warn"
           : "normal",
      delta: prevPer && prevPer.labs.cpeptide != null && per.labs.cpeptide != null
        ? `Δ ${(per.labs.cpeptide - prevPer.labs.cpeptide).toFixed(1)} nmol/L` : null
    });
  } else {
    rows.push({
      field: "ldl",
      label: "LDL",
      value: per.labs.ldl != null ? per.labs.ldl + " mg/dL" : null,
      risk:  _ltEtbRisk(emrRangeClass("ldl", per.labs.ldl)),
      delta: prevPer && prevPer.labs.ldl != null && per.labs.ldl != null
        ? `Δ ${per.labs.ldl - prevPer.labs.ldl} mg/dL` : null
    });
    rows.push({
      field: "proBNP",
      label: "proBNP",
      value: per.labs.proBNP != null ? per.labs.proBNP + " pg/mL" : null,
      risk:  per.labs.proBNP == null ? "missing" : per.labs.proBNP > 125 ? "warn" : "normal",
      delta: null
    });
    rows.push({
      field: "creatinine",
      label: "Creatinine",
      value: per.labs.creatinine != null ? per.labs.creatinine + " µmol/L" : null,
      risk:  per.labs.creatinine != null && per.labs.creatinine > 1.2 ? "warn" : "normal",
      delta: prevPer && prevPer.labs.creatinine != null && per.labs.creatinine != null
        ? `Δ ${(per.labs.creatinine - prevPer.labs.creatinine).toFixed(2)} µmol/L` : null
    });
  }

  const meds = per.medications || [];
  const prevMeds = prevPer ? (prevPer.medications || []) : [];
  const medAdded   = meds.filter((m) => !prevMeds.includes(m)).map(emrMedLabel);
  const medRemoved = prevMeds.filter((m) => !meds.includes(m)).map(emrMedLabel);

  return { dataset, sourceFile, patId, hn, onset, period: per.label, dateRange: per.dateRange, rows, meds, medAdded, medRemoved };
};

const ltRenderPeriodTracebackHtml = (tb) => {
  const rowsHtml = tb.rows.map((r) =>
    `<div class="etb-val-row">
      <span class="etb-val-period">${r.label}</span>
      <code class="etb-field-name-sm">${r.field}</code>
      ${r.value != null
        ? `<span class="etb-val-value etb-val-${r.risk}">${r.value}</span>`
        : `<span class="etb-val-missing">— not recorded</span>`}
      ${r.delta ? `<span class="etb-delta">${r.delta}</span>` : ""}
    </div>`
  ).join("");

  const medHtml = tb.meds.length
    ? `<div class="etb-med-row"><span class="etb-meta-key">Medications</span> ${tb.meds.map(emrMedLabel).join(", ")}</div>`
    : `<div class="etb-med-row etb-val-missing"><span class="etb-meta-key">Medications</span> None recorded</div>`;

  const medDeltaHtml = (tb.medAdded.length || tb.medRemoved.length)
    ? `<div class="etb-med-delta">
        ${tb.medAdded.length   ? `<span class="etb-med-added">+ ${tb.medAdded.join(", ")}</span>`   : ""}
        ${tb.medRemoved.length ? `<span class="etb-med-removed">− ${tb.medRemoved.join(", ")}</span>` : ""}
      </div>` : "";

  return `<div class="etb-tl-panel">
    <div class="etb-tl-panel-meta">
      <span class="etb-meta-pill"><span class="etb-meta-key">Dataset</span>${tb.dataset}</span>
      <span class="etb-meta-pill"><span class="etb-meta-key">Source File</span>${tb.sourceFile}</span>
      <span class="etb-meta-pill"><span class="etb-meta-key">Patient ID</span>${tb.patId}</span>
      <span class="etb-meta-pill"><span class="etb-meta-key">HN</span>${tb.hn}</span>
      <span class="etb-meta-pill"><span class="etb-meta-key">Period</span>${tb.period}</span>
      <span class="etb-meta-pill"><span class="etb-meta-key">Date Range</span>${tb.dateRange}</span>
    </div>
    <div class="etb-values-table">${rowsHtml}</div>
    ${medHtml}
    ${medDeltaHtml}
  </div>`;
};
const ltRenderVerticalTimeline = (pt) => {
  const el = document.getElementById("ltVerticalTimeline");
  if (!el) return;
  const isDm = ltCurrentType === "dm";
  const lang = currentLang;
  const isTh = lang === "th";

  const periodNamePre   = isTh ? "\u0e01\u0e48\u0e2d\u0e19\u0e27\u0e34\u0e19\u0e34\u0e08\u0e09\u0e31\u0e22"           : "Pre-onset";
  const periodNameOnset = isTh ? "\u0e0a\u0e48\u0e27\u0e07\u0e27\u0e34\u0e19\u0e34\u0e08\u0e09\u0e31\u0e22"           : "Onset Period";
  const periodNamePost  = (p) => isTh ? `\u0e0a\u0e48\u0e27\u0e07\u0e2b\u0e25\u0e31\u0e07 P${p}` : `Post-onset P${p}`;

  const riskLabels = {
    normal: isTh ? "\u0e1b\u0e01\u0e15\u0e34"       : "Normal",
    warn:   isTh ? "\u0e40\u0e1d\u0e49\u0e32\u0e23\u0e30\u0e27\u0e31\u0e07"    : "Warning",
    high:   isTh ? "\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07\u0e2a\u0e39\u0e07"    : "High Risk"
  };

  el.innerHTML = pt.periods.map((per, idx) => {
    const prevPer  = idx > 0 ? pt.periods[idx - 1] : null;
    const events   = ltBuildPeriodEvents(per, isDm, prevPer, pt);
    const risk     = ltGetPeriodRisk(per, isDm);
    const perCls   = ltPeriodClass(per.p);
    const perName  = per.p < 0 ? periodNamePre : per.p === 0 ? periodNameOnset : periodNamePost(per.p);
    const riskLabel = riskLabels[risk] || risk;

    // Build traceback HTML for this period
    const tb         = ltBuildPeriodTraceback(per, isDm, pt, prevPer);
    const tbHtml     = ltRenderPeriodTracebackHtml(tb);
    const tbId       = `lt-tb-${pt.id}-p${per.p}-${idx}`;

    return `<div class="lt-tl-period ${perCls} ${risk}">
      <div class="lt-tl-period-head">
        <div class="lt-tl-period-dot ${risk}"></div>
        <div class="lt-tl-period-title">
          <span class="lt-tl-period-label ${perCls}">${perName}</span>
          <span class="lt-tl-period-dates">${per.dateRange}</span>
        </div>
        <span class="lt-tl-risk-badge ${risk}">${riskLabel}</span>
        <button class="etb-tl-toggle" type="button" aria-expanded="false" data-etb-target="${tbId}" title="Show evidence traceback">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Evidence
        </button>
      </div>
      <div class="lt-tl-period-body">
        ${events.map((ev) =>
          `<div class="lt-tl-event ${ev.risk}">
            <span class="lt-tl-indicator ${ev.risk}"></span>
            <span class="lt-tl-event-text">${ev.text}</span>
          </div>`).join("")}
      </div>
      <div class="etb-tl-panel-wrap" id="${tbId}" hidden>${tbHtml}</div>
    </div>`;
  }).join("");

  // Wire traceback toggle buttons
  el.querySelectorAll(".etb-tl-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.etbTarget);
      if (!target) return;
      const isOpen = !target.hidden;
      target.hidden = isOpen;
      btn.setAttribute("aria-expanded", String(!isOpen));
      btn.classList.toggle("etb-tl-toggle-open", !isOpen);
    });
  });
};

const ltSelectPatient = (selectVal) => {
  const tabs   = document.getElementById("ltTypeTabs");
  const noData = document.getElementById("ltNoDataNote");
  const empty  = document.getElementById("ltEmptyState");
  const content= document.getElementById("ltContent");

  if (!selectVal) {
    tabs.hidden = true;
    noData.hidden = true;
    empty.hidden = false;
    content.hidden = true;
    return;
  }

  let dmPt = null, htPt = null;

  // Direct EMR references
  if (selectVal.startsWith("DM:")) {
    dmPt = EMR_DIABETES_PATIENTS.find((p) => p.id === selectVal.slice(3));
  } else if (selectVal.startsWith("HT:")) {
    htPt = EMR_HT_PATIENTS.find((p) => p.id === selectVal.slice(3));
  } else {
    // VQ link
    const linked = emrGetLinkedData(selectVal);
    dmPt = linked.dm;
    htPt = linked.ht;
  }

  const hasDm = !!dmPt, hasHt = !!htPt;

  if (!hasDm && !hasHt) {
    noData.hidden = false;
    tabs.hidden = true;
    empty.hidden = false;
    content.hidden = true;
    return;
  }

  noData.hidden = true;
  empty.hidden = true;
  content.hidden = false;

  // Show/hide type tabs
  const tabDm = document.getElementById("ltTabDm");
  const tabHt = document.getElementById("ltTabHt");
  tabs.hidden = false;
  tabDm.disabled = !hasDm;
  tabHt.disabled = !hasHt;

  // Default to whichever type is available
  ltCurrentType = hasDm ? "dm" : "ht";
  tabDm.classList.toggle("active", ltCurrentType === "dm");
  tabHt.classList.toggle("active", ltCurrentType === "ht");

  ltRenderForType(dmPt, htPt);
};

const ltRenderForType = (dmPt, htPt) => {
  const pt = ltCurrentType === "dm" ? dmPt : htPt;
  if (!pt) return;

  ltRenderPatientHeader(pt);
  ltRenderVerticalTimeline(pt);
  ltRenderTrendCharts(pt);
  ltRenderPeriodGrid(pt);
  ltRenderMedsHistory(pt);
  ltRenderComorbidities(pt);
};

const ltRenderPatientHeader = (pt) => {
  const el = document.getElementById("ltPatientHeader");
  if (!el) return;
  const isDm = ltCurrentType === "dm";
  const onset = isDm ? pt.dmOnset : pt.htOnset;
  const typeLabel = isDm
    ? `Type ${pt.type1 ? "1" : pt.type2 ? "2" : "?"} Diabetes`
    : "Hypertension";

  el.innerHTML = `
    <div>
      <div class="emr-pt-name">${pt.name}</div>
      <div class="emr-pt-thai">${pt.thaiName}</div>
      <span class="emr-pt-badge ${isDm ? "dm" : "ht"}">${typeLabel}</span>
    </div>
    <div class="emr-pt-meta">
      <div class="emr-pt-meta-item">Age <strong>${pt.age}</strong></div>
      <div class="emr-pt-meta-item">Sex <strong>${pt.sex}</strong></div>
      <div class="emr-pt-meta-item">HN <strong>${pt.hn}</strong></div>
      <div class="emr-pt-meta-item">Onset <strong>${onset}</strong></div>
      <div class="emr-pt-meta-item">Identified by <strong>${pt.identifyBy}</strong></div>
      <div class="emr-pt-meta-item">Source <strong>${pt.source}</strong></div>
      ${pt.linkedVqId ? `<div class="emr-pt-meta-item">VQ Record <strong>${pt.linkedVqId}</strong></div>` : ""}
    </div>`;
};

const ltRenderTrendCharts = (pt) => {
  const vitalsEl = document.getElementById("ltVitalsTrendChart");
  const labsEl   = document.getElementById("ltLabsTrendChart");
  if (!vitalsEl || !labsEl) return;
  const isDm = ltCurrentType === "dm";

  const vitalsTitle = document.getElementById("ltVitalsTrendTitle");
  const labsTitle   = document.getElementById("ltLabsTrendTitle");
  if (vitalsTitle) vitalsTitle.textContent = isDm ? "BP / Vitals Trend (per period)" : "Blood Pressure Trend (per period)";
  if (labsTitle)   labsTitle.textContent   = isDm ? "HbA1c / FPG Trend (per period)" : "Lab Values Trend (per period)";

  // Vitals: SBP across periods
  const maxSbp = 180;
  vitalsEl.innerHTML = pt.periods.map((per) => {
    const sbpClass = emrRangeClass("sbp", per.vitals.sbp);
    const dbpClass = emrRangeClass("dbp", per.vitals.dbp);
    return `<div class="emr-trend-row">
      <span class="emr-trend-label">${per.p === -1 ? "Pre" : per.p === 0 ? "Onset" : `P${per.p}`}</span>
      <div style="flex:1;display:flex;flex-direction:column;gap:3px;">
        <div class="emr-trend-row" style="margin:0">
          <span style="width:32px;font-size:0.68rem;color:var(--gray-400)">SBP</span>
          <div class="emr-trend-bar-wrap"><div class="emr-trend-bar ${sbpClass || "emr-blue"}" style="width:${Math.min(per.vitals.sbp/maxSbp*100,100).toFixed(0)}%"></div></div>
          <span class="emr-trend-val ${sbpClass}">${per.vitals.sbp}</span>
        </div>
        <div class="emr-trend-row" style="margin:0">
          <span style="width:32px;font-size:0.68rem;color:var(--gray-400)">DBP</span>
          <div class="emr-trend-bar-wrap"><div class="emr-trend-bar ${dbpClass || "emr-blue"}" style="width:${Math.min(per.vitals.dbp/100*100,100).toFixed(0)}%"></div></div>
          <span class="emr-trend-val ${dbpClass}">${per.vitals.dbp}</span>
        </div>
      </div>
    </div>`;
  }).join("");

  // Labs: HbA1c for DM, LDL for HT
  if (isDm) {
    labsEl.innerHTML = pt.periods.map((per) => {
      const hba1c = per.labs.hba1c;
      const fpg   = per.labs.fpg;
      const hba1cClass = emrRangeClass("hba1c", hba1c);
      const fpgClass   = emrRangeClass("fpg",   fpg);
      return `<div class="emr-trend-row">
        <span class="emr-trend-label">${per.p === -1 ? "Pre" : per.p === 0 ? "Onset" : `P${per.p}`}</span>
        <div style="flex:1;display:flex;flex-direction:column;gap:3px;">
          <div class="emr-trend-row" style="margin:0">
            <span style="width:40px;font-size:0.68rem;color:var(--gray-400)">HbA1c</span>
            <div class="emr-trend-bar-wrap"><div class="emr-trend-bar ${hba1cClass || "emr-blue"}" style="width:${hba1c ? Math.min(hba1c/12*100,100).toFixed(0) : 0}%"></div></div>
            <span class="emr-trend-val ${hba1cClass}">${hba1c != null ? hba1c + "%" : "—"}</span>
          </div>
          <div class="emr-trend-row" style="margin:0">
            <span style="width:40px;font-size:0.68rem;color:var(--gray-400)">FPG</span>
            <div class="emr-trend-bar-wrap"><div class="emr-trend-bar ${fpgClass || "emr-blue"}" style="width:${Math.min(fpg/15*100,100).toFixed(0)}%"></div></div>
            <span class="emr-trend-val ${fpgClass}">${fpg} mmol/L</span>
          </div>
        </div>
      </div>`;
    }).join("");
  } else {
    labsEl.innerHTML = pt.periods.map((per) => {
      const ldl = per.labs.ldl;
      const ldlClass = emrRangeClass("ldl", ldl);
      return `<div class="emr-trend-row">
        <span class="emr-trend-label">${per.p === -1 ? "Pre" : per.p === 0 ? "Onset" : `P${per.p}`}</span>
        <div style="flex:1;display:flex;flex-direction:column;gap:3px;">
          <div class="emr-trend-row" style="margin:0">
            <span style="width:30px;font-size:0.68rem;color:var(--gray-400)">LDL</span>
            <div class="emr-trend-bar-wrap"><div class="emr-trend-bar ${ldlClass || "emr-blue"}" style="width:${Math.min(ldl/200*100,100).toFixed(0)}%"></div></div>
            <span class="emr-trend-val ${ldlClass}">${ldl} mg/dL</span>
          </div>
          ${per.labs.proBNP != null ? `<div class="emr-trend-row" style="margin:0">
            <span style="width:30px;font-size:0.68rem;color:var(--gray-400)">BNP</span>
            <div class="emr-trend-bar-wrap"><div class="emr-trend-bar emr-blue" style="width:${Math.min(per.labs.proBNP/200*100,100).toFixed(0)}%"></div></div>
            <span class="emr-trend-val">${per.labs.proBNP} pg/mL</span>
          </div>` : ""}
        </div>
      </div>`;
    }).join("");
  }
};

const ltPeriodClass = (p) => (p < 0 ? "pre" : p === 0 ? "onset" : "post");
const ltPeriodBadge = (p) => (p < 0 ? "Pre" : p === 0 ? "Onset" : `Post P${p}`);

const ltRenderPeriodGrid = (pt) => {
  const el = document.getElementById("ltPeriodGrid");
  if (!el) return;
  const isDm = ltCurrentType === "dm";

  el.innerHTML = pt.periods.map((per) => {
    const cls   = ltPeriodClass(per.p);
    const badge = ltPeriodBadge(per.p);

    // Key vitals
    const sbpCls = emrRangeClass("sbp", per.vitals.sbp);
    const bmiCls = emrRangeClass("bmi", per.vitals.bmi);

    // Key labs
    const labRows = isDm
      ? [
          { label: "FPG",     val: per.labs.fpg != null ? per.labs.fpg + " mmol/L" : "—", cls: emrRangeClass("fpg", per.labs.fpg) },
          { label: "HbA1c",   val: per.labs.hba1c != null ? per.labs.hba1c + "%" : "—", cls: emrRangeClass("hba1c", per.labs.hba1c) },
          { label: "C-pep",   val: per.labs.cpeptide != null ? per.labs.cpeptide + " nmol/L" : "—", cls: "" }
        ]
      : [
          { label: "LDL",     val: per.labs.ldl + " mg/dL", cls: emrRangeClass("ldl", per.labs.ldl) },
          { label: "Cr",      val: per.labs.creatinine + " µmol/L", cls: "" },
          { label: "BNP",     val: per.labs.proBNP != null ? per.labs.proBNP + " pg/mL" : "—", cls: "" }
        ];

    const comorbActive = Object.entries(per.comorbidities).filter(([, v]) => v === 1).map(([k]) => EMR_COMORB_LABELS[k] || k);

    return `<div class="emr-period-card ${cls}">
      <span class="emr-period-badge ${cls}">${badge}</span>
      <div class="emr-period-title">${per.label}</div>
      <div class="emr-period-dates">${per.dateRange}</div>
      <div class="emr-period-row"><span class="emr-period-row-label">SBP/DBP</span><span class="emr-period-row-val ${sbpCls}">${per.vitals.sbp}/${per.vitals.dbp} mmHg</span></div>
      <div class="emr-period-row"><span class="emr-period-row-label">HR / BMI</span><span class="emr-period-row-val">${per.vitals.hr} bpm / ${per.vitals.bmi} <span class="emr-period-row-val ${bmiCls}" style="font-size:inherit"></span></span></div>
      <div class="emr-period-row"><span class="emr-period-row-label">SpO₂</span><span class="emr-period-row-val">${per.vitals.o2sat}%</span></div>
      ${labRows.map((r) => `<div class="emr-period-row"><span class="emr-period-row-label">${r.label}</span><span class="emr-period-row-val ${r.cls}">${r.val}</span></div>`).join("")}
      ${comorbActive.length ? `<div class="emr-period-row" style="flex-wrap:wrap;gap:3px;"><span class="emr-period-row-label" style="width:100%">Comorbidities</span>${comorbActive.map((c) => `<span class="emr-comorb-tag" style="font-size:0.68rem;padding:1px 7px">${c}</span>`).join("")}</div>` : ""}
    </div>`;
  }).join("");
};

const ltRenderMedsHistory = (pt) => {
  const el = document.getElementById("ltMedsHistory");
  if (!el) return;
  el.innerHTML = pt.periods.map((per) => {
    const meds = per.medications || [];
    return `<div class="emr-meds-period">
      <div class="emr-meds-period-title">${per.label}</div>
      <div class="emr-meds-list">
        ${meds.length ? meds.map((m) => `<span class="emr-med-tag">${emrMedLabel(m)}</span>`).join("") : `<span class="emr-no-meds">No medications recorded</span>`}
      </div>
    </div>`;
  }).join("");
};

const ltRenderComorbidities = (pt) => {
  const el = document.getElementById("ltComorbidities");
  if (!el) return;
  el.innerHTML = pt.periods.map((per) => {
    const active = Object.entries(per.comorbidities).filter(([, v]) => v === 1).map(([k]) => EMR_COMORB_LABELS[k] || k);
    return `<div class="emr-comorb-period">
      <div class="emr-comorb-period-title">${per.label}</div>
      <div class="emr-comorb-list">
        ${active.length ? active.map((c) => `<span class="emr-comorb-tag">${c}</span>`).join("") : `<span class="emr-no-comorbs">No active comorbidities</span>`}
      </div>
    </div>`;
  }).join("");
};

const setupLongitudinalTimeline = () => {
  ltBuildPatientOptions();

  // Filter buttons
  document.getElementById("ltFilterBar").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lt-filter]");
    if (!btn) return;
    ltActiveFilter = btn.dataset.ltFilter;
    document.querySelectorAll(".lt-filter-btn").forEach((b) => b.classList.toggle("active", b.dataset.ltFilter === ltActiveFilter));
    // Rebuild dropdown and reset selection
    ltBuildPatientOptions();
    document.getElementById("ltPatientSelect").value = "";
    ltSelectPatient("");
  });

  // Store references for type-switch re-render
  let _dmPt = null, _htPt = null;

  document.getElementById("ltPatientSelect").addEventListener("change", (e) => {
    const val = e.target.value;
    // Pre-resolve both types
    if (val.startsWith("DM:")) {
      _dmPt = EMR_DIABETES_PATIENTS.find((p) => p.id === val.slice(3));
      _htPt = null;
    } else if (val.startsWith("HT:")) {
      _htPt = EMR_HT_PATIENTS.find((p) => p.id === val.slice(3));
      _dmPt = null;
    } else if (val) {
      const linked = emrGetLinkedData(val);
      _dmPt = linked.dm;
      _htPt = linked.ht;
    } else {
      _dmPt = null; _htPt = null;
    }
    ltSelectPatient(val);
  });

  document.getElementById("ltTypeTabs").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lt-type]");
    if (!btn || btn.disabled) return;
    ltCurrentType = btn.dataset.ltType;
    document.querySelectorAll(".emr-type-tab").forEach((t) => t.classList.toggle("active", t.dataset.ltType === ltCurrentType));
    ltRenderForType(_dmPt, _htPt);
  });
};

// ── ICU Ventilator Analysis ───────────────────────────────────

let icuCurrentPatientId = null;
let icuCurrentDay       = null;

const icuBuildPatientOptions = () => {
  const sel = document.getElementById("icuPatientSelect");
  if (!sel || typeof EMR_ICU_PATIENTS === "undefined") return;
  EMR_ICU_PATIENTS.forEach((pt) => {
    const opt = document.createElement("option");
    opt.value = pt.id;
    opt.textContent = `${pt.displayId} – ${pt.primaryDx.split("(")[0].trim()} – Age ${pt.age}`;
    sel.appendChild(opt);
  });
};

const icuSelectPatient = (patientId) => {
  const empty   = document.getElementById("icuEmptyState");
  const content = document.getElementById("icuContent");
  const daySel  = document.getElementById("icuDaySelectorWrap");

  if (!patientId) {
    empty.hidden = false;
    content.hidden = true;
    daySel.hidden = true;
    return;
  }

  const pt = EMR_ICU_PATIENTS.find((p) => p.id === patientId);
  if (!pt) return;

  icuCurrentPatientId = patientId;
  empty.hidden = true;
  content.hidden = false;

  // Reset AI output
  const aiOut    = document.getElementById("icuAiOutput");
  const aiEmpty  = document.getElementById("icuAiEmpty");
  const aiLoading= document.getElementById("icuAiLoading");
  if (aiOut)     aiOut.hidden    = true;
  if (aiEmpty)   aiEmpty.hidden  = false;
  if (aiLoading) aiLoading.hidden= true;
  const etbPanel = document.getElementById("icuEtbPanel");
  if (etbPanel) etbPanel.hidden = true;

  // Render patient info
  icuRenderPatientInfo(pt);

  // Render stay timeline
  icuRenderStayTimeline(pt);

  // Build day selector
  const daySelect = document.getElementById("icuDaySelect");
  if (daySelect) {
    daySelect.innerHTML = pt.days.map((d) =>
      `<option value="${d.day}">Day ${d.day}${d.captures.length ? " (" + d.captures.length + " captures)" : " (no captures)"}</option>`
    ).join("");
    daySel.hidden = false;
    icuCurrentDay = pt.days[0].day;
    daySelect.value = icuCurrentDay;
    daySelect.onchange = (e) => {
      icuCurrentDay = parseInt(e.target.value);
      icuRenderDay(pt, icuCurrentDay);
    };
  }

  icuRenderDay(pt, pt.days[0].day);
};

const icuRenderPatientInfo = (pt) => {
  const el = document.getElementById("icuPatientInfo");
  if (!el) return;

  // Parse demographic fields
  const bmiCls = emrRangeClass("bmi", pt.bmi);
  const sexIcon = pt.sex === "M"
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><circle cx="12" cy="8" r="4"/><path d="M8 20v-2a4 4 0 0 1 8 0v2"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><circle cx="12" cy="8" r="4"/><path d="M8 20v-2a4 4 0 0 1 8 0v2"/></svg>`;

  el.innerHTML = `<div class="icu-info-list">
    <div class="icu-info-row"><span class="icu-info-label">Patient ID</span><span class="icu-info-val icu-id-val">${pt.displayId}</span></div>
    <div class="icu-info-row"><span class="icu-info-label">HN</span><span class="icu-info-val">${pt.hn}</span></div>
    <div class="icu-info-row"><span class="icu-info-label">Age / Sex</span><span class="icu-info-val">${pt.age} yrs — ${pt.sexLabel}</span></div>
    <div class="icu-info-row"><span class="icu-info-label">Weight / Height</span><span class="icu-info-val">${pt.bw} kg / ${pt.ht} cm</span></div>
    <div class="icu-info-row"><span class="icu-info-label">BMI</span><span class="icu-info-val ${bmiCls}">${pt.bmi} kg/m²</span></div>
    <div class="icu-info-row"><span class="icu-info-label">Ventilator</span><span class="icu-info-val">#${pt.ventilatorId}</span></div>
    <div class="icu-info-row"><span class="icu-info-label">ICU Days</span><span class="icu-info-val">${pt.icuDays} days</span></div>
    <div class="icu-info-row"><span class="icu-info-label">Admit Date</span><span class="icu-info-val">${pt.admitDate}</span></div>
    <div class="icu-info-row"><span class="icu-info-label">Primary Dx</span><span class="icu-info-val icu-dx-primary-val">${pt.primaryDx}</span></div>
    <div class="icu-info-row"><span class="icu-info-label">Secondary Dx</span><span class="icu-info-val" style="font-size:0.76rem;">${pt.secondaryDx}</span></div>
    <div class="icu-info-row"><span class="icu-info-label">Operations</span><span class="icu-info-val" style="font-size:0.73rem;text-align:right;">${pt.operations}</span></div>
  </div>`;
};

const icuRenderStayTimeline = (pt) => {
  const el = document.getElementById("icuStayTimeline");
  if (!el) return;
  el.innerHTML = pt.days.map((d) => {
    const hasData = d.captures.length > 0;
    const isActive = d.day === (icuCurrentDay ?? pt.days[0].day);
    return `<div class="icu-day-pill ${hasData ? "has-data" : ""} ${isActive ? "active" : ""}" data-icu-day="${d.day}">
      Day ${d.day}
      <span class="icu-day-pill-sub">${hasData ? d.captures.length + " captures" : "No captures"}</span>
    </div>`;
  }).join("");

  el.querySelectorAll("[data-icu-day]").forEach((pill) => {
    pill.addEventListener("click", () => {
      const day = parseInt(pill.dataset.icuDay);
      icuCurrentDay = day;
      document.getElementById("icuDaySelect").value = day;
      el.querySelectorAll(".icu-day-pill").forEach((p) => p.classList.toggle("active", parseInt(p.dataset.icuDay) === day));
      const pt = EMR_ICU_PATIENTS.find((p) => p.id === icuCurrentPatientId);
      if (pt) icuRenderDay(pt, day);
    });
  });
};

// ── Inline SVG line chart ─────────────────────────────────────
const icuBuildLineChart = (rows, signal, color, label, unit) => {
  if (!rows || !rows.length) return `<div class="icu-chart-nodata">No data</div>`;
  const W = 100, H = 60; // viewBox units (percentage-based scaling)
  const vals = rows.map((r) => r[signal]);
  const mn = Math.min(...vals), mx = Math.max(...vals);
  const range = mx - mn || 1;
  const n = vals.length;

  const pts = vals.map((v, i) => {
    const x = (i / Math.max(n - 1, 1)) * (W - 10) + 5;
    const y = H - 4 - ((v - mn) / range) * (H - 12);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");

  // Zero-line (if range spans negative)
  const zeroLine = mn < 0 && mx > 0
    ? `<line x1="5" x2="${W-5}" y1="${(H - 4 - ((0 - mn) / range) * (H - 12)).toFixed(2)}" y2="${(H - 4 - ((0 - mn) / range) * (H - 12)).toFixed(2)}" stroke="rgba(148,163,184,0.4)" stroke-width="0.5" stroke-dasharray="2,2"/>`
    : "";

  // Y-axis labels
  const topY = (H - 4 - (H - 12)).toFixed(1);
  const botY = (H - 4).toFixed(1);
  const midY = ((parseFloat(topY) + parseFloat(botY)) / 2).toFixed(1);
  const midVal = ((mn + mx) / 2).toFixed(1);

  return `<div class="icu-chart-wrap">
    <div class="icu-chart-label">${label} <span class="icu-chart-unit">(${unit})</span></div>
    <svg class="icu-chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
      <!-- Grid -->
      <line x1="5" x2="${W-5}" y1="${topY}" y2="${topY}" stroke="rgba(148,163,184,0.12)" stroke-width="0.5"/>
      <line x1="5" x2="${W-5}" y1="${midY}" y2="${midY}" stroke="rgba(148,163,184,0.12)" stroke-width="0.5"/>
      <line x1="5" x2="${W-5}" y1="${botY}" y2="${botY}" stroke="rgba(148,163,184,0.12)" stroke-width="0.5"/>
      ${zeroLine}
      <!-- Signal line -->
      <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"/>
      <!-- Fill under curve -->
      <polyline points="5,${botY} ${pts} ${((n-1)/(Math.max(n-1,1)))*(W-10)+5},${botY}" fill="${color}" fill-opacity="0.08" stroke="none"/>
    </svg>
    <div class="icu-chart-scale">
      <div class="icu-chart-axis-label" style="top:0">${mx.toFixed(1)}</div>
      <div class="icu-chart-axis-label" style="top:50%">${midVal}</div>
      <div class="icu-chart-axis-label" style="bottom:0">${mn.toFixed(1)}</div>
    </div>
    <div class="icu-chart-x-labels">
      <span>0</span>
      <span>${Math.round(n/2)}</span>
      <span>${n-1}</span>
    </div>
    <div class="icu-chart-x-unit">Sample index (25 Hz · ${n} samples · ${(n * 0.04).toFixed(2)}s)</div>
  </div>`;
};

// ── Waveform sparkline (mini, for signal cards) ───────────────
const icuBuildSparkline = (values, color = "#3b82f6") => {
  if (!values || !values.length) return "";
  const w = 200, h = 32;
  const mn = Math.min(...values), mx = Math.max(...values);
  const range = mx - mn || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - mn) / range) * (h - 4) - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg class="icu-sparkline-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`;
};

// ── Pattern detection ─────────────────────────────────────────
const icuDetectPatterns = (allRows, stats) => {
  const patterns = [];

  // 1. High peak pressure (barotrauma risk)
  if (stats.pressure.max > 40) {
    patterns.push({
      cls: "alert",
      icon: "alert",
      name: "High Peak Airway Pressure",
      nameTH: "ความดันทางเดินหายใจสูง",
      detail: `Peak pressure ${stats.pressure.max} cmH₂O exceeds 40 cmH₂O — risk of barotrauma. Review tidal volume and lung compliance.`,
      detailTH: `ความดันสูงสุด ${stats.pressure.max} cmH₂O เกินกว่า 40 cmH₂O — เสี่ยงต่อ barotrauma ควรทบทวน tidal volume และ compliance`,
      field: "pressure.max"
    });
  } else if (stats.pressure.max > 30) {
    patterns.push({
      cls: "warn",
      icon: "warn",
      name: "Elevated Peak Pressure",
      nameTH: "ความดันสูงกว่าปกติ",
      detail: `Peak pressure ${stats.pressure.max} cmH₂O approaching high-pressure threshold. Monitor closely.`,
      detailTH: `ความดันสูงสุด ${stats.pressure.max} cmH₂O ใกล้ขีดจำกัด ควรติดตามอย่างใกล้ชิด`,
      field: "pressure.max"
    });
  } else {
    patterns.push({
      cls: "ok",
      icon: "ok",
      name: "Peak Pressure Within Range",
      nameTH: "ความดันสูงสุดอยู่ในช่วงปกติ",
      detail: `Peak pressure ${stats.pressure.max} cmH₂O — within safe ventilator limits (<30 cmH₂O).`,
      detailTH: `ความดันสูงสุด ${stats.pressure.max} cmH₂O อยู่ในช่วงปลอดภัย`,
      field: "pressure.max"
    });
  }

  // 2. Significant expiratory flow (active exhalation / auto-PEEP risk)
  if (stats.flow.min < -40) {
    patterns.push({
      cls: "warn",
      icon: "warn",
      name: "Significant Expiratory Flow",
      nameTH: "Flow ขาออกมีนัยสำคัญ",
      detail: `Minimum flow ${stats.flow.min} L/min. High expiratory flow may indicate active exhalation effort or auto-PEEP development. Review PEEP settings.`,
      detailTH: `Flow ต่ำสุด ${stats.flow.min} L/min. อาจบ่งชี้การหายใจออกแบบ active exhalation หรือ auto-PEEP ควรทบทวนค่า PEEP`,
      field: "flow.min"
    });
  } else if (stats.flow.min < 0) {
    patterns.push({
      cls: "warn",
      icon: "warn",
      name: "Expiratory Phase Detected",
      nameTH: "พบช่วงหายใจออก",
      detail: `Negative flow values present (min ${stats.flow.min} L/min). Active expiratory phase captured in this recording window.`,
      detailTH: `พบค่า Flow ติดลบ (ต่ำสุด ${stats.flow.min} L/min) แสดงถึงช่วงหายใจออก`,
      field: "flow.min"
    });
  }

  // 3. Flow starvation (very high inspiratory flow demand)
  if (stats.flow.max > 90) {
    patterns.push({
      cls: "warn",
      icon: "warn",
      name: "High Inspiratory Flow",
      nameTH: "อัตราการไหลขาเข้าสูง",
      detail: `Peak inspiratory flow ${stats.flow.max} L/min — may indicate patient's flow demand exceeds ventilator delivery. Review flow waveform pattern.`,
      detailTH: `Peak flow ขาเข้า ${stats.flow.max} L/min สูง อาจบ่งชี้ว่า demand ของผู้ป่วยเกินกว่า ventilator ส่งให้ได้`,
      field: "flow.max"
    });
  }

  // 4. Tidal volume estimation
  const tidalVol = stats.volume.max - stats.volume.min;
  if (tidalVol > 0) {
    if (tidalVol > 700) {
      patterns.push({
        cls: "warn",
        icon: "warn",
        name: "High Estimated Tidal Volume",
        nameTH: "ปริมาตร Tidal Volume สูง",
        detail: `Estimated tidal volume ~${Math.round(tidalVol)} mL — above 700 mL. Review lung-protective ventilation settings (target 6-8 mL/kg IBW).`,
        detailTH: `ประมาณ Tidal Volume ~${Math.round(tidalVol)} mL สูงกว่า 700 mL ควรทบทวนการตั้งค่า lung-protective ventilation`,
        field: "volume (range)"
      });
    } else if (tidalVol < 300) {
      patterns.push({
        cls: "warn",
        icon: "warn",
        name: "Low Estimated Tidal Volume",
        nameTH: "ปริมาตร Tidal Volume ต่ำ",
        detail: `Estimated tidal volume ~${Math.round(tidalVol)} mL — may be below target range (6-8 mL/kg IBW). Check for leaks or obstruction.`,
        detailTH: `ประมาณ Tidal Volume ~${Math.round(tidalVol)} mL อาจต่ำกว่าเป้าหมาย ควรตรวจหาการรั่วหรือสิ่งอุดกั้น`,
        field: "volume (range)"
      });
    } else {
      patterns.push({
        cls: "ok",
        icon: "ok",
        name: "Tidal Volume Within Range",
        nameTH: "Tidal Volume อยู่ในช่วงปกติ",
        detail: `Estimated tidal volume ~${Math.round(tidalVol)} mL — within typical lung-protective range (300-700 mL).`,
        detailTH: `ประมาณ Tidal Volume ~${Math.round(tidalVol)} mL อยู่ในช่วง lung-protective ปกติ`,
        field: "volume (range)"
      });
    }
  }

  // 5. Pressure variability (high std may indicate dyssynchrony)
  if (stats.pressure.std > 10) {
    patterns.push({
      cls: "warn",
      icon: "warn",
      name: "High Pressure Variability",
      nameTH: "ความผันแปรของ Pressure สูง",
      detail: `Pressure std deviation ${stats.pressure.std} cmH₂O — high variability may indicate patient-ventilator dyssynchrony. Clinical review recommended.`,
      detailTH: `ค่าเบี่ยงเบนมาตรฐานของ Pressure = ${stats.pressure.std} cmH₂O สูง อาจบ่งชี้ patient-ventilator dyssynchrony ควรรีวิวทางคลินิก`,
      field: "pressure.std"
    });
  }

  // 6. Flat volume trace (possible obstruction or CPAP mode)
  if (stats.volume.std < 5 && stats.volume.mean > 200) {
    patterns.push({
      cls: "ok",
      icon: "ok",
      name: "Stable Volume Trace",
      nameTH: "ค่า Volume คงที่",
      detail: `Volume waveform shows low variability (std ${stats.volume.std} mL) — consistent tidal delivery or CPAP mode.`,
      detailTH: `Volume waveform มีความผันแปรต่ำ (std ${stats.volume.std} mL) แสดงถึงการส่งอากาศสม่ำเสมอ หรือโหมด CPAP`,
      field: "volume.std"
    });
  }

  return patterns;
};

// ── Chart capture selector ────────────────────────────────────
const icuRenderCharts = (capturesWithData, dayNum) => {
  const section = document.getElementById("icuChartsSection");
  const grid    = document.getElementById("icuChartsGrid");
  const capSel  = document.getElementById("icuChartCaptureSelect");
  if (!section || !grid || !capSel) return;

  if (!capturesWithData.length) { section.hidden = true; return; }
  section.hidden = false;

  // Build capture selector
  capSel.innerHTML = capturesWithData.map((cap, i) =>
    `<option value="${i}">${cap.time} (${cap.rows.length} samples)</option>`
  ).join("");

  const drawCharts = (capIdx) => {
    const cap = capturesWithData[capIdx];
    if (!cap || !cap.rows || !cap.rows.length) {
      grid.innerHTML = `<div class="icu-chart-nodata">No waveform data for this capture.</div>`;
      return;
    }
    const signals = [
      { key: "flow",     label: "Flow",     unit: "L/min",   color: "#3b82f6" },
      { key: "pressure", label: "Pressure", unit: "cmH₂O",   color: "#ef6f6c" },
      { key: "volume",   label: "Volume",   unit: "mL",      color: "#1f9d8f" }
    ];
    grid.innerHTML = signals.map((s) =>
      icuBuildLineChart(cap.rows, s.key, s.color, s.label, s.unit)
    ).join("");
  };

  drawCharts(0);
  capSel.onchange = (e) => drawCharts(parseInt(e.target.value));
};

const icuRenderDay = (pt, dayNum) => {
  const dayData = pt.days.find((d) => d.day === dayNum);
  if (!dayData) return;

  // Update stay timeline active
  document.querySelectorAll(".icu-day-pill").forEach((p) => {
    p.classList.toggle("active", parseInt(p.dataset.icuDay) === dayNum);
  });

  // Dx/Op section
  const dxOpEl = document.getElementById("icuDxOp");
  if (dxOpEl) {
    dxOpEl.innerHTML = `
      <div class="icu-dx-block">
        <div class="icu-dx-section-title">Primary Diagnosis</div>
        <div class="icu-dx-value">${pt.primaryDx}</div>
        <div class="icu-dx-day-note">Day ${dayNum}: ${dayData.dx}</div>
      </div>
      <div class="icu-dx-block">
        <div class="icu-dx-section-title">Secondary Diagnosis</div>
        <div class="icu-dx-value">${pt.secondaryDx}</div>
      </div>
      <div class="icu-dx-block">
        <div class="icu-dx-section-title">Operations / Procedures</div>
        <div class="icu-dx-value">${dayData.op || "Not specified"}</div>
      </div>`;
  }

  // Capture log
  const captureLog = document.getElementById("icuCaptureLog");
  if (captureLog) {
    if (!dayData.captures.length) {
      captureLog.innerHTML = `<div class="icu-no-captures">No captures recorded for Day ${dayNum}.</div>`;
    } else {
      captureLog.innerHTML = dayData.captures.map((cap) => {
        const hasData = cap.rows && cap.rows.length > 0;
        return `<div class="icu-capture-row">
          <span class="icu-capture-time">${cap.time}</span>
          <span class="icu-capture-file">${cap.file}</span>
          <span class="icu-capture-status ${hasData ? "has-data" : "no-data"}">${hasData ? cap.rows.length + " samples" : "CSV pending"}</span>
        </div>`;
      }).join("");
    }
  }

  // Waveform cards and assessment
  const capturesWithData = dayData.captures.filter((c) => c.rows && c.rows.length > 0);
  const waveCards    = document.getElementById("icuWaveCards");
  const noWaveNote   = document.getElementById("icuNoWaveNote");
  const captureBadge = document.getElementById("icuCaptureBadge");
  const assessEl     = document.getElementById("icuAssessment");

  if (captureBadge) {
    captureBadge.textContent = `Day ${dayNum} — ${dayData.captures.length} captures${capturesWithData.length ? `, ${capturesWithData.length} with waveform data` : ""}`;
  }

  // Render charts
  icuRenderCharts(capturesWithData, dayNum);

  if (!capturesWithData.length) {
    if (waveCards) waveCards.innerHTML = "";
    if (noWaveNote) noWaveNote.hidden = false;
    if (assessEl) assessEl.innerHTML = `<div class="icu-no-assess">No waveform data available for this day.</div>`;
    return;
  }

  if (noWaveNote) noWaveNote.hidden = true;

  // Aggregate stats across all loaded captures for this day
  const allRows = capturesWithData.flatMap((c) => c.rows);
  const stats   = emrWaveStats(allRows);

  // Signal definitions
  const signals = [
    {
      key: "flow", label: "Flow", unit: "L/min", color: "#3b82f6",
      note: () => {
        if (stats.flow.min < -40) return { cls: "alert", msg: "Significant expiratory flow detected — check for active exhalation or auto-PEEP." };
        if (stats.flow.max > 90)  return { cls: "warn",  msg: "Peak inspiratory flow >90 L/min — review flow demand and ventilator settings." };
        return { cls: "ok", msg: "Flow range within expected ventilator delivery patterns." };
      }
    },
    {
      key: "pressure", label: "Pressure", unit: "cmH₂O", color: "#ef6f6c",
      note: () => {
        if (stats.pressure.max > 40) return { cls: "alert", msg: `Peak pressure ${stats.pressure.max} cmH₂O — exceeds 40 cmH₂O. Barotrauma risk. Review tidal volume and compliance.` };
        if (stats.pressure.max > 30) return { cls: "warn",  msg: `Peak pressure ${stats.pressure.max} cmH₂O — approaching high-pressure limit.` };
        return { cls: "ok", msg: `Peak pressure ${stats.pressure.max} cmH₂O — within safe range.` };
      }
    },
    {
      key: "volume", label: "Volume", unit: "mL", color: "#1f9d8f",
      note: () => {
        const tv = stats.volume.max - stats.volume.min;
        if (tv < 300) return { cls: "warn",  msg: `Estimated tidal volume ~${Math.round(tv)} mL — below target range. Check for leaks or obstruction.` };
        if (tv > 700) return { cls: "warn",  msg: `Estimated tidal volume ~${Math.round(tv)} mL — above 700 mL. Review lung-protective settings.` };
        return { cls: "ok", msg: `Estimated tidal volume ~${Math.round(tv)} mL — within typical range.` };
      }
    }
  ];

  // Wave stat cards
  if (waveCards) {
    waveCards.innerHTML = signals.map((sig) => {
      const s    = stats[sig.key];
      const note = sig.note();
      const sparkValues = capturesWithData[0].rows.slice(0, 60).map((r) => r[sig.key]);
      const maxClass = sig.key === "pressure" ? emrRangeClass("peakPressure", s.max) : "";
      return `<div class="icu-wave-card ${note.cls}">
        <div class="icu-wave-signal">${sig.label}</div>
        <div class="icu-wave-stat-grid">
          <div class="icu-stat-item"><div class="icu-stat-label">Mean</div><div class="icu-stat-val">${s.mean}</div></div>
          <div class="icu-stat-item"><div class="icu-stat-label">Max</div><div class="icu-stat-val ${maxClass}">${s.max}</div></div>
          <div class="icu-stat-item"><div class="icu-stat-label">Min</div><div class="icu-stat-val">${s.min}</div></div>
          <div class="icu-stat-item"><div class="icu-stat-label">Std Dev</div><div class="icu-stat-val">${s.std}</div></div>
        </div>
        <div class="icu-wave-unit">Unit: ${sig.unit} · ${allRows.length} samples across ${capturesWithData.length} capture(s)</div>
        <div class="icu-wave-sparkline">${icuBuildSparkline(sparkValues, sig.color)}</div>
        <div class="icu-wave-note ${note.cls}">${note.msg}</div>
      </div>`;
    }).join("");
  }

  // Enhanced pattern detection
  if (assessEl) {
    const patterns = icuDetectPatterns(allRows, stats);
    const icons = {
      ok:    `<svg class="icu-assess-icon" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      warn:  `<svg class="icu-assess-icon" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      alert: `<svg class="icu-assess-icon" viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
    };

    assessEl.innerHTML = patterns.map((p) =>
      `<div class="icu-assess-item ${p.cls}">
        ${icons[p.icon] || icons.ok}
        <div>
          <div class="icu-assess-title">${p.name}</div>
          <div class="icu-assess-th">${p.nameTH}</div>
          <div class="icu-assess-body">${p.detail}</div>
          <div class="icu-assess-body-th">${p.detailTH}</div>
          <div class="icu-assess-field">Field: <code>${p.field}</code></div>
        </div>
      </div>`
    ).join("") + `<div class="icu-assess-source">
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" style="width:12px;height:12px;flex-shrink:0"><path d="M20 6L9 17l-5-5"/></svg>
      Source: SmartICU CSV waveform exports · ${allRows.length} samples at 25 Hz
    </div>`;
  }
};

// ── ICU AI Summary (within ICU page) ─────────────────────────
const icuTriggerAiSummary = async (pt) => {
  const aiOut    = document.getElementById("icuAiOutput");
  const aiEmpty  = document.getElementById("icuAiEmpty");
  const aiLoading= document.getElementById("icuAiLoading");
  if (!aiOut || !aiEmpty || !aiLoading) return;

  aiEmpty.hidden   = true;
  aiLoading.hidden = false;
  aiOut.hidden     = true;

  try {
    // Build context using existing function from ai-summary.js
    const ctx    = aiBuildContextICU(pt.id);
    const prompt = aiBuildIcuPrompt(pt, ctx);
    const result = await aiCallGemini(prompt);

    aiLoading.hidden = true;
    aiOut.hidden     = false;

    // Bilingual summaries
    const enEl = document.getElementById("icuAiSummaryEN");
    const thEl = document.getElementById("icuAiSummaryTH");
    if (enEl) enEl.innerHTML = aiEscape(result.summaryEN || "No English summary returned.");
    if (thEl) thEl.innerHTML = aiEscape(result.summaryTH || "ไม่มีสรุปภาษาไทย");

    // Key findings
    const findEl = document.getElementById("icuAiFindings");
    if (findEl && result.keyFindings) {
      findEl.innerHTML = result.keyFindings.map((f, i) =>
        `<div class="icu-ai-finding">
          <div class="icu-ai-finding-en">${aiEscape(f)}</div>
          ${result.keyFindingsTH?.[i] ? `<div class="icu-ai-finding-th">${aiEscape(result.keyFindingsTH[i])}</div>` : ""}
        </div>`
      ).join("");
    }

    // Abnormal breathing patterns (from AI)
    const patEl = document.getElementById("icuAiPatterns");
    if (patEl) {
      const patterns = result.abnormalPatterns || result.staffReviewRequired || [];
      patEl.innerHTML = patterns.length > 0
        ? patterns.map((p) =>
            `<div class="icu-ai-pattern-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2" style="width:13px;height:13px;flex-shrink:0;margin-top:1px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              ${aiEscape(p)}
            </div>`
          ).join("")
        : `<div class="icu-ai-pattern-none">No abnormal patterns identified in available waveform data.</div>`;
    }

    // Staff review
    const reviewEl = document.getElementById("icuAiReview");
    if (reviewEl && result.staffReviewRequired) {
      reviewEl.innerHTML = result.staffReviewRequired.map((r) =>
        `<div class="icu-ai-review-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" style="width:13px;height:13px;flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          ${aiEscape(r)}
        </div>`
      ).join("") || `<div class="icu-ai-pattern-none">No critical review items identified.</div>`;
    }

    // Timestamp
    const tsEl = document.getElementById("icuAiTimestamp");
    if (tsEl) tsEl.textContent = `Generated ${new Date().toLocaleString("en-GB")} · Gemini AI · ${pt.displayId}`;

    // Evidence Traceback
    if (typeof aiBuildEvidenceTraceback === "function" && typeof aiRenderEvidenceTraceback === "function") {
      const etbEntries = aiBuildEvidenceTraceback("icu", pt.id);
      const etbEl = document.getElementById("icuEtbGrid");
      if (etbEl) {
        if (!etbEntries || etbEntries.length === 0) {
          etbEl.innerHTML = `<div class="etb-no-evidence">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;stroke:var(--amber);flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div><strong>Not enough evidence available.</strong><p>No linked waveform records were found for this patient.</p></div>
          </div>`;
        } else {
          etbEl.innerHTML = etbEntries.map((entry, idx) => {
            const rowsHtml = entry.periodValues.length > 0
              ? `<div class="etb-values-table">${entry.periodValues.map((pv) =>
                  `<div class="etb-val-row">
                    <span class="etb-val-period">${aiEscape(pv.period)}</span>
                    <span class="etb-val-value ${pv.value == null ? "etb-val-missing" : "etb-val-" + pv.risk}">
                      ${pv.value != null ? aiEscape(pv.value) : "— not recorded"}
                    </span>
                  </div>`).join("")}</div>`
              : `<div class="etb-val-empty">No per-period values recorded.</div>`;
            const confMap = { high:"etb-conf-high", moderate:"etb-conf-moderate", low:"etb-conf-low", none:"etb-conf-none" };
            const confLabel = { high:"High Confidence", moderate:"Moderate Confidence", low:"Low Confidence", none:"No Evidence" };
            const trendCls = (entry.trend||"").toLowerCase().includes("wors")||(entry.trend||"").toLowerCase().includes("increas") ? "etb-trend-bad"
                           : (entry.trend||"").toLowerCase().includes("improv")||(entry.trend||"").toLowerCase().includes("decreas") ? "etb-trend-good"
                           : "etb-trend-neutral";
            return `<div class="etb-entry">
              <div class="etb-entry-header">
                <div class="etb-entry-claim">${aiEscape(entry.claim)}</div>
                <div class="etb-entry-badges">
                  <span class="etb-trend-badge ${trendCls}">${aiEscape(entry.trend)}</span>
                  <span class="etb-confidence-badge ${confMap[entry.confidence]||"etb-conf-none"}">${confLabel[entry.confidence]||"No Evidence"}</span>
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
        }
        const etbPanel = document.getElementById("icuEtbPanel");
        if (etbPanel) etbPanel.hidden = false;
      }
    }

  } catch (err) {
    aiLoading.hidden = true;
    aiEmpty.hidden   = false;
    aiEmpty.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="1.5" style="width:24px;height:24px"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><p>AI summary failed: ${aiEscape(err.message)}</p>`;
  }
};

const setupIcuAnalysis = () => {
  if (typeof EMR_ICU_PATIENTS === "undefined") return;
  icuBuildPatientOptions();

  document.getElementById("icuPatientSelect").addEventListener("change", (e) => {
    icuSelectPatient(e.target.value);
  });

  const genBtn = document.getElementById("icuAiGenBtn");
  if (genBtn) {
    genBtn.addEventListener("click", () => {
      if (!icuCurrentPatientId) return;
      const pt = EMR_ICU_PATIENTS.find((p) => p.id === icuCurrentPatientId);
      if (pt) icuTriggerAiSummary(pt);
    });
  }
};

// ============================================================
// SETUP: LOGIN CAPTURE (RBAC session initialisation)
// ============================================================
const setupLoginCapture = () => {
  const btn = document.getElementById("loginSubmitBtn");
  if (!btn) return;

  // Pre-populate form from restored session (demo convenience)
  const staffInput    = document.getElementById("loginStaffIdInput");
  const roleSelect    = document.getElementById("loginRoleSelect");
  const stationInput  = document.getElementById("loginStationInput");
  const shiftSelect   = document.getElementById("loginShiftSelect");
  if (staffInput  && currentSession.staffId)  staffInput.value  = currentSession.staffId;
  if (roleSelect  && currentSession.role)      roleSelect.value  = currentSession.role;
  if (stationInput && currentSession.station)  stationInput.value = currentSession.station;
  if (shiftSelect && currentSession.shift)     shiftSelect.value = currentSession.shift;

  btn.addEventListener("click", () => {
    const staffId  = document.getElementById("loginStaffIdInput")?.value.trim()  || "STA-DEMO";
    const role     = document.getElementById("loginRoleSelect")?.value            || "registration";
    const station  = document.getElementById("loginStationInput")?.value.trim()  || "—";
    const shift    = document.getElementById("loginShiftSelect")?.value           || "morning";

    currentSession = { staffId, role, station, shift, loginTime: new Date().toISOString(), isLoggedIn: true };
    _saveSession();

    addAuditEntry({ action: "login", notes: `Role: ${role}, Station: ${station}, Shift: ${shift}` });
    enforceAccess();
    applyLanguage(currentLang); // refresh role badge labels
    setActivePage("dashboard", { _fromNav: false });
  });
};

const setupLogoutControl = () => {
  const logoutBtn = document.getElementById("topbarLogoutBtn");
  if (!logoutBtn || logoutBtn.dataset.bound === "true") return;

  logoutBtn.dataset.bound = "true";
  logoutBtn.addEventListener("click", () => {
    if (!currentSession.isLoggedIn) return;

    const previousStaffId = currentSession.staffId || "STA-DEMO";
    const previousRole = currentSession.role || "registration";
    addAuditEntry({ action: "logout", notes: `Staff: ${previousStaffId}, Role: ${previousRole}` });

    currentSession = {
      staffId: "",
      role: "registration",
      station: "",
      shift: "morning",
      loginTime: null,
      isLoggedIn: false
    };

    _saveSession();
    enforceAccess();
    applyLanguage(currentLang);
    setActivePage("login", { _fromNav: false });
  });
};

// ============================================================
// SETUP: AUDIT LOG PAGE
// ============================================================
let _auditCurrentFilter = "all";

const renderAuditLog = () => {
  const lang = typeof currentLang !== "undefined" ? currentLang : "en";
  const dict = translations[lang] || translations.en;

  // Stats
  const today = new Date().toISOString().slice(0, 10);
  const todayEntries    = auditEntries.filter((e) => e.timestamp.startsWith(today));
  const approvedEntries = auditEntries.filter((e) => e.action === "approve_new" || e.action === "approve_match");
  const rejectedEntries = auditEntries.filter((e) => e.action === "reject");
  const deniedEntries   = auditEntries.filter((e) => e.action === "access_denied");

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set("auditStatTotal",    auditEntries.length);
  set("auditStatToday",    todayEntries.length);
  set("auditStatApproved", approvedEntries.length);
  set("auditStatRejected", rejectedEntries.length);
  set("auditStatDenied",   deniedEntries.length);

  // Filter buttons active state
  document.querySelectorAll(".audit-filter").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === _auditCurrentFilter);
  });

  // Apply filter
  const filtered = _auditCurrentFilter === "all"
    ? auditEntries
    : auditEntries.filter((e) => {
        const f = _auditCurrentFilter;
        if (f === "approve") return e.action === "approve_new" || e.action === "approve_match";
        return e.action === f;
      });

  const tbody = document.getElementById("auditTableBody");
  const emptyEl = document.getElementById("auditEmpty");
  if (!tbody) return;

  if (!filtered.length) {
    tbody.innerHTML = "";
    if (emptyEl) emptyEl.hidden = false;
    return;
  }
  if (emptyEl) emptyEl.hidden = true;

  const meta = (action) => AUDIT_ACTION_META[action] || { label: action, labelTH: action, cls: "aud-view" };
  const fmtTs = (iso) => {
    if (!iso) return "—";
    const d = new Date(iso);
    return `${d.toLocaleDateString("th-TH", { year: "numeric", month: "short", day: "numeric" })}<br><span style="color:var(--gray-400);font-size:0.72rem;">${d.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</span>`;
  };
  const roleLabel = (r) => {
    const p = ROLE_PERMISSIONS[r];
    if (!p) return r;
    return lang === "th" ? p.labelTH : p.label;
  };

  tbody.innerHTML = filtered.map((e) => {
    const m = meta(e.action);
    const actionLabel = lang === "th" ? m.labelTH : m.label;
    const patientCell = e.patientName
      ? `<strong>${e.patientName}</strong>${e.patientId ? `<br><span style="font-size:0.72rem;color:var(--gray-400);">${e.patientId}</span>` : ""}`
      : `<span style="color:var(--gray-400);">—</span>`;
    const detailCell = [e.changes, e.notes].filter(Boolean).join(" · ") || "—";
    return `<tr>
      <td style="font-family:monospace;font-size:0.72rem;white-space:nowrap;">${e.id}</td>
      <td><span class="audit-action-badge ${m.cls}">${actionLabel}</span></td>
      <td>
        <strong>${e.staffId}</strong>
        <br><span class="role-badge" data-role="${e.staffRole}">${roleLabel(e.staffRole)}</span>
        ${e.station !== "—" ? `<br><span style="font-size:0.7rem;color:var(--gray-400);">${e.station}</span>` : ""}
      </td>
      <td>${patientCell}</td>
      <td style="font-size:0.8rem;max-width:260px;">${detailCell}</td>
      <td style="font-size:0.75rem;white-space:nowrap;">${fmtTs(e.timestamp)}</td>
    </tr>`;
  }).join("");
};

const _auditExportCSV = () => {
  const header = ["Entry ID", "Action", "Staff ID", "Role", "Station", "Patient ID", "Patient Name", "Changes", "Notes", "Timestamp"];
  const rows = auditEntries.map((e) => [
    e.id, e.action, e.staffId, e.staffRole, e.station,
    e.patientId || "", e.patientName || "",
    (e.changes || "").replace(/,/g, ";"), (e.notes || "").replace(/,/g, ";"),
    e.timestamp
  ].map((v) => `"${v}"`).join(","));
  const csv  = [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `nightingale-audit-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

const setupAuditLog = () => {
  // Filter buttons
  document.querySelectorAll(".audit-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      _auditCurrentFilter = btn.dataset.filter || "all";
      renderAuditLog();
    });
  });

  // Export
  const exportBtn = document.getElementById("auditExportBtn");
  if (exportBtn) exportBtn.addEventListener("click", _auditExportCSV);

  // Access-denied overlay back button
  const backBtn = document.getElementById("accessDeniedBackBtn");
  if (backBtn) backBtn.addEventListener("click", () => setActivePage("dashboard", { _fromNav: false }));

  // Re-render on language change
  window.addEventListener("nightingale-lang-change", () => {
    enforceAccess();
    if (document.querySelector('.page[data-page="audit-log"].active')) renderAuditLog();
  });

  // Initial render
  renderAuditLog();
};

const setupEmrIntelligence = () => {
  if (typeof EMR_DIABETES_PATIENTS !== "undefined") setupLongitudinalTimeline();
  if (typeof EMR_ICU_PATIENTS !== "undefined")      setupIcuAnalysis();
};

document.addEventListener("DOMContentLoaded", init);
