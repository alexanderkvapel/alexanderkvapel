const menuButton = document.querySelector('.menu-button');
const menuButtonSVG = document.querySelector('.menu-button img');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('button[data-scroll-to^="#"]');
const main = document.querySelector('.main');

menuButton.addEventListener('click', function () {
  if (menu.style.display == 'block') {
    menuClose();
  } else {
    menuOpen();
  }
});

window.addEventListener('resize', function () {
  const currentWidth = this.innerWidth;
  const breakpoint = 920;

  if (currentWidth >= breakpoint) {
    menu.style.display = 'block';
    main.style.display = 'block';
    menuButtonSVG.setAttribute('src', './images/burger-closed.svg');
  } else if (currentWidth < breakpoint) {
    menuClose();
  }
});

menuItem.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const currentWidth = window.innerWidth;
    const breakpoint = 920;

    if (currentWidth < breakpoint) {
      menu.style.display = 'none';
      main.style.display = 'block';
      menuButtonSVG.setAttribute('src', './images/burger-closed.svg');
    }

    e.preventDefault();

    document.querySelector(this.getAttribute('data-scroll-to')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

function menuClose() {
  menu.style.display = 'none';
  main.style.display = 'block';
  menuButtonSVG.setAttribute('src', './images/burger-closed.svg');
}

function menuOpen() {
  menu.style.display = 'block';
  main.style.display = 'none';
  menuButtonSVG.setAttribute('src', './images/burger-opened.svg');
}
