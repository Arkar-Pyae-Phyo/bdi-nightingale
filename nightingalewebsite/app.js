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
    adminActionEdit: "Edit"
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
    adminActionEdit: "แก้ไข"
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
};

document.addEventListener("DOMContentLoaded", init);
