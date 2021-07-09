let sigla = 0;
// função chamada quando o usuário aperta em clicar
function calcular(){
    // Lê o valor que o usuário digitou na moeda Local
    let moedaLocal = document.getElementById("moedaLocal").value;

    // Chama a função de cada moeda de acordo com o selecionado pelo usuário
    switch(moedaLocal){
        case 'Dólar americano':
            // coloca a bandeira dos EUA
            document.getElementById("bandeira1").style.backgroundImage = "url('img/estados-unidos-da-america.png')";
            // chama a função
            moedaLocalDolarAmericano();
            break;
        case 'Dólar canadense':
            // coloca a bandeira do Canada
            document.getElementById("bandeira1").style.backgroundImage = "url('img/canada.png')";
            // chama a função
            moedaLocalDolarCanadense();
            break;
        case 'Real brasileiro':
            // coloca a bandeira do Brasil
            document.getElementById("bandeira1").style.backgroundImage = "url('img/brasil.png')";
            // chama a função
            moedaLocalRealBrasileiro();
            break;
        case 'Euro':
            // coloca a bandeira da União Europeia
            document.getElementById("bandeira1").style.backgroundImage = "url('img/uniao-europeia.png')";
            // chama a função
            moedaLocalEuro();
            break;
        case 'Libra esterlina':
            // coloca a bandeira do Reeino Unido
            document.getElementById("bandeira1").style.backgroundImage = "url('img/reino-unido.png')";
            // chama a função
            moedaLocalLibra();
            break;
        case 'Peso argentino':
            // coloca a bandeira da Argentina
            document.getElementById("bandeira1").style.backgroundImage = "url('img/argentina.png')";
            // chama a função
            moedaLocalPesoArgentino();
            break;
    }

    
}

