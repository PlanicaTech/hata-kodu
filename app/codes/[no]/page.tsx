import Link from 'next/link'
import { notFound } from 'next/navigation'
import rawData from '@/data/ariza_kod_listesi.json'
import { mapRawDiagnosticCode } from '@/lib/mapper'
import type { DiagnosticCode } from '@/types/diagnostic-code'

interface CodeDetailPageProps {
	params: Promise<{ no: string }>
}

function CodeDetailSection({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<div className="bg-white rounded-lg shadow p-6 mb-6">
			<h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
			{children}
		</div>
	)
}

function DetailRow({ label, value }: { label: string; value: string | number | null }) {
	if (value === null || value === '') {
		return null
	}
	return (
		<div className="mb-3">
			<span className="text-sm font-medium text-gray-600">{label}:</span>
			<span className="ml-2 text-sm text-gray-900">{String(value)}</span>
		</div>
	)
}

export default async function CodeDetailPage({ params }: CodeDetailPageProps) {
	const { no } = await params
	const codeNo = parseInt(no, 10)

	if (isNaN(codeNo)) {
		notFound()
	}

	const rawCode = rawData.find((item) => item.NO === codeNo)

	if (!rawCode) {
		notFound()
	}

	const code: DiagnosticCode = mapRawDiagnosticCode(rawCode)

	return (
		<div>
			<Link
				href="/"
				className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
			>
				<svg
					className="w-5 h-5 mr-2"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Aramaya Dön
			</Link>

			<CodeDetailSection title="Kod Bilgileri">
				<div className="grid grid-cols-2 gap-4 mb-4">
					<DetailRow label="P-Code" value={code.pCode} />
					<DetailRow label="SPN" value={code.spn} />
					<DetailRow label="FMI" value={code.fmi} />
					<DetailRow label="DTCB" value={code.dtcb} />
				</div>
				<DetailRow label="DFC Name" value={code.dfcName} />
			</CodeDetailSection>

			<CodeDetailSection title="Açıklamalar">
				<DetailRow label="İngilizce" value={code.descriptionEnglish} />
				<DetailRow label="Türkçe" value={code.descriptionTurkish} />
				<DetailRow label="Çince" value={code.descriptionChinese} />
			</CodeDetailSection>

			<CodeDetailSection title="Hata Bilgileri">
				<div className="grid grid-cols-2 gap-4">
					<DetailRow label="Error Disable" value={code.errorDisable} />
					<DetailRow label="Error Entry" value={code.errorEntry} />
					<DetailRow label="Fault Class" value={code.faultClass} />
					<DetailRow label="MIL" value={code.mil} />
					<DetailRow label="SVS" value={code.svs} />
					<DetailRow label="Environment Class" value={code.environmentClass} />
				</div>
			</CodeDetailSection>

			{(code.fid || code.fidUnnamed) ? (
				<CodeDetailSection title="FID Bilgileri">
					{code.fid ? (
						<div className="mb-4">
							<span className="text-sm font-medium text-gray-600">FID:</span>
							<pre className="mt-2 text-sm text-gray-900 whitespace-pre-wrap bg-gray-50 p-3 rounded">
								{code.fid}
							</pre>
						</div>
					) : null}
					{code.fidUnnamed ? (
						<div>
							<span className="text-sm font-medium text-gray-600">FID (Ek):</span>
							<pre className="mt-2 text-sm text-gray-900 whitespace-pre-wrap bg-gray-50 p-3 rounded">
								{code.fidUnnamed}
							</pre>
						</div>
					) : null}
				</CodeDetailSection>
			) : null}
		</div>
	)
}

