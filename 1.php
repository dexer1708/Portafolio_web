<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$tema = $_POST['tema'];

$formcontent="
    Nombre: $nombre \n
    E-mail: $email \n
    phone: $phone \n
    tema: $tema \n
";

$recipient = "dexer1708@gmail.com";

$subject = "potencial cliente $nombre";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>