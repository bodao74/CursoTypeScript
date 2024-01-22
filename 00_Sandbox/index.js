"use strict";
/* class Gun {
    constructor(
        manufacturer: string,
        model: string,
        caliber: string,
        serialNumber: string,
        sysReg: string) {
    }
}

class Acervo {
    constructor(
        type: 'Cidadao' | 'Colecionador' | 'Atirador' | 'Caçador',
        guns: Gun[]) {
    }
}

class CAC {
    constructor(
        name: string,
        crNum: number,
        validade: Date,
        acervos: Acervo[]) {
    }
} */
const gun = {
    manufacturer: 'S&W',
    model: 'MP9',
    caliber: '9mm',
    serialNumber: 'SW4534',
    sysReg: 'Sigma'
};
const acervo = {
    type: 'Atirador',
    guns: [gun]
};
const cac = {
    name: 'Marcelo',
    crNum: 112233,
    validade: new Date('12/12/2020'),
    acervos: [acervo]
};
console.log(cac);
console.log(gun);
console.log(acervo);
gun.manufacturer = 'H&K';
gun.model = 'USP';
gun.sysReg = 'Sigma';
gun.serialNumber = 'GHFT678';
acervo.type = 'Caçador';
acervo.guns.push(gun);
cac.acervos.push(acervo);
console.log(cac);
console.log(gun);
console.log(acervo);
//o codigo acima não funciona como esperado.....precisa ser em classes mesmo.
const dados = [
    { "id": 1, "name": 'o primeiro' },
    { "id": 2, "name": 'o segundo' },
    { "id": 3, "name": 'o terceiro' }
];
console.log(dados[2]);
console.log(dados.find(d => d.name === 'o primeiro'));
