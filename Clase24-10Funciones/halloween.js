var disfraces=["unicornio","Alice in Wonderland","Pikachu", "Hello Kitty", "Charlotte Caniggia", "Alex Caniggia", "Gogo Yubari", "britney en 2007", "orejas de tigre", "Doctora", "coneja", "Cleopatra", "estudiante de slytherin", "Leia", "Tina Turner", "La minita del bebé de Rosemary"];
console.log(disfraces.length);
function randomHalloween(disfraces){
	var disfrazLocal=disfraces;
	console.log(disfrazLocal);

	var posicion = Math.floor((Math.random()*(disfraces.length-1)));
	return disfraces[posicion];
};

var N = disfraces.push("Fantasma");

console.log(N);
/*var random = Math.random()*10;
console.log(random);*/

//.pop saca el ultimo elemento del array
//.push pone un elemento en el ultimo lugar del array