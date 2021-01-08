jQuery(function () {
   // $('#menu').load('views/menu/menu.html');
    $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
        var verificacao_Acesso = JSON.parse(verificacao_Acesso)
      
        if (verificacao_Acesso) {
            $.get("./views/login/getSessionId.php", function (sessionID) {
                if(sessionID != false){
                var value = JSON.parse(sessionID);
                
                $.post('./model/db_users_cadastros_changes.php', {
                    id: value,
                    modo: 4
                }, function (data, status, jqXHR) {
                    const res = JSON.parse(data);
                    //console.log(res[0][0]);
                    if (res[0][0] == 'administrador' || res[0][0] == 'usuario') {
                        $('#menu').load('views/menu/menu.html');
                    } else {
                        $('#pagedata').load('./views/login/login.html');
                    }
                });
            }
            });
        } else {
           // $('#menu').load('views/menu/menu.html');
            $('#menu').load('./views/login/login.html');
       
            // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
            //alert('você não tem permissão para isso 2.')
        }
    });
  
});