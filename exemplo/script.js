let entrada = document.querySelector('input')
let saida = document.querySelector('#respostaAno')


function cliquei() {
    let ano = Number(entrada.value) // inserimos uma variável dentro da função, pois se colocarmos fora o js não entende que o valor da entrada mudou ao clicar no botão, já que dentro do html está value='0'.
    saida.textContent = ano
}
