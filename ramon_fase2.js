var responder = prompt('1- Conversa com eles e tenta fazer os drinks com calma/ 2- Tenta fazer tudo ao mesmo tempo')
function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==1){
    mostraresultado(`
    <div class="comando">
    <p> Os clientes entenderam e vocês conversaram muito. No final saiu ótimas bebidas e você seguiu a sua noite</P>
    <p>O bar tava quase fechando, você estava cansado e aceitou o último pedido, mas quando olhou o abacaxi parecia estranho então você resolve: </p>
    <ul>
    <ol>1- Falar que não ia conseguir fazer a caipirinha de abacaxi e tinha de morango</ol>
    <ol>2- Prova o abacaxi antes de tentar fazer</ol>
    </ul>
    <a href="./ramon_ganhou_ou_nao.html">ESCOLHER</a>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p>Você tentou fazer tudo ao mesmo tempo e acabou cortando sério o seu dedo.</P>
    <p> Sua noite acabou aqui!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
}