jQuery(function () {
    $('#btOpenFuncionarios').click(function () {
        $('#page_data').load('./view/funcionarios/funcionarios.html');
    });

    $('#btOpenHorarios').click(function () {
        $('#page_data').load('./view/horarios/horarios.html');
    });

    $('#btOpenEmpresas').click(function () {
        $('#page_data').load('./view/empresas/empresas.html');
    });

    $('#btOpenDepartamentos').click(function () {
        $('#page_data').load('./view/departamentos/departamentos.html');
    });

    $('#btOpenSetores').click(function () {
        $('#page_data').load('./view/setores/setores.html');
    });

    $('#btOpenCargos').click(function () {
        $('#page_data').load('./view/cargos/cargos.html');
    });

    $('#btOpenUsuarios').click(function () {
        $('#page_data').load('./view/usuarios.html');
    });

    $('#btOpenPrincipal').click(function () {
        $('#page_data').load('./view/principal.html');
    });
});