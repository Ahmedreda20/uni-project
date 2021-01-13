const btn = document.querySelector(".btn-menu");
const MdBarContainer = document.querySelector(".md-bar");
const bd = document.querySelector("body");

btn.onclick = () => {
   btn.classList.toggle("btn-active")
   MdBarContainer.classList.toggle("md-bar-op")
   bd.classList.toggle("nb-m-h")
}
const footer = document.querySelector(".footer--container");


function SetStyles(e) {
   var h = window.innerHeight;
   var f = footer.offsetHeight;
   var c = h - f;
   bd.style.height = h + "px";
   bd.style.paddingBottom = f + "px";
}
window.addEventListener("load", SetStyles);
window.addEventListener("resize", SetStyles);
