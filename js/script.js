const togglemodal = (modalName, fadeName) => {
    modalName.classList.toggle("hide") ;
    fadeName.classList.toggle("hide") ;  
}

const addListeners = (condition1, condition2, condition3, condition4, modalName) => {
    [condition1, condition2, condition3, condition4].forEach((elemento) => {
        console.log(elemento)
        elemento.addEventListener("click", () => {
            togglemodal(modalName, condition4) ; 
        });
});
}



export {togglemodal, addListeners} ; 

 