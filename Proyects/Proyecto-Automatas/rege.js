var parrafo_impData = new Array();
var archivoTxt = new XMLHttpRequest();
var ruta = 'pagina.txt';

archivoTxt.open("GET",ruta,false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;

  

//Buscar y obtner Titulo
  var titulo = /<title>(.*?)<\/title>/ig;
  //Imagenes
  var images = /<img(.*?)>/ig;
  //Parrafos
  var parrafo = /<p>(.*?)<\/p>/ig;

  var match, resul="",regex=titulo;
  while(match=regex.exec(txt)){resul+=match[1];}

  
  
  var images_imp = txt.match(images);
  var parrafo_imp= txt.match(parrafo);
  //Encriptado
  var encriptado = new Array();
  var valores=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

  for (var i = 0; i < parrafo_imp.length; i++) {
    var a = parrafo_imp[i].replace(/[a,b,c]/g,valores[Math.floor(Math.random() * 25)]);
    var b = a.replace(/[d,e,f]/g,valores[Math.floor(Math.random() * 25)]);
    var s = b.replace(/[g,j,h,i]/g,valores[Math.floor(Math.random() * 25)]);
    var d = s.replace(/[m,o,p,u,y,z]/g,valores[Math.floor(Math.random() * 25)]);
    
    encriptado[i] = d;
  
  }
 
  




//Comentarios
var comentarios = /\h*<!--.*?-->\h*/ig;
var comentarios_imp = txt.match(comentarios);
//console.log(comentarios_imp);
//Cadenas de texto
var cadenastexto = /<h(.*?)\/.h>/ig;
var cadenastexto_imp = txt.match(cadenastexto);
console.log(cadenastexto_imp);

function titulot(){
  document.getElementById("D").innerText =resul.toString() ;
  //document.getElementById("D").innerText = images_imp.toString();  
}
function image(){
  document.getElementById("D").innerText =images_imp.toString() ;
  //document.getElementById("D").innerText = images_imp.toString();  
}
function mostrar(){
  document.getElementById("D").innerText = comentarios_imp.toString();
}
function sin_comentario(){
  var r = txt.replace(comentarios,"*COMENTARIOS*");
  document.getElementById("D").innerText =r.toString();
}
function contenido(){
  document.getElementById("D").innerText =txt.toString();
}

function encriptadoo(){
  document.getElementById("D").innerText = encriptado.toString();
  //console.log(encriptado.toString());
}
function mp(){
  document.getElementById("D").innerText = parrafo_imp.toString();

}

function cortas(){
  var ex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
 
  var t = txt.match(ex);
  
 
  document.getElementById("D").innerText = t.toString();
}

function mostrarcortas(){
  var ex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var t = txt.match(ex);
  
  var corta = new Array();
  var g = new Array();
  var valoress=["vasxefs","bdadyts","cfsef","dgdrse","efsefe","fdfse","gdadwsd"];
  for(var i = 0; i<t.length; i++){

    var h= t[i].match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})/g);
    for(var d=0;d<h.length;d++){

     var y =h[d].replace(/[^https?:\/\/]?([a-zA-Z\.]+)\./g,valoress[Math.floor(Math.random() * 7)]);  
  }
    corta[i] = y + "\n";   
    document.getElementById("D").innerText = corta.toString();
  
  }
  
}