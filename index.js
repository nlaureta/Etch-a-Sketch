//creates the grid to draw on
function createGrid(rc) {
    const container = document.querySelector('.grid-container');
    const containerSize = container.clientWidth;
    const squareSize = containerSize / rc;

    container.innerHTML = '';
    for (let i = 0; i < rc; i++) {
        for (let j = 0; j < rc; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.width = `${squareSize - 2}px`;
            square.style.height = `${squareSize - 2}px`;
            container.appendChild(square);
        }
    }
}

//for the randomize toggle button
function toggleButton(button) {
    const toggleSound = document.getElementById('toggleSound');
    if (button.value === "Off") {
        button.value = "On"
        toggleSound.play();
    } else {
        button.value = "Off"
        toggleSound.play();
    }
}

function draw() {
    const squares = document.querySelectorAll('.square');
    const squareColor = document.querySelector('#colorPicker');
    const pencilTip = document.querySelector('.pencil-tip');

    let randomColorToggle = document.querySelector('#randomizeColor');

    squares.forEach((square) => {
        square.addEventListener('mouseover', function () {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);

            if (randomColorToggle.value === "Off") {
                square.style.backgroundColor = squareColor.value;
                squareColor.disabled = false;
                pencilTip.style.borderTopColor = squareColor.value;
            } else if (randomColorToggle.value === "On") {
                square.style.backgroundColor = "#" + randomColor;
                squareColor.disabled = true;
                pencilTip.style.borderTopColor = "#" + randomColor;
            }
        });
    });
}


let squareSize = document.querySelector('.slider');
let squareSizeValue = document.querySelector('.zoom-value');
squareSize.addEventListener('input', function () {
    createGrid(this.value);
    squareSizeValue.textContent = this.value + " x " + this.value;
    draw();
});

const eraseSound = document.getElementById('eraseSound')
const eraseSlider = document.querySelector('.eraseSlider');
eraseSlider.addEventListener('input', function () {
    if (eraseSlider.value === "1" || eraseSlider.value === "2") {
        createGrid(squareSize.value);
        eraseSound.play();
        draw();
    }
});

squareSizeValue.textContent = squareSize.value + " x " + squareSize.value;
createGrid(squareSize.value);
draw();