// ============================================================
// Nightingale EMR Intelligence – Data Module
// Sources:
//   • ICU Ventilator waveform data — SmartICU dataset (BDI Hackathon 2026)
//   • Diabetes EMR — longitudinal dataset, Srinagarind Hospital, KKU
//   • Hypertension EMR — longitudinal dataset, Srinagarind Hospital, KKU
// ============================================================

// ── CSV / Text Parser ─────────────────────────────────────────
const emrParseCSV = (text) => {
  const lines = text.trim().split("\n").filter((l) => l.trim() && !l.startsWith("Flow"));
  return lines.map((line) => {
    const [flow, pressure, volume] = line.split(",").map((v) => parseFloat(v.trim()));
    return { flow, pressure, volume };
  });
};

const emrStats = (arr) => {
  if (!arr.length) return { min: 0, max: 0, mean: 0, std: 0 };
  const mn = Math.min(...arr);
  const mx = Math.max(...arr);
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  const std = Math.sqrt(arr.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / arr.length);
  return { min: +mn.toFixed(2), max: +mx.toFixed(2), mean: +mean.toFixed(2), std: +std.toFixed(2) };
};

const emrWaveStats = (rows) => ({
  flow: emrStats(rows.map((r) => r.flow)),
  pressure: emrStats(rows.map((r) => r.pressure)),
  volume: emrStats(rows.map((r) => r.volume)),
  sampleCount: rows.length
});

// ── Waveform Samples (embedded from actual CSV files) ─────────
// Source: bd49632138fb4b75d505156379f25fb9_0_100123_WaveformExport.csv
const _CSV_BD_D0_1001 = `73.44,5.39,333.33
73.24,5.55,333.33
73.50,5.70,333.33
73.44,5.78,333.33
73.44,5.90,333.33
73.18,5.90,333.33
73.18,5.66,333.33
73.11,5.47,333.33
72.92,5.39,333.33
73.18,5.31,333.33
73.31,5.23,333.33
73.18,5.27,333.33
73.11,5.35,333.33
73.24,5.47,333.33
73.57,5.59,333.33
73.44,5.63,333.33
73.31,5.63,333.33
73.44,5.63,333.33
73.37,5.59,333.33
73.11,5.59,333.33
73.37,5.55,333.33
73.57,5.55,333.33
73.24,5.51,333.33
73.44,5.43,333.33
73.57,5.35,333.33
73.57,5.31,333.33
73.31,5.27,333.33
73.11,5.23,333.33`;

// Source: bd49632138fb4b75d505156379f25fb9_0_150203_WaveformExport.csv
const _CSV_BD_D0_1502 = `83.27,7.73,333.33
83.46,7.73,333.33
83.40,7.73,333.33
83.53,7.73,333.33
82.88,7.70,333.33
82.88,7.70,333.33
83.59,7.70,333.33
83.20,7.70,333.33
83.07,7.70,333.33
83.14,7.70,333.33
83.46,7.70,333.33
83.59,7.73,333.33
83.33,7.70,333.33
83.27,7.70,333.33
83.79,7.73,333.33
83.40,7.70,333.33
83.07,7.70,333.33
83.72,7.73,333.33
83.20,7.70,333.33
83.07,7.73,333.33
83.46,7.73,333.33
83.92,7.73,333.33
83.66,7.70,333.33
83.46,7.81,333.33
83.59,7.81,333.33
83.66,7.89,333.33
83.66,7.93,333.33
83.66,7.93,333.33`;

// Source: 2a7b9f1857ab1296725ab6fb1c0b5895_4_102336_WaveformExport.csv
const _CSV_2A_D4_1023 = `95.57,43.13,565.76
94.99,46.05,598.96
95.44,47.38,636.72
95.77,48.59,675.13
94.53,50.27,712.24
61.98,49.22,746.09
23.05,39.34,777.99
-44.66,21.64,794.27
-55.08,11.17,761.07
-32.10,7.19,721.35
-16.08,5.78,688.15
-7.81,5.59,658.85
-1.69,5.31,634.11
4.82,5.12,613.93
8.46,5.35,595.70
9.64,5.23,580.08
11.07,5.08,565.10
13.87,5.04,550.78
15.43,5.12,538.41
16.15,5.12,526.69
17.51,5.04,516.28
18.42,5.04,505.86
19.53,5.00,496.09
20.31,5.12,487.63
19.73,5.23,478.52
19.21,5.04,469.40
19.47,5.00,460.29
20.31,4.84,451.17`;

