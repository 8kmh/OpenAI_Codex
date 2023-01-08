import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chatContainer");

let loadInterval;

// Fonction qui ajoute des petits point quand le bot réfléchis à la réponse
const loader = (element) => {
  element.textContent = "";

  loadInterval = setInterval(() => {
    element.textContent += ".";

    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
};

// Fonction qui permet d'afficher un caractère toutes les 20ms quand le bot écrit une réponse
const typeText = (element, text) => {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
};

// création d'une id unique
const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimanString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimanString}`;
};
