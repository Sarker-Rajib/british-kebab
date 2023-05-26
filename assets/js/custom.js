
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.background = "rgb(0 0 0 / 25%)";
        document.getElementById("header").style.backdropFilter = "blur(15px)";
        document.getElementById("logooo").style.width = "100px";
    } else {
        document.getElementById("header").style.background = "none";
        document.getElementById("header").style.backdropFilter = "none";
        document.getElementById("logooo").style.width = "auto";
    }
}



var swiper = new Swiper(".mini-menu", {
    slidesPerView: 6,
    spaceBetween: 30,

    // freeMode: true,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 20
        },
    }
});

//  logo slider
var swiper = new Swiper(".item-ddetails", {
    slidesPerView: 1,
    // freeMode: true,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    }
});

//  item1
var swiper = new Swiper(".item-ddetails", {
    slidesPerView: 1,
    // freeMode: true,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    }
});