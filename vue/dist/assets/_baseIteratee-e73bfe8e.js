import{ce as M,ch as c,bw as _,ax as g,aS as d,ci as h,aU as E,cj as p,aR as y,cc as C}from"./index-43060d2f.js";function I(n){return function(r){return r==null?void 0:r[n]}}var L=1,w=2;function D(n,r,e,i){var t=e.length,a=t,A=!i;if(n==null)return!a;for(n=Object(n);t--;){var f=e[t];if(A&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++t<a;){f=e[t];var u=f[0],s=n[u],o=f[1];if(A&&f[2]){if(s===void 0&&!(u in n))return!1}else{var R=new M;if(i)var l=i(s,o,u,n,r,R);if(!(l===void 0?c(o,s,L|w,i,R):l))return!1}}return!0}function O(n){return n===n&&!_(n)}function G(n){for(var r=g(n),e=r.length;e--;){var i=r[e],t=n[i];r[e]=[i,t,O(t)]}return r}function P(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function F(n){var r=G(n);return r.length==1&&r[0][2]?P(r[0][0],r[0][1]):function(e){return e===n||D(e,n,r)}}function S(n,r,e){var i=n==null?void 0:d(n,r);return i===void 0?e:i}var x=1,U=2;function m(n,r){return h(n)&&O(r)?P(E(n),r):function(e){var i=S(e,n);return i===void 0&&i===r?p(e,n):c(r,i,x|U)}}function K(n){return function(r){return d(r,n)}}function N(n){return h(n)?I(E(n)):K(n)}function $(n){return typeof n=="function"?n:n==null?y:typeof n=="object"?C(n)?m(n[0],n[1]):F(n):N(n)}export{$ as b};
