var responder = prompt('1- Fazer aquela caipirinha clássica para não errar com o primeiro cliente/ 2- Tenta inventar um drink na hora e impressionar o cliente')
function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==1){
    mostraresultado(`
    <div class="comando">
    <p> A caipirinha foi um sucesso! Automaticamente todo o resto do bar tava pedindo, não tem como errar com clássico né?</P>
    <p>A noite continua, chega dois clientes ao mesmo tempo e ambos com muita pressa, você:</p>
    <ul>
    <ol>1- Conversa com eles e tenta fazer os drinks com calma</ol>
    <ol>2- Tenta fazer tudo ao mesmo tempo</ol>
    </ul>
    <a href="./ramon3.html">ESCOLHER</a>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p>Você não tava preparado, tentar inovar no primeiro drink foi furada e o gosto ficou péssimo, o cliente saiu falando para todo mundo</P>
    <p> Sua noite acabou aqui!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
}