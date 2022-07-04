let title: string = '';
// 1 - Exepmlo de decorator
title = '========== 1 - Exepmlo de decorator =========='
console.log(title);

function myDecorator() {
    console.log('Iniciando o Decorator....');
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Executando o decorator.....');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    }
}

class myClass {
    @myDecorator() //não usar ; (ponto e vírgula)
    testing() {
        console.log('terminando o método');
    }
}

const myvar = new myClass();

myvar.testing();


// 2 - Multiple Decorators
title = '========== 2 - Multiple Decorators =========='
console.log(title);

function a() {
    console.log('iniciando decorator a.....');
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('executou a');
    }
}



function b() {
    console.log('iniciando decorator b.....');
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('executou b');
    }
}


function c() {
    console.log('iniciando decorator c.....');
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('executou c');
    }
}


class MultipleDecorators {

    @a() //último decorator a terminar de executar. Primeiro a ser chamado.
    @b() //penultimo decorator a terminar de executar. Segundo a ser chamado.
    @c() // primeiro decorator a terminar de executar. Terceiro a ser chamado.
    testing() {
        console.log('terminando execução');
    }
}

const multiple = new MultipleDecorators();

multiple.testing();



//3 - Class Decorator
title = '========== 3 - Class Decorator =========='
console.log(title);

function classDec(constructor: Function) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log('Criando o usuário...');
    }
}


@classDec
class User {
    constructor(public name: string) {
    }
}

//const michael: User = new User('Michael');

//console.log(michael);

//4 - Método Decorator
console.log(title);

function enumerable(value: boolean) {
    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    }
}

class Machine {
    constructor(public name: string) {

    }
    @enumerable(false)
    showName() {
        return 'O nome da máquina é ' + this.name;
    }
}


const trator: Machine = new Machine('trator');

console.log(trator);

//5 - Acessor Decorator
console.log(title);

class Monster {
    constructor(public name: string, public age: number) {

    }

    @enumerable(true)
    get showName() {
        return 'Nome do monstro é: ' + this.name;
    }

    @enumerable(true)
    get showAge() {
        return 'A idade do monstro é: ' + this.age;
    }
}

const mMonstro: Monster = new Monster('Godzila', 1000);

console.log(mMonstro);

// 6- Property Decorator
title = '========== 6- Property Decorator ==========';
console.log(title);

// formatar com no mĩnimo 5 digitos : 00001

function formatNumber() {
    return function (target: object, propertyKey: string) {
        let value: string;
        const getter = function () {
            return value;
        };
        const setter = function (newVal: string) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    }
}

class ID {
    @formatNumber()
    id: string;

    constructor(id: string) {
        this.id = id;
    };
}

const newItem = new ID('1');

console.log(newItem);
console.log(newItem.id);

// 7 - exemplo real com class decorator
title = '========== 7 - exemplo real com class decorator ==========';
console.log(title);

//Incluir a data de criação do objeto

function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}


@createdDate
class Book {
    id: number;
    createdAt?: Date;
    constructor(id: number) {
        this.id = id;
    }
}

@createdDate
class Pen {
    id: number;
    createdAt?: Date;
    constructor(id: number) {
        this.id = id;
    }
}

const newBook: Book = new Book(43);
const newPen: Pen = new Pen(76);

console.log(newBook);
console.log(newPen);


// 8 - exemplo real com Method decorator
title = '========== 8 - exemplo real com Method decorator ==========';
console.log(title);

function checkIfUserPosted() {
    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log('Usuário já postou ! ! !');
                return null;
            } else {
                return childFunction.apply(this, args);
            }
        }
        return descriptor;
    }
}

class Post {
    alreadyPosted: boolean = false;

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log('Post do Usuário: ' + content);
    }
}

const newPost = new Post();

newPost.post('Primeiro Post ! ! ! !', newPost.alreadyPosted);
newPost.post('Segundo Post ! ! ! !', newPost.alreadyPosted);
newPost.post('Terceiro Post ! ! ! !', newPost.alreadyPosted);


// 9 - exemplo real com property decorateor
title = '========== 9 - exemplo real com property decorateor ==========';
console.log(title);

function Max(limit: number) {
    return function (
        target: object,
        propertyKey: string) {

        let value: string;

        const getter = function () {
            return value;
        }

        const setter = function (newVal: string) {
            if (newVal.length > limit) {
                console.log(`username tem limite de ${limit} caracteres`);
                return;
            } else {
                value = newVal;
            }
        }
 
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        }
        );

    }
}

class Admin {
    @Max(10)
    username: string;
    constructor(username: string) {
        this.username = username;
    }
}
const pedro: Admin = new Admin('pedro123456');
const michael: Admin = new Admin('mike74');