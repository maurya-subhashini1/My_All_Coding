
let counterInput = document.querySelector("#counter-text");

document.querySelector("#increase").addEventListener("click", () => {
let counterCurrVal = parseInt(counterInput.innerText);

counterInput.innerText = counterCurrVal + 1;
});

document.querySelector("#decrease").addEventListener("click", () => {
let counterCurrVal = parseInt(counterInput.innerText);

counterInput.innerText = counterCurrVal - 1;
});
// const