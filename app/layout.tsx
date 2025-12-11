import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import './globals.css'
import { ServiceWorkerRegistration } from '@/components/ServiceWorkerRegistration'

export const metadata: Metadata = {
	title: 'Egeli Forklift - Arıza Kod Listesi',
	description: 'Diagnostic error codes search application',
	manifest: '/manifest.webmanifest',
	icons: {
		icon: '/icons/favicon.png',
		apple: '/icons/favicon.png',
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: 'Egeli Forklift - Arıza Kod Listesi',
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
						<Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
							<img
								src="/icons/icon-192.png"
								alt="Hata Kodu Logo"
								className="h-10 w-10 object-contain"
							/>
							<h1 className="text-2xl font-bold text-gray-900">
								Egeli Forklift - Arıza Kod Listesi
							</h1>
						</Link>
					</div>
				</header>
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					{children}
				</main>
			</body>
		</html>
	)
}

