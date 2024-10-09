let num = [5, 8, 9, 3]
num.sort() /*serve para colocar o vetor em ordem crescente*/
num[4] = 10 /*serve para adicionar um novo elemento no array no indíce específico*/
console.log(num) /*Serve para ver o vetor todo */
console.log(`O vetor têm ${num.length} elementos`) /* num.length serve para ver quantos elementos temos no nosso Array*/
console.log(`O primeiro valor do vetor é ${num[0]}`) /*num[] usamos para ver o valor de um elemento específico, assim como exemplo ao lado*/

let pos = num.indexOf(4)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`) /* num.indexOf() serve para buscar um valor de elemnto dentro do Array, e o Javascript ira buscar o valor e te mostrará qual o indice*/
}
