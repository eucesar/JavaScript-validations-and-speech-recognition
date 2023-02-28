/*anexo o elemento chute q esta um div no html - a mensagem q vai escrever*/ 
const elementoChute = document.getElementById('chute')

/*começo API*/
/*quando eu abri o site essa API começar a funcionar - API*/
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

/* td q eu falar vai aparecer no console - na parte de transcript*/ 
recognition.addEventListener('result', onSpeak)

/*rescrevo a função onSpeak*/
function onSpeak(e) {
    /*
    e.results (lista) - resultados do oq eu falei
    transcript - palvra ou numero q foi dita - em pt-br
    Duas array 0 = pq o transcript está dentro de dua array 0 antes de abrir o transcript
    */
    chute = e.results[0][0].transcript
    /*crio uma fucntion de exibir chute para q anexe a msm função quando falo e digito*/
    exibeChuteNaTela(chute)
    /*criar outra funcution quando falar - onSpeak - mas verifica se é vdd o valor - xrio outro arquivo JS para isso*/
    verificaSeOChutePossuiUmValorValido(chute)
}
/*FIM - API*/ 

/*Crio no HTML a função de chute em cima*/
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}

/*recoemçar quando restartar o codigo*/
recognition.addEventListener('end', () => recognition.start())

/**/ 