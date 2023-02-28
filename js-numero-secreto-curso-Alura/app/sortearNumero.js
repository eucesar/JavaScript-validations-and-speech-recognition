const menorValor = 1 
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio() /*crio uma funcitron + const*/ 

/*
uso a funcition e dou um return dps
Math.random() => numero aleatorio
paseInt => transformar me um número inteiro, n deixar quebrado 0.1 = q está entre 1 a 100
*/ 
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1) /**/ 
}

console.log('Número Secreto:', numeroSecreto)

/*alterar o menorvalor no html se eu alterar o menor valor aqui no js*/ 
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

/*alterar o maiorvalor no html se eu alterar o menor valor aqui no js*/ 
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

/**/ 