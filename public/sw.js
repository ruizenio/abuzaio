if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts("fallback-JimRdpco_o7yApuBpH_CS.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JimRdpco_o7yApuBpH_CS/_buildManifest.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/JimRdpco_o7yApuBpH_CS/_ssgManifest.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/66-649185c5aca1eb266c9d.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/754-5442ec7e88b141b7b59d.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/main-dc4781950c1920503772.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/pages/_app-405ff80a87ce99581d0c.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/pages/_offline-a09a86aef59db5950851.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/pages/about-5654cbb6b41b73d90b1e.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/pages/blog-9b0cdbc52e973c5f98cc.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/pages/index-e78325514fdb73232ee7.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/pages/portfolio-3888a5ab0788faab6fbc.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/pages/portfolio/%5Btype%5D-a3e5228d320d51b4d3bd.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/chunks/webpack-70ff542d2e22ae74aeb1.js",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/css/3a25edf0af65243b7e00.css",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_next/static/image/public/icons/whatsapp.be8b84bc4f7e58a555cadcd6110453b2.svg",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/_offline",revision:"JimRdpco_o7yApuBpH_CS"},{url:"/icons/banana.png",revision:"450ec97c20bfaf7d22e69888fd3254f2"},{url:"/icons/check.svg",revision:"e5d4c7d32ccb01485f8e5cb940b2b4b2"},{url:"/icons/email.svg",revision:"5e2d9a75636064af0c4a8f36d1b10fcf"},{url:"/icons/github.svg",revision:"c128f895293c0511fbb84c5c77b0ccf2"},{url:"/icons/twitter.svg",revision:"ea73da8938cc4372ecd9cbc9351f4781"},{url:"/icons/whatsapp.svg",revision:"eca057824a1cbf642c7bfe892aa4ae5a"},{url:"/manifest.json",revision:"e9cb4e35df2f41ec146ef495ffbfd050"},{url:"/pictures/hero.svg",revision:"45bc7bce28dea5b7c285e830b924bf3e"},{url:"/portfolios/al-ashr.png",revision:"ddee8a91734fcfdba6771a8733f06df8"},{url:"/portfolios/art-do.png",revision:"4e03014998a089180dc506d6aa7df632"},{url:"/portfolios/bank-sampah.png",revision:"6831d06be68e410538361faf01ffacd0"},{url:"/portfolios/cepat.png",revision:"df4d6dda1ecc44c153f2c03f387fc308"},{url:"/portfolios/comida.png",revision:"d11285a40af5d31eb4422b3216f04a94"},{url:"/portfolios/cowork.png",revision:"a5cb8adcbc3e5ab9981cf6c04c1bace0"},{url:"/portfolios/digiport.png",revision:"2287c3db83020666534cbe85c0c3a5c3"},{url:"/portfolios/e-library.png",revision:"a46dcf27742bac3c12c41581ace012b3"},{url:"/portfolios/flutix.png",revision:"08a2bfca37c85440389663d5b88128ce"},{url:"/portfolios/fudamiku.png",revision:"bec4f8fa6e7c427ba9b26f206bc2d27a"},{url:"/portfolios/go-hospital.png",revision:"3be9ac834706e00cb4df1b2d12c0b5c0"},{url:"/portfolios/go-web.png",revision:"dcba55f5668444e19112303c88b8e8fd"},{url:"/portfolios/goabsensi.png",revision:"8a7aaf6a04aac3a990200a52617f318b"},{url:"/portfolios/harkit.png",revision:"152f5eb6c8a3e90c29873364ac96e956"},{url:"/portfolios/hc-hospital.png",revision:"b68ab4ebd1e090e90d0e02a48f4dbffa"},{url:"/portfolios/hooda-admin.png",revision:"07ef62e03bb08680a4f48353f5dc40aa"},{url:"/portfolios/hooda.png",revision:"c7a2ddaa10fd1b9cf246628d5761b170"},{url:"/portfolios/hujjah.png",revision:"95c028dae86319767d5aca285daaf173"},{url:"/portfolios/liga-medika.png",revision:"796157d84a752f08166b94a0e209d946"},{url:"/portfolios/multiplaza.png",revision:"ed6f0cc5ce4056138b3c5af2888b3427"},{url:"/portfolios/pld-ui.png",revision:"14f1050c9dfd4d5d20475a7a63cbc449"},{url:"/portfolios/pms.png",revision:"378488944c9cd2398985c58a2ec2c2fb"},{url:"/portfolios/pon-papua.png",revision:"d44e3622d2a29954669771c7a51636a2"},{url:"/portfolios/psm2-kids.png",revision:"0f8097422e827004dad022ae28bd8808"},{url:"/portfolios/resto-serve.png",revision:"7d325f59f2f1a9a9128a52e3c7bf3e6d"},{url:"/portfolios/risetku.png",revision:"fa125e2c2edf15dd9e9f4f5787cc793a"},{url:"/portfolios/savana.png",revision:"e2e33ece40892677f8507c7b7de8c9ba"},{url:"/portfolios/siskomsid.png",revision:"3597cb4dab27140c525c51a73a0487cd"},{url:"/static/icons/android-chrome-192x192.png",revision:"c3ce3aaaa63887c461bf121a4c79bb68"},{url:"/static/icons/android-chrome-384x384.png",revision:"b62efa5b63b93e7b2706753a818cdc8d"},{url:"/static/icons/favicon-16x16.png",revision:"c8825b212b5e4c04c66c8b46ffdaba62"},{url:"/static/icons/favicon-32x32.png",revision:"3b250cca4fa95c5367b06b54422d31f3"},{url:"/static/icons/icon-512x512.png",revision:"1ead1afd6931aa72a17867d4b115b6a3"},{url:"/static/icons/touch-icon-ipad-retina.png",revision:"cbe9e78c250075ce6287a833e8aeaed9"},{url:"/static/icons/touch-icon-ipad.png",revision:"bd7700654d2dccaafb31c71ab2e4f285"},{url:"/static/icons/touch-icon-iphone-retina.png",revision:"196e3643ea9e05f39196f0736204ab47"},{url:"/techstacks/bootstrap.svg",revision:"08dd35f5949b8070f716eda0f8520993"},{url:"/techstacks/codeigniter.svg",revision:"87be3180ec21dbde9144c6010bf9fce9"},{url:"/techstacks/firebase.svg",revision:"f096b882889073ea05d707da5b818ec7"},{url:"/techstacks/flutter.svg",revision:"b06419b1d25c6e8c237448b067328e24"},{url:"/techstacks/golang.svg",revision:"52ea4a823582cbde7960816f39d8d5fa"},{url:"/techstacks/laravel.svg",revision:"a8e7fdba6a907fd616fc67e8f90c95ff"},{url:"/techstacks/material-ui.svg",revision:"6d24b127d448719241f8980edf7e9063"},{url:"/techstacks/midtrans.svg",revision:"0b9e28a76a33a9eabf13177d3d5f1f85"},{url:"/techstacks/next.svg",revision:"c8199613a12ba42fea8f1a04ddea1b9c"},{url:"/techstacks/node.svg",revision:"65c767c9723ef0cbb83fab6c15b9fa3c"},{url:"/techstacks/one-signal.svg",revision:"34ee0a1bf2090662e7157bf6126c56f3"},{url:"/techstacks/react.svg",revision:"a0238dc471e3110f1004685b12852915"},{url:"/techstacks/tailwind.svg",revision:"f04bc4a4ecd4e9baaa8c8a73f845b152"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
