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
    var userHeight = parseFloat(document.getElementById("height").value) / 100;
    var userWeight = parseFloat(document.getElementById("weight").value);
    var IMC = userWeight / (userHeight * userHeight);

//  Validação dos campos digitados:
    if (document.getElementById("nome").value == ""){
    document.getElementById("Resultado").innerHTML ="<p class='error'>Digite seu Nome Completo</p>";}
    
    else if (document.getElementById("height").value == "" ||
    isNaN(document.getElementById("height").value)){
    document.getElementById("Resultado").innerHTML ="<p class='error'>Verifique o campo Altura</p>";}

    else if (document.getElementById("weight").value == "" ||
    isNaN(document.getElementById("weight").value)){
    document.getElementById("Resultado").innerHTML ="<p class='error'>Verifique o campo Peso.</p>";
    alert("Em caso de casa decimal, use o PONTO invés de VÍRGULA")}

// Caso estiver certo, o resultado é exibido:
    else {
        console.log("Olá " + userName + "! Seu IMC é de aproximadamente " + IMC.toFixed(2));
        document.getElementById("Resultado").innerHTML = "Olá " + userName + "! Seu IMC é de aproximadamente " + IMC.toFixed(2);
    }


}