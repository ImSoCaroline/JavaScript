/*A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

V W X Y Z A B C D E F G H I J K L M N O P Q R S T U*/

var abc1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var abc2 = [];
var pass = "HOLA";
var pass2 = "";
var pass3 = "";

for (var i = 0; i < abc1.length; i++) {
	abc2[(i+13)%abc1.length] = abc1[i];
}


for(var i=0;i<pass.length;i++){
	var idxCaracter = abc1.indexOf(pass[i]);
	pass2 += abc2[ idxCaracter ];
}

/*
//Itero por cada caracter de mi string
for (var i=0; i<pass.length;i++){
	//Itero por cada caracter del abc
	for (var j=0;j<abc1.length;j++){
		if(pass[i]===abc1[j]){
			pass2 += abc2[j];
		}
	}
}
*/

for (var i=0;i<pass2.length;i++){
	var idxCaracter2 = abc2.indexOf(pass2[i]);
	pass3 += abc1[ idxCaracter2 ];
}

console.log(pass2);
console.log(pass3);