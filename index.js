function createCanvas(canvas) {
  document.body.insertAdjacentElement('afterbegin', canvas);
}

function updateSizeCanvas(canvas) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
}

function addController() {
  const controller = document.createElement('div');
  controller.setAttribute('id', 'controller');
  document.body.insertAdjacentElement('afterbegin', controller);
}

export { createCanvas, updateSizeCanvas };
