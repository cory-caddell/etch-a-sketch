/////// Create initial grid /////////////
let columns = 16;
let rows = 16;

getGrid(columns, rows);
getHoverEffect();

/////// Create user grid ////////////////
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {

    let userDimensions = getUserDimensions(); 

    removeGrid();
    getGrid(userDimensions[0], userDimensions[1]);
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

/**
 * Function to prompt user for grid dimensions
 */
function getUserDimensions() {
    let userDimension = [];

    userDimension[0] = prompt("Enter width: ");

    while ((userDimension[0] > 32)) {
        userDimension[0] = prompt("Sorry, should have been specific. Enter a width no greater than 100 squares: ");
    }

    userDimension[1] = prompt("Enter length: ");

    while ((userDimension[1] > 32)) {
        userDimension[1] = prompt("Sorry, should have been specific. Enter a length no greater than 100 squares: ");
    }

    return userDimension;
}
