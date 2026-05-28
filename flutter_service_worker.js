'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "17168ae833ea51330748a09c56496d85",
"index.html": "0cc1e0b40d0f8771534572d6c77e7bed",
"/": "0cc1e0b40d0f8771534572d6c77e7bed",
"version.json": "8fa1f894a03d7d76e59d9a4fd2726f2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "a51672ea56baf86a367b122a6384d4a8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "43dd21b2f62395bb444d6779bc482bb1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "5164d337da98ae6663c82e3e2a07359e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "e0b5b08e209fa15f48d796e8976bc42b",
".git/hooks/fsmonitor-watchman.sample": "5c90c1740b0cacecb469934e16fe8cb6",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/gh-pages": "2acf63b8e6bd5420140bab7bfec65219",
".git/refs/remotes/origin/gh-pages": "2acf63b8e6bd5420140bab7bfec65219",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "643ce22277c7240f74da5ab79dd8834b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/9a/f84aa2e59e36bc6243699b0fb722dc60b5ff51": "b972dae34f5605125e588563fb574060",
".git/objects/80/2937ada045905d903a743f76b82dfb9dfe32dd": "5cb195d67829d36005e3b149918a11ff",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/e9/83907fbc1ce4f7f875eaed6e7fd4923b433780": "0ed7ac43347f9571957c3c8fd60d441b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "d05cff6db247a2b4e4698e1c29e20559",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "6701b5da99108232078ee7128a21dc9a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "0d221ba0f4a46b5bb7bed7435c78c928",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "3baef4cf4918c37744e678ecbe8b99e1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "434c5ca57fec891cb8c180dec7e4a378",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "2330aa857d1f9d62e630bedcdaafc8e7",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "90509821785147424b2f7e22f2a8335c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "a6ecbf0884c14365eb6649eb430445de",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "d42d471a0f31b2a767111531d3729ad3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "e1a37984aae0e6ca1b05c16567cf4a25",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "af01256f5c53d9600d71eedc5508aef9",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "83993c04f2d3d24d3713787783eefe4f",
".git/objects/bd/79d9797d33f798c008e16e0b87b5a70884c609": "7f6f7dd41a8c0bb4a0f1c348eec3c335",
".git/objects/45/156f0fc37f5ce9a8485877727ef09e9902d6da": "d90ca828080ae88e7536fbe1e15c1d8d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/eb/715e9dc8d5952062e36a8463fee1e632a94138": "3aeeb3692d77a52cbb4a32891bf9e7b6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/d6/24dd4a29a29f3dbaf84992fd39cffb96d932be": "12d0cd34cfbe4b50aa12739caeca32a3",
".git/objects/7c/1c284262e3ddc957e7935db7ff897b2dac8a25": "b423c9f630fce91e012b1badcc96bd1b",
".git/objects/0a/8cc1e26191147e35bb0a8603d01a8bbb85b7b4": "8a817b0dd9b9eec9f28f0ed8b0fa3f83",
".git/objects/15/457091af4b060bf55a04a4f7d62bf8920c4c37": "e612ba41aa1aa5d666c416fcc1c1504f",
".git/objects/a1/ac296c4e06c91c74d96a530928e693288f77bb": "5c98a3ecdd2033742ec7edbff359dfb5",
".git/objects/ec/9b00274a71cd443c2d16092f4e8707e959d6b4": "601a4d719704ed64279297c2951339d7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/f5/668fb908d041320660bc7e14dfd2af3ac5441b": "ad78f4f89f976da7b1db543aa2fb6bcc",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c9/c27fec9af7ca4a4187644c48f575df99bcdedc": "86a4fc42771704cc653738bb35c00232",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "1304f84742e4bd6b7dfd884be9e96731",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/01/71a8baf47127de8f98b834e6332a70293fbd11": "737ea262d3161a25842b4376754857c9",
".git/objects/9c/2840dde7a35ef4ab98e3a9ce209933dc977ea6": "58e9e1fb6e9d92c3f8191769aed79665",
".git/objects/17/c9c258b56fe09ddaf36f80376fc46a08565d7a": "87b2e9d99ae3749d9b9baa06f264c51c",
".git/objects/da/74c6b1529518aeda8cc6c973d17c59a4d45756": "c4c6f46bd7bce67e62a1cc8e75a3a57f",
".git/objects/b2/22e281f97f370c8189aafbb65536f60667326c": "6df36a75815e9b789e5028ce61f82c57",
".git/objects/aa/2150d54d9d6c7263f9d11f8006b8c275f05508": "1e8b1b9e3eb363e0dc2c02702c5edda9",
".git/objects/ab/7cc583a4ef8d61368863712c22cfcf6301befa": "5ed332b0701ec3f45912f34a2ec60a9c",
".git/objects/9f/76372e2e157f823d04aafcea2f354294f98735": "fc055f80ee042884b772f3ab8aa194f4",
".git/objects/9f/bb28bfe20b1a674826cad175ed45cb2075a96c": "483bd79dacb5d45ecf0dc1e269492f9e",
".git/objects/5e/44e61f02502c240ac79d7bc02463f63b3878c8": "a0519a8d501d3294327968e3096800bf",
".git/objects/fd/98e74175a050230a02eb7e449522b25dc6c0ae": "77198c64a9fbac7bba75652e86a8975e",
".git/objects/47/c72c85caaca6a9be5a93fb5889ebc312c90d54": "5c3cf162fb0de651e6220a0079b711dd",
".git/objects/de/9c2dc1ce25a04ea15569c22b9fcdad9de09a98": "b11d8aafcbde3f4fc07163c45f83a84b",
".git/objects/de/5a895c0984175a7018388000193e022d895bb8": "f877fb31464f860f324da0c4bc946ecb",
".git/objects/8c/bbc24a716904e0eb742419c38fe4bf46d8bca6": "10509aa309cfb0cb8b1243662c890115",
".git/objects/0d/113e597bfc0bf07a761d95f3a3fcc7d7162963": "3280d2df3294484db8b572dbec4c8f5f",
".git/objects/bc/d83db43f030a743a4f934fc7f832cf65448b16": "46430b859208fc861162a0f1223d3296",
".git/objects/ae/4f7e77bef88f2caa2ea548bc0f4be4f325143d": "4dc306d43dfbd01daf8560cd64e42772",
".git/objects/6d/d77afd6b32f04675d05bd38e29fe4935ab21ee": "7999b2136bd7b0ba18dd4fc46d561ae6",
".git/objects/38/c503b147f42ad4ada42ee3975f1118ec97dde5": "8ac73ac8708e072da68086a315ba8b1b",
".git/objects/d3/e89955d2c83d2783056297cd45c92a7292cf3f": "49b21c399d31dad963e7727ffdb50adf",
".git/objects/1e/84debfd61add0a4c9a5e4e914d3f3612055274": "13e074b910b0f83e6bc6d3070ddce19d",
".git/objects/16/c9fb908c4065d22f1bfe942aa99b27f5c559d3": "e4a430ffd027469f3d81ae344c7ce6c5",
".git/objects/3d/dd706571029f8e6f992d1a33ca0124255f56f5": "c3769eb662ea2d0a9bd0eaaa549d8525",
".git/objects/87/1fd21b2bfbd7c8cfcc5096ecb01c31050d943c": "a78821f4d68f9f24bfc647605cd2bd32",
".git/objects/29/11ffd96d9293ce9cc56d41563bc2e4f10a3a79": "0b817790ec83b4eb30a5fa8dabdbd364",
".git/objects/3f/faa099f689a2f99e1a6ce14cc92a58bda34f18": "c453316742db686bebee7ccabf8eaf31",
".git/objects/d1/8194143642b6e8fdda0b3709b22e97a8e869c3": "18a42161d40e82c6f3963d5bb36e5e7b",
".git/objects/36/f1e82d3446fa8455e8c68c8aef34c31eb47de9": "15dc748bb0222bb29077615c0472300b",
".git/objects/c0/4d4384c223edff066e364c41c57c01572009f8": "660636055cdd6fd7c0a37496aad87db3",
".git/objects/12/95894ece24e69007e5bf9751fa493894dc5fc0": "1d58b65d25f3546962e7fa246ef1ca5e",
".git/objects/9d/9e90778b8baa36ddee86ec92e51beb23e9557a": "ca83ff3f0c66ea546c5ab82c0ce18332",
".git/objects/e4/b7a2fa5790a2fda59bda1b6e26edb63d4b1536": "1853508500b334078413f08805d782d9",
".git/objects/06/bdf6c7be004ee441d98036c1e963fd1c9f9935": "7a3425eac259924b1a53e21111ea7fb2",
".git/COMMIT_EDITMSG": "795cb8bca1807b6c7c2e636480c97730",
".git/logs/HEAD": "33543b2e958798382c0bb0ff57553d54",
".git/logs/refs/heads/gh-pages": "d5628e3b2c6564b15853935c612834c8",
".git/logs/refs/remotes/origin/gh-pages": "40fac2ebf70bed2de61ce8d0de0d38e0",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/config": "2bf1cfc55aa7ab78f1c743c4717c09d7",
".git/index": "c63fb46ba0b9a66783f76145c6976af3",
"main.dart.js": "6ef4dba3fc2895f6889d1cf90f875144"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
