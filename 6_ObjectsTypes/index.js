"use strict";
// 1 - tipo de objeto para funcao de interface
function showProductDetails(produto) {
    console.log(`O preço do produto ${produto.name} é: R$${produto.price} .`);
    if (!produto.isAvailable) {
        console.log('Produto Indisponível !');
    }
}
const shirt = {
    name: 'Camisa',
    price: 49.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: 'Short', price: 45.67, isAvailable: false });
// 2 - Parametros Opcionais em interface
console.log('===========2 - Parametros Opcionais em interface===========');
function showUserDetails(user) {
    console.log(`O usuário tem email: ${user.email}`);
    if (user.role) {
        console.log(`a função do usuário é: ${user.role}`);
    }
    else {
        console.log('usuario sem função padrão');
    }
}
const usuario = {
    email: 'usuario@email.com',
    role: 'admin'
};
const usuario2 = {
    email: 'usuario2@email.com'
};
showUserDetails(usuario);
showUserDetails(usuario2);
// 3 - ReadOnly
console.log('===========3 - ReadOnly===========');
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
//fusca.wheels = 5 //erro: can not assign because is readonly
// 4 - index signature
console.log('===========4 - Index Signature===========');
let coords = {
    x: 43.67
};
console.log(coords);
coords.y = 32.1;
console.log(coords);
coords.z = 9.7;
console.log(coords);
// 5 - Herança Interfaces
console.log('===========5 - Herança Interface============');
const marcelo = {
    name: 'Marcelo',
    age: 47
};
const aline = {
    name: 'Aline',
    age: 45,
    superpowers: ['pacience', 'stuberness']
};
console.log(marcelo);
console.log(aline);
// 6 - Intersection Types
console.log('===========6 - Intersection Types============');
const arnold = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.type);
// 7 - Array Readonly
console.log('===========7 - Array readonly============');
let myarray = ['Maça', 'Laranja', 'Melancia'];
//myarray.push('Jaboticaba'); // erro pois não permite incluir novos valores;
//myarray[0] = 'Uva'; // erro não permite alterar diretamente. Apenas po meio de funções.
console.log(myarray[0].toUpperCase());
//myarray[0]=myarray[0].toUpperCase(); // erro tbm
console.log(myarray);
myarray = myarray.map((item) => { return `Fruta: ${item}`; });
console.log(myarray);
// 8 - Tuplas
console.log('===========8 - Tuplas============');
//const myNumbersArray: fiveNumbers = [100, 300, 45, 5006]; // com menos parametros erro;
//console.log(myNumbersArray);
const myNumbersArray2 = [3.10, 250, 47, 3423, 1994];
console.log(myNumbersArray2);
//const myNumbersArray3: fiveNumbers = [0.10, 20, 7, 42, 19, 88]; //erro mais parametros
//console.log(myNumbersArray3);
//const myNumbersArray4: fiveNumbers = [0.10, 20, 7, 'Teste', 19, 88]; // erro can not assign string to number
//console.log(myNumbersArray4);
const mac = ['Marcelo', 47];
console.log(mac);
// 9 - Tuplas com Readonly
console.log('===========9 - Tuplas com Readonly============');
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
    //numbers[0] = 33; // erro por ser array readonly
}
showNumbers([4, 66]);
