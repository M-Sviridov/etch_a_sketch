const DEFAULT_GRID = 16;
const CONTAINER_SIZE = 650;

const shadingButton = document.querySelector(".shading-button");
const randomButton = document.querySelector(".random-button");
const plainButton = document.querySelector(".plain-button");
const sizeButton = document.querySelector(".size-button");
const container = document.querySelector(".container");

// initialization of the first 16x16 default grid
createGrid(DEFAULT_GRID);

// create a new grid with plain color filling option by default
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      div.style.width = `${CONTAINER_SIZE / size}px`;
      div.style.height = `${CONTAINER_SIZE / size}px`;
      container.appendChild(div);
    }
  }
  const grid = document.querySelectorAll(".grid");
  singleColor(grid);
}

// change grid item to a single color with opacity 1
function singleColor() {
  const grid = document.querySelectorAll(".grid");
  grid.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      item.style.backgroundColor = "#81a1c1";
      item.style.opacity = 1;
    });
  });
}

// change grid item to a "random" color with opacity 1
function randomColor() {
  const grid = document.querySelectorAll(".grid");
  grid.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      const colors = ["#bf616a", "#d08770", "#ebcb8b", "#a3be8c", "#b48ead"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      item.style.backgroundColor = colors[randomIndex];
      item.style.opacity = 1;
    });
  });
}

// change grid item to an incremental level of opacity until it reaches 1
function shadingColor() {
  const grid = document.querySelectorAll(".grid");
  grid.forEach((item) => {
    let opacity = 0;
    item.addEventListener("mouseenter", function (e) {
      opacity += 0.1;
      if (opacity > 1) opacity = 1;
      item.style.opacity = opacity;
      item.style.backgroundColor = "#8fbcbb";
    });
  });
}

// changes the current grid size
function changeGridSize() {
  // removes the current grid
  let currentGrid = document.querySelectorAll(".grid");
  currentGrid.forEach((item) => {
    container.removeChild(item);
  });
  // creates a new grid with the required size
  createGrid(getSize());
}

// gets the desired new grid size and makes sure it is correct
function getSize() {
  let size = prompt("Enter a new grid size (between 1 and 100): ");
  return checkSize(size) == 0 ? (size = getSize()) : size;
}

// checks that the size is correct by being between 1 and 100
function checkSize(size) {
  if (size < 1 || size > 100) {
    return 0;
  }
}

// event listeners for the different buttons
shadingButton.addEventListener("click", () => shadingColor());
sizeButton.addEventListener("click", () => changeGridSize());
randomButton.addEventListener("click", () => randomColor());
plainButton.addEventListener("click", () => singleColor());
