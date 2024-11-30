/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let suits = [
    { name: "hearts", symbol: "♥" },
    { name: "diamonds", symbol: "♦" },
    { name: "clubs", symbol: "♣" },
    { name: "spades", symbol: "♠" }
  ];

  //seleccionar 1 número y 1 palo de forma aleatoria
  let value = values[Math.floor(Math.random() * values.length)];
  let suit = suits[Math.floor(Math.random() * suits.length)];

  // generar carta a partir de número y palo seleccionado
  let card = document.getElementById("card");
  card.querySelector(".top").textContent = suit.symbol;
  card.querySelector(".middle").textContent = value;
  card.querySelector(".bottom").textContent = suit.symbol;

  // añado al elemento div (id=card) el estilo del palo seleccionado
  card.className = suit.name;
}

//reasignar tamaño por usuario
function resizeCard() {
  let card = document.getElementById("card");
  let widthInput = document.getElementById("card-width").value;
  let heightInput = document.getElementById("card-height").value;

  if (widthInput) {
    card.style.width = widthInput;
  }
  if (heightInput) {
    card.style.height = heightInput;
  }
}

window.onload = function() {
  //write your code here
  generateCard();
  let el = document.getElementById("generate");

  //reasignación de tamaño de la carta
  let resizeButton = document.getElementById("resize");
  resizeButton.addEventListener("click", resizeCard);

  //generador de cartas cada 10 segundos
  setInterval(generateCard, 10000);

  //botón de generar carta aleatoria
  el.addEventListener("click", generateCard);
};
