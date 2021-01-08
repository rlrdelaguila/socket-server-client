var rowdata = null;
var db_path = './model/db_horarios_changes.php';
var table = null;


function backHorario(){
    $('#mbSpanHorario').modal('hide');
    $('.modal-backdrop').remove();

}

$('#btEditaHorario').click(function () {
    sb = document.querySelector('#edtNomeRefeicao');
    sb.value = rowdata[1];

    sb = document.querySelector('#edtInicioRefeicao');
    sb.value = rowdata[2];

    sb = document.querySelector('#edtFimRefeicao');
    sb.value = rowdata[3];

    sb = document.querySelector('#edtPrecoRefeicao');
    var preco = rowdata[4].replace(',', '.');
    sb.value = Number(preco.substring(2));

    const bt = document.getElementById('btConfirmEditaHorario');
    bt.hidden = false;

    $('#mbHorario').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

$('#btInsereHorario').click(function () {
    sb = document.querySelector('#edtNomeRefeicao');
    sb.value = '';

    sb = document.querySelector('#edtInicioRefeicao');
    sb.value = '';

    sb = document.querySelector('#edtFimRefeicao');
    sb.value = '';

    sb = document.querySelector('#edtPrecoRefeicao');
    sb.value = '';

    const bt = document.getElementById('btConfirmInserirHorario');
    bt.hidden = false;

    $('#mbHorario').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

$('#btExcluiHorario').click(function () {
    $('#mbDeleteHorario').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

function hasSpaces(str) {
    if (str.indexOf(' ') !== -1) {
        return true
    } else {
        return false
    }
}

$('#btConfirmInserirHorario').click(function () {

    var hNome = document.getElementById('edtNomeRefeicao').value;
    var hPreco = document.getElementById('edtPrecoRefeicao').value;
    var hInicio = document.getElementById('edtInicioRefeicao').value;

    var hFim = $('#edtFimRefeicao').val();
    //var hFim = sb.value;
    hNome = hNome.trim();

    //2 dezenas da hora e minuto do time1
    var hh1 = (hInicio).slice(0, 2);
    var mm1 = (hInicio).slice(3, 5);
    //2 dezenas da hora e minuto do time2
    var hh2 = (hFim).slice(0, 2);
    var mm2 = (hFim).slice(3, 5);

    //verificao quando o time1>time2
    var valHora = hh2 - hh1
    var valMin = mm2 - mm1

    if ((valHora < 0) || ((valHora <= 0) && (valMin <= 0))) {
        //alert('Horario final invalido')

        document.getElementById("labelSpanHorario").innerHTML='Horario final invalido';
        $('.modal-backdrop').remove();
        $('#mbSpanHorario').modal('show');
        /* $('#edtNomeRefeicao').modal({
             backdrop: true,
             keyboard: false,
             show: true
         });*/

        return false
    } else if (hNome == '') {

        //alert('Nome de Refeicao Inválida')

        document.getElementById("labelSpanHorario").innerHTML='Nome de Refeicao Inválida';
        $('.modal-backdrop').remove();
        $('#mbSpanHorario').modal('show');
        /*$('#edtNomeRefeicao').modal({
            backdrop: true,
            keyboard: false,
            show: true
        });*/
        return false
    } else if (hPreco <= 0 || hasSpaces(hPreco)) {
        //alert('Preço invalido')
  
        document.getElementById("labelSpanHorario").innerHTML='Preço invalido';
        $('.modal-backdrop').remove();
        $('#mbSpanHorario').modal('show');
        /*$('#edtNomeRefeicao').modal({
             backdrop: true,
             keyboard: false,
             show: true
         });*/
        return false
    } else {
        var flag_insert = 0;

        /*$.post(db_path, {
            id: rowdata[0],
            hNome: document.getElementById('edtNomeRefeicao').value,
            hPreco: document.getElementById('edtPrecoRefeicao').value,
            hInicio: document.getElementById('edtInicioRefeicao').value,
            hFim: document.getElementById('edtFimRefeicao').value,
            modo: 4
        }, function (data, status, jqXHR) {
            if (status) {
                if ((data[0][0]) != rowdata[0]) {
                    if ((data[0][1]) == hPreco) {
                        alert("Nome da refeicao ja existe");
                        flag_insert = 1;
                    }
                }
            } else {
                alert('Erro!');
            }

        
            // table.ajax.reload();
        });
*/
        if (flag_insert == 0) {
            $.post(db_path, {
                id: 'New',
                hNome: document.getElementById('edtNomeRefeicao').value,
                hPreco: document.getElementById('edtPrecoRefeicao').value,
                hInicio: document.getElementById('edtInicioRefeicao').value,
                hFim: document.getElementById('edtFimRefeicao').value,
                modo: 6
            }, function (data, status, jqXHR) {
                if (status) {
                    data = JSON.parse(data);

                    if (data != null) {
                        if (data != '') {
                            for (var i = 0; i < data.length; i++) {
                                if ((data[i][2]) !== null) {
                                    if ((data[i][2]).slice(0, 5) != null) {
                                       // alert("Intervalo de tempo escolhido ja existe");                           
                                        document.getElementById("labelSpanHorario").innerHTML='Intervalo de tempo escolhido ja existe';
                                        $('.modal-backdrop').remove();
                                        $('#mbSpanHorario').modal('show');
                                                                        
                                        flag_insert = 1;
                                    }
                                }
                            }
                        }
                        if (flag_insert == 0) {
                            if ($('#edtNomeRefeicao').val() == "") {
                                //alert("Nome da refeicao é requido");
                                document.getElementById("labelSpanHorario").innerHTML='Nome da refeicao é requido';
                                $('.modal-backdrop').remove();
                                $('#mbSpanHorario').modal('show');
                            } else if ($('#edtInicioRefeicao').val() == '') {
                               // alert("Horario inicial é requido");
                                document.getElementById("labelSpanHorario").innerHTML='Horario inicial é requido';
                                $('.modal-backdrop').remove();
                                $('#mbSpanHorario').modal('show');
                            } else if ($('#edtPrecoRefeicao').val() == '') {
                                //alert("Preço É requido");
                                document.getElementById("labelSpanHorario").innerHTML='Preço É requido';
                                $('.modal-backdrop').remove();
                                $('#mbSpanHorario').modal('show');
                            } else if ($('#edtFimRefeicao').val() == '') {
                              //  alert("Horario final é requido");
                                document.getElementById("labelSpanHorario").innerHTML='Horario final é requido';
                                $('.modal-backdrop').remove();
                                $('#mbSpanHorario').modal('show');
                            } else {
                                $.post(db_path, {
                                    id: 'New',
                                    hNome: document.getElementById('edtNomeRefeicao').value,
                                    hPreco: document.getElementById('edtPrecoRefeicao').value,
                                    hInicio: document.getElementById('edtInicioRefeicao').value,
                                    hFim: document.getElementById('edtFimRefeicao').value,
                                    modo: 3
                                }, function (data, status, jqXHR) {
                                    switch (data) {

                                        case 'true':
                                            //alert('Dado Inserido')
                                            document.getElementById("labelSpanHorario").innerHTML='Dado Inserido';
                                            $('.modal-backdrop').remove();
                                            $('#mbSpanHorario').modal('show');
                                            break;
                                        case 'false':
                                          //  alert('Dado não Inserido')
                                            document.getElementById("labelSpanHorario").innerHTML='Dado não Inserido';
                                            $('.modal-backdrop').remove();
                                            $('#mbSpanHorario').modal('show');
                                            break;
                                        default:
                                           // alert(data)
                                            document.getElementById("labelSpanHorario").innerHTML=data;
                                            $('.modal-backdrop').remove();
                                            $('#mbSpanHorario').modal('show');
                                            

                                    }

                                    table.ajax.reload();
                                });
                            }
                        }

                    }
                } else {
                   // alert('Erro!');
                    document.getElementById("labelSpanHorario").innerHTML='Erro!';
                    $('.modal-backdrop').remove();
                    $('#mbSpanHorario').modal('show');
                }

                //alert('Data length:', data.length); 



                // table.ajax.reload();
            });
        }



    }













});



$('#btConfirmEditaHorario').click(function () {

    var hNome = document.getElementById('edtNomeRefeicao').value;
    var hPreco = document.getElementById('edtPrecoRefeicao').value;
    var hInicio = document.getElementById('edtInicioRefeicao').value;

    var hFim = $('#edtFimRefeicao').val();
    //var hFim = sb.value;
    hNome = hNome.trim();

    //2 dezenas da hora e minuto do time1
    var hh1 = (hInicio).slice(0, 2);
    var mm1 = (hInicio).slice(3, 5);
    //2 dezenas da hora e minuto do time2
    var hh2 = (hFim).slice(0, 2);
    var mm2 = (hFim).slice(3, 5);

    //verificao quando o time1>time2
    var valHora = hh2 - hh1
    var valMin = mm2 - mm1

    if ((valHora < 0) || ((valHora <= 0) && (valMin <= 0))) {

        document.getElementById("labelSpanHorario").innerHTML='Horario final invalido';
        $('.modal-backdrop').remove();
        $('#mbSpanHorario').modal('show');
        //alert('Horario final invalido')
        /* $('#edtNomeRefeicao').modal({
             backdrop: true,
             keyboard: false,
             show: true
         });*/

        return false
    } else if (hNome == '') {

       // alert('Nome de Refeicao Inválida')

        document.getElementById("labelSpanHorario").innerHTML='Nome de Refeicao Inválida';
        $('.modal-backdrop').remove();
        $('#mbSpanHorario').modal('show');
        /*$('#edtNomeRefeicao').modal({
            backdrop: true,
            keyboard: false,
            show: true
        });*/
        return false
    } else if (hPreco <= 0 || hasSpaces(hPreco)) {
        //alert('Preço invalido')
        document.getElementById("labelSpanHorario").innerHTML='Preço invalido';
        $('.modal-backdrop').remove();
        $('#mbSpanHorario').modal('show');
        /*$('#edtNomeRefeicao').modal({
             backdrop: true,
             keyboard: false,
             show: true
         });*/
        return false
    } else {
        var flag_insert = 0;

        /*$.post(db_path, {
            id: rowdata[0],
            hNome: document.getElementById('edtNomeRefeicao').value,
            hPreco: document.getElementById('edtPrecoRefeicao').value,
            hInicio: document.getElementById('edtInicioRefeicao').value,
            hFim: document.getElementById('edtFimRefeicao').value,
            modo: 4
        }, function (data, status, jqXHR) {
            if (status) {
                if ((data[0][0]) != rowdata[0]) {
                    if ((data[0][1]) == hPreco) {
                        alert("Nome da refeicao ja existe");
                        flag_insert = 1;
                    }
                }
            } else {
                alert('Erro!');
            }

        
            // table.ajax.reload();
        });
*/
        if (flag_insert == 0) {
            $.post(db_path, {
                id: rowdata[0],
                hNome: document.getElementById('edtNomeRefeicao').value,
                hPreco: document.getElementById('edtPrecoRefeicao').value,
                hInicio: document.getElementById('edtInicioRefeicao').value,
                hFim: document.getElementById('edtFimRefeicao').value,
                modo: 6
            }, function (data, status, jqXHR) {
                if (status) {
                    data = JSON.parse(data);

                    if (data != null) {
                        for (var i = 0; i < data.length; i++) {
                            if ((data[i][0]) != rowdata[0]) {
                                if ((data[i][2]) !== null) {
                                    if ((data[i][2]).slice(0, 5) != null) {
                                        //alert("Intervalo de tempo escolhido ja existe");
                                        document.getElementById("labelSpanHorario").innerHTML='Intervalo de tempo escolhido ja existe';
                                        $('.modal-backdrop').remove();
                                        $('#mbSpanHorario').modal('show');
                                        flag_insert = 1;
                                    }
                                }
                            }
                        }
                        if (flag_insert == 0) {
                            if ($('#edtNomeRefeicao').val() == "") {
                               // alert("Nome da refeicao é requido");
                                document.getElementById("labelSpanHorario").innerHTML='Nome da refeicao é requido';
                                $('.modal-backdrop').remove();
                                $('#mbSpanHorario').modal('show');
                            } else if ($('#edtInicioRefeicao').val() == '') {
                              //  alert("Horario inicial é requido");
                                document.getElementById("labelSpanHorario").innerHTML='Horario inicial é requido';
                                $('.modal-backdrop').remove();
                                $('#mbSpanHorario').modal('show');
                            } else if ($('#edtPrecoRefeicao').val() == '') {
                               // alert("Preço É requido");
                                document.getElementById("labelSpanHorario").innerHTML='Preço É requido';
                                $('.modal-backdrop').remove();
                                $('#mbSpanHorario').modal('show');
                            } else if ($('#edtFimRefeicao').val() == '') {
                                //alert("Horario final é requido");
                                document.getElementById("labelSpanHorario").innerHTML='Horario final é requido';
                                $('.modal-backdrop').remove();
                                $('#mbSpanHorario').modal('show');
                            } else {
                                $.post(db_path, {
                                    id: rowdata[0],
                                    hNome: document.getElementById('edtNomeRefeicao').value,
                                    hPreco: document.getElementById('edtPrecoRefeicao').value,
                                    hInicio: document.getElementById('edtInicioRefeicao').value,
                                    hFim: document.getElementById('edtFimRefeicao').value,
                                    modo: 2
                                }, function (data, status, jqXHR) {
                                    //console.log(data + ' ' + status + ' ' + jqXHR)
                                    switch (data) {

                                        case 'true':
                                           // alert('Dado editado')
                                            document.getElementById("labelSpanHorario").innerHTML='Dado editado';
                                            $('.modal-backdrop').remove();
                                            $('#mbSpanHorario').modal('show');

                                            break;
                                        case 'false':
                                            //alert('Dado não editado')
                                            document.getElementById("labelSpanHorario").innerHTML='false';
                                            $('.modal-backdrop').remove();
                                            $('#mbSpanHorario').modal('show');
                                            break;
                                        default:
                                           // alert(data)

                                            document.getElementById("labelSpanHorario").innerHTML=data;
                                            $('.modal-backdrop').remove();
                                            $('#mbSpanHorario').modal('show');



                                    }



                                    table.ajax.reload();
                                });
                            }
                        }

                    }
                } else {
                    //alert('Erro!');
                    document.getElementById("labelSpanHorario").innerHTML='Erro!';
                    $('.modal-backdrop').remove();
                    $('#mbSpanHorario').modal('show');
                }

                //alert('Data length:', data.length); 



                // table.ajax.reload();
            });
        }



    }


});

$('#btConfirmExcluiHorario').click(function () {
    $.post(db_path, {
        id: rowdata[0],
        hNome: '',
        hPreco: '',
        hInicio: '',
        hFim: '',
        modo: 1
    }, function (data, status, jqXHR) {
        if (status) {
           // alert('Refeição excluida!');
            document.getElementById("labelSpanHorario").innerHTML='Refeição excluida!';
            $('.modal-backdrop').remove();
            $('#mbSpanHorario').modal('show');
        } else {
            //alert('Erro!');

            document.getElementById("labelSpanHorario").innerHTML='Erro!';
            $('.modal-backdrop').remove();
            $('#mbSpanHorario').modal('show');
        }

        table.ajax.reload();
    });
});

jQuery(function () {
    var bkButtons = true;
    $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {

        var verificacao_Acesso = JSON.parse(verificacao_Acesso)
       
        const btEditH = document.getElementById('btEditaHorario');
        const btDelH = document.getElementById('btExcluiHorario');
        const btInserH = document.getElementById('btInsereHorario');
        btEditH.hidden = !(verificacao_Acesso);
        btDelH.hidden = !(verificacao_Acesso);
        btInserH.hidden = !(verificacao_Acesso);
        bkButtons = verificacao_Acesso;
        
        /*  const sb = document.querySelector('#selectEmpresas');
          sb.remove(0);
          const json = JSON.parse(dados_empresas);*/
        /* json.data.forEach(function (empresa) {
             let newOption = new Option(empresa[1], empresa[0]);
             sb.add(newOption, undefined);
         });*/
    });
    
    table = $('#tbHorarios').DataTable({
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
                title: "Refeição",
                "bSearchable": true 
            },
            {
                title: "Início"
                ,
                "bSearchable": false 
            },
            {
                title: "Fim"
                ,
                "bSearchable": false 
            },
            {
                title: "Preço"
                ,
                "bSearchable": false 
            }
        ],

        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],
        responsive: true,
        "processing": true,
        "serverSide": true,
        "ajax": "./views/horarios/horarios.php",

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

    $('#tbHorarios').on('draw.dt', function () {
        const btEdit = document.getElementById('btEditaHorario');
        const btDel = document.getElementById('btExcluiHorario');

        btEdit.disabled = true;
        btDel.disabled = true;
    });

    $('#tbHorarios tbody').on('click', 'tr', function () {
        const btEdit = document.getElementById('btEditaHorario');
        const btDel = document.getElementById('btExcluiHorario');

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

    $('#tbHorarios tbody').on('dblclick', 'tr', function () {
        rowdata = table.row(this).data();
        if(bkButtons) $('#btEditaHorario').click();
    });

    $('#mbHorario').on('hidden.bs.modal', function () {
        bt = document.getElementById('btConfirmInserirHorario');
        bt.hidden = true;
        bt = document.getElementById('btConfirmEditaHorario');
        bt.hidden = true;
    });
});