var planetas = ["Mercurio","Venus","Tierra",
				"Marte","Jupiter","Saturno",
				"Urano","Neptuno","Pluton"];

/*for(var i=0;i<planetas.length;i++){
	if(planetas[i]==="Marte"){
	}break;
}
console.log(planetas.[i]);

planetas.unshift("Ofiuco");//agrega al inicio
//planetas.push("Ofiuco");//agrega al final
//planetas.shift();//saca el primero
//planetas.pop();//saca el ultimo
console.log(planetas.push(["Ofiuco","Luna"]));
console.log(planetas[10][1]);
console.log(planetas);
*/
planetas.forEach((p,i,array) => {
	console.log("El indice es: "+i+
		" y el planeta es: "+p);
	console.log(array);
});

//EcmaScript

var numeros = [1,2,3,4,5,6,7];

var numerosMultiplicados = numeros.map(function(numero){
	return numero * 2;
});

console.log("Array original: "+numeros);
console.log("Array x 2: "+numerosMultiplicados);