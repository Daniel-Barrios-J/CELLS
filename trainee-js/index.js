///Callbacks
function callback(input = "Ingresa algo", cn = function () {}) {
  if (typeof input !== "string") throw new Error("'input' no es texto");
  if (typeof cn !== "function") throw new Error("'cn' no es function");
  //Retorno mas callback
  cn("Hola " + input);
}


const promise1 = new Promise(function (resolve, reject) {
  callback("Mundo", function (say) {
    if (say === "Hola Mundo") {
      resolve("Mi funcion me saluda");
    } else {
      reject("Mi funcion no me saluda");
    }
  });
});



promise1
.then((value) => console.log(value))
.catch((err) => console.log(err));

/// --------- Propuestas --------

/* 
if (typeof input !== 'string'){
    console.log('No es string :c')
}

//-------Daniel
function callback(input = "Ingresa algo", cn = function () {}) {
    if (typeof input === 'string') {
        'el input ingresado no es una cadena de texto'
        cn("Hola " + input);
    }
  }
  
  callback(null, function (say) {
    console.log(say);
  });

//--------------------------------------Alejandra :)
function callback(input = "Ingresa algo", cn = function () {}) {
    if(typeof input === 'string') {
        cn("Hola " + input);
    }
    else {
        console.log('El dato recibido no es una cadena')
    }    
  }
  
  callback("Mundo", function (say) {
    console.log(say);
  });
  
  
  // - jenny nwn -------------------------
  if(typeof val === "string" || val instanceof String){
    console.log("Viva!! si es string xD");
  }else{
    console.log("no lo es :c");
  }

  
//================== Arturo =======================
function cb1(inp, fn){

    if(typeof inp == "String"){
        fn("Hola "+inp);
    }else (console.log("Ingrese un tipo string"));
}
  


  // ---------Jessica-------
  function callback(input = "Ingresa algo", cn = function () {}) {
    
    if (typeof(input) != String){
        let inputT = toString(input);
        cn("Hola " + input);
    } else{
        cn("Hola " + input);
    } 
    
  }
  
  callback(5, function (say) {
    console.log(say);
  });



  //------ Victoria--------
  if (typeof  input == 'string'){
    console.log("Si pasa como string")
}
if (typeof input !== 'string') {
    console.log("No pasa, no es string");
}

//? ---- Alejandro-----
function callback(input = "Ingresa algo", cn = function () {}) {
    typeof(input==='string'?'Es un String':'Ingresa un valor valido')
    cn("Hola " + input);
  }
   */
