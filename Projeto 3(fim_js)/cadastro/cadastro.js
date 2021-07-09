//função nome em letra maiuscula
function maiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
    }

// fim função nome
//função validar cpf

function valida(){
				if(valida_cpf(document.getElementById('cpf').value))
					alert('CPF Válido');
				else
					alert('CPF Inválido');
			}
			
			function valida_cpf(cpf){
				  var numeros, digitos, soma, i, resultado, digitos_iguais;
				  digitos_iguais = 1;
				  if (cpf.length < 11)
						return false;
				  for (i = 0; i < cpf.length - 1; i++)
						if (cpf.charAt(i) != cpf.charAt(i + 1))
							  {
							  digitos_iguais = 0;
							  break;
							  }
				  if (!digitos_iguais)
						{
						numeros = cpf.substring(0,9);
						digitos = cpf.substring(9);
						soma = 0;
						for (i = 10; i > 1; i--)
							  soma += numeros.charAt(10 - i) * i;
						resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
						if (resultado != digitos.charAt(0))
							  return false;
						numeros = cpf.substring(0,10);
						soma = 0;
						for (i = 11; i > 1; i--)
							  soma += numeros.charAt(11 - i) * i;
						resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
						if (resultado != digitos.charAt(1))
							  return false;
						return true;
						}
				  else
						return false;
			}


// fim função CPF
// função validar email

 
function checarEmail(){
if( document.forms[0].email.value=="" 
   || document.forms[0].email.value.indexOf('@')==-1 
     || document.forms[0].email.value.indexOf('.')==-1 )
	{
	   alert( "Por favor, informe um E-MAIL válido!" );
	   return false;
	}
}

// fim função EMAIL

// Função que calcula a idade e verifica se ela é válida


function calculaIdade(){
    var data = document.getElementById("nascimento").value; 
    var parts =data.split('-');
    data = new Date(parts[0], parts[1]-1, parts[2]); 

    // Pegue a data de hoje
    var hoje = new Date();

    var nasc  = data;
    var idade = hoje.getFullYear() - nasc.getFullYear();
    console.log(idade);
    var m = hoje.getMonth() - nasc.getMonth();
    console.log(m);
	var dia=hoje.getDate() - nasc.getDate();
	console.log(dia);

    if(m<0){
		idade=idade-1;
	} else if(m>0){
		idade=idade;
	}
    else {
        	if(dia<0){
        		idade=idade-1;
        		} else{
        			idade=idade;
        		}
        	}
        
    if(idade < 0 || idade>130 ){
       alert("Data Inválida.");
    }
 
    if(idade >= 0 && idade <= 130){
       alert("Data Válida.");
	 }

    return idade;
 
}

function funcao_sexo() {
    var sexo = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < sexo.length; i++) {
      if (sexo[i].checked) {
        txt = txt + sexo[i].value + " ";
      }
    }
    return txt;
  }

// Informando as infos do usuário

function user(){
    nome=document.getElementById("nome").value;
    email=document.getElementById("email").value;
    cpf=document.getElementById("cpf").value;
    age=calculaIdade();
    sexo=funcao_sexo();

    alert("Olá "+nome+", seu login é "+email+", você tem "+age+" anos, você se define como uma pessoa do sexo "+sexo+" e pode usar o CPF "+cpf+" como senha.");
  
}



