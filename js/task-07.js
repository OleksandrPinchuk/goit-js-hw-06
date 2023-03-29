const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, onInputSizeControl);

function onInputSizeControl() {
    spanEl.style.fontSize = inputEl.value + `px`;
};
