//PROMESAS

// LA PROGRAMACION ASINCRONA ES UNA DE LAS GRANDES VENTAJAS DE JAVASCRIPT.
// ES UNA FORMA EN LA QUE NODE.JS MANEJA LA CONCURRENCIA

//agregar info de captura en google doc

// const promesa = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random()*10);
//   console.log(number);
//   setTimeout(
//     ()=> number > 3 ? resolve(number) : reject(new Error('Menor a 3')), 1000
//   );

// });

// promesa.then( number => console.log(number)).catch(err => console.log(err))

// const consumir = fetch('https://mindicador.cl/api');
const consumir = fetch('https://mindicador.cl/api/uf');

consumir.then( res => console.log(res)).catch(error => console.log(error))

consumir.then( res => res.json().then(res => console.log(res))).catch(error => console.log(error))