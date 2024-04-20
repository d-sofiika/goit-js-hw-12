import{a as g,S as b,i as p}from"./assets/vendor-f736e62a.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function f(s,a){return(await g({baseURL:"https://pixabay.com/api/",params:{key:"43384169-ca1a4d081c57b6f9f4fa25679",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}})).data}function m(s){return s.hits.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:c,comments:h,downloads:y})=>`
    <li class="card-item">
        <a href="${n}">
            <img src="${r}" alt="${e}" class="img-web"/>
        </a>
        <div class="information">
            <div class="descr">
                <p class="text">Likes</p>
                <span class="value">${t}</span>
            </div>
            <div class="descr">
                <p class="text">Views</p>
                <span class="value">${c}</span>
            </div>
            <div class="descr">
                <p class="text">Comments</p>
                <span class="value">${h}</span>
            </div>
            <div class="descr">
                <p class="text">Downloads</p>
                <span class="value">${y}</span>
            </div>
        </div>
    </li>
    `).join("")}const v=document.querySelector(".form-search"),o=document.querySelector(".more-btn"),l=document.querySelector(".card-container"),u=document.querySelector(".loader");u.style.display="none";o.hidden=!0;o.disabled=!0;const L=new b(".card-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});v.addEventListener("submit",w);o.addEventListener("click",S);let i=1,d;o.disabled=!0;async function w(s){s.preventDefault(),l.innerHTML="",u.style.display="block",o.hidden=!0,i=1;const a=s.currentTarget.elements.text.value;f(a,i).then(r=>{d=Math.floor(r.totalHits/15),console.log(d),a===""||r.hits.length===0?p.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight"}):(l.insertAdjacentHTML("beforeend",m(r)),o.disabled=!1,l.hasChildNodes()&&i<d&&(o.hidden=!1),L.refresh(),s.target.reset())}).catch(r=>{console.log(r),p.error({title:"Error",titleColor:"white",message:"Oops!",messageColor:"white",balloon:!0,position:"topRight",progressBarColor:"black",transitionIn:"bounceInRight"})}).finally(()=>{u.style.display="none"})}async function S(){o.disabled=!0,i+=1;try{const s=await f(i);l.insertAdjacentHTML("beforeend",m(s)),o.disabled=!1,i>=d&&(o.hidden=!0)}catch{alert("Error")}}
//# sourceMappingURL=commonHelpers.js.map
