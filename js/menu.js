const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menuCover = document.getElementById('mobileMenuCover');
const main = document.querySelector('.main');
const mobileItems = document.querySelectorAll('.mobileMenuItems');

function toggleMenu() {
  menuButton.style.display = 'none';
  menuCover.style.display = 'block';
  menuCover.style.animation = 'open-modal 0.7s ease-out';
  main.style.filter = 'blur(8px)';
}

function closeMenu() {
  menuCover.style.animation = 'close-modal 0.7s ease-out';

  setTimeout(() => {
    menuCover.style.display = 'none';
  }, 700);
  menuButton.style.display = 'block';
  main.style.filter = 'blur(0px)';
}

mobileItems.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);