const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const sidePlaylist = document.getElementById('side_playlist');

btnOpen.addEventListener('click', () => {
    sidePlaylist.classList.add('active');
})

btnClose.addEventListener('click', () => {
    sidePlaylist.classList.remove('active');
})

const songBtn = document.getElementById('song_btn');
const songPlay = document.getElementById('song_play');

songBtn.addEventListener('click', () => {
    songPlay.classList.toggle('active');

    if(songPlay.classList.contains('active')) {
        songBtn.style.color = 'var(--main-color)';
    } else {
        songBtn.style.color = '#fff';
    }
})

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