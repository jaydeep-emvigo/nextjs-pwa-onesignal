// 1
if (!self.define) {
  let e,
    s = {}
  const a = (a, c) => (
    (a = new URL(a + '.js', c).href),
    s[a] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (c, n) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[i]) return
    let t = {}
    const r = e => a(e, i),
      o = {module: {uri: i}, exports: t, require: r}
    s[i] = Promise.all(c.map(e => o[e] || r(e))).then(e => (n(...e), t))
  }
}
define(['./workbox-588899ac'], function (e) {
  'use strict'
  importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/996-d63ad7fae077247e.js',
          revision: 'd63ad7fae077247e',
        },
        {
          url: '/_next/static/chunks/framework-2c79e2a64abdb08b.js',
          revision: '2c79e2a64abdb08b',
        },
        {
          url: '/_next/static/chunks/main-791842b94c894a38.js',
          revision: '791842b94c894a38',
        },
        {
          url: '/_next/static/chunks/pages/_app-e388805f650d23a0.js',
          revision: 'e388805f650d23a0',
        },
        {
          url: '/_next/static/chunks/pages/_error-54de1933a164a1ff.js',
          revision: '54de1933a164a1ff',
        },
        {
          url: '/_next/static/chunks/pages/index-80c66633a09215a1.js',
          revision: '80c66633a09215a1',
        },
        {
          url: '/_next/static/chunks/pages/page2-1836fa5bb8586fc5.js',
          revision: '1836fa5bb8586fc5',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-8fa1640cc84ba8fe.js',
          revision: '8fa1640cc84ba8fe',
        },
        {
          url: '/_next/static/css/39a8522b748b37cc.css',
          revision: '39a8522b748b37cc',
        },
        {
          url: '/_next/static/css/f8a641d193ee14cb.css',
          revision: 'f8a641d193ee14cb',
        },
        {
          url: '/_next/static/media/2aaf0723e720e8b9-s.p.woff2',
          revision: 'e1b9f0ecaaebb12c93064cd3c406f82b',
        },
        {
          url: '/_next/static/media/9c4f34569c9b36ca-s.woff2',
          revision: '2c1fc211bf5cca7ae7e7396dc9e4c824',
        },
        {
          url: '/_next/static/media/ae9ae6716d4f8bf8-s.woff2',
          revision: 'b0c49a041e15bdbca22833f1ed5cfb19',
        },
        {
          url: '/_next/static/media/b1db3e28af9ef94a-s.woff2',
          revision: '70afeea69c7f52ffccde29e1ea470838',
        },
        {
          url: '/_next/static/media/b967158bc7d7a9fb-s.woff2',
          revision: '08ccb2a3cfc83cf18d4a3ec64dd7c11b',
        },
        {
          url: '/_next/static/media/c0f5ec5bbf5913b7-s.woff2',
          revision: '8ca5bc1cd1579933b73e51ec9354eec9',
        },
        {
          url: '/_next/static/media/d1d9458b69004127-s.woff2',
          revision: '9885d5da3e4dfffab0b4b1f4a259ca27',
        },
        {
          url: '/_next/static/qxn2WrP1afvIh4UM9oBw0/_buildManifest.js',
          revision: 'e19fb52fd711daca0ad8fae7bffcaa53',
        },
        {
          url: '/_next/static/qxn2WrP1afvIh4UM9oBw0/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc'},
        {
          url: '/images/icon-128x128.png',
          revision: '79a0e8ee7cdd61ec0f8f2ce88bf1094e',
        },
        {
          url: '/images/icon-144x144.png',
          revision: '82439278bbc9aeed990990c1cd676231',
        },
        {
          url: '/images/icon-152x152.png',
          revision: 'e3b2a5772e51ec7932530dc21d88b7b4',
        },
        {
          url: '/images/icon-192x192.png',
          revision: 'fc5b309cc13ebb361f1e59cd9b1080b0',
        },
        {
          url: '/images/icon-384x384.png',
          revision: 'b99adea92d63f1129bb483f6ce83d8d0',
        },
        {
          url: '/images/icon-512x512.png',
          revision: 'f2a77fbff76613efcbdfbfde5926d94e',
        },
        {
          url: '/images/icon-72x72.png',
          revision: 'd96ceebbad3381cc9dad3d94c99271c2',
        },
        {
          url: '/images/icon-96x96.png',
          revision: '0cbee31bb72223e0939884c28badc8ba',
        },
        {url: '/manifest.json', revision: 'cdcc615c2d4f5ac10d796e0a26c66f72'},
        {url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e'},
        {url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976'},
      ],
      {ignoreURLParametersMatching: []}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: c,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({url: e}) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({url: e}) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({url: e}) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 3600}),
        ],
      }),
      'GET'
    )
})
