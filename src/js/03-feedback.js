import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  email: document.querySelector(`.feedback-form input`),
  message: document.querySelector(`.feedback-form textarea`),
};

const INPUT_KEY = 'feedback-form-state';
const localString = localStorage.getItem(INPUT_KEY);
const localObject = JSON.parse(localString);

let formData;

if (localObject) {
  refs.email.value = localObject.email;
  refs.message.value = localObject.message;
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  formData = {
    email: refs.email.value,
    message: refs.message.value,
  };

  localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
  e.preventDefault();

  formData = {
    email: refs.email.value,
    message: refs.message.value,
  };

  console.log(formData);
  localStorage.removeItem(INPUT_KEY);
  refs.form.reset();
};


