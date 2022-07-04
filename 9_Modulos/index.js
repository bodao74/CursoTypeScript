"use strict";
// Modulos - uso de arquivos com funcoes, variaveis, etc em separado e importar no codigo.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - Importacao de arquivos
const greet_js_1 = __importDefault(require("./greet.js")); //qdo a extensão é javascript ela pode ser omitda.
(0, greet_js_1.default)();
// 2 - Importar variaveis
const variable_js_1 = require("./variable.js");
console.log(variable_js_1.x);
console.log(variable_js_1.y);
// 3 - Multiplas Importações
const multiple_js_1 = require("./multiple.js");
console.log(multiple_js_1.a);
console.log(multiple_js_1.b);
(0, multiple_js_1.myFunction)();
// 4 - Alias
const changename_js_1 = require("./changename.js");
console.log(changename_js_1.someName);
// 5 - importar tudo - all
const myNumbers = __importStar(require("./numbers.js"));
console.log(myNumbers);
console.log(myNumbers.x);
console.log(myNumbers.y);
console.log(myNumbers.z);
console.log(myNumbers.myNumFunction(3, 4));
console.log(myNumbers.myNumFunction(myNumbers.x, myNumbers.z));
const pessoa = { name: 'michael', age: 47 };
console.log(pessoa);
const pessoa1 = { name: 'john', age: 44 }; // tem que usar os parametros name / age, do contrario não faz a atribuicao.
console.log(pessoa1);
console.log(pessoa.name);
console.log(pessoa.age);
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const usuario = new User('Charles', 65);
console.log(usuario);
