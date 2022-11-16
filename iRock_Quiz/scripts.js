var Resposta = 3;
var Materia = 0;
var Questao = 1;
var Ponto = 0;

function Hello() {
    alert("Olá, eu sou o iRock!\n\nBem-Vindo ao meu QUIZ!\n\nPara começar, clique em mim");
}

function touchRock() {

    userName = prompt("Digite seu nome:");
    if (userName) {

        alert("Olá, " + userName + "!\n\nEstá preparado?");
    }
    mostrarTabelaTemas();
    Reset();

}

function mostrarTabelaTemas() {
    document.getElementById('linhaplacar').style.display = '';
    document.getElementById('linhaplacar').innerText = 'Pontos = 0'
    document.getElementById('TabelaMateria').style.display = '';
    document.getElementById('questionario').style.display = 'none';
    document.getElementById('Tema').innerText = userName + ", selecione um Tema:"
}

function selacaoMateria() {
    document.getElementById('TabelaMateria').style.display = 'none';
    document.getElementById('questionario').style.display = '';
}

function respostaMat(r) {
    Resposta = r;
    console.log(Materia, Questao, r);

    if (Materia == 1 && Questao == 1 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;

    }
    if (Materia == 1 && Questao == 1 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;
    }
    console.log(Materia, Questao, r);


    if (Materia == 1 && Questao == 2 && r == 2) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    console.log(r, Materia, Questao);
    if (Materia == 1 && Questao == 2 && r == 1) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;

    }
    if (Materia == 1 && Questao == 3 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;

    }
    if (Materia == 1 && Questao == 3 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        r = 3;
    }
    if (Materia == 1 && Questao == 4 && r == 2) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    console.log(r, Materia, Questao);
    if (Materia == 1 && Questao == 4 && r == 1) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        r = 3;

    }
    if (Materia == 1 && Questao == 5 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;

    }
    if (Materia == 1 && Questao == 5 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;
    }
    if (Materia == 1 && Questao == 6) {
        document.getElementById('botao').style.display = 'none';
        document.getElementById('botaoEnd').style.display = '';
        document.getElementById('Home').style.display = '';
        document.getElementById('Home').innerText = "Voltar ao Menu";


    }
}

function respostaPort(r) {
    Resposta = r;
    if (Materia == 2 && Questao == 1 && r == 2) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;
    }
    if (Materia == 2 && Questao == 1 && r == 1) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;
    }
    console.log(Materia, Questao, r);


    if (Materia == 2 && Questao == 2 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    console.log(r, Materia, Questao);
    if (Materia == 2 && Questao == 2 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;

    }
    if (Materia == 2 && Questao == 3 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;
    }
    if (Materia == 2 && Questao == 3 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        r = 3;
    }

    if (Materia == 2 && Questao == 4 && r == 2) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    console.log(r, Materia, Questao);
    if (Materia == 2 && Questao == 4 && r == 1) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        r = 3;

    }

    if (Materia == 2 && Questao == 5 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;

    }
    if (Materia == 2 && Questao == 5 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;
    }


    if (Materia == 2 && Questao == 6) {
        document.getElementById('botao').style.display = 'none';
        document.getElementById('botaoEnd').style.display = '';
        document.getElementById('Home').style.display = '';
        document.getElementById('Home').innerText = "Voltar ao Menu";


    }
}

function respostaGeo(r) {
    Resposta = r;

    if (Materia == 3 && Questao == 1 && r == 1) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;
    }
    console.log(Materia, Questao, r);
    if (Materia == 3 && Questao == 1 && r == 2) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    if (Materia == 3 && Questao == 2 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    console.log(r, Materia, Questao);
    if (Materia == 3 && Questao == 2 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;

    }
    if (Materia == 3 && Questao == 3 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;
    }
    if (Materia == 3 && Questao == 3 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        r = 3;
    }

    if (Materia == 3 && Questao == 4 && r == 2) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    console.log(r, Materia, Questao);
    if (Materia == 3 && Questao == 4 && r == 1) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        r = 3;

    }

    if (Materia == 3 && Questao == 5 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;

    }
    if (Materia == 3 && Questao == 5 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 2700);
        r = 3;
        Questao++;
    }


    if (Materia == 3 && Questao == 6) {
        document.getElementById('botao').style.display = 'none';
        document.getElementById('botaoEnd').style.display = '';
        document.getElementById('Home').style.display = '';
        document.getElementById('Home').innerText = "Voltar ao Menu";


    }

}

