var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var o,i,r,a,f,u,l=0,c=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-l>=r}function O(){var e=v();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return m?d(n,r-(e-l)):n}(e))}function h(e){return f=void 0,b&&o?y(e):(o=i=void 0,a)}function w(){var e=v(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(m)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=g(t)||0,p(n)&&(c=!!n.leading,r=(m="maxWait"in n)?s(g(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");b.addEventListener("input",t((function(e){var t;let n=null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==t?t:{};const{name:o,value:i}=e.target;n={...n,[o]:i},localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),b.addEventListener("submit",(function(e){e.preventDefault();let t={};const n=new FormData(b);for(const[e,o]of n.entries()){if(!o)return void console.log("fill input");t[e]=o}t.canBeSpammed=!!t.canBeSpammed,localStorage.removeItem("feedback-form-state"),console.log(t),b.reset()}));(()=>{var e;let t=null!==(e=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==e?e:{};const n=Object.keys(t);console.log(n),n.forEach((e=>{let n=b.elements[e];console.log("Debug input",n);let o="value";console.log("Debug valueKey",o),n.value=t[e]}))})();
//# sourceMappingURL=03-feedback.47310a0f.js.map
