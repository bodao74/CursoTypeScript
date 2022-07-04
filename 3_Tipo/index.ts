//Tipos Avançados
// 1 - Arrays

let numbers: number[] = [1, 3, 5, 7, 9];
numbers.push(11);
console.log(numbers);
//numbers.push('Teste'); ----- erro de tipo (string para um array de numberos)

let nomes: string[] = ['Michael', 'Jhonny', 'Steven'];
nomes.push('Danno');
//nomes.push(1);   ----- erro, idem ao anterior , numero para array de string.
console.log(...nomes);
console.log(nomes);


// 2- Outra forma de Array

const numeros: Array<number> = [10, 22];
numeros.push(55);
console.log(numeros);
console.log(numeros[2]);

// 3 - Any

const arr1: any = [1, 2, 3, 'Nome qualquer', true, [], { nome: 'Johnny' }];
console.log(arr1);
arr1.push({ valor: '1234' });
console.log(typeof (arr1[3]));


//  4 - Parametros tipados

function soma(a: number, b: number) {
    console.log(a + b);
}

soma(4, 5);
soma(10, 4);

// 5 - Retorno Função tipado

function greeting(nome: string): string {
    return (`Ola: ${nome}`);
}

console.log(greeting('Faraday'));
const greetingmessage: string = greeting('Michael');
console.log(greetingmessage);

//console.log(greeting(1));  ------ erro de tipo


// 6 - Funções Anônimas

setTimeout(function () {
    const sal: number = 3000;
    //console.log(sal);
}, 3000);


/// 7 - Objetos

function passCoordinates(coord: { x: number, y: number }) {
    console.log('x: ' + coord.x);
    console.log('y: ' + coord.y);
}

const objCoordinates: { x: number, y: number } = { x: 100, y: 55.6 };

passCoordinates(objCoordinates);

passCoordinates({ x: 45, y: 23.4 });

// 8 - Parametros Opcionais

function showNumbers(n1: number, n2: number, n3?: number) { //Os parametros opcionais '?': não pode haver parâmetros obrigatórios após os opcionais.
    console.log('N1: ' + n1);
    console.log('N2: ' + n2);
    if (n3) {
        console.log('N3: ' + n3);
    }
}

showNumbers(1, 4)


// 9 - Validação de parâmetros opcionais

function advancedGreeting(firstname: string, lastname?: string) {
    if (lastname !== undefined) {
        return (`Olá ${firstname} ${lastname}, tudo bem?`);
    }
    return (`Olá ${firstname}, tudo bem?`);
}



console.log(advancedGreeting('John', 'Smith'));
console.log(advancedGreeting('Michael'));


// 10 - Union Type


function showBalance(balance: number | string) {
    return balance > 0 ? balance : 'Sem fundos';
}

let bal: number | string = showBalance(-1);

console.log('Saldo: ' + bal);

bal = showBalance(100);

console.log('Saldo: ' + bal);

const misturado: Array<string | number | boolean> = [3, 4, 5, 'Teste', true];


// 11 - Avancando em Union Types


function showUserRole(role: string | boolean) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado !';
    }
    return ('A função do usuário é: ' + role);
}

console.log(showUserRole(false));
console.log(showUserRole('Admin'));


// 12 - Type Alias


type ID = number | string;

function showID(id: ID) {
    return `O ID é: ${id}`;
}
console.log(showID('FDGh67'));
console.log(showID(33442));


// 13 - Interface

interface Point{
    x: number,
    y: number,
    z: number
}

function showCoords(ponto: Point) {
    console.log(`Coordenadas: 
    X: ${ponto.x}
    Y: ${ponto.y}
    Z: ${ponto.z}
    `);
}

const objPto: Point = { x: 10.8, y: 40, z: 60 };

showCoords(objPto);

// 14 - Interface x Type Alias

interface Person{
    name: string;
}

interface Person{
    age: number;
}

const somePerson: Person = { name: 'Michael', age: 33 };

console.log(somePerson);

type PersonType = {
    name: String
}

/* type PersonType = {  //------- dá erro de identificador duplicado
    age: number;
} */


// 15 - Literal Type

let test = 'testando';

console.log(test);

function getAcevo(nomeAcervo: 'Colecionador' | 'Atirador' | 'Caçador') {
    return 'Acervo de: ' + nomeAcervo;    
}

console.log(getAcevo('Atirador'));
//console.log(getAcevo('Civil')); //Erro de tipo not assignable


// 16 - Non null asertion operator - operador para identificar "objetos" do DOM que podem ainda não ter sido carregados.

const p = document.getElementById("txtteste");

console.log(p!.innerHTML);
// Se não colocar o ! , o compilador identifica que o elemento pode ser nulo, pois o compilador não o identificou ainda.


// 17 - BigInt

let n: bigint;

//n = 1; // not assignable to bigint

n = 100000n; // da erro se não mudar o arquivo de configuração para o target de ES2020

console.log(n + 'do tipo: ' + typeof n);


// 18 - Symbol

let symbolA: symbol = Symbol('abc');
let symbolB = Symbol('abc');

console.log('Comparacao SymbolA == SymbolB :' + (symbolA == symbolB));
console.log('Comparacao SymbolA === SymbolB :' + (symbolA === symbolB));
