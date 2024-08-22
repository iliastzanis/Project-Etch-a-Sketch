const container = document.getElementById("container");
const rows = 16;
const columns = 16;

function makeGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            container.appendChild(gridItem);
        }
    }
}

makeGrid(rows, columns);