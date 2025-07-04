const btn = document.getElementById('colorBtn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  // Change text color to a random color on each click
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  text.style.color = randomColor;
});
