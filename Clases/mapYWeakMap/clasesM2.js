// MAP
// conjuntoo con la caracteristica de clave, valor (como los diccionarios)
// para añadir un elemento se tiene que llamar al metodo .set() tambien actualiza
//si se quiere recuperar un elemento se usa .get()
// si se quiere saber si un elemento esta en el map se usa .has()
// para eliminar un elemento es delete()
// para eliminar TODO de un map .clear()
 
let capitales = new Map();
capitales.set("México", {
  'n_n': 'Ciudad de México',
  'n_o': 'Distrito federal'
});
capitales.set('Chile', 'Santiago de Chile');
capitales.set('Argentina', 'Buenos aires');
capitales.set('Canada', 'Ottawa');
// console.log(capitales);
 
// var a =  capitales.get('México').n_n;
// console.log(a);

// var e = capitales.has('Argentina');
// console.log(e);

// var b = capitales.delete('Argentina');
// console.log(a);
// console.log(e);
// console.log(b);
// console.log(capitales);

//iterando un MAP
// capitales.forEach(e = console.log(e))

//el symbol.iterator convierte la estructura en un elemento iterable
const mapIte = capitales[Symbol.iterator]();

//iteracion manual
// console.log(mapIte.next().value);
// console.log(mapIte.next().value);
// console.log(mapIte.next().value);
// console.log(mapIte.next().value);
// console.log(mapIte.next().done);

for ( const ren of capitales) {
  console.log(ren);
}

console.log('---------------');
for(const [k,v] of capitales) {
  // if (v instanceof Object) {

  // }
  console.log(`${k} ${v}`);
}