/*

$('#id') <----> id

$('.class') <----> class

$('p') <----> tag

$('p,a') <----> varios tags

$('p.texto') <----> tag con clase


EVENTOS

click

change

hover

keypress

ready

toggle

*/


$(document).ready(function(){
	$('#caja').hide();
	//$('.caja').click(function(){ //cuando hace click sobre esa clase
	//	$(this).hide(); //oculta solo ese elemento
	//});
	$('.caption').click(function(){
		$(this).toggleClass('negrita');
	});

	$('#boton').click(function(){
		$('.caja').hide();
	});

	$('#boton2').click(function(){
		$('.caja').show();
	});
});