!function(n){function e(e){for(var t,l,c=e[0],s=e[1],u=e[2],f=e[3]||[],m=0,p=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t]);for(d&&d(e),i.push.apply(i,f);p.length;)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var n,e=0;e<a.length;e++){for(var r=a[e],t=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(t=!1)}t&&(a.splice(e--,1),n=c(c.s=r[0]))}return 0===a.length&&(i.forEach((function(n){if(void 0===o[n]){o[n]=null;var e=document.createElement("link");c.nc&&e.setAttribute("nonce",c.nc),e.rel="prefetch",e.as="script",e.href=l(n),document.head.appendChild(e)}})),i.length=0),n}var t={},o={2:0},a=[],i=[];function l(n){return c.p+""+({0:"home",1:"how-it-works",3:"not-found",4:"practice",5:"resources",6:"vendors~home"}[n]||n)+"."+{0:"d919f8d00248c0dbc65d",1:"2bcc9867add28f6608c3",3:"644f7e0f13930daf2047",4:"84eb1e1e1fd7c2ee582f",5:"d41c0f37e983ec0dc8b5",6:"c2385e2bf919d17eb9b5"}[n]+".js"}function c(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(n){var e=[],r=o[n];if(0!==r)if(r)e.push(r[2]);else{var t=new Promise((function(e,t){r=o[n]=[e,t]}));e.push(r[2]=t);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=l(n);var s=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(u);var r=o[n];if(0!==r){if(r){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+t+": "+a+")",s.name="ChunkLoadError",s.type=t,s.request=a,r[1](s)}o[n]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},c.m=n,c.c=t,c.d=function(n,e,r){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)c.d(r,t,function(e){return n[e]}.bind(null,t));return r},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c.oe=function(n){throw console.error(n),n};var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=u,m=(a.push([33,7]),r());e([[],{},0,[1,4,5,3]])}([,,,,,,,,,,function(n,e,r){"use strict";r.d(e,"a",(function(){return b})),r.d(e,"b",(function(){return h})),r.d(e,"d",(function(){return _})),r.d(e,"e",(function(){return x})),r.d(e,"c",(function(){return v}));var t=r(11),o=r(0),a=r.n(o),i=r(14),l=r(17),c=r(8),s=r.n(c),u=r(25),f={insert:"head",singleton:!1},d=(s()(u.a,f),u.a.locals||{}),m=function(){return a.a.createElement("div",{className:d["loading-container"]},a.a.createElement(l.a,{icon:i.b,className:d["loading-svg"],spin:!0}),a.a.createElement("h1",null,"Loading..."))},p=Object(t.a)((function(){return Promise.all([r.e(6),r.e(0)]).then(r.bind(null,337))}),{resolveComponent:function(n){return n.Home},fallback:a.a.createElement(m,null)}),b=function(){return a.a.createElement(p,null)},g=Object(t.a)((function(){return r.e(1).then(r.bind(null,334))}),{resolveComponent:function(n){return n.HowItWorks},fallback:a.a.createElement(m,null)}),h=function(){return a.a.createElement(g,null)},y=Object(t.a)((function(){return r.e(3).then(r.bind(null,338))}),{resolveComponent:function(n){return n.NotFound},fallback:a.a.createElement(m,null)}),v=function(){return a.a.createElement(y,null)},w=Object(t.a)((function(){return r.e(4).then(r.bind(null,336))}),{resolveComponent:function(n){return n.Practice},fallback:a.a.createElement(m,null)}),_=function(){return a.a.createElement(w,null)},k=Object(t.a)((function(){return r.e(5).then(r.bind(null,335))}),{resolveComponent:function(n){return n.Resources},fallback:a.a.createElement(m,null)}),x=function(){return a.a.createElement(k,null)}},,,function(n,e,r){"use strict";var t=r(8),o=r.n(t),a=r(21),i={insert:"head",singleton:!1};o()(a.a,i);e.a=a.a.locals||{}},,,,,,,,function(n,e,r){"use strict";var t=r(9),o=r.n(t)()((function(n){return n[1]}));o.push([n.i,"/* Accessibility outline for people navigating with keyboards \r\n    (See links below for more details)\r\n    https://www.a11yproject.com/posts/2013-01-25-never-remove-css-outlines/\r\n\r\n    https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\r\n*/\r\n._23OcgRTTRvfDI3osXrS-gy:focus {\r\n  /* Provide a fallback style for browsers\r\n     that don't support :focus-visible */\r\n  outline: none;\r\n  background: lightgrey;\r\n}\r\n\r\n._23OcgRTTRvfDI3osXrS-gy:focus:not(:focus-visible) {\r\n  /* Remove the focus indicator on mouse-focus for browsers\r\n     that do support :focus-visible */\r\n  background: transparent;\r\n}\r\n\r\n._23OcgRTTRvfDI3osXrS-gy:focus-visible {\r\n  /* Draw a very noticeable focus style for\r\n     keyboard-focus on browsers that do support\r\n     :focus-visible */\r\n  outline: 4px dashed darkorange;\r\n  background: transparent;\r\n}",""]),o.locals={outline:"_23OcgRTTRvfDI3osXrS-gy"},e.a=o},function(n,e,r){"use strict";var t=r(9),o=r.n(t)()((function(n){return n[1]}));o.push([n.i,"/* Once mobile navbar is toggle, use this class to hide the scrollbar */\r\n._3CSS7pPQsqYTsiAzu619Lz {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Black background color for header */\r\n._37OURM_bdaho75yL2QRbBj {\r\n  background-color: hsl(224, 15%, 19%);\r\n}\r\n\r\n._2yI5Wq6psBzBVXXg3Dw3hh {\r\n  display: none;\r\n}\r\n\r\n._1OsOQtAt_wX6AR1ZtHsNFH {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  button._2yI5Wq6psBzBVXXg3Dw3hh {\r\n    background-color: inherit;\r\n    border: none;\r\n    color: white;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n  ._2yI5Wq6psBzBVXXg3Dw3hh {\r\n    display: block;\r\n    position: relative;\r\n  }\r\n\r\n  ._1OsOQtAt_wX6AR1ZtHsNFH {\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background: #25282b;\r\n    position: fixed;\r\n    display: flex;\r\n    align-items: baseline;\r\n    flex-flow: column nowrap;\r\n    font-size: 1.5em;\r\n    transition: transform 200ms ease-out;\r\n    transform: translateX(-100%);\r\n  }\r\n\r\n  ._2bTZ7mxY1SAtXtKlUWc3Ji {\r\n    transform: translateX(0);\r\n    transition: transform 250ms cubic-bezier(0.0, 0.0, 0.2, 1);\r\n  }\r\n\r\n  ._2f6UBLV29Tkki7GoE82XQV {\r\n    margin: 30% 0 0 5%;\r\n  }\r\n}\r\n\r\n._35YaOymSD5Wavj4UHxT1A- {\r\n  width: 100%;\r\n  max-width: 1100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding: 1.2rem 3.2rem;\r\n}\r\n\r\n.LSuyD-ShX0Oa1H_cErxmm {\r\n  display: flex;\r\n  font-family: 'VT323', monospace;\r\n  font-size: 2.2rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 6rem;\r\n}\r\n\r\n._2FPGQf5upRVQigkHbOUzkH {\r\n  flex: 1 1 0%;\r\n  display: flex;\r\n  align-items: baseline;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  ._2FPGQf5upRVQigkHbOUzkH {\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n}\r\n\r\n/* Bits text logo style */\r\n.pWI4jOBJWyZR_zgJyfUDj {\r\n  color: hsl(46, 79%, 56%);\r\n  font-size: 2.4rem;\r\n  letter-spacing: 1px;\r\n  margin-right: 3.2rem;\r\n}\r\n\r\n.nf_DdeRqSERWH17T5joHa {\r\n  display: flex;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .nf_DdeRqSERWH17T5joHa {\r\n    display: none;\r\n  }\r\n}\r\n\r\n._22iP2DJ7gcDFHBYyeWFGZw {\r\n  margin: 1rem;\r\n}\r\n\r\n._3ZCBfU7Ww8Uv8K5gXXqBIf {\r\n  margin: 1rem;\r\n  position: relative;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  ._3ZCBfU7Ww8Uv8K5gXXqBIf {\r\n    font-size: 1.75em;\r\n  }\r\n}\r\n\r\n/* Yellow underline styles */\r\n._3ZCBfU7Ww8Uv8K5gXXqBIf::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  width: 0%;\r\n  height: 2px;\r\n  margin-top: 5px;\r\n  background: hsl(46, 79%, 56%);\r\n  transition: width .5s ease-in-out;\r\n}\r\n\r\n/* Expand yellow underline on hover */\r\n._3ZCBfU7Ww8Uv8K5gXXqBIf:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  ._3ZCBfU7Ww8Uv8K5gXXqBIf::after {\r\n    display: none;\r\n  }\r\n}\r\n\r\n._1DDnLMnrVrEOtvRQXFQHV- {\r\n  display: flex;\r\n  align-items: baseline;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  ._1DDnLMnrVrEOtvRQXFQHV- {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/* Light bulb styles */\r\n._2_7yOLvGANoow7T-T1U3CI {\r\n  background-color: rgba(0,0,0,0.7);\r\n  border-radius: 0.75em;\r\n  box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.3) inset;\r\n  color: #fdea7b;\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin: auto;\r\n  padding: 0.15em;\r\n  width: 3em;\r\n  height: 1.5em;\r\n  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n._2_7yOLvGANoow7T-T1U3CI:before, ._2_7yOLvGANoow7T-T1U3CI:after {\r\n  content: \"\";\r\n  display: block;\r\n}\r\n\r\n._2_7yOLvGANoow7T-T1U3CI:before {\r\n  background-color: #d7d7d7;\r\n  border-radius: 50%;\r\n  width: 1.2em;\r\n  height: 1.2em;\r\n  transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;\r\n  z-index: 1;\r\n}\r\n\r\n._2_7yOLvGANoow7T-T1U3CI:after {\r\n  background: \r\n    linear-gradient(transparent 50%, rgba(0,0,0,0.15) 0) 0 50% / 50% 100%,\r\n    repeating-linear-gradient(90deg,#bbb 0,#bbb,#bbb 20%,#999 20%,#999 40%) 0 50% / 50% 100%,\r\n    radial-gradient(circle at 50% 50%,#888 25%, transparent 26%);\r\n  background-repeat: no-repeat;\r\n  border: 0.25em solid transparent;\r\n  border-left: 0.4em solid #d8d8d8;\r\n  border-right: 0 solid transparent;\r\n  transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;\r\n  transform: translateX(-22.5%);\r\n  transform-origin: 25% 50%;\r\n  width: 1.2em;\r\n  height: 1em;\r\n}\r\n\r\n/* Checked */\r\n._2_7yOLvGANoow7T-T1U3CI:checked {\r\n  background-color: rgba(0,0,0,0.45);\r\n  box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.1) inset;\r\n}\r\n\r\n._2_7yOLvGANoow7T-T1U3CI:checked:before {\r\n  background-color: currentColor;\r\n  transform: translateX(125%)\r\n}\r\n\r\n._2_7yOLvGANoow7T-T1U3CI:checked:after {\r\n  border-left-color: currentColor;\r\n  transform: translateX(-2.5%) rotateY(180deg);\r\n}",""]),o.locals={"hide-scrollbar":"_3CSS7pPQsqYTsiAzu619Lz",container:"_37OURM_bdaho75yL2QRbBj","mobile-nav-toggler":"_2yI5Wq6psBzBVXXg3Dw3hh","mobile-nav":"_1OsOQtAt_wX6AR1ZtHsNFH","mobile-nav--open":"_2bTZ7mxY1SAtXtKlUWc3Ji","items-container":"_2f6UBLV29Tkki7GoE82XQV",navigation:"_35YaOymSD5Wavj4UHxT1A-",header:"LSuyD-ShX0Oa1H_cErxmm",header__left:"_2FPGQf5upRVQigkHbOUzkH","header__left--logo":"pWI4jOBJWyZR_zgJyfUDj",nav__list:"nf_DdeRqSERWH17T5joHa","nav__list-item":"_22iP2DJ7gcDFHBYyeWFGZw",nav__link:"_3ZCBfU7Ww8Uv8K5gXXqBIf",header__right:"_1DDnLMnrVrEOtvRQXFQHV-","light-bulb":"_2_7yOLvGANoow7T-T1U3CI"},e.a=o},,,function(n,e,r){"use strict";var t=r(9),o=r.n(t)()((function(n){return n[1]}));o.push([n.i,"._3kk6r4NfpnQDXoiptoJDju {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  height: 80%;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n._3kk6r4NfpnQDXoiptoJDju h1 {\r\n  font-size: 2.25em;\r\n  letter-spacing: 1.2px;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.Kp0lk4qBZVMs8uL8j-9zD {\r\n  font-size: 4em;\r\n}",""]),o.locals={"loading-container":"_3kk6r4NfpnQDXoiptoJDju","loading-svg":"Kp0lk4qBZVMs8uL8j-9zD"},e.a=o},function(n,e,r){"use strict";var t=r(9),o=r.n(t)()((function(n){return n[1]}));o.push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/* ------------ End of CSS Reset ------------ */\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  /* hsl(209, 56%, 92%) */\r\n  background-color: hsl(200, 12%, 95%);\r\n  display: flex;\r\n  font-size: 62.5%;\r\n  min-height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-flow: column nowrap;\r\n  font: 16px/1.65 system-ui, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,\r\n    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\r\n  font-size: 1.6em;\r\n  line-height: 1.65;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  body::-webkit-scrollbar {\r\n    background-color: hsl(215, 14%, 34%);\r\n    width: 1.4rem;\r\n  }\r\n  \r\n  body::-webkit-scrollbar-track {\r\n    background: transparent;\r\n    border-radius: 0.3rem;\r\n  }\r\n  \r\n  body::-webkit-scrollbar-thumb {\r\n    background-color:  hsl(218, 11%, 65%);\r\n    border-radius: 0.5rem;\r\n  }\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\nlegend {\r\n  position: relative;\r\n  font-size: 2.4rem;\r\n  font-weight: 600;\r\n  padding: 2.4rem 0;\r\n}\r\n\r\nlabel {\r\n  font-size: 1.6rem;\r\n  color: hsl(201, 23%, 34%);\r\n}\r\n\r\ncode {\r\n  background-color: hsl(0, 0%, 87%);\r\n  padding: 0 3px;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  margin: 2.4rem;\r\n}\r\n\r\n/* On Firefox, font-weight: 500 is noticeably lighter. 550 fixes that.*/\r\nstrong {\r\n  font-weight: 550;\r\n}\r\n\r\nsvg {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n#root {\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  height: 100%\r\n}\r\n\r\n._3LUjvKZnA3EVhHe_TnsRT {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-flow: column nowrap;\r\n  position: relative;\r\n}",""]),o.locals={main:"_3LUjvKZnA3EVhHe_TnsRT"},e.a=o},,,,function(n,e,r){"use strict";(function(n){r.d(e,"a",(function(){return g}));var t=r(0),o=r.n(t),a=r(12),i=r(2),l=r(32),c=r(10),s=r(31);function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function f(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function d(n,e){return(d=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function m(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,t=b(n);if(e){var o=b(this).constructor;r=Reflect.construct(t,arguments,o)}else r=t.apply(this,arguments);return p(this,r)}}function p(n,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function b(n){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var g=function(e){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&d(n,e)}(b,e);var r,t,u,p=m(b);function b(n){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),p.call(this,n)}return r=b,(t=[{key:"render",value:function(){return o.a.createElement(a.a,{basename:n.env.PUBLIC_URL},o.a.createElement(l.a,null),o.a.createElement("main",{className:s.a.main},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/"},o.a.createElement(c.a,null)),o.a.createElement(i.a,{path:"/how-it-works"},o.a.createElement(c.b,null)),o.a.createElement(i.a,{path:"/practice"},o.a.createElement(c.d,null)),o.a.createElement(i.a,{path:"/resources"},o.a.createElement(c.e,null)),o.a.createElement(i.a,{path:"*"},o.a.createElement(c.c,null)))))}}])&&f(r.prototype,t),u&&f(r,u),b}(o.a.Component)}).call(this,r(27))},function(n,e,r){"use strict";var t=r(8),o=r.n(t),a=r(26),i={insert:"head",singleton:!1};o()(a.a,i);e.a=a.a.locals||{}},function(n,e,r){"use strict";var t=r(14),o=r(17),a=r(0),i=r.n(a),l=r(12),c=r(13),s=r(8),u=r.n(s),f=r(22),d={insert:"head",singleton:!1},m=(u()(f.a,d),f.a.locals||{});function p(n){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function b(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function g(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function h(n,e){return(h=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function y(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,t=_(n);if(e){var o=_(this).constructor;r=Reflect.construct(t,arguments,o)}else r=t.apply(this,arguments);return v(this,r)}}function v(n,e){return!e||"object"!==p(e)&&"function"!=typeof e?w(n):e}function w(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _(n){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function k(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var x=function(n){return i.a.createElement("li",{className:m["nav__list-item"]},i.a.createElement(l.b,{className:"".concat(c.a.outline," ").concat(m.nav__link),to:n.route,tabIndex:n.tabIndex,onClick:n.onEnterNewPage},n.text))},E=function(){return i.a.createElement(l.b,{className:"".concat(c.a.outline," ").concat(m["header__left--logo"]),to:"/"},i.a.createElement("span",null,"Bits"))},O=function(){return i.a.createElement("div",{className:m.header__right},i.a.createElement("input",{className:"".concat(c.a.outline," ").concat(m["light-bulb"]),type:"checkbox"}))},T=function(n){return i.a.createElement("button",{"aria-label":n.iconToggle?"Close menu":"Open menu",onClick:n.onClick,className:"".concat(c.a.outline," ").concat(m["mobile-nav-toggler"])},i.a.createElement(o.a,{icon:n.iconToggle?t.c:t.a}))},j=function(n){var e=n.item;return i.a.createElement("div",{className:m.container},i.a.createElement("div",{className:m.navigation},i.a.createElement("header",{className:m.header},i.a.createElement("div",{className:m.header__left},i.a.createElement(E,null),i.a.createElement("nav",null,i.a.createElement(T,{onClick:n.onClick,iconToggle:n.iconToggle}),i.a.createElement("ul",{className:m.nav__list},e.map((function(n,e){return i.a.createElement(x,{key:e,route:n.route,text:n.text})}))))),i.a.createElement(O,null))))},R=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&h(n,e)}(a,n);var e,r,t,o=y(a);function a(){var n;b(this,a);for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return k(w(n=o.call.apply(o,[this].concat(r))),"state",{isToggled:!1}),k(w(n),"navData",{item:[{route:"/how-it-works",text:"How it works"},{route:"/practice",text:"Practice"},{route:"/resources",text:"Resources"}]}),k(w(n),"toggleNavigation",(function(e){e.stopPropagation(),setTimeout((function(){n.setState((function(n){return{isToggled:!n.isToggled}}),(function(){n.state.isToggled?document.body.classList.add(m["hide-scrollbar"]):document.body.classList.remove(m["hide-scrollbar"])}))}),10)})),k(w(n),"removeMobileNavigation",(function(e){e.stopPropagation(),n.setState((function(n){return{isToggled:!n.isToggled}}),(function(){n.state.isToggled?document.body.classList.add(m["hide-scrollbar"]):document.body.classList.remove(m["hide-scrollbar"])}))})),n}return e=a,(r=[{key:"render",value:function(){var n=this,e=this.navData.item,r=this.state.isToggled;return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"".concat(m["mobile-nav"]," \n                                    ").concat(r?m["mobile-nav--open"]:""),"aria-label":"Mobile navigation"},i.a.createElement("ul",{className:m["items-container"]},e.map((function(e,t){return i.a.createElement(x,{key:t,route:e.route,text:e.text,onEnterNewPage:n.removeMobileNavigation,tabIndex:r?0:-1})})),i.a.createElement(O,null))),i.a.createElement(j,{item:e,iconToggle:r,onClick:this.toggleNavigation}))}}])&&g(e.prototype,r),t&&g(e,t),a}(i.a.Component);e.a=R},function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t),a=r(29),i=r.n(a),l=r(30);i.a.render(o.a.createElement(l.a,null),document.getElementById("root"))}]);