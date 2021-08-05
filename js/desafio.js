let valorHora = document.querySelector('#valor-hora')
let projetoHora = document.querySelector('#horas-projeto')
let texto = document.querySelector('#resposta')

alert('{Liana e monitoras, muito obrigada. Aprendi o porquê minha função não funcionava}')

function calcular() {
   let valor = Number(valorHora.value)
   let projeto = Number(projetoHora.value)
    texto.textContent =`Você receberá R$ ${(valor*projeto).toFixed(2).replace('.', ',')} reais`
}