// Source: 5ea4aaf18779681f4b0fbf093c233521_0_230030_WaveformExport.csv
const _CSV_5E_D0_2300 = `73.44,11.56,333.33
73.37,11.56,333.33
73.50,11.56,333.33
73.44,11.52,333.33
73.24,11.52,333.33
73.37,11.56,333.33
73.50,11.56,333.33
73.24,11.60,333.33
73.31,11.64,333.33
73.24,11.68,333.33
73.31,11.76,333.33
73.24,11.76,333.33
73.18,11.84,333.33
73.31,11.88,333.33
73.31,11.91,333.33
73.18,11.95,333.33
73.24,11.91,333.33
73.37,11.88,333.33
73.44,11.88,333.33
73.31,11.88,333.33
73.31,11.88,333.33
73.18,11.91,333.33
73.50,11.91,333.33
73.31,11.91,333.33
73.44,11.91,333.33
73.44,11.91,333.33
73.44,11.91,333.33
73.18,11.91,333.33`;

// ── ICU Patient Dataset ───────────────────────────────────────
// Source: smart_icu_data/ JSON files — embedded and structured for UI use
const EMR_ICU_PATIENTS = [
  {
    id: "bd49632138fb4b75d505156379f25fb9",
    displayId: "ICU-PT-001",
    hn: "HN-ICU-0781",
    sex: "M",
    age: 81,
    sexLabel: "Male / ชาย",
    bw: 67,
    ht: 155,
    bmi: 27.89,
    ventilatorId: "011",
    icuDays: 2,
    primaryDx: "ไม่ระบุ (Unspecified)",
    secondaryDx: "ไม่ระบุ (Unspecified)",
    operations: "ไม่ระบุ",
    admitDate: "2026-05-18",
    days: [
      {
        day: 0,
        dx: "ไม่ระบุ",
        op: "ไม่ระบุ",
        captures: [
          {
            time: "10:01:23",
            file: "bd49632138fb4b75d505156379f25fb9_0_100123_WaveformExport.csv",
            rows: emrParseCSV(_CSV_BD_D0_1001)
          },
          {
            time: "15:02:03",
            file: "bd49632138fb4b75d505156379f25fb9_0_150203_WaveformExport.csv",
            rows: emrParseCSV(_CSV_BD_D0_1502)
          },
          { time: "12:01:26", file: "bd49632138fb4b75d505156379f25fb9_0_120126_WaveformExport.csv", rows: null },
          { time: "13:01:24", file: "bd49632138fb4b75d505156379f25fb9_0_130124_WaveformExport.csv", rows: null },
          { time: "14:02:07", file: "bd49632138fb4b75d505156379f25fb9_0_140207_WaveformExport.csv", rows: null },
          { time: "17:02:04", file: "bd49632138fb4b75d505156379f25fb9_0_170204_WaveformExport.csv", rows: null },
          { time: "18:02:03", file: "bd49632138fb4b75d505156379f25fb9_0_180203_WaveformExport.csv", rows: null },
          { time: "19:02:10", file: "bd49632138fb4b75d505156379f25fb9_0_190210_WaveformExport.csv", rows: null },
          { time: "20:02:09", file: "bd49632138fb4b75d505156379f25fb9_0_200209_WaveformExport.csv", rows: null },
          { time: "21:02:16", file: "bd49632138fb4b75d505156379f25fb9_0_210216_WaveformExport.csv", rows: null },
          { time: "21:02:26", file: "bd49632138fb4b75d505156379f25fb9_0_210226_WaveformExport.csv", rows: null },
          { time: "23:02:06", file: "bd49632138fb4b75d505156379f25fb9_0_230206_WaveformExport.csv", rows: null }
        ]
      },
      {
        day: 1,
        dx: "Respiratory failure (J96.09)",
        op: "Endotracheal intubation, Mechanical ventilation",
        captures: [
          { time: "00:02:02", file: "bd49632138fb4b75d505156379f25fb9_1_000202_WaveformExport.csv", rows: null },
          { time: "01:02:07", file: "bd49632138fb4b75d505156379f25fb9_1_010207_WaveformExport.csv", rows: null },
          { time: "02:02:06", file: "bd49632138fb4b75d505156379f25fb9_1_020206_WaveformExport.csv", rows: null },
          { time: "03:02:09", file: "bd49632138fb4b75d505156379f25fb9_1_030209_WaveformExport.csv", rows: null },
          { time: "04:02:06", file: "bd49632138fb4b75d505156379f25fb9_1_040206_WaveformExport.csv", rows: null },
          { time: "05:02:13", file: "bd49632138fb4b75d505156379f25fb9_1_050213_WaveformExport.csv", rows: null },
          { time: "06:02:06", file: "bd49632138fb4b75d505156379f25fb9_1_060206_WaveformExport.csv", rows: null },
          { time: "07:02:14", file: "bd49632138fb4b75d505156379f25fb9_1_070214_WaveformExport.csv", rows: null },
          { time: "09:02:05", file: "bd49632138fb4b75d505156379f25fb9_1_090205_WaveformExport.csv", rows: null }
        ]
      }
    ]
  },
  {
    id: "2a7b9f1857ab1296725ab6fb1c0b5895",
    displayId: "ICU-PT-002",
    hn: "HN-ICU-0892",
    sex: "M",
    age: 47,
    sexLabel: "Male / ชาย",
    bw: 45,
    ht: 170,
    bmi: 15.57,
    ventilatorId: "011",
    icuDays: 18,
    primaryDx: "Hemoptysis (R04.2)",
    secondaryDx: "Acute respiratory failure (J96.09)",
    operations: "Percutaneous embolisation of bronchial artery; Endotracheal intubation",
    admitDate: "2026-05-04",
    days: [
      {
        day: 4,
        dx: "Hemoptysis (R04.2) + Acute respiratory failure (J96.09)",
        op: "Percutaneous embolisation of bronchial artery; Endotracheal intubation",
        captures: [
          {
            time: "10:23:36",
            file: "2a7b9f1857ab1296725ab6fb1c0b5895_4_102336_WaveformExport.csv",
            rows: emrParseCSV(_CSV_2A_D4_1023)
          }
        ]
      },
      {
        day: 14,
        dx: "Hemoptysis (R04.2) + Acute respiratory failure (J96.09)",
        op: "Percutaneous embolisation of bronchial artery; Endotracheal intubation",
        captures: [
          { time: "11:11:31", file: "2a7b9f1857ab1296725ab6fb1c0b5895_14_111131_WaveformExport.csv", rows: null },
          { time: "11:18:25", file: "2a7b9f1857ab1296725ab6fb1c0b5895_14_111825_WaveformExport.csv", rows: null }
        ]
      },
      { day: 15, dx: "Hemoptysis (R04.2) + ARF", op: "Ongoing mechanical ventilation", captures: [] },
      { day: 16, dx: "Hemoptysis (R04.2) + ARF", op: "Ongoing mechanical ventilation", captures: [] },
      { day: 17, dx: "Hemoptysis (R04.2) + ARF", op: "Weaning trial", captures: [] },
      { day: 18, dx: "Hemoptysis (R04.2) + ARF", op: "Weaning trial", captures: [] }
    ]
  },
  {
    id: "5ea4aaf18779681f4b0fbf093c233521",
    displayId: "ICU-PT-003",
    hn: "HN-ICU-1203",
    sex: "M",
    age: 87,
    sexLabel: "Male / ชาย",
    bw: 45,
    ht: 160,
    bmi: 17.58,
    ventilatorId: "015",
    icuDays: 6,
    primaryDx: "Aspiration pneumonia (J69.0)",
    secondaryDx: "Septic shock (A41.9)",
    operations: "Endotracheal intubation; Mechanical ventilation; Heated and humidified O2",
    admitDate: "2026-05-22",
    days: [
      {
        day: 0,
        dx: "ไม่ระบุ (Admitted, pre-diagnosis)",
        op: "ไม่ระบุ",
        captures: [
          {
            time: "23:00:30",
            file: "5ea4aaf18779681f4b0fbf093c233521_0_230030_WaveformExport.csv",
            rows: emrParseCSV(_CSV_5E_D0_2300)
          }
        ]
      },
      { day: 1, dx: "Aspiration pneumonia (J69.0) + Septic shock (A41.9)", op: "ไม่ระบุ", captures: [] },
      { day: 2, dx: "Aspiration pneumonia (J69.0) + Septic shock (A41.9)", op: "ไม่ระบุ", captures: [] },
      {
        day: 3,
        dx: "Aspiration pneumonia (J69.0) + Septic shock (A41.9)",
        op: "Endotracheal intubation; Mechanical ventilation",
        captures: []
      },
      {
        day: 4,
        dx: "Aspiration pneumonia (J69.0) + Septic shock (A41.9)",
        op: "Endotracheal intubation; Mechanical ventilation",
        captures: []
      },
      {
        day: 5,
        dx: "Aspiration pneumonia (J69.0) + Septic shock (A41.9)",
        op: "Endotracheal intubation; Mechanical ventilation; Heated and humidified O2",
        captures: []
      }
    ]
  }
];

