//EJERCICIO 1
console.log("EJERCICIO 1");
console.log(" ");
var numeros = [];

for(var i=0;i<10;i++){
	numeros[i] = i+1;
}

var array2 = numeros.map(function(numero){
	return numero +10;
});

console.log("Array original: "+numeros);
console.log("Array + 10: "+array2);
console.log(" ");
console.log(" ");


//EJERCICIO 2

console.log("EJERCICIO 2");
console.log(" ");
var stri = ["Chocolate", "Gatitos", "Pizza", "Unicornio"];

var strin = stri.map(function(palabras){
	return palabras.toUpperCase();
});

console.log(stri);
console.log(strin);