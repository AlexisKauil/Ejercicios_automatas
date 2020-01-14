  //reemplaza todas la vocales ne la palabra correcaminos 

  
        //reeemplaza la ultima letra cuando no es una vocal 
  //let mensaje= "correcaminos";
  //let newMensaje= mensaje.replace(/[^aeiou]$/g,"*");
        //reemplaza la ultima letra de la palabra que sea vocal 
  /*let mensaje= "zoologico";
  let newMensaje= mensaje.replace(/[aeiou]$/g,"*");
   
 //[] los corchetes significa conjunto o un grupo 
  console.log(newMensaje);*/

  //let mensaje2= "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de tecnologia";
  //sustituye los numeros en la oracion 
  //let newMensaje2=mensaje2.replace(/[0-9]/g,"0");
  //sustituye los numeros de 2 a 4
  //let newMensaje2=mensaje2.replace(/[0-9]{2,4}/g,"0");
  //elimina todos los numero en la oracion 
  //let newMensaje2=mensaje2.replace(/[0-9]/g,"");
  //elimina las palabras que tengan 5 letras 
   //let newMensaje2=mensaje2.replace(/[a-z]{5,}/g,"");
  
   //{} las llaves se refiere a la longitud de palabras 
  //console.log(newMensaje2);

   //\b esta secuencia de escape divide la cdena en palabras

   var historia="para someter situaciones fuera de los limites bayonetazo";
   var expresion = /[a-zA-Z]+[aeiou]\b/gm;
   //var expresion = /[a-z]{5,}/gm
   //var expresion = /[a-zA-Z]+[aeiou]\$/gm
   result=historia.match(expresion);
   console.log(result);

   //programa 1
   //Encontrar patrones en un codigo fuente 
   //formulario queu pueda cargar un archivo lo va tratar como una ccade
   //encontrar expresiones matematicas secillas 
   //expresiones boleanas 
   //eliminar todos los comentarios 
   //cuando encuentre una cadena de texto se debe ecriptar una cadena de texto 

  // programa 2
  // programa debe cragar o una url cargar el contenido de la webkitCancelAnimationFrame, mostrar el codigo fuente
   //del codigo debe mostrar todas las imagenes 
   //buscar el conenido de la etiqueta titulo
   //reemplazar url largas a cortas 
   //encriptar el contenido de la etiqueta parrafo