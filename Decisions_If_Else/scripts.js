var Resposta = false;

function Hello() {
    alert("Olá, eu sou o iRock!\n\nPara começar, clique em mim");
}

function touchRock() {

    userName = prompt("Digite seu nome:");
    if (userName) {

        alert("Olá, " + userName + "!\n\nEstá preparado?");
    }
    mostrarTabelaTemas();
    document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
    setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 5000);
}

function mostrarTabelaTemas() {
    document.getElementById('TabelaMateria').style.display = '';
    document.getElementById('questionario').style.display = 'none';
    document.getElementById('Tema').innerText = userName + ", selecione um Tema:"
}

function selacaoMateria() {
    document.getElementById('TabelaMateria').style.display = 'none';
    document.getElementById('questionario').style.display = '';


}


function resposta(r) {
    Resposta = r
}




function matematica() {

    document.getElementById('NumeroPergunta').innerText = "Questão 1";
    document.getElementById('Pergunta').innerHTML = "A soma dos quadrados dos catetos de um triângulo é igual ao quadrado de sua hipotenusa.";


}


function resizeRock() {
    document.getElementById("iRock").style.height = (document.body.clientHeight - 100) * 0.4 + "px";
    console.log();
}