function callbackDate(date, cbDate) {
  if (typeof date !== "string") throw new Error("'fecha' no es texto");
  if (typeof cbDate !== "function") throw new Error("'cbDate' no es function");
  cbDate(date);
}

function validacionFecha(fecha) {
  const regExp = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if(!regExp.test(fecha)) throw new Error('El formato no es correcto')
  const day = Number(fecha.slice(0,2))
  const month = Number(fecha.slice(3,5))
  const year = Number(fecha.slice(6))
  const actualDate = new Date()
  if(day > 31 || month > 12) throw new Error('La fecha es invalida')
  if(year>actualDate.getFullYear()) return true
  if(year===actualDate.getFullYear() && month > actualDate.getMonth()) return true
  if(year===actualDate.getFullYear() && month === actualDate.getMonth() && day > actualDate.getDay()) return true
}

const promiseDate = new Promise((resolve, reject) => {
  callbackDate('31/11/2025', function(date) {
    if(validacionFecha(date)) {
      resolve(`Se registro correctamente la fecha: ${date}`)
    } else {
      reject('la fecha ingresada no es valida');
    }
  })
})

promiseDate.then(res => console.log(res)).catch(err => console.log(err))