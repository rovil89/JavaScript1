// Conmebol en Qatar 2022

class Conmebol {
    constructor (pais, primero, segundo, tercero) {
        this.pais = pais;
        this.primero = primero;
        this.segundo = segundo;
        this.tercero = tercero;
    }
}

const Ecuador = new Conmebol ("Ecuador", "Qatar ", "Paises Bajos", "Senegal");
const Argentina = new Conmebol ("Argentina", "Arabia Saudita", "Mexico", "Polonia");
const Brasil = new Conmebol ("Brasil", "Serbia", "Suiza", "Camerun");
const Uruguay = new Conmebol ("Uruguay", "Corea del Sur", "Portugal", "Ghana");

const arrayConmebol =[];

arrayConmebol.push(Ecuador);
arrayConmebol.push(Argentina);
arrayConmebol.push(Brasil);
arrayConmebol.push(Uruguay);

console.log(arrayConmebol);


//Menu de opciones

function menu() {
    alert("Fase de grupo esquipos sudamericanos");
    let opcion = parseInt (prompt ("De que pais queres saber la fase de grupos?: \n (Argentina, Ecuador,  Brasil, Uruguay) \n 1)Consulta grupo \n 2)Alta Pais \n 3)Baja Pais \n 4)Modifica un grupo \n 5)Salir"));
    return opcion;
}

//Consulta Argentina

function consultaPais(){
    let pais = prompt ("Ingrese pais del cual quiere saber su grupo: ")
    let Conmebol = arrayConmebol.find (Conmebol => Conmebol.pais === pais);
    console.log(Conmebol);
}

//Agregar algun otro pais

function altaPais () {
    let pais = prompt ("Ingrese Pais: ");
    let primero = prompt ("Debuta contra: ");
    let segundo = prompt ("Segundo partido vs: ");
    let tercero = prompt ("Tercer partido vs");
    let conmebol = new Conmebol(pais, primero, segundo, tercero);
    arrayConmebol.push(conmebol);

    console.log(arrayConmebol);
}

//Quitar algun pais

function bajaPais (){
    let pais = prompt("Ingrese el pais del menu desea eliminar: ");
    let conmebol = arrayConmebol.find(conmebol => conmebol.pais === pais);
    let indice = arrayConmebol.indexOf(conmebol);
    arrayConmebol.splice(indice, 1);

    console.log(arrayConmebol);

}

//Moficiar un grupo

function modificarGrupo (){
    let pais = prompt("Ingrese nombre del pais de Conmebol que desea modificiar su grupo: ");
    let conmebol = arrayConmebol.find (conmebol => conmebol.pais === pais);
    let indice = arrayConmebol.indexOf(conmebol);
    let primero = prompt ("Debut vs: ");
    let segundo = prompt ("Segundo patido vs: ");
    let tercero = prompt ("Tercer partido vs: ");
    let grupoModificado = new Conmebol (pais, primero, segundo, tercero);
    arrayConmebol.splice(indice, 1, grupoModificado);
    console.log(arrayConmebol);

}

//Funcion para salir del programa

function salir() {
    alert ("Veo que sos de Chile, y no te interesa el mundial");
}

//Ejecuto el programa

let opcion = menu();
switch (opcion) {
    case 1:
        consultaPais();
        break;
    case 2:
        altaPais();
        break;
    case 3:
        bajaPais();
        break;
    case 4:
        modificarGrupo();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Revisa el menu por favor");
        break;
}

const grupoA = ["Qatar", "Ecuador", "Senegal", "Paises Bajos"];

const listaA = document.getElementById("listaA");

for(let equipo of grupoA){
    let itemLista = document.createElement("li");
    itemLista.innerText = equipo;
    listaA.appendChild(itemLista);
}

const grupoB = ["Inglaterra", "Iran", "Estados Unidos", "Gales"];

const listaB = document.getElementById("listaB");

for(let equipo of grupoB){
    let itemLista = document.createElement("li");
    itemLista.innerText = equipo;
    listaB.appendChild(itemLista);
}

const grupoC = ["Argentina", "Arabia Saudita", "Mexico", "Polonia"];

const listaC = document.getElementById("listaC");

for(let equipo of grupoC){
    let itemLista = document.createElement("li");
    itemLista.innerText = equipo;
    listaC.appendChild(itemLista);
}

const grupoD = ["Francia", "Australia", "Dinamarca", "Tunez"];

const listaD = document.getElementById("listaD");

for(let equipo of grupoD){
    let itemLista = document.createElement("li");
    itemLista.innerText = equipo;
    listaD.appendChild(itemLista);
}

const grupoE = ["España", "Costa Rica", "Alemania", "Japon"];

const listaE = document.getElementById("listaE");

for(let equipo of grupoE){
    let itemLista = document.createElement("li");
    itemLista.innerText = equipo;
    listaE.appendChild(itemLista);
}

const grupoF = ["Belgica", "Canada", "Marruecos", "Croacia"];

const listaF = document.getElementById("listaF");

for(let equipo of grupoF){
    let itemLista = document.createElement("li");
    itemLista.innerText = equipo;
    listaF.appendChild(itemLista);
}
const grupoG = ["Brasil", "Serbia", "Suiza", "Camerun"];

const listaG = document.getElementById("listaG");

for(let equipo of grupoG){
    let itemLista = document.createElement("li");
    itemLista.innerText = equipo;
    listaG.appendChild(itemLista);
}

const grupoH = ["Portugal", "Ghana", "Uruguay", "Corea del Sur"];

const listaH = document.getElementById("listaH");

for(let equipo of grupoH){
    let itemLista = document.createElement("li");
    itemLista.innerText = equipo;
    listaH.appendChild(itemLista);
}