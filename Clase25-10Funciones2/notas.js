var notas = ["do", "mi", "fa", "sol"];
// METODOS PUSH Y POP
var notasPush = notas.push("la","si");
//notas.pop();
//NOTAS POP. (Pop va sin parametros porque siempre elimina el ultimo elemento)
//notas[4]="la";
//notas[5]="si";
console.log(notasPush);//6
console.log(notas);
console.log("El valor que retorna push es igual al length: "+(notasPush==notas.length));//true

var notaSi = notas.pop();//SI
var notaLa = notas.pop();//LA
console.log(notas);//i
console.log(notaSi,notaLa);/*console.losg("Array con push: "+notas);
var notaEliminada = notas.pop();//SI
console.los(notas);
console.log(notasEliminadas);
*/

//HACER SHIFT Y UNSHIFT

var notas = ["do","re","mi","fa","sol"];
console.log(notas.indexOf("fa"));

var reIndex = notas.indexOf("re");//1
var reMuestro = notas[reIndex];
console.log(reMuestro);

//console.log(notas.indexOf("jirafa"));
//cuando no encuentra retorna -1

if(notas.indexOf("crema") > -1){
	console.log("Tenemos stock");
}else{
	console.log("No tenemos, vuelva prontos");
}