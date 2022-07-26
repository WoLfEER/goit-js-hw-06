// console.log('Number of categories',document.querySelector('ul').children.length);

// console.log("Category:", document.querySelector("li.item > h2").textContent);
// console.log(
//   "Elements:",
//   document.querySelector("li.item > ul").children.length
// );

// console.log('Category:', document.querySelectorAll('li > h2')[1].textContent)
// console.log('Elements:',
//     document.querySelectorAll('li.item >ul')[1].children.length);

// console.log('Category:', document.querySelectorAll('li > h2')[2].textContent);
// console.log('Elements:',
//     document.querySelectorAll('li.item >ul')[2].children.length);


const list = document.querySelectorAll('li.item')
// console.log(list);
console.log("Number of categories:", list[0].parentElement.childElementCount);
list.forEach((elem) => {
    console.log("Category:", elem.children[0].textContent);
    console.log("Elements", elem.children[1].childElementCount);
})
