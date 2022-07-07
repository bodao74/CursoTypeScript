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
/* 
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
user.sayUsernameArrow(); */


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

// 4 - MAP
title = '========== 4 - MAP ==========';
console.log(title);


const products = [
    { name: 'Camisa', price: 10.78, category: 'Roupas' },
    { name: 'Chaleira Eletrica', price: 34.99, category: 'Eletro' },
    { name: 'TV 45 Polegadas', price: 974.99, category: 'Eletro' },
    { name: 'Notebook', price: 2569.45, category: 'Eletronicos' },
    { name: 'Bermuda', price: 29.99, category: 'Roupas' },
];

console.log('Antes......');
console.log(products);

products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true;
    }
});

console.log('Depois......');
console.log(products);


// 5 - Template Literals
title = '========== 5 - Template Literals ==========';
console.log(title);

const usrName = 'Ryan';
const age = 33;

console.log(`O nome do usuário é: ${usrName} e tem idade ${age}`);


// 6 - Destructuring
title = '========== 6 - Destructuring ==========';
console.log(title);

const fruits = ['maçã', 'pera', 'abacaxi', 'melão'];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f2);
console.log(f3);

const produtDetails = {
    name: 'Mouse',
    price: 45.22,
    category: 'Perifericos',
    color: 'cinza'
};


const { name: productName, price, category: prdCategory, color } = produtDetails;

console.log(productName);
console.log(price);
console.log(prdCategory);
console.log(color);


// 7 Spread Operator
title = '========== 7 Spread Operator ==========';
console.log(title);


const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a1);
console.log(a2);
console.log(a3);


const a4 = [7, ...a3, 8, 9];

console.log(a4);


const carName = { name: 'Cruze' };
const carBrand = { brand: 'GM' };
const carOtherInfos = { km: 10000, price: 120000 };

const car = { ...carName, ...carBrand, ...carOtherInfos, color: 'White', wheels: 4 };

console.log(car);

// 8 - Classes
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }

}

const shirt = new Product('Gola V', 20);
console.log(shirt.name);

console.log(shirt.productWithDiscount(15));


// 9 - Herança
title = '========== 9 - Herança ==========';
console.log(title);

class ProductsWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }
    showColors() {
        this.colors.forEach((element) => {
            console.log(element);
        });
    }
}


const hat = new ProductsWithAttributes('Cuban Hat', 28.99, ['blue', 'creme', 'preto']);

console.log(hat.name);
hat.showColors();
console.log(hat.productWithDiscount(15));