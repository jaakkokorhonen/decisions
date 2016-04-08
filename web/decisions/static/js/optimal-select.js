!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.OptimalSelect=t():e.OptimalSelect=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={exports:{},id:r,loaded:!1};return e[r].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.optimize=t.select=void 0;var l=n(3),u=r(l),o=n(1),a=r(o);t.select=u.default,t.optimize=a.default,t.default=u.default},function(e,t){"use strict";function n(e,t){var n=e.replace(/> /g,">").split(" ");if(n.length<3)return e;for(var l=[n.pop()];n.length>1;){var u=n.pop(),o=n.join(" "),a=l.join(" "),c=o+" "+a,i=document.querySelectorAll(c);1!==i.length&&l.unshift(r(o,u,a,t))}return l.unshift(n[0]),n=l,n[0]=r("",n[0],n.slice(1).join(" "),t),n[n.length-1]=r(n.slice(0,-1).join(" "),n[n.length-1],"",t),n.join(" ").replace(/>/g,"> ").trim()}function r(e,t,n,r){if(e.length&&(e+=" "),n.length&&(n=" "+n),/\[*\]/.test(t)){var l=t.replace(/=.*$/,"]"),u=""+e+l+n,o=document.querySelectorAll(u);if(1===o.length&&o[0]===r)t=l;else for(var a=document.querySelectorAll(""+e+l),c=0,i=a.length;i>c;c++)if(a[c].contains(r)){var s=a[c].tagName.toLowerCase(),u=""+e+s+n,o=document.querySelectorAll(u);1===o.length&&o[0]===r&&(t=s);break}}if(/>/.test(t)){var f=t.replace(/>/,""),u=""+e+f+n,o=document.querySelectorAll(u);1===o.length&&o[0]===r&&(t=f)}if(/\:nth-child/.test(t)){var d=t.replace(/nth-child/g,"nth-of-type"),u=""+e+d+n,o=document.querySelectorAll(u);1===o.length&&o[0]===r&&(t=d)}if(/\.\S+\.\S+/.test(t)){for(var p=t.trim().split(".").slice(1).map(function(e){return"."+e}).sort(function(e,t){return e.length-t.length});p.length;){var h=t.replace(p.shift(),""),u=""+e+h+n,o=document.querySelectorAll(u);1===o.length&&o[0]===r&&(t=h)}if(t&&t.match(/\./g).length>2)for(var a=document.querySelectorAll(""+e+t),c=0,i=a.length;i>c;c++)if(a[c].contains(r)){var s=a[c].tagName.toLowerCase(),u=""+e+s+n,o=document.querySelectorAll(u);1===o.length&&o[0]===r&&(t=s);break}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t){"use strict";function n(e,t){for(var n=[],p=e,h=n.length;!(p===document||d(p,n,t)||r(p,n,t)||o(p,n,t)||i(p,n));)l(p,n,t),n.length===h&&a(p,n,t),n.length===h&&s(p,n),n.length===h&&u(p,n,t),n.length===h&&c(p,n,t),n.length===h&&f(p,n),p=p.parentNode,h=n.length;return p===document&&n.unshift("*"),n.join(" ")}function r(e,t,n){return p(e,t,document,n)}function l(e,t,n){return p(e,t,e.parentNode,n)}function u(e,t,n){var r=e.className;return!r||v(r,n.excludes.class)?!1:m(e,t,"."+r.replace(/ /g,"."))}function o(e,t,n){return h(e,t,document,n)}function a(e,t,n){return h(e,t,e.parentNode,n)}function c(e,t,n){var r=e.attributes;return Object.keys(r).some(function(l){if("length"==l)return!1;var u=r[l],o=u.name,a=u.value;if(v(a,n.excludes[o]))return!1;var c="["+o+'="'+a+'"]';return m(e,t,c,n)})}function i(e,t){return g(e,t,document)}function s(e,t){return g(e,t,e.parentNode)}function f(e,t){return m(e,t,e.tagName.toLowerCase())}function d(e,t){var n=e.id;return n?(t.unshift("#"+n),!0):!1}function p(e,t,n,r){var l=e.className;if(!l||v(l,r.excludes.class))return!1;var u=n.getElementsByClassName(l);return 1===u.length?(t.unshift("."+l.replace(/ /g,".")),!0):!1}function h(e,t,n,r){var l=e.attributes;return Object.keys(l).some(function(e){if("length"==e)return!1;var u=l[e],o=u.name,a=u.value;if(v(a,r.excludes[o]))return!1;var c="["+o+'="'+a+'"]',i=n.querySelectorAll(c);return 1===i.length?(t.unshift(c),!0):void 0})}function g(e,t,n){var r=e.tagName.toLowerCase(),l=n.getElementsByTagName(r);return 1===l.length?(t.unshift(r),!0):!1}function m(e,t,n){for(var r=e.parentNode,l=r.children,u=0,o=l.length;o>u;u++)if(l[u]===e)return t.unshift("> "+n+":nth-child("+(u+1)+")"),!0;return!1}function v(e,t){return t?t.some(function(t){return t.test(e)}):!1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t=a({},d,t),Object.keys(t.excludes).forEach(function(e){var n=t.excludes[e];Array.isArray(n)||(n=[n]),t.excludes[e]=n.map(function(e){return new RegExp(e)})}),Array.isArray(e)?o(e,t):u(e,t)}function u(e,t){if(3===e.nodeType)return l(e.parentNode);if(1!==e.nodeType)throw new Error("Invalid input!");var n=(0,i.default)(e,t),r=(0,f.default)(n,e);return r}function o(e,t){for(var n=null,r=null,l=null,o=null,a=0,c=e.length;c>a;a++){var i=e[a];if(n){if(n!==i.parentNode)return console.log("Can't be efficiently mapped. It probably best to use multiple single selectors instead!")}else n=i.parentNode,r=i.className,o=i.tagName;if(i.className!==r){var s,f,d=[];i.className.length>r.length?(s=i.className,f=r):(s=r,f=i.className),f.split(" ").forEach(function(e){s.indexOf(e)>-1&&d.push(e)}),r=d.join(" ")}i.tagName!==o&&(o=null)}var p=u(n);return console.log(p,r,l,o),r?p+" > ."+r.replace(/ /g,"."):o?p+" > "+o.toLowerCase():p+" > *"}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=l,t.getSingleSelector=u,t.getMultiSelector=o;var c=n(2),i=r(c),s=n(1),f=r(s),d={excludes:{style:".*","data-reactid":".*","data-react-checksum":".*"}}}])});
//# sourceMappingURL=optimal-select.js.map