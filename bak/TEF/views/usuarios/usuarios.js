var rowdata = null;
var db_path = './model/db_users_cadastros_changes.php';
var table = null;


function backUsuarios(){
    $('#mbSpanUsuarios').modal('hide');
    $('.modal-backdrop').remove();

}

$('#btEditaUsuario').click(function () {
    sbLogin = document.querySelector('#loginUsuario');
    sbLogin.value = rowdata[1];

    sbSenha = document.querySelector('#senhaUsuario');
    sbSenha.value = rowdata[2];

    sbNivel = document.querySelector('#selectNivel');
    sbNivel.value = rowdata[3];

    const bt = document.getElementById('btConfirmEditaCadastro');
    bt.hidden = false;
    const bt2 = document.getElementById('btConfirmInserirCadastro');
    bt2.hidden = true;
    $('#mbCadastro').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});


$('#btInsereUsuario').click(function () {
    sb = document.querySelector('#loginUsuario');
    sb.value = '';

    sb = document.querySelector('#senhaUsuario');
    sb.value = '';

    const bt = document.getElementById('btConfirmInserirCadastro');
    bt.hidden = false;
    const bt3 = document.getElementById('btConfirmEditaCadastro');
    bt3.hidden = true;
    $('#mbCadastro').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

$('#btExcluirUsuario').click(function () {
    $('#mbDeleteCadastro').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

$('#btConfirmInserirCadastro').click(function () {

    $.post(db_path, {
        id: 'New',
        uNome: document.getElementById('loginUsuario').value,
        uSenha: document.getElementById('senhaUsuario').value,
        uNivel: document.getElementById('selectNivel').value,
        modo: 3
    }, function (data, status, jqXHR) {
        switch (data) {
            case 'true':
                //alert('Usuário inserido');
                document.getElementById("labelSpanUsuarios").innerHTML='Usuário inserido';
                $('.modal-backdrop').remove();
                $('#mbSpanUsuarios').modal('show');
                break;
            case 'false':
                //alert('Usuário não inserido');
                document.getElementById("labelSpanUsuarios").innerHTML='Usuário não inserido';
                $('.modal-backdrop').remove();
                $('#mbSpanUsuarios').modal('show');
                break;
            default:
                //alert(data);
                document.getElementById("labelSpanUsuarios").innerHTML=data;
                $('.modal-backdrop').remove();
                $('#mbSpanUsuarios').modal('show');
        }

        table.ajax.reload();
    });

});

$('#btConfirmEditaCadastro').click(function () {

    $.post(db_path, {
        id: rowdata[0],
        uNome: document.getElementById('loginUsuario').value,
        uSenha: document.getElementById('senhaUsuario').value,
        uNivel: document.getElementById('selectNivel').value,
        modo: 2
    }, function (data, status, jqXHR) {
        switch (data) {
            case 'true':
                //alert('Usuário editado');
                document.getElementById("labelSpanUsuarios").innerHTML='Usuário editado';
                $('.modal-backdrop').remove();
                $('#mbSpanUsuarios').modal('show');
                break;
            case 'false':
               // alert('Usuário não editado');
                document.getElementById("labelSpanUsuarios").innerHTML='Usuário não editado';
                $('.modal-backdrop').remove();
                $('#mbSpanUsuarios').modal('show');
                break;
            default:
               // alert(data);
                document.getElementById("labelSpanUsuarios").innerHTML=data;
                $('.modal-backdrop').remove();
                $('#mbSpanUsuarios').modal('show');
        }

        table.ajax.reload();
    });

});




$('#btConfirmExcluiCadastro').click(function () {
    $.post(db_path, {
        id: rowdata[0],
        hNome: '',
        hPreco: '',
        hInicio: '',
        hFim: '',
        modo: 1
    }, function (data, status, jqXHR) {
        if (status) {
            //alert('Usuário excluido!');
            document.getElementById("labelSpanUsuarios").innerHTML='Usuário excluido!';
            $('.modal-backdrop').remove();
            $('#mbSpanUsuarios').modal('show');
        } else {
            //alert('Erro ao excluir usuário!');
            document.getElementById("labelSpanUsuarios").innerHTML='Erro ao excluir usuário!';
            $('.modal-backdrop').remove();
            $('#mbSpanUsuarios').modal('show');
        }

        table.ajax.reload();
    });
});

$('#btAcessoCadastro').click(function () {
    // mbLoginAdmin
    // mbCadastro
    $("#pagedata").load('views/login/login_verificando.php', {
            'login': $('#loginAdmin').val(),
            'entrar': true,
            'senha': $('#senhaAdmin').val(),
            'url': '<?=$url?>'
        },
        function (response, status, xhr) {
            // alert('resposta: ' + status)
            if (status == 'success') {
                $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {
                    //alert(verificacao_Acesso)
                    var verificacao_Acesso = JSON.parse(verificacao_Acesso)
                    if (verificacao_Acesso) {
                        document.getElementById("btnLoginLabel").innerHTML = 'Sair';
                        document.getElementById("btnLogin").className = "btn btn-outline-danger";

                        $("#pagedata").load('views/usuarios/usuarios.html')
                        /* $('#mbLogin').modal({
                           hidden: false });*/
                        /*var e = document.getElementById("btnLogin");
                        e.id = "btnLogout";*/

                    } else {
                        document.getElementById("btnLoginLabel").innerHTML = 'Entrar';
                        document.getElementById("btnLogin").className = "btn btn-outline-success";
                        /*var e = document.getElementById("btnLogin");
                        e.id = "btnLogout";*/
                    }
                });
            }
        }
    );

});


jQuery(function () {
    var bkButtons = true;

    /* $("#pagedata").load('views/login/login_verificando.php', {
         'login': $('#loginAdmin').val(),
         'entrar': true,
         'senha': $('#senhaAdmin').val(),
         'adm': 1,
         'url': '<?=$url?>'
     },
     function (response, status, xhr) {

         var verificacao_Acesso = JSON.parse(verificacao_Acesso)

     });*/

    $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {

        var verificacao_Acesso = JSON.parse(verificacao_Acesso)

        //const btEditCadastro = document.getElementById('btEditaUsuario');
        //const btDelCadastro = document.getElementById('btExcluirUsuario');
        //const btInserCadastro = document.getElementById('btInsereUsuario');
        //btEditCadastro.hidden = !(verificacao_Acesso);
        //btDelCadastro.hidden = !(verificacao_Acesso);
        // btInserCadastro.hidden = !(verificacao_Acesso);
        // bkButtons = verificacao_Acesso;

        /*  const sb = document.querySelector('#selectEmpresas');
          sb.remove(0);
          const json = JSON.parse(dados_empresas);*/
        /* json.data.forEach(function (empresa) {
             let newOption = new Option(empresa[1], empresa[0]);
             sb.add(newOption, undefined);
         });*/

    });
    table = $('#tbUsuarios').DataTable({
        "dom": '<"row"<"col-12"B>>' + '<"row"<"col-5"l><"col-7"f>>' +
            '<"row"rt<"clear">>' +
            '<"row"<"col-12"p><"clear">>',

        "buttons": [{
            text: '<u>R</u>ecarregar',
            key: {
                key: 'r',
                altKey: true
            },
            action: function (e, dt, node, config) {
                dt.ajax.reload();
            }
        }, {
            extend: 'collection',
            text: 'Exportar',
            buttons: [{
                    extend: 'copy',
                    text: '<u>C</u>opy',
                    key: {
                        key: 'c',
                        altKey: true
                    }
                },
                {
                    extend: 'excel',
                    text: 'E<u>x</u>cel',
                    key: {
                        key: 'e',
                        altKey: true
                    }
                },
                {
                    extend: 'print',
                    text: '<u>P</u>rint',
                    key: {
                        key: 'p',
                        altKey: true
                    }
                },
                {
                    text: '<u>J</u>son',
                    key: {
                        key: 'j',
                        altKey: true
                    },
                    action: function (e, dt, button, config) {
                        var data = dt.buttons.exportData();

                        $.fn.dataTable.fileSave(
                            new Blob([JSON.stringify(data)]),
                            'Export.json'
                        );
                    }
                }
                /*, 
                                {
                                    extend: 'pdfHtml5',
                                    text: '<u>P</u>DF',
                                    download: 'open',
                                    key: {
                                        key: 'P',
                                        altKey: true
                                    }
                                }*/
            ]
        }, /*, 'colvis'*/ ],


        columns: [{
                title: "ID",
                "bSearchable": false 
            },
            {
                title: "Nome",
                "bSearchable": true 
            },
            {
                title: "Senha",
                "bSearchable": false 
            },
            {
                title: "Nível",
                "bSearchable": false 
            }

        ],

        "columnDefs": [{
                "targets": [0],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [2],
                "visible": true,
                "searchable": false,
                "data": function (row, type, val, meta) {
                    return '******';
                }
            }
        ],
        responsive: true,
        "processing": true,
        "serverSide": true,
        "ajax": "./views/usuarios/usuarios.php",

        select: {
            style: 'single'
        },
        "bDestroy": true,
        "pagingType": "simple_numbers",
        "language": {
            "oPaginate": {
                "sFirst": "Primeiro",
                "sLast": "Último",
                "sNext": "Próximo",
                "sPrevious": "Anterior"
            },

            "info": "Página _PAGE_ de _PAGES_",
            "infoEmpty": "Sem registro",

            "infoFiltered": "(Filtrado de _MAX_ registros)",
            "sInfoPostFix": "",
            "decimal": ",",
            "thousands": ".",
            "lengthMenu": "_MENU_ por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sSearch": "",
            "sSearchPlaceholder": "Pesquisar...",
            "sZeroRecords": "Nenhum registro encontrado"
        }
    });

    $('#tbUsuarios').on('draw.dt', function () {
        const btEdit = document.getElementById('btEditaUsuario');
        const btDel = document.getElementById('btExcluirUsuario');

        btEdit.disabled = true;
        btDel.disabled = true;
    });

    $('#tbUsuarios tbody').on('click', 'tr', function () {
        const btEdit = document.getElementById('btEditaUsuario');
        const btDel = document.getElementById('btExcluirUsuario');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            rowdata = null;
            disable = true;
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            rowdata = table.row(this).data();
            disable = false;
        }

        btEdit.disabled = disable;
        btDel.disabled = disable;
    });

    $('#tbUsuarios tbody').on('dblclick', 'tr', function () {
        rowdata = table.row(this).data();
        if (bkButtons) $('#btEditaUsuario').click();
    });

    $('#tbUsuarios').on('hidden.bs.modal', function () {
        bt = document.getElementById('btConfirmInserirCadastro');
        bt.hidden = true;
        bt = document.getElementById('btConfirmEditaCadastro');
        bt.hidden = true;
    });
});