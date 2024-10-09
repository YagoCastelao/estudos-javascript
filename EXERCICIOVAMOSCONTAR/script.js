function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML= 'Impossível Contar!'
        window.alert('[ERRO] faltam dados!')
        
}   else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
        for(var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449} ` 
        } 
    } else {
        //Contagem Regressiva
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449} `
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}
}


/*Primeiro Passo: Vamos criar a function contar();
  Segundo Passo: Criar 3 variáveis, umas para casa ID que criamos nos inputs da primeira DIV;
  Terceiro Passo: Vamos criar um If para controlar se faltam dados em algum dos campos do formulário;
  Quarto Passo: criar outra variável res para linkarmos com a DIV res no html;
  Quinto Passo: Vamos começar a preencher o else(se não), onde criaremos o res.innerHTML assim definindo para que quando todos as casas do formulàrio estejam preenchidas(Inicio,Fim e Passo) ele mudará a frase Preparando a contagem para Contando:
  Sexto Passo: vamos criar mais 3 variáveis para definirmos que os valores colocador em cada campo, sejam números
  Sétimo Passo: Definimos as condicoes e implementamos a contagem crescente e decrescente e os emojis, com o código inner.HTML*/
  
  
  