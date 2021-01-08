jQuery(function () {

    var table = $('#tbCargos').DataTable({
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
                tabela: 'TB_FUNCOES',
                key: 'ID',
                colunasdb: [
                    'NOME',
                    'ID'
                ],
                colunasdt: [
                    1,
                    0
                ],
                format:[{

                },
                {

                }
                ]
            }
        },

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
    });
});