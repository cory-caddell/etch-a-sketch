/******** Create grid  **************/
const gridDimension = 16;
const gridContainer = document.querySelector('.gridContainer');

for (let i = 0; i < gridDimension; i++) {
    
    let col = document.createElement('div');
    col.classList.add('container');
    
    for (let j = 0; j < gridDimension; j++) {
        let row = document.createElement('div');
        row.classList.add('tile');
        col.appendChild(row);
    }
    
    gridContainer.appendChild(col);
}

/********* Create hover effect ********/
const allTiles = document.querySelectorAll('.tile')
allTiles.forEach( (tile) => {
    tile.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    });
});
