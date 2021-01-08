jQuery(function () {
    var url = '';

    var table = $('#tbHorario').DataTable({
        "dom": dom,
        "buttons": btns,
        responsive: respon,
        select: slct,
        "bDestroy": destroy,
        "pagingType": pagType,
        "language": lang,
        "processing": process,
        "serverSide": server,

        "ajax": {
            "url": './model/db_get.php',
            "data": {
                tabela: 'TB_HORARIOS',
                key: 'ID',
                colunasdb: [
                    'REFEICAO',
                    'ID',
                    'INICIO',
                    'FIM',
                    'PRECO'
                ],
                colunasdt: [
                    1,
                    0,
                    2,
                    3,
                    4
                ]
            }
        },

        columns: [{
                title: "ID"
            },
            {
                title: "Refeição"
            },
            {
                title: "Início"
            },
            {
                title: "Fim"
            },
            {
                title: "Preço"
            }
        ],

        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],
    });
});