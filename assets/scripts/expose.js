// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let select = document.querySelector('#horn-select');
  let typeSound = document.querySelector('#expose').getElementsByTagName('img');

  input.addEventListener('input', updateValue);

  function updateValue(e) {
    select.attributes = e.target.value;
  }

  /*
  const img = new Image();
  img.addEventListener('load', () => {
  }, false);
  img.src = 'assets/images/air-horn.svg';
   /*
  let selectSound = document.querySelector('#horn-select');
  let typeSound = document.querySelector('#expose').getElementsByTagName('img');
  selectSound.addEventListener('change', (event) => {
    if(`${event.target.value}` == "Air Horn"){
      typeSound.src="assets/images/air-horn.svg";
    }
    if(`${event.target.value}` == "Car Horn"){
      typeSound.src="assets/images/car-horn.svg";
    }
    if(`${event.target.value}` == "Party Horn"){
      typeSound.src="assets/images/party-horn.svg";
    }

    
  })

  */
}