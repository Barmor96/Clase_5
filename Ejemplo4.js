let examen1 = parseFloat("90");
let examen2 = parseFloat("85");
let examen3 = parseFloat("100");

promedio = (examen1 + examen2 + examen3) / 3;
console.log(promedio);

if (promedio >= 60 && promedio <85 ) {
    console.log("Pasaste peor no ganaste nada");
}
if (promedio <60) {
    console.log("Ya te la pelaste compa");
        
}
if (promedio > 85) {
    console.log("Te toca sobre");   
}
