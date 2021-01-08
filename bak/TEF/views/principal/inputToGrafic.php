<?php
//filter.php  
include '../../controller/db_con_graphics.php';
$pdo = pdo_connect_db();

include 'COMMAND.php';
/*if(!isset($_COOKIE['login'])){
    if(empty($_SESSION["userId"])) {
            //header("Location:../menu/menu.html");
            return false;    
    }
}
else{
    session_start();
    if(!empty($_SESSION["userId"])) {
       
        
}
else   return false;     //header("Location:../../index.html");  

}*/
//$pdo = pdo_connect_mysql(2);
?>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
   
</head>

<body>

    <form id='SolicitacaoGrafico' method="POST" hidden>
        <div class="border border-primary p-2">
            <div class="row">
                <div class="col-2 col-form-label"><label>Empresa:</label></div>
                <div class="col-4">
                    <select class="form-control" id="sel1" name="sel1">
                        <?php $query = $pdo->query('SELECT ID,NOME FROM TB_EMPRESAS'); ?>
                        <option>Empresas...</option>
                        <?php while ($stmt3  = $query->fetch()) { ?>
                            <option value=<?php echo $stmt3['ID']; ?>> <?php echo $stmt3['NOME']; ?></option>
                        <?php } ?>
                    </select>
                </div>

                <div class="col-2 col-form-label"><label>Setor:</label></div>
                <div class="col-4">
                    <select class="form-control" id="sel2" name="sel2">
                        <?php $query2 = $pdo->query("SELECT DISTINCT TB_SETORES.ID,TB_SETORES.NOME FROM TB_SETORES"); ?>
                        <option value="AllSETORES">Todos</option>
                        <?php while ($stmt4  = $query2->fetch()) { ?>
                            <option value=<?php echo $stmt4['ID'] ?>> <?php echo $stmt4['NOME'] ?> </option>
                        <?php } ?>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-2 col-form-label"><label>Departamento:</label></div>
                <div class="col-4">
                    <select class="form-control" id="sel3" name="sel3">
                        <?php $query2 = $pdo->query("SELECT * FROM TB_DEPARTAMENTO"); ?>
                        <option value="AllDEP">Todos</option>
                        <?php while ($stmt4  = $query2->fetch()) { ?>
                            <option value=<?php echo $stmt4['ID'] ?>> <?php echo $stmt4['NOME'] ?> </option>
                        <?php } ?>
                    </select>
                </div>

                <div class="col-2 col-form-label"><label>Refeição:</label></div>
                <div class="col-4">
                    <?php $query = $pdo->query('SELECT ID,REFEICAO FROM TB_HORARIOS'); ?>
                    <select class="form-control" id="selTurno" name="selTurno">
                        <option value="AllREF">Todos</option>
                        <?php while ($stmt3  = $query->fetch()) { ?>
                            <option value=<?php echo $stmt3['ID']; ?>> <?php echo $stmt3['REFEICAO']; ?></option>
                        <?php } ?>

                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-2 col-form-label"><label for="datepicker_1">Início:</label></div>
                <div class="col-4">
                    <input class="form-control" type="date" name="selDate_1" id="selDate_1" value="<?= date("Y-m-d"); ?>"> </input>
                </div>

                <div class="col-2 col-form-label"><label for="datepicker_2">Final:</label></div>
                <div class="col-4">
                    <input class="form-control" type="date" name="selDate_2" id="selDate_2" value="">
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-form-label">
                    <input class="btn btn-outline-primary btn-lg btn-block" type="button" value="Pesquisar" name="btnPesquisa" id="btnPesquisa" />
                </div>
            </div>
        </div>
    </form>

    
    <div class="modal hide fade" id="mbSpanGrafic" tabindex="-1" data-backdrop="static"
        aria-labelledby="exampleModalCenterTitle" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            
                <div class="modal-body">

                    <span  id = 'labelSpanGrafic'></span> 
    
                </div>
                <div class="modal-footer">
                    <button id='funcSpan'
                    class="btn btn-outline-success" onclick="backGrafic('auto-close')">Ok
                </button>
                </div>  
            </div>
        </div>
    </div>
</body>


</script>

<!--<script src="../../public/JS/jquery-1.11.3.min.js"></script>-->
<!--<script type="text/javascript" charset="utf8" src="public/JS/table.js"></script>-->
<script type="text/javascript" charset="utf8" src="views/principal/pesquisaGrafico.js"></script>

</html>