// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const selectElement = document.querySelector('#horn-select');
  const result = document.querySelector('#vales');
  const imageSRC = document.getElementsByTagName('img');
  selectElement.addEventListener('change', (event) => {
    

    result.textContent = `You like ${event.target.value}`;
    imageSRC.src = `assets/images/${event.target.value}.svg`;
  });


  /*
  var selectElement = document.querySelector('#horn-select');
  // let typeSound = document.querySelector('#expose');
  var log = document = document.getElementById("vales");
  

  select.addEventListener('change', (event) => {
    log.textContent = "Image loaded";

  });

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