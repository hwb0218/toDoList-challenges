const greetingForm = document.querySelector(".js-GreetingForm"),
  greetingInput = greetingForm.querySelector("input"),
  greeting = document.querySelector(".js-Greeting");

const USER_LS = "currentName";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const value = greetingInput.value;
  paintGreeting(value);
  saveName(value);
}

function askForName() {
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentValue = localStorage.getItem(USER_LS);
  if (currentValue === null) {
    askForName();
  } else {
    paintGreeting(currentValue);
  }
}

function init() {
  loadName();
}

init();
