// function checkContrasenna(pass) {
//   var msg = {};
//   if(pass.length < 6) {
//     console.log('contraseña muy corta');
//   }
//   if(pass.length > 12) {
//     console.log('Contraseña muy larga');
//   }
//   console.log(pass);
// }

// checkContrasenna('123')


// function checkContrasenna(pass) {
//   var msg = {};
//   try {
//     if(pass.length < 6) throw 'PASSWORD SHORT'
//     if(pass.length > 12) throw 'PASSWORD LONG'
//     msg.status = 'Validacion completa'
//   } catch(error) {
//     if (error = 'PASSWORD SHORT') msg.status = 'contraseña muy corta'
//     if (error = 'PASSWORD LONG') msg.status = 'contraseña muy larga'
//   } finally {
//     console.log('estado de la contraseña: ' + msg.status);
//   }
// }

// checkContrasenna('12dfsdfsdfsgdgdfg3ffff')


//funcionalidad rugir, si ingreso un gatito o conejo, no pueden rugir.
function rugir(animal) {
  var msg = {};
  try {
    if(animal === 'conejo') throw 'CONEJO';
    if(animal === 'gatito') throw 'GATITO';
    msg.status = `Este animal: ${animal}, si ruge`;
  } catch(error) {
    if (error === 'CONEJO') msg.status = 'Los Conejos no rugen, pero dicen que saben a pollo'
    if (error === 'GATITO') msg.status = 'Los Gatitos no rugen, pero son lindos'
  } finally {
    console.log(msg.status);
  }
}

rugir('asljkhlsdjkfh');
rugir('conejo');
rugir('gatito');

