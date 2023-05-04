//crie um algoritmo que imprima na tela o fatorial de 10.//
let num = 10;
let fatoracao = 1;

for (let i = num; i > 0; i -= 1){
    fatoracao *= i; ;
    console.log(`${i} = ${fatoracao}`);
}

/*Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.*/
let word = 'tryber';
let palavraInvertida = "";

for (let index = 0; index < word.length; index += 1){
    palavraInvertida += word[word.length - 1 - index]; 
}
console.log(palavraInvertida);
