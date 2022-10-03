//Formulario

class Pronostico{
    constructor(nombreApellido, paisCampeon, paisSubcampeon, paisTercero, paisCuarto, jugadorFigura){
        this.nombreApellido = nombreApellido;
        this.paisCampeon = paisCampeon;
        this.paisSubcampeon = paisSubcampeon;
        this.paisTercero = paisTercero;
        this.paisCuarto = paisCuarto;
        this.jugadorFigura = jugadorFigura;
    }
}
const pronosticos =[];

//Operador Ternario
let temperaturaQatar = 50

temperaturaQatar >= 40 ? console.log("Quien fue el demente que eligió a Qatar como sede con mas de 40 grados de temperatura") : console.log("Aca podria hacer el mismo calor");

//Operador Logico

if(temperaturaQatar > 45) console.log("Bienvenidos al infierno Qatarí");




//LocarlStorage y JSON
if(localStorage.getItem("pronosticos")){
    let pronostico = JSON.parse(localStorage.getItem("pronosticos"));
    for(let i = 0 ; i < pronostico.length; i++){
        pronosticos.push(pronostico[i]);
    }
}



const formulario = document.getElementById("formulario");
formulario.addEventListener("submit",(e) =>{
    e.preventDefault();
    agregarPronostico();
})

function agregarPronostico(){
    const nombre = document.getElementById("nombre").value;
    const campeon = document.getElementById("campeon").value;
    const subCampeon = document.getElementById("subCampeon").value;
    const tercero = document.getElementById("tercero").value;
    const cuarto = document.getElementById("cuarto").value;
    const figura = document.getElementById("figura").value;


const nuevoPronostico = new Pronostico (nombre, campeon, subCampeon, tercero, cuarto,  figura);
pronosticos.push(nuevoPronostico);

//LocalStorage y JSON
localStorage.setItem("pronosticos",JSON.stringify(pronosticos));

formulario.reset();
}

const contenedorPronosticos = document.getElementById("contenedorPronosticos");
const verPronosticos = document.getElementById("verPronosticos");

verPronosticos.addEventListener("click", () => {
    mostrarPronosticos();
});

function mostrarPronosticos(){
    contenedorPronosticos.innerHTML = "";
    pronosticos.forEach(pronostico => {
        const div = document.createElement("div");
        div.innerHTML=`
                        <div>
                            <p> Nombre y Apellido: ${pronostico.nombreApellido}</p>
                            <p> Pais Campeón: ${pronostico.paisCampeon}</p>
                            <p> Pais Sub-Campeon: ${pronostico.paisSubcampeon}</p>
                            <p> Pais Tercero: ${pronostico.paisTercero}</p>
                            <p> Pais Cuarto: ${pronostico.paisCuarto}</p>
                            <p> Figura Mundial: ${pronostico.jugadorFigura}</p>
                        </div>
                        <br>
                    `;
        contenedorPronosticos.appendChild(div);
    })
}
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