const container = document.querySelector(".container");

createGrid();

function createGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      container.appendChild(div);
    }
  }
}

const grid = document.querySelectorAll(".grid");

singleColor();

function singleColor() {
  grid.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      changeSingleColor(item);
    });
  });
}

function changeSingleColor(item) {
  item.style.backgroundColor = "#81a1c1";
}
