
const toggler = document.getElementById("navToggler");
const navMenu = document.getElementById("navMenu");

toggler.addEventListener('click', () => {
    navMenu.classList.toggle("nav-menu-hidden");
    navMenu.classList.toggle("nav-menu-show");
});

// mini slider
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
    }
});

// menu card slider 2
var swiper = new Swiper(".menu2", {
    slidesPerView: 1,
    loop: true,
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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
    }
});
