
//formulário

// validação CPF
function VerificaCPF() {
    strCpf = document.getElementById('cpf').value;
    var soma = 0;
    var resto;
    if (strCpf == "00000000000" || strCpf.length != 11) {
        // alert("CPF Inválido");
        return false;
    }
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(strCpf.substring(9, 10))) {
        // alert("CPF Válido");
        return false;
    }
    soma = 0;
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(strCpf.substring(10, 11))) {
        // alert("CPF Inválido");
        return false;
    }
    // alert("CPF VÁLIDO");
    return true;
    }


// Data de nascimento - Não pode ter idade negativa e mais de 130 anos chamar um alert se invalido
var idadeAtual=0
function idade() {
    diaNasc = document.getElementById("diaNasc").value
    mesNasc = document.getElementById("mesNasc").value
    anoNasc = document.getElementById("anoNasc").value

// Função para definir idade do usuário
    var dataAtual = new Date(2021, 05, 05),
        anoAtual = dataAtual.getFullYear()
    mesAtual = dataAtual.getMonth() + 1
    diaAtual = dataAtual.getDate()

    idadeAtual = anoAtual - anoNasc

    if (mesAtual < mesNasc || mesAtual == mesNasc && diaAtual < diaNasc) {
        idadeAtual--;
    }

    if (idadeAtual <= 0 || idadeAtual > 130) {
        alert("Idade informada é inválida")
    }
}



//  Sexo (Masculino , Feminino )  

function validaSexo() {
    sexo = document.getElementById("sexo").value
    if (sexo == "feminino") {
        gestante.style.display = "block";
    } else if (sexo == "masculino") {
        gestante.style.display = "none";
    }
}

// função autocompletar com profissões
var availableTags =[];
$( function () {
     availableTags = [
        "Segurança Pública",
        "Serviço Penitenciário",
        "Educação",
        "Profissionais de Saúde",
        "Metroviário e Ferroviário",
        "Motoristas e cobradores ônibus",
        "Outros"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
  var somar=0;
  function soma(){
      somar +=1;
  }

 //  Exibir os campos dentro de uma div informando em qual fase o usuário está contemplado ou não para vacinação
var dataVacinacao = "" 
var array = [];
function vacinacao() {
    var profissao = document.getElementById("tags").value;
    var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
      
    for (let i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].value);
      }
      
    if (array.indexOf("comorbiVacina")!= -1) {
        dataVacinacao= "vacinação iniciada em 10/05/21";
        array=[];
 
 } else {
        if (idadeAtual >= 90) {
            dataVacinacao = "vacinação iniciada em 8/02/21";
        } else if (idadeAtual >= 80 && idadeAtual < 90) {
            dataVacinacao = "vacinação iniciada em 12/02/21";
        } else if (idadeAtual >= 70 && idadeAtual < 80) {
            dataVacinacao = "vacinação iniciada em 03/03/21";
        } else if (idadeAtual >= 60 && idadeAtual < 70) {
            dataVacinacao = "vacinação iniciada em 26/03/21";
        } else {
            if (profissao == availableTags[0] || profissao == availableTags[1]) {
                dataVacinacao = "vacinação iniciada em 5/04/21";
            } else if (profissao == availableTags[2]) {
                dataVacinacao = "vacinação iniciada em 10/04/21";
            } else if (profissao == availableTags[3]) {
                dataVacinacao = "vacinação iniciada em 17/01/21";
            } else if (profissao == availableTags[4]) {
                dataVacinacao = "vacinação iniciada em 11/05/21";
            } else if (profissao == availableTags[5]) {
                dataVacinacao = "vacinação iniciada em 18/05/21";
            } else {
                dataVacinacao = "sua vacinação ainda não foi iniciada";
            }
        }
    }
}


// Função mensagem ao final da página com fase da vacinação
function mensagemFim() { 
    var nome = document.getElementById("nome").value;
    vacinacao();
    document.getElementById("msg").innerHTML = `${nome} ${dataVacinacao}. `
}