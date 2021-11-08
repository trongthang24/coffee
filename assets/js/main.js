let headerNavbar = document.querySelector('.header__navbar');

document.querySelector('#menu-btn').onclick = () => {
    headerNavbar.classList.toggle('active');
    headerSearch.classList.remove('active');
    headerCart.classList.remove('active');
}

let headerSearch = document.querySelector('.header__search');

document.querySelector('#search-btn').onclick = () => {
    headerSearch.classList.toggle('active');
    headerNavbar.classList.remove('active');
    headerCart.classList.remove('active');
}

let headerCart = document.querySelector('.header__cart');

document.querySelector('#cart-btn').onclick = () => {
    headerCart.classList.toggle('active');
    headerNavbar.classList.remove('active');
    headerSearch.classList.remove('active');
}

window.onscroll = () => {
    headerNavbar.classList.remove('active');
    headerSearch.classList.remove('active');
    headerCart.classList.remove('active');
}