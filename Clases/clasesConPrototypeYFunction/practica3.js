function Mascota (nombre, juguete, alimento) {
  var _nombre = nombre;
  var _juguete = juguete;
  var _alimento = alimento;

  Object.defineProperty(this, 'nombre', 
  {
    get: function () {
      return _nombre;
    }
  })
  Object.defineProperty(this, 'juguete', {
    get: function () {
      return _juguete;
    },
    // set: function(nuevoValor) {
    //   if(nuevoValor!=null || '') {
    //     _juguete = nuevoValor;
    //   }
    // }
    set: function(nuevoValor) {
      if(nuevoValor!=null && nuevoValor!='') {
        _juguete = nuevoValor;
      }
    }
  }),
  Object.defineProperty(this, 'alimento', {
    get: function () {
      return _alimento;
    },
    set: function(nuevoValor) {
      if(nuevoValor=!null) {
        _alimento = nuevoValor;
      }
    }
  })
}

var miMascota = new Mascota("Kuro", "correr", "croquetas");

console.log(miMascota.juguete);

miMascota.juguete='';
miMascota.juguete=null;

console.log(miMascota.juguete);