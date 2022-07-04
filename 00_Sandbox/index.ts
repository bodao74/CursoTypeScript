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


interface Gun {
    manufacturer: string,
    model: string,
    caliber: string,
    serialNumber: string,
    sysReg: string
}

interface Acervo {
    type: 'Cidadao' | 'Colecionador' | 'Atirador' | 'Caçador',
    guns: Gun[]
}

interface CAC {
    name: string,
    crNum: number,
    validade: Date,
    acervos: Acervo[]
}

const gun: Gun = {
    manufacturer: 'S&W',
    model: 'MP9',
    caliber: '9mm',
    serialNumber: 'SW4534',
    sysReg: 'Sigma'
};

const acervo: Acervo = {
    type: 'Atirador',
    guns: [gun]
};

const cac: CAC = {
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