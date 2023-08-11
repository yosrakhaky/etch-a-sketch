const default_size = 16
const grid = document.getElementById('grid')
grid.style.display="flex"

function createGrid(x){
    grid.style.gridTemplateColumns = 'repeat(${x}, 1fr)'
    grid.style.gridTemplateRows = 'repeat(${x}, 1fr)'

    for (let i=0; i<x*x; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        grid.appendChild(gridElement)
    }
};

window.onload = () => {
    createGrid(default_size)
}