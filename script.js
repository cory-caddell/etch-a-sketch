/******** Create grid tiles **************/
const gridDimension = 16;
const gridContainer = document.querySelector('.gridContainer');

for (let i = 0; i < gridDimension; i++) {
    
    let rows = document.createElement('div');
    rows.classList.add('tile'); 
    
    for (let j = 0; j < gridDimension; j++) {
        let col = document.createElement('div');
        col.classList.add('tile');
        rows.appendChild(col);
    }
    
    gridContainer.appendChild(rows);
}
