var navLi = document.querySelectorAll('header .navs li'),
    nav = document.querySelector('header .navs');
navLi.forEach(li => {
    li.onclick = function() {
        window.scrollTo(0, document.querySelector(li.dataset.target).offsetTop - 58)
    }
})

var navBut = document.querySelector('.nav-menu');

document.onclick = function(e) {
    if (navBut.contains(e.target)) {
        nav.classList.toggle('active')
    }
    else {
        if (nav.classList.contains('active')) {
            nav.classList.toggle('active')
        }
    }
}

window.onscroll = function() {
    if (window.scrollY > document.querySelector('.serv-boxes').offsetTop - window.innerHeight) {
        document.querySelectorAll('.serv-boxes > div').forEach(el => {
            el.style.right= "0";
        })
    }
}

window.onload = function() {
    console.log(this);
    var imgPort = document.querySelector('.portfolio-img img');
    var imgCap = document.querySelector('.img-cap');
    imgPort.style.animation = "myimage .6s ease-out"
    imgPort.style.animationFillMode = "forwards"
    imgCap.style.animation = "imagecaption .6s ease-out 1s"
    imgCap.style.animationFillMode = "forwards"
}