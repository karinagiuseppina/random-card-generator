/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  createNewCard();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
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
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

document
  .querySelector(".button-generate")
  .addEventListener("click", createNewCard);

function createNewCard() {
  let card = document.querySelector(".card");
  let top = card.querySelector(".top-suit");
  let bottom = card.querySelector(".bottom-suit");
  let number = card.querySelector(".number");
  top.innerHTML = bottom.innerHTML = generateRandomSuit();
  number.innerHTML = generateRandomNumber();
}
