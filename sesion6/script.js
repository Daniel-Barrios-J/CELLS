//escribir codigo javascript bien estructurado

//explicar reglas de alcance, para variables locales
//usar funciones invocadas de inmediato, modostricto, espacio de nombres
//usar objetos y funciones globales que son comunes en lenguaje JS

//parecido en sintaxis a JAVA y C++
//SCOPE (alcance), Hoisting (elevacion)

//Cuando se declara una variable en JS, tiene un de dos ambitos
  // una variable puede tener alcance global si se define fuera de una funcion
  //unas variable tiene alcance de funcion, si se define dentro de una funcion

// si se declara una variable dentro de un bloque, la visibilidad de la variable
// se ELEVA al alcance de la funcion, tal como si la variable se declarara al comienzo de la funcion

// la caracteristica mas arriba señalada mediante la cual las variables declaradas de un bloque
// se elevan al alcance de una funcion, se conoce como hoisting (ELEVACION)

// var xx = 1;

// function demo(){
//   if(true) {
//     var xx = 10;
//     console.log(`el valor es ${xx}`);

//     var xx = 100;
//     function funInner() {
//       if(true) {
//         var xx = 1000;
//       }
//       console.log(`el valor es ${xx}`);
//     }
//     funInner()
//   }
// }

// demo();

//ESPACIO DE NOMBRES

// este concepto se usa para evitar conflictos de nombres

//cada codigo de js de la app web, podran acceder a las variables globales

//las apps js pueden usar librerias de tercerors que definen sus propias varaibles globales

// JS proporciona varios mecanismos que lo ayudan a evitar conflictos de nombres globales
// que incluyen:
  //funciones invocadas inmediatamente
  //esapcios de nombre
  //modo estricto


// FUNCIONES INVOCADAS INMEDIATAMENTE

// Es una funcion que se define y se ejecuta de inmediato
// se define una funcion invocada inmediatamente, envolviendola en una llamada de funcion anonima
// que se ejecuta inmediatamente

// (function() {
//   //logica
// })()

// let x = function cualquiera(){
//   console.log('jelo');
// }()

// let k = (()=>console.log('k'))();

//expresion de funcion ejecutada inmediatamente IIFE

// var vFun = function() { // expresion funcion
//   //logica
// };

// var xobje = {
//   vOtra: function(){
//     //logica
//   }
// };

//se le puede pasar parametros a las funciones invocadas inmedaitamente
// let y = function(a, b) {
//   console.log(a + b);
// }(4,6);

// Ocupo IIFE tambien por la privacidad de los datos

//las variables declaradas con var en js, tienen un alcance a nivel de funcion
//esto implica que solo se pueden usar en la funcion que las contiene

// es por esta razon que toda varaible declarada dentro de una IIFE
// no puede ser usada por fuera
// var abc;

// let w = function() {
//   var abc = 'ABC'
//   console.log(abc);
// }();

// console.log(abc);

//OTRO EJEMPLO

var variableExterna = 'ABC'

let z = function(variableArgumento) {
  console.log(variableArgumento);
}(variableExterna)

