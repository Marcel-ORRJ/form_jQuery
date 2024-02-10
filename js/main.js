$(document).ready(function() {
    $('#form input').change(function() {
    let totalInputs = $('#form input').length
    let filledInputs = $('#form input').filter(function() {
        return $(this).val() != ''
    }).length

    let progress = (filledInputs / totalInputs) * 100
    $('#barra-progresso').css('width', progress + '%')
    })

    $('#form-cpf').mask('000.000.000-00')
    $('#form-cep').mask('00000-000')
    $('#form-telefone').mask('(00) 000000000')

    $('#form-telefone').click(function() {
        $('#form-telefone').mask('(00) 000000000')
    })
    
    $('#form-telefone').blur(function() {
        let valTel = ($('#form-telefone').val().length < 14) ? '(00) 0000-0000' : '(00) 00000-0000'
        if (valTel != '') $('#form-telefone').mask(valTel)
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 13
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: 'Insira um nome válido',
            email:'Insira um E-mail válido',
            telefone:'Insira um número de telefone válido',
            cpf: 'Insira um CPF válido',
            endereco:'Insira um endereço válido',
            cep:'Insira um CEP válido'
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        },
        submitHandler: function() {
            alert('Formulário enviado com sucesso')
        }
    })
})