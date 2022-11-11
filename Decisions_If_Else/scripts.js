function setCookie(name, value, days) {
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
        console.log(i);
        var c = cookies[i];
        if (c.charAt(0) == '') c = c.substring(i, c.length);
        if (c.indexOf(nameCookie) == 0) return c.substring(nameCookie.length, c.lenght);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}




function Hello() {
    userName = getCookie("irock_username");
    // O nome do usuário será lido a partir do cookie e armazenado na variável userName
    if (userName)
        alert("Olá " + userName + ", senti sua falta!");
    else
        alert("Olá, eu sou o iRock!");
}


function touchRock() {
    if (userName) {
        alert("Agradeço pelo carinho " + userName + "!");
        //o if no ínicio serve para verificar se já temos um userName armazenado
    } else {
        userName = prompt("Digite seu nome:");
        if (userName) {

            alert("Prazer em conhecê-lo " + userName + "!");
            setCookie("irock_username", userName, 5 * 365);
            //Assim que for digitado um nome, será armazenado no cookie irock_username e vinculado a variável Username. O período é de 5 anos (5*365)
        }
    }
    document.getElementById("iRock").src = "https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock_happy.png";
    setTimeout("document.getElementById('iRock').src = 'https://raw.githubusercontent.com/lucasadriano97/Dev-WEB/main/Projeto_IRock/Imagem/irock.png'", 5000);
}



function resizeRock() {
    document.getElementById("iRock").style.height = (document.body.clientHeight - 100) * 0.6 + "px";
    console.log();
}