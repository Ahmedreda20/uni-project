const btn = document.querySelector(".btn-menu");
const MdBarContainer = document.querySelector(".md-bar");
const bd = document.querySelector("body");

btn.onclick = () => {
   btn.classList.toggle("btn-active")
   MdBarContainer.classList.toggle("md-bar-op")
   bd.classList.toggle("nb-m-h")
}


$('.banner-box').slick({
   rtl: true,
   dots: true,
   autoplay: true,
   speed: 1000,
   prevArrow: `<button class="btn-arrows left-arrow"><i class="fa fa-angle-left"></i></button>`,
   nextArrow: `<button class="btn-arrows right-arrow"><i class="fa fa-angle-right"></i></button>`
});


//gallery actions

const GalleryBtns = document.querySelectorAll(".btn-gallery");
const GalleryItems = document.querySelectorAll(".all-items .item");

GalleryBtns.forEach(btn => {
   btn.addEventListener("click", () => {

      // set active class name to the current item when click
      GalleryBtns.forEach(btna => {
         btna.classList.remove("btn-gallery-active");
         
      });
      btn.classList.add("btn-gallery-active");

      //check it data for if equal item data type

      GalleryItems.forEach(item => {
         var dt = item.getAttribute("data-type").toLowerCase();
         var df = btn.getAttribute("data-for").toLowerCase();
         if (dt === df) {
            item.classList.remove("active-item");
         } else {
            item.classList.add("active-item");
         }
         if (df === "all-item") {
            item.classList.remove("active-item");
         }
      });
   });
});