console.log("Ahorristas queriendo verdolagas")

let pesos = parseInt(prompt(" Cantidad de Pesos: "))
let valorDolar = parseInt(prompt( "Valor Dolar: "))

let promedio = (pesos / valorDolar) ; 
alert( "Con esos pesos te compras: " + promedio + " dolares")

if (promedio < 100){alert ("Buen inicio pequeño ahorrista");}
else if (promedio >= 100 && promedio < 150){ alert ("Muy bien ahorro");}
else if (promedio >= 150 && promedio <= 200){ alert("Lindo ese ahorro Ricardo Fort")}
else {alert ("Podes comprar hasta 200 dolares crack");}















