// Ejercicio 1:
// •Pide al usuario su edad.
// •Si es mayor o igual a 18, muestra "Puedes entrar".
// •Si no, muestra "No puedes entrar".

let edad;
edad = prompt("Ingrese su edad: ")
if (edad >=18) {
    console.log("Puedes entrar")
}else{
    console.log("No Puedes entrar")
}

// Ejercicio 2:
// •Pide un número.
// •Si es positivo, muestra "Es positivo".
// •Si es negativo, muestra "Es negativo".
// •Si es cero, muestra "Es cero"

let numero;
numero= prompt("Ingresa un numero: ")
if (numero > 0){
    console.log("El numero es positivo")
}else if(numero< 0){
    console.log("El numero es Negativo")
}else{
    console.log("El numero es cero")
}