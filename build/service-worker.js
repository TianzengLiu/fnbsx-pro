"use strict";var precacheConfig=[["/index.html","35277c1cc3848b513f1d26a0682ecdd0"],["/static/css/main.239dceb4.css","1e19ca3dba1330d05d40dcd622903f4f"],["/static/js/main.130e50d8.js","dae9bc3c845a1f1be264e1cc386fd085"],["/static/media/Brendan.e856d280.jpeg","e856d280fc55639ab7f19eb6a3703b3a"],["/static/media/FanbaseHeader.69dbf3e7.jpg","69dbf3e75185be359a165d3e89ce812a"],["/static/media/Ron.6868e109.jpg","6868e1099806206623a469d1da8b9238"],["/static/media/Thedrumsetonthestage2.ca7f261f.jpg","ca7f261f75c1b447244129c1a28a54b5"],["/static/media/auction2.f21c9486.jpg","f21c948688927b5271e5436f8aae5461"],["/static/media/bg0.3544bca8.jpg","3544bca8c7c4be60fa37674773fddde4"],["/static/media/bg10.463b2448.jpg","463b2448faf24247c42276cfeabd2669"],["/static/media/bg5.0b37f7db.jpg","0b37f7db5bf7d7c1b023360ed53db140"],["/static/media/bg9.7d2facc5.jpg","7d2facc52e51e6dd0969bd739e767ccb"],["/static/media/blank.403fa261.jpg","403fa261f3c87212fb5cfbd853d7f407"],["/static/media/coffee611.129f59b9.jpeg","129f59b92b76c7c1a1f5604d247cc9ed"],["/static/media/completeVerify.42046ca1.png","42046ca1135d10e278dc3d1a1dcf6908"],["/static/media/dash.3cb9e4bc.png","3cb9e4bc21e200505752ec4485850f6f"],["/static/media/dg2.95ba7a9d.jpg","95ba7a9d41c08bc1a06647a4bafa265e"],["/static/media/dg3.4efced2e.jpg","4efced2e76e3312173f2cc4f601fe4e3"],["/static/media/donut.0fa1d300.png","0fa1d300a1e6463f96998296da6778e9"],["/static/media/ethereumLogo.4c3773f5.png","4c3773f5b00aeb37d43517517ccf631c"],["/static/media/eytan.d6faffdc.jpg","d6faffdc5c4201ffde6ac86268d766d9"],["/static/media/f-in-blue1.29584b37.png","29584b37febdd3b2d3a5c836ff0e82bc"],["/static/media/film2.8449e1ea.jpg","8449e1eada3e506ffda63976e25a13a0"],["/static/media/flags.7cfe2786.png","7cfe278676bdae748e97ea891670bfc6"],["/static/media/flags@2x.c03843db.png","c03843db66eddc733e62d6e7146a4571"],["/static/media/getStartedImage.9bcacfdd.png","9bcacfddbb04957bb75c4c876969ecb9"],["/static/media/litecoin.e08b580c.png","e08b580c3a8c61254f95df1dbf8ee2f1"],["/static/media/logoColor.ff2db3d2.png","ff2db3d2a701103c25c622a1732e7760"],["/static/media/logoSW.645139a4.png","645139a43316ed4dc0af32e52aaf77a9"],["/static/media/monero.cdbfb6c4.png","cdbfb6c4488b55b2f3f7ad3be55c7421"],["/static/media/music611.53fad534.jpeg","53fad534e7b2833b07bf9d6e1c62b560"],["/static/media/neo.b2965c13.png","b2965c13065d6d522f0d5dee87cd2cc5"],["/static/media/newspaper.e353ff89.jpg","e353ff89d618dd45417aee4e4aa324cc"],["/static/media/noReferrals.801f44b9.png","801f44b947c39b7582fae38987ecdda9"],["/static/media/office2.b57d6529.jpg","b57d6529d7bf206638c40c075511f89d"],["/static/media/pendingVerification.495afe30.png","495afe30613ed623dd5e7ee7595900ba"],["/static/media/ripple.66c6fe81.png","66c6fe81e782320bfa8994b3768b3421"],["/static/media/tianzengliu.f1e21f9d.jpg","f1e21f9d9cc2868387224e851b656baa"],["/static/media/verge.34c800d2.png","34c800d25aa2bb2756b7208d36f1070f"],["/static/media/zcash.07d3dd61.png","07d3dd61087f822134f718faf909d659"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});