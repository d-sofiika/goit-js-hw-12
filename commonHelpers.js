import{a as b,S as v,i as h}from"./assets/vendor-f736e62a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function m(r,s){return(await b({baseURL:"https://pixabay.com/api/",params:{key:"43384169-ca1a4d081c57b6f9f4fa25679",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}function f(r){return r.hits.map(({webformatURL:i,largeImageURL:l,tags:e,likes:o,views:c,comments:y,downloads:g})=>`
    <li class="card-item">
        <a href="${l}">
            <img src="${i}" alt="${e}" class="img-web"/>
        </a>
        <div class="information">
            <div class="descr">
                <p class="text">Likes</p>
                <span class="value">${o}</span>
            </div>
            <div class="descr">
                <p class="text">Views</p>
                <span class="value">${c}</span>
            </div>
            <div class="descr">
                <p class="text">Comments</p>
                <span class="value">${y}</span>
            </div>
            <div class="descr">
                <p class="text">Downloads</p>
                <span class="value">${g}</span>
            </div>
        </div>
    </li>
    `).join("")}const w=document.querySelector(".form-search"),t=document.querySelector(".more-btn"),d=document.querySelector(".card-container"),a=document.querySelector(".loader");a.style.display="none";t.hidden=!0;t.disabled=!0;const L=new v(".card-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});w.addEventListener("submit",C);t.addEventListener("click",S);let n=1,u,p;t.disabled=!0;async function C(r){r.preventDefault(),d.innerHTML="",a.style.display="block",t.hidden=!0,t.disabled=!0,n=1,p=r.currentTarget.elements.text.value,setTimeout(()=>{m(p,n).then(s=>{u=Math.floor(s.totalHits/15),console.log(u),p===""||s.hits.length===0?h.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"}):(d.insertAdjacentHTML("beforeend",f(s)),t.disabled=!1,d.hasChildNodes()&&n<u&&(t.hidden=!1),L.refresh(),r.target.reset())}).catch(s=>{h.error({title:"Error",titleColor:"white",message:"Oops!",messageColor:"white",balloon:!0,position:"topRight",progressBarColor:"black",transitionIn:"bounceInRight"})}).finally(()=>{a.style.display="none"})},1e3)}async function S(){t.hidden=!0,a.style.display="block";const s=document.querySelector(".card-item").getBoundingClientRect().height;t.disabled=!0,n+=1;try{a.style.display="block",t.hidden=!0;const i=await m(p,n);setTimeout(()=>{d.insertAdjacentHTML("beforeend",f(i))},500),t.disabled=!1,window.scrollBy({top:s*2,left:0,behavior:"smooth"}),setTimeout(()=>{a.style.display="none",t.hidden=!1},500),n>=u&&(t.hidden=!0,h.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",color:"blue",position:"topRight"}))}catch{h.error({title:"Error",titleColor:"white",message:"Oops!",messageColor:"white",balloon:!0,position:"topRight",progressBarColor:"black",transitionIn:"bounceInRight"})}}
//# sourceMappingURL=commonHelpers.js.map
