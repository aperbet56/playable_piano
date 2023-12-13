// Récupération des différents éléments
const pianoKeys = document.querySelectorAll(".piano__keys .key");
const volumeSlider = document.querySelector(".volume__slider input");
const keysCheckbox = document.querySelector(".keys__checkbox input");

// Création de la variable allKeys et audio
let allKeys = [];
let audio = new Audio("tunes/a.wav"); //par défaut, l'audio src est "a"

// Déclaration de la fonction playTune ayant comme paramètre key
const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; //passage du src audio en fonction de la touche enfoncée
  audio.play();
  console.log(allKeys);

  const clickedKey = document.querySelector(`[data-key="${key}"]`); //Récupération du l'élément cliqué
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  //Ecoute de l'événement "click" et appel de la fonction playtune en passant les valeurs de clé de données comme argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

// Déclaration de la fonction handleVolume ayant comme paramètre e permettant régler le volume
const handleVolume = (e) => {
  audio.volume = e.target.value;
};

// Déclaration de la fonction showHideKeys qui va permettre soit de montrer soit de cacher le nom des touches (keys)
const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

// Déclaration de la fonction pressedKey ayant comme paramètre e permettant de réupérer la touche (key) sur laquelle l'internaute a appuyée
const pressedKey = (e) => {
  //si la touche enfoncée est dans le tableau allkeys, appelle uniquement la fonction playTune
  if (allKeys.includes(e.key)) {
    // Appel de la fonction playTune(e.key)
    playTune(e.key);
  }
};

// Ecoute de l'événement "click" et appel de la fonction showHideKeys
keysCheckbox.addEventListener("click", showHideKeys);

// Ecoute de l'événement "input" et appel de la fonction handleVolume
volumeSlider.addEventListener("input", handleVolume);

// Ecoute de l'événement keydown et appel de la fonction pressedKey
document.addEventListener("keydown", pressedKey);
