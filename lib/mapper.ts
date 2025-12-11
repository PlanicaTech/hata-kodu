import type { DiagnosticCode, RawDiagnosticCode } from '@/types/diagnostic-code'

function cleanPCode(pCode: string): string {
	return pCode
		.replace(/\n/g, '')
		.replace(/\s+/g, '')
		.replace(/[()]/g, '')
		.trim()
}

export function mapRawDiagnosticCode(raw: RawDiagnosticCode): DiagnosticCode {
	return {
		no: raw.NO,
		dfcName: raw['DFC  name'],
		descriptionEnglish: raw.Description_English ?? null,
		descriptionTurkish: raw.Description_Turkish ?? null,
		descriptionChinese: raw[' Descrition_Chinese'] ?? null,
		pCode: raw['P-Code'],
		pCodeClean: cleanPCode(raw['P-Code']),
		spn: raw.SPN,
		fmi: raw.FMI,
		dtcb: raw.DTCB,
		errorDisable: raw['Error\nDisable'],
		errorEntry: raw['Error entry'],
		faultClass: raw['Fault Class'],
		mil: raw.MIL,
		svs: raw.SVS,
		environmentClass: raw['Environment Class '].trim(),
		fid: raw['FID  and  Def-Deb （FID的功能简述见FIDLIST）\n由于FID数量多，分两列放置'],
		fidUnnamed: raw['Unnamed: 15'],
	}
}

