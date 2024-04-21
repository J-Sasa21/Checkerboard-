const checkerboard = document.getElementById("checkerboard");

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const cell = document.createElement("div");
    cell.classList.add((row + col) % 2 === 0 ? "black" : "white");
    checkerboard.appendChild(cell);
  }
}
