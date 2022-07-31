const {input} = {
    input : document.querySelector('#validation-input'),
}

const validationClass = (add, remove) => {
    input.classList.add(add)
     input.classList.remove(remove)
}



input.addEventListener('blur', (event) => {
    console.log(event.target);
    if (input.value.length === Number(input.getAttribute("data-length"))) {
        validationClass('valid', 'invalid');
    }
    else {
        validationClass('invalid', 'valid')
    }
})

// const addClass = () => {
//     input.classList.add()
// }

// const removeClass = () => {
//     input.classList.remove
// }


console.log((input.getAttribute("data-length")));
