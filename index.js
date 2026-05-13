import{a as d,S as f,i as n}from"./assets/vendor-DFA_L3eI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="55724103-14f076f0e5cd96e081e15651b",g="https://pixabay.com/api/";function h(o){return d(g,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let y=new f(".gallery a",{captionsData:"alt",captionDelay:200});function b(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:u,downloads:p})=>`
    <li class="gallery-item">
    <a href="${a}"><img src="${i}" alt="${e}" class="gallery-image"/></a>
    <ul class="gallery-item-list">
    <li><p>Likes<br> <span>${t}</span></p></li>
    <li><p>Views<br> <span>${s}</span></p></li>
    <li><p>Comments<br> <span>${u}</span></p></li>
    <li><p>Downloads<br> <span>${p}</span></p></li>
    
    </ul>
    </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){l.innerHTML=""}function w(){c.classList.remove("is-hidden")}function S(){c.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();r===""?n.warning({position:"topRight",message:"Please fill out this field.",backgroundColor:"white"}):(L(),w(),h(r).then(i=>{i.hits.length===0?n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white"}):b(i.hits)}).catch(i=>{console.log(i),n.error({position:"topRight",message:"Something went wrong. Please try again later.",backgroundColor:"red",messageColor:"white"})}).finally(()=>{S(),o.target.reset()}))}
//# sourceMappingURL=index.js.map
