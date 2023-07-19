/* PANTALLA DE INICIO */
let botonEmpezar=document.querySelector(".start-button");
let overlay=document.querySelector(".overlay");

botonEmpezar.addEventListener("click",()=> {
    botonEmpezar.classList.add("animacion");
    overlay.classList.add("animacion");
})

