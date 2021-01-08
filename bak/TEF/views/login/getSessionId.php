<?php
session_start();
$id = false;
if(isset($_SESSION["userId"])){$id = $_SESSION["userId"];
echo json_encode($id);
}
?>