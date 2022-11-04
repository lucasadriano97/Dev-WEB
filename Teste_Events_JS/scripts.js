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

function ReturFormIMC() {
    var userName = document.getElementById("nome").value;
    var userBith = document.getElementById("birth").value;
    var userSex = document.getElementsByClassName("sex");
    var userHeight = parseInt(document.getElementById("height").value);
    var userWeight = parseFloat(getElementById("weight").value);

    if (userName) {
        alert("Olá" + userName + "!");
    }
}