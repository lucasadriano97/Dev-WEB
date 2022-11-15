var Resposta = false;
var Materia = 0;
var Questao = 1;
var Ponto =0;

function Hello() {
    alert("Olá, eu sou o iRock!\n\nPara começar, clique em mim");
}



function touchRock() {
    document.getElementById('clique').style.display = 'none';
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


function resposta(r){
    document.getElementById('ponto').style.display = '';
    Resposta = r
    console.log(r);

        if (Materia ==1, Questao == 1, r==true){
            alert("Parabéns!");
            document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
            setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000);
            Questao ++;
            Ponto ++;
            document.getElementById('ponto').innerText="Pontos =" + Ponto ;
            
        }
        if (Materia ==1, Questao == 1, r==false){
            alert("Tente novamente");
            document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
            setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 4000)
            Questao --;
            }
         console.log(Materia,Questao) 
        }

function matematica() {
    Materia = 1;
    if (Materia == 1, Questao <= 1) {
        document.getElementById('NumeroPergunta').innerText = "Questão 1";
        document.getElementById('Pergunta').innerHTML = "A soma dos quadrados dos catetos de um triângulo é igual ao quadrado de sua hipotenusa.";

        }
        if (Materia == 1, Questao == 2) {
            document.getElementById('NumeroPergunta').innerText = "Questão " + Questao;
            document.getElementById('Pergunta').innerHTML = "O quadrado da hipotenusa é igual a diferença dos quadrados dos catetos.";

        }
    }


    function resizeRock() {
        document.getElementById("iRock").style.height = (document.body.clientHeight - 100) * 0.4 + "px";
       
    }

