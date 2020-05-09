!function(n){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=16)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={formatTime:function(n){var e=void 0,t=void 0;return(e=Math.floor(n/60))>99?"99:99":(t=n%60,(e=e<10?"0"+e:e.toString())+":"+(t=t<10?"0"+t:t.toString()))}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={flip:function(n){"DIV"===n.nodeName?n.parentElement.classList.add("flipped"):"LI"===n.nodeName&&n.classList.add("flipped")},unflip:function(n){"DIV"===n.nodeName?n.parentElement.classList.remove("flipped"):"LI"===n.nodeName&&n.classList.remove("flipped")},shake:function(n){"DIV"===n.nodeName?n.parentElement.classList.add("shake"):"LI"===n.nodeName&&n.classList.add("shake")},unshake:function(n){"DIV"===n.nodeName?n.parentElement.classList.remove("shake"):"LI"===n.nodeName&&n.classList.remove("shake")},highlight:function(n){"DIV"===n.nodeName&&n.classList.add("highlight")},unhighlight:function(n){"DIV"===n.nodeName&&n.classList.remove("highlight")}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var a,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(n,e,t){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),d=null,l=0,c=[],p=t(2);function f(n,e){for(var t=0;t<n.length;t++){var r=n[t],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(x(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(x(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],r={},a=0;a<n.length;a++){var o=n[a],i=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}function m(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,a)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function h(n){var e=document.createElement("style");return n.attrs.type="text/css",g(e,n.attrs),m(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function x(n,e){var t,r,a,o;if(e.transform&&n.css){if(!(o=e.transform(n.css)))return function(){};n.css=o}if(e.singleton){var i=l++;t=d||(d=h(e)),r=w.bind(null,t,i,!1),a=w.bind(null,t,i,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",g(e,n.attrs),m(n,e),e}(e),r=function(n,e,t){var r=t.css,a=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&a;(e.convertToAbsoluteUrls||o)&&(r=p(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,t,e),a=function(){b(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),a=function(){b(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return f(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var i=t[a];(s=o[i.id]).refs--,r.push(s)}n&&f(u(n,e),e);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete o[s.id]}}}};var v,y=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function w(n,e,t,r){var a=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,a);else{var o=document.createTextNode(a),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(o,i[e]):n.appendChild(o)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(o).concat([a]).join("\n")}var i;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<n.length;a++){var i=n[a];"number"==typeof i[0]&&r[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),e.push(i))}},e}},function(n,e,t){(n.exports=t(4)(!1)).push([n.i,'*,\n*::after,\n*::before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n}\n\nbody {\n  padding-top: 10px;\n}\n\nhtml {\n  font-family: "Fredoka One", "Comic Sans MS", "Comic Sans", cursive;\n  font-size: 16px;\n}\n\nli {\n  list-style-type: none;\n}\n\nh1 {\n  color: #ddd;\n  font-size: 2.8rem;\n  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);\n  letter-spacing: 10px;\n}\n\nbody {\n  background: #24c6dc; /* fallback for old browsers */\n  background: -webkit-gradient(\n    linear,\n    left top, right top,\n    from(#514a9d),\n    to(#24c6dc)\n  );\n  background: linear-gradient(\n    to right,\n    #514a9d,\n    #24c6dc\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\n.brand {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 15px 0;\n}\n\n.logo {\n  width: 80px;\n  margin: 0 10px;\n}\n\n.logo img {\n  width: 100%;\n}\n\n.container {\n  width: 90%;\n  max-width: 700px;\n  margin: auto;\n  text-align: center;\n}\n\n.game-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  background: rgba(255, 255, 255, 0.4);\n  padding: 50px;\n  border-radius: 8px;\n  -webkit-box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n          box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n}\n\n.game-form > * {\n  margin-top: 20px;\n  font: inherit;\n}\n\n.game-form > label {\n  color: #333;\n  font-size: 2rem;\n}\n\n.game-form > input {\n  font-size: 2rem;\n  color: #a9220b;\n  text-align: center;\n  background: transparent;\n  border: 0;\n  padding: 12px;\n  border-bottom: 1px solid #111;\n}\n\n.game-form > button {\n  font-size: 1.5rem;\n  letter-spacing: 4px;\n  border: 1px solid #111;\n  border-radius: 8px;\n  padding: 15px;\n  cursor: pointer;\n  -webkit-box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n          box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n  word-wrap: break-word;\n}\n\n.game-form > button.btn-start {\n  background: #0b43a9;\n  color: #ddd;\n}\n\n.game-form > button.btn-leaderboard {\n  background: #e0835d;\n  color: #ddd;\n}\n\n.game-form > button:hover {\n  background: rgb(33, 79, 167);\n}\n\n.game-form > button.btn-leaderboard:hover {\n  background: rgb(219, 119, 80);\n}\n\n.board-container {\n  display: none;\n}\n\n.score-panel {\n  min-width: 120px;\n  border: 1px solid black;\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n          box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n  color: #333;\n  padding: 5px;\n}\n\n.score-panel > div > h2 {\n  padding: 10px 0;\n  font-weight: normal;\n  font-size: 1.2rem;\n}\n\n.score-panel > div > div {\n  font-size: 1.9rem;\n  border-top: 1px solid #333;\n  border-bottom: 1px solid #333;\n  padding: 10px;\n  color: rgb(194, 41, 41);\n}\n\n.score-panel button {\n  background: #dc7424;\n  color: #ddd;\n  padding: 5px;\n  margin: 20px 0;\n  font-size: 1rem;\n  border-radius: 12px;\n  -webkit-box-shadow: 0.5px 0.5px 0.2px 0.2px rgba(0, 0, 0, 0.9);\n          box-shadow: 0.5px 0.5px 0.2px 0.2px rgba(0, 0, 0, 0.9);\n  cursor: pointer;\n}\n\n.score-panel button:hover {\n  background: rgb(218, 131, 65);\n}\n\n.board {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /* flex: 1; */\n  border: 1px solid black;\n  -webkit-perspective: 800px;\n          perspective: 800px;\n  padding: 15px;\n  margin: 0 15px;\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n          box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n}\n\n.modal-container {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(51, 51, 51, 0.5);\n  z-index: 99;\n}\n\n.modal {\n  position: absolute;\n  width: 80%;\n  max-width: 400px;\n  top: 50%;\n  left: 50%;\n  background: #ddd;\n  padding: 30px;\n  border-radius: 8px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n          box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n  word-wrap: break-word;\n}\n\n.modal p {\n  font-size: 1.5rem;\n}\n\n.modal > h3 {\n  color: #333;\n  font-size: 2.5rem;\n  margin: 10px 0;\n}\n\n.modal > button {\n  background: #dc7424;\n  color: #ddd;\n  padding: 15px;\n  margin: 10px;\n  font-size: 1.5rem;\n  border-radius: 12px;\n  -webkit-box-shadow: 1px 1px 0.5px 0.5px rgba(0, 0, 0, 0.9);\n          box-shadow: 1px 1px 0.5px 0.5px rgba(0, 0, 0, 0.9);\n  cursor: pointer;\n}\n\n.modal > button:hover {\n  background: rgb(218, 131, 65);\n}\n\n.card {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 20%;\n          flex: 1 1 20%;\n  /* position: relative; */\n  margin: 4px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transition: -webkit-transform 1s, -webkit-box-shadow 1.5s ease-in-out;\n  transition: -webkit-transform 1s, -webkit-box-shadow 1.5s ease-in-out;\n  transition: transform 1s, box-shadow 1.5s ease-in-out;\n  transition: transform 1s, box-shadow 1.5s ease-in-out, -webkit-transform 1s, -webkit-box-shadow 1.5s ease-in-out;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.card > div {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.75);\n          box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.card > div.front {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.card > div.front img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.card > div,\n.card > div.front img {\n  border-radius: 8px;\n}\n\n.card > div.back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: radial-gradient(\n        circle farthest-side at 0% 50%,\n        #fb1 23.5%,\n        rgba(240, 166, 17, 0) 0\n      )\n      21px 30px,\n    radial-gradient(\n        circle farthest-side at 0% 50%,\n        #b71 24%,\n        rgba(240, 166, 17, 0) 0\n      )\n      19px 30px,\n    linear-gradient(\n        #fb1 14%,\n        rgba(240, 166, 17, 0) 0,\n        rgba(240, 166, 17, 0) 85%,\n        #fb1 0\n      )\n      0 0,\n    linear-gradient(\n        150deg,\n        #fb1 24%,\n        #b71 0,\n        #b71 26%,\n        rgba(240, 166, 17, 0) 0,\n        rgba(240, 166, 17, 0) 74%,\n        #b71 0,\n        #b71 76%,\n        #fb1 0\n      )\n      0 0,\n    linear-gradient(\n        30deg,\n        #fb1 24%,\n        #b71 0,\n        #b71 26%,\n        rgba(240, 166, 17, 0) 0,\n        rgba(240, 166, 17, 0) 74%,\n        #b71 0,\n        #b71 76%,\n        #fb1 0\n      )\n      0 0,\n    linear-gradient(90deg, #b71 2%, #fb1 0, #fb1 98%, #b71 0%) 0 0 #fb1;\n  background-size: 40px 60px;\n  z-index: 1;\n}\n\n.card.flipped {\n  -webkit-transform: rotateY(180deg) translate(0, 0);\n          transform: rotateY(180deg) translate(0, 0);\n  -webkit-box-shadow: 0px 0px 0px 0px rgb(4, 211, 4);\n          box-shadow: 0px 0px 0px 0px rgb(4, 211, 4);\n}\n\n.card.flipped.shake {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  -webkit-transform: rotateY(180deg) translate(0, 0);\n          transform: rotateY(180deg) translate(0, 0);\n}\n\n.highlight {\n  -webkit-animation-name: squash;\n          animation-name: squash;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: rotateY(180deg) translate(-1px, 0);\n            transform: rotateY(180deg) translate(-1px, 0);\n  }\n\n  20%,\n  80% {\n    -webkit-transform: rotateY(180deg) translate(2px, 0);\n            transform: rotateY(180deg) translate(2px, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    -webkit-transform: rotateY(180deg) translate(-4px, 0);\n            transform: rotateY(180deg) translate(-4px, 0);\n  }\n\n  40%,\n  60% {\n    -webkit-transform: rotateY(180deg) translate(4px, 0);\n            transform: rotateY(180deg) translate(4px, 0);\n  }\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: rotateY(180deg) translate(-1px, 0);\n            transform: rotateY(180deg) translate(-1px, 0);\n  }\n\n  20%,\n  80% {\n    -webkit-transform: rotateY(180deg) translate(2px, 0);\n            transform: rotateY(180deg) translate(2px, 0);\n  }\n\n  30%,\n  50%,\n  70% {\n    -webkit-transform: rotateY(180deg) translate(-4px, 0);\n            transform: rotateY(180deg) translate(-4px, 0);\n  }\n\n  40%,\n  60% {\n    -webkit-transform: rotateY(180deg) translate(4px, 0);\n            transform: rotateY(180deg) translate(4px, 0);\n  }\n}\n\n@-webkit-keyframes squash {\n  from {\n    width: 100%;\n    height: 100%;\n  }\n  to {\n    width: 90%;\n    height: 90%;\n  }\n}\n\n@keyframes squash {\n  from {\n    width: 100%;\n    height: 100%;\n  }\n  to {\n    width: 90%;\n    height: 90%;\n  }\n}\n\n.leaderboard-container {\n  background: rgba(255, 255, 255, 0.4);\n  padding: 30px;\n  border-radius: 8px;\n  color: #333;\n  -webkit-box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n          box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.75);\n  display: none;\n}\n\n.leaderboard-container h2 {\n  margin: 20px 0;\n}\n\n.btn-back {\n  padding: 10px;\n  border-radius: 8px;\n  background: #0b43a9;\n  color: #ddd;\n  border: 1px solid #333;\n  font: inherit;\n  cursor: pointer;\n}\n\n.btn-back:hover {\n  background: rgb(33, 79, 167);\n}\n\ntable {\n  margin: auto;\n  width: 90%;\n  background: rgba(255, 255, 255, 0.8);\n}\n\ntable,\nth,\ntd {\n  border: 1px solid #333;\n  border-collapse: collapse;\n  font-size: 1.2rem;\n  padding: 15px;\n}\n\nfooter {\n  max-width: 320px;\n  margin: 0 auto;\n  padding: 20px 0;\n  text-align: center;\n}\n\nfooter p {\n  color: #333;\n}\n\n.social-icon-wrapper {\n  display: inline-block;\n  margin: 10px 5px;\n}\n\n.social-icon {\n  width: 2rem;\n  height: 2rem;\n}\n\n@media screen and (max-width: 800px) {\n  .score-panel > div > div {\n    border-bottom: 0;\n    font-size: 1.9rem;\n  }\n\n  .board {\n    padding: 5px;\n    margin: 0;\n  }\n\n  .leaderboard-container {\n    padding: 15px;\n  }\n  \n  .leaderboard-container h2 {\n    margin: 20px 0;\n  }\n\n  table,\n  th,\n  td {\n    font-size: 1rem;\n    padding: 10px;\n  }\n\n  .modal {\n    padding: 10px;\n  }\n\n  .modal > h3 {\n    font-size: 1.5rem;\n  }\n\n  .modal p {\n    font-size: 1rem;\n  }\n\n  .modal > button {\n    padding: 10px;\n    font-size: 1rem;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .container {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 2.5rem;\n  }\n\n  .logo {\n    width: 100px;\n    margin: 0 10px;\n  }\n\n  .board-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n\n  .game-form > label {\n    font-size: 1.7rem;\n  }\n\n  .game-form > input {\n    font-size: 1.7rem;\n  }\n\n  .game-form > button {\n    font-size: 1.2rem;\n  }\n\n\n  .score-panel {\n    padding: 3px;\n    margin-bottom: 15px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 0;\n  }\n\n  .score-panel > div > div {\n    font-size: 1.7rem;\n  }\n\n  .card {\n    margin: 4px;\n  }\n\n  table,\n  th,\n  td {\n    font-size: 0.8rem;\n    padding: 5px;\n  }\n\n  .modal {\n    padding: 10px;\n  }\n\n  .modal > h3 {\n    font-size: 1.2rem;\n  }\n\n  .modal p {\n    font-size: 0.8rem;\n  }\n\n  .modal button {\n    font-size: 0.8rem;\n  }\n  \n}\n\n@media screen and (max-width: 320px) {\n  .brand {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n  }\n\n  .logo {\n    width: 80px;\n  }\n\n  .game-form {\n    padding: 30px;\n  }\n\n  .game-form > label {\n    font-size: 1.5rem;\n  }\n\n  .game-form > input {\n    font-size: 1.5rem;\n  }\n\n  .game-form > button {\n    font-size: 1rem;\n  }\n\n  .score-panel > div > div {\n    font-size: 1.2rem;\n  }\n\n  .leaderboard-container {\n    padding: 5px;\n  }\n\n  table,\n  th,\n  td {\n    font-size: 0.7rem;\n    padding: 2px;\n  }\n}\n',""])},function(n,e,t){var r=t(5);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,a);r.locals&&(n.exports=r.locals)},function(n,e,t){n.exports=t.p+"src/assets/img/dog-pic-8.jpg?c9db3942121249fc30ef41dd8e8f1732"},function(n,e,t){n.exports=t.p+"src/assets/img/dog-pic-7.jpg?5c714d7a4c0234e0571440e63002b520"},function(n,e,t){n.exports=t.p+"src/assets/img/dog-pic-6.jpg?7aa7c63e9bfe11d5bf8f07998c25e2cf"},function(n,e,t){n.exports=t.p+"src/assets/img/dog-pic-5.jpg?c9785a7c816b8037449a195c87a8383f"},function(n,e,t){n.exports=t.p+"src/assets/img/dog-pic-4.jpg?9bffbaf1eb8375927aa6f62ff47837f0"},function(n,e,t){n.exports=t.p+"src/assets/img/dog-pic-3.jpg?71eefa13049ad8b87c807b5b433f4718"},function(n,e,t){n.exports=t.p+"src/assets/img/dog-pic-2.jpg?b012d6ab44dbf25c8c6bffd5b5474c6a"},function(n,e,t){n.exports=t.p+"src/assets/img/dog-pic-1.jpg?545e2cd5c16882b4ed8d4ceffe68906e"},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=m(t(1)),o=m(t(0)),i=m(t(14)),s=m(t(13)),d=m(t(12)),l=m(t(11)),c=m(t(10)),p=m(t(9)),f=m(t(8)),u=m(t(7));function m(n){return n&&n.__esModule?n:{default:n}}function b(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}var h=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.cards=[{name:"dog-pic-1",imgURL:i.default},{name:"dog-pic-2",imgURL:s.default},{name:"dog-pic-3",imgURL:d.default},{name:"dog-pic-4",imgURL:l.default},{name:"dog-pic-5",imgURL:c.default},{name:"dog-pic-6",imgURL:p.default},{name:"dog-pic-7",imgURL:f.default},{name:"dog-pic-8",imgURL:u.default},{name:"dog-pic-1",imgURL:i.default},{name:"dog-pic-2",imgURL:s.default},{name:"dog-pic-3",imgURL:d.default},{name:"dog-pic-4",imgURL:l.default},{name:"dog-pic-5",imgURL:c.default},{name:"dog-pic-6",imgURL:p.default},{name:"dog-pic-7",imgURL:f.default},{name:"dog-pic-8",imgURL:u.default}],this.boardElement=document.querySelector(".board"),this.scorePanelDivElement=document.querySelector(".score-panel"),this.movesDivElement=this.scorePanelDivElement.querySelector("div.moves"),this.timeDivElement=this.scorePanelDivElement.querySelector("div.time"),this.ratingDivElement=this.scorePanelDivElement.querySelector("div.rating"),this.player=document.querySelector(".input-name").value||"Unknown",this._initialize(),this._handleClickedCard=this._handleClickedCard.bind(this),this._handleRestart=this._handleRestart.bind(this)}return r(n,[{key:"_initialize",value:function(){this.cardsToCheck=[],this.numberOfFlippedCards=0,this.moves=0,this.rating="★★★",this.seconds=0,this.movesDivElement.textContent=this.moves,this.timeDivElement.textContent="00:00",this.ratingDivElement.textContent=this.rating}},{key:"_shuffleCards",value:function(){for(var n=this.cards.length-1,e=void 0,t=void 0;n>=0;)t=Math.floor(Math.random()*n),e=this.cards[n],this.cards[n]=this.cards[t],this.cards[t]=e,n--;return this.cards}},{key:"start",value:function(){this._initialize(),this._shuffleCards(),this._loadCardsToBoard(this.boardElement,this.cards),this._startTimer(),this.boardElement.addEventListener("click",this._handleClickedCard),document.querySelector(".btnReset").addEventListener("click",this._handleRestart)}},{key:"_handleClickedCard",value:function(n){var e=this;n.stopPropagation();var t=n.target;if("DIV"===t.nodeName&&t.parentElement.classList.contains("card")&&t.classList.contains("back")&&!t.parentElement.classList.contains("flipped")&&!(this.cardsToCheck.length>=2)){if(a.default.flip(t),this.cardsToCheck.push(t.parentElement),2===this.cardsToCheck.length)this.moves++,this._checkMatch.apply(this,b(this.cardsToCheck))?this._handleCardMatch.apply(this,b(this.cardsToCheck)):this._handleCardNotMatch.apply(this,b(this.cardsToCheck)),setTimeout(function(){return e.cardsToCheck.length=0},2e3);this._updateScorePanel()}}},{key:"_checkMatch",value:function(n,e){return n.dataset.name===e.dataset.name}},{key:"_handleCardMatch",value:function(n,e){this.numberOfFlippedCards+=2,setTimeout(function(){a.default.highlight(n.querySelector("div.front")),a.default.highlight(e.querySelector("div.front"))},1e3),setTimeout(function(){a.default.unhighlight(n),a.default.unhighlight(e)},1500),16===this.numberOfFlippedCards&&this._displayWinModal()}},{key:"_handleCardNotMatch",value:function(n,e){setTimeout(function(){a.default.shake(n),a.default.shake(e)},1e3),setTimeout(function(){a.default.unshake(n),a.default.unshake(e)},1500),setTimeout(function(){a.default.unflip(n),a.default.unflip(e)},1800)}},{key:"_displayWinModal",value:function(){var n=this;this._stopTimer(),setTimeout(function(){n.boardElement.removeEventListener("click",n._handleClickedCard);var e=document.querySelector(".modal-container");e.querySelector("#player-time").textContent=o.default.formatTime(n.seconds),e.querySelector("#player-rating").textContent=n.rating,document.querySelector(".btnRestart").addEventListener("click",n._handleRestart),document.querySelector(".btnQuit").addEventListener("click",n._handleQuit),e.style.display="block";var t=JSON.parse(localStorage.getItem("MEMORY_GAME_SCORE"))||[];t.push({player:n.player,moves:n.moves,rating:n.rating,seconds:n.seconds}),localStorage.setItem("MEMORY_GAME_SCORE",JSON.stringify(t))},2e3)}},{key:"_handleRestart",value:function(){this._stopTimer();var n=document.querySelector(".modal-container");n.querySelector(".btnRestart").removeEventListener("click",this._handleRestart),n.querySelector(".btnQuit").removeEventListener("click",this._handleQuit),n.style.display="none",this.start()}},{key:"_handleQuit",value:function(){var n=document.querySelector(".modal-container");n.querySelector(".btnRestart").removeEventListener("click",this._handleRestart),n.querySelector(".btnQuit").removeEventListener("click",this._handleQuit),n.style.display="none",document.querySelector(".board-container").style.display="none",document.querySelector(".form-container").style.display="block"}},{key:"_updateScorePanel",value:function(){document.querySelector("div.moves").textContent=this.moves,this.moves>25?this.rating="★":this.moves>16&&(this.rating="★★"),document.querySelector("div.rating").textContent=this.rating}},{key:"_startTimer",value:function(){var n=this;this.timerInterval=setInterval(function(){n.seconds++,document.querySelector("div.time").textContent=o.default.formatTime(n.seconds)},1e3)}},{key:"_stopTimer",value:function(){clearInterval(this.timerInterval)}},{key:"_loadCardsToBoard",value:function(){if(!this.cards.length)throw new Error("There are no card to load");var n=document.querySelector(".modal-container");this.boardElement.innerHTML="";var e=document.createDocumentFragment();this.cards.forEach(function(n){var t=document.createElement("li"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("img");t.classList.add("card"),t.setAttribute("data-name",n.name),o.src=n.imgURL,r.classList.add("front"),r.appendChild(o),t.appendChild(r),a.classList.add("back"),t.appendChild(a),e.appendChild(t)}),this.boardElement.appendChild(e),this.boardElement.appendChild(n)}}]),n}();e.default=h},function(n,e,t){"use strict";o(t(1));var r=o(t(15)),a=o(t(0));function o(n){return n&&n.__esModule?n:{default:n}}function i(){document.querySelector(".form-container").style.display="block",document.querySelector(".leaderboard-container").style.display="none"}t(6),document.querySelector(".form-container").addEventListener("submit",function(n){return n.preventDefault()}),document.querySelector(".btn-start").addEventListener("click",function(){var n=new r.default;document.querySelector(".form-container").style.display="none",n.start(),document.querySelector(".board-container").style.display="flex"}),document.querySelector(".btn-leaderboard").addEventListener("click",function(){(function(){var n=document.querySelector(".leaderboard tbody");n.innerHTML="";var e=JSON.parse(localStorage.getItem("MEMORY_GAME_SCORE"))||[];e.sort(function(n,e){return n.moves<e.moves?-1:n.moves>e.moves?1:n.seconds<e.seconds?-1:n.seconds>e.seconds?1:0}),e.length>10&&e.splice(10);localStorage.setItem("MEMORY_GAME_SCORE",JSON.stringify(e));var t=document.createDocumentFragment();e.forEach(function(n,e){var r=document.createElement("tr"),o=document.createElement("td"),i=document.createElement("td"),s=document.createElement("td"),d=document.createElement("td"),l=document.createElement("td");o.textContent=e+1,i.textContent=n.player,s.textContent=n.rating,d.textContent=n.moves,l.textContent=a.default.formatTime(n.seconds),r.appendChild(o),r.appendChild(i),r.appendChild(s),r.appendChild(d),r.appendChild(l),t.appendChild(r)}),n.appendChild(t)})(),document.querySelector(".form-container").style.display="none",document.querySelector(".leaderboard-container").style.display="block",document.querySelector(".btn-back").addEventListener("click",i)})}]);