var rowdata = null;

$('#btEditaFuncionario').click(function () {
    sb = document.querySelector('#edtNomeFuncionario');
    sb.value = rowdata[1];

    sb = document.querySelector('#edtCrachaFuncionario');
    sb.value = rowdata[2];

    sb = document.querySelector('#selectEmpresas');
    sb.value = rowdata[3];

    sb = document.querySelector('#selectSetores');
    sb.value = rowdata[4];

    sb = document.querySelector('#selectDepartamento');
    sb.value = rowdata[5];

    sb = document.querySelector('#selectCargo');
    sb.value = rowdata[6];

    sb = document.querySelector('#edtAdmissaoFuncionario');
    sb.value = rowdata[7];

    sb = document.querySelector('#cbSupervisor');
    bol = Boolean(Number(rowdata[8]));
    document.getElementById("cbAtivo").checked = bol;
    sb.disabled = !bol;

    sb = document.querySelector('#edtSenha');
    bol = Boolean(Number(rowdata[9]));
    document.getElementById("cbSupervisor").checked = bol;
    sb.hidden = !bol;

    sb = document.querySelector('#edtSenha');
    sb.value = rowdata[10];

    $('#mbFuncionario').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

jQuery(function () {
    $.get("./model/db_get.php", {
        tabela: 'TB_EMPRESAS',
        key: 'ID',
        colunasdb: [
            'NOME',
            'ID'
        ],
        colunasdt: [
            1,
            0
        ]
    }, function (dados_empresas) {
        const sb = document.querySelector('#selectEmpresas');
        sb.remove(0);
        const json = JSON.parse(dados_empresas);
        json.data.forEach(function (empresa) {
            let newOption = new Option(empresa[1], empresa[0]);
            sb.add(newOption, undefined);
        });
    });

    $.get("./model/db_get.php", {
        tabela: 'TB_SETORES',
        key: 'ID',
        colunasdb: [
            'NOME',
            'ID'
        ],
        colunasdt: [
            1,
            0
        ]
    }, function (dados_setores) {
        const sb = document.querySelector('#selectSetores');
        sb.remove(0);
        const json = JSON.parse(dados_setores);
        json.data.forEach(function (setor) {
            let newOption = new Option(setor[1], setor[0]);
            sb.add(newOption, undefined);
        });
    });

    $.get("./model/db_get.php", {
        tabela: 'TB_DEPARTAMENTO',
        key: 'ID',
        colunasdb: [
            'NOME',
            'ID'
        ],
        colunasdt: [
            1,
            0
        ]
    }, function (dados_departamentos) {
        const sb = document.querySelector('#selectDepartamento');
        sb.remove(0);
        const json = JSON.parse(dados_departamentos);
        json.data.forEach(function (departamento) {
            let newOption = new Option(departamento[1], departamento[0]);
            sb.add(newOption, undefined);
        });
    });

    $.get("./model/db_get.php", {
        tabela: 'TB_FUNCOES',
        key: 'ID',
        colunasdb: [
            'NOME',
            'ID'
        ],
        colunasdt: [
            1,
            0
        ]
    }, function (dados_cargos) {
        const sb = document.querySelector('#selectCargo');
        sb.remove(0);
        const json = JSON.parse(dados_cargos);
        json.data.forEach(function (cargo) {
            let newOption = new Option(cargo[1], cargo[0]);
            sb.add(newOption, undefined);
        });
    });

    var table = $('#tbFuncionario').DataTable({
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
                tabela: 'TB_USERS',
                key: 'ID',
                colunasdb: [
                    'NOME',
                    'ID',
                    'CRACHA',
                    'EMP_ID',
                    'SETOR_ID',
                    'DEP_ID',
                    'FUNCAO_ID',
                    'DATA_AD',
                    'ATIVO',
                    'SUPERVISOR',
                    'SENHA'
                ],
                colunasdt: [
                    1,
                    0,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                ]
            }
        },

        columns: [{
                title: "ID"
            },
            {
                title: "Nome"
            },
            {
                title: "Crachá"
            },
            {
                title: "Empresa"
            },
            {
                title: "Setor"
            },
            {
                title: "Departamento"
            },
            {
                title: "Cargo"
            },
            {
                title: "Admissão"
            },
            {
                title: "Ativo"
            },
            {
                title: "Supervisor"
            },
            {
                title: "Senha"
            }
        ],

        "columnDefs": [{
                "targets": [0],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [2],
                "visible": false,
                "searchable": false
            },

            {
                "targets": [3],
                "visible": true,
                "searchable": true,
                "orderable": true,
                "data": function (row, type, val, meta) {
                    sbEmp = document.querySelector('#selectEmpresas');
                    for (i = 0; i < sbEmp.length; i++) {
                        if (sbEmp.options[i].value == row[3]) {
                            return sbEmp.options[i].text;
                        }
                    }
                }
            },
            {
                "targets": [4],
                "visible": true,
                "searchable": true,
                "orderable": true,
                "data": function (row, type, val, meta) {
                    sbSetor = document.querySelector('#selectSetores');
                    for (i = 0; i < sbSetor.length; i++) {
                        if (sbSetor.options[i].value == row[4]) {
                            return sbSetor.options[i].text;
                        }
                    }
                }
            },
            {
                "targets": [5],
                "visible": true,
                "searchable": true,
                "orderable": true,
                "data": function (row, type, val, meta) {
                    sbDep = document.querySelector('#selectDepartamento');
                    for (i = 0; i < sbDep.length; i++) {
                        if (sbDep.options[i].value == row[5]) {
                            return sbDep.options[i].text;
                        }
                    }
                }
            },
            {
                "targets": [6],
                "visible": false,
                "searchable": false,
                "data": function (row, type, val, meta) {
                    sbDep = document.querySelector('#selectCargo');
                    for (i = 0; i < sbDep.length; i++) {
                        if (sbDep.options[i].value == row[6]) {
                            return sbDep.options[i].text;
                        }
                    }
                }
            },
            {
                "targets": [8],
                "visible": true,
                "searchable": true,
                "data": function (row, type, val, meta) {
                    if (row[8] == 1) {
                        return 'Sim';
                    } else
                        return 'Não';
                }
            },
            {
                "targets": [9],
                "visible": false,
                "searchable": false,
                "data": function (row, type, val, meta) {
                    if (row[9] == 1) {
                        return 'Sim';
                    } else
                        return 'Não';
                }
            },
            {
                "targets": [10],
                "visible": false,
                "searchable": false,
                "data": function (row, type, val, meta) {
                    return '******';
                }
            }
        ],

    });

    $('#tbFuncionario tbody').on('dblclick', 'tr', function () {
        rowdata = table.row(this).data();
        $('#btEditaFuncionario').click();
    });
});