<?php
//filter.php  
//include 'functions.php';
include 'COMMAND.php';

//$pdo = pdo_connect_mysql(2);


include '../../controller/db_con_graphics.php';
$pdo = pdo_connect_db();
// Get the page via GET request (URL param: page), if non exists default the page to 1
$page = isset($_GET['page']) && is_numeric($_GET['page']) ? (int)$_GET['page'] : 1;
// Number of records to show on each page
$records_per_page = 10;
// Check refresh inicial
$loop_incial = False;
$graph_title = 'Item Produced & Past Due';
global $valor;
static $sel2 = '';
static $sel4 = '';
static $stmt1 = '';
static $stmt2 = '';
static $preco = '';
static $selecRefeicao = '';
global $output;


//include '../login/functions_1.php';
//$pdo_login = pdo_connect_senha();


$num_contacts1 = 0;
$login = '';
$abas = 0;



if ($loop_incial == True) {

    $refresh = $_GET['refresh'];
}
/*
if(!isset($_COOKIE['login'])){
    if(empty($_SESSION["userId"])) {
            header("Location:../login/login.html");    
    }
}
else{
    session_start();
    if(!empty($_SESSION["userId"])) {
       
        
}
else    header("Location:../login/login.html");  

}
*/


//FIELD SELECTED
$ItemsProduced = $ItemsPastDue = $RecordDate = $RecordDate3 = '';
$finished2 = [];




