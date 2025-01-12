let valores = [8, 1, 7, 4, 2, 9]

/*MANEIRA 1

console.log(valores) Maneira de mostrar o vetor sem formatação

-----------------------------------------------------------------------------------------------------*/

/*MANEIRA 2

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

Desta maneira acima posso mostrar de 1 em 1 sem formatção
---------------------------------------------------------------------------------------------------------*/

/*MANEIRA 3

for(let pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

Desta maneira acima usamos a sintaxe normal do for para mostrar o Vetor(Array) de forma formatada 

----------------------------------------------------------------------------------------------------------*/
/*MANEIRA 4 E esta é a mais atualizada*/
for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
