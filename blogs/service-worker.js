/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "44516fddf77c055f4c1e06cdd09f7c83"
  },
  {
    "url": "about/link/index.html",
    "revision": "61473583d09b04c1e954544f8c727673"
  },
  {
    "url": "about/me/about.html",
    "revision": "8d092ebef8cdd9cbc2ea275b28edad93"
  },
  {
    "url": "about/tool/index.html",
    "revision": "ee807dc22affb4da665bb72a78685da3"
  },
  {
    "url": "assets/css/0.styles.b9afd6ae.css",
    "revision": "bfe092ff5db1309d6f757fb4fc7cd046"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.40446c6e.js",
    "revision": "89ca2a9a6c351de5c013a3e9e0b62b7b"
  },
  {
    "url": "assets/js/10.bf022979.js",
    "revision": "b248d8984d0b03bafda6c50557d6d2b8"
  },
  {
    "url": "assets/js/11.6db93386.js",
    "revision": "e5d0321c830c9bce32177d2b3428d65e"
  },
  {
    "url": "assets/js/12.8ba4e67e.js",
    "revision": "efd3125482827b28c9ed5022db0d7820"
  },
  {
    "url": "assets/js/13.70fdc390.js",
    "revision": "5502a5097604faeacac482472c75ac1b"
  },
  {
    "url": "assets/js/14.a991cb4a.js",
    "revision": "cc58bb59ad41bd19fded619e54ea4541"
  },
  {
    "url": "assets/js/15.e298b39c.js",
    "revision": "b96d027ea7683ae23dacdff1b4d5b51e"
  },
  {
    "url": "assets/js/16.7df2168b.js",
    "revision": "9005c673f93781f493b8112498479301"
  },
  {
    "url": "assets/js/17.d5401bd9.js",
    "revision": "c11e3ca2ced03ff18ce464bf725a7e30"
  },
  {
    "url": "assets/js/18.f9cebd50.js",
    "revision": "f3b2feff4dfd35d07f6dd612bdd8be23"
  },
  {
    "url": "assets/js/19.45c0a4ef.js",
    "revision": "414e65062269e1b3166d7939333e77b9"
  },
  {
    "url": "assets/js/20.9ef7e515.js",
    "revision": "c3ca0107d4267fab46140752445f28c2"
  },
  {
    "url": "assets/js/21.1009a0ac.js",
    "revision": "34abce05f8a7a09581732b7f9ed0c6cb"
  },
  {
    "url": "assets/js/22.d9732536.js",
    "revision": "9f06a5dae360540bd26a42cc32a60ab9"
  },
  {
    "url": "assets/js/23.1bcd4eb8.js",
    "revision": "77ad4b11c0a90ad9dd24323581286728"
  },
  {
    "url": "assets/js/4.61314d8c.js",
    "revision": "44dfed077c8bba5dfb1da3245ef4cb23"
  },
  {
    "url": "assets/js/5.4b26a5c7.js",
    "revision": "3b63776ac1d4e931a76001d1d40f58fa"
  },
  {
    "url": "assets/js/6.bb0caa6c.js",
    "revision": "20b229a78d7503f2f2da3621e5fa8986"
  },
  {
    "url": "assets/js/7.fd902a01.js",
    "revision": "8f5ec3cb6026b9e80b0355d94143cb06"
  },
  {
    "url": "assets/js/8.b5f93d30.js",
    "revision": "a3c5536ec0d7d1585afb33efa4787bb6"
  },
  {
    "url": "assets/js/9.d1ee259a.js",
    "revision": "e650062aa8ed7f79e06713b97844d025"
  },
  {
    "url": "assets/js/app.a2b3b6bb.js",
    "revision": "2793a9ca831fc32b0ca0374f0c84ed17"
  },
  {
    "url": "assets/js/vendors~flowchart.78eb964c.js",
    "revision": "e6f6c10b3d629ce490f060e5f13f9f95"
  },
  {
    "url": "categories/index.html",
    "revision": "05cec15b9088d913a7443eb8ffef8635"
  },
  {
    "url": "categories/Leetcode/index.html",
    "revision": "341ce8dee48023864392038017d6b977"
  },
  {
    "url": "category/Leetcode/dp.html",
    "revision": "492364d83a4a17ebfb0fd2634eb33f0f"
  },
  {
    "url": "category/Leetcode/index.html",
    "revision": "1325e42217cbd9436bfbde1d78f78fb6"
  },
  {
    "url": "category/Leetcode/tree.html",
    "revision": "f9179c8067423af4af4e0d966f52f99c"
  },
  {
    "url": "category/ML/index.html",
    "revision": "a14a8228274e726959918efe895554ef"
  },
  {
    "url": "category/Nlp/index.html",
    "revision": "b2a62f4d2191df5b9644018c911cec88"
  },
  {
    "url": "category/Python/index.html",
    "revision": "c47e2188e7b52fe09615d4087e92d1c7"
  },
  {
    "url": "category/Thinking/index.html",
    "revision": "a22e0e677efa95a32d4492bd72816719"
  },
  {
    "url": "img/bruce_bg.jpg",
    "revision": "de7c518d26624ada5e325de5352dd366"
  },
  {
    "url": "img/bruce_head.png",
    "revision": "2470d375bbf24c8af76d7f2fb29e21d6"
  },
  {
    "url": "img/bruce-bg.jpg",
    "revision": "aa23400bea32a5d2923d26c66c58e65f"
  },
  {
    "url": "img/bruce.jpg",
    "revision": "84c2ec86cb91021a4cdbdc8a1a3cddd1"
  },
  {
    "url": "img/dp1-res1.png",
    "revision": "e15d6046dd5c9184c04cdbd50514b0dd"
  },
  {
    "url": "img/dp1-res2.png",
    "revision": "f80b2501acd6104f56ed1eab5a093704"
  },
  {
    "url": "img/dp1.jpg",
    "revision": "074fe0ffff3ed10d96e831cb88d43f74"
  },
  {
    "url": "index.html",
    "revision": "3f280152e18319638ffcce71ec435962"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "3646304d6698cd3aceeac9f57a579abe"
  },
  {
    "url": "tag/index.html",
    "revision": "1d8209d0aa575a0f5bf9decdd805c7e4"
  },
  {
    "url": "tag/leetcode/index.html",
    "revision": "4cd0514578fa35fa6df14ad51edc0576"
  },
  {
    "url": "timeline/index.html",
    "revision": "9a8e53250a4e3853bc1070229b3c81ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
