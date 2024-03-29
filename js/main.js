$(document).ready(function() {


    $('#campo-telefone').mask('(00) 00000-0000',)
    $('#cpf').mask('000.000.000-00',)
    $('#cep').mask('00000-000',)


    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: false,
            },
            cep: {
                required: false,
            },
        },
        submitHandler: function(form){
            console.log(form)
            alert(`Cadastro completo!`)
            return 1;

        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
    }
    })
})