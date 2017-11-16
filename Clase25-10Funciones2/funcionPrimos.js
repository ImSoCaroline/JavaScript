/*function primos(N){
	for (var i<N; i>1;i--){
		var x = N % i;
		if(x==0){
			return false;
		}
	}
	return true;
}
console.log(primos(13));*/

/*function primos(N){
	var i=2;
	while((i>1)&&(i<N)){
		var x = N%1;
		if(x==0){
			return false;
		}
		i++;
	}
	return true;
}
console.log(primos(29));*/

function primos(N){
	var i=2;
	do{
		var x=N%1;
		if(x==0){
		return false;
		}
		i++
	}while((i>1)&&(i<N))
	return true;
}
console.log(primos(29));