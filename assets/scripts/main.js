!function t(e,r,n){function o(u,i){if(!r[u]){if(!e[u]){var s="function"==typeof require&&require;if(!i&&s)return s(u,!0);if(c)return c(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[u]={exports:{}};e[u][0].call(f.exports,function(t){var r=e[u][1][t];return o(r||t)},f,f.exports,t,e,r,n)}return r[u].exports}for(var c="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(t,e,r){"use strict";var n=function(t,e){return null!=t&&(t.constructor===Object?[].forEach.call(Object.keys(t),function(r){return e(t[r],r,t)}):[].forEach.call(t,function(r,n){return e(r,n,t)}))},o=function(t){"function"==typeof t.stopPropagation&&t.stopPropagation(),"function"==typeof t.preventDefault&&t.preventDefault()},c=function(t,e,r){var n=0;return function(t){return(n=(n+t)%4)>=0&&(n=0+n),n<0&&(n=4+n),0+n}}(),u=function(t){var e=document.querySelector(".showcase .window__content"),r=e.src,o=""+r.substr(0,r.lastIndexOf("/")+1)+t+".jpg",c=document.querySelector(".showcase__feature[data-id='"+t+"']");e.src=o,n(document.querySelectorAll(".showcase__feature"),function(t){return t.classList.remove("showcase__feature--active")}),c.classList.add("showcase__feature--active")},i=setInterval(function(){var t=c(1);u(t)},4e3);n(document.querySelectorAll(".showcase__feature"),function(t){t.onclick=function(t){o(t),clearInterval(i),u(this.getAttribute("data-id"))}})},{}],2:[function(t,e,r){"use strict";var n=skrollr.init({forceHeight:!1});!0===n.isMobile()&&n.destroy(),document.body.offsetWidth<=960&&n.destroy()},{}],3:[function(t,e,r){"use strict";t("./_showcase"),t("./_skrollr")},{"./_showcase":1,"./_skrollr":2}]},{},[3]);