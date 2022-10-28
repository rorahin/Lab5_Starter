// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const selectElement = document.querySelector('#horn-select');
  let imageSRC = document.querySelector('[src="assets/images/no-image.png"]');
  selectElement.addEventListener('change', (event) => {
    imageSRC.src = `assets/images/${event.target.value}.svg`;
    
  });

}