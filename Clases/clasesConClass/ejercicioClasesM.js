//sistema para crear felinos, atr: especie, origen.
//(heredar) classe gatitos, nombre, especie, origen, comida favorita
//los felinos tienen un metodo que solo ven ellos que es cazar
//metodo para ambas clases, set y get
//metodo para imprimir las caracteristicas del felino y gatito

class Felino {
  constructor(origen, especie) {
    this._origen = origen;
    this._especie = especie;
  }
  //get - set especie
  get obtenerEspecie() {
    return this._especie
  }
  set modificarEspecie(especie) {
    this._especie = especie;
  }

  //get - set origen
  get obtenerOrigen() {
    return this._origen;
  }
  set modificarOrigen(origen) {
    this._origen = origen;
  }

  static caracteristicas(felino) {
    console.log(felino);
  }

  #cazar() {
    console.log('Cazando unas buenas zebras');
  }
  
  mostrarCaza() {
    this.#cazar();
  }
}

class Gatito extends Felino {
  constructor(nombre, origen, especie, comida) {
    super(origen, especie)
    this._nombre = nombre;
    this._comida = comida;
  }

  //get - set nombre
  get obtenerNombre() {
    return this._nombre;
  }
  set modificarNombre(nombre) {
    this._nombre = nombre;
  }
  //get - set comida fav
  get obtenerComida() {
    return this._comida;
  }
  set modificarComida(comida) {
    this._comida = comida;
  }
}

let gatito = new Gatito('Pancho', 'Muy lejano', 'Jaguar', 'Personas')

Felino.caracteristicas(gatito);

gatito.mostrarCaza()