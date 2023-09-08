/*

Condiciones: alterar el orden natural del codigo
estructura de control: controlar la ejecución del código


Ciclos o bucles  (loops)

También conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de código de forma repetida, hasta que se cumpla una condición específica.

Es importante usar ciclos para automatizar tareas repetitivas

En JS existen ls siguientes ciclos:

    - while
    - do while
    - for

Iterar: Proceso de repetir una secuencia de instrucciones
Estructura de control: herramienta especial para crear algoritmos o programas más dinámicos y flexibles.


*/

//Funciones: reducir el código
//suma();
//suma();
//suma();
//... n_suma();

/* While: Ejecuta un bloque de código mientras se cumpla una condición especifica. Este ciclo se repite mientras la condición sea verdadera, y el bloque de código se ejecuta siempre y cuando la condición se mantenga. La condición se evalua antes de cada iteración.

while(condicion){
    //codigo que se ejecuta
}
*/

// while(miCrushMeQuiere){
//     console.log("Seré feliz");
// }

//NOTA, esto significa PELIGRO. Esto es un ciclo sin fin (infinito), porque la condición que se evalue siempre es True, significa que no hay nada que nos diga que se va a detener.
/*while(true){

} 

Analogía: Seguir una receta para preparar sopa

    Lista de ingredientes:
        - Zanahorias
        - Papas
        - Chayote
        - Limón
        - Agua
        - Espinaca

    Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.

    Paramos cuando ya no tengamos ingredientes.

*/

//Ejemplo de un consultorio dental
let capacidadPacientes = 10;
let pacientesEnConsultorio = 15;

//mientras 15 sea menor que 50...
while(pacientesEnConsultorio < capacidadPacientes){
    //Seguiré dando servicio
    console.log("Seguimos dando servicio");
    //aumento en uno mis pacientes
    pacientesEnConsultorio++;
} 

//Mientras sea verdadero, se ejecuta la instrucción (piden permiso para ir a una fiesta)



/*Do While (hacer mientras)

// Se ejecuta la instrucción, mientras a verdadero(pedir perdón por ir a la fiesta)


El bucle do while se diferencia del while ya que aquí se hace o se ejecuta la instrucción al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.


do {
    //código a ejecutar
}while(condicion);

Analogía: Cuando preparamos un pastel (hornear 180° por 30 minutos o hasta que con la prueba del palillo salga limpio el palillo)

*/

/*var contadorPacientes = 0;

do{
    var nombre = prompt("Ingresa el nombre del paciente");
    if(nombre){
        contadorPacientes ++;
    }
}while(contadorPacientes < 5 );

console.log("Numero total de pacientes: ", contadorPacientes); */

/*
For (para)

Se utiliza cuando conocemos el número exacto de iteraciones que vamos a realizar. Consiste de 3 partes fundamentales:

    - inicialización: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
    - condición: es el detonante que verificaremos antes de cada iteración, para saber si se sigue ejecutando o no (siempr y cuando sea verdadera)
    - expresión de iteración (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.

    for(inicializacion; condición ; expresión de iteración){
        //bloque de código a ejecutrar
    }

*/

//Crea un cóigo que imprima los números del 0 al 4

for(var valorInicial = 0; valorInicial < 5; valorInicial++){
    console.log(valorInicial);
}

// Versión más "comercial"
for(var i = 0; i<5; i++){
    console.log(i);
}

// Consultorio dental registo de citas con un for

let cantidadCitaDiarias = 5;

for(let i= 1; i<= cantidadCitaDiarias; i++){
    //var nombre = prompt("Ingrese el nombre del paciente " + i);

    console.log("El paciente");
}






