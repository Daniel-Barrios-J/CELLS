//variables

//arrays

// ----- funciones

// function nombre([parametros]) {
//   //codigo, logica del negocio
//   return visualViewport;
// }

//primer ejemplo
// function miFuncion() {
//   var resultado;
//   resultado = concatena('Dano', 'Banano')
//   console.log(resultado);
// }

// function concatena(nombre, apellido, apodo) {
//   var nombreCompleto;
//   nombreCompleto = nombre + ' ' + apellido
//   return nombreCompleto
// }

// miFuncion()

// ----- operador REST
// function f (a,b, ...elResto) {
//   console.log('a', a);
//   console.log('b', b);
//   console.log('el resto', elResto);
// }
//esto retorna un array con todos los elementos restantes.
// f('lunes', 'martes', 'miercoles', 'juevas', 'viernes', 'sabado', 'domingo')

//ejemplo extremos
// function cuantos(...varArgs) {
//   console.log(varArgs.length);
// }
//esto da 0 ya que indicamos que recibe un array
// cuantos();
// cuantos(5);
// cuantos(1,2,3,4,5);

//MAS ARREGLOS

// var valores = [ 40, 90, 160, 215, 229];
// var pv = valores.find(f);

// function f(valor) {
//   return valor > 100;
// }
// console.log(pv);

// ----

// var pv = valores.findIndex(fIndex);
// function fIndex(valor, index) {
//   // console.log(valor + ' ' + index);
//   return valor > 100;
// }

// console.log(pv);

//----------FUNCIONES FLECHA

//forma convencional
// var f = function(a, b) {
//   return a + b; 
// }
// console.log(f(10,20));

//forma flecha
// var g = (a, b) => a + b;
// console.log(g(10,20));

//ejemplo 2
// var h = (a,b) => {
//   //logica
//   return a + b;
// }

//USO DE ARROW FUNCTIONS EN METODOS
// var edad1 = 20;
// var edad2 = 15;

// if(edad1 < 10 | edad2 < 10) {
//   console.log('ola js');
// }
// if(edad1 < 10 || edad2 > 10) {
//   console.log('ola js');
// }
// if(edad1 < 10 || edad2 > 10) {
//   console.log('ola js');
// }
// if(edad1 < 10 || edad2 > 10) {
//   console.log('ola js');
// }

// ----- ITERACIONES 
//no se puede definir la variable iteradora dentro del while
//WHILE
// var contador = 0;
// while (contador < 10) {
//   console.log(contador);
//   contador++;
// }
// console.log(contador);
//DO - WHILE
// do {
//   //el contador siempre va al ultimo de la logica de negocio
//   console.log(contador);
//   contador++
// } while (contador < 10)
// console.log(contador)

//FOR
// for(var contador = 0; contador < 10; contador++) {
//   console.log(contador);
// }
// console.log(contador);
// let i = 10;
// for(let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

//ejemplo for of
// var lenguajes = ['java', 'python', 'c++', 'scheme']
// var lgn;

// for(lgn of lenguajes) {
//   console.log(lgn);
// }

// var cadena = 'hola mundo js';
// var x;
// for (x of cadena) {
//   console.log(x);
// }

//ITERACIONES CON WHILE
//ejemplo 1 el break rompe el ciclo
// var x = 1;
// while (x<20) {
//   if (x==5) {
//     break;
//   }
//   x++;
//   console.log(x);
// }
//ejemplo 2 el continue manda a la sigueinte iteracion
// var x = 1;
// while (x<10) {
//   x++;
//   if (x==5) {
//     continue;
//   }
//   console.log(x);
// }

//Seguimos con iteraciones FOR EACH
// var frutas = ['manzanas', 'platano', 'uvas', 'mango']

// frutas.forEach(mostrar);

// function mostrar(valor) {
//   console.log(valor);
// }

//JSON ejemplo 1
var persona = {
 
  "nombre": "Gabriel",
  "apellido": "Guerrero",
  "edad": 50,

  "direccion": {
    "calle": "Montecitos",
    "ciudad": "Ciudad de México",
    "estado": "DF",
    "cp": 10021
  },

  "telefonos": [
    { "tipo": "casa", "numero": "212 555-1234" },
    { "tipo": "cel", "numero": "646 555-4567" }
  ]
};

// console.log(persona.nombre);
// console.log(persona.direccion.calle);
// console.log(persona.telefonos.length);
// console.log(persona.telefonos[0].numero);

//JSON ejemplo 2
var escuela = {
 
  "estudiantes": [
    { "nombre": "Juan Martínez", "grado": "6A" },
    { "nombre": "Adriana Mosqueda", "grado": "5B" },
    { "nombre": "Jesús Díaz", "grado": "1A" }
  ],
  
  "profesores": [
    { "nombre": "Francisco Martínez", "materia": "Español" },
    { "nombre": "Mónica Escalante", "materia": "Historia" },
    { "nombre": "Gabriel Guerrero", "materia": "Inglés" }
  ],
};

// console.log(escuela.estudiantes[0].nombre);
// console.log(escuela.profesores[2].nombre);
// console.log(escuela.profesores[1].materia);


function telefonoProfesor(profesor){
  //profesor existe?
  if(profesor.find(p))
  //logica con obteniendo los datos del profesor
  return persona.telefonos[1]
}

function p(profesor) {
  return profesor === escuela.profesores
}

//enunciado, buscar el telefono del profesor de ingles que se encuentra en el json persona