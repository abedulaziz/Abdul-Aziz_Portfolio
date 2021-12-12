var navLi = document.querySelectorAll("header .navs li"),
  nav = document.querySelector("header .navs");
navLi.forEach((e) => {
  e.onclick = function () {
    window.scrollTo(0, document.querySelector(e.dataset.target).offsetTop - 58);
  };
});
var navBut = document.querySelector(".nav-menu");
document.onclick = function (e) {
  navBut.contains(e.target) ? nav.classList.toggle("active") : nav.classList.remove("active");
};
// window.onscroll = function () {
// window.scrollY > document.querySelector(".serv-boxes").offsetTop - window.innerHeight &&
//     document.querySelectorAll(".serv-boxes > div").forEach((e) => {
//     e.style.right = "0";
//     });
// },
window.onload = function () {
  var e = document.querySelector(".portfolio-img img"),
    o = document.querySelector(".img-cap");
    if (window.innerWidth <= 547) {
      e.style.animation = "myimageonmobile .6s ease-out";    
    }
    else {e.style.animation = "myimage .6s ease-out";}
  
  e.style.animationFillMode = "forwards";
  o.style.animation = "imagecaption .6s ease-out 1s";
  o.style.animationFillMode = "forwards";
};
