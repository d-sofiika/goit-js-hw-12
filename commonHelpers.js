import{a as f,S as h,i as d}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function y(s,r){return(await f({baseURL:"https://pixabay.com/api/",params:{key:"43384169-ca1a4d081c57b6f9f4fa25679",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}function g(s){return s.hits.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:u,downloads:m})=>`
    <li class="card-item">
        <a href="${a}">
            <img src="${o}" alt="${e}" class="img-web"/>
        </a>
        <div class="information">
            <div class="descr">
                <p class="text">Likes</p>
                <span class="value">${t}</span>
            </div>
            <div class="descr">
                <p class="text">Views</p>
                <span class="value">${n}</span>
            </div>
            <div class="descr">
                <p class="text">Comments</p>
                <span class="value">${u}</span>
            </div>
            <div class="descr">
                <p class="text">Downloads</p>
                <span class="value">${m}</span>
            </div>
        </div>
    </li>
    `).join("")}const b=document.querySelector(".form-search"),i=document.querySelector(".more-btn"),c=document.querySelector(".card-container"),l=document.querySelector(".loader");l.style.display="none";i.hidden=!0;const v=new h(".card-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});b.addEventListener("submit",L);i.addEventListener("click",w);let p=1;async function L(s){s.preventDefault(),c.innerHTML="",l.style.display="block",i.hidden="true",p=1;const r=s.currentTarget.elements.text.value;y(r,p).then(o=>{r===""||o.hits.length===0?d.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"}):(c.insertAdjacentHTML("beforeend",g(o)),c.hasChildNodes()&&(i.hidden=!1),v.refresh(),s.target.reset())}).catch(o=>{console.log(o),d.error({title:"Error",titleColor:"white",message:"Oops!",messageColor:"white",balloon:!0,position:"topRight",progressBarColor:"black",transitionIn:"bounceInRight"})}).finally(()=>{l.style.display="none"})}async function w(s){}
//# sourceMappingURL=commonHelpers.js.map
