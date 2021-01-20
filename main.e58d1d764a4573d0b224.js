(()=>{"use strict";var e,t,n,r,o,a={6369:(e,t,n)=>{var r=n(7294),o=n(3935),a=n(3727),c=n(5977),l=n(1436),i=n(7625),u=n(2196),s="_3CSS7pPQsqYTsiAzu619Lz",f="_37OURM_bdaho75yL2QRbBj",m="_2yI5Wq6psBzBVXXg3Dw3hh",d="_1OsOQtAt_wX6AR1ZtHsNFH",p="_2bTZ7mxY1SAtXtKlUWc3Ji",b="_2f6UBLV29Tkki7GoE82XQV",h="_35YaOymSD5Wavj4UHxT1A-",y="LSuyD-ShX0Oa1H_cErxmm",g="_2FPGQf5upRVQigkHbOUzkH",v="pWI4jOBJWyZR_zgJyfUDj",E="nf_DdeRqSERWH17T5joHa",w="_22iP2DJ7gcDFHBYyeWFGZw",k="_3ZCBfU7Ww8Uv8K5gXXqBIf",_="_1DDnLMnrVrEOtvRQXFQHV-",O="_2_7yOLvGANoow7T-T1U3CI";function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){return r.createElement("li",{className:w},r.createElement(a.rU,{className:"".concat(u.Z.outline," ").concat(k),to:e.route,tabIndex:e.tabIndex,onClick:e.onEnterNewPage},e.text))},L=function(){return r.createElement(a.rU,{className:"".concat(u.Z.outline," ").concat(v),to:"/"},r.createElement("span",null,"Bits"))},Z=function(){return r.createElement("div",{className:_},r.createElement("input",{className:"".concat(u.Z.outline," ").concat(O),type:"checkbox"}))},B=function(e){return r.createElement("button",{"aria-label":e.iconToggle?"Close menu":"Open menu",onClick:e.onClick,className:"".concat(u.Z.outline," ").concat(m)},r.createElement(i.G,{icon:e.iconToggle?l.NBC:l.xiG}))},U=function(e){var t=e.item;return r.createElement("div",{className:f},r.createElement("div",{className:h},r.createElement("header",{className:y},r.createElement("div",{className:g},r.createElement(L,null),r.createElement("nav",null,r.createElement(B,{onClick:e.onClick,iconToggle:e.iconToggle}),r.createElement("ul",{className:E},t.map((function(e,t){return r.createElement(D,{key:t,route:e.route,text:e.text})}))))),r.createElement(Z,null))))},F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(c,e);var t,n,o,a=N(c);function c(){var e;x(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return A(S(e=a.call.apply(a,[this].concat(n))),"state",{isToggled:!1}),A(S(e),"navData",{item:[{route:"/how-it-works",text:"How it works"},{route:"/practice",text:"Practice"},{route:"/resources",text:"Resources"}]}),A(S(e),"toggleNavigation",(function(t){t.stopPropagation(),setTimeout((function(){e.setState((function(e){return{isToggled:!e.isToggled}}),(function(){e.state.isToggled?document.body.classList.add(s):document.body.classList.remove(s)}))}),10)})),A(S(e),"removeMobileNavigation",(function(t){t.stopPropagation(),e.setState((function(e){return{isToggled:!e.isToggled}}),(function(){e.state.isToggled?document.body.classList.add(s):document.body.classList.remove(s)}))})),e}return t=c,(n=[{key:"render",value:function(){var e=this,t=this.navData.item,n=this.state.isToggled;return r.createElement(r.Fragment,null,r.createElement("nav",{className:"".concat(d," \n                                    ").concat(n?p:""),"aria-label":"Mobile navigation"},r.createElement("ul",{className:b},t.map((function(t,o){return r.createElement(D,{key:o,route:t.route,text:t.text,onEnterNewPage:e.removeMobileNavigation,tabIndex:n?0:-1})})),r.createElement(Z,null))),r.createElement(U,{item:t,iconToggle:n,onClick:this.toggleNavigation}))}}])&&P(t.prototype,n),o&&P(t,o),c}(r.Component),H=n(2168),I="_3kk6r4NfpnQDXoiptoJDju",W="Kp0lk4qBZVMs8uL8j-9zD",X=function(){var e=null;return e=window.matchMedia("(prefers-reduced-motion: reduce)").matches?r.createElement(i.G,{icon:l.IJ7,className:W}):r.createElement(i.G,{icon:l.IJ7,className:W,spin:!0}),r.createElement("div",{className:I},e,r.createElement("h1",null,"Loading..."))},M=(0,H.ZP)((function(){return Promise.all([n.e(351),n.e(177)]).then(n.bind(n,8142))}),{resolveComponent:function(e){return e.Home},fallback:r.createElement(X,null)}),Q=function(){return r.createElement(M,null)},G=(0,H.ZP)((function(){return n.e(681).then(n.bind(n,8631))}),{resolveComponent:function(e){return e.HowItWorks},fallback:r.createElement(X,null)}),V=function(){return r.createElement(G,null)},q=(0,H.ZP)((function(){return n.e(942).then(n.bind(n,6643))}),{resolveComponent:function(e){return e.NotFound},fallback:r.createElement(X,null)}),J=function(){return r.createElement(q,null)},z=(0,H.ZP)((function(){return n.e(904).then(n.bind(n,8141))}),{resolveComponent:function(e){return e.Practice},fallback:r.createElement(X,null)}),K=function(){return r.createElement(z,null)},Y=(0,H.ZP)((function(){return n.e(305).then(n.bind(n,7730))}),{resolveComponent:function(e){return e.Resources},fallback:r.createElement(X,null)}),$=function(){return r.createElement(Y,null)},ee="_3LUjvKZnA3EVhHe_TnsRT",te=n(4155);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=le(e);if(t){var o=le(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ce(this,n)}}function ce(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(i,e);var t,n,o,l=ae(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),l.call(this,e)}return t=i,(n=[{key:"render",value:function(){return r.createElement(a.UT,{basename:te.env.PUBLIC_URL},r.createElement(F,null),r.createElement("main",{className:ee},r.createElement(c.rs,null,r.createElement(c.AW,{exact:!0,path:"/"},r.createElement(Q,null)),r.createElement(c.AW,{path:"/how-it-works"},r.createElement(V,null)),r.createElement(c.AW,{path:"/practice"},r.createElement(K,null)),r.createElement(c.AW,{path:"/resources"},r.createElement($,null)),r.createElement(c.AW,{path:"*"},r.createElement(J,null)))))}}])&&re(t.prototype,n),o&&re(t,o),i}(r.Component);o.render(r.createElement(ie,null),document.getElementById("root"))},2196:(e,t)=>{t.Z={outline:"_23OcgRTTRvfDI3osXrS-gy"}}},c={};function l(e){if(c[e])return c[e].exports;var t=c[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,l),t.loaded=!0,t.exports}l.m=a,l.x=e=>{},l.F={},l.E=e=>{Object.keys(l.F).map((t=>{l.F[t](e)}))},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>(({177:"home",305:"resources",681:"how-it-works",904:"practice",942:"not-found"}[e]||e)+"."+{177:"d5123178581d0558ebb5",305:"3e989af30c182f1d842e",351:"9b3dfe8edcb0eaa9a2b8",681:"55c1a2360d153602781c",904:"0e218ab7c53a3a016b47",942:"593bf8484595232b0358"}[e]+".js"),l.miniCssF=e=>(({177:"home",179:"main",305:"resources",681:"how-it-works",904:"practice",942:"not-found"}[e]||e)+"."+{177:"64067a93beb7ca78c084",305:"31d6cfe0d16ae931b73c",351:"31d6cfe0d16ae931b73c",568:"31d6cfe0d16ae931b73c",681:"31d6cfe0d16ae931b73c",904:"e280414dd3f61a50bf36",942:"fa3c15fe8fdeb3da48ca"}[e]+".css"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="bits:",l.l=(n,r,o,a)=>{if(e[n])e[n].push(r);else{var c,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+o){c=f;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.setAttribute("data-webpack",t+o),c.src=n),e[n]=[r];var m=(t,r)=>{c.onerror=c.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),i&&document.head.appendChild(c)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.p="",n=e=>new Promise(((t,n)=>{var r=l.miniCssF(e),o=l.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var c;if((o=(c=a[r]).getAttribute("data-href"))===e||o===t)return c}})(r,o))return t();((e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)n();else{var c=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=c,i.request=l,o.parentNode.removeChild(o),r(i)}},o.href=t,document.head.appendChild(o)})(e,o,t,n)})),r={179:0},l.f.miniCss=(e,t)=>{r[e]?t.push(r[e]):0!==r[e]&&{177:1,904:1,942:1}[e]&&t.push(r[e]=n(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))},(()=>{var e={179:0},t=[[6369,568]];l.f.j=(t,n)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>{r=e[t]=[n,o]}));n.push(r[2]=o);var a=l.p+l.u(t),c=new Error;l.l(a,(n=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}},l.F.j=t=>{if(!l.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");l.nc&&n.setAttribute("nonce",l.nc),n.rel="prefetch",n.as="script",n.href=l.p+l.u(t),document.head.appendChild(n)}};var n=e=>{},r=(r,o)=>{for(var a,c,i=o[0],u=o[1],s=o[2],f=o[3],m=0,d=[];m<i.length;m++)c=i[m],l.o(e,c)&&e[c]&&d.push(e[c][0]),e[c]=0;for(a in u)l.o(u,a)&&(l.m[a]=u[a]);for(s&&s(l),r&&r(o);d.length;)d.shift()();return f&&t.push.apply(t,f),n()},o=self.webpackChunkbits=self.webpackChunkbits||[];function a(){for(var n,r=0;r<t.length;r++){for(var o=t[r],a=!0,c=1;c<o.length;c++){var i=o[c];0!==e[i]&&(a=!1)}a&&(t.splice(r--,1),n=l(l.s=o[0]))}return 0===t.length&&(l.x(),l.x=e=>{}),n}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var c=l.x;l.x=()=>(l.x=c||(e=>{}),(n=a)())})(),o=l.x,l.x=()=>{var e=o();return[681,904,305,942].map(l.E),e},l.x()})();