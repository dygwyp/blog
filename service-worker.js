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
    "revision": "274e40c9804d5ec9a3f83eb4b7b1d06e"
  },
  {
    "url": "about/link/index.html",
    "revision": "45cf8a5272645def130d5b59055cb578"
  },
  {
    "url": "about/link/learningLink.html",
    "revision": "c099d39b65c3b552612987c3e01f0e86"
  },
  {
    "url": "about/me/about.html",
    "revision": "78384e02b969f07d7c9fadd184842d6d"
  },
  {
    "url": "about/me/index.html",
    "revision": "3b16a82585cdb015bf14ab25e94fcccc"
  },
  {
    "url": "about/tool/index.html",
    "revision": "ba7905b057c1a9dd38353ae56381d318"
  },
  {
    "url": "about/tool/re.html",
    "revision": "f8dfd889866f3a960518ebbf43ead8c6"
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
    "url": "assets/js/10.5923129b.js",
    "revision": "3acbfa40f5c07dd7e3082fb36c9114e4"
  },
  {
    "url": "assets/js/11.2cd309cf.js",
    "revision": "425f8ed6a13bd0d19b5adc5d7c599d4e"
  },
  {
    "url": "assets/js/12.bedf4de5.js",
    "revision": "e2dad936c67dc038ec62b72ecfa7b182"
  },
  {
    "url": "assets/js/13.8f2023a4.js",
    "revision": "930f85f350fe88417866accddf7d4530"
  },
  {
    "url": "assets/js/14.fc107b2a.js",
    "revision": "a7be3a8178f3580c70851a5b0adee5b2"
  },
  {
    "url": "assets/js/15.23fe9669.js",
    "revision": "b01b2a63c823c29559428a0cc2432a3c"
  },
  {
    "url": "assets/js/16.5a9e9c63.js",
    "revision": "f34eaab65ec0079f32762a820b6a8834"
  },
  {
    "url": "assets/js/17.a39fb8ef.js",
    "revision": "a161e036aa80a6bca4f99aa34f99b561"
  },
  {
    "url": "assets/js/18.6e9284c4.js",
    "revision": "35ce17cedc69e6ec97ef7132b9aa9c8c"
  },
  {
    "url": "assets/js/19.41058272.js",
    "revision": "17402f9f8891c5d4a28d43f0a6e30e9f"
  },
  {
    "url": "assets/js/20.f0ba92a8.js",
    "revision": "5f29db7640c4454723fbb31f0abc1c3b"
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
    "url": "assets/js/23.9f12da50.js",
    "revision": "d92bdd490d7babe57696907e34650bd4"
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
    "url": "assets/js/29.d1e3e0f4.js",
    "revision": "5c5e88907342cc9e79e99a2b624a64ce"
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
    "url": "assets/js/32.502d83c0.js",
    "revision": "273d1a0f3d56b93340dd8deb7aa0cf06"
  },
  {
    "url": "assets/js/33.4f08b3ae.js",
    "revision": "dc41976171d4d4c4f7bdb8118a6b6411"
  },
  {
    "url": "assets/js/34.e841587a.js",
    "revision": "0122f026859e68a2bfd02bd6b068bafd"
  },
  {
    "url": "assets/js/35.1aa410f2.js",
    "revision": "1137623e71a38123c3a73196116db4a9"
  },
  {
    "url": "assets/js/36.5d24a76d.js",
    "revision": "3cfeba32d1d9218c69151cb150bfc056"
  },
  {
    "url": "assets/js/37.7a681a6b.js",
    "revision": "f29016a062be29574d5ed255a720f08e"
  },
  {
    "url": "assets/js/38.9fbf8292.js",
    "revision": "faa744773ddea4117a97ee73ec63f642"
  },
  {
    "url": "assets/js/39.44ac88bc.js",
    "revision": "4ba87b81d872678a80881d238ac605c4"
  },
  {
    "url": "assets/js/4.62881339.js",
    "revision": "73c284f1e88f634fbc02bbff815ac802"
  },
  {
    "url": "assets/js/40.0cab128c.js",
    "revision": "ee48a2ebeabd168f0fc15622b13166fc"
  },
  {
    "url": "assets/js/41.2509f179.js",
    "revision": "6fbaa40ddd3555f1df169ab914e12007"
  },
  {
    "url": "assets/js/42.f986445d.js",
    "revision": "2ebe2bff72e2854525aa4112bc384692"
  },
  {
    "url": "assets/js/43.49c568c1.js",
    "revision": "790f4c0e8c01c83c685fcc97328a481c"
  },
  {
    "url": "assets/js/44.a13066bf.js",
    "revision": "c2aa1913bab2b93e76870f985df6fbbb"
  },
  {
    "url": "assets/js/45.fcae5667.js",
    "revision": "d0c19e23d6e497815c2048a41fb1de10"
  },
  {
    "url": "assets/js/46.6dff5aa8.js",
    "revision": "06b6c33f5410c2a6ef68f690aab19603"
  },
  {
    "url": "assets/js/47.29e780cc.js",
    "revision": "ccd862d9e96940801e355bf9ca2ceaf5"
  },
  {
    "url": "assets/js/48.a379cbe6.js",
    "revision": "7f1d278a51732c2500d340bfe5e56841"
  },
  {
    "url": "assets/js/49.100651c8.js",
    "revision": "eb3ad372815e03f440d3a070688c9cd8"
  },
  {
    "url": "assets/js/5.a971dbfd.js",
    "revision": "67bcb961aff3eecd0af0ef8d30a9c77a"
  },
  {
    "url": "assets/js/50.5ccf703e.js",
    "revision": "c8c49a71dabc61df1303e721f963e851"
  },
  {
    "url": "assets/js/51.5e09dd54.js",
    "revision": "0e5f48af0af1d84f780918e2ed4dc4cc"
  },
  {
    "url": "assets/js/52.d6cceaf1.js",
    "revision": "76b434e5ed25c9c52b86eabde1dc0676"
  },
  {
    "url": "assets/js/53.15a5b6a3.js",
    "revision": "19038a4353a6997b77ead2319b3d00f6"
  },
  {
    "url": "assets/js/54.a2f87918.js",
    "revision": "e6c9c663aba956be3ef6c874e2661bf2"
  },
  {
    "url": "assets/js/55.03e3bd26.js",
    "revision": "ecdda0bc741e7d21e807d920c6b419f4"
  },
  {
    "url": "assets/js/56.53029a76.js",
    "revision": "70a619c6d9e77972a193b41a12dbbeab"
  },
  {
    "url": "assets/js/57.a04c3914.js",
    "revision": "e8c84ac1dca0dd4ccf4770713b90ab4f"
  },
  {
    "url": "assets/js/58.eac3f971.js",
    "revision": "97085422b5475b8ec7e63c996deac85b"
  },
  {
    "url": "assets/js/59.303fd864.js",
    "revision": "e25ab0842e17b9b26d7a3961ffb91661"
  },
  {
    "url": "assets/js/6.00a6da34.js",
    "revision": "4defcb470620e685b1945e020cb08ac3"
  },
  {
    "url": "assets/js/60.cee3d4d6.js",
    "revision": "6163cc0cd50eabae006b6cbcf204f856"
  },
  {
    "url": "assets/js/61.03f3ef4a.js",
    "revision": "3be630d18e546153ad6637ef74b5656d"
  },
  {
    "url": "assets/js/62.bfae2fa7.js",
    "revision": "4c8cb19fd21320dc9d5888dc14af7121"
  },
  {
    "url": "assets/js/63.2f26971d.js",
    "revision": "375241943f94536c9777f924f9e91505"
  },
  {
    "url": "assets/js/64.73fc8c38.js",
    "revision": "e8b2b25d14bcbb8e379527113e2129d9"
  },
  {
    "url": "assets/js/65.9f5447c3.js",
    "revision": "41d20d8ec25b7cfc03964b2adaa3a6e0"
  },
  {
    "url": "assets/js/66.25db3a7e.js",
    "revision": "bda00cbff1f3a66e289bf76d2b9ca5ce"
  },
  {
    "url": "assets/js/67.641c49a1.js",
    "revision": "fd8d33befe62585a51b65c946094c628"
  },
  {
    "url": "assets/js/68.b39d5791.js",
    "revision": "a8e8ad8adda871cecc1c50ffb64050b6"
  },
  {
    "url": "assets/js/69.508856f2.js",
    "revision": "49e576c09090bb233a7c177d7ff0a287"
  },
  {
    "url": "assets/js/7.c5f0519f.js",
    "revision": "3221d1efbbd700384ecbced9490b789a"
  },
  {
    "url": "assets/js/70.243df114.js",
    "revision": "154f5cdc1f160bad3ed858ec5e4bd858"
  },
  {
    "url": "assets/js/71.e9a18e07.js",
    "revision": "fcf8c44ae1c12e32198036c084a7ec9a"
  },
  {
    "url": "assets/js/72.8d77e4df.js",
    "revision": "b4e785929590dcd25294cf0200d5445f"
  },
  {
    "url": "assets/js/73.5727b19b.js",
    "revision": "afc9758a4fd264daa7b97de97ff9432c"
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
    "url": "assets/js/app.b7965718.js",
    "revision": "2a722dad192984f602d34d09ca81a579"
  },
  {
    "url": "assets/js/vendors~flowchart.e3ae4031.js",
    "revision": "19a1291d588109f0c37143bad811d3d9"
  },
  {
    "url": "categories/index.html",
    "revision": "eec3c867e384d7173d5b8caa4d60e9ec"
  },
  {
    "url": "categories/Leetcode/index.html",
    "revision": "8e26645f6a50e9f178786ced54aefb9e"
  },
  {
    "url": "categories/Linux/index.html",
    "revision": "aab2973559d238f03a41d0f5953cccf4"
  },
  {
    "url": "categories/ML_NLP_CV/index.html",
    "revision": "b5951679446b143b8580d9534940883d"
  },
  {
    "url": "categories/Program/index.html",
    "revision": "dadecd35e203379a1967c5890fce1d1a"
  },
  {
    "url": "categories/Program/page/2/index.html",
    "revision": "8860e2d9031166a4cd6a169d0558af11"
  },
  {
    "url": "categories/Search/index.html",
    "revision": "fd7fb2a281cccb89f064e6564b36c26b"
  },
  {
    "url": "categories/Thinking/index.html",
    "revision": "7474233b02c0f980ef6da8d6cd97b0fc"
  },
  {
    "url": "categories/Thinking/page/2/index.html",
    "revision": "b98f076b050326825704f083c50df375"
  },
  {
    "url": "categories/tool/index.html",
    "revision": "1367c0f134a14f1e0c21edaf63d44fdc"
  },
  {
    "url": "category/index.html",
    "revision": "ac016c80057f339ab1d5b5704f90bd70"
  },
  {
    "url": "category/Leetcode/dp.html",
    "revision": "4b5144b8f78619a03ac940f071148265"
  },
  {
    "url": "category/Leetcode/index.html",
    "revision": "12e36a2acf2ebee4b3fee143425a4443"
  },
  {
    "url": "category/Leetcode/math.html",
    "revision": "2fd428b70c623e471468a8119643679e"
  },
  {
    "url": "category/Leetcode/offer/index.html",
    "revision": "66e2a0026a06d7d404004f820cd79285"
  },
  {
    "url": "category/Leetcode/tree.html",
    "revision": "83ceaa66b98b73d453a6f0719050cfe7"
  },
  {
    "url": "category/Linux/index.html",
    "revision": "f7fc108907ffab1f214cc4479034a599"
  },
  {
    "url": "category/Linux/Linux_base.html",
    "revision": "138bbcf296e6e5593e95b8a400547637"
  },
  {
    "url": "category/Linux/linux_net.html",
    "revision": "79f96cc3dec54054d2884440ef8bed80"
  },
  {
    "url": "category/Linux/vim.html",
    "revision": "d9f2d5ad7076f6c754ea6c6a82cff4dc"
  },
  {
    "url": "category/ML_NLP_CV/base.html",
    "revision": "25ad358625eafd54bbea1529d023aef1"
  },
  {
    "url": "category/ML_NLP_CV/face_recognition.html",
    "revision": "b5e5be044a86d49f0766bfe3ec95c433"
  },
  {
    "url": "category/ML_NLP_CV/index.html",
    "revision": "2912a95f71f6acb98647078185fd6659"
  },
  {
    "url": "category/ML_NLP_CV/wordEmbedding.html",
    "revision": "2a3e342ca2a31550208b466ca45dedd7"
  },
  {
    "url": "category/Program/C++/Effective_c++.html",
    "revision": "491cce6a19d8552a0c1c3493184d3656"
  },
  {
    "url": "category/Program/C++/index.html",
    "revision": "efee112402027860d2a85a47022716e4"
  },
  {
    "url": "category/Program/index.html",
    "revision": "4af4b21b5a57cff371bb617c5685bac9"
  },
  {
    "url": "category/Program/Php/index.html",
    "revision": "821d2164d604ab55274b2281e8f87657"
  },
  {
    "url": "category/Program/Php/php_base.html",
    "revision": "e999c2f7e6eb2c612e4cd460b4427459"
  },
  {
    "url": "category/Program/Php/php_install.html",
    "revision": "fadf5185a320f3c04ce44f5566195f7b"
  },
  {
    "url": "category/Program/Python/Effective_python.html",
    "revision": "26fa6215b6921cb09058584e34e66182"
  },
  {
    "url": "category/Program/Python/index.html",
    "revision": "74a491d16bb2d822d84203ba4a19bc17"
  },
  {
    "url": "category/Program/Python/Python_advance.html",
    "revision": "28cd31c10bffb4ce170ecfb4c48a6e44"
  },
  {
    "url": "category/Program/Python/Python_base.html",
    "revision": "c06a09faca38ee2a8dc5904fc4e3906a"
  },
  {
    "url": "category/Program/Python/Python_dataStructure.html",
    "revision": "b161a0c080f0ff830c9242734d68cd8a"
  },
  {
    "url": "category/Program/Python/Python_fun.html",
    "revision": "65dd7bd279159f89e49cc63aa7951a27"
  },
  {
    "url": "category/Program/Python/Python_funcProgram.html",
    "revision": "4e03caf45f3257e2cbe10ad2e98669ee"
  },
  {
    "url": "category/Program/Python/Python_object.html",
    "revision": "2bd3250830749eea715f2ab93b537add"
  },
  {
    "url": "category/Program/PyTorch/index.html",
    "revision": "002acd9396fa7a08a66ddadd5fc935ec"
  },
  {
    "url": "category/Program/PyTorch/Introduction.html",
    "revision": "d26670943ecbffe6b28fb1e6653261ca"
  },
  {
    "url": "category/Program/PyTorch/pyTorch_nn.html",
    "revision": "eec6c8a7d08fd6685e623036751b6698"
  },
  {
    "url": "category/Program/PyTorch/Tensor.html",
    "revision": "9754b902d9700f6cc8592508b5c846b2"
  },
  {
    "url": "category/Program/Shell/index.html",
    "revision": "facbb1b7651f8673f8f77b160c059df3"
  },
  {
    "url": "category/Program/Shell/Introduction.html",
    "revision": "9dd40565d43fa86c2a13604395576d70"
  },
  {
    "url": "category/Search/index.html",
    "revision": "89db21ec4308b42eb0738e265103e820"
  },
  {
    "url": "category/Search/intent.html",
    "revision": "c2600cae690997797f7d6a49b5b7532c"
  },
  {
    "url": "category/Thinking/index.html",
    "revision": "b99de4a64ff21145698a3ba512257b6d"
  },
  {
    "url": "category/Thinking/life/index.html",
    "revision": "2ee404631ee8a4000823eeb3922e275d"
  },
  {
    "url": "category/Thinking/life/person.html",
    "revision": "5f6bef7be38175c4964a5cc29ab3da36"
  },
  {
    "url": "category/Thinking/life/programmer_life.html",
    "revision": "1d11709ce5d9bb1576746ce3ed9ff06b"
  },
  {
    "url": "category/Thinking/Literature_free.html",
    "revision": "f9691dd8b670b972dd8dceeea7bf6417"
  },
  {
    "url": "category/Thinking/love.html",
    "revision": "4c265d21ba29ef3e6d8286f263de6575"
  },
  {
    "url": "category/Thinking/note/Beat_procrastination.html",
    "revision": "b12796c4aea802274faa5fb007c38c56"
  },
  {
    "url": "category/Thinking/note/Hypothetical_world.html",
    "revision": "579cdcb2a467818d15b7be597e45eb26"
  },
  {
    "url": "category/Thinking/note/index.html",
    "revision": "8ee992ce8c5cbdb1ea2c98f209ca9555"
  },
  {
    "url": "category/Thinking/note/Lijiacheng_story.html",
    "revision": "1616baadfac5967386d8ba9fed3f33c3"
  },
  {
    "url": "category/Thinking/note/Mckinsey_way.html",
    "revision": "e0556e6a2935b42b265fac7e98386244"
  },
  {
    "url": "category/Thinking/note/NeizaiDongji.html",
    "revision": "539b7d8fee6de1d321bca7f65ce1b7d2"
  },
  {
    "url": "category/Thinking/note/Survival_guide.html",
    "revision": "4ae7d0071aa146a51863926a8096a4d9"
  },
  {
    "url": "category/Thinking/paper_submit.html",
    "revision": "14669b79ddc6cd29564db74f6064e739"
  },
  {
    "url": "category/Thinking/philosophy.html",
    "revision": "4d609ef8367e8de814d00e3f84ebbf94"
  },
  {
    "url": "category/Thinking/psychology.html",
    "revision": "649469680dcf75d1f19088bf36c766d7"
  },
  {
    "url": "category/Thinking/travel/index.html",
    "revision": "06acf9eb2f6d2923eee412f056160a3f"
  },
  {
    "url": "category/Thinking/travel/Tianjin.html",
    "revision": "8c17b1acc91cceff0b87b416ebe30db7"
  },
  {
    "url": "img/彭于晏-底气十足.jpg",
    "revision": "35efbae6a382732cc0694d04ee278939"
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
    "url": "img/leetcode/niudunfa.jpeg",
    "revision": "0d44ee5c9ce73ee001656f40aa5e6583"
  },
  {
    "url": "img/leetcode/sqrt_tidu.jpg",
    "revision": "a47ffd4ba739840d800e4d5a48f26f9b"
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
    "url": "img/torch/line_calc.png",
    "revision": "8be419d0dd5f2b426c0638914d7e1bbd"
  },
  {
    "url": "img/torch/scatter.png",
    "revision": "79ef94a7ba760d1620537d830a872169"
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
    "revision": "f9136ad781fdb871d067da710fc529bb"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "8f014d601fceb43b90c44bcd76930514"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "815a8676b41b7003ee04735fe1f4186c"
  },
  {
    "url": "tag/计算机视觉/index.html",
    "revision": "e6791aa526240983bf52b8082673d443"
  },
  {
    "url": "tag/论文投稿/index.html",
    "revision": "9f4a4e4ba718a853ca2ae189e57eac32"
  },
  {
    "url": "tag/模型评价/index.html",
    "revision": "3302d327e121ea6ba3e9bb8f27bd3802"
  },
  {
    "url": "tag/人脸识别/index.html",
    "revision": "f4032821762ed4f71e45147299b31323"
  },
  {
    "url": "tag/神经网络/index.html",
    "revision": "362f62ad2d919d36841ba307f63d2e15"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "7efd408d7b9315a23e143f65f932e485"
  },
  {
    "url": "tag/数学/index.html",
    "revision": "0cd3f44cf28374d35e22a1eb7714af6c"
  },
  {
    "url": "tag/搜索/index.html",
    "revision": "f9ca5dc84479c623baa5148e0f23310e"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "dee2671e35d1f80aa6ce0db939048cd8"
  },
  {
    "url": "tag/文学/index.html",
    "revision": "5551d93e440e2afdaa4e5d5cef5776c8"
  },
  {
    "url": "tag/心理学/index.html",
    "revision": "ebd7505a517b522834df8dc975b58ea4"
  },
  {
    "url": "tag/意图识别/index.html",
    "revision": "3dcfaf37cd52d50e456770e479a2bb2b"
  },
  {
    "url": "tag/游记/index.html",
    "revision": "6b584d361ad9c99ea88ae07519cfafa9"
  },
  {
    "url": "tag/哲学/index.html",
    "revision": "f406ce18b4a05534baf58b6d66f6bb67"
  },
  {
    "url": "tag/c++/index.html",
    "revision": "f9840a031b25670f72af4b5e6e48a769"
  },
  {
    "url": "tag/index.html",
    "revision": "d678f4a1ec27081e1e4ebcc67533648a"
  },
  {
    "url": "tag/leetcode/index.html",
    "revision": "98083351fe836a116827205c85c41469"
  },
  {
    "url": "tag/life/index.html",
    "revision": "524787f9f5c6470a92871a6a585630f3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3de1dc3984b8b43e23b159f2ee22ae44"
  },
  {
    "url": "tag/love/index.html",
    "revision": "15917036cec732287f047f51dc5928e2"
  },
  {
    "url": "tag/nlp/index.html",
    "revision": "3375cb3d49664522c3d78e29a9592c21"
  },
  {
    "url": "tag/note/index.html",
    "revision": "36548c50d1f34f3dd7a883902a726d1d"
  },
  {
    "url": "tag/php/index.html",
    "revision": "50f4e120722d83dca3e1cda7786e0288"
  },
  {
    "url": "tag/python/index.html",
    "revision": "0302b920c9b632644777b781d3c62360"
  },
  {
    "url": "tag/PyTorch/index.html",
    "revision": "92273fc056acbf1fb3b036dcc0cb4a6b"
  },
  {
    "url": "tag/re/index.html",
    "revision": "933a97cbd66504f9739749edb4be292b"
  },
  {
    "url": "tag/Shell/index.html",
    "revision": "5880d61870d663cc7b4af771278095cb"
  },
  {
    "url": "tag/Tensor/index.html",
    "revision": "2383829ccdff9eb62ca5fcecb6824fef"
  },
  {
    "url": "tag/vim/index.html",
    "revision": "afc8a3fd60b9779a39c901890df58f44"
  },
  {
    "url": "tag/word embedding/index.html",
    "revision": "8c85d7c8c1b843923451abf069f073d1"
  },
  {
    "url": "tag/word2vec/index.html",
    "revision": "68c510437cc5a5a14df97a268aa0f7d7"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e5bb2d17bed60113e2ac06d769a9b41"
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
