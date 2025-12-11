import type { DiagnosticCode, SearchField } from '@/types/diagnostic-code'

export function searchCodes(
	codes: Array<DiagnosticCode>,
	query: string,
	field: SearchField
): Array<DiagnosticCode> {
	const trimmedQuery = query.trim().toLowerCase()

	if (!trimmedQuery) {
		return []
	}

	return codes.filter((code) => {
		switch (field) {
			case 'pCode':
				return code.pCodeClean.toLowerCase().includes(trimmedQuery)
			case 'spn':
				return code.spn.toString().includes(trimmedQuery)
			case 'fmi':
				return code.fmi.toString().includes(trimmedQuery)
			case 'dtcb':
				return code.dtcb.toString().includes(trimmedQuery)
			case 'all':
			default:
				return (
					code.pCodeClean.toLowerCase().includes(trimmedQuery) ||
					code.spn.toString().includes(trimmedQuery) ||
					code.fmi.toString().includes(trimmedQuery) ||
					code.dtcb.toString().includes(trimmedQuery)
				)
		}
	})
}

