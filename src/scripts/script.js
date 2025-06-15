const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('button[data-scroll-to^="#"]');
const main = document.querySelector('.main');

menuButton.addEventListener('click', function () {
  const menuButtonSVG = document.querySelector('.menu-button img');

  if (menu.style.display == 'block') {
    menu.style.display = 'none';
    main.style.display = 'block';
    menuButtonSVG.setAttribute('src', './images/burger-closed.svg');
  } else {
    menu.style.display = 'block';
    main.style.display = 'none';
    menuButtonSVG.setAttribute('src', './images/burger-opened.svg');
  }
});

window.addEventListener('resize', function () {
  const menuButtonSVG = document.querySelector('.menu-button img');
  const currentWidth = this.innerWidth;
  const breakpoint = 920;

  if (currentWidth >= breakpoint) {
    menu.style.display = 'block';
    main.style.display = 'block';
    menuButtonSVG.setAttribute('src', './images/burger-closed.svg');
  } else if (currentWidth < breakpoint) {
    menu.style.display = 'none';
    main.style.display = 'block';
  }
});

menuItem.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const currentWidth = window.innerWidth;
    const breakpoint = 920;

    if (currentWidth < breakpoint) {
      menu.style.display = 'none';
      main.style.display = 'block';
    }

    e.preventDefault();

    document.querySelector(this.getAttribute('data-scroll-to')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
