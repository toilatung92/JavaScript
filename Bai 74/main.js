var boxElement = document.querySelector('.box')

console.log(boxElement.classList.value)

boxElement.classList.add('red')

console.log(boxElement.classList.contains('red'))

setInterval(() => {
    boxElement.classList.toggle('red');
}, 100);