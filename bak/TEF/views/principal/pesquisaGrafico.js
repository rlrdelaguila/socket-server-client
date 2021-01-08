
 var bkButtons = true;
 $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {

     var verificacao_Acesso = JSON.parse(verificacao_Acesso)
    
     const formSolicitacaoGraphic = document.getElementById('SolicitacaoGrafico');
     formSolicitacaoGraphic.hidden = !(verificacao_Acesso);
     bkButtons = verificacao_Acesso;
     
     /*  const sb = document.querySelector('#selectEmpresas');
       sb.remove(0);
       const json = JSON.parse(dados_empresas);*/
     /* json.data.forEach(function (empresa) {
          let newOption = new Option(empresa[1], empresa[0]);
          sb.add(newOption, undefined);
      });*/
 });


 
function backGrafic(){
    $('#mbSpanGrafic').modal('hide');
    $('.modal-backdrop').remove();

  }

//consultar informacoes com tabelas e graficos
$("#btnPesquisa").click(function () {
     var op = '1';
     var data1 = $('#selDate_1').val();
     var data2 = $('#selDate_2').val();
     var dataAtual = new Date();

     //inserir dados novamente no selects boxs
    var Insertsel1 = $('#sel1').val();
    var Insertsel2= $('#sel2').val();
    var Insertsel3= $('#sel3').val();
    var InsertselDate_1= $('#selDate_1').val();
    var InsertselDate_2= $('#selDate_2').val();
    var InsertselTurno= $('#selTurno').val();

     //********************************funcao soma *****************************************************
     function sum(input){
             
        if (toString.call(input) !== "[object Array]")
           return false;
             
                   var total =  0;
                   for(var i=0;i<input.length;i++)
                     {                  
                       if(isNaN(input[i])){
                       continue;
                        }
                         total += Number(input[i]);
                      }
                    return total;
                   }
                   
    // console.log(sum([-month2,1,month1]))// atual
   
     if(data2 != '' ){
    // separacao do dia/mes/ano da data1
     var dataSplit = data1.split('-');
     var year1 = dataSplit[0]; // 2019
     var month1 = dataSplit[1]; // 03
     var day1 = dataSplit[2]; // 30

     // separacao do dia/mes/ano da data2
  
     dataSplit = data2.split('-');
     var year2 = dataSplit[0]; // 2019
     var month2 = dataSplit[1]; // 03
     var day2 = dataSplit[2]; // 30

     // separacao do dia/mes/ano da dataAtual
    
     var year3 = dataAtual.getFullYear(); // 2019
     var month3 = dataAtual.getMonth(); // 03
     var day3 = dataAtual.getDate(); // 30

     //alert(day1)//inicio
     //alert(day2)//final
     //alert(day3)// atual
     //var FlagDataIgual = false; 
    if (day1 ==day2 && month1 == month2 && year1==year2 ) {

        //alert('Datas iguais - inválida')
        //FlagDataIgual = true;
       // return false;
       //***********************************ano *******************************************************

    

       if(year3-year1>= 0){
        var flag8 =true

    }
    else{

        //alert('Ano Final está maior que Ano hoje')
        document.getElementById("labelSpanGrafic").innerHTML = 'Ano Final está maior que Ano hoje';
        //$('.modal-backdrop').remove();
        $('#mbSpanGrafic').modal('show');


    }

    //*****************************mes com mesmo ano **************************************************

    if(month3-month1 + 1>= 0){
        var flag5 =true
        
    }
    else{
        //alert('Mes Final está maior que Mes hoje')
        document.getElementById("labelSpanGrafic").innerHTML = 'Mes Final está maior que Mes hoje';
       // $('.modal-backdrop').remove();
        $('#mbSpanGrafic').modal('show');
    }
    


    //mes e ano dia 
 
    if(flag5 && flag8){ 
    //*********************************dia com mesmo mes***************************************************
 
    //var flag_validacao=false
      if(day3-day1 >= 0 && month1<= month3){
         var flag2 =true
        
         //flag_validacao=true
      }
      else{
      
          if(flag5 && flag8 && month1<= month3+1 && day3>=day1)  
              var flag2 =true
          else{
          
              if(flag5 && flag8 && month1< month3+1 && day3 < day1) var flag2 =true
              else {//{alert('Dia Inicial está maior que Dia hoje')
              //alert('oi')
              document.getElementById("labelSpanGrafic").innerHTML = 'Dia Inicial está maior que Dia hoje';
             // $('.modal-backdrop').remove();
              $('#mbSpanGrafic').modal('show');
          }
          }
      }

 
   
     }

     if ($('#sel1').val() == "Empresas...") {
       //alert("Empresa é requerido");
        document.getElementById("labelSpanGrafic").innerHTML = 'Empresa é requerido';
       // $('.modal-backdrop').remove();
        $('#mbSpanGrafic').modal('show');
        //$("#corpo").load("home/main/inputToGrafic.php");
    } else if ($('#sel2').val() == 'SETORES...') {
        //alert("Setores é requerido");
        document.getElementById("labelSpanGrafic").innerHTML = 'Setores é requerido';
        $('.modal-backdrop').remove();
        $('#mbSpanGrafic').modal('show');
        //$("#corpo").load("home/main/inputToGrafic.php");
    }  else if ($('#sel3').val() == 'DEP...') {
        //alert("Departamento é requerido");
        document.getElementById("labelSpanGrafic").innerHTML = 'Departamento é requerid';
        $('.modal-backdrop').remove();
        $('#mbSpanGrafic').modal('show');
        //$("#corpo").load("home/main/inputToGrafic.php");
    } else if ($('#selTurno').val() == 'REFEIÇÃO...') {
        //alert("Turno é requerido");
        document.getElementById("labelSpanGrafic").innerHTML = 'Turno é requerido';
        $('.modal-backdrop').remove();
        $('#mbSpanGrafic').modal('show');
        //$("#corpo").load("home/main/inputToGrafic.php");
    } else if ($('#selDate_1').val() == '') {
        //alert("Data inicial é requerido");
        document.getElementById("labelSpanGrafic").innerHTML = 'Data inicial é requerido';
        $('.modal-backdrop').remove();
        $('#mbSpanGrafic').modal('show');
        //$("#corpo").load("home/main/inputToGrafic.php");
    } /*else if ($('#selDate_2').val() == '') {
        alert("ADMISSÃO é requerido");
    } */ else if(flag5 && flag8&&flag2){
        $("#pagedata").load('views/principal/table_v1.php',
        {'sel1': $('#sel1').val(), 
        'sel2': $('#sel2').val(),
        'sel3': $('#sel3').val(),
        'selDate_1': $('#selDate_1').val(),
        'selDate_2': '',
        'selTurno': $('#selTurno').val(),
        'action': op,
        'url':'<?=$url?>'}
        );
       // $("#corpo").load("home/main/inputToGrafico.php&op=<?='$op'>")
      /*

       

        $.ajax({
            url: "views/table_v1.php",
            method: "POST",
            data: $('#SolicitacaoGrafico').serialize(),
            success: function (data) {
                alert('oi')
                //$('#insert_form')[0].reset();  
                // $('#add_data_Modal').modal('hide');  
                //$('#employee_table').html(data);  
           
               // $("#corpo").load("home/main/inputToGrafic.php");
            }
        });*/
    }





    }
    else{
    

 
   
    /*else{
        if(day2-day1 >= 0){
            var flag3 = true
         }
         else{
             alert('DataInicial está maior que data final')
         }

        }*/

        
//***********************************ano *******************************************************

        if(year3-year2 >= 0){
            var flag7 =true
        }
        else{
            //alert('Ano Final está maior que Ano hoje')
            document.getElementById("labelSpanGrafic").innerHTML = 'Ano Final está maior que Ano hoje';
           // $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
        }

        if(year3-year1>= 0){
            var flag8 =true
        }
        else{
           // alert('oi')
            //alert('Ano Final está maior que Ano hoje')
            document.getElementById("labelSpanGrafic").innerHTML = 'Ano Inicial está maior que Ano hoje';
           // $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
        }

        if(flag7 & flag8 == true){

            if(year2-year1 >= 0){
                var flag9 = true
            }
            else{
                //alert('Ano Inicial está maior que Ano final')
                document.getElementById("labelSpanGrafic").innerHTML = 'Ano Inicial está maior que Ano final';
               // $('.modal-backdrop').remove();
                $('#mbSpanGrafic').modal('show');
            }

        }

//*****************************mes com mesmo ano **************************************************

         if(month3-month2 + 1>= 0){
            var flag4 =true
        }
        else{
           // alert('Mes Final está maior que Mes hoje')
            document.getElementById("labelSpanGrafic").innerHTML = 'Mes Final está maior que Mes hoje';
            //$('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
        }

        if(month3-month1 + 1>= 0){
            var flag5 =true
        }
        else{
           // alert('Mes Final está maior que Mes hoje')
            document.getElementById("labelSpanGrafic").innerHTML = 'Mes Final está maior que Mes hoje';
            //$('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
        }

        if(month2-month1+1 > 0){
            var flag10 =true
        }
        else{
           // alert('Mes Final está maior que Mes Inicial')
            document.getElementById("labelSpanGrafic").innerHTML = 'Mes Final está maior que Mes Inicial';
          //  $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
        }

        if(flag4 & flag5 == true){

            if(month2-month1+1 >= 0){
                var flag6 = true
            }
            else{
                //alert('Mes Inicial está maior que Mes final')
                document.getElementById("labelSpanGrafic").innerHTML = 'Mes Inicial está maior que Mes final';
               // $('.modal-backdrop').remove();
                $('#mbSpanGrafic').modal('show');
            }

        }

        //mes e ano dia 
        var flag3 = false;
        if(flag6 && flag10&&flag9){ 
        // var flag_validacao1 =false
         //var flag_validacao2 =false
        //*********************************dia com mesmo mes***************************************************
    
          if(day3-day2 >= 0 && month2<= month3){
             var flag1 =true
             //flag_validacao2 = true
     
             
          }
          else{
           // alert('oi')
            if(flag6 && flag9 && flag10 && month2<= month3 +1 &&  day3>=day2)   flag3 =true
            else{
                if(flag6 && flag9 && flag10 &&  month2< month3+1 && day3 < day2) flag3 =true
                else {var flag15 =false;
                    //alert('Dia Final está maior que Dia hoje')
                    document.getElementById("labelSpanGrafic").innerHTML = 'Dia Final está maior que Dia hoje';
                   // $('.modal-backdrop').remove();
                    $('#mbSpanGrafic').modal('show');
                    return false
                }
            }
          }
        
          if(day3-day1 >= 0 && month1<= month3 ){
             var flag2 =true
            // flag_validacao1 = true
          }
          else{
          
        
            if(flag6 && flag9 && flag10 && month1 <= month3 +1 && day3>=day1)  flag3 =true
            else{
          
                if(flag6 && flag9 && flag10 &&  month1< month3+1 && day3 < day1) flag3 =true
                else{ 
                    //alert('Dia Inicial está maior que Dia hoje')
                    document.getElementById("labelSpanGrafic").innerHTML = 'Dia Inicial está maior que Dia hoje';
                   // $('.modal-backdrop').remove();
                    $('#mbSpanGrafic').modal('show');
                    return false
                }
            }
          }
     
          if(flag1 & flag2 == true && day2-day1 >= 0 && (day3<day2 || day3<day1)){
     
             if(day2-day1 >= 0 ){
                 flag3 = true
              }
              else{
                  //alert('Dia Inicial está maior/igual que Dia final')
                  document.getElementById("labelSpanGrafic").innerHTML = 'Dia Inicial está maior/igual que Dia final';
                  //  $('.modal-backdrop').remove();
                    $('#mbSpanGrafic').modal('show');
                  return false
              }
     
          }
          else{
                
            if ((day2 - day1 <= 0 || day2 - day1 >= 0) && (month1 != month2 || month1 == month2 && (day2 - day1 >= 0))) {
                flag3 = true
              //  alert('oi')
            } else {
               // alert('Dia Inicial está maior/igual que Dia final')
                document.getElementById("labelSpanGrafic").innerHTML = 'Dia Inicial está maior/igual que Dia final';
               // $('.modal-backdrop').remove();
                $('#mbSpanGrafic').modal('show');
                return false
            }

          }
         }

         if ($('#sel1').val() == "Empresas...") {
           // alert("Empresa é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Empresa é requerido';
            if ($('#mbSpanGrafic').is(':visible')) {
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            }
            else{
                $('#mbSpanGrafic').modal('show');
            }
            //$("#corpo").load("home/main/inputToGrafic.php");
        } else if ($('#sel2').val() == 'SETORES...') {
            //alert("Setores é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Setores é requerido';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        }  else if ($('#sel3').val() == 'DEP...') {
            //alert("Departamento é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Departamento é requerido';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        } else if ($('#selTurno').val() == 'REFEIÇÃO...') {
            //alert("Turno é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Turno é requerido';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        } else if ($('#selDate_1').val() == '') {
           // alert("Data inicial é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Data inicial é requerido';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        } /*else if ($('#selDate_2').val() == '') {
            alert("ADMISSÃO é requerido");
        } */ else if(flag6 && flag10&&flag9&&flag3){
            $("#pagedata").load('views/principal/table_v1.php',
            {'sel1': $('#sel1').val(), 
            'sel2': $('#sel2').val(),
            'sel3': $('#sel3').val(),
            'selDate_1': $('#selDate_1').val(),
            'selDate_2': $('#selDate_2').val(),
            'selTurno': $('#selTurno').val(),
            'action': op,
            'url':'<?=$url?>'}
            );
           // $("#corpo").load("home/main/inputToGrafico.php&op=<?='$op'>")
          /*
    
           
    
            $.ajax({
                url: "views/table_v1.php",
                method: "POST",
                data: $('#SolicitacaoGrafico').serialize(),
                success: function (data) {
                    alert('oi')
                    //$('#insert_form')[0].reset();  
                    // $('#add_data_Modal').modal('hide');  
                    //$('#employee_table').html(data);  
               
                   // $("#corpo").load("home/main/inputToGrafic.php");
                }
            });*/
        }



    }



     }
     else{//Somente uma Data

        var dataSplit = data1.split('-');
        var year1 = dataSplit[0]; // 2019
        var month1 = dataSplit[1]; // 03
        var day1 = dataSplit[2]; // 30

        // separacao do dia/mes/ano da dataAtual
       
        var year3 = dataAtual.getFullYear(); // 2019
        var month3 = dataAtual.getMonth(); // 03
        var day3 = dataAtual.getDate(); // 30

 
   
        //***********************************ano *******************************************************

    

        if(year3-year1>= 0){
            var flag8 =true
        }
        else{

            //alert('Ano Final está maior que Ano hoje')
            document.getElementById("labelSpanGrafic").innerHTML = 'Ano Final está maior que Ano hoje';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');


        }

        //*****************************mes com mesmo ano **************************************************

        if(month3-month1 + 1>= 0){
            var flag5 =true
        }
        else{
           // alert('Mes Final está maior que Mes hoje')
            document.getElementById("labelSpanGrafic").innerHTML = 'Mes Final está maior que Mes hoje';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
        }
        


        //mes e ano dia 
     
        if(flag5 && flag8){ 
        //*********************************dia com mesmo mes***************************************************
         
        //var flag_validacao=false
          if(day3-day1 >= 0 && month1<= month3){
             var flag2 =true
             //flag_validacao=true
          }
          else{
           
              if(flag5 && flag8 && month1<= month3+1 && day3>=day1)  
                  var flag2 =true
              else{
                  if(flag5 && flag8 && month1< month3+1 && day3 < day1) var flag2 =true
                  else {
                  document.getElementById("labelSpanGrafic").innerHTML = 'Dia Inicial está maior que Dia hoje';
                  $('.modal-backdrop').remove();
                  $('#mbSpanGrafic').modal('show');
                  }
              }
          }

     
       
         }

         if ($('#sel1').val() == "Empresas...") {
            //alert("Empresa é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Empresa é requerido';
            //$('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        } else if ($('#sel2').val() == 'SETORES...') {
            //alert("Setores é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Setores é requerido';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        }  else if ($('#sel3').val() == 'DEP...') {
            //alert("Departamento é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Departamento é requerido';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        } else if ($('#selTurno').val() == 'REFEIÇÃO...') {
           // alert("Turno é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Turno é requerido';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        } else if ($('#selDate_1').val() == '') {
           // alert("Data inicial é requerido");
            document.getElementById("labelSpanGrafic").innerHTML = 'Data inicial é requerido';
            $('.modal-backdrop').remove();
            $('#mbSpanGrafic').modal('show');
            //$("#corpo").load("home/main/inputToGrafic.php");
        } /*else if ($('#selDate_2').val() == '') {
            alert("ADMISSÃO é requerido");
        } */ else if(flag5 && flag8&&flag2){
            $("#pagedata").load('views/principal/table_v1.php',
            {'sel1': $('#sel1').val(), 
            'sel2': $('#sel2').val(),
            'sel3': $('#sel3').val(),
            'selDate_1': $('#selDate_1').val(),
            'selDate_2': $('#selDate_2').val(),
            'selTurno': $('#selTurno').val(),
            'action': op,
            'url':'<?=$url?>'}
            );
           // $("#corpo").load("home/main/inputToGrafico.php&op=<?='$op'>")
          /*
    
           
    
            $.ajax({
                url: "views/table_v1.php",
                method: "POST",
                data: $('#SolicitacaoGrafico').serialize(),
                success: function (data) {
                    alert('oi')
                    //$('#insert_form')[0].reset();  
                    // $('#add_data_Modal').modal('hide');  
                    //$('#employee_table').html(data);  
               
                   // $("#corpo").load("home/main/inputToGrafic.php");
                }
            });*/
        }








     }


    /* if(flag3) alert('Autorizado dia')

     if(flag6 & flag10) alert('Autorizado mes')

     if(flag9){ alert('Autorizado ano')
   //*********************************dia com mesmo mes***************************************************
     if(day3-day2 >= 0){
        var flag1 =true
     }
     else{
         alert('Dia Final está maior que Dia hoje')
     }

     if(day3-day1 >= 0){
        var flag2 =true
     }
     else{
         alert('Dia Inicial está maior que Dia hoje')
     }

     if(flag1 & flag2 == true){

        if(day2-day1 >= 0){
            var flag3 = true
         }
         else{
             alert('Dia Inicial está maior que Dia final')
         }

     }
    }*/
    
});
