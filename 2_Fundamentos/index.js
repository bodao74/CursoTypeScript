"use strict";
//1 - Numbers
let x = 10;
console.log('Variavel x do tipo: ' + typeof (x) + ', com o valor: ' + x);
//2- String
const firstname = 'Marcelo';
console.log(firstname);
const lastname = 'Cunha';
console.log(firstname + lastname);
//3- Boolean
const verdfalso = true;
console.log('Original: ' + verdfalso + ' do tipo: ' + typeof (verdfalso));
console.log('Negado: ' + !verdfalso + ' do tipo: ' + typeof (verdfalso));
// 4 - Inference & Annotation
const ann = 'Texto';
let inf = 'mais texto';
// inf = 1; ----- erro
//ann = 28; ----- erro
console.log(firstname + ' ' + lastname);
// TASK 2
const num = 100;
let snum = '';
snum = num.toString();
console.log('Numero: ' + snum + ' <= (como string)... (como numerio) =>  ' + num);
