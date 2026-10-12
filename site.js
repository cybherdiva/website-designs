document.querySelectorAll(".burger").forEach((b)=>{const m=b.parentElement.parentElement.querySelector(".mobile");b.addEventListener("click",()=>m.classList.toggle("open"))});
document.querySelectorAll("form[data-note]").forEach((f)=>f.addEventListener("submit",(e)=>{e.preventDefault();const t=f.querySelector(".thanks");if(t)t.hidden=false;f.reset()}));
const bag=document.querySelector(".bag");let n=0;
document.querySelectorAll("[data-add]").forEach((b)=>b.addEventListener("click",()=>{n+=1;if(bag){bag.hidden=false;bag.textContent="Bag · "+n}}));
