const parent = document.querySelector('.keys');
const keys = parent.querySelectorAll('.key');
const keyList = Array.from(keys);

window.addEventListener('keydown', (e) => {
  console.log(e.key);
  for (const element of keyList) {
    console.log(element.getAttribute('data-key') === e.key);
  }
});
