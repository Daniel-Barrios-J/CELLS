// WEAK MAP
//las claves solo pueden ser objetos
//no son iterables
//no son colecciones que se puedan recorrer con un ciclo (for)
//se debe conocer la clave antes de recuperar un valor

var wm1 = new WeakMap()
var wm2 = new WeakMap()
var wm3 = new WeakMap()

var obj1 = {}
var obj2 = function() {}
var obj3 = String;

wm1.set(obj1, 1)
wm1.set(obj2, 'abc')
wm1.set(obj3, 6)
wm1.set(Object, 8)

//para recuperar de un weakmap
// console.log(wm1.get(Object));
//has
// console.log(wm1.has(obj1));

//si reescribe
// wm3.set(obj1, 1234);
// wm3.set(obj1, 124);
// console.log(wm3.get(obj1));

//delete 
console.log(wm1.delete(obj1));
console.log(wm1.get(obj1));