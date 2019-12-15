const body = document.querySelector("body");

function loadImages(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum}.jpg`;
  image.classList.add("bgImages");
  body.appendChild(image);
}

function genRandom() {
  const random = Math.floor(Math.random() * 3) + 1;
  return random;
}

function init() {
  const randomNum = genRandom();
  loadImages(randomNum);
}

init();
