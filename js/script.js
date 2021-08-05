let inputSalario = document.querySelector('#ganho-mes')
let inputHora = document.querySelector('#horas-dia')
let inputResposta = document.querySelector('#resposta')

function calcularValorHora() {
    let salario = Number(inputSalario.value)
    let horas = Number(inputHora.value)
    let salarioHora = salario/horas
    let horaMes = salarioHora/22
    inputResposta.textContent = `R$ ${(horaMes).toFixed(2).replace('.', ',')}`
}