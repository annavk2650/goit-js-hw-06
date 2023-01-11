function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector('.change-color');
console.log(button); //рандомно переключать
const spanColor = document.querySelector('.color');
console.log(spanColor); //віводиться цвут
const bodyColor = document.querySelector('body');
console.log(bodyColor);

button.addEventListener('click', event => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
