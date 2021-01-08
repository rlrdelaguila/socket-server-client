function showSwal(){
  $('#mbLogin2').modal('hide');
  $('.modal-backdrop').remove();
  $('#mbLogin').modal('show');
}

$( '#mbLogin' ).on( 'keypress', function( e ) {
  if( e.keyCode === 13 ) {
      e.preventDefault();
      var button = document.getElementById('btAcessoLogin');
      button.click();
  }
} );
$('#btAcessoLogin').click(function () {

  //alert('analisando')


  $("#pagedata").load('views/login/login_verificando.php', {
      'login': $('#login').val(),
      'entrar': true,
      'senha': $('#senha').val(),
      'url': '<?=$url?>'
    },
    function (response, status, xhr) {
       //alert('resposta: ' + status)
   
      if (status == 'success') {


    
        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
  
          var verificacao_Acesso = JSON.parse(verificacao_Acesso)
          if (verificacao_Acesso) {
            $('#menu').load('views/menu/menu.html');
            $('#mbLogin').modal('hide');
            $('.modal-backdrop').remove();
           
           
            /*document.getElementById("btnLoginLabel").innerHTML = 'Sair';
            document.getElementById("btnLogin").className = "btn btn-outline-danger";

            sb = document.querySelector('#login');
            if(sb != null)sb.value = '';

            sb = document.querySelector('#senha');
            if(sb != null)sb.value = '';
       */
            /* $('#mbLogin').modal({
               hidden: false });*/
            /*var e = document.getElementById("btnLogin");
            e.id = "btnLogout";*/

          } else {
     
             
   
            $('.modal-backdrop').remove();
            $('#mbLogin2').modal('show');
            //$('#pagedata').load('./views/login/login.html');
            
             // $('.modal-backdrop').modal('show');

            
            
            
            /*document.getElementById("btnLoginLabel").innerHTML = 'Entrar';
            document.getElementById("btnLogin").className = "btn btn-outline-success";
            */
            sb = document.querySelector('#login');
            if(sb != null)sb.value = '';

            sb = document.querySelector('#senha');
            if(sb != null)sb.value = '';
            /*var e = document.getElementById("btnLogin");
            e.id = "btnLogout";*/
          }
        });
      }
    }

  );
 
  //document.getElementById("login").innerHTML ='';
  //document.getElementById("senha").innerHTML ='';
  //var bkButtons = true;
});


$('#btnLogin').click(function () {
  // document.getElementById("login").innerHTML ='';
  //document.getElementById("senha").innerHTML ='';

  if (document.getElementById("btnLoginLabel").innerHTML == 'Sair') {

    /*$('#mbLogin').modal({
      backdrop: false,
      keyboard: false,
      show: false });*/

    $("#pagedata").load('views/login/logout.php', {
      'logout': true,
      'url': '<?=$url?>'
    });
    //var bkButtons = true;

    $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {

      var verificacao_Acesso = JSON.parse(verificacao_Acesso)
      if (verificacao_Acesso) {
        document.getElementById("btnLoginLabel").innerHTML = 'Sair';
        document.getElementById("btnLogin").className = "btn btn-outline-danger";
        //document.getElementById("btnLoginLabel").className = "label label-danger";
        /*  var e = document.getElementById("btnLoginLabel");
          e.id = "btnLogout";*/
      } else {
        $('#menu').load('./views/login/login.html');
        //alert('Usuário se desconectou!!')
        document.getElementById("btnLoginLabel").innerHTML = 'Entrar';
        document.getElementById("btnLogin").className = "btn btn-outline-success";
        //document.getElementById("login").innerText = '';
        //document.getElementById("senha").innerText = '';

        //  document.getElementById("btnLoginLabel").className = "label label-success";
        /*  var e = document.getElementById("btnLogout");
          e.id = "btnLogin";*/
      }

    });

    if (document.getElementById("btnLoginLabel").innerHTML == 'Sair') {

      //var bkButtons = true;

      $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
        var verificacao_Acesso = JSON.parse(verificacao_Acesso)
        if (verificacao_Acesso) {
          document.getElementById("btnLoginLabel").innerHTML = 'Sair';
          document.getElementById("btnLogin").className = "btn btn-outline-danger";
          // document.getElementById("login").innerText = '';
          // document.getElementById("senha").innerText = '';
          // document.getElementById("btnLoginLabel").className = "label label-danger";

        } else {
          $('#menu').load('./views/login/login.html');
          document.getElementById("btnLoginLabel").innerHTML = 'Entrar';
          document.getElementById("btnLogin").className = "btn btn-outline-success";
          // document.getElementById("login").innerText = '';
          //document.getElementById("senha").innerText = '';
          // document.getElementById("btnLoginLabel").className = "label label-success";
        }

      });
    }

  } else {
    $('#mbLogin').modal('show');
  }

});


$.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
  
  var verificacao_Acesso = JSON.parse(verificacao_Acesso);
  
  if (verificacao_Acesso) {
    document.getElementById("btnLoginLabel").innerHTML = 'Sair';
    document.getElementById("btnLogin").className = "btn btn-outline-danger";
    //  document.getElementById("btnLoginLabel").className = "label label-danger";
  } else {
    $('#mbLogin').modal('show');


   /* document.getElementById("btnLoginLabel").innerHTML = 'Entrar';
    document.getElementById("btnLogin").className = "btn btn-outline-success";*/


    //  document.getElementById("btnLoginLabel").className = "label label-success";
  }

});




//var bkButtons = true;