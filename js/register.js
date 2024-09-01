const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');

loginBtn.addEventListener('click', () => {
    document.querySelector('.content_register').classList.add('active');
    document.querySelector('.login_page').style.display = 'none';
    document.querySelector('.register_page').style.display = 'flex';
})

registerBtn.addEventListener('click', () => {
    document.querySelector('.content_register').classList.remove('active');
    document.querySelector('.login_page').style.display = 'flex';
    document.querySelector('.register_page').style.display = 'none';
})