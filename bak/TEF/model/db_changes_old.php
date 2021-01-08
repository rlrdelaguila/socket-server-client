<?php
include '../controller/db_con.php';
$pdo = pdo_connect_db();

$msg = '';
$stts = '';
$ret = null;

$id =       $_POST["_id"];
$modo =     $_POST["_modo"];
$oque =     $_POST["_oque"];
$table =    $_POST["_tabela"];
$nome =     $_POST["_nome"];

// $modo 1 = Delete  |  2 = Update  |  3 = Insert
if (!empty($modo) && !empty($id)) {
    try {
        switch ($modo) {
            case 1:
                $stmt = 'DELETE FROM ' . $table . ' WHERE ID = ?';
                $params = array($id);
                $ret = $pdo->prepare($stmt)->execute($params);
                $msg = $oque . " excluido(a)!";
                $stts = "success";
                break;
            case 2:
                if (!empty($nome)) {
                    $exists = -1;
                    $sql = 'SELECT * FROM ' . $table . ' WHERE NOME= :nome';
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
                            $stmt = 'UPDATE ' . $table . ' SET NOME = ? WHERE ID = ?';
                            $params = array($nome, $id);
                            $ret = $pdo->prepare($stmt)->execute($params);
                            $msg = $oque . " editado(a)!";
                            $stts = "success";
                            break;
                        case 1:
                            $msg = $oque . " já cadastrado(a)!";
                            $stts = "error";
                            break;
                    }
                } else {
                    $msg = "parâmetro vazio!";
                    $stts = "error";
                }
                break;
            case 3:
                if (!empty($nome)) {
                    $exists = -1;
                    $sql = 'SELECT * FROM ' . $table . ' WHERE NOME= :nome';
                    $stmt = $pdo->prepare($sql);
                    $stmt->bindValue(':nome', $nome);
                    $stmt->execute();

                    if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                        $exists = 1;
                    } else {
                        $exists = 0;
                    }

                    switch ($exists) {
                        case 0:
                            $stmt = 'INSERT INTO ' . $table . ' (NOME) VALUES (?)';
                            $params = array($nome);
                            $ret = $pdo->prepare($stmt)->execute($params);
                            $msg = $oque . " cadastrado(a)!";
                            $stts = "success";
                            break;
                        case 1:
                            $msg = $oque . " já cadastrado(a)!";
                            $stts = "error";
                            break;
                    }
                } else {
                    $msg = "parâmetro vazio!";
                    $stts = "error";
                }
                break;
            default:
                $msg = "opção inválida!";
                $stts = "error";
        }
    } catch (PDOException $e) {
        $msg = "Erro: " . $e->getMessage();;
        $stts = "error";
    }
} else {
    $msg = "parametors inválidos";
    $stts = "error";
}

echo '{ "status": "' . $stts . '", "msg": "' . $msg . '", "ret": "' . json_encode($ret) . '"}';
