var barcos = [[0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,2,2,0,0,0],
[0,0,3,0,0,0,0,0,0,0],
[0,0,3,0,0,0,0,0,0,0],
[0,0,3,0,0,0,0,0,4,0],
[0,0,0,0,0,0,0,0,4,0],
[0,0,0,0,0,0,0,0,4,0],
[0,0,0,0,0,0,0,0,4,0]];


/*
var contHundidos = 0;
var contT2 = 0;
var contT3 = 0;
var contT4 = 0;


while (contHundidos<4){
	var x = prompt("Ingrese una fila de 0 a 9");
	var y = prompt("Ingrese una columna de 0 a 9");

	if (barcos[x][y]==0||barcos[x][y]=="x"){
		if (barcos[x][y]==0){
			barcos[x][y]="x";
			console.log("Agua");
		}else if (barcos[x][y]== "x") {
			console.log("Ya me lo dijiste");
		}
	}else{
		switch (barcos[x][y]) {
			case 1:
				contHundidos++;
				barcos[x][y]=-1;
				console.log("Hundiste submarino");
				break;
			case 2:
				contT2++;
				barcos[x][y]=-2;
				if(contT2==2){
					contHundidos++;
					console.log("Hundiste destructor");
				}else if (barcos[x][y]==-2) {
					console.log("Ya me lo dijiste");					
				}
				break;
			case 3:
				contT3++;
				if (contT3==3){
					contHundidos++;
					console.log("Hundiste crucero");
				}else if (barcos[x][y]==-3) {
					console.log("Ya me lo dijiste");
				}
				break;
			case 4:
				contT4++;
				if (contT4==4){
					contHundidos++;
					console.log("Hundiste acorazado");
				}else if (barcos[x][y]==-4) {
					console.log("Ya me lo dijiste");
				}
				break;
		}
	}
}

*/

function jugarBN(x,y){}

if (barcos[x][y]==0||barcos[x][y]=="x"){
	if (barcos[x][y]==0) {
		barcos[x][y]="x";
		return "Agua";
	}
	return "Ya me lo dijiste";
}else{
	switch (barcos[x][y]) {
		case 1:
			contHundidos++;
			barcos[x][y]= -1;
			return "Hundiste un submarino";
			break;
		case 2:
			contT2++;
			contHundidos++;
			barcos[x][y]=
			break;
	}
}

while (contHundidos<4) {
	console.log(jugarBN(x,y));
}||