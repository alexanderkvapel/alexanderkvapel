const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('button[data-scroll-to^="#"]');
const main = document.querySelector('.main');

menuButton.addEventListener('click', function () {
  if (menu.style.display == 'block') {
    menu.style.display = 'none';
    main.style.display = 'block';
  } else {
    menu.style.display = 'block';
    main.style.display = 'none';
  }
});

window.addEventListener('resize', function () {
  const currentWidth = this.innerWidth;
  const breakpoint = 920;

  if (currentWidth >= breakpoint) {
    menu.style.display = 'block';
    main.style.display = 'block';
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
