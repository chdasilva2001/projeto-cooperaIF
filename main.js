// inicio código registro de vendas
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

const togglemodal = () => {
    modalPrincipal.classList.toggle("hide") ;
    fade.classList.toggle("hide") ;  
}

[openModal, confirmButton, noConfirmButton, fade].forEach((el) => {
    el.addEventListener("click", () => togglemodal()) 
})

  // fim código registro de vendas
  
 const addButton = document.querySelector(".add-button"); 
 const cancelButton = document.querySelector(".cancel") ; 
 const saveButton = document.querySelector(".save") ; 
 const modalInventory = document.querySelector(".modal-inventory"); 
 const fadeInventory = document.querySelector(".fade-modal-inventory")

 const togglemodal2 = () => {
    modalInventory.classList.toggle("hide-inventory") ;
    fadeInventory.classList.toggle("hide-inventory") ; 
 }

 [addButton, cancelButton, saveButton, fadeInventory].forEach((elemento) => {
     elemento.addEventListener("click", () => togglemodal2())
 })