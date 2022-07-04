"use strict";
//Tipos Avançados
// 1 - Arrays
let numbers = [1, 3, 5, 7, 9];
numbers.push(11);
console.log(numbers);
//numbers.push('Teste'); ----- erro de tipo (string para um array de numberos)
let nomes = ['Michael', 'Jhonny', 'Steven'];
nomes.push('Danno');
//nomes.push(1);   ----- erro, idem ao anterior , numero para array de string.
console.log(...nomes);
console.log(nomes);
// 2- Outra forma de Array
const numeros = [10, 22];
numeros.push(55);
console.log(numeros);
console.log(numeros[2]);
// 3 - Any
const arr1 = [1, 2, 3, 'Nome qulquer', true, [], { nome: 'Johnny' }];
console.log(arr1);
arr1.push({ valor: '1234' });
console.log(typeof (arr1[3]));
//  4 - Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
soma(10, 4);
// 5 - Retorno Função tipado
function greeting(nome) {
    return (`Ola: ${nome}`);
}
console.log(greeting('Faraday'));
const greetingmessage = greeting('Michael');
console.log(greetingmessage);
//console.log(greeting(1));  ------ erro de tipo
// 6 - Funções Anônimas
setTimeout(function () {
    const sal = 3000;
    //console.log(sal);
}, 3000);
/// 7 - Objetos
function passCoordinates(coord) {
    console.log('x: ' + coord.x);
    console.log('y: ' + coord.y);
}
const objCoordinates = { x: 100, y: 55.6 };
passCoordinates(objCoordinates);
passCoordinates({ x: 45, y: 23.4 });
// 8 - Parametros Opcionais
function showNumbers(n1, n2, n3) {
    console.log('N1: ' + n1);
    console.log('N2: ' + n2);
    if (n3) {
        console.log('N3: ' + n3);
    }
}
showNumbers(1, 4);
// 9 - Validação de parâmetros opcionais
function advancedGreeting(firstname, lastname) {
    if (lastname !== undefined) {
        return (`Olá ${firstname} ${lastname}, tudo bem?`);
    }
    return (`Olá ${firstname}, tudo bem?`);
}
console.log(advancedGreeting('John', 'Smith'));
console.log(advancedGreeting('Michael'));
// 10 - Union Type
function showBalance(balance) {
    return balance > 0 ? balance : 'Sem fundos';
}
let bal = showBalance(-1);
console.log('Saldo: ' + bal);
bal = showBalance(100);
console.log('Saldo: ' + bal);
const misturado = [3, 4, 5, 'Teste', true];
// 11 - Avancando em Union Types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado !';
    }
    return ('A função do usuário é: ' + role);
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showID(id) {
    return `O ID é: ${id}`;
}
console.log(showID('FDGh67'));
console.log(showID(33442));
function showCoords(ponto) {
    console.log(`Coordenadas: 
    X: ${ponto.x}
    Y: ${ponto.y}
    Z: ${ponto.z}
    `);
}
const objPto = { x: 10.8, y: 40, z: 60 };
showCoords(objPto);
const somePerson = { name: 'Michael', age: 33 };
console.log(somePerson);
/* type PersonType = {  //------- dá erro de identificador duplicado
    age: number;
} */
// 15 - Literal Type
let test = 'testando';
console.log(test);
function getAcevo(nomeAcervo) {
    return 'Acervo de: ' + nomeAcervo;
}
console.log(getAcevo('Atirador'));
//console.log(getAcevo('Civil')); //Erro de tipo not assignable
// 16 - Non null asertion operator - operador para identificar "objetos" do DOM que podem ainda não ter sido carregados.
const p = document.getElementById("txtteste");
console.log(p.innerHTML);
// Se não colocar o ! , o compilador identifica que o elemento pode ser nulo, pois o compilador não o identificou ainda.
// 17 - BigInt
let n;
//n = 1; // not assignable to bigint
n = 100000n; // da erro se não mudar o arquivo de configuração para o target de ES2020
console.log(n + 'do tipo: ' + typeof n);
// 18 - Symbol
let symbolA = Symbol('abc');
let symbolB = Symbol('abc');
console.log('Comparacao SymbolA == SymbolB :' + (symbolA == symbolB));
console.log('Comparacao SymbolA === SymbolB :' + (symbolA === symbolB));
