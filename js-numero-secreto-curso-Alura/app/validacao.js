function verificaSeOChutePossuiUmValorValido(chute) {
    /*trasformar esse valor em numero inteiro*/
    const numero = +chute

    /*Se n for um numero vai ser valor invalido - olhar para funciton - 1° if = se o numero for errado*/
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    /*colocou um valor mt grande ou mt pequeno - 2°if = se o numero for diferentes dos pedidos*/
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    /*acertou o numero*/ /*botão jgoar dnv*/ 
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    
    /*se o numero é menor com base do numero q colocou*/ 
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    /*se o numero é maior com base do numero q colocou*/ 
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

/*vai retornar o valor q eu coloco - sendo invalido - apenas crirei esse function para definir o numero invalido*/ 
function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

/*se o valor for maior ou menor vai aparecer um afrase*/ 
function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

/*quando a pessoa acabar, ligar o reconhecimento de voz dnv - quando eu apertar o botão*/
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

/**/ 