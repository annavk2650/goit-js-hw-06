const input = document.querySelector('[type="number"]');
console.log(input);
const createBtn = document.querySelector('[data-create]');
console.log(createBtn);
const destoryBtn = document.querySelector('[data-destroy]');
console.log(destoryBtn);
const boxes = document.querySelector('#boxes');
console.log(boxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const divs = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divs.push(divEl);
  }
  boxes.append(...divs);
}
createBtn.addEventListener('click', create => {
  const values = input.value;
  createBoxes(values);
});
destoryBtn.addEventListener('click', clear => {
  boxes.innerHTML = '';
  input.value = '';
});
