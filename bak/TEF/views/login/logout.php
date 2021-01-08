<?php
/* session_start();
         unset($_SESSION['teste']);
        if(session_destroy())
                {
                header("Location: login.html");
                }
*/
if(isset($_POST['logout']))

        {  // $_SESSION["userId"] = NULL;
            session_start();
            unset($_SESSION["userId"]);
            session_destroy();
            
           // header('Location:../../views/principal/inputToGrafic.php');
            //die();
            exit();
        }
?>