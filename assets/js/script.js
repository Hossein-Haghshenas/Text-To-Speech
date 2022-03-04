const text = document.querySelector("#text-input");
const button = document.querySelector("#play-btn");
const buttonIcon = document.querySelector("#play-icon");

/* create a new speech and set something */

const speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
speech.volume = 0.5;

speech.onstart = () => {
  buttonIcon.classList.replace("fa-play", "fa-pause");
};
speech.onend = () => {
  buttonIcon.classList.replace("fa-pause", "fa-play");
};

button.addEventListener("click", () => {
  /* get and set text  */
  speech.text = text.value;
  /* play speech */
  window.speechSynthesis.speak(speech);
});
