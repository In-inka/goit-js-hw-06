const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = formLogin.email.value;
  const password = formLogin.password.value;

  if (!email || !password) {
    alert('All fields must be filled!');
    return;
  } else {
    const valueForm = {
      email: email,
      password: password,
    };
    console.log(valueForm);
  }
  formLogin.reset();
}
