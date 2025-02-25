const CACHE_NAME = 'budget-planner-pwa-cache-v1';
const FILES_TO_CACHE = [
 '/WT_BudgetPlanner/',
 '/WT_BudgetPlanner/index.html',
 '/WT_BudgetPlanner/style.css',
 '/WT_BudgetPlanner/app.js',
 '/WT_BudgetPlanner/manifest.json',
 '/WT_BudgetPlanner/icons/icon-128.png',
 '/WT_BudgetPlanner/icons/icon-512.png'
];
self.addEventListener('install', (event) => {
 event.waitUntil(
 caches.open(CACHE_NAME)
 .then((cache) => cache.addAll(FILES_TO_CACHE))
 );
});
self.addEventListener('fetch', (event) => {
 event.respondWith(
 caches.match(event.request)
 .then((response) => response || fetch(event.request))
 );
});
