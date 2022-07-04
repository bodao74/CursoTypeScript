// Modulos - uso de arquivos com funcoes, variaveis, etc em separado e importar no codigo.

// 1 - Importacao de arquivos
import importGreet from './greet.js'; //qdo a extensão é javascript ela pode ser omitda.

importGreet();

// 2 - Importar variaveis

import { x, y } from './variable.js'

console.log(x);
console.log(y);

// 3 - Multiplas Importações

import {
    a,
    b,
    myFunction
} from './multiple.js';


console.log(a);
console.log(b);
myFunction();

// 4 - Alias

import { someName as name } from './changename.js';

console.log(name);


// 5 - importar tudo - all
import * as myNumbers from './numbers.js';

console.log(myNumbers);
console.log(myNumbers.x);
console.log(myNumbers.y);
console.log(myNumbers.z);

console.log(myNumbers.myNumFunction(3, 4));
console.log(myNumbers.myNumFunction(myNumbers.x, myNumbers.z));

// 6 - Importar Tipos ou Interfaces
import {Human} from './myType.js';

const pessoa: Human = { name: 'michael', age: 47 };
console.log(pessoa);
const pessoa1: Human = { name: 'john', age: 44 }; // tem que usar os parametros name / age, do contrario não faz a atribuicao.
console.log(pessoa1);
console.log(pessoa.name);
console.log(pessoa.age);

class User implements Human{
    constructor(public name: string, public age: number) {
    }
}

const usuario: User = new User('Charles', 65);
console.log(usuario);


