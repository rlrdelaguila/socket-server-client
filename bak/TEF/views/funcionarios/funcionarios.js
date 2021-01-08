var rowdata = null;
var db_path = './views/funcionarios/funcionarios_change.php';
var table = null;



function backFuncionario(){
    $('#mbSpanFuncionario').modal('hide');
    $('.modal-backdrop').remove();

  }
  
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
    date_ = rowdata[7].split('/', 3);
    date = date_[2] + '-' + date_[1] + '-' + date_[0];
    sb.value = date;

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

$('#btExcluiFuncionario').click(function () {
    $('#mbDeleteFuncionario').modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
});

$('#btConfirmEditaFuncionario').click(function () {
    $.post(db_path, {
        id: rowdata[0],
        fNome: document.getElementById('edtNomeFuncionario').value,
        fEmpresa: document.getElementById('selectEmpresas').value,
        fSetor: document.getElementById('selectSetores').value,
        fDepartamento: document.getElementById('selectDepartamento').value,
        fCargo: document.getElementById('selectCargo').value,
        fDataAD: document.getElementById('edtAdmissaoFuncionario').value,
        fAtivo: document.getElementById('cbAtivo').checked,
        fSupervisor: document.getElementById('cbSupervisor').checked,
        fSenha: document.getElementById('edtSenha').value,
        modo: 2
    }, function (data, status, jqXHR) {
        // $('p').append('status: ' + status + ', data: ' + data);

      
        if (data == 'true') {
            document.getElementById("labelSpan").innerHTML='Funcionário Editado';
            /*sb = document.querySelector('#login');
            if(sb != null)sb.value = '';*/
            $('.modal-backdrop').remove();
            $('#mbSpanFuncionario').modal('show');

        } else{
            //alert(data);
            
            document.getElementById("labelSpan").innerHTML = data;
            $('.modal-backdrop').remove();
            $('#mbSpanFuncionario').modal('show');
        }
        table.ajax.reload();
    });
});

$('#btConfirmExcluiFuncionario').click(function () {
    $.post(db_path, {
        id: rowdata[0],
        modo: 1
    }, function (data, status, jqXHR) {
        //$('p').append('status: ' + status + ', data: ' + data);
        if (status) {
            //alert('Funcionário excluido!');
            document.getElementById("labelSpan").innerHTML = 'Funcionário excluido!';
            $('.modal-backdrop').remove();
            $('#mbSpanFuncionario').modal('show');
        } else {
            //alert('Erro!');
            document.getElementById("labelSpan").innerHTML = 'Erro!';
            $('.modal-backdrop').remove();
            $('#mbSpanFuncionario').modal('show');
          
        }
        table.ajax.reload();
    });
});

jQuery(function () {
    var bkButtons = true;
    $.get("./views/login/loginLiberacao.php", function (verificacao_Acesso) {

        var verificacao_Acesso = JSON.parse(verificacao_Acesso)

        const btEdit = document.getElementById('btEditaFuncionario');
        const btDel = document.getElementById('btExcluiFuncionario');
        btEdit.hidden = !(verificacao_Acesso);
        btDel.hidden = !(verificacao_Acesso);
        bkButtons = verificacao_Acesso;

        /*  const sb = document.querySelector('#selectEmpresas');
          sb.remove(0);
          const json = JSON.parse(dados_empresas);*/
        /* json.data.forEach(function (empresa) {
             let newOption = new Option(empresa[1], empresa[0]);
             sb.add(newOption, undefined);
         });*/
    });

    $.get("./views/empresas/empresas.php", function (dados_empresas) {
        const sb = document.querySelector('#selectEmpresas');
        sb.remove(0);
        const json = JSON.parse(dados_empresas);
        json.data.forEach(function (empresa) {
            let newOption = new Option(empresa[1], empresa[0]);
            sb.add(newOption, undefined);
        });
    });

    $.get("./views/setores/setores.php", function (dados_setores) {
        const sb = document.querySelector('#selectSetores');
        sb.remove(0);
        const json = JSON.parse(dados_setores);
        json.data.forEach(function (setor) {
            let newOption = new Option(setor[1], setor[0]);
            sb.add(newOption, undefined);
        });
    });

    $.get("./views/departamentos/departamentos.php", function (dados_departamentos) {
        const sb = document.querySelector('#selectDepartamento');
        sb.remove(0);
        const json = JSON.parse(dados_departamentos);
        json.data.forEach(function (departamento) {
            let newOption = new Option(departamento[1], departamento[0]);
            sb.add(newOption, undefined);
        });
    });

    $.get("./views/cargos/cargos.php", function (dados_cargos) {
        const sb = document.querySelector('#selectCargo');
        sb.remove(0);
        const json = JSON.parse(dados_cargos);
        json.data.forEach(function (cargo) {
            let newOption = new Option(cargo[1], cargo[0]);
            sb.add(newOption, undefined);
        });
    });

    table = $('#tbFuncionarios').DataTable({
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
            },
            {
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
                            key: 'x',
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
            }, /*, 'colvis'*/
        ],

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
                    if (sbEmp != null) {
                        for (i = 0; i < sbEmp.length; i++) {
                            if (sbEmp.options[i].value == row[3]) {
                                return sbEmp.options[i].text;
                            }
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
                    if (sbSetor != null) {
                        for (i = 0; i < sbSetor.length; i++) {
                            if (sbSetor.options[i].value == row[4]) {
                                return sbSetor.options[i].text;
                            }
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
                    if (sbDep != null) {
                        for (i = 0; i < sbDep.length; i++) {
                            if (sbDep.options[i].value == row[5]) {
                                return sbDep.options[i].text;
                            }
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
                    if (sbDep != null) {
                        for (i = 0; i < sbDep.length; i++) {
                            if (sbDep.options[i].value == row[6]) {
                                return sbDep.options[i].text;
                            }
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

        select: {
            style: 'single'
        },
        responsive: true,
        "processing": true,
        "serverSide": true,
        "ajax": "./views/funcionarios/funcionarios.php",

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

    /*
    setInterval(function () {
        table.ajax.reload();
    }, 5000);
    */

    $('#tbFuncionarios').on('draw.dt', function () {
        const btEdit = document.getElementById('btEditaFuncionario');
        const btDel = document.getElementById('btExcluiFuncionario');

        btEdit.disabled = true;
        btDel.disabled = true;
    });

    $('#tbFuncionarios tbody').on('click', 'tr', function () {
        const btEdit = document.getElementById('btEditaFuncionario');
        const btDel = document.getElementById('btExcluiFuncionario');

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

    $('#cbAtivo').on('change', function () {
        bol = document.getElementById("cbAtivo").checked;
        document.getElementById("cbSupervisor").disabled = !bol;

        if (!bol) {
            document.getElementById("cbSupervisor").checked = bol;
            document.getElementById("edtSenha").hidden = !bol;
        }
    });

    $('#cbSupervisor').on('change', function () {
        document.getElementById("edtSenha").hidden = !document.getElementById("cbSupervisor").checked;
    });

    $('#tbFuncionarios tbody').on('dblclick', 'tr', function () {

        rowdata = table.row(this).data();
        if (bkButtons) $('#btEditaFuncionario').click();


    });
});