$(document).ready(function(){
	var jdatos={"Nombre":"Pepe","Apellido":"Perez","Edad":35,"Foto":null};
	var jdatosJson = JSON.stringify(jdatos);
	var a = '<a href=Lista.html?dato='+jdatosJson+'>hola</a>';

	$('#cuerpo').append(a);
});