(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("h1"),c=document.createElement("p"),o=document.createElement("ul");n.textContent="Chez Marcel",e.appendChild(n);const a=["Home","Menu","Contact"];for(let e=0;e<a.length;e++){const t=document.createElement("li"),n=document.createElement("a");n.href="#",n.textContent=a[e],t.appendChild(n),o.appendChild(t)}t.appendChild(o),e.appendChild(t),c.textContent="Savor authentic French cuisine in a typically \n                Parisian decor.",e.appendChild(c)};window.onload=t=>{e()}})();