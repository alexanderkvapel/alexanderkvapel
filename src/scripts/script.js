const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');

document.querySelectorAll('button[data-scroll-to^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const currentWidth = document.documentElement.clientWidth;

    if (currentWidth < 920) {
      menu.classList.add('hidden');
      main.classList.remove('hidden');
    }

    e.preventDefault();

    document.querySelector(this.getAttribute('data-scroll-to')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

menuButton.addEventListener('click', function() {
  menu.classList.toggle('hidden');
  main.classList.toggle('hidden');
});

window.addEventListener('resize', () => {
  addClassOnWidth(menu, 'hidden', 920);
});

function addClassOnWidth(element, className, maxWidth) {
  const currentWidth = document.documentElement.clientWidth;

  if (currentWidth < maxWidth) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
    main.classList.remove(className);
  }
}
