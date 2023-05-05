import { togglemodal, addListeners } from "./script.js";

console.log("Script carregado.");
const decreaseButtons = document.querySelectorAll('.decrease');
const increaseButtons = document.querySelectorAll('.increase');
const quantityInputs = document.querySelectorAll('.quantity');

decreaseButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      let quantity = parseInt(quantityInputs[i].value);
      if (quantity > 0) {
        quantity--;
        quantityInputs[i].value = quantity;
      }
    });
});
  
increaseButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    let quantity = parseInt(quantityInputs[i].value);
    quantity++;
    quantityInputs[i].value = quantity;
});
  });


const openModal = document.querySelector("#button-finish"); 
const confirmButton = document.querySelector("#confirm") ; 
const noConfirmButton = document.querySelector("#no-confirm") ; 
const modalPrincipal = document.querySelector(".modal-confirm")
const fade = document.querySelector(".fade-modal-confirm") ; 

addListeners(openModal, confirmButton, noConfirmButton, fade, modalPrincipal)


 

