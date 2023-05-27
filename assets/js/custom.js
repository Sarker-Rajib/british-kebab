AOS.init();
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.background = "rgb(0 0 0 / 25%)";
        document.getElementById("header").style.backdropFilter = "blur(15px)";
        document.getElementById("header").style.padding = "10px 0";
    } else {
        document.getElementById("header").style.background = "none";
        document.getElementById("header").style.backdropFilter = "none";
        document.getElementById("header").style.padding = "20px 0";
    }
}

// mini slider
var swiper = new Swiper(".mini-menu", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
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
            slidesPerView: 2,
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

//  item slider
var swiper = new Swiper(".item-details", {
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

// menu card slider 1
var swiper = new Swiper(".menu1", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// menu card slider 2
var swiper = new Swiper(".menu2", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
    }
});

// menu card slider 3
var swiper = new Swiper(".menu3", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
    }
});

// menu card slider 4
var swiper = new Swiper(".menu4", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
    }
});