if (isset($_POST["action"]) /*or $loop_incial == True*/) {

    $sel1 = $_POST['sel1'];
    $sel2 = $_POST['sel2'];
    $sel4 = $_POST['sel3'];

    $date_1 = $_POST['selDate_1'];
    $date_2 = $_POST['selDate_2'];

    $resultPreco = $_POST['selTurno'];
    //Datas of _POST******

    if ($sel1 != "Empresas..." and $sel2 != "SETORES..." and $sel4 != "DEP..." and $resultPreco != "REFEIÇÃO...") {

        if (isset($_POST['appt_1'])) {
            $finished = '';
            $finished2  = '';
            // echo "op1";
            $date_1 = $_POST['selDate_1'];
            $date_2 = $_POST['selDate_2'];
            //Datas of times
            $resultPreco = $_POST['selTurno'];
            $time_1 = $_POST['appt_1'];
            $time_2 = $_POST['appt_2'];
            $total = [];
            $countArray = 0;
            //echo "refeicao_result: ".$resultPreco;

            /* novo comando */
            if ($resultPreco == "AllREF") {

                $query = $pdo->query("SELECT * FROM TB_HORARIOS");

                while ($stmt3  = $query->fetch()) {
                    $preco =  $stmt3['PRECO'];
                    // echo "entrou na funcao";

                    $finished = 0;

                    /* echo  "<br>";
                                echo "time_1:".$time_1;
                                echo  "<br>";
                                echo "time_2:".$time_2;
                                echo  "<br>";
                                echo "selec1: ".$sel1;
                                echo  "<br>";
                                echo "selec1: ".$sel2;
                                echo  "<br>";
                                echo "selec1: ".$sel4;
                                echo  "<br>";*/



                    $stmt1 = commandsQL($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo);
                    $stmt2 = contadorTotal($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo);

                    $sizearx = count($stmt2, 1);
                    // echo 'size: '.$sizearx; 
                    if ($sizearx < 8) {
                        $total[] .= 0;
                        if ($stmt2 != null) {
                            $emp = $stmt2[0][0];
                            $ssetor = $stmt2[0][1];
                            $dep = $stmt2[0][2];
                            $stmt2 = array(
                                array(
                                    'EMP' =>  $emp,
                                    'SETOR' =>  $ssetor,
                                    'DEP' =>  $dep,
                                    'ACC_DATE' => 0,
                                    'ATIVO' => 0,
                                    'CONTADOR' => 1
                                )
                            );
                        }
                    } else {
                        $total[] .= $stmt2[0][3];
                    }


                    //$limit = $_POST['count'];
                    $flag_pag = True;
                    $loop_incial = True;

                    /* echo " empresa: ".$sel1; 
                                echo " setor: ".$sel2; 
                                echo  "<br>";
                                echo "total: ".$total[$countArray];
                                echo  "<br>";*/
                    $countArray++;


                    if ($loop_incial == True) {
                        // header("Refresh: 40; url=table_v1.php?refresh=refresh&select=$select&limit=$limit");
                    }
                }
            } else {
                $finished = 1;
                $query = $pdo->query("SELECT * FROM TB_HORARIOS WHERE ID = '$resultPreco'");
                while ($stmt3  = $query->fetch()) {
                    $preco =  $stmt3['PRECO'];
                }

                $query = $pdo->query("SELECT * FROM TB_HORARIOS WHERE ID = '$resultPreco'");


                while ($stmt3  = $query->fetch()) {

                    $time_1 =  $stmt3['INICIO'];
                    $time_2 =  $stmt3['FIM'];
                    $tipocomida = $stmt3['REFEICAO'];
                }

                $stmt1 = commandsQL($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo);
                $stmt2 = contadorTotal($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo);
                if ($stmt2 == null) {
                    $total = 0;
                } else {
                    $total = $stmt2[0][0];
                }


                //$limit = $_POST['count'];
                $flag_pag = True;
                $loop_incial = True;

                /*echo " empresa: ".$sel1; 
                                 echo " setor: ".$sel2; */

                if ($loop_incial == True) {
                    // header("Refresh: 40; url=table_v1.php?refresh=refresh&select=$select&limit=$limit");
                }
            }
        } else {
            //Datas of dates
            $finished = '';
            $date_1 = $_POST['selDate_1'];
            $date_2 = $_POST['selDate_2'];
            //Datas of times
            $resultPreco = $_POST['selTurno'];
            //echo "result: ".$resultPreco;
            //$time_2 = $_POST['appt_2'];
            $desativar = 0;
            if ($resultPreco == "AllREF") {

                // $query = $pdo -> query("SELECT PRECO FROM TB_HORARIOS WHERE ID = '$time_1'");
                /*$query = $pdo -> query("SELECT PRECO FROM TB_HORARIOS WHERE ID = '$time_1'");
                        while( $stmt3  = $query->fetch() )  { 
                            $preco =  $stmt3['PRECO'];
                        }*/

                $query = $pdo->query("SELECT * FROM TB_HORARIOS");
                $total = [];
                $countArray = 0;
                $countFunci = [];
                $out1 = '';
                while ($stmt3  = $query->fetch()) {

                    $finished = 0;
                    $finished2 =
                        $time_1 =  $stmt3['INICIO'];
                    $time_2 =  $stmt3['FIM'];


                    /* $all_time_1 = date('Y-m-d H:i:s',strtotime("$date_1 $time_1"));
                            $all_time_2 = date('Y-m-d H:i:s',strtotime("$date_2 $time_2"));*/

                    /* echo  "<br>";
                            echo "time_1:".$time_1;
                            echo  "<br>";
                            echo "time_2:".$time_2;
                            echo  "<br>";
                            echo "selec1: ".$sel1;
                            echo  "<br>";
                            echo "selec1: ".$sel2;
                            echo  "<br>";
                            echo "selec1: ".$sel4;
                            echo  "<br>";*/

                    $sizearx = [];


                    $stmt1 = commandsQL2($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo);
                    $stmt2 = contadorTotal2($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo);



                    $precoAll = [];

                    $count = 0;
                    /*echo "resul2t: ".json_encode($stmt1);
                            ECHO "<br>";
                            ECHO "<br>";
                            echo "resul123t: ".json_encode($stmt2);
                            echo "<br>";
                            echo "tamanho: ".count($stmt2); */
                    $verficacao = count($stmt2, 1);
                    if (count($stmt2) <  2 and $verficacao != 7) {
                        $desativar = 1;
                        $tamanho = count($stmt1) + 1;
                    } else {
                        $tamanho = count($stmt1);
                    }

                    if (count($stmt2) <= $tamanho and $verficacao != 7) {

                        $count = 0;
                        foreach ($stmt2  as $contact) {
                            if ($verficacao == 7) {
                                $totalbbvazio = 0;
                            } else if ($verficacao == 14) {
                                $totalbbvazio = 0;
                            } else {
                                $totalbbvazio = $contact['total'];
                            }

                            $ItemsProduced .= $totalbbvazio * ($stmt3['PRECO']) . ',';
                            $countFunci[] .= $totalbbvazio;
                            $date = $contact['SETOR'];
                            $date .= ":";
                            $date .= $stmt3['REFEICAO'];
                            $RecordDate .= '"' . $date . '",';

                            $valorTotal = $totalbbvazio * $stmt3['PRECO'];
                            $TotalAd = 'R$' . str_replace('.', ',', number_format($valorTotal, 2));
                            $EMP1 = $contact['EMP'];
                            $SETOR1 = $contact['SETOR'];
                            $DEP1 = $contact['DEP'];
                            $C1 = $totalbbvazio;
                            $REFEICAO1 = $stmt3["REFEICAO"];
                            $PRECO1 =  'R$' . str_replace(".", ",", $stmt3['PRECO']);


                            $out1 .= "<tr>
                                            
                                            <td>$EMP1</td>
                                            <td>$SETOR1</td>
                                            <td>$DEP1</td>
                                            <td>$C1</td>
                                            <td>$REFEICAO1</td>
                                            <td>$PRECO1</td>
                                            <td>$TotalAd</td>
                                            
                                            </tr>";


                            $count++;
                        }

                        $finished2 = 1;
                        //echo "Quant".$countFunci;

                    } else {


                        $count = 0;

                        foreach ($stmt2 as $contact) {

                            $ItemsProduced .= (0) * ($stmt3['PRECO']) . ',';
                            $countFunci[] .= 0;
                            $countFunci[] .= 0;
                            $date = $contact['SETOR'];
                            $date .= ":";
                            $date .= $stmt3['REFEICAO'];
                            $RecordDate .= '"' . $date . '",';




                            $valorTotal = 0 * $stmt3['PRECO'];
                            $TotalAd = 'R$' . str_replace('.', ',', number_format($valorTotal, 2));
                            $EMP1 = $contact['EMP'];
                            $SETOR1 = $contact['SETOR'];
                            $DEP1 = $contact['DEP'];
                            $C1 = 0;
                            $REFEICAO1 = $stmt3["REFEICAO"];
                            $PRECO1 =  'R$' . str_replace(".", ",", $stmt3['PRECO']);


                            $out1 .= "  <tr>
                                            
                                            <td>$EMP1</td>
                                            <td>$SETOR1</td>
                                            <td>$DEP1</td>
                                            <td>$C1</td>
                                            <td>$REFEICAO1</td>
                                
                                            <td>$PRECO1</td>
                                            <td>$TotalAd</td>
                                            
                                            </tr>";


                            $count++;
                        }
                    }




                    $finished2 = 1;
                    /* echo "<br>";*/
                    // echo "Quant".$countFunci; 
                }
                echo ' 
                    
                <table class="table table-sm table-hover" id="tbCentrodeCusto" style="width:100%">
                <caption>Lista de Centro de Custo</caption>
                <thead class="thead-dark">
                           
                                        <tr>
                                            <td>EMPRESA</td>
                                            <td>SETOR</td>
                                            <td>DEPARTAMENTO</td>
                                            <td>QUANTIDADE DE FUNCIONÁRIOS</td>
                                            <td>TURNO</td>
                                            <td>VALOR</td>
                                            <td>TOTAL</td>
                                    
                                        </tr>
                                    </thead>
                                    <tbody>' . $out1;
            } else {
                $out1 = '';
                $finished = 1;
                $countFunci = [];
                $query = $pdo->query("SELECT * FROM TB_HORARIOS WHERE ID = '$resultPreco'");
                while ($stmt3  = $query->fetch()) {
                    $preco =  $stmt3['PRECO'];
                }

                $query = $pdo->query("SELECT * FROM TB_HORARIOS WHERE ID = '$resultPreco'");


                while ($stmt3  = $query->fetch()) {
                    $time_1 =  $stmt3['INICIO'];
                    $time_2 =  $stmt3['FIM'];
                    $tipocomida = $stmt3['REFEICAO'];
                }

                /* echo  "<br>";
                                 echo "time_1:".$time_1;
                                 echo  "<br>";
                                 echo "time_2:".$time_2;
                                 echo  "<br>";
                                 echo "selec1: ".$sel1;
                                 echo  "<br>";
                                 echo "selec1: ".$sel2;
                                 echo  "<br>";
                                 echo "selec1: ".$sel4;
                                 echo  "<br>";*/


                $stmt1 = commandsQL($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo);
                $stmt2 = contadorTotal($sel1, $sel2, $sel4, $date_1, $date_2, $time_1, $time_2, $pdo);
                /* echo "resul123t: ".json_encode($stmt2);
                                 echo "<br>";
                                 echo "tamanho: ".count($stmt2); */

                echo '
                            
                     
                <table class="table table-sm table-hover" id="tbCentrodeCusto" style="width:100%">
                <caption>Lista de Centro de Custo</caption>
                <thead class="thead-dark">
                                                 <tr>
                                                     <td>EMPRESA</td>
                                                     <td>SETOR</td>
                                                     <td>DEPARTAMENTO</td>
                                                     <td>QUANTIDADE DE FUNCIONÁRIOS</td>
                                                     <td>TURNO</td>
                                                     <td>VALOR</td>
                                                     <td>TOTAL</td>
                                             
                                                 </tr>
                                             </thead>
                                             <tbody>';
                $count = 0;

                foreach ($stmt2 as $contact) {
                    $ItemsProduced .= ($contact['total']) * ($preco) . ',';
                    $countFunci[] .= 0;
                    $countFunci[] .= 0;
                    $date = $contact['SETOR'];
                    $date .= ":";
                    $date .= $tipocomida;
                    $RecordDate .= '"' . $date . '",';




                    $valorTotal = ($contact['total']) * $preco;
                    $TotalAd = 'R$' . str_replace('.', ',', number_format($valorTotal, 2));
                    $EMP1 = $contact['EMP'];
                    $SETOR1 = $contact['SETOR'];
                    $DEP1 = $contact['DEP'];
                    $C1 = $contact['total'];
                    $REFEICAO1 = $tipocomida;
                    $PRECO1 =  'R$' . str_replace(".", ",", $preco);


                    $out1 .= "  <tr>
                                             
                                             <td>$EMP1</td>
                                             <td>$SETOR1</td>
                                             <td>$DEP1</td>
                                             <td>$C1</td>
                                             <td>$REFEICAO1</td>
                                 
                                             <td>$PRECO1</td>
                                             <td>$TotalAd</td>
                                             
                                             </tr>";


                    $count++;
                }

                echo $out1;
            }
        }







        $finished = 1;
    } else {

        echo "<script language='javascript' type='text/javascript'>
                alert('Não foi possível Filtrar, selecione item correto!!!');
                $('#corpo').load('home/main/inputToGrafic.php');</script>";
    }
} else {

    $select = '';
    //static $preco = 10;
    $flag = false;
    $finished = 0;
}

