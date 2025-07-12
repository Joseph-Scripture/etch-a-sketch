// --- DOM Manipulation (No changes needed here) ---

// 1. Select the main container where the grid will be placed.
const gridContainer = document.getElementById('grid-container');

// 2. Define the size of the grid.
const gridSize = 16;
const totalSquares = gridSize * gridSize; 


for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');


    square.classList.add('grid-square');

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = '#dbeafe'; 
    });

    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = ''; 
    });

    
    gridContainer.appendChild(square);
}