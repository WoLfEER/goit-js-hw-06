const counter = {
    value : 0,
    increment() {
        this.value +=1
    },
    decrement() {
        // console.log('decrese', this);
        this.value -=1
    },
}   

const counterValue = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
console.log(counterValue);

decrementBtn.addEventListener('click', function() {
    // console.log('click clack');
    
    counter.decrement()
    counterValue.textContent = counter.value
    
})

incrementBtn.addEventListener('click', function () {
    // console.log('click clack');
    
    counter.increment()
    console.log(counter);
    counterValue.textContent = counter.value
});
