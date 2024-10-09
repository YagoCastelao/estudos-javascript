/*function soma(n1, n2){
    return n1 + n2
}

console.log(soma(2, 5))

No exemplo de cima temos a estrutura normal*/

function soma(n1=0, n2=0){ 
    return n1 + n2
}

console.log(soma(2))

//Neste exemplo vemos que podemos usar parametros adicionais no Javascript, ou seja, colocamos que ambos os parametros são 0, para que se caso eu nao defina o valor de algum na chamada, não de resultado NaN(notanumber)