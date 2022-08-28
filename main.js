/*
alert( "Desafio Complementario");
let nombre = prompt ("Mejor Jugador del Mundo: (para salir escribi cr7)");
while (nombre != "cr7"){console.log(nombre);
nombre= prompt ("Mejor Jugador del Mundo: (para salir escribi cr7)");}
*/


console.log ("G.O.A.T.: ");
let passwordUsuario = prompt("Mejor Jugador del Mundo: ");
const passwordAutorizado = "messi";

for(let i=0 ;i<2 ; i++) {
    if(passwordUsuario ==passwordAutorizado) {
        console.log("claro que seeeee");
        break;}
        else{ passwordUsuario = prompt ("Bue, crei que entendias algo de futbol.Disculpame");
    }
}

