const logo = document.querySelectorAll('.logo');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('button[data-scroll-to^="#"]');
const main = document.querySelector('.main');
const sections = document.querySelectorAll('.section');
const animatedText = document.querySelector('.animated-wrapper__text');

let currentScrollTop = 0;

logo.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const currentWidth = window.innerWidth;
    const breakpoint = 920;

    if (currentWidth < breakpoint) {
      menuClose();
    }

    e.preventDefault();

    document.querySelector('.hero').scrollIntoView({
      behavior: 'smooth',
    });
  })
})

menuButton.addEventListener('click', function () {
  if (menu.classList.contains('visually-hidden')) {
    menuOpen();
  } else {
    menuClose();
  }
});

if (document.documentElement.clientWidth < 920) {
  menu.classList.add('visually-hidden');
}

window.addEventListener('resize', function () {
  const currentWidth = this.innerWidth;
  const breakpoint = 920;

  if (currentWidth >= breakpoint) {
    menu.classList.remove('visually-hidden');
    sections.forEach((e) => {
      e.classList.remove('visually-hidden');
    });
    
    menuButton.classList.remove('open');
  } else if (currentWidth < breakpoint) {
    menuClose();
  }
});

menuItem.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const currentWidth = window.innerWidth;
    const breakpoint = 920;

    if (currentWidth < breakpoint) {
      menuClose();
    }

    e.preventDefault();

    document.querySelector(this.getAttribute('data-scroll-to')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

function menuClose() {
  menu.classList.add('visually-hidden');
  sections.forEach((e) => {
    e.classList.remove('visually-hidden');
  });

  menuButton.classList.remove('menu-button--open');

  main.scrollTo(0, currentScrollTop);
}

function menuOpen() {
  currentScrollTop = main.scrollTop || 0;

  menu.classList.remove('visually-hidden');
  sections.forEach((e) => {
    e.classList.add('visually-hidden');
  });

  menuButton.classList.add('menu-button--open');
}

const animationDuration = 4000;
const textChanger = () => {
  setTimeout(() => {
    animatedText.classList.remove('animated-wrapper__animation--third');
    animatedText.classList.add('animated-wrapper__animation--first');
    animatedText.textContent = 'Front End Разработчик';
  }, 0 * animationDuration);
  setTimeout(() => {
    animatedText.classList.remove('animated-wrapper__animation--first');
    animatedText.classList.add('animated-wrapper__animation--second');
    animatedText.textContent = 'Знаток MDN';
  }, 1 * animationDuration);
  setTimeout(() => {
    animatedText.classList.remove('animated-wrapper__animation--second');
    animatedText.classList.add('animated-wrapper__animation--third');
    animatedText.textContent = 'Любитель JavaScript';
  }, 2 * animationDuration);
}

textChanger();
setInterval(textChanger, 3 * animationDuration);
