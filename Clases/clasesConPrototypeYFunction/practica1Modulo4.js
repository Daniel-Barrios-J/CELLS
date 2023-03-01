function Persona() {}

Persona.prototype.nombre = 'Sara'
Persona.prototype.celular = '123456654'
Persona.prototype.direccion = 'Av. hidalgo 384, mexico'
Persona.prototype.edad = 12

//funcionalidades de la clase
Persona.prototype.printEdad = function() {
  console.log(this.nombre + ' tiene ' + this.edad + ' años');
}

Persona.prototype.print = function() {
  console.log(this.nombre + " tiene el numero de telefono " + this.celular + " y vive en " + this.direccion);
}

// var persona = new Persona();

// persona.print();
// persona.printEdad();

//Clase empleado
//heredando de persona con prototype
function Empleado() {}

Empleado.prototype = new Persona();
Empleado.prototype.contructor = Empleado;
Empleado.prototype.salario = 1000;
Empleado.prototype.edad = 28;

// var empleado = new Empleado();
// empleado.printEdad();
// empleado.print();

//Clase gerente
function Gerente() {};

Gerente.prototype = new Empleado()
Gerente.prototype.contructor = Gerente;
Gerente.prototype.nombre = 'Ivan';
Gerente.prototype.departamento = 'Tecnología'
Gerente.prototype.calucularPresupuesto = function() {
  console.log(this.nombre + " esta calculando el presupuesto del departamento de " + this.departamento);
}

// var gerente = new Gerente();
// gerente.calucularPresupuesto();

//Clase Director
function Director() {};
Director.prototype = new Gerente();
Director.prototype.contructor = Director;

Director.prototype.decisiones = 3;
Director.prototype.metas = 'Lograr un crecimiento del 4% semestral';
Director.prototype.numGerentes = 5;
Director.prototype.calucularPresupuesto = function(departamento, metaFinanciera) {
  console.log('El director esta calculando el presupuesto para el departamento de ' + departamento + ' y la meta fianciera es de ' + metaFinanciera);
}
Director.prototype.printMetas = function() {
  console.log(this.metas);
}
Director.prototype.printNumGerentes = function() {
  console.log(this.numGerentes);
}

// var director = new Director();

// director.printMetas();
// director.printNumGerentes();
// director.calucularPresupuesto('TIC', 'dos pesos');

function DirectorGeneral() {};
DirectorGeneral.prototype = new Director();
DirectorGeneral.prototype.constructor = DirectorGeneral;
//agregar numero de sucursales acargo y numero de directores a cargo
DirectorGeneral.prototype.sucursalesACargo = 6;

DirectorGeneral.prototype.calucularPresupuesto = function() {
  console.log('El Director general, se encuentra calculando los presupueste de ' + this.sucursalesACargo + ' sucursales');
}

function ScrumMaster() {};
ScrumMaster.prototype = new Empleado()
ScrumMaster.prototype.contructor = ScrumMaster;
ScrumMaster.prototype.equipos = 2;
ScrumMaster.prototype.asesoriaScrum = function() {
  console.log('el empleado con categoria scrumMaster esta orientando a ' + this.equipos + ' equipos');
}

var directorGeneral = new DirectorGeneral();
directorGeneral.calucularPresupuesto();

var scrumMaster = new ScrumMaster();
scrumMaster.asesoriaScrum();