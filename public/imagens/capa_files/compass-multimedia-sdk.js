var e,t,n={571:(e,t,n)=>{var r;n.d(t,{Z:()=>u});var o=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=[],d=0;d<256;++d)a.push((d+256).toString(16).substr(1));const l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&i.test(e)}(n))throw TypeError("Stringified UUID is invalid");return n},u=function(e,t,n){var r=(e=e||{}).random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return l(r)}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}};return n[e](s,s.exports,o),s.exports}o.m=n,o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"fcd9e06dab4f1db1b7d9.js",o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@marfeel/compass-multimedia-sdk:",o.l=(n,r,s,i)=>{if(e[n])e[n].push(r);else{var a,d;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+s){a=c;break}}a||(d=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+s),a.src=n),e[n]=[r];var h=(t,r)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="https://sdk.mrf.io/statics/",(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=s);var i=o.p+o.u(t),a=new Error;o.l(i,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",a.name="ChunkLoadError",a.type=s,a.request=i,r[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,s,[i,a,d]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);d&&d(o)}for(t&&t(n);l<i.length;l++)s=i[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0},n=self.webpackChunk_marfeel_compass_multimedia_sdk=self.webpackChunk_marfeel_compass_multimedia_sdk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}const n=marfeel;function r(e){return"analytics_storage"===e?"cookies":e}var s=function(e){return e.READY="ready",e.ANSWERED="answered",e}(s||{});class i{constructor(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t(this,"onChangeCallbacks",void 0),t(this,"onReadyCallbacks",void 0),t(this,"consent",void 0),t(this,"features",void 0),t(this,"state",void 0),t(this,"isEnabled",void 0),this.consent=e,this.features={},this.onReadyCallbacks=[],this.onChangeCallbacks=[],this.isEnabled=!0,e&&(this.state=s.ANSWERED)}isInitiated(){return arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?!this.isEnabled||this.state===s.READY||this.state===s.ANSWERED:!this.isEnabled||this.state===s.ANSWERED}setCMPLoaded(){this.state||(this.state=s.READY);var e=this.onReadyCallbacks.slice();this.onReadyCallbacks=[],e.forEach((e=>e()))}setCMPNotApplies(){this.isEnabled=!1,this.consent=!0,this.setCMPLoaded()}isActive(){return this.isEnabled}onReady(e){this.isInitiated(!1)?e():this.onReadyCallbacks.push(e)}onChange(e){var t;null===(t=this.onChangeCallbacks)||void 0===t||t.push(e)}callOnChange(){this.onChangeCallbacks.forEach((e=>e()))}getConsent(e){return e&&this.features&&void 0!==this.features[e]?this.features[e]:this.consent}setConsentFeatures(e){e.forEach((e=>{var{feature:t,consent:n}=e;this.features[r(t)]=n})),this.state||this.setCMPLoaded(),this.callOnChange(),this.state=s.ANSWERED}setConsent(e,t){this.features[r(e)]=t,this.callOnChange()}hasToPromptForConsent(e){e(!1)}hasConsentForVendor(e){return this.getConsent()}hasConsentForPurpose(e){return this.getConsent()}}var a=["tcloaded","useractioncomplete"],d={cookies:{vendors:[943],purposes:[1,7,8,9,10]},personalization:{vendors:[943],purposes:[1,5,6,7,8,9,10]}};class l{constructor(){t(this,"tcData",void 0),t(this,"isReady",!1);var e=()=>{this.isReady=!0};this.onReady(e.bind(this)),this.onChange((t=>{this.tcData=t,null!=t&&t.gdprApplies||e()}).bind(this))}isInitiated(){return arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?this.isReady:!!this.tcData}isActive(){var e;return!(null==this||null===(e=this.tcData)||void 0===e||!e.gdprApplies)}hasToPromptForConsent(e){this.addEventListener((t=>{var n,r,{cmpStatus:o}=t;"loaded"===o&&(null===(n=(r=window).__tcfapi)||void 0===n||n.call(r,"ping",2,(t=>{var{displayStatus:n}=t;return e("disabled"!==n)})))}))}hasConsentForVendor(e){var t,n;return!0===(null===(t=this.tcData)||void 0===t||null===(n=t.vendor)||void 0===n?void 0:n.consents[e])}hasConsentForPurpose(e){var t,n;return!0===(null===(t=this.tcData)||void 0===t||null===(n=t.purpose)||void 0===n?void 0:n.consents[e])}matchRequirements(e){return!!e&&!!this.tcData&&e.vendors.every(this.hasConsentForVendor.bind(this))&&e.purposes.every(this.hasConsentForPurpose.bind(this))}onChange(e){this.addEventListener(((t,n)=>{!n||!a.includes(t.eventStatus)&&t.gdprApplies||e(t)}))}onReady(e){this.isInitiated(!1)?e():this.addEventListener((t=>{var n,r,{cmpStatus:o,listenerId:s}=t;"loaded"===o&&(e(),null===(n=(r=window).__tcfapi)||void 0===n||n.call(r,"removeEventListener",2,(()=>{}),s))}))}getConsent(e){return!(!this.tcData||this.tcData.gdprApplies)||this.matchRequirements(d[e])}addEventListener(e){var t,n;window.__tcfapi?null===(t=(n=window).__tcfapi)||void 0===t||t.call(n,"addEventListener",2,e):setTimeout((()=>this.addEventListener(e)),100)}}function u(e,t,n,r,o,s,i){try{var a=e[s](i),d=a.value}catch(e){return void n(e)}a.done?t(d):Promise.resolve(d).then(r,o)}var c=o(571);function h(){var e;return e=function*(e,t,n,r){var o="".concat("flagConsentReady","_").concat((0,c.Z)());return t.onReady((()=>{!function(e,t,n){if(e){var r=()=>!!t.getConsent("cookies")&&(n(),!0);r()||t.onChange(r)}else n()}(e.blockOnNoConsent,t,(()=>n.resolve(o)))})),!e.blockOnNoConsent&&void 0===e.manualConsent&&r&&setTimeout((()=>n.resolve(o)),r),n.wait(o)},h=function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){u(s,r,o,i,a,"next",e)}function a(e){u(s,r,o,i,a,"throw",e)}i(void 0)}))},h.apply(this,arguments)}class p{constructor(e){t(this,"handler",void 0),this.handler=function(e){return void 0!==e.gdpr&&!e.gdpr||!window.__tcfapi&&!window.gdprAppliesGlobally?new i(!e.manualConsent):new l}(e)}isInitiated(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.handler.isInitiated(e)}isActive(){return this.handler.isActive()}setCMPLoaded(){this.handler.setCMPLoaded()}setCMPNotApplies(){this.handler.setCMPNotApplies()}onChange(e){this.handler.onChange(e)}onReady(e){this.handler.onReady(e)}getConsent(e){return this.handler.getConsent(e)}setConsentFeatures(e,t){this.handler instanceof i||(this.handler=new i),this.handler.setConsentFeatures(e,t)}setConsent(e,t){this.handler instanceof i||(this.handler=new i),this.handler.setConsent(e,t)}hasToPromptForConsent(e){this.handler.hasToPromptForConsent(e)}hasConsentForVendor(e){return this.handler.hasConsentForVendor(e)}hasConsentForPurpose(e){return this.handler.hasConsentForPurpose(e)}}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t,n,r,o,s,i){try{var a=e[s](i),d=a.value}catch(e){return void n(e)}a.done?t(d):Promise.resolve(d).then(r,o)}(0,n.registerSDK)("consent",[],(()=>Promise.resolve(p))),(0,n.registerSDK)("multimedia",["compass","consent","synchronizer"],function(){var e,t=(e=function*(e,t){var n,r,s,[i,a,d]=t;return yield function(e,t,n,r){return h.apply(this,arguments)}(f(f({},e),{},{blockOnNoConsent:!(null===(n=e.multimedia)||void 0===n||!n.providers)&&-1!==(null===(r=e.multimedia)||void 0===r||null===(s=r.providers)||void 0===s?void 0:s.indexOf("youtube"))||e.blockOnNoConsent}),a,d),e.multimedia?o.e(698).then(o.bind(o,698)).then((e=>e.default)):Promise.reject()},function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){y(s,r,o,i,a,"next",e)}function a(e){y(s,r,o,i,a,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}())})();