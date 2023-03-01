class Gatito {
  constructor(nombre, edad, comida) {
    this._nombre = nombre;
    this._edad = edad;
    this._comida = comida;
  }
}

let gato1 = new Gatito('Salomon', 12, 'Ratones')
let gato2 = new Gatito('Salmon', 11, 'cat chow')
let gato3 = new Gatito('Solamon', 2, 'atun')
let gato4 = new Gatito('Soloman', 1, 'pelo')
let gato5 = new Gatito('Maloson', 20, 'pasto')
let gato6 = gato1;

let gatos = [gato1, gato2, gato3, gato4, gato5, gato6]

let sGatos = new Set(gatos);

console.log(sGatos);