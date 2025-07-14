// Ejercicio 1:
// •Pide un número con prompt().
// •Usa un while para contar desde 1 hasta ese número.
// •Muestra cada número en consola.


let numero , contador=1
numero = prompt("Ingresa un numero: ")
while (contador <= numero){
    console.log(contador)
    contador ++
}



// Ejercicio 2:
// •Pide una contraseña con prompt().
// •Usa un while para seguir preguntando hasta que ingrese "1234".
// •Cuando acierte, muestra "Contraseña correcta".

let acceso = false;
while (acceso == false) {
    let contraseña = prompt("Ingresa la contraseña: ");
    if(contraseña ==="12345"){
        console.log("Contraseña Correcta")
        acceso =true
    }
        
    else{
        console.log("Contraseña incorrecta")
    } 
}