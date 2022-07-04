// 1 - tipo de objeto para funcao de interface

interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductDetails(produto: Product) {
    console.log(`O preço do produto ${produto.name} é: R$${produto.price} .`);
    if (!produto.isAvailable) {
        console.log('Produto Indisponível !');
    }
}

const shirt: Product = {
    name: 'Camisa',
    price: 49.99,
    isAvailable: true
}


showProductDetails(shirt);
showProductDetails({ name: 'Short', price: 45.67, isAvailable: false });



// 2 - Parametros Opcionais em interface
console.log('===========2 - Parametros Opcionais em interface===========');
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem email: ${user.email}`);
    if (user.role) {
        console.log(`a função do usuário é: ${user.role}`);
    } else {
        console.log('usuario sem função padrão');
    }
}

const usuario: User = {
    email: 'usuario@email.com',
    role: 'admin'
}


const usuario2: User = {
    email: 'usuario2@email.com'
}

showUserDetails(usuario);
showUserDetails(usuario2);


// 3 - ReadOnly
console.log('===========3 - ReadOnly===========');

interface Car {
    brand: string,
    readonly wheels: number
}


const fusca: Car = {
    brand: 'VW',
    wheels: 4
}


console.log(fusca);

//fusca.wheels = 5 //erro: can not assign because is readonly

// 4 - index signature
console.log('===========4 - Index Signature===========');

interface CoordObjet {
    [index: string]: number
}

let coords: CoordObjet = {
    x: 43.67
}
console.log(coords);
coords.y = 32.1;
console.log(coords);
coords.z = 9.7
console.log(coords);


// 5 - Herança Interfaces
console.log('===========5 - Herança Interface============');

interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const marcelo: Human = {
    name: 'Marcelo',
    age: 47
}

const aline: SuperHuman = {
    name: 'Aline',
    age: 45,
    superpowers: ['pacience', 'stuberness']
}


console.log(marcelo)
console.log(aline);

// 6 - Intersection Types
console.log('===========6 - Intersection Types============');

interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}


type CharWithGun = Character & Gun;

const arnold: CharWithGun = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: 12
}


console.log(arnold);
console.log(arnold.type);


// 7 - Array Readonly
console.log('===========7 - Array readonly============');

let myarray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Melancia'];
//myarray.push('Jaboticaba'); // erro pois não permite incluir novos valores;
//myarray[0] = 'Uva'; // erro não permite alterar diretamente. Apenas po meio de funções.
console.log(myarray[0].toUpperCase());
//myarray[0]=myarray[0].toUpperCase(); // erro tbm
console.log(myarray);
myarray = myarray.map((item) => { return `Fruta: ${item}` });
console.log(myarray);

// 8 - Tuplas
console.log('===========8 - Tuplas============');

type fiveNumbers = [number, number, number, number, number];

type nameAndAge = [string, number];

//const myNumbersArray: fiveNumbers = [100, 300, 45, 5006]; // com menos parametros erro;

//console.log(myNumbersArray);

const myNumbersArray2: fiveNumbers  = [3.10, 250, 47, 3423, 1994];

console.log(myNumbersArray2);

//const myNumbersArray3: fiveNumbers = [0.10, 20, 7, 42, 19, 88]; //erro mais parametros

//console.log(myNumbersArray3);

//const myNumbersArray4: fiveNumbers = [0.10, 20, 7, 'Teste', 19, 88]; // erro can not assign string to number

//console.log(myNumbersArray4);

const mac: nameAndAge = ['Marcelo', 47];

console.log(mac);


// 9 - Tuplas com Readonly
console.log('===========9 - Tuplas com Readonly============');

function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
    //numbers[0] = 33; // erro por ser array readonly
}
showNumbers([4, 66]);