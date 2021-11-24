var responder = prompt('1- Tenta organizar/ 2- Continua cantando e não quer nem saber')

function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==1){
    mostraresultado(`
    <div class="comando">
    <p> Essa foi sua melhor escolha, não queira saber o que aconteceria caso você não tivesse organizado</P>
    <p> A noite passou voando e agora você precisa escolher a música que vai encerrar:</p>
    <ul>
    <ol>1- "Ai foi que o barraco desabou" - Jorge Aragão</ol>
    <ol>2- "Não deixe o samba morrer" - Alcione</ol>
    </ul>
    <a href="./teresa_ganhou_ou_nao.html">ESCOLHER</a>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p>A galera ficou muito animada, você não se importou e quando se deu conta a confusão já estava armada.</P>
    <p>O segurança teve que botar a galera para fora e seu show terminou!</p>
    <a href="./index.html">REINICIAR</a>
    </div>`);
}