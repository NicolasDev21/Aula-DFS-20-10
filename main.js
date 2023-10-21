// function minhaFuncao(){
//     console.log(`Testando`);
// }

// minhaFuncao()

// const minhaFuncaoEmVariavel = function (){
//     console.log(`Função em variável`);
// }

// minhaFuncaoEmVariavel();


// function funcaoComParametro(txt){
//     console.log(`Imprimindo: ${txt}`);
// }

// funcaoComParametro(`Salve`);
// funcaoComParametro(`Só de boa ?`);


// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;


// function soma (n1, n2){
//     return n1+n2;
// }

// const resultado = soma(a, b); 
// console.log(resultado);
// const resultado1 = soma(c, b); 
// console.log(resultado1);
// const resultado2 = soma(d, c); 
// console.log(resultado2);




// Escreva um função que realize a subtração de dois numeros

const a = 5;
const b = 7;
const c = 10;
const d = 27;

function subtracaoNum (n1, n2){
    return n1-n2;
}

const resultado = subtracaoNum(a, b); 
console.log(resultado);
const resultado1 = subtracaoNum(c, b); 
console.log(resultado1);
const resultado2 = subtracaoNum(d, c); 
console.log(resultado2);




function subtracao (k1, k2){
    return k1 - k2;
}

const result = subtracao(c, b);
console.log(result)

// Arrow function - Atribui valor 
const testeArrow = () => {
    console.log(`Sou uma Arrow Function`);
}

testeArrow()

const parOuImpar = (n) => {
    if(n % 2 == 0){
        console.log(`PAR`);
        return
    }
    console.log(`IMPAR`);
}

parOuImpar(5);
parOuImpar(4);
parOuImpar(100);


// Raiz Quadrada

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));
console.log(raizQuadrada(3));
console.log(raizQuadrada(13));



// MULTIPLICAÇÃO

const multiplicacao1 = function (n,m){
    if (m === undefined){
        return n*2
    } else{
        return n * m
    }
} 

console.log(multiplicacao1(4,20));
console.log(multiplicacao1(4));