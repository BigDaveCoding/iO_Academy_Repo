
let contact_form = document.querySelector('.contact_form');

contact_form.addEventListener('submit', handleContactForm)

function handleContactForm(e) {
    // console.log('form submitting');
    let first_name = document.querySelector('#first_name');
    let last_name = document.querySelector('#last_name');
    let email = document.querySelector('#email_address');
    let comments = document.querySelector('#comments');
    let missing_fields = document.querySelectorAll('.incomplete_contact_form');
    // console.log(first_name);
    // console.log(last_name);
    // console.log(email);
    // console.log(comments);
    // console.log(e);

    if (first_name.value === '' || last_name.value === '' || email.value === '' || comments.value === '') {
        missing_fields.forEach(field => {
            console.log(field);
            field.classList.remove('hidden');
        });
        e.preventDefault();
    }
}