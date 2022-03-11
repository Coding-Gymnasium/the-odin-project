export const PaintSquare = (grid) => {
  let pressing = false;

  const paint = (e) => {
    e.preventDefault();
    grid.addEventListener('mousemove', (e) => {
      if (pressing) e.target.style.background = 'black';
    });
    grid.addEventListener('mouseup', () => {
      pressing = false;
    });
  };

  grid.addEventListener('mousedown', (e) => {
    pressing = true;
    paint(e);
  });
};
