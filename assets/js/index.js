// Operador ternario. 

// true ? "verdadero" : "falso"  //atajo a una sentencia de if

// if(2 + 2 === 6 ) {
//     console.log("resultado 6")
// } else if (2 + 2 === 4){
//     console.log("resultado 6")
// }else {
//     console.log("resultados incorrectos")
// }



// Ejercicio 1: Comparar Tres Números Escribe una función que tome tres números como parámetros y determine cuál es el mayor. Si todos son iguales, debe indicarlo.
//            //       10 50   10 
// const numeroMayor = (a, b, c) => {  //es una mala practica pero se puede anidar ternarios
//     return (
//     a === b && b === c ? 'Todos los números son iguales' 
//     : a >= b && a >= c ? "el mayor es: " + a
//     : b >= a && b >= c ? "el mayor es: " + b
//     : "el mayor es: " + c
//     )

// }
// console.log(numeroMayor(5, 10, 15)); // 'El mayor es 15'
// console.log(numeroMayor(8, 8, 4));   // 'El mayor es 8'
// console.log(numeroMayor(10, 10, 10)); // 'Todos los números son iguales'


// Ejercicio 2: Tipo de Triángulo Dado tres lados de un triángulo, determina si el triángulo es equilátero, isósceles o escaleno. (IMPORTANTE EL ORDEN)

// console.log(tipoTriangulo(3, 3, 3)); // 'Triángulo equilátero'
// console.log(tipoTriangulo(4, 4, 5)); // 'Triángulo isósceles'
// console.log(tipoTriangulo(3, 4, 5)); // 'Triángulo escaleno'




// Ejercicio 3: Determinación de Palíndromo Simple Escribe una función que determine si una palabra es un palíndromo. Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás.

// const palindromo = (palabra) => {
//     return palabra.toLowerCase() === palabra.toLowerCase().split("").reverse().join("") ? 'Es un palíndromo' : 'No es un palíndromo'
// }

// console.log(saludo)

// pasar todas las letras a minusculas toLowerCase()

// lo doy vuelta y lo leo.
// comparar con el original


// console.log(palindromo('radar'));  // 'Es un palíndromo'
// console.log(palindromo('hola'));  // 'No es un palíndromo'
// console.log(palindromo('Level'));  // 'Es un palíndromo'

// 0 15 "" "palabra" {} {contenido: "hola"} [] null ["contenido"] function() {}. undefined NaN


// --------------Falsy ------------- Truthy ------------

// Falsy: 0 - ""  - null - undefined  - NaN

// Truthy:  15 - {} - [] -  "palabra" - {contenido: "hola"} - ["contenido"] - function() {}.

// if(function() {}) {
//     console.log("es verdadero")
// }else {
//     console.log("es falso")
// }


// Escribe una función que reciba un nombre de usuario y verifique si es válido. Un nombre de usuario es válido si no está vacío.

// const verificarUsuario = (usuario) => {
//     return usuario === "" || usuario === null || usuario === undefined ? 'Nombre de usuario no válido' : 'Nombre de usuario  válido';

// }

//somplificado seria
const verificarUsuario = (usuario) => {
    return usuario ? 'Nombre de usuario válido' : 'Nombre de usuario no válido';

}

console.log(verificarUsuario(""))