const menuButton = document.querySelector('.menu-button');
const menuButtonSVG = document.querySelector('.menu-button img');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('button[data-scroll-to^="#"]');
const main = document.querySelector('.main');
const animatedText = document.querySelector('.animated-wrapper__text');

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
    main.classList.remove('visually-hidden');
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
  main.classList.remove('visually-hidden');
  menuButtonSVG.setAttribute('src', './images/burger-closed.svg');
}

function menuOpen() {
  menu.classList.remove('visually-hidden');
  main.classList.add('visually-hidden');
  menuButtonSVG.setAttribute('src', './images/burger-opened.svg');
}

const animationDuration = 4000;
const textChanger = () => {
  setTimeout(() => {
    animatedText.classList.remove('animated-wrapper__animation--third');
    animatedText.classList.add('animated-wrapper__animation--first');
    animatedText.textContent = "Front End Разработчик";
  }, 0 * animationDuration);
  setTimeout(() => {
    animatedText.classList.remove('animated-wrapper__animation--first');
    animatedText.classList.add('animated-wrapper__animation--second');
    animatedText.textContent = "Фиксер багов";
  }, 1 * animationDuration);
  setTimeout(() => {
    animatedText.classList.remove('animated-wrapper__animation--second');
    animatedText.classList.add('animated-wrapper__animation--third');
    animatedText.textContent = "Любитель JavaScript";
  }, 2 * animationDuration);
}

textChanger();
setInterval(textChanger, 3 * animationDuration);
