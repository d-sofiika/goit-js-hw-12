import{a as b,S as v,i as h}from"./assets/vendor-f736e62a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function m(r,t){return(await b({baseURL:"https://pixabay.com/api/",params:{key:"43384169-ca1a4d081c57b6f9f4fa25679",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}function f(r){return r.hits.map(({webformatURL:i,largeImageURL:n,tags:e,likes:s,views:l,comments:g,downloads:y})=>`
    <li class="card-item">
        <a href="${n}">
            <img src="${i}" alt="${e}" class="img-web"/>
        </a>
        <div class="information">
            <div class="descr">
                <p class="text">Likes</p>
                <span class="value">${s}</span>
            </div>
            <div class="descr">
                <p class="text">Views</p>
                <span class="value">${l}</span>
            </div>
            <div class="descr">
                <p class="text">Comments</p>
                <span class="value">${g}</span>
            </div>
            <div class="descr">
                <p class="text">Downloads</p>
                <span class="value">${y}</span>
            </div>
        </div>
    </li>
    `).join("")}const w=document.querySelector(".form-search"),o=document.querySelector(".more-btn"),d=document.querySelector(".card-container"),c=document.querySelector(".loader");c.style.display="none";o.hidden=!0;o.disabled=!0;const L=new v(".card-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});w.addEventListener("submit",C);o.addEventListener("click",S);let a=1,u,p;o.disabled=!0;async function C(r){r.preventDefault(),d.innerHTML="",c.style.display="block",o.hidden=!0,o.disabled=!0,a=1,p=r.currentTarget.elements.text.value,setTimeout(()=>{m(p,a).then(t=>{u=Math.floor(t.totalHits/15),console.log(u),p===""||t.hits.length===0?h.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"}):(d.insertAdjacentHTML("beforeend",f(t)),o.disabled=!1,d.hasChildNodes()&&a<u&&(o.hidden=!1),L.refresh(),r.target.reset())}).catch(t=>{h.error({title:"Error",titleColor:"white",message:"Oops!",messageColor:"white",balloon:!0,position:"topRight",progressBarColor:"black",transitionIn:"bounceInRight"})}).finally(()=>{c.style.display="none"})},1e3)}async function S(){const t=document.querySelector(".card-item").getBoundingClientRect().height;o.disabled=!0,a+=1;try{c.style.display="block",o.hidden=!0;const i=await m(p,a);setTimeout(()=>{d.insertAdjacentHTML("beforeend",f(i))},500),o.disabled=!1,window.scrollBy({top:t*2,left:0,behavior:"smooth"}),setTimeout(()=>{c.style.display="none",o.hidden=!1},500),a>=u&&(o.hidden=!0,h.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",color:"blue",position:"topRight"}))}catch{h.error({title:"Error",titleColor:"white",message:"Oops!",messageColor:"white",balloon:!0,position:"topRight",progressBarColor:"black",transitionIn:"bounceInRight"})}}
//# sourceMappingURL=commonHelpers.js.map
