import{a as d,S as f,i as n}from"./assets/vendor-DFA_L3eI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="55724103-14f076f0e5cd96e081e15651b",g="https://pixabay.com/api/";function y(t){return d(g,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:200});function b(t){const o=t.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:u,downloads:p})=>`
    <li class="gallery-item">
    <a href="${a}"><img src="${i}" alt="${e}" class="gallery-image"/></a>
    <ul class="gallery-item-list">
    <li><p>Likes<br> <span>${r}</span></p></li>
    <li><p>Views<br> <span>${s}</span></p></li>
    <li><p>Comments<br> <span>${u}</span></p></li>
    <li><p>Downloads<br> <span>${p}</span></p></li>
    
    </ul>
    </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function w(){c.classList.remove("is-hidden")}function S(){c.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",P);function P(t){t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();o===""?n.warning({position:"topRight",message:"Please fill out this field.",backgroundColor:"white"}):(L(),w(),y(o).then(({data:{hits:i}})=>{i.length===0?n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white"}):b(i)}).catch(i=>{console.log(i),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white"})}).finally(()=>{S(),t.target.reset()}))}
//# sourceMappingURL=index.js.map
