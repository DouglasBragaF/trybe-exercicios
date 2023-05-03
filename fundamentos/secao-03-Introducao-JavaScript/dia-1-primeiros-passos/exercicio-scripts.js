let a = 10;
let b = 20;
let c = 30;

console.log("Exercicio-1");

let soma = a + b;
    console.log(soma);
let subtracao = a - b;
    console.log(subtracao);
let multiplicacao = a*b
    console.log(multiplicacao);
let divisao = a/b
    console.log(divisao);
let modulo = a%b
    console.log(modulo);

console.log("Exercicio-2");
if (a>b){
    console.log(a);
}
else {
    console.log(b);
}

console.log("Exercicio-3");
if (a>b && a>c){
    console.log(a);
}
else if (b>a && b>c){
    console.log(b);
}
else{
    console.log(c);
}

console.log("Exercicio-4");
if (c >0){
    console.log("positive");
}
else if (c<0){
    console.log("negative");
}
else{
    console.log("zero");
}

console.log("Exercicio-5");
let triangulo = Boolean;
if (a + b + c == 180){
    triangulo = true;
}
else{
    triangulo = false
}
console.log(triangulo);

console.log("Exercicio-6");
let peca = "RAINHA";
switch (peca.toLowerCase()) {
    case "rei":
        console.log(peca + " horizontal, vertical e diagonais, uma casa por vez.");
        break;
    case "rainha":
        console.log(peca + " thorizontal, vertical e diagonais, quantas casas por vez.");
        break;
    case "bispo":
        console.log(peca + " linha reta: diagonais, quantas casas por vez.");
        break;
    case "cavalo":
        console.log(peca + " dois continuos e um lateral, um lance por vez.");
        break;
    case "torre":
        console.log(peca + " linha reta: horizontal e vertical, quantas casas por vez.");
        break;
    case "peão":
        console.log(peca + " linha reta: vertical (captura em diagonal), uma casa por vez.");
        break;
    default:
        console.log(peca + "Está peça não existe! Peças: rei; rainha; bispo; cavalo; torre e peão.");
}

console.log("Exercicio-7");
let nota = "";
let porcentagem = 85;

if (porcentagem >= 90){
    nota = "A";
}
else if (porcentagem >= 80){
    nota = "B";
}
else if (porcentagem >= 70){
    nota = "C";
}
else if (porcentagem >= 60){
    nota = "D";
}
else if (porcentagem >= 50){
    nota = "E";
}
else if (porcentagem > 50){
    nota = "F";
}
else if (porcentagem > 100 || porcentagem < 0){
    console.log("ERRO! O percentual deve ser de 0 a 100.");
}
console.log(nota);

console.log("Exercicio-8");
let num1 = 1;
let num2 = 2;
let num3 = 3;
let par = false;

if (num1 / 2 == 0 || num2 / 2 == 0 || num3 / 2 == 0){
    par = true;
}
console.log(par);

console.log("Exercicio-9");
let numa = 1;
let numb = 2;
let numc = 3;
let impar = false;

if (numa / 2 == 1 || numb / 2 == 1 || numc / 2 == 1){
    impar = true;
}
console.log(impar);

console.log("Exercicio-10");
let valorVenda = 100;
let custo = 50;
let lucro = 0;

if (valorVenda > 0 && custo > 0){
    lucro = (valorVenda - (custo + (custo * 0.2)));
    console.log("Valor total do lucro com mil produtos vendidades: $" + (lucro * 1000) );
}

console.log("Exercicio-11");
let salarioBruto = 3000;
let salarioBase = 0;
let salarioLiquido = 0;
let aliquotaINSS = 0;
let aliquotaIR = 0;
let parcelaIR = 0;

if (salarioBruto <= 1556.94){
    aliquotaINSS = 0.08;
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    aliquotaINSS = 0.09;
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    aliquotaINSS = 0.11;
}
else if (salarioBruto > 5189.82){
    aliquotaINSS = 570.88;
    salarioBase = salarioBruto - aliquotaINSS;
}
else if (salarioBruto < 0){
    console.log("O número precisa ser positivo!");
}
salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
if (salarioBase <= 1903.98){
    aliquotaIR = 0;
}
else if (salarioBase > 1903.98 && salarioBase <=2826.65){
    aliquotaIR = 0.075;
    parcelaIR = 142.8;
}
else if (salarioBase > 2826.65 && salarioBase <=3751.05){
    aliquotaIR = 0.15;
    parcelaIR = 354.8;
}
else if (salarioBase > 3751.05 && salarioBase <=4664.68){
    aliquotaIR = 0.225;
    parcelaIR = 869.36;
}
salarioLiquido = salarioBase - ((salarioBase * aliquotaIR)-parcelaIR);
console.log("Salário Bruto: R$" + salarioBruto + "  Salário Líquido: R$" + salarioLiquido);
