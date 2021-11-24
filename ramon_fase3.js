var responder = prompt('1- Falar que não ia conseguir fazer a caipirinha de abacaxi e tinha de morango/ 2- Prova o abacaxi antes de tentar fazer')
function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==1){
    mostraresultado(`
    <div class="comando">
    <p> Os clientes aceitaram a de morango e ficaram apaixonados. Todo mundo saiu gritando que você era o melhor do RJ</P>
    <p>Seu dia de trabalho foi um sucesso, parabéns!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p>Você tava tão cansado que esqueceu que era alérgico a abacaxi, infelizmente a sua noite terminou no hospital</P>
    <p> Sua noite acabou aqui!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
}