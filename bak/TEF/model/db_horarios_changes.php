<?php
include '../controller/db_con.php';
$pdo = pdo_connect_db();



if (isset($_POST["id"])) {
    $id     =   trim($_POST["id"]);
    $modo   =   trim($_POST["modo"]);
}

if (isset($_POST["hNome"])) {
    $nome   =   trim($_POST["hNome"]);
    $preco  =   trim($_POST["hPreco"]);
    $inicio =   trim($_POST["hInicio"]);
    $fim    =   trim($_POST["hFim"]);
}


// Check that the contact ID exists
// modo 1 = Delete  |  2 = Update  |  3 = Insert
if (!empty($id) && !empty($modo)) {
    try {
        switch ($modo) {
            case 1:
                $stmt = 'DELETE FROM TB_HORARIOS WHERE ID = ?';
                $params = array($id);
                $ret = $pdo->prepare($stmt)->execute($params);
                echo json_encode($ret);
                break;
            case 2:
                if (!empty($nome) && !empty($preco) && !empty($inicio) && !empty($fim)) {
                    $exists = -1;
                    $sql = 'SELECT * FROM TB_HORARIOS WHERE REFEICAO= :nome';
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
                            $stmt = 'UPDATE TB_HORARIOS SET REFEICAO = ?, INICIO = ?, FIM = ?, PRECO = ? WHERE ID = ?';
                            $params = array($nome, $inicio, $fim, $preco, $id);
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
            case 3:
                if (!empty($nome) && !empty($preco) && !empty($inicio) && !empty($fim)) {
                    $exists = -1;
                    $sql = 'SELECT * FROM TB_HORARIOS WHERE REFEICAO= :nome';
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
                            $stmt = 'INSERT INTO TB_HORARIOS (REFEICAO, INICIO, FIM, PRECO) VALUES (? ,? , ?, ?)';
                            $params = array($nome, $inicio, $fim, $preco);
                            $ret = $pdo->prepare($stmt)->execute($params);
                            echo json_encode($ret);
                            break;
                        case 1:
                            echo "Refeição já existe";
                            break;
                    }
                } else {
                    echo "parâmetro vazio!";
                }
                break;
            case 4:
                if (!empty($nome)) {
                    $ret = $pdo->query("SELECT * FROM TB_HORARIOS WHERE REFEICAO = '$nome'");
                    $ret = $ret->fetchAll();
                    echo json_encode($ret);
                } else {
                    echo "parâmetro vazio!";
                }
                break;
            case 5:
                if (!empty($preco)) {
                    $ret = $pdo->query("SELECT * FROM TB_HORARIOS WHERE PRECO = '$preco'");
                    $ret = $ret->fetchAll();
                    echo json_encode($ret);
                } else {
                    echo "parâmetro vazio!";
                }
                break;
            case 6:
                if (!empty($nome)) {
                    $ret = $pdo->query("SELECT * FROM
                    (SELECT * FROM TB_HORARIOS 
                    WHERE (INICIO >= '$inicio' AND FIM <='$fim') 
                    OR  (FIM>= '$inicio' AND INICIO <='$fim') 
                    OR  INICIO>='$inicio' AND FIM<='$fim' )TEST 
                    WHERE INICIO >= '$inicio' OR FIM <='$fim' OR INICIO <= '$inicio' ");
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
