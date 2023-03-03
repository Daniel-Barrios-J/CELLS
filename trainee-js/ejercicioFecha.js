//version 1
// function callbackDate(date, cbDate) {
//   if (typeof date !== "string") throw new Error("'fecha' no es texto");
//   if (typeof cbDate !== "function") throw new Error("'cbDate' no es function");
//   cbDate(date);
// }

// function validacionFecha(fecha) {
//   const regExp = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/)
//   if(!regExp.test(fecha)) throw new Error('El formato no es correcto')
//   const day = Number(fecha.slice(0,2))
//   const month = Number(fecha.slice(3,5))
//   const year = Number(fecha.slice(6))
//   const actualDate = new Date()
//   if(day > 31 || month > 12) throw new Error('La fecha es invalida')
//   if(year>actualDate.getFullYear()) return true
//   if(year===actualDate.getFullYear() && month > actualDate.getMonth()) return true
//   if(year===actualDate.getFullYear() && month === actualDate.getMonth() && day > actualDate.getDay()) return true
// }

// const promiseDate = new Promise((resolve, reject) => {
//   callbackDate('31/01/2023', function(date) {
//     if(validacionFecha(date)) {
//       resolve(`Se registro correctamente la fecha: ${date}`)
//     } else {
//       reject('la fecha ingresada no es valida');
//     }
//   })
// })

// promiseDate.then(res => console.log(res)).catch(err => console.log(err))


// optimizacion Version 2
// function callbackDate(date, cbDate) {
//   if (typeof date !== "string") throw new Error("'fecha' no es texto");
//   if (typeof cbDate !== "function") throw new Error("'cbDate' no es function");
//   const regExp = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/)
//   if(!regExp.test(date)) throw new Error('El formato no es correcto');
//   const objectDate = {
//     day: Number(date.slice(0,2)),
//     month: Number(date.slice(3,5)),
//     year: Number(date.slice(6))
//   }
//   if(objectDate.day > 31 || objectDate.month > 12) throw new Error('La fecha es invalida')

//   cbDate(objectDate);
// }


// const promiseDate = new Promise((resolve, reject) => {
//   callbackDate('02/03/2023', function(date) {
//     const actualDate = new Date();

//     if(date.year>actualDate.getFullYear()) {
//       resolve(`1 Se registro correctamente la fecha ${date.day}/${date.month}/${date.year}`) 
//     }
//     if(date.year===actualDate.getFullYear() && date.month > (actualDate.getMonth() + 1)) {
//       resolve(`2 Se registro correctamente la fecha ${date.day}/${date.month}/${date.year}`)
//     }
//     if(date.year===actualDate.getFullYear() && date.month === (actualDate.getMonth() + 1) && date.day > actualDate.getDate()) {
//       resolve(`3 Se registro correctamente la fecha ${date.day}/${date.month}/${date.year}`)
//     }
//     reject('La fecha ingresada no es valida')
//   })
// })

// promiseDate.then(res => console.log(res)).catch(err => console.log(err))

//optimicacion version 3
function callbackDate(date, cbDate) {
  if (typeof date !== "string") throw new Error("'fecha' no es una cadena de texto");
  if (typeof cbDate !== "function") throw new Error("'cbDate' no es una funcion");
  const regExp = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if(!regExp.test(date)) throw new Error('El formato no es correcto');
  const objectDate = {
    day: Number(date.slice(0,2)),
    month: Number(date.slice(3,5)),
    year: Number(date.slice(6))
  }
  cbDate(objectDate);
}

const promiseDate = new Promise((resolve, reject) => {
  callbackDate('02/03/2023', function(date) {
    const actualDate = new Date();
    const inputDate = new Date(date.year, date.month-1, date.day);
    if(actualDate < inputDate) {
      resolve(`Se registro correctamente la fecha ${inputDate}`)
    } else {
      reject('La fecha ingresada no es valida')
    }
  })
})

promiseDate.then(res => console.log(res)).catch(err => console.log(err))
