const moreBtn = document.getElementById('more_option');
const content = document.querySelector('.more_option .option');

moreBtn.addEventListener('click', () => {
    content.classList.toggle('active');
})