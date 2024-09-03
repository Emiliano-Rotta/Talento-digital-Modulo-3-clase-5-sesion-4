//Preferentemente usar oprador ternario

//Ejercicio 1: Validación de Formularios
// Consigna:
// Crea una función validar que reciba tres parámetros: usuario, contraseña, y anio. La función debe validar lo siguiente:
// El usuario no debe estar vacío.
// la contraseña debe tener al menos 8 caracteres.
// anio debe ser mayor o igual a 18.

// // Si todas las validaciones son correctas, la función debe devolver 'Formulario válido'. Si alguna falla, debe devolver un mensaje indicando cuál validación falló. Usa operadores lógicos y ternarios.

// const validar = (usuario, contraseña, anio) => {
//     return !usuario ? 'El nombre de usuario no puede estar vacío'
//     : contraseña.length < 8 ? 'La contraseña debe tener al menos 8 caracteres'
//     : anio < 18  ? 'Debes tener al menos 18 años'
//     : "Formulario valido";
// }


// console.log(validar("Emiliano", "123456" , 31 ))
// console.log(validar("", "12345678" , 31 ))
// console.log(validar("Emiliano", "12345678" , 15 ))


// Ejercicio 2: Determinación de Horario de Atención
// Consigna:
// Crea una función estaAbierto que reciba dos parámetros: dia y hora. La función debe determinar si una tienda está abierta basado en los siguientes horarios:
// La tienda está abierta de lunes a viernes de 9 AM a 6 PM.
// Los sábados, está abierta de 10 AM a 4 PM.
// Los domingos está cerrada.
// La función debe devolver 'Abierto' o 'Cerrado' utilizando operadores lógicos y ternarios.

// const estaAbierto = (dia, hora) =>{
//     return dia === "Domingo" ? "Cerrado" 
//     : (dia !== "Sabado" ) && (hora >= 9 && hora < 18) ? "Abierto"
//     : dia === "Sabado" && (hora >= 10 && hora < 16) ? "Abierto"
//     :"Cerrado"
// }

// console.log(estaAbierto('Lunes', 10));  // 'Abierto'
// console.log(estaAbierto('Sabado', 15)); // 'Abierto'
// console.log(estaAbierto('Sabado', 17)); // 'Cerrado'
// console.log(estaAbierto('Domingo', 12)); // 'Cerrado'