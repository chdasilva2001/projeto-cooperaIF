import { togglemodal, addListeners } from "./script.js";

const addButton = document.querySelector(".add-button"); 
console.log(addButton)
const cancelButton = document.querySelector(".cancel") ; 
const saveButton = document.querySelector(".save") ;
const modalInventory = document.querySelector(".modal-inventory");
const fadeInventory = document.querySelector(".fade-modal-inventory") ; 
 
addListeners(addButton, cancelButton, saveButton, fadeInventory, modalInventory )

