const map = document.querySelector(".map-container");
const showRegion = document.querySelector(".region");

const x = map.firstElementChild;
const y = map.lastElementChild;

const pole1 = document.getElementById("north-south");
const pole2 = document.getElementById("east-west");

function locate(e) {
  console.log(e);
  console.log(showRegion);
  x.textContent = `x-axis: ${e.offsetX}`;
  y.textContent = `y-axis: ${e.offsetY}`;

  x.style.left = `${e.offsetX}px`;
  x.style.top = `${e.offsetY}px`;
  y.style.left = `${e.offsetX}px`;
  y.style.top = `${e.offsetY + 20}px`;

  console.log(pole1, pole2);
  if (e.offsetY < 200) {
    pole1.textContent = "north";
    pole2.textContent = "";
  }
  if (e.offsetY > 200) {
    pole1.textContent = "south";
    pole2.textContent = "";
  }
  if (e.offsetX < 160) {
    pole2.textContent = "east";
  }
  if (e.offsetX > 240) {
    pole2.textContent = "west";
  }
}
map.addEventListener("mousemove", locate);
