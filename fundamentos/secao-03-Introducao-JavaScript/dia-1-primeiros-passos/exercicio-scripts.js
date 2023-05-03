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
