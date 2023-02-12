const container = document.querySelector(".container");

createGrid(16);

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

function singleColor(grid) {
  grid.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      changeSingleColor(item);
      item.style.opacity = 1;
    });
  });
}

function randomColor(grid) {
  grid.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      changeRandomColor(item);
      item.style.opacity = 1;
    });
  });
}

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

function changeSingleColor(item) {
  item.style.backgroundColor = "#81a1c1";
}

function changeRandomColor(item) {
  const colors = ["#bf616a", "#d08770", "#ebcb8b", "#a3be8c", "#b48ead"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  item.style.backgroundColor = colors[randomIndex];
}

function changeShadingColor(item, opacity) {
  item.style.opacity = opacity;
  item.style.backgroundColor = "#8fbcbb";
}

const sizeButton = document.querySelector(".size-button");
const randomButton = document.querySelector(".random-button");
const plainButton = document.querySelector(".plain-button");
const shadingButton = document.querySelector(".shading-button");

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

function getSize() {
  let size = prompt("Enter a new grid size (between 1 and 100): ");

  if (checkSize(size) == 0) {
    console.log("size incorrect");
    size = getSize();
  } else {
    return size;
  }
}

function removeGrid() {
  const currentGrid = document.querySelectorAll(".grid");

  currentGrid.forEach((item) => {
    container.removeChild(item);
  });
}

function checkSize(size) {
  if (size < 1 || size > 100) {
    return 0;
  }
}
