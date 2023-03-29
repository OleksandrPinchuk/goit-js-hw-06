const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.dataset.length;

inputEl.addEventListener(`blur`, onInputCounter);

function onInputCounter(event) {
    if (event.currentTarget.value.length > dataLength || event.currentTarget.value.length < dataLength) {
        inputEl.classList.add("invalid");  
    } else {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    };
};

