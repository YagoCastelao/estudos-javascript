function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //Abaixo ao invés de criamos uma imagem pelo HTML na parte <div id='res'>, vamos criar a imagem pelo JS e dar um ID 'foto' para ela.
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center' //Isto serve para centralizar a resposta do formulàrio, ao invés de fazer pelo CSS!
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        //Este comando acima serve para adicionar a imagem abaixo do texto de Detecta se è homem ou mulher e a idade!
    }
}