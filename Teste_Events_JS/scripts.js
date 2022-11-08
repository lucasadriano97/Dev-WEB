/*function setCookie(name, value, days) {
    var validade = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        validade = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + validade + "; path=/";
}

function getCookie(name) {

    var nameCookie = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.chartAt(0) == '') c = c.substring(l, c.length);
        if (c.indexOf(nameCookie) == 0) return c.substring(nameCookie.length, c.lenght);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}*/


function Hello() {
    /*userName = getCookie("test_username");
    if (userName) {
        alert("Bem-vindo de volta " + userName + "!");
    } else {*/
    alert("Bem-vindo ao meu Menu de Testes em Javascript!");
    //}
}

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
    //setCookie("test_username", userName, 5 * 365);

    var userBith = document.getElementById("birth").value;
    var userSex = document.getElementsByClassName("sex");
    var userHeight = parseFloat(document.getElementById("height").value) / 100;
    var userWeight = parseFloat(document.getElementById("weight").value);
    var IMC = userWeight / (userHeight * userHeight);

    //  Validação dos campos digitados:
    if (document.getElementById("nome").value == "") {
        document.getElementById("Resultado ").innerHTML = "<p class='error'>Digite seu Nome Completo</p>";
    } else if (document.getElementById("height").value == "" || isNaN(document.getElementById("height").value)) {
        document.getElementById("Resultado ").innerHTML = "<p class='error'>Verifique o campo Altura</p>";
    } else if (document.getElementById("weight").value == "" || isNaN(document.getElementById("weight").value)) {
        document.getElementById("Resultado ").innerHTML = "<p class='error'>Verifique o campo Peso.</p>";
        alert("Em caso de casa decimal, use o PONTO invés de VÍRGULA")
    }

    // Caso estiver certo, o resultado é exibido:
    else {
        console.log("Olá " + userName + "! Seu IMC é de aproximadamente " + IMC.toFixed(2));
        document.getElementById("Resultado ").innerHTML = "Olá " + userName + "! Seu IMC é de aproximadamente " + IMC.toFixed(2);

    }
}