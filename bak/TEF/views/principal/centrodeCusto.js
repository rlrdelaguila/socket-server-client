jQuery(function () {
    $('#tbCentrodeCusto').DataTable({
        "dom": '<"row"<"col-8"l><"col-4"f>>' +
            '<"row"rt<"clear">>' +
            '<"row"<"col-8"i><"col-4"p><"clear">>' +
            '<"row"<"clear"B>>',

        "buttons": [ {
            extend: 'collection',
            text: 'Exportar',
            buttons: ["copy", "excel", "csv", "pdf", "print"]
        }],

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
            "lengthMenu": "_MENU_  Resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sSearch": "",
            "sSearchPlaceholder": "Pesquisar...",
            // "sUrl": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
            "sZeroRecords": "Nenhum registro encontrado",
        },
        "bDestroy": "true"
    });
});