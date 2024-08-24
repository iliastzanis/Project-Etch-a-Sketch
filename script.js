const container = document.getElementById("container");
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const output = document.getElementById("output");
let gridSize = 16;

submitBtn.addEventListener('click', function () {
    const input = userInput.value.trim(); // Trim user input
    const checkUserInput = Math.floor(input); // make it Int
    // Check if the input is empty, bigger than 100 or less that 1 and NaN
    if (checkUserInput === "") {
        output.textContent = "The input is empty. Please enter a number.";
    } else if (isNaN(checkUserInput)) {
        // Check if the input is not a valid number
        output.textContent = "Please enter a valid number.";
    } else if (Number(checkUserInput) > 100 || Number(checkUserInput) <= 0) {
        output.textContent = "Please enter a number between 1 and 100.";
    } else {
        // If valid, display the number
        output.textContent = `You entered: ${Number(checkUserInput)}`;
        gridSize = checkUserInput;
        // Clear the previous grid
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        // Generate the new grid
        makeGrid(gridSize);
    }
});



//function that makes the grid and calculates it to fit on a 400x400 container
function makeGrid(gridSize) {
    const gridItemSize = 600 / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {

        const gridItem = document.createElement("div");

        gridItem.classList.add("grid-item");
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;
        container.appendChild(gridItem);

        let interactions = 0; // Initialize the interaction counter
        let initialColor = null; // Variable to store the initial color

        gridItem.addEventListener('mouseover', () => {
            if (interactions === 0) {
                // Generate a random color on the first interaction
                initialColor = getRandomRGB();
                gridItem.style.backgroundColor = initialColor; // Set initial color with full opacity
            }

            interactions++; // Increment interaction count
        });


    }
}
// Function to generate a random RGB color
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


//initial call of function with gridsize 16x16
makeGrid(gridSize);