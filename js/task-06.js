const {input} = {
    input : document.querySelector('#validation-input'),
}



input.addEventListener('blur', (event) => {
    console.log(event.target);
    if (input.value.length === Number(input.getAttribute("data-length"))) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
})

// const addClass = () => {
//     input.classList.add()
// }

// const removeClass = () => {
//     input.classList.remove
// }


console.log((input.getAttribute("data-length")));
