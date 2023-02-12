const container = document.querySelector(".container");
const sizeButton = document.querySelector(".size-button");
const randomButton = document.querySelector(".random-button");
const plainButton = document.querySelector(".plain-button");
const shadingButton = document.querySelector(".shading-button");

// create a new grid with plain color filling option by default
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      div.style.width = `${650 / size}px`;
      div.style.height = `${650 / size}px`;
      container.appendChild(div);
    }
  }
  const grid = document.querySelectorAll(".grid");
  singleColor(grid);
}

// initialization of the first 16x16 default grid
createGrid(16);

// change grid item to a single color with opacity 1
function singleColor(grid) {
  grid.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      changeSingleColor(item);
    });
  });
}

// change grid item to a "random" color with opacity 1
function randomColor(grid) {
  grid.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      changeRandomColor(item);
    });
  });
}

// change grid item to an incremental level of opacity until it reaches 1
function shadingColor(grid) {
  grid.forEach((item) => {
    let opacity = 0;
    item.addEventListener("mouseenter", function (e) {
      opacity += 0.1;
      if (opacity > 1) opacity = 1;
      changeShadingColor(item, opacity);
    });
  });
}

// helper function for the singleColor() function
function changeSingleColor(item) {
  item.style.backgroundColor = "#81a1c1";
  item.style.opacity = 1;
}

// helper function for the randomColor() function
function changeRandomColor(item) {
  const colors = ["#bf616a", "#d08770", "#ebcb8b", "#a3be8c", "#b48ead"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  item.style.backgroundColor = colors[randomIndex];
  item.style.opacity = 1;
}

// helper function for the shadingColor() function
function changeShadingColor(item, opacity) {
  item.style.opacity = opacity;
  item.style.backgroundColor = "#8fbcbb";
}

// gets the desired new grid size and makes sure it is correct
function getSize() {
  let size = prompt("Enter a new grid size (between 1 and 100): ");

  if (checkSize(size) == 0) {
    console.log("size incorrect");
    size = getSize();
  } else {
    return size;
  }
}

// removes the current grid to make place for the new grid
function removeGrid() {
  const currentGrid = document.querySelectorAll(".grid");

  currentGrid.forEach((item) => {
    container.removeChild(item);
  });
}

// checks that the size is correct by being between 1 and 100
function checkSize(size) {
  if (size < 1 || size > 100) {
    return 0;
  }
}

sizeButton.addEventListener("click", function (e) {
  removeGrid();
  createGrid(getSize());
});

randomButton.addEventListener("click", function (e) {
  const grid = document.querySelectorAll(".grid");
  randomColor(grid);
});

plainButton.addEventListener("click", function (e) {
  const grid = document.querySelectorAll(".grid");
  singleColor(grid);
});

shadingButton.addEventListener("click", function (e) {
  const grid = document.querySelectorAll(".grid");
  shadingColor(grid);
});
