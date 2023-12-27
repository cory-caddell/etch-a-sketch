/////// Create initial grid /////////////
let columns = 16;
let rows = 16;

getGrid(columns, rows);
getHoverEffect();

/////// Create user grid ////////////////
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {

    columns = prompt("Enter width: ");
    rows = prompt("Enter length");

    removeGrid();
    getGrid(columns, rows);
    getHoverEffect();
});




/**
 * Function to create grid
 */
function getGrid (columns, rows) {
    const gridContainer = document.querySelector('.gridContainer');

    for (let i = 0; i < columns; i++) {
        
        let col = document.createElement('div');
        col.classList.add('container');
        
        for (let j = 0; j < rows; j++) {
            let row = document.createElement('div');
            row.classList.add('tile');
            col.appendChild(row);
        }
        
        gridContainer.appendChild(col);
    }
}

/**
 * Function to remove grid
 */
function removeGrid() {
    const gridContainer = document.querySelector('.gridContainer');
    const allTiles = document.querySelectorAll('.container')
    
    allTiles.forEach( (tile) => {
        gridContainer.removeChild(tile);
    });  
}

/**
 * Function to create hover effect
 */
function getHoverEffect() {
    const allTiles = document.querySelectorAll('.tile')
    allTiles.forEach( (tile) => {
        tile.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });    
}
