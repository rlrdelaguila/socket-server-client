<?php
session_start();
if(!empty($_SESSION["userId"])) {

    $campo_selecionado = $_GET['itens'];
    switch($campo_selecionado){
        case 0:
        header("Location:../../views/principal/inputToGrafic.php");
        //echo"<script> $('#menu').load('views/menu/menu.html');</script>";
        break;

        case 1:
            header("Location:../../views/usuarios/usuarios.html");
        break;

        case 2:
        header("Location:./../ESTRUTURA_ORG/view.php");
        break;

        case 3:
        header("Location:./../CAD_TURNO/view.php");
        break;

        case 4:
        header("Location:./../grafic_loop/view.php");
        break;
    //echo"Bem-Vindo, $login_cookie <br>";
    // echo"Essas informações <font color='red'>PODEM</font> ser acessadas por você";
  
      }
  
} else {
    echo"Bem-Vindo, convidado <br>";
    echo"Essas informações <font color='red'>NÃO PODEM</font> ser acessadas por você";
    echo"<br><a href='views/index.html'>Faça Login</a> Para ler o conteúdo";
}
?>