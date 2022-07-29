const {button, form, input} = {
    button: document.querySelector('[type="submit"]'),
    input: document.querySelector('[type="password"]'),
    form: document.querySelector('.login-form'),
}
// console.log(refs);
// console.log(refs.form.elements.email);

const result = {}
const email = form.elements.email
const password = form.elements.password
console.log(password);


const handleSubmit = event => {
    event.preventDefault();

    if (Number(email.value) === 0 || Number(password.value) === 0) {
        alert ("Все поля должны быть заполнены!");
    }
    result.email = email.value;  
    result.password = password.value

    console.log(result);
    form.reset();
}

//  listeners //
form.addEventListener('submit',handleSubmit ) 
