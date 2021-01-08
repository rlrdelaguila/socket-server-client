
<?php
$statusLogin = true;

if (!isset($_COOKIE['login'])) {
    if (empty($_SESSION["userId"])) {
        //header("Location:../menu/menu.html");
        $statusLogin = false;
    }
} else {
    session_start();
    if (empty($_SESSION["userId"])) {
        $statusLogin = false;
    } else {
        $statusLogin = true;
    }
    //header("Location:../../index.html");  
}
echo json_encode($statusLogin);
?>