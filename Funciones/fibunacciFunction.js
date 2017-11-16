/*var fibo = function(N){
	var con1=0;
	var con2=1;
	var con3;

	//console.log(con1);
	//console.log(con2);

	for (var i = 0; i < N; i++) {
		con3=con1+con2;
		con1=con2;
		con2=con3;
		//console.log(con3);
	}
	return con3;
}

console.log(fibo(20));*/

var fibo2 = function(N){
	if(N<=1)return 1;
	return fibo2(N-1)+fibo2(N-2);
}

var conejos = fibo2(20);
console.log(conejos);


/*
	| f(N-1) | f(N-2) | Return  | N
	| f(6)   | f(5)   |f(6)+f(5)| 7
	| f(-1)  | f(-2)  |    1    | 1
	| f(7)   | f(9)   |f(8)+f(8)| 10
*/

/*
function saludo(){
	return("Hola");
}

//console.log(saludo());
var valorSaludo = saludo();
console.log(valorSaludo);
*/