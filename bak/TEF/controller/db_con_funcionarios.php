<?php

function pdo_connect_db()
{
    $db_info = parse_ini_file("../../config.ini", false, true);

    define('DB_HOST',           $db_info["DBHost"]);
    define('DB_USER',           $db_info["DBUser"]);
    define('DB_PASSWORD',       $db_info["DBPass"]);
    define('DB_NAME',           $db_info["DBName"]);

    $pdoConfig  = "sqlsrv:" . "Server=" . DB_HOST . ";" . "Database=" . DB_NAME . ";";

    try {
        return new PDO($pdoConfig, DB_USER, DB_PASSWORD);
    } catch (PDOException $e) {
        $mensagem = "Drivers disponiveis: " . implode(",", PDO::getAvailableDrivers());
        $mensagem .= "\nErro: " . $e->getMessage();
        throw new Exception($mensagem);
    }
}
