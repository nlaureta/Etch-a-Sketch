function createGrid(rc) {
    const container = document.querySelector('.grid-container');
    const containerSize = container.clientWidth;
    const squareSize = containerSize / rc;

    container.innerHTML = '';
    console.log(containerSize);
    for (let i = 0; i < rc; i++) {
        for (let j = 0; j < rc; j++) {
            const square = document.createElement('div');
            square.className = 'square';

            square.style.width = `${squareSize - 2}px`;
            square.style.height = `${squareSize - 2}px`;
            // square.style.width = `50px`;
            // square.style.height = '50px';
            container.appendChild(square);
        }
    }

}

function toggleButton(button) {
    if (button.value === "Off") {
        button.value = "On"
        console.log("on")
    } else {
        console.log("off");
        button.value = "Off"
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

            console.log('hovering');
        });
    });
}

let squareSize = document.querySelector('.slider');
squareSize.addEventListener('input', function () {
    createGrid(this.value);
    draw();
});

const eraseSlider = document.querySelector('.eraseSlider');
eraseSlider.addEventListener('input', function () {
    if (eraseSlider.value === "1" || eraseSlider.value === "2") {
        createGrid(squareSize.value);
        draw();
    }
});

createGrid(squareSize.value);
draw();