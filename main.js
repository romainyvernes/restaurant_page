(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("h1"),c=document.createElement("p"),o=document.createElement("ul");e.style.backgroundImage="url('./restaurant.jpeg')",n.textContent="Chez Marcel",e.appendChild(n);const d=["Home","Menu","Contact"];for(let e=0;e<d.length;e++){const t=document.createElement("li"),n=document.createElement("a");t.id=`${d[e].toLowerCase()}-btn`,0===e&&(t.style.borderBottom="3px solid red",n.style.color="rgb(100, 100, 100)"),n.href="#",n.textContent=d[e],t.appendChild(n),o.appendChild(t)}t.appendChild(o),e.appendChild(t),c.id="home-description",c.textContent="Savor authentic French cuisine in a typically \n                Parisian decor.",e.appendChild(c)};function t(){document.querySelector("#content")}window.onload=t=>{e()};const n=document.querySelector("#home-btn"),c=document.querySelector("#menu-btn"),o=document.querySelector("#contact-btn");n.addEventListener("click",(n=>{t(),e()})),c.addEventListener("click",(n=>{t(),e()})),o.addEventListener("click",(n=>{t(),e()}))})();