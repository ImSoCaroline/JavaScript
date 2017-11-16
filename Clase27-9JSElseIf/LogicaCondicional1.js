//ejercicio1

var x;

if (x%2 == 0){
	console.log("X es par");
}else{
	console.log("X es impar");
}


//ejercicio2

var y

if (var >= 1 && var <= 7) {
	if (var == 1) {
		console.log("Domingo");
	}else if (var == 2) {
		console.log("Lunes");
	}else if (var == 3){
		console.log("Martes");
	}else if (var == 4){
		console.log("Miércoles");
	}else if (var == 5){
		console.log("Jueves");
	}else if (var == 6){
		console.log("Viernes");
	}else{
		console.log("Sábado");
	}
}else{
	console.log("El valor ingresado no es correcto");
}



//ejercicio3

var mes=prompt("Ingrese un valor del 1 al 12 segun el mes");

if(mes>=1&&mes<=12){
	switch(mes){
		case 1:
		console.log("Mes de Enero");
		break;
		case 2:
		console.log("Mes de Febrero");
		break;
		case 3:
		console.log("Mes de Marzo");
		break;
		case 4:
		console.log("Mes de Abril");
		break;
		case 5:
		console.log("Mes de Mayo");
		break;
		case 6:
		console.log("Mes de Junio");
		break;
		case 7:
		console.log("Mes de Julio");
		break;
		case 8:
		console.log("Mes de Agosto");
		break;
		case 9:
		console.log("Mes de Septiembre");
		break;
		case 10:
		console.log("Mes de Octubre");
		break;
		case 11:
		console.log("Mes de Noviembre");
		break;
		case 12:
		console.log("Mes de Diciembre");
		break;
	}
}
}

