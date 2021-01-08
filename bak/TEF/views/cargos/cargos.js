var rowdata = null;
var db_path = './model/db_changes.php';
var table = null;


function backCargos(){
    $('#mbSpanCargos').modal('hide');
    $('.modal-backdrop').remove();

}

$('#btEditaCargo').click(function () {
    sb = document.querySelector('#edtNomeCargo');
    sb.value = rowdata[1];

    const bt = document.getElementById('btConfirmEditaCargo');
    bt.hidden = false;

    $('#mbCargo').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

$('#btInsereCargo').click(function () {
    sb = document.querySelector('#edtNomeCargo');
    sb.value = '';

    const bt = document.getElementById('btConfirmInserirCargo');
    bt.hidden = false;

    $('#mbCargo').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

$('#btExcluiCargo').click(function () {
    $('#mbDeleteCargo').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

$('#btConfirmInserirCargo').click(function () {
    $.post(db_path, {
        _id: 'New',
        _oque: 'Cargo',
        _tabela: 'TB_FUNCOES',
        _nome: document.getElementById('edtNomeCargo').value,
        _modo: 3
    }, function (data, status, jqXHR) {
        _json = JSON.parse(data);

        //alert(_json.msg);

        
        document.getElementById("labelSpanCargos").innerHTML= _json.msg;
        $('.modal-backdrop').remove();
        $('#mbSpanCargos').modal('show');
        switch (_json.status) {
            case 'error':
                break;
            case 'success':
                break;
        }

        table.ajax.reload();
    });
});

$('#btConfirmEditaCargo').click(function () {
    $.post(db_path, {
        _id: rowdata[0],
        _oque: 'Cargo',
        _tabela: 'TB_FUNCOES',
        _nome: document.getElementById('edtNomeCargo').value,
        _modo: 2
    }, function (data, status, jqXHR) {
        _json = JSON.parse(data);

        //alert(_json.msg);
        document.getElementById("labelSpanCargos").innerHTML= _json.msg;
        $('.modal-backdrop').remove();
        $('#mbSpanCargos').modal('show');
        switch (_json.status) {
            case 'error':
                break;
            case 'success':
                break;
        }

        table.ajax.reload();
    });
});

$('#btConfirmExcluiCargo').click(function () {
    $.post(db_path, {
        _id: rowdata[0],
        _oque: 'Cargo',
        _tabela: 'TB_FUNCOES',
        _nome: '',
        _modo: 1
    }, function (data, status, jqXHR) {
        _json = JSON.parse(data);

        //alert(_json.msg);
        document.getElementById("labelSpanCargos").innerHTML= _json.msg;
        $('.modal-backdrop').remove();
        $('#mbSpanCargos').modal('show');
        switch (_json.status) {
            case 'error':
                break;
            case 'success':
                break;
        }

        table.ajax.reload();
    });
});

jQuery(function () {
    var bkButtons = true;
    $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {

        var verificacao_Acesso = JSON.parse(verificacao_Acesso)
       
        const btEditCargo = document.getElementById('btEditaCargo');
        const btDelCargo= document.getElementById('btExcluiCargo');
        const btInserCargo = document.getElementById('btInsereCargo');
        btEditCargo.hidden = !(verificacao_Acesso);
        btDelCargo.hidden = !(verificacao_Acesso);
        btInserCargo.hidden = !(verificacao_Acesso);
        bkButtons = verificacao_Acesso;
        
        /*  const sb = document.querySelector('#selectEmpresas');
          sb.remove(0);
          const json = JSON.parse(dados_empresas);*/
        /* json.data.forEach(function (empresa) {
             let newOption = new Option(empresa[1], empresa[0]);
             sb.add(newOption, undefined);
         });*/
    });
    table = $('#tbCargos').DataTable({
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
                title: "ID"
            },
            {
                title: "Nome"
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
        "ajax": "./views/cargos/cargos.php",

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
            // "sUrl": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
            "sZeroRecords": "Nenhum registro encontrado"
        }
    });

    $('#tbCargos').on('draw.dt', function () {
        const btEdit = document.getElementById('btEditaCargo');
        const btDel = document.getElementById('btExcluiCargo');

        btEdit.disabled = true;
        btDel.disabled = true;
    });

    $('#tbCargos tbody').on('click', 'tr', function () {
        const btEdit = document.getElementById('btEditaCargo');
        const btDel = document.getElementById('btExcluiCargo');

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

    $('#tbCargos tbody').on('dblclick', 'tr', function () {
        rowdata = table.row(this).data();
        if(bkButtons)$('#btEditaCargo').click();
    });

    $('#mbCargo').on('hidden.bs.modal', function () {
        bt = document.getElementById('btConfirmInserirCargo');
        bt.hidden = true;
        bt = document.getElementById('btConfirmEditaCargo');
        bt.hidden = true;
    });
});