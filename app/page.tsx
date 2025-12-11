'use client'

import { useState, useMemo, useEffect } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { ResultsTable } from '@/components/ResultsTable'
import type { DiagnosticCode, SearchField } from '@/types/diagnostic-code'
import { searchCodes } from '@/lib/search'
import rawData from '@/data/ariza_kod_listesi.json'
import { mapRawDiagnosticCode } from '@/lib/mapper'
import { getSearchState, saveSearchState } from '@/lib/search-state'

const allCodes: Array<DiagnosticCode> = rawData.map(mapRawDiagnosticCode)

export default function HomePage() {
	const [query, setQuery] = useState('')
	const [field, setField] = useState<SearchField>('all')
	const [mounted, setMounted] = useState(false)

	// Restore search state on mount
	useEffect(() => {
		const { query: savedQuery, field: savedField } = getSearchState()
		if (savedQuery) {
			setQuery(savedQuery)
			setField(savedField)
		}
		setMounted(true)
	}, [])

	const results = useMemo(() => {
		if (!query.trim()) {
			return []
		}
		return searchCodes(allCodes, query, field)
	}, [query, field])

	// Save search state whenever it changes
	useEffect(() => {
		if (mounted) {
			saveSearchState(query, field)
		}
	}, [query, field, mounted])

	return (
		<div>
			<SearchBar
				query={query}
				field={field}
				onQueryChange={setQuery}
				onFieldChange={setField}
			/>
			{query.trim() ? (
				<>
					<div className="mb-4 text-sm text-gray-600">
						{results.length} sonuç bulundu
					</div>
					<ResultsTable codes={results} />
				</>
			) : (
				<div className="text-center py-12 text-gray-500">
					<p>Arama yapmak için yukarıdaki alana yazın.</p>
				</div>
			)}
		</div>
	)
}

