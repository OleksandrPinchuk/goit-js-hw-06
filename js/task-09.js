function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener(`click`, onButtonClick);

function onButtonClick() {
  const randomColor = getRandomHexColor();

  document.body.style.background = randomColor;
  document.querySelector(".color").textContent = randomColor;
};