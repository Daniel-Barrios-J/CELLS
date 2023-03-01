function Superheroe(alias) {
  this.alias = alias
}

function Personaje(nombre, iniciales, autor, frase) {
  this.nombre = nombre;
  this.iniciales = iniciales;
  this.autor = autor;
  this.frase = frase;
}

function Kriptoniano(casa){
  this.casa = casa;
}

function Superman(alias, edad, nombre, iniciales, autor, frase, casa) {
  this.Superheroe = new Superheroe(alias);
  this.Personaje = new Personaje(nombre, iniciales, autor, frase);
  this.Kriptoniano = new Kriptoniano(casa) 
  this.edad = edad;

  Object.defineProperty(this, 'casa', {
    get: function() {
      return this.Kriptoniano.casa
    },
    set: function(val) {
      this.Kriptoniano.casa = val
    }
  })

  Object.defineProperty(this, 'alias',{
    get: function() {
      return this.Superheroe.alias
    }
  })

  Object.defineProperty(this, 'frase', {
    get: function() {
      return this.Personaje.frase;
    },
    set: function(val) {
      this.Personaje.frase = val;
    }
  })
  
  Object.defineProperty(this, 'edad', {
    get: function() {
      return edad;
    },
    set: function(val) {
      edad = val;
    }
  })
}

var superman = new Superman('clarck',22,'superman', 'CK', 'desconocido', 'buenos dias', 'casa: El')

console.log(superman.casa)
superman.casa = 'casa: Zod'
console.log(superman.casa)

console.log(superman.edad);
