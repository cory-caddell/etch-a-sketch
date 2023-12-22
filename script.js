//////// Create grid tiles ////////////////////
const totalTiles = 16;
const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < totalTiles; i++) {
    let tile = document.createElement('div');
    tile.textContent = 'TESTING';
    gridContainer.appendChild(tile);
}
