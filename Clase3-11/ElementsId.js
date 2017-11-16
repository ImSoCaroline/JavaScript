//ESTA EN PPTS   
/*window.onload(){ //ESTO SI PONGO EL SCRIPT DENTRO DEL HEAD
	getElementById("boton"); //BURCAR TODO
} //=>JS

document.ready();{

}//=>JQUERY
*/

function changeColor(color){
	var e = document.getElementById("test");
	e.style.color = color;
}

function validar(){
	var nombre = document.getElementById("nombre");
	var pass = document.getElementById("pass");

	if (nombre.value==""||pass.value.length==0){
		alert("Deben completarse ambos campos");
	}
}