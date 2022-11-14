function Hello() {
    alert("Olá, eu sou o iRock!\n\nPara começar, clique em mim");
}


function touchRock() {

    userName = prompt("Digite seu nome:");
    if (userName) {

        alert("Olá " + userName + "!\n\nEstá preparado?");
    }
    mostrarTabelaTemas();
    document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
    setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 5000);
}

function mostrarTabelaTemas() {
    document.getElementById('materia').style.display = '';
    document.getElementById('questionario').style.display = 'none';
    document.getElementById('Tema').innerText = userName + ", selecione um Tema:"
}

function selacaoMateria() {
    document.getElementById('materia').style.display = 'none';
    document.getElementById('questionario').style.display = '';

}


function mostrarPergunta() {
    document.getElementById("NumeroPergunta").innerHTML = "Questão 1";


}



function resizeRock() {
    document.getElementById("iRock").style.height = (document.body.clientHeight - 100) * 0.4 + "px";
    console.log();
}