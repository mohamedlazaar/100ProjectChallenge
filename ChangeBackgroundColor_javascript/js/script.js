//Choose a random color
const button = document.querySelector('.btn');
const body = document.querySelector('body');
const colorName = document.querySelector('.color-name');
const colors = ['violet', 'green', 'blue', 'yellow', 'pink', 'purple'];

body.style.backgroundColor = 'red'
colorName.textContent = `red`
button.addEventListener('click', changeColor)

function changeColor(){
const colorIndex= parseInt(Math.random()*colors.length);
body.style.backgroundColor = colors[colorIndex];
colorName.textContent = `${colors[colorIndex]}`
}

