let tablero=document.querySelector(".tablero");
let casillas=document.querySelectorAll(".casillas");
let casilla1=document.querySelector("#casilla1");
let casilla2=document.querySelector("#casilla2");
let casilla3=document.querySelector("#casilla3");
let casilla4=document.querySelector("#casilla4");
let casilla5=document.querySelector("#casilla5");
let casilla6=document.querySelector("#casilla6");
let casilla7=document.querySelector("#casilla7");
let casilla8=document.querySelector("#casilla8");
let casilla9=document.querySelector("#casilla9");
let anuncioTurno=document.getElementById("anuncio-turno");
let contador=1;
/* NOMBRE JUGADORES */
let nombreJugador1=prompt("Nombre del jugador 1").toUpperCase();
let nombreJugador2=prompt("Nombre del Jugador 2").toUpperCase();

const nombreF=(e)=>{
    /* SEGUNDO PASO: ESTABLECER CAMBIO DE COLOR*/
if (contador==1) {
    e.target.classList.add("casilla-cruz");
} else if(contador==2) {
e.target.classList.add("casilla-circulo");
}
/* CAMBIO DE VALOR ATRIBUTO MARCADO*/
e.target.setAttribute("marcado", `${contador}`);

let soluciones=[ 
    [casilla1.getAttribute("marcado"),casilla2.getAttribute("marcado"),casilla3.getAttribute("marcado")],
    [casilla4.getAttribute("marcado"),casilla5.getAttribute("marcado"),casilla6.getAttribute("marcado")],
    [casilla7.getAttribute("marcado"),casilla8.getAttribute("marcado"),casilla9.getAttribute("marcado")],
    [casilla1.getAttribute("marcado"),casilla5.getAttribute("marcado"),casilla9.getAttribute("marcado")],
    [casilla3.getAttribute("marcado"),casilla5.getAttribute("marcado"),casilla7.getAttribute("marcado")],
    [casilla1.getAttribute("marcado"),casilla4.getAttribute("marcado"),casilla7.getAttribute("marcado")],
    [casilla2.getAttribute("marcado"),casilla5.getAttribute("marcado"),casilla8.getAttribute("marcado")],
    [casilla3.getAttribute("marcado"),casilla6.getAttribute("marcado"),casilla9.getAttribute("marcado")],
]
/* BUCLE DE COMPROBACIÓN*/
let valorAtributoMarcado=e.target.getAttribute("marcado");

for (let i = 0; i < soluciones.length; i++) {
let contadorCoincidencias=0;
bucleSecundario:
for (let j = 0; j < soluciones[i].length; j++) {
if (soluciones[i][j]!==valorAtributoMarcado) {
break bucleSecundario;
}
contadorCoincidencias++
/* Si el bucle no se frena, es que ha coincidido
con una solución */
}
if(contadorCoincidencias==3) {
    /* Bloquea todas las casillas si hay un ganador */
    for (const casilla of tablero.children) {
        casilla.removeEventListener("click", nombreF);
    }
    if (contador==1) {
        anuncioTurno.classList.add("blinking");
        anuncioTurno.style.color="red";
        return anuncioTurno.textContent=`GANADOR: ${nombreJugador1}`;
    }
    else if(contador==2) {
        anuncioTurno.classList.add("blinking");
        anuncioTurno.style.color="darkblue";
        return anuncioTurno.textContent=`GANADOR: ${nombreJugador2}`;
    }
}}
/* EMPATE */
let contadorEmpate=0
for (const casilla of tablero.children) {
    if(casilla.getAttribute("marcado")>0) contadorEmpate++;
}
if (contadorEmpate==9) {
    anuncioTurno.style.color="purple";
    anuncioTurno.classList.add("blinking");
    return anuncioTurno.textContent="EMPATE";
}
/* Cambio contador */
if (contador==1) {
contador++;
} else {
contador--;
}
/* Llamada a siguiente turno */
turno(contador);
}
const turno=(contador)=> {
    if (contador==1) {
        anuncioTurno.textContent=`TURNO DE ${nombreJugador1}`
    } else if(contador==2) {
        anuncioTurno.textContent=`TURNO DE ${nombreJugador2}`
    }
    for (const casilla of tablero.children) {
        casilla.removeEventListener("click", nombreF);
        if (casilla.getAttribute("marcado")=="0") {
            casilla.addEventListener("click", nombreF);
        }
    }
}
turno(contador);