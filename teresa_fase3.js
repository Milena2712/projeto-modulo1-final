var responder = prompt('1- "Ai foi que o barraco desabou" - Jorge Aragão/ 2- "Não deixe o samba morrer" - Alcione')

function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==2){
    mostraresultado(`
    <div class="comando">
    <p> Você ganhou o jogo e a noite!</P>
    <p>A galera saiu falando que foi o melhor samba da vida e seu dia foi incrível</p>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p>Tinha tudo para ser um final ótimo, mas você cantou essa o cara do cavaquinho lembrou do ex e desafinou</P>
    <p>Não tem como encerrar o samba bem com a última música sendo um desatre né? Quem sabe amanhã!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
}