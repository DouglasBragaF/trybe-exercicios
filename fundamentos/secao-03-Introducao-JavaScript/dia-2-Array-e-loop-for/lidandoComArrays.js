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