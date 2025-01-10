
const contact_section = document.querySelector('#contact_form_section');
const name_form = document.querySelector('#name');
const email_form = document.querySelector('#email_address');
const comments_form = document.querySelector('#comments');
const checkbox_form = document.querySelector('#check_tandc');
const submit_form = document.querySelector('#submit');

submit_form.disabled = true;


const form_checks = document.querySelectorAll('.form_checks');

const form_array = [name_form, email_form, comments_form, submit_form];
let bool_array = [false, false, true, false];


console.log(name_form);
console.log(email_form);
console.log(comments_form);
console.log(checkbox_form);
console.log(submit_form);
console.log(form_checks);

function checkRequirements() {
    // console.log('checking requirements');
    checkName();
    checkEmail();
    checkComments();
    updateSubmitForm();
    console.log(bool_array);
  
}

function checkName() {
    if (name_form.value.length === 0) {
        bool_array[0] = false;
        form_checks[0].classList.remove('red_text');
    }
    else if (name_form.value.length > 0 && name_form.value.length < 5) {
        form_checks[0].classList.add('red_text');
        bool_array[0] = false;
    } 
    else {
        form_checks[0].classList.remove('red_text');
        bool_array[0] = true;
    }
}

function checkEmail() {

    if (email_form.checkValidity() && 
        email_form.value.length <= 255 && 
        email_form.value.length > 0) {
            // console.log('email is valid');
            bool_array[1] = true;
    } 
    else {
        // console.log('email is invalid');
        bool_array[1] = false;
    }

    if (email_form.value.length > 255) {
        form_checks[1].classList.add('red_text');
    } 
    else {
        form_checks[1].classList.remove('red_text');
    }

}

function checkComments() {
    if (comments_form.value.length === 0) {
        form_checks[2].classList.remove('red_text');
        bool_array[2] = true;
    } 
    else if (comments_form.value.length > 0 && comments_form.value.length < 50) {
        // console.log('comments are less than 50');
        form_checks[2].classList.add('red_text');
        bool_array[2] = false;
    } 
    else if (comments_form.value.length >= 50 && comments_form.value.length < 500) {
        // console.log('comments are correct amount of chars');
        form_checks[2].classList.remove('red_text');
        bool_array[2] = true;
    } 
    else if (comments_form.value.length >= 500) {
        // console.log('comments are more than 500');
        form_checks[2].classList.add('red_text');
        bool_array[2] = false;
    }
}

checkbox_form.addEventListener('change', () => {

    if (!checkbox_form.checked) {
        form_checks[3].classList.add('red_text');
        bool_array[3] = false;
    } else {
        form_checks[3].classList.remove('red_text');
        bool_array[3] = true;
    }
    updateSubmitForm();
    console.log(bool_array);
})

function updateSubmitForm() {
    const allTrue = bool_array.every(bool => bool);
    console.log(allTrue);
    if (allTrue) {
        submit_form.disabled = false;
    } else {
        submit_form.disabled = true;
    }
}

form_array.forEach(item => {
    item.addEventListener('input', checkRequirements);
});

const contact_close_button = document.querySelector('#contact_form_close_button')
console.log(contact_close_button);
console.log(contact_section);

contact_close_button.addEventListener('click', () => {
    contact_section.classList.add('hidden');
});

const page_buttons_contact_form = document.querySelectorAll('.a_button');
console.log(page_buttons_contact_form);

page_buttons_contact_form.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        contact_section.classList.remove('hidden');
    });
});



