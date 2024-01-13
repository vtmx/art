function createCanvas(canvas) {
  document.body.insertAdjacentElement('afterbegin', canvas);
}

function updateSizeCanvas(canvas) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

function circle(x, y, d) {

}

export { createCanvas, updateSizeCanvas, circle };
