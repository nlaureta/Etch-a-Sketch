function createGrid(rc) {
    const container = document.querySelector('.grid-container');
    const containerSize = container.clientWidth;
    const squareSize = containerSize / rc ;
    container.innerHTML = ''; // Clear the existing grid
    console.log(containerSize);
    for (let i = 0; i < rc; i++) {
        for (let j = 0; j < rc; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            
            square.style.width = `${squareSize-2}px`;
            square.style.height = `${squareSize-2}px`;
            // square.style.width = `50px`;
            // square.style.height = '50px';
            container.appendChild(square);
        }
    }

}

function draw() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => { 
        square.addEventListener('mouseover', function () {
            // if (e.type == "mousedown") {
            //     //code triggers on hold

            //     console.log("hold");
            // }
            square.style.backgroundColor = 'black';
            console.log('hovering');
        });
    });
}

let squareSize = document.querySelector('.slider');

squareSize.addEventListener('input', function() {
    createGrid(this.value);
    draw();
 

})
createGrid(squareSize.value);

draw();