// set

// Permite guargar valores unicos de cualquier tipo incluyendo tipos primitivos o referencias a objetos

//si  un objeto iterable es pasado como argumento a su constructor, todos los elementos del objeto iterable se agregaran al set

//un set no puede tener repeticiones

//se puede iterar en sus elementos por orden de insercion

let ss = new Set()

// ss.add(1);
// ss.add(5);
// ss.add('Pedrito sola');
// ss.add('Pedrito sola')

// console.log(ss);

let arreglo = [1,2,3,4,5]
let iterator = arreglo[Symbol.iterator]();

var sss = new Set(iterator);

// console.log(sss);

//para iterar un set podemos utilizar un for of o metodo for each
sss.forEach(x=>console.log(x))

//un arreglo del objeto gato, 5 gatos