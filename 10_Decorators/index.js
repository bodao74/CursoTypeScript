"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let title = '';
// 1 - Exepmlo de decorator
title = '========== 1 - Exepmlo de decorator ==========';
console.log(title);
function myDecorator() {
    console.log('Iniciando o Decorator....');
    return function (target, propertKey, descriptor) {
        console.log('Executando o decorator.....');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log('terminando o método');
    }
}
__decorate([
    myDecorator() //não usar ; (ponto e vírgula)
], myClass.prototype, "testing", null);
const myvar = new myClass();
myvar.testing();
// 2 - Multiple Decorators
title = '========== 2 - Multiple Decorators ==========';
console.log(title);
function a() {
    console.log('iniciando decorator a.....');
    return function (target, propertKey, descriptor) {
        console.log('executou a');
    };
}
function b() {
    console.log('iniciando decorator b.....');
    return function (target, propertKey, descriptor) {
        console.log('executou b');
    };
}
function c() {
    console.log('iniciando decorator c.....');
    return function (target, propertKey, descriptor) {
        console.log('executou c');
    };
}
class MultipleDecorators {
    testing() {
        console.log('terminando execução');
    }
}
__decorate([
    a() //último decorator a terminar de executar. Primeiro a ser chamado.
    ,
    b() //penultimo decorator a terminar de executar. Segundo a ser chamado.
    ,
    c() // primeiro decorator a terminar de executar. Terceiro a ser chamado.
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
//3 - Class Decorator
title = '========== 3 - Class Decorator ==========';
console.log(title);
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log('Criando o usuário...');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
//const michael: User = new User('Michael');
//console.log(michael);
//4 - Método Decorator
console.log(title);
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return 'O nome da máquina é ' + this.name;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('trator');
console.log(trator);
//5 - Acessor Decorator
console.log(title);
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return 'Nome do monstro é: ' + this.name;
    }
    get showAge() {
        return 'A idade do monstro é: ' + this.age;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const mMonstro = new Monster('Godzila', 1000);
console.log(mMonstro);
// 6- Property Decorator
title = '========== 6- Property Decorator ==========';
console.log(title);
// formatar com no mĩnimo 5 digitos : 00001
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
    ;
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
console.log(newItem);
console.log(newItem.id);
// 7 - exemplo real com class decorator
title = '========== 7 - exemplo real com class decorator ==========';
console.log(title);
//Incluir a data de criação do objeto
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(43);
const newPen = new Pen(76);
console.log(newBook);
console.log(newPen);
// 8 - exemplo real com Method decorator
title = '========== 8 - exemplo real com Method decorator ==========';
console.log(title);
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuário já postou ! ! !');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log('Post do Usuário: ' + content);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Primeiro Post ! ! ! !', newPost.alreadyPosted);
newPost.post('Segundo Post ! ! ! !', newPost.alreadyPosted);
newPost.post('Terceiro Post ! ! ! !', newPost.alreadyPosted);
// 9 - exemplo real com property decorateor
title = '========== 9 - exemplo real com property decorateor ==========';
console.log(title);
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`username tem limite de ${limit} caracteres`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const pedro = new Admin('pedro123456');
const michael = new Admin('mike74');
