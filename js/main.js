/*==========================================================
main.js
==========================================================*/

/*==========================
TYPING EFFECT
==========================*/

const roles=[
"Data Scientist",
"Machine Learning Engineer",
"Python Developer",
"Data Analyst",
];

let roleIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing-text");

function typeEffect(){

if(!typing) return;

const current=roles[roleIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1800);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

}

}

setTimeout(typeEffect,deleting?45:90);

}

typeEffect();

/*==========================
PRELOADER
==========================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.classList.add("loader-hidden");

document.body.classList.add("loaded");

},1800);

});

/*==========================
CURSOR GLOW
==========================*/

const glow=document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

if(!glow) return;

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

/*==========================
SCROLL PROGRESS
==========================*/

const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

progress.style.width=(scrollTop/height)*100+"%";

});

/*==========================
NAVBAR ACTIVE
==========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==========================
SCROLL REVEAL
==========================*/

const reveal=document.querySelectorAll(

".glass-card,.project-card,.contact-card,.cert-card,.timeline-card,.skill-category"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.18

});

reveal.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/*==========================
COUNTERS
==========================*/

const counters=document.querySelectorAll(".stat-card h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animate(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

function animate(counter){

const end=parseInt(counter.innerText);

let start=0;

const speed=Math.max(20,1000/end);

const interval=setInterval(()=>{

start++;

counter.innerHTML=start+"+";

if(start>=end){

counter.innerHTML=end+"+";

clearInterval(interval);

}

},speed);

}

/*==========================
PROJECT FILTER
==========================*/

const filterButtons=document.querySelectorAll(".filter-btn");

const projects=document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter=button.dataset.filter;

projects.forEach(project=>{

if(filter==="all"){

project.classList.remove("hide");

return;

}

if(project.dataset.category.includes(filter)){

project.classList.remove("hide");

}else{

project.classList.add("hide");

}

});

});

});

/*==========================
MOBILE MENU
==========================*/

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("show-menu");

});

}

/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(anchor.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================
NAVBAR SHADOW
==========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*==========================
PARALLAX HERO
==========================*/

const hero=document.querySelector(".hero-bg");

window.addEventListener("mousemove",e=>{

if(!hero) return;

const x=(window.innerWidth/2-e.clientX)/70;

const y=(window.innerHeight/2-e.clientY)/70;

hero.style.transform=`translate(${x}px,${y}px)`;

});

/*==========================
ORBIT TOOLTIP
==========================*/

document.querySelectorAll(".orbit-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.zIndex="20";

});

item.addEventListener("mouseleave",()=>{

item.style.zIndex="1";

});

});

/*==========================
BUTTON RIPPLE
==========================*/

document.querySelectorAll(".primary-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});

/*==========================
CURRENT YEAR
==========================*/

const year=document.querySelector(".current-year");

if(year){

year.innerHTML=new Date().getFullYear();

}