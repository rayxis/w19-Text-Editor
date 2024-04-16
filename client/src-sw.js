const {offlineFallback, warmStrategyCache} = require('workbox-recipes');
const {CacheFirst}                         = require('workbox-strategies');
const {registerRoute}                      = require('workbox-routing');
const {CacheableResponsePlugin}            = require('workbox-cacheable-response');
const {ExpirationPlugin}                   = require('workbox-expiration');
const {precacheAndRoute}                   = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
	                                 cacheName: 'page-cache',
	                                 plugins:   [
		                                 new CacheableResponsePlugin({
			                                                             statuses: [0, 200]
		                                                             }),
		                                 new ExpirationPlugin({
			                                                      maxAgeSeconds: 30 * 24 * 60 * 60
		                                                      })
	                                 ]
                                 });

warmStrategyCache({
	                  urls:     ['/index.html', '/'],
	                  strategy: pageCache
                  });

registerRoute(({request}) => request.mode === 'navigate', pageCache);

// Create a new cache-first strategy
const assetCache = new CacheFirst({
	                                  cacheName: 'jate-cache',
	                                  plugins:   [
		                                  // Plugin to ensure that only cache-able responses are cached.
		                                  new CacheableResponsePlugin({
			                                                              // Successful responses are cached
			                                                              statuses: [0, 200]
		                                                              }),
		                                  // Plugin to remove entries from the cache, to keep it from growing indefinitely.
		                                  new ExpirationPlugin({
			                                                       // One month
			                                                       maxEntries: 30 * 24 * 60 * 60
		                                                       })
	                                  ]
                                  });

// Use registerRoute from Workbox to set up a route that uses the cache first
registerRoute(
	({request}) =>
		// Matches based on the request type
		request.destination === 'document' ||
		request.destination === 'style' ||
		request.destination === 'script' ||
		request.destination === 'image',
	// Once the route is matched based on the request's destination, apply the assetCache
	assetCache
);