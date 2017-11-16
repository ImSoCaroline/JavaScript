var nombre = "Nemo";
var nombres = ["Lala","Po","Dipsy","Dory"];

function findingNemo(nombre, nombres){
	for(var i=0;i<nombres.length;i++){
		if (nombre==nombres[i]){
			return true;
		}
	}
	return false;
}

if(findingNemo(nombre,nombres)==true){
	console.log("Encontramos a Nemo");
}else{
	console.log("Nemo no está");
}