//Choose a random color

const button = document.querySelector(".bg-btn");
const body = document.querySelector('body');
const colors = ['orange', 'green', 'red', 'pink', 'purple'];

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
    
}