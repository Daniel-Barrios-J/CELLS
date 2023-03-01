// const cliente1 = {
//   nombre: 'Dano',
//   edad: 28,
//   correo: '123@123.com'
// }

// function Persona(nombre, edad, correo) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.correo = correo;
// }

// const persona = new Persona('dano', 18, 'correo@d.com');

// class Cliente {
//   constructor(nombre, edad, correo) {
//     this.nombre =  nombre;
//     this.edad = edad;
//     this. correo = correo;
//   }
//   static print(cliente) {
//     console.log(cliente);
//   }
// }

// const cliente =  new Cliente('dano', 23, 'correo1')
// const cliente2 =  new Cliente('pelon', 18, 'correo2')
// const cliente3 =  new Cliente('juan', 29, 'correo3')

// Cliente.print(cliente)

//-----
class Cliente {
  constructor(nombre, edad, correo) {
    this._nombre =  nombre;
    this._edad = edad;
    this._correo = correo;
  }
  
  get edad() {
    return this._edad
  }
  set edad(edad) {
    if(edad > 18 && edad < 100) {
      this._edad = edad;
    }
  }

  get nombre() {
    return this._nombre
  }
  set nombre(nombre) {
    if(nombre.trim().length > 0) {
      this._nombre = nombre;
    }
  }

  get correo() {
    return this._correo
  }
  set correo(correo) {
    if(correo.length > 0) {
      this._correo = correo;
    }
  }

  static imprimir(persona) {
    console.log(persona);
  }
}

// const cliente4 = new Cliente('danito', 60,'correito')

//clase cliente vip 
class ClienteVIP extends Cliente {
  constructor(nombre, edad, correo, tipo){
    super(nombre, edad, correo);
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo
  }

  static imprimir(cliente) {
    console.log('imprimir desde cliente vip' + cliente);
  }

}

const clienteVip = new ClienteVIP('Jose', 22, 'jose@correo.com', 'top');

// console.log(clienteVip);

// Cliente.imprimir(clienteVip);

// ClienteVIP.imprimir(clienteVip);

console.log(clienteVip.correo);
clienteVip.correo = ''
console.log(clienteVip.correo);