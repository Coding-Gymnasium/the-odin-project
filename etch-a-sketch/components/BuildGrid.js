export const BuildGrid = (inputedSize, grid, sizeSign, sqPixels= 10) => {
  const square = `<div id='square' style="width:${sqPixels}px; height:${sqPixels}px"></div>`;
  let size;
  let count = 1;


  sizeSign.textContent = `GRID: ${inputedSize} x ${inputedSize}`;
  grid.style.width = `${inputedSize * 10}px`;
  grid.style.height = `${inputedSize * 10}px`;
  size = inputedSize * inputedSize;

  console.log('size: ', size)
  console.log('sqPixels: ', sqPixels)

  let sqs = grid.querySelectorAll('#square');
  console.log('length: ', Array.from(sqs).length);
  if (sqs) sqs.forEach((item) => item.remove());

  let totalSquares = size * (Math.round( 10 / sqPixels ))
  // let totalSquares = size * 6.25;
  console.log('10/sqPixels: ', (Math.round( 10 / sqPixels )))
  console.log('totalSq', totalSquares)

  while (count <= totalSquares) {
    grid.insertAdjacentHTML('afterbegin', square);
    count++;
  }

  let sqs1 = grid.querySelectorAll('#square');
  console.log('length-1: ', Array.from(sqs1).length);
};
