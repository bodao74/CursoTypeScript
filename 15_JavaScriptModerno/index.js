var title = '';
//  - Declaração com VAR, LET e CONST
title = '========== 1 - Declaração com VAR, LET e CONST ==========';
console.log(title);

var x = 10;
var y = 12;

if (y > 10) {
    var x = 5;
    console.log('dentro do if:' + x);
}

console.log('fora do if: ' + x);

let a = 10;
let b = 15;
if (a > 5) {
    let b = 30; //escopo só no IF.
    console.log('dentro do if:' + b);
}

console.log('fora do if: ' + b);


let i = 100
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

const nome = 'pedro';

function printNome() {
    const nome = 'Michael';
    console.log('Nome dentro da função: ' + nome);
}

printNome();
console.log('nome fora da funcao: ' + nome);
printNome();

// 2 - Arrow Functions
title = '========== 2 - Arrow Functions ==========';
console.log(title);

const sum = function sum(a, b) {
    return a + b;
};

// Arrow Function tradicional
/*const arrowSum = (a, b) => {
    return a + b
};*/
//Arrow Function otimizada
const arrowSum = (a, b) => a + b;

console.log('Funcao na Const Sum:' + sum(10, 4));
console.log('Funcao arrowSum: ' + arrowSum(7, 3));

const greeting = (nome) => {
    if (nome) {
        return 'Olá  ' + nome + ' !';
    } else {
        return 'Olá';
    }
}

console.log(greeting('Michael'));
console.log(greeting());

//tem que ter o return, caso contrário não funciona (undefined)
const greetingMsg = (nome) => { return nome ? 'Olá ' + nome + ' !' : 'olá !' };

console.log(greetingMsg('Michael'));
console.log(greetingMsg());

// sem argumentos

const testArrow = () => console.log('Testou...');

testArrow();

const user = {
    nome: 'Tiger',
    sayusername() {
        self = this;
        setTimeout(function () {
            console.log(self);
            console.log('Username: ' + self.nome);
        }, 0);
    },
    sayUsernameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log('Username: ' + this.nome);
        }, 0);
    }
}

user.sayusername();
user.sayUsernameArrow();


// 3 - Filter
title = '========== 3 - Filter ==========';
console.log(title);

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);

const highNumbers2 = myArray.filter((n) => { return n > 3 });

const highNumbers = myArray.filter((n) => {
    if (n > 3) {
        return n;
    }
});

console.log(highNumbers);
console.log(highNumbers2);

const users = [
    { name: 'Michael', available: true },
    { name: 'John', available: true },
    { name: 'Don', available: false },
    { name: 'Roy', available: false }
];

console.log(users.filter((u) => u.available));
console.log(users.filter((u) => !u.available));

