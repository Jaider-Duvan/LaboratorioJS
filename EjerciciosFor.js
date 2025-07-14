// Ejercicio 1:
// •Usa un for para imprimir los números del 1 al 10 en consola.

for(let i= 1 ; i <=10 ; i++){
    console.log(i)
}

// Ejercicio 2:
// •Pide un número con prompt().
// •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10)

let numero = prompt("Ingresa un numero: ")

for (let j=1 ; j<=10;j ++){
    multi = j * numero
    console.log(j ,"x", numero,"=",multi)
}