import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration'

export const metadata: Metadata = {
	title: 'Arıza Kod Listesi',
	description: 'Diagnostic error codes search application',
	manifest: '/manifest.webmanifest',
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: 'Arıza Kod Listesi',
	},
}

export const viewport: Viewport = {
	themeColor: '#ffffff',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="tr">
			<body className="bg-gray-50 min-h-screen">
				<ServiceWorkerRegistration />
				<header className="bg-white shadow-sm border-b border-gray-200">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
						<h1 className="text-2xl font-bold text-gray-900">
							Arıza Kod Listesi
						</h1>
					</div>
				</header>
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					{children}
				</main>
			</body>
		</html>
	)
}

