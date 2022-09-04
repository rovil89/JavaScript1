alert ("Se viene el mundial de Qatar, asique nada mas lindo que ver a tu seleccion en un SAMSUNG Clase Neo QLED 8K 64x valuada en US$6.500. Cuanto saldria en tu pais? y si lo haces en cuotas?")

let pais = prompt("De que pais vas a ver a tu seleccion? (Arg, Bra, Uru, Ecu o Chi)");
let cuotas = parseInt (prompt ("En cuantas cuotas lo pagarias?"));

while(pais != "Arg" && pais != "Bra" && pais != "Uru" && pais != "Ecu" && pais != "Chi"){pais = prompt("De que pais vas a ver a tu seleccion? (Arg, Bra, Uru, Ecu o Chi)");}

switch(pais){
    case "Arg":
        alert("Pagarías "+ cuotas + " cuotas de $" + parseFloat( ((6500*285)*1.21)/cuotas).toFixed(2)+ " pesos argentinos") ;
        break;
    case "Bra":
        alert("Pagarías "+ cuotas + " cuotas de $" + parseFloat (((6500*5.17)*1.18)/cuotas).toFixed(2)+ " reales");
        break;
    case "Uru":
        alert("Pagarías "+ cuotas + " cuotas de $" + parseFloat (((6500*40.81)*1.1)/cuotas).toFixed(2)+ " pesos uruguayos");
        break;
    case "Ecu":
        alert("Pagarías "+ cuotas + " cuotas de $" + parseFloat (((6500*1)*1.12)/cuotas).toFixed(2)+ " dolares");
        break;
    case "Chi":
        alert("Ay que lastima pero este juego es solo para quienes juegan el mundial");
        break;
    default:
        alert ("Por favor, revise la consigna.");
        break;
    
}














