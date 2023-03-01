// EXCEPCIONES Y PROMESAS

// IMPLEMENTAR LOS BLOQUES DE TRY - CATCH

function fac(n) {
  var res = 0;
  if(n<0) {
    console.log('Error: El numero es menor que cero');
    throw console.log('no acepta numeros negativos');
  }
  if(n===0) {
    return 1;
  }
  return n * fac(n-1)
}

function print(n) {
  console.log('fac(' + n + ')= ' + fac(n));
}

print(5);