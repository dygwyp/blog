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
    "revision": "7b7fbafd22f596503c1f4755f4bc581b"
  },
  {
    "url": "about/link/index.html",
    "revision": "f816bf39f1dcb4c3872e17be07d005fb"
  },
  {
    "url": "about/link/learningLink.html",
    "revision": "9205a18eb4be9a869d18260ff28cd906"
  },
  {
    "url": "about/me/about.html",
    "revision": "e669da9445eb3ca457af39f2c1211465"
  },
  {
    "url": "about/me/index.html",
    "revision": "021ede685ba6b103e1f619e93afe91e4"
  },
  {
    "url": "about/tool/index.html",
    "revision": "6cafb11bd39ce6432fbcb0bbcc16ca2f"
  },
  {
    "url": "about/tool/re.html",
    "revision": "53c0df79cc0c6d999157bfcf077123bb"
  },
  {
    "url": "assets/css/0.styles.d7459e32.css",
    "revision": "fb1b00bfb44e0503fdd24c9b8dd92766"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.023372d3.js",
    "revision": "fcdda74d95a0530e1d276204a1f4c4a7"
  },
  {
    "url": "assets/js/10.9dc4688b.js",
    "revision": "d10c312a11033cfc19797351006a5a98"
  },
  {
    "url": "assets/js/11.2cd309cf.js",
    "revision": "425f8ed6a13bd0d19b5adc5d7c599d4e"
  },
  {
    "url": "assets/js/12.e0bc9991.js",
    "revision": "f0b893da2a40ba8f8d5be2f92d71ec19"
  },
  {
    "url": "assets/js/13.8f2023a4.js",
    "revision": "930f85f350fe88417866accddf7d4530"
  },
  {
    "url": "assets/js/14.4f69e989.js",
    "revision": "66124fa08916172a773e0c0948cd3877"
  },
  {
    "url": "assets/js/15.23fe9669.js",
    "revision": "b01b2a63c823c29559428a0cc2432a3c"
  },
  {
    "url": "assets/js/16.ca24dd4f.js",
    "revision": "f520b32d54815fb40b21bebeeeb4df26"
  },
  {
    "url": "assets/js/17.0a81672a.js",
    "revision": "863eff2f6363af0b98dc6d35468ad6c6"
  },
  {
    "url": "assets/js/18.6e9284c4.js",
    "revision": "35ce17cedc69e6ec97ef7132b9aa9c8c"
  },
  {
    "url": "assets/js/19.4f2f5eae.js",
    "revision": "f94f28cd852d58de498b0ad91e2910cf"
  },
  {
    "url": "assets/js/20.86879ff6.js",
    "revision": "f1016e4bb03ba5d37b1f516c27248f9c"
  },
  {
    "url": "assets/js/21.26836930.js",
    "revision": "19298e435c2e75af544486cc61660602"
  },
  {
    "url": "assets/js/22.5d6ad78a.js",
    "revision": "999bb00f635bae423cbcf3550ca77f27"
  },
  {
    "url": "assets/js/23.d8de35f7.js",
    "revision": "f885748d775c46af78256d56c1d7b61b"
  },
  {
    "url": "assets/js/24.8589cceb.js",
    "revision": "31e1a47dfb6434c54cc2edc680610682"
  },
  {
    "url": "assets/js/25.4d32ad98.js",
    "revision": "df466d0066c198d784e5ec0fee891bd0"
  },
  {
    "url": "assets/js/26.8de2d155.js",
    "revision": "d20fbf4bc3b6ff6580e9b7de7ecc772b"
  },
  {
    "url": "assets/js/27.07ff344a.js",
    "revision": "526515d9abe2d3e8fa87b9cb89331be4"
  },
  {
    "url": "assets/js/28.1a21592c.js",
    "revision": "32f9eff05ac80d99bc4d7f46bd1697fa"
  },
  {
    "url": "assets/js/29.2b13670f.js",
    "revision": "ad2d75202c89fbbc427e48e599aacb2d"
  },
  {
    "url": "assets/js/30.2bd183a6.js",
    "revision": "50e0045962c5a45465cf7118d5499492"
  },
  {
    "url": "assets/js/31.40304f3a.js",
    "revision": "1e49b1139afc469f778d684b2d08d259"
  },
  {
    "url": "assets/js/32.00f18ec8.js",
    "revision": "c152ef5d352add7596d3cabbe8c21b98"
  },
  {
    "url": "assets/js/33.f2f679bd.js",
    "revision": "26d1bbde4c7627976da546d62b850bb0"
  },
  {
    "url": "assets/js/34.6dfc0645.js",
    "revision": "e7de10e180464bd9f05dfdc4534992a9"
  },
  {
    "url": "assets/js/35.fb65e414.js",
    "revision": "a67e3e82490a3f118b64069fed03053b"
  },
  {
    "url": "assets/js/36.028bb629.js",
    "revision": "ce861e7d743562f0ea5f79c7d80f6818"
  },
  {
    "url": "assets/js/37.c3b6b032.js",
    "revision": "7237efe5d4126dc1aee7d3328d70afd2"
  },
  {
    "url": "assets/js/38.61277f31.js",
    "revision": "82dcfb99f4c91e182d533a3184342e30"
  },
  {
    "url": "assets/js/39.87bd7a12.js",
    "revision": "d5ca99c5310f56de685012ad6210b046"
  },
  {
    "url": "assets/js/4.62881339.js",
    "revision": "73c284f1e88f634fbc02bbff815ac802"
  },
  {
    "url": "assets/js/40.ac4cd808.js",
    "revision": "c3fa2b676335591303caf2d23c21e14f"
  },
  {
    "url": "assets/js/41.ee41281b.js",
    "revision": "03bd6425c94efd0d89ba84eb7bca656a"
  },
  {
    "url": "assets/js/42.0743fd77.js",
    "revision": "3da9962deb423e1a4a1617c442d36ef9"
  },
  {
    "url": "assets/js/43.51f6cc38.js",
    "revision": "a5a456bff2cfda3112a324701d0ae9b6"
  },
  {
    "url": "assets/js/44.9fa7cdca.js",
    "revision": "a5906683eeec9924ec82a39e3c96c000"
  },
  {
    "url": "assets/js/45.c0fc99e7.js",
    "revision": "1d51569eeec44cc28fe72860af2b24ab"
  },
  {
    "url": "assets/js/46.f0f105a2.js",
    "revision": "df95cb25275428880540bbb7e1f919c8"
  },
  {
    "url": "assets/js/47.e9bdae0c.js",
    "revision": "e3d9c2aadb56513d9e8938daeecbec7e"
  },
  {
    "url": "assets/js/48.0f566454.js",
    "revision": "4a98a6b5c847942499c1468ade7447b6"
  },
  {
    "url": "assets/js/49.0b749b1c.js",
    "revision": "c5e0015128e6eb3892cb90224d71ba12"
  },
  {
    "url": "assets/js/5.a971dbfd.js",
    "revision": "67bcb961aff3eecd0af0ef8d30a9c77a"
  },
  {
    "url": "assets/js/50.9b79a2ce.js",
    "revision": "0adcbd1ad367b59826a3bedb6f794df9"
  },
  {
    "url": "assets/js/51.01c0bede.js",
    "revision": "02964fbf003bbb6e4f4b0d16005b9e0e"
  },
  {
    "url": "assets/js/52.4aadcfc0.js",
    "revision": "d2a955868b22f6ef961710e3c687eb0a"
  },
  {
    "url": "assets/js/53.cb6897c6.js",
    "revision": "128cd6b62d4871b326ff057301e112dd"
  },
  {
    "url": "assets/js/54.833383c2.js",
    "revision": "cbe06679a0ba480b1a19e9757ca63eff"
  },
  {
    "url": "assets/js/55.9b3486fd.js",
    "revision": "5c3392511ddc4c47bb84c352d3307559"
  },
  {
    "url": "assets/js/56.f50449a6.js",
    "revision": "d8b65b5c2dc0940653b254b899d77c54"
  },
  {
    "url": "assets/js/57.ff23d1df.js",
    "revision": "43a322cc2fb023a84b836677084b596a"
  },
  {
    "url": "assets/js/58.fd74c1c5.js",
    "revision": "1ccf884493d48c993d0c831e080da451"
  },
  {
    "url": "assets/js/59.56a391d7.js",
    "revision": "91692cff4c69bc325ea5b49ca57a2e65"
  },
  {
    "url": "assets/js/6.00a6da34.js",
    "revision": "4defcb470620e685b1945e020cb08ac3"
  },
  {
    "url": "assets/js/60.c54fcbf9.js",
    "revision": "b453da7003c2fb07f62290197fae08ea"
  },
  {
    "url": "assets/js/61.ef4d57b5.js",
    "revision": "c6f72a5c291846d57aac81d7698c8e0d"
  },
  {
    "url": "assets/js/62.69f7877f.js",
    "revision": "c37efa68ea27dc93069ab30edcc7206f"
  },
  {
    "url": "assets/js/63.d1246607.js",
    "revision": "cb15f0c3dcad52c9cd0bdfd827122107"
  },
  {
    "url": "assets/js/7.c5f0519f.js",
    "revision": "3221d1efbbd700384ecbced9490b789a"
  },
  {
    "url": "assets/js/8.7e5b2bdb.js",
    "revision": "815f3fd687140ceb4fbb352ed9c707f3"
  },
  {
    "url": "assets/js/9.5a9e7f54.js",
    "revision": "efb6a7ce6eb17a3ec238377dfa97059b"
  },
  {
    "url": "assets/js/app.842b5f0e.js",
    "revision": "cbad9053fa4644f4a3554f5af0150edc"
  },
  {
    "url": "assets/js/vendors~flowchart.e3ae4031.js",
    "revision": "19a1291d588109f0c37143bad811d3d9"
  },
  {
    "url": "categories/index.html",
    "revision": "0d1e77e6913782a9ba56c18bc7d648dc"
  },
  {
    "url": "categories/Leetcode/index.html",
    "revision": "92a226afcacc76f5cce7d44903e863ef"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "e37af3f3791ffe9e25c43440579cbeff"
  },
  {
    "url": "categories/ML_NLP_CV/index.html",
    "revision": "0ed2d7edc7ec7cb790d1230427496ef2"
  },
  {
    "url": "categories/Program/index.html",
    "revision": "9af100b2dd9f99a3123aadd72808c315"
  },
  {
    "url": "categories/Program/page/2/index.html",
    "revision": "24d47710f29109f59faded39ba73e210"
  },
  {
    "url": "categories/Search/index.html",
    "revision": "1fe01f5f726d94517499f62a71ddf48e"
  },
  {
    "url": "categories/Thinking/index.html",
    "revision": "5579d9f4b053849442203a60cec1158e"
  },
  {
    "url": "categories/tool/index.html",
    "revision": "e45cd82c1d298cfb535801bc178db219"
  },
  {
    "url": "category/index.html",
    "revision": "ed99b2b872a50cce3a1300e172800f7d"
  },
  {
    "url": "category/Leetcode/dp.html",
    "revision": "278d28acd859e5018e16c886baad59e2"
  },
  {
    "url": "category/Leetcode/index.html",
    "revision": "13b008efaa483af058add949cf7f9808"
  },
  {
    "url": "category/Leetcode/math.html",
    "revision": "588ba30e3614bd5400c5558fc60993dc"
  },
  {
    "url": "category/Leetcode/offer/index.html",
    "revision": "5efa95d3ce9cd7333a0b86012b7076cd"
  },
  {
    "url": "category/Leetcode/tree.html",
    "revision": "0ef5004102e90351646e54b4cac021a2"
  },
  {
    "url": "category/Linux/index.html",
    "revision": "1690984e404edc614b675f690655eee4"
  },
  {
    "url": "category/Linux/Linux_base.html",
    "revision": "ed671b62d00c7eb441abca87649a7c0d"
  },
  {
    "url": "category/Linux/linux_net.html",
    "revision": "f5f772f381bebaba1d088ca77d0f2995"
  },
  {
    "url": "category/Linux/vim.html",
    "revision": "b1d6dd0476104f514d6a34583a0684a7"
  },
  {
    "url": "category/ML_NLP_CV/base.html",
    "revision": "147509e89e47acdd4e9e3abf9a79cd94"
  },
  {
    "url": "category/ML_NLP_CV/face_recognition.html",
    "revision": "dd83e083c48f1244d54d420c4bed172c"
  },
  {
    "url": "category/ML_NLP_CV/index.html",
    "revision": "e675e17cb0e2c89e11824b0bbcb24a87"
  },
  {
    "url": "category/ML_NLP_CV/wordEmbedding.html",
    "revision": "0b2c36e528d1051f2836eff83832e5ee"
  },
  {
    "url": "category/Program/index.html",
    "revision": "7da63c85d29fb69f44a6ecdf891afbbe"
  },
  {
    "url": "category/Program/Php/index.html",
    "revision": "2fa13a18305f10687d90c9ecdc1c3f48"
  },
  {
    "url": "category/Program/Php/php_base.html",
    "revision": "393035f05a09bb988158c52388a1aadd"
  },
  {
    "url": "category/Program/Php/php_install.html",
    "revision": "bea838a878faedbf7b18c9c17ddf6683"
  },
  {
    "url": "category/Program/Python/Effective_python.html",
    "revision": "c8a649c1074cf279936b4dcd8e6cc9ca"
  },
  {
    "url": "category/Program/Python/index.html",
    "revision": "5373f51ca01ed72384f4287093f88a97"
  },
  {
    "url": "category/Program/Python/Python_advance.html",
    "revision": "cda697c717cb55139ed275edb909cce4"
  },
  {
    "url": "category/Program/Python/Python_base.html",
    "revision": "785048be14d7fb8d95351aa4f4357698"
  },
  {
    "url": "category/Program/Python/Python_dataStructure.html",
    "revision": "586a77571c6eec793f1f9e1b0a23a079"
  },
  {
    "url": "category/Program/Python/Python_fun.html",
    "revision": "2e6c66a39242b1744a0401f7400784c3"
  },
  {
    "url": "category/Program/Python/Python_funcProgram.html",
    "revision": "37d21fbbfa0e41ac0b47f04b3279b574"
  },
  {
    "url": "category/Program/Python/Python_object.html",
    "revision": "54379c42eac5bcfd0e2b6e5b85732d55"
  },
  {
    "url": "category/Program/PyTorch/index.html",
    "revision": "56340379297ea23377dfe8078decc66d"
  },
  {
    "url": "category/Program/PyTorch/Introduction.html",
    "revision": "58c4895cc4e80540f9280b9b48c8c33f"
  },
  {
    "url": "category/Program/PyTorch/Tensor.html",
    "revision": "2683b6d431f91eb02784655b13bd0308"
  },
  {
    "url": "category/Program/Shell/index.html",
    "revision": "fb74e743330a68fe46bc76f991a299fb"
  },
  {
    "url": "category/Program/Shell/Introduction.html",
    "revision": "d17112dbe0df14ce1fc794effd4753a0"
  },
  {
    "url": "category/Search/index.html",
    "revision": "e888d896f76bec67cc10e3b6119ba5d4"
  },
  {
    "url": "category/Search/intent.html",
    "revision": "159e21ff01c562226ce96509b36ab80f"
  },
  {
    "url": "category/Thinking/index.html",
    "revision": "9004a4a2edb1c7a525b4b8648c3da087"
  },
  {
    "url": "category/Thinking/note/Beat_procrastination.html",
    "revision": "a1ebb0ea26764047bdb8f8091ca27f91"
  },
  {
    "url": "category/Thinking/note/Hypothetical_world.html",
    "revision": "a1ae1814380a419284883d5dd87419ae"
  },
  {
    "url": "category/Thinking/note/index.html",
    "revision": "852fc41c4e5117129608b57f7da6708f"
  },
  {
    "url": "category/Thinking/note/Lijiacheng_story.html",
    "revision": "39daa99eca167e232a6b202d68d8ab6c"
  },
  {
    "url": "category/Thinking/note/Survival_guide.html",
    "revision": "ef311fd09b4f172496ce78d9711eb1bf"
  },
  {
    "url": "category/Thinking/paper_submit.html",
    "revision": "92d5e32586bd8b62bc5af1a154fc9f0a"
  },
  {
    "url": "category/Thinking/philosophy.html",
    "revision": "2c9f902689b047a287a99d01641ffd79"
  },
  {
    "url": "category/Thinking/psychology.html",
    "revision": "1c0ea4d8749aa0acc617a897f8de2445"
  },
  {
    "url": "category/Thinking/travel/index.html",
    "revision": "8afd62db78b2b79ee693ec215fdc34a6"
  },
  {
    "url": "category/Thinking/travel/Tianjin.html",
    "revision": "44b918976faec8390097e4ca8fcec17d"
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
    "url": "img/face/1.png",
    "revision": "bcadfabd9b7a4f1416ad966c718703c8"
  },
  {
    "url": "img/face/12_res.png",
    "revision": "b283eb2571a0ca3f5431488bc5e6d972"
  },
  {
    "url": "img/face/13_res.png",
    "revision": "ddb41cc4e1e4f50128092ae13a93a0ff"
  },
  {
    "url": "img/face/2.png",
    "revision": "b9f95cf97708b6f4cab7a6adef7b0530"
  },
  {
    "url": "img/face/3man.png",
    "revision": "9afb9353c0c7c26003cccd7ee2222d2c"
  },
  {
    "url": "img/face/美女.png",
    "revision": "8a81fd69305fa676b25914a44f8a1222"
  },
  {
    "url": "img/face/美女结果.png",
    "revision": "31d4322e7f4c9f5a17134aded93303b0"
  },
  {
    "url": "img/face/bg.png",
    "revision": "0157c9c3b370c1cc56f51ad45941ee9a"
  },
  {
    "url": "img/face/params.png",
    "revision": "7b85dd34f794a42eb4df3d09285790d6"
  },
  {
    "url": "img/face/sdk结果.png",
    "revision": "795dc843ae5b47947c89dfe716634aee"
  },
  {
    "url": "img/face/two_man_res.png",
    "revision": "2426c80879b06618b886839b79af7c51"
  },
  {
    "url": "img/face/two_man.png",
    "revision": "7811200423b5417696f35933f8f6a92e"
  },
  {
    "url": "img/intent.png",
    "revision": "037a50d98c1c8c3d0468c38a4a24d4e0"
  },
  {
    "url": "img/niudunfa.jpeg",
    "revision": "0d44ee5c9ce73ee001656f40aa5e6583"
  },
  {
    "url": "img/php/php_html.png",
    "revision": "0249637cda845aa94c43552f3584e280"
  },
  {
    "url": "img/pytorch-list.png",
    "revision": "820a092967d185082f146b62009dc0c0"
  },
  {
    "url": "img/pytorch.jpg",
    "revision": "1a7664ce573014f266cf465992e4349f"
  },
  {
    "url": "img/tianjin/ali.png",
    "revision": "a4878d09f69fcec5f75f77ae0bac61ab"
  },
  {
    "url": "img/tianjin/baosan.png",
    "revision": "acafc2c21d70289b63804bed85abfce5"
  },
  {
    "url": "img/tianjin/cha.jpg",
    "revision": "9e394054086b24a5a013fa4058af4085"
  },
  {
    "url": "img/tianjin/guangchang.jpg",
    "revision": "32b93cbaca36489ba3bb8cabe57e84fc"
  },
  {
    "url": "img/tianjin/jianbing.png",
    "revision": "3bebc80f24be496973d7c2ca9a88258f"
  },
  {
    "url": "img/tianjin/jiuba.jpg",
    "revision": "33356c5be5179444b096697fdc9f2ab6"
  },
  {
    "url": "img/tianjin/tianjin.png",
    "revision": "82b14f007a46142a64fafe62bcf4e4d3"
  },
  {
    "url": "img/tianjin/xilou.jpg",
    "revision": "2f0995b58d99132d82bac27b4bbec74b"
  },
  {
    "url": "img/tianjin/yan.jpg",
    "revision": "c597a3bff431217ff0e31f7947489e8d"
  },
  {
    "url": "img/tianjin/yejing.jpg",
    "revision": "f1b965bbf85e2efb3553b7f9f6e113cc"
  },
  {
    "url": "img/wechat.png",
    "revision": "4cc3ec7ea7e37673484afbbb926896d2"
  },
  {
    "url": "img/zhifubao.png",
    "revision": "4cd780d04217565aab46d33cf30d8a83"
  },
  {
    "url": "index.html",
    "revision": "3bb9e28af2c377094711a17642ea7f16"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "52c6c79fb574eeba7213331e9ce3ebe3"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "0a9ceb1742c14c3b4275f7bf3df73f42"
  },
  {
    "url": "tag/计算机视觉/index.html",
    "revision": "25b5ba6f7d75eb84591cdb5b7773c998"
  },
  {
    "url": "tag/论文投稿/index.html",
    "revision": "13e41c2e3a62c91bb9fd098f19bcb583"
  },
  {
    "url": "tag/模型评价/index.html",
    "revision": "cde855739aa3f9ea96907ba9f498dbd3"
  },
  {
    "url": "tag/人脸识别/index.html",
    "revision": "291a6aa881d71ec1d3a22b3ee282c435"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "00aecca38787919af996a176fec6d43e"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "532ae825521892616858fcdc329c4177"
  },
  {
    "url": "tag/搜索/index.html",
    "revision": "8ce036db6e0f157d10b2261189ccf949"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "3a4c2c458d22104ae484590d11e3d152"
  },
  {
    "url": "tag/心理学/index.html",
    "revision": "33130506c5d90638f9235f06b3bb9fe4"
  },
  {
    "url": "tag/意图识别/index.html",
    "revision": "9d2515c3558933553eed892dd2c96cda"
  },
  {
    "url": "tag/游记/index.html",
    "revision": "95fc934cb9fd595d0d7f63c7867449af"
  },
  {
    "url": "tag/哲学/index.html",
    "revision": "3bf41c651ae6a251ea888fdd97b9c5a1"
  },
  {
    "url": "tag/index.html",
    "revision": "5820787f246734250d98911b36d8ac1d"
  },
  {
    "url": "tag/leetcode/index.html",
    "revision": "338b7c3a26da3c1a6a203894011e6eaa"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "dc188ae4133c68210f3af4e0ff9c4f42"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "bda3247fda4388599286c82da7d328d6"
  },
  {
    "url": "tag/note/index.html",
    "revision": "752bb8602e3f15122478515c92cd9218"
  },
  {
    "url": "tag/php/index.html",
    "revision": "b8f20ed3fb27255df2e2ba9b2059b245"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ea687136cff01e11b5ae1f4974f0da5a"
  },
  {
    "url": "tag/PyTorch/index.html",
    "revision": "83447b2ba0e5cc85c03bf2da9f57c25e"
  },
  {
    "url": "tag/re/index.html",
    "revision": "3537eacaa812dd0bdc2ed32640d344bd"
  },
  {
    "url": "tag/Shell/index.html",
    "revision": "3c2f1301c0776ff5c5b28ad5cc923166"
  },
  {
    "url": "tag/Tensor/index.html",
    "revision": "1fceef9e10a7307f2e2d092daaf1b96b"
  },
  {
    "url": "tag/vim/index.html",
    "revision": "3e125e702a6f0646db2490de3f97329f"
  },
  {
    "url": "tag/word embedding/index.html",
    "revision": "07318509a90b77568710918366bf2523"
  },
  {
    "url": "tag/word2vec/index.html",
    "revision": "60bb9c3ce1ddf8b972fd3d79ecf7f565"
  },
  {
    "url": "timeline/index.html",
    "revision": "45a682e58aeb20b0b4004eda8b26f004"
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
