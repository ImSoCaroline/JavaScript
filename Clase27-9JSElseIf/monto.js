var monto;
var descuento;
var medioPago;
var recargo;

if (monto>=500 && monto<1000 && medioPago == "Efectivo") {
	descuento = (monto*5)/100;
	monto = monto - descuento;
} else if (monto>=500 && monto<1000 && medioPago == "Tarjeta"){
	recargo = (monto*5)/100;
	monto = monto + recargo;
} else if (monto >= 1000 && monto < 2000 && medioPago == "Efectivo") {
	descuento = (monto*10)/100;
	monto = monto - descuento;
} else if (monto >= 1000 && monto < 2000 && medioPago == "Tarjeta") {
	descuento = (monto*10)/100;
	recargo = (monto*2.5)/100;
	monto = monto + recargo - descuento;
} else if (monto >= 2000 && medioPago == "Efectivo") {
	descuento = (monto*20)/100;
	monto = monto - descuento;
} else if (monto >= 2000 && medioPago == "Tarjeta") {
	descuento = (monto*10)/100;
	monto = monto - descuento;
} else {
	monto;
}