import{ae as c}from"./index-sFzf4xgK.js";import{a as s}from"./unsupportedIterableToArray-RbDDH4Bc.js";function w(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function d(e,n,t){return n&&y(e.prototype,n),t&&y(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e){if(Array.isArray(e))return e}function h(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,i,f,l,o=[],a=!0,u=!1;try{if(f=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;a=!1}else for(;!(a=(r=f.call(t)).done)&&(o.push(r.value),o.length!==n);a=!0);}catch(b){u=!0,i=b}finally{try{if(!a&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(e,n){return m(e)||h(e,n)||s(e,n)||_()}export{d as _,w as a,j as b};