//Formulario

class Pronostico{
    constructor(nombreApellido, paisCampeon, paisSubcampeon, paisTercero, jugadorFigura){
        this.nombreApellido = nombreApellido;
        this.paisCampeon = paisCampeon;
        this.paisSubcampeon = paisSubcampeon;
        this.paisTercero = paisTercero;
        this.jugadorFigura = jugadorFigura;
    }
}
const pronosticos =[];

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
    const figura = document.getElementById("figura").value;


const nuevoPronostico = new Pronostico (nombre, campeon, subCampeon, tercero, figura);
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
                            <p> Figura Mundial: ${pronostico.jugadorFigura}</p>
                        </div>
                        <br>
                    `;
        contenedorPronosticos.appendChild(div);
    })
}