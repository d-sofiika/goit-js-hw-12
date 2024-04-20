import{a as m,S as f,i as c}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function h(s,o){return await m({BASE_URL:"https://pixabay.com/api/",params:{key:"43384169-ca1a4d081c57b6f9f4fa25679",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})}function y(s){return s.hits.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:n,comments:p,downloads:u})=>`
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
                <span class="value">${n}</span>
            </div>
            <div class="descr">
                <p class="text">Comments</p>
                <span class="value">${p}</span>
            </div>
            <div class="descr">
                <p class="text">Downloads</p>
                <span class="value">${u}</span>
            </div>
        </div>
    </li>
    `).join("")}const g=document.querySelector(".form-search"),d=document.querySelector(".more-btn"),l=document.querySelector(".card-container"),i=document.querySelector(".loader");i.style.display="none";d.hidden="true";const v=new f(".card-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});g.addEventListener("submit",b);d.addEventListener("click",L);async function b(s){s.preventDefault(),l.innerHTML="",i.style.display="block";const o=s.currentTarget.elements.text.value;h(o,i).then(r=>{o===""||r.hits.length===0?c.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"}):(l.insertAdjacentHTML("beforeend",y(r)),v.refresh(),s.target.reset())}).catch(r=>{console.log(r),c.error({title:"Error",titleColor:"white",message:"Oops!",messageColor:"white",balloon:!0,position:"topRight",progressBarColor:"black",transitionIn:"bounceInRight"})}).finally(()=>{i.style.display="none"})}async function L(s){}
//# sourceMappingURL=commonHelpers.js.map
