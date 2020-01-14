var socket = io.connect('localhost:8081',{ 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var html = data.map(function(elem, index) {
    let html_string= string_expresion(elem.text);
    return(`<div class = "container-elements">
              <strong class="autor">${elem.author}</strong>:
              <em class="menssage">${elem.text}</em>
            </div> ${html_string}`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value    
  };
  socket.emit('new-message', message);
  return false;
}

let string_expresion = (date) => {
let cantvocales,cantpalabras,cantcontenido,cantnumero,cantnovocales;

let vocal= date.match(/[aeiouAEIOUáéíóú]/gim,"");
if(vocal === null){
   cantvocales = 0;
 }else {
   cantvocales = vocal.length;
 }
let palabra = date.match(/(\w|á|é|í|ó|ú|ü|ñ|Ñ|Á|É|Í|Ó|Ú)+[\s\n\r\t,\.;:"'\(\)\{\}\[\]$]*/g);
 if(palabra === null){
   cantpalabras = 0;
 }else{
   cantpalabras = palabra.length;
 }
let contenido = date.match(/(\b[A-Z|ÁÉÍÓÚ])[a-z|áéíóú|A-Z|ÁÉÍÓÚ]*/g);
 if(contenido === null){
   cantcontenido = 0;
 }else{
   cantcontenido = contenido.length;
 }
let numero = date.match(/[0-9\b]/g,"");
 if(numero === null){
   cantnumero = 0;
 }else{
   cantnumero = numero.length;
 }
let novocal = date.match(/[^aeiou\W\d]\b/g,"");
 if(novocal === null){
   cantnovocales = 0;
 }else{
   cantnovocales = novocal.length;
 }
 return `<p class="results"> 
          Vocales Recibidas: ${cantvocales} --- Palabras Recibidas: ${cantpalabras} --- Cantida de Numeros: ${cantnumero}  
          --- inician en mayuscula: ${cantcontenido} --- terminacion no vocal: ${cantnovocales}</p>`;
}


