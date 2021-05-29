export type Patient = {
  dateOfBirth: string,
  emrId: string,
  firstName: string,
  homePhone: string,
  lastName: string,
  middleName: string,
  mobilePhone: string,
  workPhone: string,
}

export type BoxCoords = {
  t: number,
  b: number,
  l: number,
  r: number,
}

export type Flag = {
  name: string,
  humanName: string,
  confidence: number,
  weight: number,
  page: number,
  box?: BoxCoords,
}

export type Problem = {
  name: string,
  humanName: string,
  icd10Code: string,
  confidence: number,
  weight: number,
  page: number,
  box?: BoxCoords,
}

export type Allergy = {
  name: string,
  humanName: string,
  drugBankCode: string,
  confidence: number,
  weight: number,
  page: number,
  box?: BoxCoords,
}

export type Medication = {
  name: string,
  humanName: string,
  drugBankCode: string,
  confidence: number,
  weight: number,
  page: number,
  box?: BoxCoords,
}

export type Transformation = {
  op: string,
  degrees: number,
}

export type Lens = {
  patient: Patient,
  patientScore: number,
  summary: string,
  summaryLabel: string,
  summaryScore: number,
  urgent: boolean,
  fileId: string,
  flags?: Array<Flag>,
  problems?: Array<Problem>,
  allergies?: Array<Allergy>,
  medications?: Array<Medication>,
  documentTransformations?: Array<Transformation>,
}

export type LensList = {
  lens: Array<Lens>;
}