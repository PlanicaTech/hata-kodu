export interface RawDiagnosticCode {
	NO: number
	'DFC  name': string
	Description_English: string | null
	Description_Turkish: string | null
	' Descrition_Chinese': string | null
	'P-Code': string
	SPN: number
	FMI: number
	DTCB: number
	'Error\nDisable': string
	'Error entry': string
	'Fault Class': number
	MIL: string
	SVS: string
	'Environment Class ': string
	'FID  and  Def-Deb （FID的功能简述见FIDLIST）\n由于FID数量多，分两列放置': string | null
	'Unnamed: 15': string | null
}

export interface DiagnosticCode {
	no: number
	dfcName: string
	descriptionEnglish: string | null
	descriptionTurkish: string | null
	descriptionChinese: string | null
	pCode: string
	pCodeClean: string
	spn: number
	fmi: number
	dtcb: number
	errorDisable: string
	errorEntry: string
	faultClass: number
	mil: string
	svs: string
	environmentClass: string
	fid: string | null
	fidUnnamed: string | null
}

export type SearchField = 'all' | 'pCode' | 'spn' | 'fmi' | 'dtcb'