// função   que realiza o cálculo, os valores mudam conforme cada país
function meuCalculo(dolarAmericano,  dolarCanadense, realBrasileiro,moedaPesoArgentino, euro, moedaLibra){
    // le valor selecionado em moeda local
    let moedaLocal = document.getElementById("moedaLocal").value;
    // le valor digitado em montante local
    let montanteLocal = document.getElementById("inputValor1").value;
    // para aceitar quando o usuário digita vírgula
    montanteLocal = montanteLocal.toString().replace(",", ".");
    montanteLocal = Number(montanteLocal);
    // le valor selecionado em moeda pretendida
    let moedaPretendida = document.getElementById("moedaPretendida").value;
    
    // condição para evitar erros de digitação
    if (montanteLocal < 0 || isNaN(montanteLocal) || montanteLocal == ""){
        alert("Digite um número válido!");
    
    }else{
        // faz cálculo de acordo com a moeda pretendida
        switch(moedaPretendida){
        case 'Dólar americano':
            // mostra bandeira do EUA
            document.getElementById("bandeira2").style.backgroundImage = "url('img/estados-unidos-da-america.png')";
            // transforma valor de entrada (com vírgula e sigla)
            document.getElementById("inputValor1").value = `${(montanteLocal * 1).toFixed(2).toString().replace(".", ",")} ${sigla}`;
            // transforma valor de saída (com vírgula e sigla)
            document.getElementById("inputValor2").value = `${(montanteLocal * dolarAmericano).toFixed(2).toString().replace(".", ",")} USD`;
            // label para resultado deixa de ficar cinza
            document.getElementById("inputValor2").removeAttribute("disabled");
            //não deixa clicar no label de resultado
            document.getElementById("inputValor2").setAttribute("Readonly",true);
            break;

        case 'Dólar canadense':
            // mostra bandeira do Canada
            document.getElementById("bandeira2").style.backgroundImage = "url('img/canada.png')";
            // transforma valor de entrada (com vírgula e sigla)
            document.getElementById("inputValor1").value = `${(montanteLocal * 1).toFixed(2).toString().replace(".", ",")} ${sigla}`;
            // transforma valor de saída (com vírgula e sigla)
            document.getElementById("inputValor2").value = `${(montanteLocal * dolarCanadense).toFixed(2).toString().replace(".", ",")} CAD`;
            // label para resultado deixa de ficar cinza
            document.getElementById("inputValor2").removeAttribute("disabled");
             //não deixa clicar no label de resultado
            document.getElementById("inputValor2").setAttribute("Readonly",true);
            break;

        case 'Real brasileiro':
            // mostra bandeira do Brasil
            document.getElementById("bandeira2").style.backgroundImage = "url('img/brasil.png')";
            // transforma valor de entrada (com vírgula e sigla)
            document.getElementById("inputValor1").value = `${(montanteLocal * 1).toFixed(2).toString().replace(".", ",")} ${sigla}`;
            // transforma valor de saída (com vírgula e sigla)
            document.getElementById("inputValor2").value = `${(montanteLocal * realBrasileiro).toFixed(2).toString().replace(".", ",")} BRL`;
            // label para resultado deixa de ficar cinza
            document.getElementById("inputValor2").removeAttribute("disabled");
             //não deixa clicar no label de resultado
            document.getElementById("inputValor2").setAttribute("Readonly",true);
            break;

        case 'Euro':
            // mostra bandeira da União Europeia
            document.getElementById("bandeira2").style.backgroundImage = "url('img/uniao-europeia.png')";
            // transforma valor de entrada (com vírgula e sigla)
            document.getElementById("inputValor1").value = `${(montanteLocal * 1).toFixed(2).toString().replace(".", ",")} ${sigla}`;
            // transforma valor de saída (com vírgula e sigla)
            document.getElementById("inputValor2").value = `${(montanteLocal * euro).toFixed(2).toString().replace(".", ",")} EUR`;
            // label para resultado deixa de ficar cinza
            document.getElementById("inputValor2").removeAttribute("disabled");
             //não deixa clicar no label de resultado
            document.getElementById("inputValor2").setAttribute("Readonly",true);
            break;

        case 'Libra esterlina':
            // mostra bandeira do Reino Unido
            document.getElementById("bandeira2").style.backgroundImage = "url('img/reino-unido.png')";
            // transforma valor de entrada (com vírgula e sigla)
            document.getElementById("inputValor1").value = `${(montanteLocal * 1).toFixed(2).toString().replace(".", ",")} ${sigla}`;
            // transforma valor de saída (com vírgula e sigla)
            document.getElementById("inputValor2").value = `${(montanteLocal * moedaLibra).toFixed(2).toString().replace(".", ",")} GBP`;
            // label para resultado deixa de ficar cinza
            document.getElementById("inputValor2").removeAttribute("disabled");
             //não deixa clicar no label de resultado
            document.getElementById("inputValor2").setAttribute("Readonly",true);
            break;

        case 'Peso argentino':
            // mostra bandeira da Argentina
            document.getElementById("bandeira2").style.backgroundImage = "url('img/argentina.png')";
            // transforma valor de entrada (com vírgula e sigla)
            document.getElementById("inputValor1").value = `${(montanteLocal * 1).toFixed(2).toString().replace(".", ",")} ${sigla}`;
            // transforma valor de saída (com vírgula e sigla)
            document.getElementById("inputValor2").value = `${(montanteLocal * moedaPesoArgentino).toFixed(2).toString().replace(".", ",")} ARS`;
            // label para resultado deixa de ficar cinza
            document.getElementById("inputValor2").removeAttribute("disabled");
             //não deixa clicar no label de resultado
            document.getElementById("inputValor2").setAttribute("Readonly",true);
            break;
        }

        valoresMoedas(moedaLocal, moedaPretendida);
}}

// Envia valores ta cotação atual do Dolar Americano para a função meuCalculo()
function moedaLocalDolarAmericano(){
    sigla = "USD";
    return meuCalculo(1, 1.24, 5.45, 90.83, 0.83, 0.72);

}
    
