const translations = {
  en: {
    pageTitle: "Nightingale Hospital Staff Dashboard",
    brandName: "Nightingale",
    brandTagline: "Hospital Staff Intelligence Console",
    navLogin: "Login",
    navDashboard: "Main Dashboard",
    navIdScan: "ID Scan",
    navQueue: "Verification Queue",
    navProfile: "Patient Profile",
    navDepartmentSummary: "Department AI Summary",
    navTimeline: "Longitudinal Timeline",
    navIcuAnalysis: "ICU Ventilator Analysis",
    navStandards: "Data Localization & Standards",
    navAdmin: "Admin Settings",
    staffOnly: "Staff-only",
    statusBadge: "Live Queue",
    platformTitle: "Nightingale Hospital Staff Console",
    platformSubtitle: "Operational intelligence for registration, clinics, ICU, and admin teams.",
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
    idScanTitle: "Thai National ID Scanning",
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
    regSectionBasicDesc: "Full name, DOB, gender, nationality, and profile photo.",
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
    longTimelineTitle: "Longitudinal Medical Timeline",
    longTimelineSubtitle: "Patient events across rolling 60-day periods.",
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
    standardsSubtitle: "Mapping ICD-10, HL7, and FHIR to local fields.",
    standardsConceptTitle: "Standards Concept Map",
    standardsConceptDesc: "How local data maps into global standards.",
    standardsIcdTitle: "ICD-10",
    standardsIcdDesc: "Local diagnosis text mapped to ICD-10 codes.",
    standardsHl7Title: "HL7",
    standardsHl7Desc: "ADT/ORM/ORU feeds normalized for EMR sync.",
    standardsFhirTitle: "FHIR",
    standardsFhirDesc: "Patient, Observation, Medication resources.",
    localMappingTitle: "Local Field Mapping",
    localMappingDesc: "Hospital data dictionary to standards.",
    mapTableLocalField: "Local Field",
    mapTableStandard: "Standard Mapping",
    mapTableNotes: "Notes",
    mappingExampleTitle: "Example: Local → ICD-10",
    mappingExampleDesc: "Diagnosis text converted to standard code.",
    mappingExampleLocal: "Local",
    mappingExampleIcd: "ICD-10",
    fhirExampleTitle: "Example: Local EMR → FHIR",
    fhirExampleDesc: "Patient + Observation + Medication resources.",
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
    vqMatchSelected: "✓ Selected",
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
    vqDescRescan: "Send back for a clearer ID card scan."
  },
  th: {
    pageTitle: "แดชบอร์ดบุคลากรโรงพยาบาล Nightingale",
    brandName: "Nightingale",
    brandTagline: "ศูนย์ข้อมูลสำหรับบุคลากรโรงพยาบาล",
    navLogin: "เข้าสู่ระบบ",
    navDashboard: "แดชบอร์ดหลัก",
    navIdScan: "สแกนบัตรประชาชน",
    navQueue: "คิวตรวจสอบ",
    navProfile: "โปรไฟล์ผู้ป่วย",
    navDepartmentSummary: "สรุป AI ตามแผนก",
    navTimeline: "ไทม์ไลน์ระยะยาว",
    navIcuAnalysis: "วิเคราะห์เครื่องช่วยหายใจ ICU",
    navStandards: "การแปลข้อมูลและมาตรฐาน",
    navAdmin: "ตั้งค่าผู้ดูแลระบบ",
    staffOnly: "สำหรับเจ้าหน้าที่เท่านั้น",
    statusBadge: "คิวสด",
    platformTitle: "ศูนย์ควบคุมบุคลากรโรงพยาบาล Nightingale",
    platformSubtitle: "ข้อมูลเชิงปฏิบัติการสำหรับงานลงทะเบียน คลินิก ICU และผู้ดูแลระบบ",
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
    regSectionBasicDesc: "ชื่อ วันเกิด เพศ สัญชาติ และรูปโปรไฟล์",
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
    rescanBtn: "ขอสแกนใหม่",
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
    evidenceTitle: "หลักฐานอ้างอิง",
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
    longTimelineTitle: "ไทม์ไลน์การรักษาระยะยาว",
    longTimelineSubtitle: "เหตุการณ์ผู้ป่วยตามช่วงเวลา 60 วัน",
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
    standardsTitle: "การแปลข้อมูลและมาตรฐาน",
    standardsSubtitle: "แมป ICD-10, HL7 และ FHIR กับข้อมูลท้องถิ่น",
    standardsConceptTitle: "แผนผังแนวคิดมาตรฐาน",
    standardsConceptDesc: "การเชื่อมข้อมูลท้องถิ่นสู่มาตรฐานสากล",
    standardsIcdTitle: "ICD-10",
    standardsIcdDesc: "แมปข้อความวินิจฉัยเป็นรหัส ICD-10",
    standardsHl7Title: "HL7",
    standardsHl7Desc: "ปรับมาตรฐาน ADT/ORM/ORU สำหรับ EMR",
    standardsFhirTitle: "FHIR",
    standardsFhirDesc: "ทรัพยากร Patient, Observation, Medication",
    localMappingTitle: "การแมปฟิลด์ท้องถิ่น",
    localMappingDesc: "พจนานุกรมข้อมูลโรงพยาบาลสู่มาตรฐาน",
    mapTableLocalField: "ฟิลด์ท้องถิ่น",
    mapTableStandard: "การแมปมาตรฐาน",
    mapTableNotes: "หมายเหตุ",
    mappingExampleTitle: "ตัวอย่าง: ท้องถิ่น → ICD-10",
    mappingExampleDesc: "ข้อความวินิจฉัยแปลงเป็นรหัสมาตรฐาน",
    mappingExampleLocal: "ท้องถิ่น",
    mappingExampleIcd: "ICD-10",
    fhirExampleTitle: "ตัวอย่าง: EMR ท้องถิ่น → FHIR",
    fhirExampleDesc: "Patient + Observation + Medication",
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
    vqMatchSelected: "✓ เลือกแล้ว",
    vqNoMatches: "ไม่พบโปรไฟล์ผู้ป่วยที่ตรงกัน จะสร้างโปรไฟล์ใหม่เมื่ออนุมัติ",
    vqBtnApproveNew: "อนุมัติและสร้างโปรไฟล์ผู้ป่วยใหม่",
    vqBtnApproveMatch: "อนุมัติและเชื่อมโยงกับโปรไฟล์ที่จับคู่ได้",
    vqBtnEditFields: "แก้ไขข้อมูลที่ไม่ถูกต้อง",
    vqBtnReject: "ปฏิเสธรายการนี้",
    vqBtnRescan: "ขอสแกนใหม่",
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
    vqDescRescan: "ส่งกลับเพื่อสแกนบัตรให้ชัดขึ้น"
  }
};

