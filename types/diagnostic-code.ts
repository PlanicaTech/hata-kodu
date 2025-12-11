export interface RawDiagnosticCode {
	NO: number
	'DFC  name': string
	Description_English: string
	Description_Turkish: string
	' Descrition_Chinese': string
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
	descriptionEnglish: string
	descriptionTurkish: string
	descriptionChinese: string
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

