<?php

include './../../controller/db_con_adm.php';
if (!isset($_COOKIE['login'])) {
    if (empty($_SESSION["userId"])) {
        echo 'não permitido';
        exit();
    }
} else {
    session_start();
    $value = $_SESSION["userId"];

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
                        $sql = 'SELECT * FROM TB_SEGURANCA WHERE LOGIN= :nome /*or SENHA = :senha*/ ';
                        $stmt = $pdo->prepare($sql);
                        $stmt->bindValue(':nome', $nome);
                       /* $stmt->bindValue(':senha', $senha);*/
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
    } else {
        echo 'não permitido';
        exit();
    }
}

// DB table to use
$table = 'TB_SEGURANCA';

// Table's primary key
$primaryKey = 'ID';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array('db' => 'LOGIN', 'dt' => 1),
    array('db' => 'ID', 'dt' => 0),
    array('db' => 'SENHA',  'dt' => 2),
    array('db' => 'NIVEL', 'dt' => 3)
);

// SQL server connection information
$db_info = parse_ini_file("../../config.ini", false, true);

$sql_details = array(
    'user'      => $db_info["DBUser"],
    'pass'      => $db_info["DBPass"],
    'db'        => $db_info["DBName"],
    'host'      => $db_info["DBHost"],
    'driver'    => 'sqlsrv'
);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */

require('../../public/DataTables-1.10.22/ssp.class.php');

echo json_encode(SSP::simple($_GET, $sql_details, $table, $primaryKey, $columns));
