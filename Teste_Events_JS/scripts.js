function touchRock() {
    document.getElementById("irock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
    alert("Você deixou o IRock feliz!");
}

function touchRocksad() {
    document.getElementById("irock2").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_sad.png";
    alert("Você deixou o IRock triste!");
}

function touchRockreset() {
    document.getElementById("irock2").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png";
    document.getElementById("irock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png";

}

function ReturnFormIMC() {
    var userName = document.getElementById("nome").value;
    var userBith = document.getElementById("birth").value;
    var userSex = document.getElementsByClassName("sex");
    var userHeight = parseInt(document.getElementById("height").value);
    var userWeight = parseFloat(document.getElementById("weight").value);
    var IMC = (userHeight * userHeight * 0.1) / userWeight;

    if (userName) {
        alert("Olá " + userName + "! Seu IMC é de aproximadamente " + IMC.toFixed(2));
    }


}