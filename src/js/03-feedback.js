import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  email: document.querySelector(`.feedback-form input`),
  message: document.querySelector(`.feedback-form textarea`),
};

const INPUT_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(INPUT_KEY)) || {
  email: '',
  message: '',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

// refs.form.addEventListener('input', throttle((e => {
//     formData[e.target.name] = e.target.value;
//     localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
//     // console.log(formData);
// }), 5000));

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(INPUT_KEY, JSON.stringify(formData));

  // console.log(formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(INPUT_KEY);
  console.log(formData);
}

function fillForm() {
  const savedValue = formData;

  if (savedValue) {
    // formData.email = savedValue.email || '';
    // formData.message = savedValue.message || '';

    refs.email.value = formData.email;
    refs.message.value = formData.message;
  }
}

fillForm();
