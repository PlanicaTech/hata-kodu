'use client'

import type { SearchField } from '@/types/diagnostic-code'

interface SearchBarProps {
	query: string
	field: SearchField
	onQueryChange: (query: string) => void
	onFieldChange: (field: SearchField) => void
}

export function SearchBar({
	query,
	field,
	onQueryChange,
	onFieldChange,
}: SearchBarProps) {
	return (
		<div className="space-y-4 mb-6">
			<div className="relative">
				<input
					type="text"
					value={query}
					onChange={(e) => onQueryChange(e.target.value)}
					placeholder="Ara..."
					className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<svg
						className="h-5 w-5 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
			</div>
			<div className="flex flex-wrap gap-2">
				{(['all', 'pCode', 'spn', 'fmi', 'dtcb'] as Array<SearchField>).map(
					(fieldOption) => (
						<button
							key={fieldOption}
							onClick={() => onFieldChange(fieldOption)}
							className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
								field === fieldOption
									? 'bg-blue-600 text-white'
									: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
							}`}
						>
							{fieldOption === 'all'
								? 'Tümü'
								: fieldOption === 'pCode'
									? 'P-Code'
									: fieldOption.toUpperCase()}
						</button>
					)
				)}
			</div>
		</div>
	)
}

