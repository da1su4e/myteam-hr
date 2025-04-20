const overlay = document.getElementById('menu-overlay');
const burgerMenuBtn = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

burgerMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
});

const closeMenu = () => {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);