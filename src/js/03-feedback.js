import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  email: document.querySelector(`.feedback-form input`),
  message: document.querySelector(`.feedback-form textarea`),
};

const INPUT_KEY = 'feedback-form-state';
const formData = {};

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
};

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(INPUT_KEY);
    console.log(formData);
}

function fillForm (){
    const savedValue = JSON.parse(localStorage.getItem(INPUT_KEY));
    
    if (savedValue){
        refs.email.value = savedValue.email;
        refs.message.value = savedValue.message;
    }
};

fillForm ();

