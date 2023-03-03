let fecha = '05/02/2023'
const regExp = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/)
// console.log(regExp.test(fecha));


const day = parseInt(fecha.slice(0,2))
const month = parseInt(fecha.slice(3,5))
const year = parseInt(fecha.slice(6))

// console.log(day);
// console.log(month);
// console.log(year);

const newDate = new Date()

console.log(typeof newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

// const actualDate = `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`
// console.log(`La fecha ingresada es: ${fecha}`);
// console.log(`La fecha actual es: ${actualDate}`);


// function validacionFecha(fecha) {
//   const regExp = new RegExp(/^(\d{2})\/(\d{2})\/(\d{4})$/)
//   if(!regExp.test(fecha)) throw new Error('El formato no es correcto')
//   const day = parseInt(fecha.slice(0,2))
//   const month = parseInt(fecha.slice(3,5))
//   const year = parseInt(fecha.slice(6))
//   const actualDate = new Date()
//   if(day > 31 || month > 12 || year < newDate.getFullYear()) throw new Error('La fecha es invalida')
//   if(year>actualDate.getFullYear()) return true
//   if(year===actualDate.getFullYear() && month > actualDate.getMonth()) return true
//   if(year===actualDate.getFullYear() && month === actualDate.getMonth() && day > actualDate.getDay()) return true
// }
// console.log(validacionFecha(fecha));

if(2024>newDate.getFullYear()) {
  console.log('si');
}