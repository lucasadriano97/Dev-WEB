function touchRock() {
    var userName = prompt("Qual o seu nome?", "Insira seu nome:");
    if (userName) {
        alert("Prazer em conhecê-lo " + userName + "!");
        document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
    }

}