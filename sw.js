// Aumentamos a versão para forçar o navegador a atualizar o Service Worker
const CACHE_NAME = 'portfolio-aidano-v2';

// Apenas o essencial do essencial (arquivos que não dão 404)
const urlsToCache = [
  './',
  './index.html',
  './Css/style.css',
  './script.js',
  './manifest.json'
];

// Instalação: Salva apenas os arquivos críticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Fazendo pré-cache dos arquivos principais');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('[Service Worker] Erro no pré-cache:', err))
  );
  self.skipWaiting();
});

// Ativação: Limpa versões antigas do cache
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Tenta pegar do cache, se não tiver, pega da rede e SALVA no cache dinamicamente
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se achou no cache, retorna na hora
        if (response) {
          return response;
        }

        // Se não achou, vai na rede (internet)
        return fetch(event.request).then(networkResponse => {
          // Checa se recebemos uma resposta válida (status 200) e se é uma requisição do nosso próprio domínio (basic)
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Clona a resposta (pois ela só pode ser consumida uma vez) e adiciona ao cache dinâmico
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        }).catch(error => {
          console.log('[Service Worker] Falha de conexão. O usuário pode estar offline.', error);
          // Opcional: aqui você poderia retornar uma página HTML amigável de "Você está offline"
        });
      })
  );
});