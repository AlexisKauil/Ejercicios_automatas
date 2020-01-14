<?php
$archivo = "pagina.txt";
if (file_exists($archivo)==FALSE){
    $ar = fopen($archivo,"a") or die ("error al crear");
    if($_POST['url']){
        $lineas = file($_POST['url']); 
        foreach($lineas as $num_linea => $linea){
        //echo "<b>L #{$num_linea}</b> : ".htmlspecialchars($linea)."<br>\n"; 
        $tt = $linea."\n"; 
       
    
        fwrite($ar,$tt);
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="consultas.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Proyecto</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="rege.js"></script>
</head>
<body ><!--background="automatas_de_hierro.jpg">-->
 <nav><!--class="btn-group" role="group" aria-label="Basic example">-->
    <ul id="botones">
        <h1 class="text-center" style="color:white;">Lenguajes y Automatas</h1>
        <li>  <button type="button" onclick="contenido()" class="btn btn-secondary btn-sm">MOSTRAR CODIGO HTML</button>
        <li>  <button type="button"  class="btn btn-secondary btn-sm" onclick="titulot()">TITULO</button></li>
        <li>  <button type="button"  class="btn btn-secondary btn-sm" onclick="image()">IMAGENES</button></li>
        <li>  <button type="button" onclick="mostrar()" class="btn btn-secondary btn-sm">MOSTRAR COMENTARIOS</button>
        <li>  <button type="button" onclick="sin_comentario()" class="btn btn-secondary btn-sm">MOSTRAR CODIGO SIN COMENTARIOS</button>
        <li>  <button type="button" onclick="cortas()" class="btn btn-secondary btn-sm">URL Largas</button>
        <li>  <button type="button" onclick="mostrarcortas()" class="btn btn-secondary btn-sm"> URL Cortas</button>
        <li>  <button type="button" onclick="mp()" class="btn btn-secondary btn-sm">MOSTAR ETIQUETAS P</button>
        <li>  <button type="button" onclick="encriptadoo()" class="btn btn-secondary btn-sm">ENCRIPTACION</button>
    </ul>
    
</nav>
<h2 class="text-center">Resultados</h2>
<div id="contenedor">
    <div id="D" class="p-3 mb-2 bg-dark text-white"></div>
</div>    
</body>

</html>



