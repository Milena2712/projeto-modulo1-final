var responder = prompt('1- Leva primeiro as coisas que estava na mão e depois pega o outro pedido/ 2- Sai correndo cheio de coisa na mão para pegar o pedido logo')
function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==1){
    mostraresultado(`
    <div class="comando">
    <p> Ufa! ainda bem que você fez tudo com calma um outro cliente tinha deixado um drink cair e o chão estava molhado, se livrou heim?</P>
    <p>O bar tava quase fechando e tinha um único grupo que parecia não querer sair dali nunca mais, você resolve:</p>
    <ul>
    <ol>1- Usar o senso de humor e conversar com eles na boa </ol>
    <ol>2- Fica estressada demais com as atitudes do grupo e se irrita com eles</ol>
    </ul>
    <a href="./julia_ganhou_ou_perdeu.html">ESCOLHER</a>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p>Um cliente tinha deixado um drink caiu e você na correria acabou caindo no chão.</P>
    <p> Sua noite acabou aqui!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
}