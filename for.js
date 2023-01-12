//Pedir un número al usuario y mostrar la tabla de multiplicar de ese número
let numero = prompt("Introduce un número")
numero = Number(numero)
let contador=1
for (let i = 1; 1 <= 10; i++) {
    contador++
    console.log(numero + "x" + i + "=" + numero * i)
}

//Pedir un número al usuario y hacer la suma de todos los números anteriores al elegido
numero = prompt("Introduce un número")
numero = Number(numero)
for (let i = 1; 1 <= numero; i++) {
    contador++
    suma += i
}
console.log(suma)
