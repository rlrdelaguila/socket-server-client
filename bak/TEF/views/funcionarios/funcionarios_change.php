<?php
include '../../controller/db_con_funcionarios.php';
$pdo = pdo_connect_db();

// Check that the contact ID exists
// modo 1 = Delete  |  2 = Update

if(!isset($_COOKIE['login'])){
    if(empty($_SESSION["userId"])) {
            //header("Location:../menu/menu.html");
            echo 'não permitido'; 
    }
}
else{
    session_start();
    if(!empty($_SESSION["userId"])) {
       
        
}
else   echo 'não permitido';     //header("Location:../../index.html");  

}


if (!empty($_POST["id"]) && !empty($_POST["modo"])) {

    try {
        switch ($_POST["modo"]) {
            case 1:
                $stmt = 'DELETE FROM TB_USERS WHERE ID = ?';
                $params = array($_POST["id"]);
                $ret = $pdo->prepare($stmt)->execute($params);
                echo json_encode($ret);
                break;
            case 2:
                if (
                    !empty(trim($_POST["fNome"])) && !empty(trim($_POST["fEmpresa"])) &&
                    !empty(trim($_POST["fSetor"])) && !empty(trim($_POST["fDepartamento"])) &&
                    !empty(trim($_POST["fCargo"])) && !empty(trim($_POST["fDataAD"])) &&
                    !empty(trim($_POST["fAtivo"])) && !empty(trim($_POST["fSupervisor"]))
                ) {
                    $aux = $_POST["fSupervisor"];

                    if (filter_var($aux, FILTER_VALIDATE_BOOLEAN)) {
                        if (!empty($_POST["fSenha"])) {
                            $aux = true;
                        } else
                            $aux = false;
                    } else
                        $aux = true;

                    if (filter_var($aux, FILTER_VALIDATE_BOOLEAN)) {
                        $stmt = 'UPDATE TB_USERS SET NOME = ?, DATA_AD = ?, ATIVO = ?, FUNCAO_ID = ?, SETOR_ID = ?, EMP_ID = ?, DEP_ID = ?, SUPERVISOR = ?, SENHA = ? WHERE ID = ?';
                        $params = array(trim($_POST["fNome"]), trim($_POST["fDataAD"]), trim($_POST["fAtivo"]), trim($_POST["fCargo"]), trim($_POST["fSetor"]), trim($_POST["fEmpresa"]), trim($_POST["fDepartamento"]), trim($_POST["fSupervisor"]), trim($_POST["fSenha"]), trim($_POST["id"]));
                        $ret = $pdo->prepare($stmt)->execute($params);
                        echo json_encode($ret);
                    } else {
                        echo "senha vazia!";
                    }
                } else {
                    echo "parâmetro vazio!";
                }
                break;
            default:
                echo "opção inválida!";
        }
    } catch (PDOException $e) {
        echo "\nErro: " . $e->getMessage();
    }
} else {
    echo "parametors inválidos";
}
