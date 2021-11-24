var responder = prompt('1- Usar o senso de humor e conversar com eles na boa/ 2- Fica estressada demais com as atitudes do grupo e se irrita com eles')
function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==1){
    mostraresultado(`
    <div class="comando">
    <p> Seu senso de humor é o melhor e os clientes começaram a rir muito e entenderam que estava na hora de ir</P>
    <p>Finalmente acabou, seu dia de trabalho foi um sucesso, parabéns!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p>Todo mundo ficou mais nervoso do que deveria e a noite terminou em confusão.</P>
    <p> Seu jogo termina aqui, você perdeu!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
}