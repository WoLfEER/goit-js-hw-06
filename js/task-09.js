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
  const color = getRandomHexColor()
  refs.body.style.backgroundColor = color
  refs.span.textContent = color
})


console.log(refs);
// console.log(refs.span);
// console.log(refs.button);
// console.log(refs.body);
