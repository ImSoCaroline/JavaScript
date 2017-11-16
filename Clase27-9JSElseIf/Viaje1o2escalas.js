var presupuesto, tiempo, valor1esc, valor2esc, hostel, sobra;

if (tiempo == sobra) {
    console.log("Viaje con 2 escalas y hostel");
    if (valor2esc + hostel > presupuesto) {
        console.log("Sale más tarde, viaja con 2 escalas y no duerme en hostel");
    } else {
        console.log("Duerme 1 semana en el hostel");
    }
} else if (valor1esc < presupuesto) {
    console.log("Viaje de 1 escala y llega temprano al trabajo");
} else {
    console.log("Viaje de 2 escalas y llega tarde al trabajo");
}