//echo $finished;
//<script type = "text/javascript" src = "table_v1.js"> </script>
?>





<!-- This is the field of include scripts  -->
<html>

<head>
    <meta charset="utf-8">
    <title>$title</title>



</head>

<body class="sb-nav-fixed">
    <!-- This is the space line -->
    <br />
    <!-- This is the field selection -->


    <div class="update ">


        <center>
            <h2>TABELA E GRÁFICO</h2>
            <?php $query = $pdo->query('SELECT DISTINCT * FROM TB_ALIMENTO '); ?>


        </center>





        <!-- Centro de custo -->

        <?php  //$query = $pdo -> query('SELECT * FROM clientes'); 



        if ($finished == 1) {
            /*echo "testefinished";*/
            /* echo "<br>";*/
            $flag = true;


            if ($resultPreco == "AllREF") {
            } else { ?>
                <?php /*echo'<div class="content read">
                       <table id = "myTable">
                           <thead>
                                   <tr>
                                       <td>EMPRESA</td>
                                       <td>SETOR</td>
                                       <td>DEPARTAMENTO</td>
                                       <td>QUANTIDADE DE FUNCIONÁRIOS</td>
                                       <td>TURNO</td>
                                       <td>VALOR</td>
                                       <td>TOTAL</td>
                                  
                                   </tr>
                               </thead>
                               <tbody>';
             
                
                   if($contact != null){
                  $valorTotal = $stmt2[4]*$preco;
                  $TotalAd = number_format($valorTotal,2);
                */ ?>

                <!--<tr>
            
              <td><?= $contact['EMP'] ?></td>
              <td><?= $contact['SETOR'] ?></td>
              <td><?= $contact['DEP'] ?></td>
              <td><?= $contact["total"] ?></td>
              <td><?= $tipocomida ?></td>
              <td><?= "R$" . str_replace('.', ',', $preco) ?></td>
              <td><?= "R$" . str_replace('.', ',', $TotalAd); ?></td>
             
              </tr>-->
                <?php// $TotalAd = number_format($valorTotal,2);?>
        <?php }
        } ?>





        <?php if ($finished == 1) { ?>





            <div class="row">
                <div class="col-12">
                    <div class="col mb-4">
                        <div class="col-header">
                            <i class="fas fa-chart-area mr-1"></i>
                            CENTRO DE CUSTOS
                        </div>
                        <div class="card-body"><canvas id="myAreaChart" height='50' width='100'></canvas></div>
                    </div>
                </div>
            </div>

        <?php } ?>

        <!--<script 
                     src="Chart.min.js" crossorigin="anonymous">
            </script>-->
        <script>
            function opcGrafic($valor) {
                switch ($valor) {
                    case "line":
                        $total = $valor;
                        break;
                    case "pie":
                        $total = $valor;
                        break;
                    case "horizontalBar":
                        $total = $valor;
                        break;
                    case "bar":
                        $total = $valor;
                        break;
                    case "doughnut":
                        $total = $valor;
                        break;
                    case "polarArea":
                        $total = $valor;
                        break;
                    case "radar":
                        $total = $valor;
                        break;
                }
                return $total;

            }
        </script>

        <?php
        $ItemsProduced = rtrim($ItemsProduced, ",");
        $ItemsPastDue = rtrim($ItemsPastDue, ",");
        $RecordDate = rtrim($RecordDate, ",");

        //editar o case com as opções de chart
        if (array_key_exists('type_graphic', $_POST)) {
            $valor = $_POST["Chart"];
            //echo "select".$valor;

            $chartType = "line";
            // echo "select".$chartType;

        } else {
            $chartType = 'bar';
        }

        include('charts.php'); ?>
</body>

<!--<script src="./public/BootsTrap-4.5.3/JS/bootstrap.js"></script>-->
<script src=views/principal/Chart.min.js crossorigin="anonymous"></script>
<script type="text/javascript" charset="utf8" src="./views/principal/centrodeCusto.js"></script>



</html>