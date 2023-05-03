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