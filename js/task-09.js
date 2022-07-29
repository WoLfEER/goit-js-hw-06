function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector("[type=button]"),
  span: document.querySelector('.color'),
  body: document.querySelector('body')
}

// 

refs.button.addEventListener('click', () => {
  // console.log('check');
  refs.body.style.backgroundColor = getRandomHexColor()
  refs.span.textContent = getRandomHexColor()
})


console.log(refs);
// console.log(refs.span);
// console.log(refs.button);
// console.log(refs.body);
