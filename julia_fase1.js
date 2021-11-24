var responder = prompt('1- Você pedi ajuda dos seus colegas para fazer a mudança/ 2- Resolve fazer sozinha mesmo, afinal é só algumas mesas e o bar acabou de abrir')
function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==1){
    mostraresultado(`
    <div class="comando">
    <p> Seus amigos te ajudaram e o espaço ficou ótimo! O bar foi começando a ficar cheio.</P>
    <p>Quando estava super lotado, saiu um pedido que estava demorando mas você tinha muita coisa na mão, sua primeira ação é:</p>
    <ul>
    <ol>1- Leva primeiro as coisas que estava na mão e depois pega o outro pedido</ol>
    <ol>2- Sai correndo cheio de coisa na mão para pegar o pedido logo</ol>
    </ul>
    <a href="./julia3.html">ESCOLHER</a>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p> Fazer tudo sozinha não foi uma boa, a mesa era pesada e você deu um jeito na coluna.</P>
    <p> Sua noite acabou aqui Ju!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
}