// ── Diabetes EMR Dataset ──────────────────────────────────────
// Schema: period P=-1 (pre -30 to -90d), P=0 (±30d onset), P=1 (30-90d post)
// Source schema: BDI Hackathon 2026 — Diabetes Longitudinal EMR, Srinagarind Hospital KKU
// Patient data: synthetic/mock matching verified profiles from VQ_RECORDS
const EMR_DIABETES_PATIENTS = [
  {
    id: "DM-001",
    hn: "HN-2026-01983",
    name: "Somchai Thapkhan",
    thaiName: "สมชาย ทับขัน",
    age: 44,
    sex: "MALE",
    identifyBy: "icd10",
    dmOnset: "2024-03-15",
    type1: 0,
    type2: 1,
    gdm: 0,
    source: "Srinagarind Hospital OPD",
    linkedVqId: "Q-2128",
    periods: [
      {
        p: -1,
        label: "Pre-onset (P-1)",
        dateRange: "2023-12-15 – 2024-02-13",
        vitals: { sbp: 128, dbp: 82, hr: 78, bmi: 27.3, o2sat: 98, temp: 36.7, wt: 74, ht: 165 },
        labs: { fpg: 6.8, hba1c: null, cpeptide: null, wbc: 7.2, hemoglobin: 14.1, ldl: 128, hdl: 42, trig: 198, creatinine: 0.9 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: []
      },
      {
        p: 0,
        label: "Onset Period (P0)",
        dateRange: "2024-02-14 – 2024-04-13",
        vitals: { sbp: 133, dbp: 86, hr: 82, bmi: 27.8, o2sat: 97, temp: 36.8, wt: 75, ht: 165 },
        labs: { fpg: 9.4, hba1c: 8.1, cpeptide: 1.8, wbc: 8.1, hemoglobin: 13.9, ldl: 132, hdl: 40, trig: 212, creatinine: 0.95 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["metformin_500mg", "amlodipine_5mg"]
      },
      {
        p: 1,
        label: "Post-onset 30-90d (P1)",
        dateRange: "2024-04-14 – 2024-06-12",
        vitals: { sbp: 129, dbp: 83, hr: 76, bmi: 27.1, o2sat: 98, temp: 36.6, wt: 73, ht: 165 },
        labs: { fpg: 7.9, hba1c: 7.4, cpeptide: 2.1, wbc: 7.5, hemoglobin: 14.2, ldl: 118, hdl: 44, trig: 180, creatinine: 0.92 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["metformin_1000mg", "amlodipine_5mg"]
      },
      {
        p: 2,
        label: "60-120d post (P2)",
        dateRange: "2024-06-13 – 2024-08-11",
        vitals: { sbp: 126, dbp: 80, hr: 74, bmi: 26.8, o2sat: 98, temp: 36.7, wt: 72, ht: 165 },
        labs: { fpg: 7.1, hba1c: 6.9, cpeptide: 2.3, wbc: 7.1, hemoglobin: 14.4, ldl: 108, hdl: 46, trig: 165, creatinine: 0.91 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["metformin_1000mg", "amlodipine_5mg", "rosuvastatin_10mg"]
      },
      {
        p: 3,
        label: "120-180d post (P3)",
        dateRange: "2024-08-12 – 2024-10-10",
        vitals: { sbp: 122, dbp: 78, hr: 72, bmi: 26.4, o2sat: 99, temp: 36.6, wt: 71, ht: 165 },
        labs: { fpg: 6.6, hba1c: 6.6, cpeptide: 2.4, wbc: 6.9, hemoglobin: 14.6, ldl: 98, hdl: 48, trig: 152, creatinine: 0.90 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["metformin_1000mg", "amlodipine_5mg", "rosuvastatin_10mg"]
      }
    ]
  },
  {
    id: "DM-002",
    hn: "HN-DM-0234",
    name: "Arthit Boriban",
    thaiName: "อาทิตย์ บอริบัน",
    age: 56,
    sex: "MALE",
    identifyBy: "medication",
    dmOnset: "2023-09-08",
    type1: 0,
    type2: 1,
    gdm: 0,
    source: "Srinagarind Hospital Diabetes Clinic",
    linkedVqId: "Q-2118",
    periods: [
      {
        p: -1,
        label: "Pre-onset (P-1)",
        dateRange: "2023-06-10 – 2023-08-07",
        vitals: { sbp: 138, dbp: 90, hr: 84, bmi: 29.1, o2sat: 97, temp: 36.8, wt: 81, ht: 167 },
        labs: { fpg: 7.2, hba1c: null, cpeptide: null, wbc: 8.4, hemoglobin: 13.7, ldl: 148, hdl: 38, trig: 248, creatinine: 1.1 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 1, dm: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["ARB_valsartan"]
      },
      {
        p: 0,
        label: "Onset Period (P0)",
        dateRange: "2023-08-08 – 2023-10-06",
        vitals: { sbp: 142, dbp: 94, hr: 88, bmi: 29.6, o2sat: 96, temp: 36.9, wt: 82, ht: 167 },
        labs: { fpg: 11.8, hba1c: 9.4, cpeptide: 1.2, wbc: 9.2, hemoglobin: 13.4, ldl: 155, hdl: 36, trig: 276, creatinine: 1.2 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 1, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["ARB_valsartan", "metformin_500mg"]
      },
      {
        p: 1,
        label: "Post-onset 30-90d (P1)",
        dateRange: "2023-10-07 – 2023-12-05",
        vitals: { sbp: 136, dbp: 88, hr: 82, bmi: 29.0, o2sat: 97, temp: 36.8, wt: 80, ht: 167 },
        labs: { fpg: 9.8, hba1c: 8.3, cpeptide: 1.5, wbc: 8.7, hemoglobin: 13.6, ldl: 140, hdl: 39, trig: 241, creatinine: 1.1 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 1, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["ARB_valsartan", "metformin_1000mg", "sitagliptin_100mg"]
      },
      {
        p: 2,
        label: "60-120d post (P2)",
        dateRange: "2023-12-06 – 2024-02-03",
        vitals: { sbp: 132, dbp: 85, hr: 79, bmi: 28.6, o2sat: 97, temp: 36.7, wt: 79, ht: 167 },
        labs: { fpg: 8.4, hba1c: 7.8, cpeptide: 1.7, wbc: 8.2, hemoglobin: 13.8, ldl: 128, hdl: 41, trig: 218, creatinine: 1.1 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 1, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["ARB_valsartan", "metformin_1000mg", "sitagliptin_100mg", "rosuvastatin_20mg"]
      }
    ]
  },
  {
    id: "DM-003",
    hn: "HN-DM-0891",
    name: "Malee Charoenphan",
    thaiName: "มาลี เจริญพันธ์",
    age: 62,
    sex: "FEMALE",
    identifyBy: "icd10",
    dmOnset: "2022-11-20",
    type1: 0,
    type2: 1,
    gdm: 0,
    source: "Srinagarind Hospital OPD",
    linkedVqId: null,
    periods: [
      {
        p: -1,
        label: "Pre-onset (P-1)",
        dateRange: "2022-08-22 – 2022-10-20",
        vitals: { sbp: 144, dbp: 92, hr: 86, bmi: 30.2, o2sat: 97, temp: 36.8, wt: 68, ht: 150 },
        labs: { fpg: 6.9, hba1c: null, cpeptide: null, wbc: 7.8, hemoglobin: 12.4, ldl: 152, hdl: 44, trig: 198, creatinine: 0.88 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["CCB_amlodipine"]
      },
      {
        p: 0,
        label: "Onset Period (P0)",
        dateRange: "2022-10-21 – 2022-12-19",
        vitals: { sbp: 148, dbp: 96, hr: 88, bmi: 30.7, o2sat: 96, temp: 36.9, wt: 69, ht: 150 },
        labs: { fpg: 10.8, hba1c: 9.1, cpeptide: 0.9, wbc: 8.6, hemoglobin: 12.1, ldl: 158, hdl: 42, trig: 228, creatinine: 0.91 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["CCB_amlodipine", "metformin_500mg"]
      },
      {
        p: 1,
        label: "Post-onset 30-90d (P1)",
        dateRange: "2022-12-20 – 2023-02-17",
        vitals: { sbp: 140, dbp: 90, hr: 84, bmi: 30.0, o2sat: 97, temp: 36.8, wt: 67, ht: 150 },
        labs: { fpg: 8.8, hba1c: 8.0, cpeptide: 1.1, wbc: 8.0, hemoglobin: 12.3, ldl: 144, hdl: 45, trig: 208, creatinine: 0.89 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["CCB_amlodipine", "metformin_1000mg", "insulin_basal"]
      },
      {
        p: 2,
        label: "60-120d post (P2)",
        dateRange: "2023-02-18 – 2023-04-17",
        vitals: { sbp: 136, dbp: 87, hr: 82, bmi: 29.4, o2sat: 97, temp: 36.7, wt: 66, ht: 150 },
        labs: { fpg: 7.6, hba1c: 7.3, cpeptide: 1.3, wbc: 7.6, hemoglobin: 12.5, ldl: 128, hdl: 47, trig: 188, creatinine: 0.87 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["CCB_amlodipine", "metformin_1000mg", "insulin_basal", "dapagliflozin_10mg"]
      },
      {
        p: 3,
        label: "120-180d post (P3)",
        dateRange: "2023-04-18 – 2023-06-16",
        vitals: { sbp: 132, dbp: 84, hr: 80, bmi: 28.9, o2sat: 98, temp: 36.6, wt: 65, ht: 150 },
        labs: { fpg: 6.8, hba1c: 6.9, cpeptide: 1.5, wbc: 7.3, hemoglobin: 12.7, ldl: 112, hdl: 49, trig: 168, creatinine: 0.86 },
        comorbidities: { ht: 1, cad: 0, hf: 0, stroke: 0, ckd: 0, dm: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["CCB_amlodipine", "metformin_1000mg", "dapagliflozin_10mg"]
      }
    ]
  }
];

// ── Hypertension EMR Dataset ──────────────────────────────────
// Source schema: BDI Hackathon 2026 — Hypertension Longitudinal EMR, Srinagarind Hospital KKU
const EMR_HT_PATIENTS = [
  {
    id: "HT-001",
    hn: "HN-2025-00781",
    name: "Kanok Pornpan",
    thaiName: "กนก พรพันธ์",
    age: 35,
    sex: "FEMALE",
    identifyBy: "icd10",
    htOnset: "2023-06-20",
    source: "Srinagarind Hospital OPD",
    linkedVqId: "Q-2143",
    periods: [
      {
        p: -1,
        label: "Pre-onset (P-1)",
        dateRange: "2023-03-22 – 2023-05-21",
        vitals: { sbp: 138, dbp: 88, hr: 76, bmi: 23.4, o2sat: 98, temp: 36.6, wt: 68, ht: 170 },
        labs: { fpg: 5.1, hba1c: null, wbc: 7.0, hemoglobin: 13.2, ldl: 118, hdl: 52, trig: 132, creatinine: 0.78, sodium: 138, potassium: 4.1, proBNP: null },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: []
      },
      {
        p: 0,
        label: "Onset Period (P0)",
        dateRange: "2023-05-22 – 2023-07-20",
        vitals: { sbp: 154, dbp: 96, hr: 82, bmi: 23.7, o2sat: 98, temp: 36.7, wt: 69, ht: 170 },
        labs: { fpg: 5.3, hba1c: null, wbc: 7.3, hemoglobin: 13.1, ldl: 124, hdl: 50, trig: 145, creatinine: 0.82, sodium: 136, potassium: 4.0, proBNP: 88 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["ACEI_enalapril_5mg"]
      },
      {
        p: 1,
        label: "Post-onset 30-90d (P1)",
        dateRange: "2023-07-21 – 2023-09-18",
        vitals: { sbp: 146, dbp: 92, hr: 78, bmi: 23.5, o2sat: 98, temp: 36.6, wt: 68, ht: 170 },
        labs: { fpg: 5.2, hba1c: null, wbc: 7.1, hemoglobin: 13.2, ldl: 120, hdl: 51, trig: 138, creatinine: 0.81, sodium: 137, potassium: 4.2, proBNP: 72 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["ACEI_enalapril_10mg"]
      },
      {
        p: 2,
        label: "60-120d post (P2)",
        dateRange: "2023-09-19 – 2023-11-17",
        vitals: { sbp: 138, dbp: 86, hr: 76, bmi: 23.3, o2sat: 99, temp: 36.6, wt: 68, ht: 170 },
        labs: { fpg: 5.1, hba1c: null, wbc: 6.9, hemoglobin: 13.3, ldl: 115, hdl: 53, trig: 128, creatinine: 0.79, sodium: 138, potassium: 4.1, proBNP: 58 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["ACEI_enalapril_10mg"]
      }
    ]
  },
  {
    id: "HT-002",
    hn: "HN-2026-00892",
    name: "Pisut Ruangsri",
    thaiName: "พิสุทธิ์ เรืองศรี",
    age: 48,
    sex: "MALE",
    identifyBy: "medication",
    htOnset: "2025-01-10",
    source: "Srinagarind Hospital ICU",
    linkedVqId: "Q-2139",
    periods: [
      {
        p: -1,
        label: "Pre-onset (P-1)",
        dateRange: "2024-10-12 – 2024-12-10",
        vitals: { sbp: 148, dbp: 94, hr: 80, bmi: 26.1, o2sat: 97, temp: 36.7, wt: 82, ht: 177 },
        labs: { fpg: 5.8, hba1c: null, wbc: 8.1, hemoglobin: 14.8, ldl: 138, hdl: 41, trig: 182, creatinine: 1.02, sodium: 140, potassium: 4.3, proBNP: null },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: []
      },
      {
        p: 0,
        label: "Onset Period (P0)",
        dateRange: "2024-12-11 – 2025-02-08",
        vitals: { sbp: 162, dbp: 102, hr: 88, bmi: 26.4, o2sat: 97, temp: 36.8, wt: 83, ht: 177 },
        labs: { fpg: 6.1, hba1c: null, wbc: 8.8, hemoglobin: 14.5, ldl: 145, hdl: 39, trig: 196, creatinine: 1.08, sodium: 138, potassium: 4.5, proBNP: 112 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 1, atrial_fibrillation: 0 },
        medications: ["ARB_losartan_50mg", "CCB_amlodipine_5mg"]
      },
      {
        p: 1,
        label: "Post-onset 30-90d (P1)",
        dateRange: "2025-02-09 – 2025-04-09",
        vitals: { sbp: 152, dbp: 96, hr: 84, bmi: 26.2, o2sat: 97, temp: 36.7, wt: 82, ht: 177 },
        labs: { fpg: 5.9, hba1c: null, wbc: 8.4, hemoglobin: 14.6, ldl: 138, hdl: 40, trig: 178, creatinine: 1.05, sodium: 139, potassium: 4.4, proBNP: 96 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 1, atrial_fibrillation: 0 },
        medications: ["ARB_losartan_100mg", "CCB_amlodipine_5mg"]
      },
      {
        p: 2,
        label: "60-120d post (P2)",
        dateRange: "2025-04-10 – 2025-06-08",
        vitals: { sbp: 142, dbp: 90, hr: 80, bmi: 25.9, o2sat: 98, temp: 36.7, wt: 81, ht: 177 },
        labs: { fpg: 5.7, hba1c: null, wbc: 8.0, hemoglobin: 14.8, ldl: 128, hdl: 42, trig: 162, creatinine: 1.03, sodium: 140, potassium: 4.3, proBNP: 78 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 1, atrial_fibrillation: 0 },
        medications: ["ARB_losartan_100mg", "CCB_amlodipine_10mg", "beta_blocker_bisoprolol_5mg"]
      }
    ]
  },
  {
    id: "HT-003",
    hn: "HN-HT-0412",
    name: "Siriporn Wattana",
    thaiName: "สิริพร วัฒนา",
    age: 58,
    sex: "FEMALE",
    identifyBy: "inferred_medication",
    htOnset: "2021-07-14",
    source: "Srinagarind Hospital OPD",
    linkedVqId: null,
    periods: [
      {
        p: -1,
        label: "Pre-onset (P-1)",
        dateRange: "2021-04-15 – 2021-06-13",
        vitals: { sbp: 151, dbp: 97, hr: 84, bmi: 28.8, o2sat: 97, temp: 36.7, wt: 72, ht: 158 },
        labs: { fpg: 6.2, hba1c: null, wbc: 7.5, hemoglobin: 12.8, ldl: 162, hdl: 40, trig: 212, creatinine: 0.96, sodium: 139, potassium: 4.0, proBNP: null },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 0, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: []
      },
      {
        p: 0,
        label: "Onset Period (P0)",
        dateRange: "2021-06-14 – 2021-08-12",
        vitals: { sbp: 166, dbp: 104, hr: 88, bmi: 29.2, o2sat: 97, temp: 36.8, wt: 73, ht: 158 },
        labs: { fpg: 6.5, hba1c: null, wbc: 8.0, hemoglobin: 12.6, ldl: 168, hdl: 38, trig: 228, creatinine: 1.01, sodium: 137, potassium: 4.2, proBNP: 128 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["diuretics_hydrochlorothiazide_12.5mg"]
      },
      {
        p: 1,
        label: "Post-onset 30-90d (P1)",
        dateRange: "2021-08-13 – 2021-10-11",
        vitals: { sbp: 154, dbp: 98, hr: 84, bmi: 29.0, o2sat: 97, temp: 36.7, wt: 72, ht: 158 },
        labs: { fpg: 6.3, hba1c: null, wbc: 7.7, hemoglobin: 12.7, ldl: 158, hdl: 39, trig: 218, creatinine: 0.98, sodium: 138, potassium: 3.9, proBNP: 108 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["diuretics_hydrochlorothiazide_25mg", "ACEI_perindopril_4mg"]
      },
      {
        p: 2,
        label: "60-120d post (P2)",
        dateRange: "2021-10-12 – 2021-12-10",
        vitals: { sbp: 144, dbp: 92, hr: 82, bmi: 28.6, o2sat: 98, temp: 36.6, wt: 71, ht: 158 },
        labs: { fpg: 6.1, hba1c: null, wbc: 7.4, hemoglobin: 12.9, ldl: 148, hdl: 41, trig: 198, creatinine: 0.96, sodium: 139, potassium: 4.0, proBNP: 88 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["diuretics_hydrochlorothiazide_12.5mg", "ACEI_perindopril_4mg"]
      },
      {
        p: 3,
        label: "120-180d post (P3)",
        dateRange: "2021-12-11 – 2022-02-08",
        vitals: { sbp: 136, dbp: 86, hr: 78, bmi: 28.2, o2sat: 98, temp: 36.6, wt: 70, ht: 158 },
        labs: { fpg: 5.9, hba1c: null, wbc: 7.2, hemoglobin: 13.0, ldl: 138, hdl: 43, trig: 182, creatinine: 0.94, sodium: 140, potassium: 4.1, proBNP: 72 },
        comorbidities: { dm: 0, cad: 0, hf: 0, stroke: 0, ckd: 1, arrhythmias: 0, atrial_fibrillation: 0 },
        medications: ["diuretics_hydrochlorothiazide_12.5mg", "ACEI_perindopril_8mg"]
      }
    ]
  }
];

// ── Patient Linker ────────────────────────────────────────────
// Links verified VQ profiles -> EMR datasets
const EMR_PATIENT_LINK = {
  "Q-2143": { dm: null,    ht: "HT-001", icu: null },
  "Q-2139": { dm: null,    ht: "HT-002", icu: "2a7b9f1857ab1296725ab6fb1c0b5895" },
  "Q-2134": { dm: null,    ht: null,     icu: null },
  "Q-2128": { dm: "DM-001",ht: null,     icu: null },
  "Q-2121": { dm: null,    ht: null,     icu: null },
  "Q-2118": { dm: "DM-002",ht: null,     icu: null }
};

const emrGetLinkedData = (vqId) => {
  const link = EMR_PATIENT_LINK[vqId] || {};
  return {
    dm:  link.dm  ? EMR_DIABETES_PATIENTS.find((p) => p.id === link.dm) || null  : null,
    ht:  link.ht  ? EMR_HT_PATIENTS.find((p) => p.id === link.ht) || null         : null,
    icu: link.icu ? EMR_ICU_PATIENTS.find((p) => p.id === link.icu) || null       : null
  };
};

// ── Reference Ranges ──────────────────────────────────────────
const EMR_REF_RANGES = {
  hba1c:      { normal: [0, 5.6],   warn: [5.7, 6.4], high: [6.5, Infinity], unit: "%" },
  fpg:        { normal: [0, 5.5],   warn: [5.6, 6.9], high: [7.0, Infinity], unit: "mmol/L" },
  cpeptide:   { normal: [0.5, 2.0], warn: [2.1, 3.0], high: [3.1, Infinity], unit: "nmol/L" },
  sbp:        { normal: [0, 129],   warn: [130, 139],  high: [140, Infinity], unit: "mmHg" },
  dbp:        { normal: [0, 79],    warn: [80, 89],    high: [90, Infinity],  unit: "mmHg" },
  ldl:        { normal: [0, 100],   warn: [101, 129],  high: [130, Infinity], unit: "mg/dL" },
  bmi:        { normal: [18.5, 24.9], warn: [25, 29.9], high: [30, Infinity], unit: "kg/m²" },
  peakPressure: { normal: [0, 30],  warn: [31, 40],   high: [41, Infinity],   unit: "cmH₂O" }
};

const emrRangeClass = (key, val) => {
  const r = EMR_REF_RANGES[key];
  if (!r || val === null || val === undefined) return "";
  if (val >= r.high[0]) return "emr-high";
  if (val >= r.warn[0] && val <= r.warn[1]) return "emr-warn";
  if (val >= r.normal[0] && val <= r.normal[1]) return "emr-normal";
  return "";
};
