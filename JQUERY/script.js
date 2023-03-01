// let text = $('#texto');

// text.click(function(){
//   document.write('Buenas tardes')
// })

// $(document).ready(()=>{
//   let texto = $('#texto');
//   let parrafo = $('#texto-p')
//   let entrada = $('#entrada');
//   let btn = $('#btn');

//   console.log(texto);
//   console.log(parrafo);
//   console.log(entrada);
//   console.log(btn);
// })

//accede a los componentes en un array
// $(document).ready(()=>{
//   let texto = $('.texto');
//   console.log(texto);
// })

//identificando el elemento por etiqueta
// $(document).ready(()=>{
//   let elemento = $('ul.my-list > li > a').css('background', 'red');
//   console.log(elemento);
// })

//identificando elementos de una tabla
// $(document).ready(()=>{
//   $('td:gt(5)').css('background','blue')
//   $('td:lt(3)').css('background','yellow')
//   $('tr:first').css('color','red')
//   $('td:eq(5)').css('color','red')
// })

//mas identificadores de elementos
// $(document).ready(()=>{
//   $('div span:last-child').css('background','blue')
// })

//identificando elementos 'select'
// $(document).ready(()=>{
//   let valorSeleccionado = $('select > option:selected').val();
//   console.log(valorSeleccionado);
// })

//agregando evento
// $(document).ready(()=>{
//   $('#pais').change(function() {
//     let paisSeleccionado = $(this).children('option:selected').val()
//     $('.resultado').text(paisSeleccionado);
//   })
// })

//ejercicio
// $(document).ready(()=>{
//   $('#fruta').change(function() {
//     let fruta = $(this).children('option:selected').val()
//     $('.resultado').text(fruta);
//   })
// })

//mas de eventos
// $(document).ready(()=>{
//   $('#btn').on('click', function(){
//     $('li').filter(':even').css('background', 'blue')
//   })
// })

//eventos imagen
$(document).ready(()=>{
  let contador = 0;
  $('#ejemplo').on('click', ()=> {
    contador++
    console.log(`contador: ${contador}`);
  })
})
