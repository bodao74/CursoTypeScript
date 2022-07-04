"use strict";
let title = '';
// 1- Campos em classes
title = '==========1- Campos em classes=========';
console.log(title);
class User {
}
const usuario1 = new User();
console.log(usuario1);
const usuario2 = new User();
usuario2.name = 'Marcelo';
usuario2.age = 47;
console.log(usuario2);
// 2- Constructor
title = '==========2- Constructor=========';
console.log(title);
class NewUser {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
//const jack: NewUser = new NewUser(); // erro: pois não foram fornecidos os valores esperados pelo construtor.
const john = new NewUser('John', 33);
console.log(john);
// 3- Propriedade ReadOnnly
title = '==========3- Propriedade ReadOnnly=========';
console.log(title);
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car('Fusca');
console.log(fusca);
//fusca.wheels = 8; //erro....readonly property
// 4- Herança e Super
title = '==========4- Herança e Super=========';
console.log(title);
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name); //chamada para o construtor da classe pai.
        this.guns = guns;
    }
}
const boat = new Machine('barquinho');
const destroyer = new KillerMachine('barcao', 67);
console.log(boat);
console.log(destroyer);
// 5- Métodos
title = '==========5- Métodos=========';
console.log(title);
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Whats Up!!!!');
    }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy.name);
console.log(jimmy);
jimmy.greeting();
// 6- This
title = '==========6- This=========';
console.log(title);
class Truck {
    constructor(model, hp) {
        this.hp = hp;
        this.model = model;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.model} e de potência ${this.hp}`);
    }
}
const volvo = new Truck('volvo', 400);
const scania = new Truck('scania', 650);
volvo.showDetails();
scania.showDetails();
// 7- Getters
title = '==========7- Getters=========';
console.log(title);
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const pessoa = new Person('Michael', 'Stonebridge');
console.log(pessoa.name);
console.log(pessoa.surname);
console.log(pessoa.fullName); // Não pode usar  os () pois não é uma função, mas uma propriedade.
// 8- Setters
title = '==========8- Setters=========';
console.log(title);
class Coordenates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set fillX(coord) {
        this.x = coord;
        console.log('X setted successfully!');
    }
    set fillY(coord) {
        this.y = coord;
        console.log('Y setted successfully!');
    }
    get showCoordenates() {
        return ('Coordenates are X: ' + this.x + ' and Y: ' + this.y);
    }
}
const myCoords = new Coordenates(33, 56.78);
console.log(myCoords.showCoordenates);
myCoords.fillX = 21.5; // da mesma forma que o Get, o  Set passaa a ser uma propriedade da classe.
myCoords.fillY = 75.9; // da mesma forma que o Get, o  Set passaa a ser uma propriedade da classe.
