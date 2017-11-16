//var cajas = document.getElementsByTagName("div");
var cajas = document.getElementsByClassName("caja");

var primeraCaja = document.getElementById("primeraCaja");

//cajas[2].textContent = "Hola mundo";

primeraCaja.innerHTML = "<h1> Hola mundo</h1>";

var caja = document.createElement("div");
var contenido = document.createTextNode("Nueva caja");

//agregar un nodo dentro de otro
caja.appendChild(contenido);


//caja.setAttribute("class","caja");
caja.className="caja naranja";


var contenedor = document.getElementById("contenedor");
contenedor.appendChild(caja);

primeraCaja.style.background = 'blue';

//movemos la caja a la posicion deseada
//contenedor.insertBefore(caja,cajas[2]);

contenedor.replaceChild(caja,cajas[2]);