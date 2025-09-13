import * as Page from './parser.js';
import * as Class from './classes.js';
import { menuClose, menuOpen } from './menuController.js';
import { startAnimation, stopAnimation } from './textTypingAnimationController.js';

// Точка перехода с десктопной на мобильную версию и наоборот
const INLINE_BREAKPOINT = 920;
// Продолжительность печатания и стирания анимируемого текста в секундах
const animationDuration = 4;

// Если открыли на мобильной версии, то скрываем меню
if (document.documentElement.clientWidth < INLINE_BREAKPOINT) {
  Page.menuElement.classList.add(Class.hiddenContent);
}

// Обработчик изменения ширины страницы
window.addEventListener('resize', () => {
  const currentInlineSize = window.innerWidth;

  // Кейс для десктопной версии
  if (currentInlineSize >= INLINE_BREAKPOINT) {
    Page.menuElement.classList.remove(Class.hiddenContent);

    Page.sectionElements.forEach((section) => {
      section.classList.remove(Class.hiddenContent);
    });

    Page.menuButtonElement.classList.remove(Class.openedMenuButton);
  // Кейс для мобильной версии
  } else if (currentInlineSize < INLINE_BREAKPOINT) {
    menuClose(
      Page.menuElement,
      Page.sectionElements,
      Page.menuButtonElement,
      Page.mainElement
    );
  }
});

// Обработчик нажатия на логотип
Page.logoElements.forEach((item) => {
  item.addEventListener('click', (e) => {
    const currentInlineSize = window.innerWidth;

    e.preventDefault();

    // Если мобильная версия
    if (currentInlineSize < INLINE_BREAKPOINT) {
      menuClose(
        Page.menuElement,
        Page.sectionElements,
        Page.menuButtonElement,
        Page.mainElement
      );
    }

    Page.heroElement.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Обработчик нажатия на меню
Page.menuButtonElement.addEventListener('click', () => {
  if (Page.menuElement.classList.contains(Class.hiddenContent)) {
    menuOpen(
      Page.menuElement,
      Page.sectionElements,
      Page.menuButtonElement,
      Page.mainElement
    );
  } else {
    menuClose(
      Page.menuElement,
      Page.sectionElements,
      Page.menuButtonElement,
      Page.mainElement
    );
  }
});

// Обработчик нажатия на кнопки меню
Page.menuItemElements.forEach((item) => {
  item.addEventListener('click', (e) => {
    const currentWidth = window.innerWidth;

    e.preventDefault();

    // Если мобильная версия
    if (currentWidth < INLINE_BREAKPOINT) {
      menuClose(
        Page.menuElement,
        Page.sectionElements,
        Page.menuButtonElement,
        Page.mainElement
      );
    }

    document.querySelector(item.dataset.scrollTo).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Обработчик нажатия кнопки отправки формы
Page.formElement.addEventListener('submit', () => {
  setTimeout(() => {
    Page.formElement.reset();
  }, 1000);
});

// Смена анимируемого текста в Page.heroElement
startAnimation(Page.animatedTextElement, animationDuration);
