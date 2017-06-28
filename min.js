var hyperHTML=function(e){"use strict";function t(e){var t=ce.get(this);return t&&t.template===(K?B(e):e)||(t=O.apply(this,arguments),ce.set(this,t)),L.apply(t.updates,arguments),this}function n(e,t){for(var n=0,r=e.length,a=t.length;n<r;){if(!(n<a&&e[n]===t[n]))return n;n++}return n===a?-1:n}function r(e,t){switch(t.nodeType){case $:var r=e.childNodes;if(r[0]===t){a(r,1);break}i(e,t);break;case z:-1!==n(e.childNodes,t.childNodes)&&i(e,t);break;case R:e.textContent=t.textContent}}function a(e,t){for(var n,r=e.length;t<r--;)n=e[r],n.parentNode.removeChild(n)}function i(e,t){e.textContent="",e.appendChild(t)}function o(e,t,n){var r=y(e);0!==n?(a(e.childNodes,n),te(r,t.slice(n)),e.appendChild(r)):(te(r,t),i(e,r))}function c(e){return function t(i){switch(typeof i){case"string":case"number":case"boolean":e.innerHTML=i;break;case"function":t(i(e,e.children,0));break;default:if(Z(i)){var c,l=i.length;if(1===l)t(i[0]);else switch(0===l?"":typeof i[0]){case"string":case"number":case"boolean":t(i.join(""));break;case"function":var u=U.call(e.children);for(c=0,l=i.length;c<l;c++)i[c]=i[c](e,u,c);a(u,c),t(i.concat.apply([],i));break;case"object":if(x(i[0])){Promise.all(i).then(t);break}default:c=n(e.childNodes,i),-1!==c&&o(e,i,c)}}else x(i)?i.then(t):r(e,i)}}}function l(e,t){var n,r=e.name,a=e.ownerElement,i="on"===r.slice(0,2),o=r in a&&!(W in a||G.test(r));return o&&t.push(a,r),o?function(e){n!==e&&(i&&n&&"handleEvent"in n&&N(a,"remove",r,n),n=e,i&&e&&"handleEvent"in e?N(a,"add",r,e):a[r]=e)}:function(t){n!==t&&(n=t,e.value=t)}}function u(e){var t;return function(n){t!==n&&(t=n,e.textContent=n)}}function s(e,t){return function r(i){switch(typeof i){case"string":case"number":case"boolean":a(t,0);var o=p(e,i);t=U.call(o.childNodes),e.parentNode.insertBefore(o,e);break;case"function":r(i(e.parentNode,t,0));break;default:if(Z(i)){var c,l=i.length;if(0===l)a(t,0),t=[];else switch(typeof i[0]){case"string":case"number":case"boolean":r(i.join(""));break;case"function":var u=e.parentNode;for(c=0,l=i.length;c<l;c++)i[c]=i[c](u,t,c);r(i.concat.apply([],i));break;case"object":if(x(i[0])){Promise.all(i).then(r);break}default:if(-1!==(c=n(t,i))){var o=y(e);a(t,c),i=i.slice(c),te(o,i),e.parentNode.insertBefore(o,e),t=t.slice(0,c).concat(i)}}}else x(i)?i.then(r):(a(t,0),t=i.nodeType===z?U.call(i.childNodes):[i],e.parentNode.insertBefore(i,e))}}}function f(e,t){for(var n,r=Q?I:J,a=e.attributes,i=0,o=a.length;i<o;i++)n=a[i],n.value===r&&t.push(E("attr",Q?e.attributes[ae.shift()]:n))}function h(e,t){for(var n,r,a=e.childNodes,i=a.length,o=0;o<i;o++)switch(n=a[o],n.nodeType){case $:f(n,t),h(n,t);break;case _:n.textContent===I&&(1===i?t.push(E("any",e)):!(o<1||a[o-1].nodeType===$)||o+1!==i&&a[o+1].nodeType!==$?(r=m(n,""),n.parentNode.replaceChild(r,n),t.push(E("text",r))):t.push(E("virtual",n)));break;case R:G.test(e.nodeName)&&n.textContent===J&&t.push(E("text",e))}}function d(e){for(var t,n=[],r=e.childNodes,a=0,i=r.length;a<i;a++)t=r[a],t.nodeType!==$&&0===ee.call(t.textContent).length||n.push(t);return 1===n.length?n[0]:n}function p(e,t){return(W in e?g:v)(e,t)}function v(e,t){var n,r=e.ownerDocument,a=r.createElement("template"),i="content"in a,o=!1;if(i||(n=r.createDocumentFragment(),o=/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(t)),o){var c=RegExp.$1;a.innerHTML="<table>"+t+"</table>",te(n,U.call(a.querySelectorAll(c)))}else a.innerHTML=t,i?n=a.content:te(n,U.call(a.childNodes));return n}function g(e,t){var n=e.ownerDocument,r=n.createDocumentFragment(),a=n.createElementNS(q,"svg");return a.innerHTML=t,te(r,U.call(a.childNodes)),r}function m(e,t){return e.ownerDocument.createTextNode(t)}function b(e,t,n,r){for(var a=e,i=e.ownerDocument,o=n.path,c=re(t,o),l=0,u=o.length;l<u;l++)switch(o[l++]){case"attributes":var s=c.name;e.hasAttribute(s)||e.setAttribute(s,""),a=e.attributes[s];break;case"childNodes":switch(n.type){case"text":var f=w(c,"previous"),h=w(c,"next");do{if(!(a=e.firstChild)||a.nodeType!==R)break;e.removeChild(a)}while(a);var d=i.createDocumentFragment();f.length&&d.appendChild(m(e,f)),a=d.appendChild(m(e,"")),h.length&&d.appendChild(m(e,h)),e.insertBefore(d,e.firstChild);break;case"virtual":var p=ne(e),v=ne(c.parentNode);a=c.previousElementSibling;var f=a?o.indexOf.call(v,a)+1:-1;a=c.nextElementSibling;var h=a?o.indexOf.call(v,a):-1;switch(a=i.createComment(I),!0){case h<0:h=p.length;break;case f<0:f=0;default:h=-(v.length-h)}r.push.apply(r,U.call(p,f,h)),e.insertBefore(a,r.length?r[r.length-1].nextElementSibling:U.call(p,h)[0]),0===r.length&&C(e,a)}break;default:a=ne(e)[o[l]]||e.appendChild(e.ownerDocument.createElement(re(t,o.slice(0,l+1)).nodeName)),e=a}return a}function y(e){return e.ownerDocument.createDocumentFragment()}function w(e,t){for(var n=[],r="next"===t?n.push:n.unshift;;){if(!(e=e[t+"Sibling"])||e.nodeType!==R)return n.join("");r.call(n,e.textContent)}}function N(e,t,n,r){e[t+"EventListener"](n.slice(2),r)}function x(e){return!!e&&"then"in e}function k(e){for(var t=0,n=e.length;t<n;t++)e[t++].removeAttribute(e[t])}function C(e,t){var n=t.previousSibling;n&&n.nodeType===R&&(e.removeChild(n),C(e,t))}function T(e,t,n,r){var a;switch(e){case"any":a=c(t);break;case"attr":a=l(t,n);break;case"text":a=u(t);break;case"virtual":a=s(t,r)}return a}function E(e,t){return{type:e,path:M(t)}}function D(e){var t=[],n=e.join(J);Q&&(ae=[],n=n.replace(ie,oe));var r=p(this,n),a={fragment:r,paths:t};return h(r,t),ue.set(e,a),a}function M(e){var t,n=[];switch(e.nodeType){case $:case z:t=e;break;case R:case _:t=e.parentNode,n.unshift("childNodes",n.indexOf.call(t.childNodes,e));break;case P:default:t=e.ownerElement,n.unshift("attributes",e.name)}for(e=t;t=t.parentNode;e=t)n.unshift("children",n.indexOf.call(ne(t),e));return n}function S(e,t){for(var n,r,i=[],o=[],c=0,l=t.length;c<l;c++)n=t[c],r=re(e,n.path),r.nodeType===z&&(a(r.childNodes,0),r=this),i[c]=T(n.type,r,o,[]);return k(o),i}function j(e,t){for(var n,r,a=[],i=[],o=0,c=t.length;o<c;o++)r=[],n=t[o],a[o]=T(n.type,b(this,e,n,r),i,r);return k(i),a}function L(){for(var e=1,t=arguments.length;e<t;e++)this[e-1](arguments[e])}function O(e){K&&(e=B(e));var t,n=ue.get(e)||D.call(this,e);if(se){var r=n.fragment.cloneNode(!0);t=S.call(this,r,n.paths),i(this,r)}else t=j.call(this,n.fragment,n.paths);return{template:e,updates:t}}function A(e){function n(n){c=n.createDocumentFragment(),o="svg"===e?n.createElementNS(q,"svg"):c,l=t.bind(o)}function r(){return u&&(u=!1,"svg"===e&&te(c,U.call(o.childNodes)),i=d(c)),i}var a,i,o,c,l,u,s;return"adopt"===e?function(i){var f=arguments;return K&&(i=B(i)),s!==i&&(u=!0,s=i,a=function(a,i,s){return u&&(s<i.length?(o=i[s],c={ownerDocument:o.ownerDocument,childNodes:[o],children:[o]},l=t.adopt(c)):(W in a&&(e="svg"),n(a.ownerDocument))),l.apply(null,f),r()}),a}:function(e){return K&&(e=B(e)),s!==e&&(u=!0,s=e,n(t.document)),l.apply(null,arguments),r()}}function F(e,t){var n=le.get(e),r=t.indexOf(":"),a=t;return-1<r&&(a=t.slice(r+1),t=t.slice(0,r)||"html"),n||(n={},le.set(e,n)),n[a]||(n[a]=A(t))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (MIT) */
t.document=e,t.adopt=function(e){return function(){return se=!1,t.apply(e,arguments),se=!0,e}},t.wire=function(e,t){return arguments.length<1?A("html"):null==e?A(t||"html"):F(e,t||"html")};var H,B,$=1,P=2,R=3,_=8,z=11,W="ownerSVGElement",q="http://www.w3.org/2000/svg",G=/^style$/i,V="_hyper_html: ",I=V+(Math.random()*new Date|0)+";",J="\x3c!--"+I+"--\x3e",K="object"==typeof navigator&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,Q=function(){var t=e.createElement("p");return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(),U=[].slice,X=typeof WeakMap==typeof X?function(){return{get:function(e){return e[V]},set:function(e,t){Object.defineProperty(e,V,{configurable:!0,value:t})}}}:WeakMap,Y=typeof Map==typeof Y?function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}}:Map,Z=Array.isArray||function(){var e={}.toString,t=e.call([]);return function(n){return e.call(n)===t}}(),ee=V.trim||function(){return this.replace(/^\s+|\s+$/g,"")};K&&(H=Object.create(null),B=function(e){var t=e.join(I);return H[t]||(H[t]=e)});var te="append"in e?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},ne="children"in e?function(e){return e.children}:function(e){for(var t,n=[],r=e.childNodes,a=0,i=0,o=r.length;i<o;i++)t=r[i],t.nodeType===$&&(n[a++]=t);return n},re=Q?function(e,t){for(var n,r=0,a=t.length;r<a;r++)switch(n=t[r++]){case"children":e=ne(e)[t[r]];break;default:e=e[n][t[r]]}return e}:function(e,t){for(var n=0,r=t.length;n<r;n++)e=e[t[n++]][t[n]];return e};if(Q)var ae,ie=new RegExp("([^\\S][a-z]+[a-z0-9_-]*=)(['\"])"+J+"\\2","g"),oe=function(e,t,n){return ae.push(t.slice(1,-1)),t+n+I+n};var ce=new X,le=new X,ue=new Y,se=!0;return t}(document);try{module.exports=hyperHTML}catch(e){}