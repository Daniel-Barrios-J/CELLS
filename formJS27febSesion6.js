// let mascotas = ["perro", "gato", "pez", "canario"];
// mascotas = mascotas.filter(mascota => mascota.length >= 5);
// console.log(mascotas);

// (function f(f) {
//   return typeof f();
// })(function () {return "1";});

// console.log(
//   (function f(f) {
//     return typeof f();
//   })(function () {return "1";})
// );

// var a;
// var b = a === null;

// console.log(b);

// class Ope {
//   static ave (arr) {
//     let res = 0;
//     for(let valor of arr) {
//       res += valor
//     }
//     return res/arr.length
//   }
// }

// let suma = Ope.ave([5,10,15])

// console.log(suma);

// let a;
// let b = 1;

// console.log(a*b);

// class A {
//   constructor () {
//      console.log("A");
//   }
// }

// class B extends A{
//   constructor() {
//      console.log("B");
//   }
// }

// let b = new B()

class A {
  constructor () {
     console.log("A");
  }
}

class B extends A{
  constructor() {
 super();
     console.log("B");
  }
}

let b = new B()
