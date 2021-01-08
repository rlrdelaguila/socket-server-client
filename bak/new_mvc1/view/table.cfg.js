var dom = '<"row"<"col-12"B>>' + '<"row"<"col-5"l><"col-7"f>>' +
    '<"row"rt<"clear">>' +
    '<"row"<"col-12"p><"clear">>';

var btns = [{
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
}, /*, 'colvis'*/ ];

var slct = {
    style: 'single'
};

var lang = {
    "oPaginate": {
        "sFirst": "Primeiro",
        "sLast": "Último",
        "sNext": "Próximo",
        "sPrevious": "Anterior"
    },

    "info": "Página _PAGE_ de _PAGES_",
    "infoEmpty": "Sem registro",
    "infoFiltered": "(de _MAX_ registros)",
    "sInfoPostFix": "",
    "decimal": ",",
    "thousands": ".",
    "lengthMenu": "_MENU_ por página",
    "sLoadingRecords": "Carregando...",
    "sProcessing": "Processando...",
    "sSearch": "",
    "sSearchPlaceholder": "Pesquisar...",
    "sZeroRecords": "Nenhum registro encontrado"
};

var pagType = "simple_numbers";
var destroy = true;
var process = true;
var server = true;
var respon = true;

