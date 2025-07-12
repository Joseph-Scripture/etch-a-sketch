document.addEventListener('DOMContentLoaded', function() {

    const gridContainer = document.querySelector('.container');
    const button = document.querySelector('button');

    // Define this helper function once, outside of createGrid
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createGrid(sideLength) {
        gridContainer.innerHTML = '';
        const info = document.querySelector('.grid-title');
        info.textContent = `${sideLength} x ${sideLength} Grid`;

        const totalSquares = sideLength * sideLength;

        for (let i = 0; i < totalSquares; i++) {
            const newDiv = document.createElement('div');

            const squareSize = 100 / sideLength;
            newDiv.style.width = `${squareSize}%`;
            newDiv.style.height = `${squareSize}%`;
            newDiv.classList.add('content');

           
            newDiv.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = getRandomColor();
            });
           

            gridContainer.append(newDiv);
        }
    }

    createGrid(16);

    button.addEventListener('click', () => {
        let newValue = prompt('Enter a grid size less than 100');
        // A small fix for your if/else logic
        if (newValue > 0 && newValue <= 100) {
            createGrid(newValue);
        } else {
            alert('Enter a valid number between 1 and 100.');
        }
    });

});