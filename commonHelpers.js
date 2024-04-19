import{S as p,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s,o){const r="https://pixabay.com/api/",a="43384169-ca1a4d081c57b6f9f4fa25679",e=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${e}`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()})}function f(s){return s.hits.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
    <li class="card-item">
        <a href="${a}">
            <img src="${r}" alt="${e}" class="img-web"/>
        </a>
        <div class="information">
            <div class="descr">
                <p class="text">Likes</p>
                <span class="value">${t}</span>
            </div>
            <div class="descr">
                <p class="text">Views</p>
                <span class="value">${i}</span>
            </div>
            <div class="descr">
                <p class="text">Comments</p>
                <span class="value">${u}</span>
            </div>
            <div class="descr">
                <p class="text">Downloads</p>
                <span class="value">${d}</span>
            </div>
        </div>
    </li>
    `).join("")}const h=document.querySelector(".form-search"),l=document.querySelector(".card-container"),n=document.querySelector(".loader");n.style.display="none";const y=new p(".card-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});h.addEventListener("submit",g);async function g(s){s.preventDefault(),l.innerHTML="",n.style.display="block";const o=s.currentTarget.elements.text.value;setTimeout(()=>{m(o).then(r=>{o===""||r.hits.length===0?c.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"}):(l.insertAdjacentHTML("beforeend",f(r)),y.refresh(),s.target.reset())}).catch(r=>{c.error({title:"Error",titleColor:"white",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",balloon:!0,position:"topRight",progressBarColor:"black",transitionIn:"bounceInRight"})}).finally(()=>{n.style.display="none"})},1e3)}
//# sourceMappingURL=commonHelpers.js.map
