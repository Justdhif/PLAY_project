var swiper = new Swiper(".fav_box", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    effect: "fade",
    grabCursor: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

const searchContent = document.getElementById('search_content');
const searchBar = document.getElementById('searchBar');

searchContent.addEventListener('click', () => {
    location.href = 'search.html';
})

searchBar.addEventListener('click', () => {
    location.href = 'search.html';
})