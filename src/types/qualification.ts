export type Qualification = {
  university?: string
  qualification?: string
  years: string
  company?: string
  role?: string
}

export type QualificationData = {
  title: string
  data: Qualification[]
}
