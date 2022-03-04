const description = document.querySelector("#description");
const text = document.querySelector("#text-input");
const button = document.querySelector("#play-btn");
const buttonIcon = document.querySelector("#play-icon");
const buttonText = buttonIcon.nextElementSibling;
/* create a new speech and set something */

const speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
speech.volume = 0.5;

speech.onstart = () => {
  buttonText.textContent = "Pause";
  buttonIcon.classList.replace("fa-play", "fa-pause");
};
speech.onend = () => {
  buttonText.textContent = "Play";
  buttonIcon.classList.replace("fa-pause", "fa-play");
};

button.addEventListener("click", () => {
  /* get and set text  */
  text.value === ""
    ? (description.textContent = "Please enter something !")
    : (speech.text = text.value) &&
      (description.textContent = "Type here then press the play button") &&
      /* play speech */
      window.speechSynthesis.speak(speech);
});
