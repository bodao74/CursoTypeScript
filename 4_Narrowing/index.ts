// 1 - Type guard

function soma(a: number | string, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        return parseFloat(a) + parseFloat(b);
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return ("Não foi possível fazer a soma !!");
    }
}

console.log(soma("7", "23"));
console.log(soma(44, 65));
console.log(soma("22", 67));

// 2- Checando se o valor existe

function operation(arg1: number[], operation?: string | undefined) {
    if (operation) {
        switch (operation) {
            case "sum":
                const sum = arg1.reduce((i, total) => i + total);
                console.log('Soma: ' + sum);
                break;
            case "prod":
                const prod = arg1.reduce((i, total) => i * total);
                console.log('Produto: ' + prod);
                break;
            default:
                console.log("Operação não suportada ! ! ! !");
                break;
        }
    } else {
        console.log('Favor definir uma operação !!!!');
    }
}

operation([1, 3, 5, 7, 9]);
operation([1, 3, 5, 7, 9], "sum");
operation([1, 3, 5, 7, 9], "prod");
operation([1, 3, 5, 7, 9], "div");

// 3 - Instanceof

class User {
    name: string
    constructor(name: string) {
        this.name = name;
    };
}

class SuperUser extends User {
    constructor(nome: string) {
        super(nome);
    }
}

const john = new User('John');
const paul = new SuperUser('Paul');

console.log(john);
console.log(paul);

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log('Olá ' + user.name + ' deseja checar os parametros?');
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}

userGreeting(john);
userGreeting(paul);


// 4 - Operador in

class Dog {
    name: string;
    breed: string | undefined;
    constructor(nome: string, breed?: string) {
        this.name = nome;
        if (breed) {
            this.breed = breed;
        }
    }
}

const turca = new Dog('Turca');
const bob = new Dog('Bob', 'German Shepard');

console.log(turca);
console.log(bob);

function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
        console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
    } else {
        console.log(`O cachorro ${dog.name} é SRD`);
    }
}

showDogDetails(turca);
showDogDetails(bob);


//  DESAFIO 3 v0

class Review {
    score: number | boolean;
    aval: string | undefined;
    constructor(score: number | boolean, aval?: string | undefined) {
        if (score <= 5 && score >= 0) {
            this.score = score;
        } else {
            this.score = false;
        }
        if (aval) {
            this.aval = aval;
        }
    }
}

const review1: Review = new Review(5, 'Muito bom');
const review2: Review = new Review(4);
let review3: Review = new Review(false);
console.log(review1);
console.log(review2);
console.log(review3);

//  DESAFIO 3 v1

function getReview(score: number | boolean | undefined) {
    let msg: string = '';
    switch (score) {
        case 5:
            msg = 'Aguardamos seu retorno.';
            break;
        case 4:
            msg = 'Obrigado pelo feedback.';
            break;
        case 3:
            msg = 'Trabalharemos para melhorar.';
            break;
        case 2:
            msg = 'Desculpe por qualquer inconveniente, vamos trabalhar para que não volte a ter problemas.'
            break;
        case 1:
            msg = 'Se desejar retornar o produto, entrar em contato com returns@email.com.br';
            break;
        case false:
            msg = 'Por favor, nos informe sobre sua experiência!';
            break;
        default:
            msg = 'Usuário não fez avaliação';
            break;
    }
    return msg;
}

let qualquer;
console.log(getReview(review1.score));
console.log(getReview(review2.score));
console.log(getReview(review3.score));
console.log(getReview(qualquer));


