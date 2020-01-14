//EJERCICIO 1
//Todas la palabras que tengan una longitud de 7 o mas letras 
var oracion="si has iniciado sesion en productos de google como youtube intentalo de nuevo con ese correo electronico ";
var expresion= /[a-z]{7,}/g;
result=oracion.match(expresion);
console.log(result);

//EJERCICIO 2
//Expresiones que no finalicen con una vocal
var expresion2=/[a-z]+[^aeiou\s]\b/gi;
result2=oracion.match(expresion2);
console.log(result2);

//EJERCICIO 3 
//Las palabras que inicien con M donde la segunda letra no sea una vocal 
var oracion2="mision imposible mcdonalds";
var expresion3=/\b[m][^aeiou][a-z]{0,}/g;
result3=oracion2.match(expresion3);
console.log(result3);
//let nuevaOracion3=oracion2.replace(/\b[m][^aeiou][a-z]{0,}/g,"*");
//console.log(nuevaOracion3);

//EJERCICIO 4
//Expresiones encerrdas entre comillas 
var mensaje4="si has 'iniciado' sesion en 'productos' de google como 'youtube' intentalo de 'nuevo' con ese correo 'electronico'";
var expresion4=/[''?][a-z]{0,}/g;
result4=mensaje4.match(expresion4);
console.log(result4);
//let newMensaje4= mensaje4.replace(/[''?][a-z]{0,}/g," ");
//console.log(newMensaje4);

//EJERCICIO 5
//IPs
var mensaje5="El ip de una 89  computadora es 192.168.1.2 otro 10.0.0 ip 10.0.0.1";
var expresion5=/(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/g;
result5=mensaje5.match(expresion5);
console.log(result5);
//let newMensaje5= mensaje5.replace( /(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/g,"");
//console.log(newMensaje5);

//EJERCICIO 6
// HORAS
let mensaje6="La reun 80 io es a las 05:30:00 de la tarde y termina a 07:30:00";
let newMensaje6= mensaje6.replace( /[00:00:00][0-9][0-9]{0,}/g,"#");
console.log(newMensaje6)

//EJERCICIO 7
//Telefonos 
let mensaje7 = " El telefono 9851190174 se registro cuando realizo la llamada"; 
let newMensaje7 = mensaje7.replace(/[0-9]{10,}/g, "*");
console.log(newMensaje7);

//EJERCICIOS 8
//Correos electronicos
let mensaje8="En este coreo alxisekd@gmail.com puede mandar el archivo ";
let newMensaje8= mensaje8.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/g,"");
console.log(newMensaje8);

//EJERCICIO 9
//URLs
let mensaje9 = "En el url: https://www.descargatump3.com, se descargan musicas "; 
let newMensaje9 = mensaje9.replace(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/g, "*");
console.log(newMensaje9)

//EJERCICIO 10
//Codigo postal
let mensaje10 = "Este es mi cp: 97762 y calle  80 numero de casa 90 este es otro cp: 97783"; 
let newMensaje10 = mensaje10.replace(/[0-9]{5}/g, "*");
console.log(newMensaje10);
