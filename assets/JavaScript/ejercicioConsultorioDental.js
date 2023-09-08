/* Encontrar ciclos que se puedan aplicar al contexto del Consultorio Dental /Proyecto integrador */

//Consultorio Dental

//While
/* Tratamiento de brackets. Mientras los dientes estén chuecos, se sigue el tratamiento*/
 let dientesTotalesPorAlinear = 0;
 let dientesChuecos = 6;//Suponiendo que el tratamiento dura 6 meses
 console.log("--- Ciclo While ---")
while(dientesChuecos > dientesTotalesPorAlinear){
    //Seguir tomando el tratamiento
    console.log("Sigue asistiendo a tus citas");
    //Por  cada cita que se asiste, se alinea un diente.
    dientesChuecos --;
}

//Do While
/* Para cuántas limpiezas hay material por día, mientras haya material se hacen limpiezas */
console.log("--- Ciclo Do While ---");
let limpiezasDisponibles = 5;
let limpiezas = 0;
do{
    //hacer limpieza
    limpiezas ++;
        console.log("Limpieza: " + limpiezas + " de " + limpiezasDisponibles);
    
}while(limpiezas < limpiezasDisponibles);
console.log("Última limpieza realizada");

//For:
/* Poder antender a cada paciente, limpiar los utencilios utilizados */
console.log("--- Ciclo For ---")
for(let utensiliosSucios = 1; utensiliosSucios <= 5; utensiliosSucios ++){
    console.log("Limpiando " + utensiliosSucios + " utensilios");
}
console.log("Ya no quedan utensilios sucios");