// pindrop service worker - app shell only
const CACHE = 'pindrop-shell-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
];

// 설치: 앱 셸 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 활성화: 옛 캐시 정리
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// fetch: 셸은 캐시 우선, 그 외(시트 API 등)는 네트워크 우선
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // 같은 origin의 셸 자원만 캐시 사용
  const isShell = ASSETS.some((a) => {
    const aUrl = new URL(a, self.registration.scope).href;
    return aUrl === e.request.url;
  });

  if (isShell) {
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
    return;
  }

  // 그 외 (Apps Script, 외부 API 등)는 그냥 네트워크
  // 오프라인 시엔 자연스럽게 실패하게 둠 (사용자에게 인터넷 연결 안내됨)
});
