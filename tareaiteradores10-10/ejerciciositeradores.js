/*
		//Ejercicio 1
		var numeros;
		var array = [];

		numeros=prompt("Ingrese un valor");

		for (var i=0;i<numeros;i++){
			array[i] = i;
			console.log(array);
		}

		//Ejercicio 2

		var numeros;
		var array = [];

		numeros=prompt("Ingrese un valor");

		for (var i=0;i<numeros;i++){
			array[i] = i;
			if(array[i]%2==1){
				array[i] = i;
			}else{
				array[i] = 0;
			}
			console.log(array);
		}

		//Ejercicio 3y4

		var x = [10,24,36,7,98,11,14,20];
		var max = 0;
		var maxPosition;

		for (var i = 0; i < x.length-1; i++) {
		 if (x[i] > max) {
		  max = x[i];
		  maxPosition = i+1;
		 }
		}

		console.log("Mi array es ", x);
		console.log("El valor máximo del array es: ",max);
		console.log("Y su posición es", maxPosition);
		

		//Ejercicio 5

		var x = [10,24,36,7,98,11,14,20,98,14,98];
		var max = x[0];
		var rep = 0;
		var i;

		for(i=0;i<x.length;i++){
			if (x[i]>=max){
				if(max==x[i]){
					rep++;
				}else{
					rep=1;
				}
				max=x[i];
			}

		}

		console.log("El mayor valor es: "+max+" y se repite "+rep+" veces.");
*/
		//Ejercicio 6

		var x=["a","l","f","a"];
		var y=["a","l","f","a","j","o","r"];
		var i, N, j, M;
		var distinto = false;
		var xL=x.length;
		var yL=y.length;
		var cont = 0;
		var match = [];

		if(x.length==y.length){
			console.log("Ambos arrays son igual de largos")
			for (i = 0; i < x.length; i++) {
				if(x[i]!=y[i]){
					distinto = true;
				}
			}
		}else{
			if(xL>yL){
				console.log("X es mas largo");
				N=yL;
				M=xL;
			}else{
				console.log("Y es mas largo");
				N=xL;
				M=yL;
			}
		}


		for (i = 0; i < N; i++) {
			for (j = 0; j < M; j++) {
				if(x[i]==y[j]){
					match[]; //????
				}
			}
		}
/*

		console.log("La cantidad de letras repetidas es: "+cont);

		var datos1=["Fido","Gomez",26,15000.78,true];
		var datos2=["Gervasio","Fernandez",32,28.550,false];
		var i;


		for(i=0;i<datos1.length;i++){
			if(Number.isInteger(datos1[i]) && Number.isInteger(datos2[i])){
				if(datos1[i]>datos2[i]){
					console.log("Fido es mayor");
				}else{
					console.log("Gervasio es mayor");
				}
			}else if (typeof(datos1[i])=="boolean"&& typeof(datos2[i]== "boolean")) {
				if(datos1[i]){
					console.log("Fido esta casado");
				}
				if(datos2[i]){
					console.log("Gervasio esta casado");
				}
			}
		}

*/