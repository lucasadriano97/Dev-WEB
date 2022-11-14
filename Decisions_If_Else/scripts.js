var Resposta = false;
var Materia;
var Questao = 1;

function Hello() {
    alert("Olá, eu sou o iRock!\n\nPara começar, clique em mim");
}

function touchRock() {

    userName = prompt("Digite seu nome:");
    if (userName) {

        alert("Olá, " + userName + "!\n\nEstá preparado?");
    }
    mostrarTabelaTemas();

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
    console.log(r)

    if (Materia = "Matematica", Questao = 1, r == true) {
        alert("Parabéns!");
        console.log(Questao, Materia)
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 3000);
        Questao = 2;
    }
    if (Materia = "Matematica", Questao = 1, r == false)
        alert("Tente novamente");
    document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
    setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 3000)
    console.log(Questao, Materia)
}



function matematica() {
    Materia = "Matematica";
    Questao;

    if (Materia == "Matematica", Questao == 1) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "A soma dos quadrados dos catetos de um triângulo é igual ao quadrado de sua hipotenusa.";
        Questao = 2;
        //Verdadeiro
    }
    if (Materia == "Matematica", Questao == 2) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "O quadrado da hipotenusa é igual a diferença dos quadrados dos catetos.";
        //Falso
    }
    console.log(Questao, Materia)
}


function resizeRock() {
    document.getElementById("iRock").style.height = (document.body.clientHeight - 100) * 0.4 + "px";
    console.log();
}