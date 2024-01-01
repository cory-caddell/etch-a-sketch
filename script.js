/////// Create initial grid /////////////
const maxContainerSize = 960;
let initialDimensions = 16;

setGrid(initialDimensions, maxContainerSize);

/////// Create user grid ////////////////
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {

    let userDimensions = getUserDimensions(); 

    removeGrid();
    setGrid(userDimensions, maxContainerSize);
});




/**
 * Function to create grid
 */
function setGrid (dimensions, maxContainerSize) {
    const gridContainer = document.querySelector('.gridContainer');

    for (let i = 0; i < dimensions; i++) {
        
        let col = document.createElement('div');
        col.classList.add('container');
        
        for (let j = 0; j < dimensions; j++) {
            let row = document.createElement('div');
            row.classList.add('tile');
            col.appendChild(row);
        }
        
        gridContainer.appendChild(col);

    }

    setTileFormatting(dimensions, maxContainerSize)

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
function setTileFormatting(dimensions, maxContainerSize) {
    const allTiles = document.querySelectorAll('.tile')

    
    allTiles.forEach( (tile) => {
        let tileSize = setTileSize(dimensions, maxContainerSize)
        tile.style.width = tileSize;
        tile.style.height = tileSize;
        
        tile.addEventListener('mouseover', (e) => {   
            e.target.style.backgroundColor = randomRGB();
        });
    });    
}

/**
 * Function to prompt user for grid dimensions
 */
function getUserDimensions() {
    let userDimensions = prompt("Enter grid dimensions: ");

    while ((userDimensions < 0) || (userDimensions > 100)) {
        userDimensions = prompt("Sorry, should have been specific. Enter a " +
            "dimension no greater than 100 squares, and obviously greater than 0 squares: ");
    }

    return userDimensions;
}

/**
 * Generate random RGB effect
 */
function randomRGB() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";  
    
}

/**
 * Set tile size.
 */
function setTileSize(dimensions, maxContainerSize) {
    let tileSize = maxContainerSize / dimensions;
    return '' + tileSize + 'px';
}


  
