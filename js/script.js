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

const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const sidePlaylist = document.getElementById('side_playlist');

btnOpen.addEventListener('click', () => {
    sidePlaylist.classList.add('active');
})

btnClose.addEventListener('click', () => {
    sidePlaylist.classList.remove('active');
})

const searchContent = document.getElementById('search_content');
const searchBar = document.getElementById('searchBar');

searchContent.addEventListener('click', () => {
    location.href = 'search.html';
})

searchBar.addEventListener('click', () => {
    location.href = 'search.html';
})

const premiumPage = document.querySelector('.premium');

premiumPage.addEventListener('click', () => {
    location.href = 'premium.html';
})

const profileBtn = document.querySelector('.img_profile');

profileBtn.addEventListener('click', () => {
    location.href = 'profile.html';
})