function touchRock() {
    var userName = promt("Qual o seu nome?", "Insira seu nome:");
    if (userName) {
        alert("Prazer em conhecê-lo " + userName + "!");
        document.getElementById(iRock).src = "irock_happy.png";
    }

}