const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const counterValueEl = document.querySelector(`#value`);

let counterValue = 0;

decrementBtn.addEventListener(`click`, decrementCount);
incrementBtn.addEventListener(`click`, incrementCount);

function decrementCount() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

function incrementCount() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};