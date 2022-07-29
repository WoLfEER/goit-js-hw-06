const refs = {
    input : document.querySelector('#name-input'),
    output : document.querySelector('#name-output')
}


    // console.log(refs);


refs.input.addEventListener('input', () =>{
    if (refs.input.value === "") {
    return refs.output.textContent = "Anonymous"
    }
    else return refs.output.textContent = refs.input.value
})
