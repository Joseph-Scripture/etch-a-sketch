
document.addEventListener('DOMContentLoaded', function() {

  
    const gridContainer = document.querySelector('.container');
    const button = document.querySelector('button');


    // Function to create the grid
    function createGrid(sideLength) {
        gridContainer.innerHTML = ''; 
        const info = document.querySelector('.grid-title');
        info.textContent = `${sideLength} x ${sideLength} Grid`;

        const totalSquares = sideLength * sideLength;

        for (let i = 0; i < totalSquares; i++) {
            const newDiv = document.createElement('div');
          

            // Calculate size based on the length of one side
            const squareSize = 100 / sideLength;
            newDiv.style.width = `${squareSize}%`;
            newDiv.style.height = `${squareSize}%`;

            
            newDiv.classList.add('content');

            gridContainer.append(newDiv);
         
        }
      
    

       
    }

    createGrid(16);

    button.addEventListener('click', () => {
        let newValue = prompt('Enter A grid size less than 100');
        if(newValue<= 0 || newValue >100){
            alert('Enter a valid number of grids')
        }{
            createGrid(newValue);
        }
    })

});