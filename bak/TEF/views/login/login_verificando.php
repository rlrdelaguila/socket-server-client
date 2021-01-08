
<?php
//include 'functions_1.php';
//include 'member.php';
//$pdo = pdo_connect_senha();

/*include '../main/functions.php';
$pdo = pdo_connect_mysql();
*/

include '../../controller/db_con_graphics.php';
$pdo = pdo_connect_db();

$login = $_POST['login'];
$entrar = $_POST['entrar'];
$senha = $_POST['senha'];

if (isset($entrar)) {
    $loginFeito = false;
    $verifierLogin = $pdo->query("SELECT * FROM TB_SEGURANCA WHERE LOGIN = '$login' 
    AND SENHA = '$senha'") or die("erro ao selecionar");

    $LoginToverifier  = $verifierLogin->fetchAll();

    $num_contacts = count($LoginToverifier);

    //echo "columns".$num_contacts;
    // echo "flag adm: ".$_GET["adm"];
    if (isset($_GET["adm"])) { //usuário adm 
        if ($num_contacts <= 0) {
            echo "<script language='javascript' type='text/javascript'>
        alert('Login e/ou senha incorretos'); return false;</script>";
            die();
        } else {
            if ($_GET["adm"] == 1) {
                // echo "acessou o adm";
                session_start();
                $_SESSION["userId"] = $LoginToverifier[0]["ID"];
                setcookie("login", $login, time() +60*60*24*365, "/");
                header("Location:cadastro.html");
            } else {
                // echo "nao acessou o adm";
                session_start();
                $_SESSION["userId"] = $LoginToverifier[0]["ID"];
                setcookie("login", $login, time()  +60*60*24*365, "/");
                header("Location:index_2.php?itens=0");
            }
        }
    } else { //usuario normal 
        if ($num_contacts <= 0) {
           /* echo "<script language='javascript' type='text/javascript'>
        alert('Login e/ou senha incorretos'); return false;</script>";*/
    
        return false;
          //  die();
        } else {

            session_start();
            $_SESSION["userId"] = $LoginToverifier[0]["ID"];
            setcookie("login", $login, time() +60*60*24*365, "/");
            $loginFeito = true;

            /*5555555555555555 */
            $pdo = pdo_connect_db();

            $id     =   $_SESSION["userId"];
            $nome   =   '';
            $senha  =   '';
            $nivel  =   '';
            $modo   =   4;


            // Check that the contact ID exists
            // modo 1 = Delete  |  2 = Update  |  3 = Insert
            if (!empty($id) && !empty($modo)) {
                try {
                    switch ($modo) {
                        case 1: //Deletar Usuario
                            $stmt = 'DELETE FROM TB_SEGURANCA WHERE ID = ?';
                            $params = array($id);
                            $ret = $pdo->prepare($stmt)->execute($params);
                            echo json_encode($ret);
                            break;
                        case 2: //Atualizar Usuário
                            if (!empty($nome) && !empty($senha)) {
                                $exists = -1;
                                $sql = 'SELECT * FROM TB_SEGURANCA WHERE LOGIN= :nome';
                                $stmt = $pdo->prepare($sql);
                                $stmt->bindValue(':nome', $nome);
                                $stmt->execute();

                                if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                    if ($row['ID'] <> $id) {
                                        $exists = 1;
                                    } else {
                                        $exists = 0;
                                    }
                                } else {
                                    $exists = 0;
                                }

                                switch ($exists) {
                                    case 0:
                                        $stmt = 'UPDATE TB_SEGURANCA SET LOGIN = ?, SENHA = ?, NIVEL =? WHERE ID = ?';
                                        $params = array($nome, $senha, $nivel, $id);
                                        $ret = $pdo->prepare($stmt)->execute($params);
                                        echo json_encode($ret);
                                        break;
                                    case 1:
                                        echo "Nome já existe";
                                        break;
                                }
                            } else {
                                echo "parâmetro vazio!";
                            }
                            break;
                        case 3: //Inserir Usuário
                            if (!empty($nome) && !empty($senha)) {
                                $exists = -1;
                                $sql = 'SELECT * FROM TB_SEGURANCA WHERE LOGIN= :nome or SENHA = :senha ';
                                $stmt = $pdo->prepare($sql);
                                $stmt->bindValue(':nome', $nome);
                                $stmt->bindValue(':senha', $senha);
                                $stmt->execute();

                                if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                                    if ($row['ID'] <> $id) {
                                        $exists = 1;
                                    } else {
                                        $exists = 0;
                                    }
                                } else {
                                    $exists = 0;
                                }

                                switch ($exists) {
                                    case 0:
                                        $stmt = 'INSERT INTO TB_SEGURANCA (LOGIN, SENHA,NIVEL) VALUES (? ,?,?)';
                                        $params = array($nome, $senha, $nivel);
                                        $ret = $pdo->prepare($stmt)->execute($params);
                                        echo json_encode($ret);
                                        break;
                                    case 1:
                                        echo "Usuário/Login já existe";
                                        break;
                                }
                            } else {
                                echo "parâmetro vazio!";
                            }
                            break;
                        case 4: //verificar a existencia do nome
                            if (!empty($id)) {
                                $ret = $pdo->query("SELECT * FROM TB_SEGURANCA WHERE ID = '$id'");
                                $ret = $ret->fetchAll();
                            } else {
                                echo "parâmetro vazio!";
                            }
                            break;
                        case 5: //verificar a existencia da Senha
                            if (!empty($preco)) {
                                $ret = $pdo->query("SELECT * FROM TB_SEGURANCA WHERE SENHA = '$senha'");
                                $ret = $ret->fetchAll();
                                echo json_encode($ret);
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


            if ($ret[0][3] == 'administrador') {
                header("Location:itens_selecao_seg.php?itens=1");
            } else {
                echo json_encode($loginFeito);
                header("Location:itens_selecao_seg.php?itens=0");
            }
        }
    }
}
?>