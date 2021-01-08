<?php
include '../controller/db_con.php';
$pdo = pdo_connect_db();

/*$id     =   trim($_POST["id"]);
$nome   =   trim($_POST["uNome"]);
$senha  =   trim($_POST["uSenha"]);
$nivel  =   trim($_POST["uNivel"]);
$modo   =   trim($_POST["modo"]);

*/

if (isset($_POST["id"])) {
    $id     =   trim($_POST["id"]);
    $modo   =   trim($_POST["modo"]);
}

if (isset($_POST["uNome"])) {
    $id     =   trim($_POST["id"]);
    $modo   =   trim($_POST["modo"]);
    $nome   =   trim($_POST["uNome"]);
    $senha  =   trim($_POST["uSenha"]);
    $nivel =   trim($_POST["uNivel"]);
}


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
                    $sql = 'SELECT * FROM TB_SEGURANCA WHERE LOGIN= :nome /*or SENHA = :senha */';
                    $stmt = $pdo->prepare($sql);
                    $stmt->bindValue(':nome', $nome);
                   // $stmt->bindValue(':senha', $senha);
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
                    $ret = $pdo->query("SELECT NIVEL FROM TB_SEGURANCA WHERE ID =" . $id);
                    $ret = $ret->fetchAll();
                    echo json_encode($ret);
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
