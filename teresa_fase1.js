var responder = prompt('1- Começa cantando aquele samba que dói no coração da galera?2- Canta “alguém me avisou” para esquentar o público')
function mostraresultado(opcao){
    document.write(opcao);
}

if(responder==1){
    mostraresultado(`
    <div class="comando">
    <p>Você cantou aquele que dói no coração da galera e o samba virou um enterro. O pessoal começou a chorar e a noite acabou ali mesmo:</P>
    <p> Lembre- se amanhã é outro dia, hoje não deu!</p>
    <a href="#">REINICIAR</a>
    </div>`);
} else{
    mostraresultado(`
    <div class="comando">
    <p>A galera gostou da escolha, mas a noite continua. Você cantou um samba animado e foi muita gente para dentro da roda, você:</P>
    <ul>
    <ol>1- Tenta organizar a roda</ol>
    <ol>2- Continua cantando e não quer nem saber</ol>
    </ul>
    <a href="./teresa3.html">ESCOLHER</a>
    </div>`);
}