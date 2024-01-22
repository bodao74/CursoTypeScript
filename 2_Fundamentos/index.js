//1 - Numbers
var x = 10;
console.log('Variavel x do tipo: ' + typeof (x) + ', com o valor: ' + x);
//2- String
var firstname = 'Marcelo';
console.log(firstname);
var lastname = 'Cunha';
console.log(firstname + lastname);
//3- Boolean
var verdfalso = true;
console.log('Original: ' + verdfalso + ' do tipo: ' + typeof (verdfalso));
console.log('Negado: ' + !verdfalso + ' do tipo: ' + typeof (verdfalso));
// 4 - Inference & Annotation
var ann = 'Texto';
var inf = 'mais texto';
// inf = 1; ----- erro
//ann = 28; ----- erro
console.log(firstname + ' ' + lastname);
// TASK 2
var num = 100;
var snum = '';
snum = num.toString();
console.log('Numero: ' + snum + ' <= (como string)... (como numerio) =>  ' + num);
