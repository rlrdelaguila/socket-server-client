<?php
// DB table to use
$table = 'TB_HORARIOS';

// Table's primary key
$primaryKey = 'ID';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array('db' => 'REFEICAO', 'dt' => 1),
    array('db' => 'ID', 'dt' => 0),
    array(
        'db' => 'INICIO',  'dt' => 2,
        'formatter' => function ($d, $row) {
            return date('H:i', strtotime($d));
        }
    ),
    array(
        'db' => 'FIM',  'dt' => 3,
        'formatter' => function ($d, $row) {
            return date('H:i', strtotime($d));
        }
    ),
    array(
        'db' => 'PRECO',  'dt' => 4,
        'formatter' => function ($d, $row) {
            return 'R$' . number_format($d, 2, ',', '.');
        }
    )
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
