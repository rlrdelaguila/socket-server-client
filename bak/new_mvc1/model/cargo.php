<?php
// Get Datas
$table = $_GET["tabela"];
$primaryKey = $_GET["key"];
$colsdb = $_GET["colunasdb"];
$colsdt = $_GET["colunasdt"];


$columns = array();
$i = 0;
foreach ($colsdb as $col) {
    array_push($columns, array('db' => $col, 'dt' => $colsdt[$i]));
    $i++;
}

// SQL server connection information
$db_info = parse_ini_file("../config.ini", false, true);
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

require('../controller/db_get_process.php');

echo json_encode(SSP::simple($_GET, $sql_details, $table, $primaryKey, $columns));
