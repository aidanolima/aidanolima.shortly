// Define o nome e a versão do cache. 
// Sempre que fizer grandes atualizações no site, mude para 'v2', 'v3', etc.
const CACHE_NAME = 'portfolio-aidano-v1';

// Lista de arquivos essenciais que serão salvos no dispositivo do usuário
const urlsToCache = [
  './',
  './index.html',
  './Css/style.css',
  './script.js',
  './manifest.json',
  './Assets/Icons/Profil_Aidano.png',
  './Assets/mouse.svg',
  './Assets/aboutme.png',
  './Assets/contactme.png'
  // Se quiser, adicione o caminho de outras imagens ou do seu CV aqui
];

// Evento de INSTALAÇÃO: É disparado na primeira vez que o site abre
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Fazendo cache dos arquivos essenciais');
        return cache.addAll(urlsToCache);
      })
  );
  // Força o Service Worker a assumir o controle imediatamente
  self.skipWaiting();
});

// Evento de ATIVAÇÃO: Ideal para limpar caches antigos
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Se o cache antigo não estiver na whitelist, ele é deletado
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

// Evento FETCH: Intercepta as requisições de rede
self.addEventListener('fetch', event => {
  // Ignora requisições que não sejam GET (como POSTs de formulários)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna o arquivo do cache se ele existir
        if (response) {
          return response;
        }

        // Se não estiver no cache, faz a requisição pela rede
        return fetch(event.request).then(networkResponse => {
          // Opcional: Você pode clonar a resposta da rede e adicionar ao cache dinamicamente aqui,
          // mas para um portfólio, apenas o cache estático (urlsToCache) já é excelente.
          return networkResponse;
        });
      })
      .catch(() => {
        // Se a rede falhar e o arquivo não estiver no cache (ex: offline e tentando ver uma imagem nova)
        // Você poderia retornar uma página "offline.html" genérica aqui, se tivesse.
        console.log('[Service Worker] Falha ao buscar recurso na rede ou cache.');
      })
  );
});