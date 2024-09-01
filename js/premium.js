window.onscroll = () => {
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 10);
};

// var swiper = new Swiper(".privilege_box", {
//     spaceBetween: 50,
//     slidesPerView: 3,
//     loop: true,
//     effect: "fade",
//     grabCursor: true,
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".btn_back",
//         prevEl: ".btn_prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
// });