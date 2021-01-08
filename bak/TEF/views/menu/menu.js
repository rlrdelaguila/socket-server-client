var db_path = './model/db_users_cadastros_changes.php';



function backMenu(){
    $('#mbSpanMenu').modal('hide');
    $('.modal-backdrop').remove();

}

jQuery(function () {
    $('#btOpenFuncionarios').click(function () {
        $('.active').removeClass('active');
        $(this).parent().addClass("active");
        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
            //var verificacao_Acesso = JSON.parse(verificacao_Acesso)

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
                            $('#pagedata').load('./views/funcionarios/funcionarios_index.html');
                        } else {
                            alert('você não tem permissão para isso.');
                        }
                    });
                }
                });
            } else {
                // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
                //alert('você não tem permissão para isso 2.')
            }
        });
       
    });

    $('#btOpenHorarios').click(function () {
        $('.active').removeClass('active');
        $(this).parent().addClass("active");
        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
            //var verificacao_Acesso = JSON.parse(verificacao_Acesso)

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
                            $('#pagedata').load('./views/horarios/horarios.html');
                        } else {
                            alert('você não tem permissão para isso.');
                        }
                    });
                }
                });
            } else {
                // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
                //alert('você não tem permissão para isso 2.')
            }
        });
       
    });

 

    $('#btOpenOrganizacao').click(function () {
        $('.active').removeClass('active');
        $(this).parent().addClass("active");



    });


    $('#btOpenEmpresas').click(function () {
       // $('#btOpenOrganizacao').addClass("active");
     ;
       $('#btOpenOrganizacao').parent().addClass("active");

        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
            //var verificacao_Acesso = JSON.parse(verificacao_Acesso)

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
                            $('#pagedata').load('./views/empresas/empresas.html');
                        } else {
                            alert('você não tem permissão para isso.');
                        }
                    });
                }
                });
            } else {
                // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
                //alert('você não tem permissão para isso 2.')
            }
        });
        
    });

    $('#btOpenDepartamentos').click(function () {
       
        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
            //var verificacao_Acesso = JSON.parse(verificacao_Acesso)

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
                            $('#pagedata').load('./views/departamentos/departamentos.html');
                        } else {
                            alert('você não tem permissão para isso.');
                        }
                    });
                }
                });
            } else {
                // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
                //alert('você não tem permissão para isso 2.')
            }
        });
        
    });

    $('#btOpenSetores').click(function () {
     
        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
            //var verificacao_Acesso = JSON.parse(verificacao_Acesso)

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
                            $('#pagedata').load('./views/setores/setores.html');
                        } else {
                            alert('você não tem permissão para isso.');
                        }
                    });
                }
                });
            } else {
                // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
                //alert('você não tem permissão para isso 2.')
            }
        });
       
    });

    $('#btOpenCargos').click(function () {
  
        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
            //var verificacao_Acesso = JSON.parse(verificacao_Acesso)

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
                            $('#pagedata').load('./views/cargos/cargos.html');
                        } else {
                            alert('você não tem permissão para isso.');
                        }
                    });
                }
                });
            } else {
                // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
                //alert('você não tem permissão para isso 2.')
            }
        });
        
    });

    $('#btOpenUsuarios').click(function () {
    
        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
            //var verificacao_Acesso = JSON.parse(verificacao_Acesso)

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
                        if (res[0][0] == 'administrador') {
                            $('#pagedata').load('./views/usuarios/usuarios.html');
                        } else {
                           // alert('você não tem permissão para isso.');
                            document.getElementById("labelSpanMenu").innerHTML='você não tem permissão para isso.';
                            $('.modal-backdrop').remove();
                            $('#mbSpanMenu').modal('show');
                        }
                    });
                }
                });
            } else {
                // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
                //alert('você não tem permissão para isso 2.')
            }
        });
    });

    $('#btOpenPrincipal').click(function () {
        $('.active').removeClass('active');
        $(this).parent().addClass("active");
        $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
            //var verificacao_Acesso = JSON.parse(verificacao_Acesso)

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
                            $('#pagedata').load('./views/principal/inputToGrafic.php');
                        } else {
                            alert('você não tem permissão para isso.');
                        }
                    });
                }
                });
            } else {
                // $('#pagedata').load('./views/usuarios/usuarios_adm.html');
                //alert('você não tem permissão para isso 2.')
            }
        });
     
    });

    

 
});