const langToggleButtons = document.querySelectorAll("[data-lang-toggle]");
const navItems = Array.from(document.querySelectorAll(".nav-item[data-page]"));
const pages = Array.from(document.querySelectorAll(".page[data-page]"));
const actionButtons = Array.from(document.querySelectorAll("[data-page-target]"));
let currentLang = localStorage.getItem("nightingale-lang") || "en";

const setText = (el, value) => {
  if (value === undefined) {
    return;
  }
  el.textContent = value;
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
};

const setActivePage = (pageId, options = {}) => {
  const target = pages.find((page) => page.dataset.page === pageId) || pages[0];
  if (!target) {
    return;
  }

  pages.forEach((page) => {
    page.classList.toggle("active", page === target);
  });

  navItems.forEach((item) => {
    const isActive = item.dataset.page === target.dataset.page;
    item.classList.toggle("active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  localStorage.setItem("nightingale-page", target.dataset.page);

  if (options.updateHash !== false) {
    history.replaceState(null, "", `#${target.dataset.page}`);
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

const init = () => {
  applyLanguage(currentLang);

  const storedPage = localStorage.getItem("nightingale-page");
  const hashPage = window.location.hash.replace("#", "");
  const initialPage = hashPage || storedPage || "dashboard";
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

  setupRegistrationForm();
  setupVerificationQueue();
};

// ============================================================
// VERIFICATION QUEUE
// ============================================================

// ── Mock Data ─────────────────────────────────────────────────
const VQ_RECORDS = [
  {
    id: "Q-2143",
    patientName: "Kanok Pornpan",
    thaiName: "กนก พรพันธ์",
    thaiId: "1 1017 00234 56 7",
    scanTime: "2026-05-28 08:14",
    ocrConfidence: 91,
    status: "pending",
    assignedTo: "Reg Desk 2",
    department: "Registration",
    dob: "1991-09-23",
    gender: "Female",
    address: "Bang Kapi, Bangkok 10240",
    phone: "086-321-3342",
    hn: null,
    notes: "All fields extracted clearly. Photo quality good."
  },
  {
    id: "Q-2139",
    patientName: "Pisut Ruangsri",
    thaiName: "พิสุทธิ์ เรืองศรี",
    thaiId: "3 6701 00123 45 6",
    scanTime: "2026-05-28 07:52",
    ocrConfidence: 68,
    status: "needs-rescan",
    assignedTo: "ICU Front",
    department: "ICU",
    dob: "1978-03-15",
    gender: "Male",
    address: "Chatuchak, Bangkok 10900",
    phone: "091-445-7821",
    hn: "HN-2026-00892",
    notes: "Photo glare detected. Name field confidence 68%. DOB unclear."
  },
  {
    id: "Q-2134",
    patientName: "Mali Saengda",
    thaiName: "มาลี แสงดา",
    thaiId: "1 3099 00456 78 9",
    scanTime: "2026-05-28 07:31",
    ocrConfidence: 85,
    status: "pending",
    assignedTo: "Ward A",
    department: "Ward",
    dob: "1965-11-07",
    gender: "Female",
    address: "Nong Khai Province 43000",
    phone: "042-311-8820",
    hn: null,
    notes: "Possible duplicate detected against existing ICU profile."
  },
  {
    id: "Q-2128",
    patientName: "Somchai Thapkhan",
    thaiName: "สมชาย ทับขัน",
    thaiId: "1 1026 00789 01 2",
    scanTime: "2026-05-28 06:55",
    ocrConfidence: 96,
    status: "approved",
    assignedTo: "Reg Desk 1",
    department: "OPD",
    dob: "1982-06-30",
    gender: "Male",
    address: "Lat Phrao, Bangkok 10230",
    phone: "089-776-3412",
    hn: "HN-2026-01983",
    notes: "Matched to existing OPD profile. HN confirmed."
  },
  {
    id: "Q-2121",
    patientName: "Wanida Kaewtip",
    thaiName: "วนิดา แก้วทิพย์",
    thaiId: "2 4501 00234 89 0",
    scanTime: "2026-05-27 22:14",
    ocrConfidence: 42,
    status: "rejected",
    assignedTo: "Night Staff",
    department: "Emergency",
    dob: "1999-02-14",
    gender: "Female",
    address: "Chiang Rai Province 57000",
    phone: "053-714-2299",
    hn: null,
    notes: "Image too blurry. Key fields unreadable. ID number illegible."
  },
  {
    id: "Q-2118",
    patientName: "Arthit Boriban",
    thaiName: "อาทิตย์ บอริบัน",
    thaiId: "1 1999 00345 67 8",
    scanTime: "2026-05-27 21:40",
    ocrConfidence: 79,
    status: "pending",
    assignedTo: "Diabetes Clinic",
    department: "Diabetes Clinic",
    dob: "1970-08-19",
    gender: "Male",
    address: "Min Buri, Bangkok 10510",
    phone: "085-229-0011",
    hn: null,
    notes: "DOB field confidence 76%. Address partially cut off at edge."
  }
];

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
      <td><button class="ghost small" type="button" data-vq-open="${r.id}">${vqT("vqBtnReview")}</button></td>
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

    // Update record status in mock data
    const idx = VQ_RECORDS.findIndex((r) => r.id === record.id);
    if (idx !== -1) {
      if (action === "approve-new" || action === "approve-match") {
        VQ_RECORDS[idx].status = "approved";
      } else if (action === "reject") {
        VQ_RECORDS[idx].status = "rejected";
      } else if (action === "rescan") {
        VQ_RECORDS[idx].status = "needs-rescan";
      }
    }

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

document.addEventListener("DOMContentLoaded", init);