// Envia valores ta cotação atual do Dolar Canadense para a função meuCalculo()
function moedaLocalDolarCanadense(){
    sigla = "CAD";
    return meuCalculo(0.81, 1, 4.39, 73.17, 0.67, 0.58);
    
}

// Envia valores ta cotação atual do Real Brasileiro para a função meuCalculo()
function moedaLocalRealBrasileiro(){
    sigla = "BRL";
    return meuCalculo(0.18, 0.23, 1, 16.67, 0.15, 0.13);
    
}

// Envia valores ta cotação atual do Euro para a função meuCalculo()
function moedaLocalEuro(){
    sigla = "EUR";
    return meuCalculo(1.21, 1.50 ,6.59 ,109.83 ,1 , 0.87);
    
}

// Envia valores ta cotação atual da Libra para a função meuCalculo()
function moedaLocalLibra(){
    sigla = "GBP";
    return meuCalculo(1.39, 1.72, 7.58, 126.33, 1.15, 1);
    
}

// Envia valores ta cotação atual do Peso Argentino para a função meuCalculo()
function moedaLocalPesoArgentino(){
    sigla = "ARS";
    return meuCalculo(0.011, 0.013, 0.058, 1 ,0.0089 ,0.0077);
    
}

// quando a imagem de troca é apertada, moeda local e pretendida mudam de lugar
function troca(){
    // variável temporária para guardar o valor da moeda local
    let temp = moedaLocal.value;
    //moeda local recebe o valor de moeda pretendida
    document.getElementById("moedaLocal").value = moedaPretendida.value;
    //moeda pretendida recebe o valor da variável temporária
    document.getElementById("moedaPretendida").value = temp;   

    // inverte valores dos montantes
    let temp2 = inputValor1.value;
    document.getElementById("inputValor1").value = inputValor2.value;
    document.getElementById("inputValor2").value = temp2;   
}

// limpa os campos de digitação e resultado a cada nova requisição
function limpar(){
    document.getElementById("inputValor1").value = "";
    document.getElementById("inputValor2").value = "";
    // fica "cinza" sempre que o montante pretendido fica vazio
    document.getElementById("inputValor2").setAttribute("disabled", true);
}

