/* Termine o código que avisa ao usuário para digitar o primeiro um número maior que 0 e, em seguida, use este número como uma contagem regressiva de um rolo de filme antigo (4,3,2,1, Rolando!). Além disso, confirme se o número é maior que 0 antes da contagem regressiva.

var count = prompt ("Digite um numero maior uqe 0:", "10");*/

var count = prompt("Digite um numero maior uqe 0:", "10");

if (count > 0) {
    for (var x = count; x > 0; x--) {
        alert(" O filme vai começar em: " + x);
        alert("Rolando!")
    }


} else {
    alert("O número informado não é maior que 0!")
}