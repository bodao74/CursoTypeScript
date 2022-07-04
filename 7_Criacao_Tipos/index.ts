let title: string='';
// 1- Generics
title = '==========1- Generics=========';
console.log(title)

function showData<T>(arg: T): string{
    return (`O dado é: ${arg}`);
}

console.log(showData(3));
console.log(showData('Qualquer texto ! ! ! !'));
console.log(showData(['Nada que falar', 4, true]));



// 2 - Constraint em Generic
title = '==========2 - Constraint em Generic=========';
console.log(title);
function showProductDetails<T extends { name: string }>(obj: T) {
    return `o nome do produto é ${obj.name}`;
};

const myobj = { name: 'porta', cor: 'Branca'};
const otherObj = {name: 'carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'roupa' };

console.log(showProductDetails(myobj));
console.log(showProductDetails(otherObj));
//console.log(showProductDetails(thirdObj)); // erro: not assignabl

// 3 - Generic com Interface
title = '==========3 - Generic com Interface=========';
console.log(title);

interface MyObject<T, U, Q>{
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: 'fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen: Pen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'azul' };

console.log(myCar);
console.log(myPen);


// 4 - Type Parameters
title = '==========4 - Type Parameters=========';
console.log(title);

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return`A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd: '15TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'));


// 5 - Keyof Type Operator
title = '==========5 - Keyof Type Operator=========';
console.log(title);

type Character = { name: string, age: number, hasDriverLicense: boolean };
type C = keyof Character;

function showCharacter(obj: Character, key: C) {
    return obj[key];
}

const myChar: Character = {
    name: 'Matheus',
    age: 30,
    hasDriverLicense: true
}

console.log(showCharacter(myChar, 'name'));
console.log(showCharacter(myChar, 'age'));
console.log(showCharacter(myChar, 'hasDriverLicense'));


// 6 - typeof Type Operator
title = '==========6 - typeof Type Operator=========';
console.log(title);

const username: string = 'Matheus';
const username2: typeof username = 'Joao';

type x = typeof username;

const username3: x = 'mike';


// 7 - indexed access type
title = '==========7 - indexed access type=========';
console.log(title);

type Truck = { km: number, kg: number, description: string };
type Km = Truck['km'];

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhao cargas leves.'
}

function showKm(km: Km) {
    console.log('O veículo tem a kilometragem de: ' + km);    
}

showKm(newTruck.km);

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km);

// 8 - conditional types
title = '==========8 - conditional types=========';
console.log(title);


interface A{

}

interface B extends A{   
}

interface Nome {
    showName(): string;
}

type myType = B extends A ? number : string;

const somevar: myType = 5;

//const myNumber: myType = 'teste'; //    erro: string not assignable to number;

type myTypeC = Nome extends { showNumber(): number } ? number : boolean;

let somevar2: myTypeC;

//somevar2 = 'ddddd' // erro: string not assignable to boolean

console.log(typeof somevar);

// 9 - Template Literals Type
title = '==========9 - Template Literals Type=========';
console.log(title);

type testA = 'text';
type CustomType = `some ${testA}`;

const testing: CustomType = 'some text'; // só permite usar o valor some text. 
//const testing2: CustomType = 'some text 2'; // erro: type 'some text2' not assignable to 'some text'

type a1 = 'testando';
type a2 = 'union';

type a3 = `${a1}` | `${a2}`;
