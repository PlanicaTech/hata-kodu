const CACHE_NAME = 'ariza-kod-v3'
const urlsToCache = [
	'/',
	'/manifest.webmanifest',
]

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache).catch((err) => {
				console.log('Cache addAll failed:', err)
			})
		})
	)
	self.skipWaiting()
})

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((cacheName) => cacheName !== CACHE_NAME)
					.map((cacheName) => caches.delete(cacheName))
			)
		})
	)
	self.clients.claim()
})

self.addEventListener('fetch', (event) => {
	const url = new URL(event.request.url)

	// Cache JSON data file
	if (url.pathname.includes('ariza_kod_listesi.json')) {
		event.respondWith(
			caches.match(event.request).then((response) => {
				return (
					response ||
					fetch(event.request).then((fetchResponse) => {
						const responseClone = fetchResponse.clone()
						caches.open(CACHE_NAME).then((cache) => {
							cache.put(event.request, responseClone)
						})
						return fetchResponse
					})
				)
			})
		)
		return
	}

	// For other requests, try cache first, then network
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request)
		})
	)
})

