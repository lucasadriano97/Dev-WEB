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

    if (document.getElementById("nome").value == ""){
    document.getElementById("Resultado").innerHTML ="Digite seu Nome Completo"}
    
    else if (document.getElementById("height").value == "" ||
    isNaN(document.getElementById("height").value)){
    document.getElementById("Resultado").innerHTML ="Verifique o campo Altura";}

    else if (document.getElementById("weight").value == "" ||
    isNaN(document.getElementById("weight").value)){
    document.getElementById("Resultado").innerHTML ="Verifique o campo Peso";}
   
    else {
        console.log("Olá " + userName + "! Seu IMC é de aproximadamente " + IMC.toFixed(2));
        document.getElementById("Resultado").innerHTML = "Olá " + userName + "! Seu IMC é de aproximadamente " + IMC.toFixed(2);
    }


}