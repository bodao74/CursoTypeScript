// 1 - Void

function withoutReturn(dado: string): void {
    console.log('Sem retorno! ! ! !');
}

withoutReturn('Info');

// 2 - Callback como argumento

function greeting(name: string): string {
    return `olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string): void {
    console.log('Preaparando....');
    const greet = f(userName);
    console.log(greet);
}

preGreeting(greeting, 'Johnny');
preGreeting(greeting, 'Carlos');

// 3 - Funcoes Genericas (generic function)

function firstElement<T>(args: T[]): T {
    return args[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([1, 'a', true]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }

}

const newObj = mergeObjects({ name: 'Michael' }, { age: 25, job: 'Student' });
console.log(newObj);


// 4 - Constraints

function biggestNumber<T extends number | string>(a: T, b: T) {
    //function biggestNumber<T extends number | string, U extends number | string>(a: T, b: U) {
    let biggest: T; // | U;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}

console.log(biggestNumber('4', '9'));
console.log(biggestNumber(2, 10));
//console.log(biggestNumber('7', 1)); // Erro pois ambos tem de ser do mesmo tipo .... pra fazer assim deveria ter um segundo generico.

// 5 - especificar tipo argumento

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2);
}

console.log(mergeArrays<string | number>([1, 5, 9], ['Alfa', 'Beta', 'Gama']));


// 6 - Parametros Opcionais

function modernGreeting(name: string, greet?: string) {
    let msg;

    if (greet) {
        msg = `Ola ${name}, ${greet}`;
    } else {
        msg = `Ola ${name}`
    }
    return msg;
}

console.log(modernGreeting('Michael'));
console.log(modernGreeting('James', 'Dr.'));

// 7 - Parametro Default

function somaDefault(n: number, m: number = 10) {
    return n + m;
}

console.log(somaDefault(5));
console.log(somaDefault(5, 89));

// 8 - Unknowm

function doSomething(x: unknown) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    } else if (typeof x === 'number') {
        console.log('x é do tipo número: ' + x);
    }

}

doSomething([2, 8, 11, 34]);
doSomething(5);


// 9 Never

function showErrorMessage(msg: string): never {
    throw new Error(msg);
}

//showErrorMessage("Deu pau ! ! ! !");


// 10 - Rest Operator

function sumAll(...n: number[]) {
    return n.reduce((num, sum) => sum + num);
}

console.log(sumAll(5, 10, 15, 20));
console.log(sumAll(5, 10, 15, 20, 60, 99));
//console.log(sumAll('teste')); // errro : tipo string not assignable to type  number


// 11 - Destructing como parametro

function showProductDetails({ name, price }: { name: string, price: number}) {
//function showProductDetails(produto: { name: string, price: number }) { //alternativo
    return `Ola o nome do produto é ${name} e o preço é R$${price}`;
    //return `Ola o nome do produto é ${produto.name} e o preço é R$${produto.price}`; //alternativo
}

const shirt = { name: 'camisa', price: 49.99 };

console.log(showProductDetails(shirt));
console.log(showProductDetails({ name: 'Alfa', price: 44 }));


