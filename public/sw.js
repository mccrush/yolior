const staticCacheName = 'svy-v4'

const assetUrls = [
  '/index.html',
  '/js/app.js',
  '/js/chunk-vendors.js',
  '/sw.js',
  '/run-sw.js',
  '/manifest.json',
  '/img/food.png',
  '/icons/favicon-32x32.png',
  '/icons/android-chrome-192x192.png',
  '/logo.svg',
  '/img/index/steps/1.svg',
  '/img/index/steps/2.svg',
  '/img/index/steps/3.svg',
  '/img/index/steps/4.svg'
]

self.addEventListener('install', async event => {
  console.log('[SW]: install')
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})

self.addEventListener('activate', async event => {
  console.log('[SW]: activate')
  const cachesNames = await caches.keys()
  await Promise.all(
    cachesNames
      .filter(name => name !== staticCacheName)
      .map(name => caches.delete(name))
  )
})

self.addEventListener('fetch', event => {
  console.log('[SW]: fetch')
  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}