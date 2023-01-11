const fontSizeControl = document.querySelector('#font-size-control');
console.log(fontSizeControl);
const text = document.querySelector('#text');
console.log(text);

fontSizeControl.addEventListener('input', event => {
  console.log(event.target.value);
  text.style.fontSize = event.target.value + 'px';
});
