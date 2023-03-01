//  MODO ESTRICTO

// las reglas para declaras variables son bastante relajadas

// si se omite la palabra reservada var, la variable tiene implicitamente
// un alcance global

// x=4;
// console.log(x);

// function unaFuncion() {
//   'use strict';
//   var errorCode = 100;
//   cuenta = 0;
//   console.log(cuenta);
// }
// unaFuncion()
// console.log(cuenta);

// cuando se usa el use strict, se obtendra un error si intenta declarar una variable
// sin usar var, let o const
//js no proporcionara automaticamente la variable de alcance global

//JSON

// let miCadena = '{"tam":1, "color":"rojo"}'
// var objJSON = JSON.parse(miCadena);
// console.log(objJSON.color);

// var cadenaJSON = JSON.stringify(objJSON);
// console.log(cadenaJSON);

//PARSEINT, PARSEFLOAT ISNAN
var miFuncion = function() {
  var edadCampo = '50';
  var alturaCampo = 'un metro con 60cm'
  
  var edad = parseInt(edadCampo);
  console.log(edad);

  var altura = parseFloat(alturaCampo)
  console.log(altura);

  if(isNaN(edad) || isNaN(altura)) {
    console.log('entrada no valida');
  }

}()