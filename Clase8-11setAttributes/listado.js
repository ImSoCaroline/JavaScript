var lista=['perezonso','gatordo','unicornio','delfin mageco','hada'];
var ul=document.getElementById('listad');
var boton = document.getElementById('buscar');
var mostrar = false;

boton.addEventListener('click', myFunction);

function myFunction () {

	if (mostrar==false){
		for(var i=0;i<lista.length;i++){
			var elem=document.createElement('li');
			elem.textContent=lista[i];
			ul.appendChild(elem);
		}
		boton.innerHTML= 'Ocultar';
		mostrar = true;
	}else{
		for(var i=lista.length-1;i>-1;i--){
			var li=document.getElementsByTagName('li');
			ul.removeChild(li[i]);
		}
		boton.innerHTML='Ver';
		mostrar = false;
	}
}
