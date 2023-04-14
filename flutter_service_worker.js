'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7ec0a3890a35f91d2b0aaea930e99b3a",
"assets/assets/fotograflar/arkaplan.jpg": "1ae2478e34e36f5b9f8d6b880db97bc5",
"assets/assets/fotograflar/ascisapkasi.png": "9b069b930662c04b79c097fc09b5d4b6",
"assets/assets/fotograflar/baklava.jpg": "189cf1eda79e635a59ba47b4803b3724",
"assets/assets/fotograflar/balikvedenizurunleri.jpg": "98875d570fafcbfe8d76a3e74c28dd5c",
"assets/assets/fotograflar/besamelsoslutavuklumakarna.jpg": "0eeaca5698e118cfd6c926496ae20bf5",
"assets/assets/fotograflar/borekvepogacalar.jpg": "2304d3739526cb8e1c95c8480d54d318",
"assets/assets/fotograflar/brownie.jpg": "b16bd43e0ac0ca0e43867147fcf52ab0",
"assets/assets/fotograflar/cheesecake.jpg": "d960a7da967a21f69538b3686d93d88e",
"assets/assets/fotograflar/cileklismoothie.jpg": "ca7596135dd010860b4062749aa54d93",
"assets/assets/fotograflar/corbalar.jpg": "4f0ec5389b5f23ef939dba2aec2af69b",
"assets/assets/fotograflar/domatescorbasi.jpg": "4657c8b4c1c347c8be69fea1bf7810c1",
"assets/assets/fotograflar/etsote.jpg": "c75e7081600ab5eb5e16d4b6c8d505cc",
"assets/assets/fotograflar/etyemekleri.jpg": "5be151e431436fc6b3d9f6cf035345a9",
"assets/assets/fotograflar/ezogelincorbasi.jpg": "c6a1fa824f26c068d7f887f6e25e3772",
"assets/assets/fotograflar/firindalevrek.jpg": "aa8b4e02447755e6eb9c224520db2c54",
"assets/assets/fotograflar/hamsilipilav.jpg": "3f404018a8b0abacc8f9139ffa53dba5",
"assets/assets/fotograflar/hamsitava.jpg": "e4f8211e89abcf67cd2602e3f920b478",
"assets/assets/fotograflar/icecekler.jpg": "0212aab85c8116007146769a9eb9711d",
"assets/assets/fotograflar/icetea.jpg": "65a7754baba35fc86b1214dfeab8264e",
"assets/assets/fotograflar/ispanaklikek.jpg": "9fe7894a5d94df441b60b9dfd189a368",
"assets/assets/fotograflar/karniyarik.jpg": "6f699c2bee1c3ecf791c0da5e1e44c36",
"assets/assets/fotograflar/kavurma.jpg": "ac43cfd03d72325dc323d820a2409d49",
"assets/assets/fotograflar/lazanya.jpg": "30b17abde812fd4bcdf6c0b3b3562f4d",
"assets/assets/fotograflar/limonata.jpg": "c2058ecbea3f5c81c7fb99c8374aa652",
"assets/assets/fotograflar/makarnalar.jpg": "ea00f913a1a8f2647146ba4954914290",
"assets/assets/fotograflar/mercimekcorbasi.jpg": "53f86aa09bfadbcb854a63d41c283b7e",
"assets/assets/fotograflar/ormankebabi.jpg": "2669f9904dd6c80e061a2c7509c553fe",
"assets/assets/fotograflar/pankek.jpg": "374dde9bdffc64b1f6eb661312f24870",
"assets/assets/fotograflar/peynirliborek.jpg": "39f35d91ba633e00cb91e476cc242d25",
"assets/assets/fotograflar/peynirlimakarna.jpg": "3cabac5b8dc1bfa9b717584f6c7ac30e",
"assets/assets/fotograflar/pisi.jpg": "a441a6899a5a9c9f995c25dfd49e99c4",
"assets/assets/fotograflar/salcalimakarna.jpg": "6db6180f90018d8f26bc77802c6f8c4b",
"assets/assets/fotograflar/sardalya.jpg": "5f24d83bb97255c3c02dcaf7533d7cdd",
"assets/assets/fotograflar/sigaraboregi.jpg": "2769c01e84cf0e8ccc9d90c85b4c579a",
"assets/assets/fotograflar/tantuni.jpg": "0748608440b7d0d1830099a45079c4b2",
"assets/assets/fotograflar/tatlilar.jpg": "e24521ef4e5140558ef14af12f3eb21b",
"assets/assets/fotograflar/tavuksis.jpg": "4893dfb776bb20afb237ffbdffc98cce",
"assets/assets/fotograflar/tavuksote.jpg": "58e7cb20200e414003a882459462dcfa",
"assets/assets/fotograflar/tavukyemekleri.jpg": "8afb06c3c46b42ea0389451bda9ec43c",
"assets/assets/fotograflar/turkkahvesi.jpg": "d4e88ad56bf56d62912986efe4068f4c",
"assets/assets/fotograflar/yaylacorbasi.jpg": "9cdfc5bb61456f655a53c767a0e5cf1f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fff055c18ecf9d33ccdbb4147de8b398",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f32130a281ae5fb58c8d2f12299c7587",
"/": "f32130a281ae5fb58c8d2f12299c7587",
"main.dart.js": "caa164540ea1e8c38bd3a49df6d6018d",
"manifest.json": "04ea3c7840da8aa7f698dccf89f1523b",
"version.json": "4b745ad66f1de22ee3a3d092ab388db1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
