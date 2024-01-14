function createCanvas(canvas) {
  document.body.insertAdjacentElement('afterbegin', canvas);
}

function updateSizeCanvas(canvas) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

export { createCanvas, updateSizeCanvas };
