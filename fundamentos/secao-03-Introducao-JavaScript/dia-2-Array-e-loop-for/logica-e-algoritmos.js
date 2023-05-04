//crie um algoritmo que imprima na tela o fatorial de 10.//
let num = 10;
let fatoracao = 1;

for (i = num; i > 0; i -= 1){
    fatoracao *= i; ;
    console.log(`${i} = ${fatoracao}`);
}