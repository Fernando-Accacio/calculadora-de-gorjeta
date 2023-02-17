let conta = 0
let gorjeta = 0
let numeroPessoas = 0
let botaoAtual = 0

function receberConta() {
     conta = Number(document.querySelector('#bill-input').value)

     validarDados()
}

function receberNumeroPessoas() {
     numeroPessoas = Number(document.querySelector('#people-input').value)
    
     validarDados()
}

function receberPorcentagem(numero) {
    if (botaoAtual !== 0){
        botaoAtual.classList.remove("button-selected")
    }

    if (numero === 0) {
        Number(porcentagem = document.querySelector("#tip-input").value) 
        validarDados()
        return
    }
    
    gorjeta = numero
    
    botaoAtual = document.querySelector(`input[value = "${numero}%"] `)
    botaoAtual.classList.add("button-selected")
    document.querySelector("#tip-input").value = ""

    validarDados()
}

function validarDados() {
    if (conta !== 0 && gorjeta !== 0 && numeroPessoas !== 0){

    calcularTotais()
    return
    }
    
    return console.log('ainda falta informações')
}


function calcularTotais() {
    const gorjetaPorPessoa = (conta * (gorjeta / 100)) / numeroPessoas 

    const paragrafoGorjeta = document.querySelector("#tip-amount__result").innerText = `${gorjetaPorPessoa.toFixed(2)}`

    const totalPessoa = (conta / numeroPessoas) + gorjetaPorPessoa

    const paragrafoTotal = document.querySelector("#total__result")
    paragrafoTotal.innerText = `${totalPessoa.toFixed(2)}`

    console.log('calculei')
}

function reset() {
     conta = 0
    document.querySelector('#bill-input').value = ""

    gorjeta = 0
    if (botaoAtual !== 0){
        botaoAtual.classList.remove("button-selected")
    }
    document.querySelector("#tip-input").value = ""
    botaoAtual = 0

    numeroPessoas = 0
    document.querySelector
    ('#people-input').value = ""

    const paragrafoGorjeta = document.querySelector("#tip-amount__result").innerText = "$0.00"

    const paragrafoTotal = document.querySelector("#total__result")
    paragrafoTotal.innerText = "$0.00"
}