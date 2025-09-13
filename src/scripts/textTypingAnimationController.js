/**
 * Раз в animationDuration подменяет анимируемый текст
 * @param {DOM Element} animatedText Селектор анимируемого текста
 * @param {Number} animationDuration Продолжительность печатания и стирания анимируемого текста в секундах
 */
const animatedTextChanger = (animatedText, animationDuration) => {
  animationTypes.forEach((animation, index) => {
    setTimeout(() => {
      if (index === 0) {
        animatedText.classList.remove(animationTypes[animationTypes.length - 1].class);
      } else {
        animatedText.classList.remove(animationTypes[index - 1].class);
      }
      animatedText.classList.add(animation.class);
      animatedText.textContent = animation.text;
    }, index * animationDuration * 1000);
  });
};

// Набор подставляемых текстов
const animationTypes = [
  {
    class: 'animated-wrapper__animation--first',
    text: 'Front End Разработчик',
  },
  {
    class: 'animated-wrapper__animation--second',
    text: 'Знаток MDN',
  },
  {
    class: 'animated-wrapper__animation--third',
    text: 'Любитель JavaScript',
  },
];

// Интервал смены анимируемого текста
let animationInterval = null;

/**
 * Запустить смену анимируемого текста раз в animationDuration
 * @param {*} animatedText Селектор анимируемого текста
 * @param {*} animationDuration Продолжительность печатания и стирания анимируемого текста в секундах
 */
export const startAnimation = (animatedText, animationDuration) => {
  animatedTextChanger(animatedText, animationDuration);
  animationInterval = setInterval(
    animatedTextChanger,
    animationTypes.length * animationDuration * 1000,
    animatedText,
    animationDuration
  );
}

/**
 * Остановить смену анимируемого текста
 */
export const stopAnimation = () => {
  clearInterval(animationInterval);
}
