<?php
// DB table to use
$table = 'TB_SETORES';

// Table's primary key
$primaryKey = 'ID';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array('db' => 'NOME', 'dt' => 1),
    array('db' => 'ID', 'dt' => 0)
);

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
