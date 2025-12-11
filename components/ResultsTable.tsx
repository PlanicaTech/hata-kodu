import Link from 'next/link'
import type { DiagnosticCode } from '@/types/diagnostic-code'

interface ResultsTableProps {
	codes: Array<DiagnosticCode>
}

export function ResultsTable({ codes }: ResultsTableProps) {
	if (codes.length === 0) {
		return (
			<div className="text-center py-12 text-gray-500">
				<p>Sonuç bulunamadı.</p>
			</div>
		)
	}

	return (
		<div className="bg-white rounded-lg shadow overflow-hidden">
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								P-Code
							</th>
							<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								SPN
							</th>
							<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								FMI
							</th>
							<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								DTCB
							</th>
							<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								DFC Name
							</th>
							<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Açıklama
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{codes.map((code) => (
							<tr key={code.no} className="hover:bg-gray-50 transition-colors">
								<Link href={`/codes/${code.no}`} className="contents">
									<td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
										{code.pCode}
									</td>
									<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
										{code.spn}
									</td>
									<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
										{code.fmi}
									</td>
									<td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
										{code.dtcb}
									</td>
									<td className="px-4 py-3 text-sm text-gray-700">
										{code.dfcName}
									</td>
									<td className="px-4 py-3 text-sm text-gray-700 max-w-xs truncate">
										{code.descriptionTurkish}
									</td>
								</Link>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

