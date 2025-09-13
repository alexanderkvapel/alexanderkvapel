import * as Class from './classes.js';

// Текущее положение скролла относительно старта страницы
let currentScrollTop = 0;

/**
 * Закрывает меню
 * @param {DOM element} menu Селектор меню
 * @param {DOM element} sections Селектор секций
 * @param {DOM element} menuButton Селектор кнопки меню
 * @param {DOM element} main Селектор мейна
 * @param {number} currentScrollTop Значение текущей позиции скролла
 */
export const menuClose = (menu, sections, menuButton, main) => {
  menu.classList.add(Class.hiddenContent);

  sections.forEach((section) => {
    section.classList.remove(Class.hiddenContent);
  });

  menuButton.classList.remove(Class.openedMenuButton);

  main.scrollTo(0, currentScrollTop);
}

/**
 * Открывает меню
 * @param {DOM element} menu Селектор меню
 * @param {DOM element} sections Селектор секций
 * @param {DOM element} menuButton Селектор кнопки меню
 * @param {DOM element} main Селектор мейна
 * @param {number} currentScrollTop Значение текущей позиции скролла
 */
export const menuOpen = (menu, sections, menuButton, main) => {
  currentScrollTop = main.scrollTop || 0;

  menu.classList.remove(Class.hiddenContent);

  sections.forEach((section) => {
    section.classList.add(Class.hiddenContent);
  });

  menuButton.classList.add(Class.openedMenuButton);
}
