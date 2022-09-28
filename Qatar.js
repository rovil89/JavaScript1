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


//Dom grupos

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

// Botones fases finales

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log("Ingresaste a los Octavos de Final");
});

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    console.log("Ingresaste a los Cuartos de Final");
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    console.log("Ingresaste a las Semis Finales");
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    console.log("Ingresaste a la Final");
});

//Evento onmousemove

const copa = document.getElementById("copa");
copa.onmousemove = () => {
    console.log("Pasaste el mouse por la copa");
}

//Botones campeon
const boton = document.querySelectorAll("button");

boton.forEach(function (item) {
    item.addEventListener("click", function(){
        item.style.backgroundColor = item.dataset.color;
    });
});