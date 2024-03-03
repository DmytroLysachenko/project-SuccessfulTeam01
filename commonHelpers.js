(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();(()=>{const e={openMenuBtn:document.querySelector("[data-modal-open-mobile]"),closeMenuBtn:document.querySelector("[data-modal-close-mobile]"),menu:document.querySelector("[data-modal-mobile]")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t);function t(){e.menu.classList.toggle("is-open")}})();document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".header-nav-link");e.forEach(function(t){t.addEventListener("click",function(o){e.forEach(function(c){c.classList.remove("active")}),t.classList.add("active")})})});document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".header-mobile-link");e.forEach(function(t){t.addEventListener("click",function(o){e.forEach(function(c){c.classList.remove("active")}),t.classList.add("active")})})});function m(e){const t="a0b862c967e5a8ed671014e5",o=e.target,c="EUR",n=o.value,r=o.closest(".select-box-price")||o.closest(".sale-span-box"),l=`https://v6.exchangerate-api.com/v6/${t}/pair/${c}/${n}`;fetch(l).then(s=>s.json()).then(s=>{const d=s.conversion_rate;r.querySelectorAll("[data-original-price]").forEach(i=>{const u=parseFloat(i.getAttribute("data-original-price")),f=Math.round(u*d);i.innerText=`${p(n)}${f}`})}).catch(s=>console.error("Ошибка при получении курса валют:",s))}function p(e){switch(e){case"USD":return"$";case"EUR":return"€";case"UAH":return"₴";default:return""}}document.querySelectorAll(".select-currency").forEach(e=>{e.addEventListener("change",m)});window.onload=function(){document.querySelectorAll(".select-currency").forEach(e=>{e.dispatchEvent(new Event("change"))})};document.querySelectorAll(".expand-text-btn").forEach(e=>{e.addEventListener("click",function(){var t=this.parentNode;t.classList.toggle("text-expanded")})});document.addEventListener("DOMContentLoaded",e=>{document.querySelectorAll(".catalog-model").forEach(function(t){t.hasAttribute("data-fulltext")&&t.addEventListener("click",function(){if(!this.classList.contains("full-text"))this.innerText=this.dataset.fulltext;else{let o=this.dataset.fulltext,c=o.indexOf("...");c!==-1?o=o.substring(0,c+3):o=o.substring()+"...",this.innerText=o}this.classList.toggle("full-text")})})});window.onload=function(){var e=document.getElementById("preloader");e.classList.add("fadeOut"),setTimeout(function(){e.style.display="none"},800)};let a=()=>{let e=document.getElementById("progress"),t=document.documentElement.scrollTop,o=document.documentElement.scrollHeight-document.documentElement.clientHeight,c=Math.round(t*100/o);t>100?e.style.display="grid":e.style.display="none",e.addEventListener("click",()=>{document.documentElement.scrollTop=0}),e.style.background=`conic-gradient(#3350e9 ${c}%, #404040 ${c}%)`};document.addEventListener("DOMContentLoaded",()=>{a(),window.onscroll=a});
//# sourceMappingURL=commonHelpers.js.map
