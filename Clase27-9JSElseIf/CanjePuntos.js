var producto = 1000;
var puntos = 500;
var valorFinal;
var premium = true;

if (puntos>=producto) {
	alert("Canje directo");
}else if (puntos>=producto*0.5){ 
	if(premium){
	valorFinal=(producto-puntos)%5;
	alert("Puntos + " +valorFinal+" efectua el canje.")
	}else{
	valorFinal=(producto-puntos)%3;
	alert("Puntos + "+valorFinal+" efectua el canje.")
	}
}else{
	console.log("Paga el total");
}
