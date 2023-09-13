function createGrid(rc) {
    const container = document.querySelector('.grid-container');
    const containerSize = container.clientWidth;
    console.log(containerSize);
    for (let i = 0; i < rc; i++) {
        for (let j = 0; j < rc; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            const squareSize = containerSize / rc ;
            square.style.width = `${squareSize-2}px`;
            square.style.height = `${squareSize-2}px`;
            // square.style.width = `50px`;
            // square.style.height = '50px';
            container.appendChild(square);
        }
    }

}

createGrid(50);

const squares = document.querySelectorAll('.square');

squares.forEach((square) => { 
    square.addEventListener('mouseover', function () {
        square.style.backgroundColor = 'black';
        console.log('hovering');
    });
});