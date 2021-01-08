

<?PHP
function commandsQL($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo)
{

     $COMMAND = "";

     $all_time_D1 = date('Y-m-d ', strtotime("$date_1 "));
     $all_time_D2 = date('Y-m-d ', strtotime($date_2 . " + 1 days"));

     $all_time_T1 = date('H:i:s', strtotime("$time_1"));
     $all_time_T2 = date('H:i:s', strtotime("$time_2"));

     /*echo "<br>";
          echo "time_1:".$all_time_D1;
          echo "<br>";
          echo "time_2:".$all_time_D2;
          echo "<br>";
          echo "time_1h:".$time_1;
          echo "<br>";
          echo "time_2h:".$time_2;*/

     if ($sel2 == 'AllSETORES' and $sel4 != 'AllDEP') {
          $COMMAND = "TB_DEPARTAMENTO.ID = '$sel4' AND TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
     } elseif ($sel2 != 'AllSETORES' and $sel4 == 'AllDEP') {

          $COMMAND = "TB_SETORES.ID = '$sel2' AND TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
     } elseif ($sel2 == 'AllSETORES' and $sel4 == 'AllDEP') {
          $COMMAND = "TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
     } else {
          $COMMAND = "TB_EMPRESAS.ID = '$sel1' AND TB_SETORES.ID = '$sel2' AND TB_DEPARTAMENTO.ID = '$sel4' AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D2') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
     }
     /*ECHO "AGORA".$COMMAND;*/
     $stmt = $pdo->query("SELECT DISTINCT TB_SETORES.NOME AS SETOR ,TB_ACCESS.ACC_DATE,ROW_NUMBER() OVER (ORDER BY TB_ACCESS.ID) AS CONTADOR FROM TB_USERS
          INNER JOIN TB_ACCESS ON TB_ACCESS.ACC_USER = TB_USERS.NOME
		INNER JOIN TB_EMPRESAS ON TB_EMPRESAS.ID = TB_USERS.EMP_ID
		INNER JOIN TB_DEPARTAMENTO ON TB_USERS.DEP_ID = TB_DEPARTAMENTO.ID
		INNER JOIN TB_SETORES ON TB_USERS.SETOR_ID = TB_SETORES.ID
          WHERE  $COMMAND AND TB_USERS.ATIVO = 1 AND TB_ACCESS.ACC_MAC != 3
          GROUP BY TB_USERS.CRACHA,TB_SETORES.ID,TB_SETORES.NOME,TB_SETORES.EMP_COD,TB_SETORES.EMP_COD,
          TB_SETORES.NOME,TB_ACCESS.ID,TB_ACCESS.ACC_USER,TB_ACCESS.ACC_MAC,TB_ACCESS.ACC_DATE
          ");
     $stmt1  = $stmt->fetchAll();

     if ($stmt1 == null) {
          $stmt = $pdo->query("SELECT TB_EMPRESAS.NOME AS EMP,TB_SETORES.NOME AS SETOR,
               TB_DEPARTAMENTO.NOME AS DEP,
               TB_ACCESS.ACC_DATE,
               TB_USERS.ATIVO,
               ROW_NUMBER() OVER (ORDER BY TB_ACCESS.ID) AS CONTADOR FROM TB_USERS
               INNER JOIN TB_SETORES ON TB_USERS.SETOR_ID = TB_SETORES.ID
               INNER JOIN TB_ACCESS ON TB_ACCESS.ACC_USER = TB_USERS.NOME
               INNER JOIN TB_EMPRESAS ON TB_EMPRESAS.ID = TB_USERS.EMP_ID
               INNER JOIN TB_DEPARTAMENTO ON TB_USERS.DEP_ID = TB_DEPARTAMENTO.ID
               WHERE $COMMAND AND TB_USERS.ATIVO = 1 AND TB_ACCESS.ACC_MAC != 3 
               GROUP BY TB_USERS.CRACHA,TB_SETORES.ID,TB_SETORES.NOME,TB_SETORES.EMP_COD,TB_SETORES.EMP_COD,
               TB_SETORES.NOME,TB_USERS.ID,TB_USERS.NOME,TB_ACCESS.ID,TB_ACCESS.ACC_USER,TB_ACCESS.ACC_MAC,TB_ACCESS.ACC_DATE,TB_EMPRESAS.NOME,
               TB_DEPARTAMENTO.NOME,TB_USERS.ATIVO
          ");
          /*echo "entrou na funcao";*/
          $stmt1  = $stmt->fetchAll();
     }
     // echo "command".decode_json($stmt1);

     /* $stmt2 = $pdo -> query(" SELECT PROD_ID,
               PROD_BARCODE,
               PROD_EPC,
               PROD_DATA,
               MASTER_ID,
               SETOR_NOME  from TB_PROD 
               INNER JOIN TB_SETORS ON TB_SETORS.SETOR_ID = TB_PROD.SETOR_ID where MASTER_ID IS NULL
          ");
                    
          $stmt1  = $stmt->fetchAll();
          $stmt3  = $stmt2->fetchAll();
          //echo "total2: ".json_encode($stmt3);
          $stmt1 += array_merge($stmt1,$stmt3);
         // echo "total: ".json_encode($stmt1);
        
          $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
         */


     return $stmt1;
}


function contadorTotal($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo)
{

     $all_time_D1 = date('Y-m-d ', strtotime("$date_1 "));
     $all_time_D2 = date('Y-m-d ', strtotime($date_2 . " + 1 days"));

     $all_time_T1 = date('H:i:s', strtotime("$time_1"));
     $all_time_T2 = date('H:i:s', strtotime("$time_2"));


     /* echo "time_1:".$all_time_D1;
          echo "time_2:".$all_time_D2;*/



     if ($sel2 == 'AllSETORES' and $sel4 != 'AllDEP') {
          $COMMAND = "TB_DEPARTAMENTO.ID = '$sel4' AND TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
     } elseif ($sel2 != 'AllSETORES' and $sel4 == 'AllDEP') {
          $COMMAND = "TB_SETORES.ID = '$sel2' AND TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
     } elseif ($sel2 == 'AllSETORES' and $sel4 == 'AllDEP') {
          $COMMAND = "TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
     } else {
          $COMMAND = "TB_EMPRESAS.ID = '$sel1' AND TB_SETORES.ID = '$sel2' AND TB_DEPARTAMENTO.ID = '$sel4' AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
     }


     $stmt = $pdo->query("SELECT EMP, SETOR,DEP,COUNT(*) as total FROM (
                                   SELECT TB_EMPRESAS.NOME AS EMP,TB_SETORES.NOME AS SETOR,TB_DEPARTAMENTO.NOME AS DEP,TB_ACCESS.ACC_DATE,ROW_NUMBER() OVER (ORDER BY TB_ACCESS.ID) AS CONTADOR FROM TB_USERS
                                   INNER JOIN TB_DEPARTAMENTO ON TB_USERS.DEP_ID = TB_DEPARTAMENTO.ID
                                   INNER JOIN TB_ACCESS ON TB_ACCESS.ACC_USER = TB_USERS.NOME
                                   INNER JOIN TB_EMPRESAS ON TB_EMPRESAS.ID = TB_USERS.EMP_ID
                                   INNER JOIN TB_SETORES ON TB_USERS.SETOR_ID = TB_SETORES.ID
                                   WHERE $COMMAND AND TB_USERS.ATIVO = 1 AND TB_ACCESS.ACC_MAC != 3
                                   GROUP BY TB_USERS.CRACHA,TB_SETORES.ID,TB_SETORES.NOME,TB_SETORES.EMP_COD,TB_SETORES.EMP_COD,
                                   TB_SETORES.NOME,TB_USERS.ID,TB_USERS.NOME,TB_ACCESS.ID,TB_ACCESS.ACC_USER,TB_ACCESS.ACC_MAC,TB_ACCESS.ACC_DATE,TB_EMPRESAS.NOME,
                                   TB_DEPARTAMENTO.NOME
                                    ) AS TOTAL GROUP BY TOTAL.EMP,TOTAL.SETOR,TOTAL.DEP
                                    
          ");

     $stmt1  = $stmt->fetchAll();

     if ($stmt1 == null) {

          $stmt = $pdo->query("SELECT EMP, SETOR,DEP,COUNT(*) as total FROM (
                    SELECT TB_EMPRESAS.NOME AS EMP,TB_SETORES.NOME AS SETOR,TB_DEPARTAMENTO.NOME AS DEP,TB_ACCESS.ACC_DATE,ROW_NUMBER() OVER (ORDER BY TB_ACCESS.ID) AS CONTADOR FROM TB_USERS
                    INNER JOIN TB_SETORES ON TB_USERS.SETOR_ID = TB_SETORES.ID
                    INNER JOIN TB_ACCESS ON TB_ACCESS.ACC_USER = TB_USERS.NOME
                    INNER JOIN TB_EMPRESAS ON TB_EMPRESAS.ID = TB_USERS.EMP_ID
                    INNER JOIN TB_DEPARTAMENTO ON TB_USERS.DEP_ID = TB_DEPARTAMENTO.ID
                    WHERE  $COMMAND AND TB_USERS.ATIVO = 1 AND TB_ACCESS.ACC_MAC != 3
                    GROUP BY TB_USERS.CRACHA,TB_SETORES.ID,TB_SETORES.NOME,TB_SETORES.EMP_COD,TB_SETORES.EMP_COD,
                    TB_SETORES.NOME,TB_USERS.ID,TB_USERS.NOME,TB_ACCESS.ID,TB_ACCESS.ACC_USER,TB_ACCESS.ACC_MAC,TB_ACCESS.ACC_DATE,TB_EMPRESAS.NOME,
                    TB_DEPARTAMENTO.NOME
                     ) AS TOTAL GROUP BY TOTAL.EMP,TOTAL.SETOR,TOTAL.DEP 
     
          ");
          /*echo "entrou na funcao";*/
          $stmt1  = $stmt->fetchAll();
     }
     // echo "command".decode_json($stmt1);

     /* $stmt2 = $pdo -> query(" SELECT PROD_ID,
               PROD_BARCODE,
               PROD_EPC,
               PROD_DATA,
               MASTER_ID,
               SETOR_NOME  from TB_PROD 
               INNER JOIN TB_SETORS ON TB_SETORS.SETOR_ID = TB_PROD.SETOR_ID where MASTER_ID IS NULL
          ");
                    
          $stmt1  = $stmt->fetchAll();
          $stmt3  = $stmt2->fetchAll();
          //echo "total2: ".json_encode($stmt3);
          $stmt1 += array_merge($stmt1,$stmt3);
         // echo "total: ".json_encode($stmt1);
        
          $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
         */


     return $stmt1;
}


function contadorTotal2($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo)
{





     $all_time_D1 = date('Y-m-d', strtotime("$date_1"));
     $all_time_D2 = date('Y-m-d', strtotime($date_2 . " + 1 days"));

     $all_time_T1 = date('H:i:s', strtotime("$time_1"));
     $all_time_T2 = date('H:i:s', strtotime("$time_2"));

     /*echo "<br>";
          echo "time_1:".$all_time_T1;
          echo "<br>";
          echo "time_2:".$all_time_T2;
          echo "<br>";*/



     if ($sel2 == 'AllSETORES' and $sel4 != 'AllDEP') {

          $COMMAND = "TB_DEPARTAMENTO.ID = '$sel4' AND TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
          $COMMAND2NULL = "TB_DEPARTAMENTO.ID = '$sel4' AND TB_EMPRESAS.ID = '$sel1'";
     } elseif ($sel2 != 'AllSETORES' and $sel4 == 'AllDEP') {

          $COMMAND = "TB_SETORES.ID = '$sel2' AND TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
          $COMMAND2NULL = "TB_SETORES.ID = '$sel2' AND TB_EMPRESAS.ID = '$sel1' ";
     } elseif ($sel2 == 'AllSETORES' and $sel4 == 'AllDEP') {

          $COMMAND = "TB_EMPRESAS.ID = '$sel1' AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
          $COMMAND2NULL = "TB_EMPRESAS.ID = '$sel1'";
     } else {

          $COMMAND = "TB_EMPRESAS.ID = '$sel1' AND TB_SETORES.ID = '$sel2' AND TB_DEPARTAMENTO.ID = '$sel4' AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
               AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
          $COMMAND2NULL = "TB_EMPRESAS.ID = '$sel1' AND TB_SETORES.ID = '$sel2' AND TB_DEPARTAMENTO.ID = '$sel4'";
     }


     $stmt = $pdo->query("SELECT EMP, SETOR,DEP,COUNT(*) as total FROM (
                                   SELECT TB_EMPRESAS.NOME AS EMP,TB_SETORES.NOME AS SETOR,TB_DEPARTAMENTO.NOME AS DEP,TB_ACCESS.ACC_DATE,ROW_NUMBER() OVER (ORDER BY TB_ACCESS.ID) AS CONTADOR FROM TB_USERS
                                   INNER JOIN TB_SETORES ON TB_USERS.SETOR_ID = TB_SETORES.ID
                                   INNER JOIN TB_ACCESS ON TB_ACCESS.ACC_USER = TB_USERS.NOME
                                   INNER JOIN TB_EMPRESAS ON TB_EMPRESAS.ID = TB_USERS.EMP_ID
                                   INNER JOIN TB_DEPARTAMENTO ON TB_USERS.DEP_ID = TB_DEPARTAMENTO.ID
                                   WHERE  $COMMAND AND TB_USERS.ATIVO = 1 AND TB_ACCESS.ACC_MAC != 3
                                   GROUP BY TB_USERS.CRACHA,TB_SETORES.ID,TB_SETORES.NOME,TB_SETORES.EMP_COD,TB_SETORES.EMP_COD,
                                   TB_SETORES.NOME,TB_USERS.ID,TB_USERS.NOME,TB_ACCESS.ID,TB_ACCESS.ACC_USER,TB_ACCESS.ACC_MAC,TB_ACCESS.ACC_DATE,TB_EMPRESAS.NOME,
                                   TB_DEPARTAMENTO.NOME
                                    ) AS TOTAL GROUP BY TOTAL.EMP,TOTAL.SETOR,TOTAL.DEP 
          ");

     $stmt1  = $stmt->fetchAll();


     if ($stmt1 == null) {

          $stmt = $pdo->query("SELECT DISTINCT TB_EMPRESAS.NOME AS EMP,TB_SETORES.NOME AS SETOR,
               TB_DEPARTAMENTO.NOME AS DEP
               FROM TB_USERS
               INNER JOIN TB_SETORES ON TB_USERS.SETOR_ID = TB_SETORES.ID
               INNER JOIN TB_ACCESS ON TB_ACCESS.ACC_USER = TB_USERS.NOME
               INNER JOIN TB_EMPRESAS ON TB_EMPRESAS.ID = TB_USERS.EMP_ID
               INNER JOIN TB_DEPARTAMENTO ON TB_USERS.DEP_ID = TB_DEPARTAMENTO.ID
               WHERE   $COMMAND2NULL
               GROUP BY TB_USERS.CRACHA,TB_SETORES.ID,TB_SETORES.NOME,TB_SETORES.EMP_COD,TB_SETORES.EMP_COD,
               TB_SETORES.NOME,TB_USERS.ID,TB_USERS.NOME,TB_ACCESS.ID,TB_ACCESS.ACC_USER,TB_ACCESS.ACC_MAC,TB_ACCESS.ACC_DATE,TB_EMPRESAS.NOME,
               TB_DEPARTAMENTO.NOME,TB_USERS.ATIVO
     
          ");
          // echo "entrou na funcao";
          $stmt1  = $stmt->fetchAll();
     }
     // echo "command".decode_json($stmt1);

     /* $stmt2 = $pdo -> query(" SELECT PROD_ID,
               PROD_BARCODE,
               PROD_EPC,
               PROD_DATA,
               MASTER_ID,
               SETOR_NOME  from TB_PROD 
               INNER JOIN TB_SETORS ON TB_SETORS.SETOR_ID = TB_PROD.SETOR_ID where MASTER_ID IS NULL
          ");
                    
          $stmt1  = $stmt->fetchAll();
          $stmt3  = $stmt2->fetchAll();
          //echo "total2: ".json_encode($stmt3);
          $stmt1 += array_merge($stmt1,$stmt3);
         // echo "total: ".json_encode($stmt1);
        
          $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
         */


     return $stmt1;
}





function commandsQL2($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo)
{


     $all_time_D1 = date('Y-m-d', strtotime("$date_1"));
     $all_time_D2 = date('Y-m-d', strtotime($date_2 . " + 1 days"));

     $all_time_T1 = date('H:i:s', strtotime("$time_1"));
     $all_time_T2 = date('H:i:s', strtotime("$time_2"));


     /* echo "DATE_1_UPG:".$all_time_D1;
     echo "<br>";
     echo "DATE_2_UPG:".$all_time_D2;
     echo "<br>";
     echo "sel1: ".$sel1;
     echo "<br>";
     echo "sel2: ".$sel2;
     echo "<br>";
     echo "sel4: ".$sel4;
     echo "<br>";*/


     if ($sel2 == 'AllSETORES' and $sel4 != 'AllDEP') {

          $COMMAND = "TB_DEPARTAMENTO.ID = '$sel4' AND TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
          AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
          $COMMAND2NULL = "TB_DEPARTAMENTO.ID = '$sel4' AND TB_EMPRESAS.ID = '$sel1'";
     } elseif ($sel2 != 'AllSETORES' and $sel4 == 'AllDEP') {

          $COMMAND = "TB_SETORES.ID = '$sel2' AND TB_EMPRESAS.ID = '$sel1'  AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
          AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
          $COMMAND2NULL = "TB_SETORES.ID = '$sel2' AND TB_EMPRESAS.ID = '$sel1' ";
     } elseif ($sel2 == 'AllSETORES' and $sel4 == 'AllDEP') {

          $COMMAND = "TB_EMPRESAS.ID = '$sel1' AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
          AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
          $COMMAND2NULL = "TB_EMPRESAS.ID = '$sel1'";
     } else {

          $COMMAND = "TB_EMPRESAS.ID = '$sel1' AND TB_SETORES.ID = '$sel2' AND TB_DEPARTAMENTO.ID = '$sel4' AND TB_ACCESS.ACC_DATE >= CONVERT(DATE,'$all_time_D1') AND TB_ACCESS.ACC_DATE < CONVERT(DATE,'$all_time_D2') 
          AND CONVERT(TIME,ACC_DATE) >= '$all_time_T1' AND CONVERT(TIME,ACC_DATE) <= '$all_time_T2'";
          $COMMAND2NULL = "TB_EMPRESAS.ID = '$sel1' AND TB_SETORES.ID = '$sel2' AND TB_DEPARTAMENTO.ID = '$sel4'";
     }

     $stmt = $pdo->query("SELECT TB_EMPRESAS.NOME AS EMP,TB_SETORES.NOME AS SETOR,
     TB_DEPARTAMENTO.NOME AS DEP,
     TB_ACCESS.ACC_DATE,
     TB_USERS.ATIVO,
     ROW_NUMBER() OVER (ORDER BY TB_ACCESS.ID) AS CONTADOR FROM TB_USERS
     INNER JOIN TB_SETORES ON TB_USERS.SETOR_ID = TB_SETORES.ID
     INNER JOIN TB_ACCESS ON TB_ACCESS.ACC_USER = TB_USERS.NOME
     INNER JOIN TB_EMPRESAS ON TB_EMPRESAS.ID = TB_USERS.EMP_ID
     INNER JOIN TB_DEPARTAMENTO ON TB_USERS.DEP_ID = TB_DEPARTAMENTO.ID
     WHERE $COMMAND AND TB_USERS.ATIVO = 1 AND TB_ACCESS.ACC_MAC != 3 
     GROUP BY TB_USERS.CRACHA,TB_SETORES.ID,TB_SETORES.NOME,TB_SETORES.EMP_COD,TB_SETORES.EMP_COD,
     TB_SETORES.NOME,TB_USERS.ID,TB_USERS.NOME,TB_ACCESS.ID,TB_ACCESS.ACC_USER,TB_ACCESS.ACC_MAC,TB_ACCESS.ACC_DATE,TB_EMPRESAS.NOME,
     TB_DEPARTAMENTO.NOME,TB_USERS.ATIVO

     ");
     $stmt1  = $stmt->fetchAll();
     if ($stmt1 == null) {

          $stmt = $pdo->query("SELECT DISTINCT TB_EMPRESAS.NOME AS EMP,TB_SETORES.NOME AS SETOR,
          TB_DEPARTAMENTO.NOME AS DEP
          FROM TB_USERS
          INNER JOIN TB_SETORES ON TB_USERS.SETOR_ID = TB_SETORES.ID
          INNER JOIN TB_ACCESS ON TB_ACCESS.ACC_USER = TB_USERS.NOME
          INNER JOIN TB_EMPRESAS ON TB_EMPRESAS.ID = TB_USERS.EMP_ID
          INNER JOIN TB_DEPARTAMENTO ON TB_USERS.DEP_ID = TB_DEPARTAMENTO.ID
          WHERE $COMMAND2NULL
          GROUP BY TB_USERS.CRACHA,TB_SETORES.ID,TB_SETORES.NOME,TB_SETORES.EMP_COD,TB_SETORES.EMP_COD,
          TB_SETORES.NOME,TB_USERS.ID,TB_USERS.NOME,TB_ACCESS.ID,TB_ACCESS.ACC_USER,TB_ACCESS.ACC_MAC,TB_ACCESS.ACC_DATE,TB_EMPRESAS.NOME,
          TB_DEPARTAMENTO.NOME,TB_USERS.ATIVO

     ");
          /*echo "entrou na funcao";*/
          $stmt1  = $stmt->fetchAll();
     }


     //echo "command".decode_json($stmt1);

     /* $stmt2 = $pdo -> query(" SELECT PROD_ID,
          PROD_BARCODE,
          PROD_EPC,
          PROD_DATA,
          MASTER_ID,
          SETOR_NOME  from TB_PROD 
          INNER JOIN TB_SETORS ON TB_SETORS.SETOR_ID = TB_PROD.SETOR_ID where MASTER_ID IS NULL
     ");
               
     $stmt1  = $stmt->fetchAll();
     $stmt3  = $stmt2->fetchAll();
     //echo "total2: ".json_encode($stmt3);
     $stmt1 += array_merge($stmt1,$stmt3);
    // echo "total: ".json_encode($stmt1);
   
     $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
    */


     return $stmt1;
}



function commandsQL_numLines($select, $limit, $pdo)
{


     switch ($select) {

          case "All":
               $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
               break;
          case "1":
               $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
               break;
          case "2":
               $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
               break;
          case "3":
               $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
               break;
               /*VERIFICAR AS OPÇÃOS DE ENTRADA E SAÍDA*/
          case "4":
               $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
               break;
               /* case "op5":
             $stmt = $pdo -> query("SELECT * FROM tb_pa");
             $stmt1  = $stmt->fetchAll();
            // $num_contacts = $pdo->query('SELECT COUNT(*) FROM tb_pa')->fetchColumn();
        break;*/
          default:
               $num_contacts = $pdo->query('SELECT COUNT(*) FROM TB_PROD')->fetchColumn();
     }

     return $num_contacts;
}

function alimento($admin, $valor)
{
     switch ($admin) {
          case ('Val'):
               $preco = $valor;
               break;
          default:
               $preco = '10';
     }

     define('preco_alimento',  $preco);
     return $preco;
}


function tableGrafico($sel2, $sel4, $stmt1, $stmt2, $preco)
{
     $ItemsProduced = $ItemsPastDue = $RecordDate = $RecordDate3 = '';

     if ($sel2 == 'AllSETORES' and $sel4 != 'AllDEP' or $sel2 != 'AllSETORES' and $sel4 == 'AllDEP' or $sel2 == 'AllSETORES' and $sel4 == 'AllDEP') {
          foreach ($stmt2 as $contact) {
               $ItemsPastDue .= ($contact['total'] / 2.0) . ',';
               $ItemsProduced .= ($contact['total']) * ($preco) . ',';
               $date = $contact['SETOR'];
               $RecordDate .= '"' . $date . '",';
          }
     } else {
          foreach ($stmt1 as $contact) {
               $ItemsPastDue .= ($contact['CONTADOR'] / 2) . ',';
               $ItemsProduced .= ($contact['CONTADOR']) * $preco . ',';
               $date = $contact['ACC_DATE'];
               $RecordDate .= '"' . $date . '",';
               $SETOR = $contact['SETOR'];
               $RecordDate3 .= '"' . $SETOR . '",';
          }
     }

     echo '
          <div class="content read">
               <table id = "myTable">
                    <thead>
                         <tr>
                              <td>EMPRESA</td>
                              <td>SETOR</td>
                              <td>DEPARTAMENTO</td>
                              <td>QUANTIDADE DE FUNCIONÁRIOS</td>
                              <td>VALOR</td>
                              <td>TOTAL</td>
                         </tr>
                    </thead>
               
                    <tbody>';
                    foreach ($stmt2 as $contact) {
                         $valorTotal = $contact['total'] * $preco;
          echo '
                         <tr>
                              <td><?=$contact["EMP"]?></td>
                              <td><?=$contact["SETOR"]?></td>
                              <td><?=$contact["DEP"]?></td>
                              <td><?=$contact["total"]?></td>
                              <td><?="R$".str_replace(' . ',', ',$preco)?></td>
                              <td><?php $TotalAd = number_format($valorTotal,2);echo "R$".str_replace(' . ',', ',$TotalAd);?></td>
                         </tr>';
                    }
}

?>