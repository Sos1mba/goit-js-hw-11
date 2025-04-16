import{a as m,S as p,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="49758339-0242343cad2ae6f5246dcc16e",g="https://pixabay.com/api/";async function h(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let b=new p(".gallery a");function L(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${n}</p>
        <p><b>Comments:</b> ${d}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const r=v.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!"});return}w(),S();try{const o=await h(r);o.hits.length===0?a.info({title:"No Results",message:"No images found for your search."}):L(o.hits)}catch{a.error({title:"Error",message:"Something went wrong!"})}finally{q()}});
//# sourceMappingURL=index.js.map
