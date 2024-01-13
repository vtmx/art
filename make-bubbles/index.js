import * as art from '../index.js';

// Create canvas
const canvas = document.createElement('canvas');
art.createCanvas(canvas);
art.updateSizeCanvas(canvas);
window.addEventListener('resize', () => { art.updateSizeCanvas(canvas); });

// Draw
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#333';
ctx.strokeStyle = '#fff';
ctx.lineWidth = 8;
ctx.beginPath();
ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

