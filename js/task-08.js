const loginForm = document.querySelector('.login-form');
console.log(loginForm);

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }
  const form = { Email: email.value, Password: password.value };
  console.log(form);
  event.currentTarget.reset();
}
