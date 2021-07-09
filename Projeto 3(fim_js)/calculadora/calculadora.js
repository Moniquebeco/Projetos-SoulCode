// Função que concatena as coisas digitadas

function concatena(valor){
    document.getElementById("result_simples").value +=valor;
}

function limparTela(){
    document.getElementById("result_simples").value="";
}

function apagar(){
    var aux=document.getElementById("result_simples").value;
    if(aux.length>0){
        aux= aux.substring(0,aux.length-1);
        document.getElementById("result_simples").value=aux;
    }
}


// Calculando o result_simples

function resolve(){
    var expressao=document.getElementById("result_simples").value;
    var aux=eval(expressao);
    document.getElementById("result_simples").value=aux;
}

// Colocando os parênteses

y=0;
function par(){
    if(y==0){
        document.getElementById("result_simples").value += "(";
        y=1;
    } else if(y=1){
        document.getElementById("result_simples").value += ")";
        y=0;
    }
}


// ------------------------------------------------------
// JavaScript Calculadora cientifica
// ------------------------------------------------------

function concatena2(valor){
    document.getElementById("result").value +=valor;
}

// Função das operações da calculadora científica

// function operacao(valor){
//     document.getElementById("result").value=valor+document.getElementById("result").value+")";
// }

function operacao(x){
    switch(x){
        case 'Math.sqrt(':
            document.getElementById("result").value=Math.sqrt(document.getElementById("result").value);
            break;      
    }
}

function limparTela2(){
    document.getElementById("result").value="";
}

function apagar2(){
    var aux=document.getElementById("result").value;
    if(aux.length>0){
        aux= aux.substring(0,aux.length-1);
        document.getElementById("result").value=aux;
    }
}


// Calculando o resultado

function resolve2(){
    var expressao=document.getElementById("result").value;
    var aux=eval(expressao);
    document.getElementById("result").value=aux;
}

// Colocando os parênteses

x=0;
function par2(){
    if(x==0){
        document.getElementById("result").value += "(";
        x=1;
    } else if(x=1){
        document.getElementById("result").value += ")";
        x=0;
    }
}

// Desabilitar

function usar_simples(){
    var num_c=document.getElementsByClassName("btn_c").length;
    var num_s=document.getElementsByClassName("btn_s").length;

    for(i=0;i<=num_c-1;i++){
     var teste_c=document.getElementsByClassName("btn_c")[i];
     teste_c.disabled=true;
    }  

    for(i=0;i<=num_s-1;i++){
        var teste_s=document.getElementsByClassName("btn_s")[i];
        teste_s.disabled=false;
       }  
}

function usar_cientifica(){
    var num_c=document.getElementsByClassName("btn_c").length;
    var num_s=document.getElementsByClassName("btn_s").length;
    for(i=0;i<=num_c-1;i++){
     var teste_c=document.getElementsByClassName("btn_c")[i];
     teste_c.disabled=false;
    }  

    for(i=0;i<=num_s-1;i++){
        var teste_s=document.getElementsByClassName("btn_s")[i];
        teste_s.disabled=true;
       }  
}

