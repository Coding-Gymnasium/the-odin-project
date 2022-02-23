const btn = document.querySelector('#btn');

// Method 2
// btn.onclick = () => alert('Hello World from js');

// Method 3
// btn.addEventListener('click', () => alert('Hello Again'));

// using a named function
function alertFunction() {
  alert('hi from inside a named function');
}

function consoleLogFunction() {
  console.log("You pressed 'a'!");
}

btn.addEventListener('click', alertFunction);

window.addEventListener(
  'keypress',
  (e) => e.code === 'KeyA' && consoleLogFunction()
);

// The event.

btn.addEventListener('click', function (event) {
  // console.log(event.target);
  event.target.style.background = 'pink';
});

// Attaching listeners to groups of nodes

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => alert(button.id));
});