// função para mostrar os valores de conversão e os gráficos de acordo com a moeda local e a pretendida
function valoresMoedas(moedaLocal, moedaPretendida){

    // moeda local == dolar americano
    if (moedaLocal == "Dólar americano" && moedaPretendida == "Dólar americano"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 USD = 1,00 USD";
        document.getElementById('conversao2').innerText = "1 USD = 1,00 USD";
        // limpa a div das imagens de gráfico, retirando a borda e o background (pois não deve ser mostrado imagem quando moeda local == moeda pretendida)
        document.getElementById('grafico').style.backgroundImage = "none";
        document.getElementById('grafico').style.border = "none";
    }

    if (moedaLocal == "Dólar americano" && moedaPretendida == "Dólar canadense"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 USD = 1,24 CAD";
        document.getElementById('conversao2').innerText = "1 CAD = 0,81 USD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/eua-canada.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Dólar americano" && moedaPretendida == "Real brasileiro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 USD = 5,44 BRL";
        document.getElementById('conversao2').innerText = "1 BRL = 0,18 USD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/eua-brasil.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Dólar americano" && moedaPretendida == "Peso argentino"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 USD = 90,67 ARS";
        document.getElementById('conversao2').innerText = "1 ARS = 0,01 USD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/eua-arg.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Dólar americano" && moedaPretendida == "Euro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 USD = 0,83 EUR";
        document.getElementById('conversao2').innerText = "1 EUR = 1,21 USD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/eua-euro.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Dólar americano" && moedaPretendida == "Libra esterlina"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 USD = 0,72 GBP";
        document.getElementById('conversao2').innerText = "1 GBP = 1,39 USD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/eua-libra.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    // moeda local == dolar canadense
    if (moedaLocal == "Dólar canadense" && moedaPretendida == "Dólar americano"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 CAD = 0,81 USD";
        document.getElementById('conversao2').innerText = "1 USD = 1,24 CAD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/can-eua.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Dólar canadense" && moedaPretendida == "Dólar canadense"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 CAD = 1,00 CAD";
        document.getElementById('conversao2').innerText = "1 CAD = 1,00 CAD";
        // limpa a div das imagens de gráfico, retirando a borda e o background (pois não deve ser mostrado imagem quando moeda local == moeda pretendida)
        document.getElementById('grafico').style.backgroundImage = "none";
        document.getElementById('grafico').style.border = "none";
    }

    if (moedaLocal == "Dólar canadense" && moedaPretendida == "Real brasileiro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 CAD = 4,39 BRL";
        document.getElementById('conversao2').innerText = "1 BRL = 0,23 CAD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/can-brasil.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Dólar canadense" && moedaPretendida == "Peso argentino"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 CAD = 73,17 ARS";
        document.getElementById('conversao2').innerText = "1 ARS = 0,01 CAD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/can-arg.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Dólar canadense" && moedaPretendida == "Euro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 CAD = 0,67 EUR";
        document.getElementById('conversao2').innerText = "1 EUR = 1,50 CAD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/can-euro.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Dólar canadense" && moedaPretendida == "Libra esterlina"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 CAD = 0,58 GBP";
        document.getElementById('conversao2').innerText = "1 GBP = 1,72 CAD";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/can-libra.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    // moeda local == real brasileio
    if (moedaLocal == "Real brasileiro" && moedaPretendida == "Dólar americano"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 BRL = 0,18 USD";
        document.getElementById('conversao2').innerText = "1 USD = 5,44 BRL";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/bra-eua.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Real brasileiro" && moedaPretendida == "Dólar canadense"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 BRL = 0,23 CAD";
        document.getElementById('conversao2').innerText = "1 CAD = 4,39 BRL";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/bra-can.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Real brasileiro" && moedaPretendida == "Real brasileiro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 BRL = 1,00 BRL";
        document.getElementById('conversao2').innerText = "1 BRL = 1,00 BRL";
        // limpa a div das imagens de gráfico, retirando a borda e o background (pois não deve ser mostrado imagem quando moeda local == moeda pretendida)
        document.getElementById('grafico').style.backgroundImage = "none";
        document.getElementById('grafico').style.border = "none";
    }

    if (moedaLocal == "Real brasileiro" && moedaPretendida == "Peso argentino"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 BRL = 16,67 ARS";
        document.getElementById('conversao2').innerText = "1 ARS = 0,06 BRL";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/bra-peso.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Real brasileiro" && moedaPretendida == "Euro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 BRL = 0,15 EUR";
        document.getElementById('conversao2').innerText = "1 EUR = 6,57 BRL";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/bra-euro.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Real brasileiro" && moedaPretendida == "Libra esterlina"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 BRL = 0,13 GBP";
        document.getElementById('conversao2').innerText = "1 GBP = 7,56 BRL";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/bra-libra.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }


    // moeda local == peso argentino
    if (moedaLocal == "Peso argentino" && moedaPretendida == "Dólar americano"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 ARS = 0,01 USD";
        document.getElementById('conversao2').innerText = "1 USD = 90,67 ARS";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/arg-eua.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Peso argentino" && moedaPretendida == "Dólar canadense"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 ARS = 0,01 CAD";
        document.getElementById('conversao2').innerText = "1 CAD = 73,17 ARS";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/arg-can.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Peso argentino" && moedaPretendida == "Real brasileiro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 ARS = 0,06 BRL";
        document.getElementById('conversao2').innerText = "1 BRL = 16,67 ARS";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/arg-real.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Peso argentino" && moedaPretendida == "Peso argentino"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 ARS = 1,00 ARS";
        document.getElementById('conversao2').innerText = "1 ARS = 1,00 ARS";
        // limpa a div das imagens de gráfico, retirando a borda e o background (pois não deve ser mostrado imagem quando moeda local == moeda pretendida)
        document.getElementById('grafico').style.backgroundImage = "none";
        document.getElementById('grafico').style.border = "none";
    }

    if (moedaLocal == "Peso argentino" && moedaPretendida == "Euro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "11 ARS = 0,01 EUR";
        document.getElementById('conversao2').innerText = "1 EUR = 109,67 ARS";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/arg-euro.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Peso argentino" && moedaPretendida == "Libra esterlina"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 ARS = 0,01 GBP";
        document.getElementById('conversao2').innerText = "1 GBP = 126,00 ARS";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/arg-libra.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

        //moeda local == euro 
    if (moedaLocal == "Euro" && moedaPretendida == "Dólar americano"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 EUR = 1,21 USD";
        document.getElementById('conversao2').innerText = "1 USD = 0,83 EUR";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/euro-eua.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Euro" && moedaPretendida == "Dólar canadense"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 EUR = 1,50 CAD";
        document.getElementById('conversao2').innerText = "1 CAD = 0,67 EUR";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/euro-can.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Euro" && moedaPretendida == "Real brasileiro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 EUR = 6,57 BRL";
        document.getElementById('conversao2').innerText = "1 BRL = 0,15 EUR";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/euro-real.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Euro" && moedaPretendida == "Peso argentino"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 EUR = 109,50 ARS";
        document.getElementById('conversao2').innerText = "1 ARS = 0,01 EUR";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/euro-peso.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Euro" && moedaPretendida == "Euro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 EUR = 1,00 EUR";
        document.getElementById('conversao2').innerText = "1 EUR = 1,00 EUR";
        // limpa a div das imagens de gráfico, retirando a borda e o background (pois não deve ser mostrado imagem quando moeda local == moeda pretendida)
        document.getElementById('grafico').style.backgroundImage = "none";
        document.getElementById('grafico').style.border = "none";
    }

    if (moedaLocal == "Euro" && moedaPretendida == "Libra esterlina"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 EUR = 0,87 GBP";
        document.getElementById('conversao2').innerText = "1 GBP = 1,15 EUR";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/euro-libra.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    // moeda local == libra
    if (moedaLocal == "Libra esterlina" && moedaPretendida == "Dólar americano"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 GBP = 1,39 USD";
        document.getElementById('conversao2').innerText = "1 USD = 0,72 GBP";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/libra-eua.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Libra esterlina" && moedaPretendida == "Dólar canadense"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 GBP = 1,72 CAD";
        document.getElementById('conversao2').innerText = "1 CAD = 0,58 GBP";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/libra-can.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Libra esterlina" && moedaPretendida == "Real brasileiro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 GBP = 7,56 BRL";
        document.getElementById('conversao2').innerText = "1 BRL = 0,13 GBP";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/libra-real.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Libra esterlina" && moedaPretendida == "Peso argentino"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 GBP = 126,00 ARS";
        document.getElementById('conversao2').innerText = "1 ARS = 0,01 GBP";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/libra-arg.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Libra esterlina" && moedaPretendida == "Euro"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 GBP = 1,15 EUR";
        document.getElementById('conversao2').innerText = "1 EUR = 0,87 GBP";
        //adiciona imagem de gráfico correspondente e retorna a borda
        document.getElementById('grafico').style.backgroundImage = "url('img/libra-euro.png')";
        document.getElementById('grafico').style.border = "0.1rem solid rgb(56, 54, 54)";
    }

    if (moedaLocal == "Libra esterlina" && moedaPretendida == "Libra esterlina"){
        // adiciona texto em <p>
        document.getElementById('conversao1').innerText = "1 GBP = 1,00 GBP";
        document.getElementById('conversao2').innerText = "1 GBP = 1,00 GBP";
        // limpa a div das imagens de gráfico, retirando a borda e o background (pois não deve ser mostrado imagem quando moeda local == moeda pretendida)
        document.getElementById('grafico').style.backgroundImage = "none";
        document.getElementById('grafico').style.border = "none";
}}
