diaDeLaSemana = "Viernes";

console.log("Hoy es " + diaDeLaSemana);

if (diaDeLaSemana === "Lunes" || diaDeLaSemana === "Miercoles") {
    console.log( "Historia");
}
if (diaDeLaSemana === "Martes") {
    console.log("Natacion");
    
}
if (diaDeLaSemana === "Jueves") {
    console.log("Esgrima");
    
}
if (diaDeLaSemana === "Viernes" || diaDeLaSemana === "Sabado" || diaDeLaSemana === "Domingo") {
    console.log("Descanso");
    
}else{
    console.log("Ese día no existe man");
    
}
