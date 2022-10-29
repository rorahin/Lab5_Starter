// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  

  const selectImage = document.querySelector('#horn-select');
  // querySelector('#expose img')
  let imageSRC = document.querySelector('[src="assets/images/no-image.png"]');
  let selectSound = document.querySelector('button');
  let soundSRC = document.querySelector('audio');


  selectImage.addEventListener('change', (event) => {
    imageSRC.src = `assets/images/${event.target.value}.svg`;
    soundSRC.src = `assets/audio/${event.target.value}.mp3`;
    
    
  });

  

  selectSound.addEventListener('click', (but) => {
    // console.log("yes");
    // console.log(but.target.value);
    soundSRC.play();
    if(selectImage.value == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
 
  const selectVolume = document.querySelector('#volume');
  let volumeSRC = document.querySelector('[src="assets/icons/volume-level-2.svg"]');
  selectVolume.addEventListener('change', () => {

    
    // console.log(parseInt(selectVolume.value));
    

    if (parseInt(selectVolume.value) == 0 ){
      volumeSRC.src = `assets/icons/volume-level-0.svg`;
    } else if (parseInt(selectVolume.value) > 0 && parseInt(selectVolume.value) < 33){
      volumeSRC.src = `assets/icons/volume-level-1.svg`;
    } else if (parseInt(selectVolume.value) >= 33 && parseInt(selectVolume.value) < 67){
      volumeSRC.src = `assets/icons/volume-level-2.svg`;
    } else if (parseInt(selectVolume.value) >= 67){
      volumeSRC.src = `assets/icons/volume-level-3.svg`;
    }
    
    
  });





}