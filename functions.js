const body = document.querySelector("body");
body?.setAttribute("class", "body");

class GridBox {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.element = document.createElement("div");
    this.element.style.width = "30px";
    this.element.style.height = "30px";
    this.element.style.margin = "0.5px";
    this.element.style.border = "1px solid gray";
    this.element.style.backgroundColor = "none";
    this.element.style.transition = "background-color 1s ease-in-out";
    this.element.style.transform = "skewX(-5deg)";
    this.element.style.boxShadow = "1px 1px 2px indigo";
  }

  createGB() {
    return this.element;
  }
}
const color = [
  "#FF69B4",
  "#FF77B9",
  "#FF85C0",
  "#FF93C7",
  "#FF9FCE",
  "#FFADC9",
  "#FFB7CF",
  "#FFC1D5",
  "#FFCBDC",
  "#FFD5E2",
  "#4B0082",
  "#5A00A1",
  "#6A00BF",
  "#7B00DF",
  "#8C00FF",
  "#A020F0",
  "#9370DB",
  "#BA55D3",
  "#DDA0DD",
  "#EE82EE",
];
const handleHover = (e) => {
  const element = e.target;
  const randomIndex = Math.floor(Math.random() * color.length);
  element.style.backgroundColor = `${color[randomIndex]}`;

  setTimeout(() => {
    element.style.backgroundColor = "transparent";
  }, 800);
};

let gridFrame = new Array(12).fill(null).map((_, x) =>
  new Array(12).fill(null).map((_, y) => {
    let gridBox = new GridBox(x, y);
    let boxElement = gridBox.createGB();

    boxElement.addEventListener("mouseover", handleHover);

    return boxElement;
  })
);

gridFrame.forEach((row) => {
  row.forEach((box) => body?.appendChild(box));
});
