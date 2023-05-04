//Percorra o array imprimindo todos os valores contidos nele com a função console.log()//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

//Some todos os valores contidos no array e imprima o resultado.//
let soma =0;
for (let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}
console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array//

let media = 0;

media = soma / (numbers.length);
console.log(media);

//Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20//
if (media > 20){
    console.log("O valor da média aritmética é maior que 20");
}
else {
    console.log("O valor da média aritmética é menor ou igual a 20");
}

//Utilizando for, descubra o maior valor contido no array e imprima-o//
let maiorValor = 0;

for (let contador = 0; contador < numbers.length; contador += 1){
    if (numbers[contador] > maiorValor){
        maiorValor = numbers[contador];
    }
}
console.log(maiorValor);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”//
let numerosImpar = 0;
for (let n = 0; n < numbers.length; n += 1){
    if((numbers[n] % 2) == 1){
        numerosImpar += 1;
    }
}
if (numerosImpar > 0){
    console.log(numerosImpar);
}
else {
    console.log("Nenhum valor ímpar encontrado")
}