function respostaCie(r) {
    Resposta = r;
    console.log(Materia, Questao, r);

    if (Materia == 4 && Questao == 1 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;

    }
    if (Materia == 4 && Questao == 1 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        r = 3;
        Questao++;
    }
    console.log(Materia, Questao, r);


    if (Materia == 4 && Questao == 2 && r == 2) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    console.log(r, Materia, Questao);
    if (Materia == 4 && Questao == 2 && r == 1) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        r = 3;
        Questao++;

    }
    if (Materia == 4 && Questao == 3 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;

    }
    if (Materia == 4 && Questao == 3 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        Questao++;
        r = 3;
    }
    if (Materia == 4 && Questao == 4 && r == 2) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        r = 3;
    }
    console.log(r, Materia, Questao);
    if (Materia == 4 && Questao == 4 && r == 1) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        Questao++;
        r = 3;

    }
    if (Materia == 4 && Questao == 5 && r == 1) {
        alert("Parabéns!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        Questao++;
        Ponto++;
        document.getElementById('linhaplacar').innerText = "Pontos =" + Ponto;
        console.log(Materia, Questao, r);
        r = 3;

    }
    if (Materia == 4 && Questao == 5 && r == 2) {
        alert("Tente novamente");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
        setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
        r = 3;
        Questao++;
    }
    if (Materia == 4 && Questao == 6) {
        document.getElementById('botao').style.display = 'none';
        document.getElementById('botaoEnd').style.display = '';
        document.getElementById('Home').style.display = '';
        document.getElementById('Home').innerText = "Voltar ao Menu";


    }
}

function matematica() {
    document.getElementById('botao').innerHTML = "<td><img id='verdadeiro' style='margin-left: 2cm; margin-right: 2cm;' onclick='respostaMat(1);matematica();' class='buttom' src='https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Decisions_If_Else/Imagens/botao_verde.png'><br>Verdadeiro</td><td><img id='falso' style='margin-right: 2cm; margin-left: 2cm;' class='buttom'onclick='respostaMat(2);matematica();' src='https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Decisions_If_Else/Imagens/botao_vermelho.png'><br>Falso</td>";

    Materia = 1;
    if (Materia == 1, Questao <= 1) {
        document.getElementById('NumeroPergunta').innerText = "Questão 1";
        document.getElementById('Pergunta').innerHTML = "A soma dos quadrados dos catetos de um triângulo é igual ao quadrado de sua hipotenusa.";

    }
    if (Materia == 1, Questao == 2) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "O quadrado da hipotenusa é igual a diferença dos quadrados dos catetos.";

    }
    if (Materia == 1, Questao == 3) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "A soma dos algarismos do número resultante de 25² é igual a 13.";

    }
    if (Materia == 1, Questao == 4) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "5² multiplicado pleo dobro de 5 resulta em um número ímpar.";

    }
    if (Materia == 1, Questao == 5) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "O produto dos algarismos da potência de 9 ao cubo é um número divisível por 3.";

    }
    if (Materia == 1, Questao == 6) {
        document.getElementById('NumeroPergunta').innerText = "Parabéns " + userName;
        document.getElementById('Pergunta').innerHTML = "Sua pontuação foi: " + Ponto;
        document.getElementsById('botao').style.display = 'none';

    }


}

function portugues() {
    document.getElementById('botao').innerHTML = "<td><img id='verdadeiro' style='margin-left: 2cm; margin-right: 2cm;' onclick='respostaPort(1);portugues();' class='buttom' src='https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Decisions_If_Else/Imagens/botao_verde.png'><br>Verdadeiro</td><td><img id='falso' style='margin-right: 2cm; margin-left: 2cm;' class='buttom'onclick='respostaPort(2);portugues();' src='https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Decisions_If_Else/Imagens/botao_vermelho.png'><br>Falso</td>";

    Materia = 2;
    if (Materia == 2, Questao <= 1) {
        document.getElementById('NumeroPergunta').innerText = "Questão 1";
        document.getElementById('Pergunta').innerHTML = "Sinônimo é um advérbio que muda o sentido da frase.";

    }
    if (Materia == 2, Questao == 2) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = " Há um erro de concordância na frase “A proteção da criança e do adolescente em situação de rua configuram um dever do Estado”.";
        //verdadeiro

    }
    if (Materia == 2, Questao == 3) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "Todo 's' colocado entre duas vogais fica com som de 'z', como as palavras 'visualizar', 'análise', 'pesadelo' e 'atrasado'.";
        //Verdadeiro
    }
    if (Materia == 2, Questao == 4) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = " Aquele 'hereje' sempre põe 'empecilho' porque é muito 'pretencioso'.";
        //falso

    }
    if (Materia == 2, Questao == 5) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "Na frase 'entreguei às flores à sua mãe', o uso da crase é facultativo.";
        //verdadeiro

    }
    if (Materia == 2, Questao == 6) {
        document.getElementById('NumeroPergunta').innerText = "Parabéns " + userName;
        document.getElementById('Pergunta').innerHTML = "Sua pontuação foi: " + Ponto;
        document.getElementsById('botao').style.display = 'none';

    }
}

