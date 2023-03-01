// EXPRESIONES REGULARES

// una expresion regular, es un OBJETO que describe un patron de caracteres

// los patrones de las expresiones regulares se usan para encontrar una combinacion de caracteres
// dentro de una cadena de texto

// la clase REGEXP de JS represanta la libreria para expresiones regulares
// String y las expresiones regulares, definen una serie de metodos, que usan
// expresiones regulares para realizar y buscar coincidencias de patrones

// var regexp = new RegExp(patron, atributos);

// patron: es una cadena que especifica el patron de la expresion regular
// atributos: es una cadena opcional, pueden ser de este tipo:
  // g: busqueda completa, encontrando todos los resultados positivos
  // i: ignora entre mayusculas y minusculas
  // m: trata los caracteres de inicio y fin con ^ y $

// const cedula = 'correo@correo.algo';
// const regExp = new RegExp(/[@]/);
// const resultado = regExp.test(cedula);

// console.log(resultado);

// /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/  para validacion de email con
// expresiones regulares

//meta caracter DE LAS EXPRESIONES REGULARES
// nombre.algo@dominio.ext

// w ---> abarca todos los caracteres desde la a-z, A-Z y 0-9
// + ---> debe haber 1 o mas ocurrencias del patron definido
// ? ---> debe haber 0 o 1 ocurrencia del patron definido
// * ---> indica que debe haber 0 o mas ocurrencias del patron definido
// {n,m} --> el patron se puede repetir un minimo de n, veces y un maximo de m veces
// ^ ---> indica que el texto debe comenzar con el patron definido
// $ ---> indica que la cadena debe finalizar por el patron definido
// [] ---> indica que la cadena puede tener algunos de los caracteres que se encuentran entre los corchetes

const cedula = 'correo@correo.algo';
const regExp = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/);
const resultado = regExp.test(cedula);

console.log(resultado);