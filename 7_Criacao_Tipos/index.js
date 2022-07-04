"use strict";
let title = '';
// 1- Generics
title = '==========1- Generics=========';
console.log(title);
function showData(arg) {
    return (`O dado é: ${arg}`);
}
console.log(showData(3));
console.log(showData('Qualquer texto ! ! ! !'));
console.log(showData(['Nada que falar', 4, true]));
// 2 - Constraint em Generic
title = '==========2 - Constraint em Generic=========';
console.log(title);
function showProductDetails(obj) {
    return `o nome do produto é ${obj.name}`;
}
;
const myobj = { name: 'porta', cor: 'Branca' };
const otherObj = { name: 'carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'roupa' };
console.log(showProductDetails(myobj));
console.log(showProductDetails(otherObj));
//console.log(showProductDetails(thirdObj)); // erro: not assignabl
// 3 - Generic com Interface
title = '==========3 - Generic com Interface=========';
console.log(title);
const myCar = { name: 'fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'azul' };
console.log(myCar);
console.log(myPen);
// 4 - Type Parameters
title = '==========4 - Type Parameters=========';
console.log(title);
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '15TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
// 5 - Keyof Type Operator
title = '==========5 - Keyof Type Operator=========';
console.log(title);
function showCharacter(obj, key) {
    return obj[key];
}
const myChar = {
    name: 'Matheus',
    age: 30,
    hasDriverLicense: true
};
console.log(showCharacter(myChar, 'name'));
console.log(showCharacter(myChar, 'age'));
console.log(showCharacter(myChar, 'hasDriverLicense'));
// 6 - typeof Type Operator
title = '==========6 - typeof Type Operator=========';
console.log(title);
const username = 'Matheus';
const username2 = 'Joao';
const username3 = 'mike';
// 7 - indexed access type
title = '==========7 - indexed access type=========';
console.log(title);
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhao cargas leves.'
};
function showKm(km) {
    console.log('O veículo tem a kilometragem de: ' + km);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
// 8 - conditional types
title = '==========8 - conditional types=========';
console.log(title);
const somevar = 5;
let somevar2;
//somevar2 = 'ddddd' // erro: string not assignable to boolean
console.log(typeof somevar);
// 9 - Template Literals Type
title = '==========9 - Template Literals Type=========';
console.log(title);
const testing = 'some text'; // só permite usar o valor some text. 
