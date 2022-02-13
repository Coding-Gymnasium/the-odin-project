const general = document.getElementById('general');

function countdown(number) {
  let count = number;
  while (count >= 0) {
    if (count === 10) {
      general.innerHTML += `<p>Countdown to ${count}</p>`;
      count--;
    } else if (count === 0) {
      general.innerHTML += `Blast Off!!!`;
      break;
    }
      general.innerHTML += `<p>${count}</p>`;
    count--;
  }
}

countdown(10);
