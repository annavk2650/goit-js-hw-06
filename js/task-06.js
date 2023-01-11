const input = document.querySelector('#validation-input');
console.log(input);

const dataLength = input.getAttribute('data-length');
console.log(dataLength);

input.addEventListener('blur', event => {
  if (event.currentTarget.value.length === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
