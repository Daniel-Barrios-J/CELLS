//una variable solo tiene visibilidad dentro de su contexto
console.log(" U una variable solo tiene visibilidad dentro de su contexto");
var varibale2 = "global2";
console.log(varibale2);
 
function daVariable(){
  console.log(varibale2);// DARA UNDEFINED
  var varibale2 = "local2";
  console.log(varibale2);
}
daVariable();