function geografia() {
    Materia = 3;
    document.getElementById('botao').innerHTML = "<td><img id='verdadeiro' style='margin-left: 2cm; margin-right: 2cm;' onclick='respostaGeo(1);geografia();' class='buttom' src='https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Decisions_If_Else/Imagens/botao_verde.png'><br>Verdadeiro</td><td><img id='falso' style='margin-right: 2cm; margin-left: 2cm;' class='buttom'onclick='respostaGeo(2);geografia();' src='https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Decisions_If_Else/Imagens/botao_vermelho.png'><br>Falso</td>";

    if (Materia == 3, Questao <= 1) {
        document.getElementById('NumeroPergunta').innerText = "Questão 1";
        document.getElementById('Pergunta').innerHTML = "Tonga é um país da África.";

    }
    if (Materia == 3, Questao == 2) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "No ponto mais próximo, os Estados Unidos e a Rússia estão a menos de 4 quilômetros de distância.";
        //Verdadeiro

    }
    if (Materia == 3, Questao == 3) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "A Islândia abriga a capital mais ao norte de qualquer Estado soberano.";
        //verdadeiro

    }
    if (Materia == 3, Questao == 4) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "As linhas de latitude estão exatamente a 111 quilômetros de distância uma da outra.";
        //falso


    }
    if (Materia == 3, Questao == 5) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "O Monte Everest poderia caber dentro da Fossa das Marianas, o ponto mais profundo dos oceanos.";
        //verdadeiro


    }
    if (Materia == 3, Questao == 6) {
        document.getElementById('NumeroPergunta').innerText = "Parabéns " + userName;
        document.getElementById('Pergunta').innerHTML = "Sua pontuação foi: " + Ponto;
        document.getElementsById('botao').style.display = 'none';

    }
}

function ciencia() {
    Materia = 4;
    document.getElementById('botao').innerHTML = "<td><img id='verdadeiro' style='margin-left: 2cm; margin-right: 2cm;' onclick='respostaCie(1);ciencia();' class='buttom' src='https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Decisions_If_Else/Imagens/botao_verde.png'><br>Verdadeiro</td><td><img id='falso' style='margin-right: 2cm; margin-left: 2cm;' class='buttom'onclick='respostaCie(2);ciencia();' src='https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Decisions_If_Else/Imagens/botao_vermelho.png'><br>Falso</td>";

    if (Materia == 4, Questao <= 1) {
        document.getElementById('NumeroPergunta').innerText = "Questão 1";
        document.getElementById('Pergunta').innerHTML = "A biodiversidade consiste na variabilidade da fauna, flora, micro-organismos e ecossistemas.";

    }
    if (Materia == 4, Questao == 2) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "A biodiversidade engloba a variabilidade de espécies da fauna, flora, micro-organismos e ecossistemas de um determinado local, sendo, portanto, um conceito que inclui todos os elementos que constituem a vida.";
        //Verdadeiro

    }
    if (Materia == 4, Questao == 3) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "O Brasil é o país que abriga a maior variedade de espécies animais e vegetais do planeta. Estima-se que 15% da biodiversidade mundial esteja no Brasil.";
        //verdadeiro

    }
    if (Materia == 4, Questao == 4) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "A retirada de uma espécie de seu habitat natural irá alterar a cadeia alimentar, pois esse animal tem uma função específica nesse processo, não sendo substituível.";
        //falso


    }
    if (Materia == 4, Questao == 5) {
        document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
        document.getElementById('Pergunta').innerHTML = "Por receberem maior incidência de raios solares, possuir água-doce em abundância e clima estável, as florestas tropicais são locais mais propícios para a manutenção, adaptação e reprodução da vida. Estima-se que cerca de 90% da biodiversidade mundial esteja nas florestas tropicais.";
        //verdadeiro


    }
    if (Materia == 4, Questao == 6) {
        document.getElementById('NumeroPergunta').innerText = "Parabéns " + userName;
        document.getElementById('Pergunta').innerHTML = "Sua pontuação foi: " + Ponto;
        document.getElementsById('botao').style.display = 'none';

    }
}

function Reset() {
    Resposta = 3;
    Materia = 0;
    Questao = 1;
    Ponto = 0;
    document.getElementById('botao').style.display = '';
    document.getElementById('botaoEnd').style.display = 'none';
    document.getElementById('Home').style.display = 'none';
}