const container = document.querySelector('div');

// 1. Hey I'm red!
container.innerHTML = "<p style='color: red'>Hey I'm red!</p>";

// 2. I'm a blue h3!
const newH3 = document.createElement('h3');
newH3.style.cssText = 'color: blue';
newH3.textContent = "I'm a blue h3!";
container.appendChild(newH3);

// 3. a div with an h1 and a p inside it.
const newDiv = document.createElement('div');
newDiv.style.cssText =
  'width: 300px; height: 300px; border: 1px solid black; background: pink; padding: 10px';
newDiv.innerHTML = "<h1>I'm in a div</h1>";
newDiv.insertAdjacentHTML("beforeend", "<p>ME TOO!</p>")

container.appendChild(newDiv);

