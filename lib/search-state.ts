import type { SearchField } from '@/types/diagnostic-code'

const SEARCH_QUERY_KEY = 'searchQuery'
const SEARCH_FIELD_KEY = 'searchField'

export function saveSearchState(query: string, field: SearchField) {
	if (typeof window !== 'undefined') {
		sessionStorage.setItem(SEARCH_QUERY_KEY, query)
		sessionStorage.setItem(SEARCH_FIELD_KEY, field)
	}
}

export function getSearchState(): { query: string; field: SearchField } {
	if (typeof window !== 'undefined') {
		const query = sessionStorage.getItem(SEARCH_QUERY_KEY) ?? ''
		const field = (sessionStorage.getItem(SEARCH_FIELD_KEY) as SearchField) ?? 'all'
		return { query, field }
	}
	return { query: '', field: 'all' }
}

export function clearSearchState() {
	if (typeof window !== 'undefined') {
		sessionStorage.removeItem(SEARCH_QUERY_KEY)
		sessionStorage.removeItem(SEARCH_FIELD_KEY)
	}
}

