export const PaintSquare = (grid, color) => {
  let pressing = false;

  const paint = (e) => {
    e.preventDefault();
    grid.addEventListener('mousemove', (e) => {
      if (pressing) e.target.style.background = color || 'black';
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
