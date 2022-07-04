let title: string = '';
let subtitle: string = '';
// 1- Campos em classes
title = '==========1- Campos em classes=========';
console.log(title);

class User {
    name!: string;
    age!: number;
}

const usuario1: User = new User();

console.log(usuario1);

const usuario2: User = new User();

usuario2.name = 'Marcelo';
usuario2.age = 47;

console.log(usuario2);


// 2- Constructor
title = '==========2- Constructor=========';
console.log(title);

class NewUser {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
}

//const jack: NewUser = new NewUser(); // erro: pois não foram fornecidos os valores esperados pelo construtor.
const john: NewUser = new NewUser('John', 33);
console.log(john);

// 3- Propriedade ReadOnnly
title = '==========3- Propriedade ReadOnnly=========';
console.log(title);

class Car {
    name: string;
    readonly wheels: number = 4;
    constructor(name: string) {
        this.name = name;
    }
}

const fusca: Car = new Car('Fusca');
console.log(fusca);
//fusca.wheels = 8; //erro....readonly property


// 4- Herança e Super
title = '==========4- Herança e Super=========';
console.log(title);

class Machine {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class KillerMachine extends Machine {
    guns: number;
    constructor(name: string, guns: number) {
        super(name); //chamada para o construtor da classe pai.
        this.guns = guns;
    }
}

const boat: Machine = new Machine('barquinho');
const destroyer: KillerMachine = new KillerMachine('barcao', 67);

console.log(boat);
console.log(destroyer);


// 5- Métodos
title = '==========5- Métodos=========';
console.log(title);

class Dwarf {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greeting() {
        console.log('Whats Up!!!!');
    }
}

const jimmy: Dwarf = new Dwarf('Jimmy');

console.log(jimmy.name);
console.log(jimmy);
jimmy.greeting();


// 6- This
title = '==========6- This=========';
console.log(title);

class Truck {
    model: string;
    hp: number;
    constructor(model: string, hp: number) {
        this.hp = hp;
        this.model = model;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.model} e de potência ${this.hp}`)
    }
}

const volvo: Truck = new Truck('volvo', 400);
const scania: Truck = new Truck('scania', 650);

volvo.showDetails();
scania.showDetails();

// 7- Getters
title = '==========7- Getters=========';
console.log(title);


class Person {
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
    get fullName(): string {
        return this.name + ' ' + this.surname;
    }
}

const pessoa: Person = new Person('Michael', 'Stonebridge');

console.log(pessoa.name);
console.log(pessoa.surname);
console.log(pessoa.fullName); // Não pode usar  os () pois não é uma função, mas uma propriedade.

// 8- Setters
title = '==========8- Setters=========';
console.log(title);

class Coordenates {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    set fillX(coord: number) {
        this.x = coord;
        console.log('X setted successfully!');
    }

    set fillY(coord: number) {
        this.y = coord;
        console.log('Y setted successfully!');
    }

    get showCoordenates(): string {
        return ('Coordenates are X: ' + this.x + ' and Y: ' + this.y);
    }
}

const myCoords: Coordenates = new Coordenates(33, 56.78);

console.log(myCoords.showCoordenates);

myCoords.fillX = 21.5; // da mesma forma que o Get, o  Set passaa a ser uma propriedade da classe.
myCoords.fillY = 75.9; // da mesma forma que o Get, o  Set passaa a ser uma propriedade da classe.

// 9- Herança - Interface
title = '========== 9 - Herança - Interface =========';
console.log(title);

interface showTitle {
    itemTitle(): string;
}

class blogPost implements showTitle {
    private title: string;
    constructor(title: string) {
        this.title = title;
    }

    itemTitle(): string {
        return 'Title is: ' + this.title;
    }

}

const post: blogPost = new blogPost('This sucks ! ! !');

console.log(post.itemTitle());

class TestingInterface implements showTitle {
    private title;
    constructor(title: string) {
        this.title = title;
    }
    itemTitle(): string {
        return 'New interface itemtitle() with title: ' + this.title;
    }
}

const newpost: blogPost = new blogPost('This Rocks ! ! !');

console.log(newpost.itemTitle());

// 10 - Override
title = '========== 10 - Override =========';
subtitle = '===== abrange aulas 11 Public e parte da 12 protected ======';
console.log(title);
console.log(subtitle);

class BaseClass {

    protected name: string;
    constructor(name: string) {
        this.name = name;
    };

    showName(): string {
        console.log(this.name);
        return this.name;
    }
}

class ChildClass extends BaseClass {
    protected lastname: string;
    constructor(firstname: string, lastname: string) {
        super(firstname); //chamada para o construtor da classe pai
        this.lastname = lastname;
    }
    showName(): string {
        return 'O nome completo é: ' + this.name + ' ' + this.lastname
    }
}

const michael: BaseClass = new BaseClass('Michael');
const johnny: ChildClass = new ChildClass('Johnny', 'Smith');

console.log(michael.showName());
console.log(johnny.showName());


// 12 - Protected
title = '========== 12 - protected =========';
console.log(title);

class E {

    protected x: number = 10;
    protected protectedMethod() {
        console.log('X esta proegido....acesso na classe pai: ' + this.x);
    }
}

class F extends E {

    showX() {
        console.log('Acesso desde a classe FILHA. X: ' + this.x);
    }

    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance: F = new F();
fInstance.showX();
fInstance.showProtectedMethod();

// 13 - Private
title = '========== 13 - private =========';
console.log(title);


class privClass {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    showName() {
        return this.name;
    }
    private privMethod() {
        console.log('Método Privado !!!');
    }
    showPrivateMethod() {
        this.privMethod();
    }
    setName(newname: string) {
        this.name = newname;
    }
}

const myObj1: privClass = new privClass('Michael');

// console.log(myObj1.name); // erro, name não acessível.

console.log(myObj1.showName());
//console.log(myObj1.privMethod()); //erro, método não acessível.
myObj1.showPrivateMethod();

class TestPrivateClasses extends privClass {
    myMethod() {
        //this.privMethod(); // erro, método privado.
        this.showPrivateMethod();
    }
}



// 14 - Static
title = '========== 14 - Static =========';
console.log(title);

class MyStaticClass {
    //particularidade de propriedade name: se não colocar um public, private etc, ele conflita com a propriedade name default de uma classe.
    static classMyName: string = 'Michael';
    r: number = 10; // só acessível por um objeto instaciado.

    static myStaticMethod() {
        console.log(MyStaticClass.classMyName); //se não usar o nome da classe não funciona. o This não resolve o issue.

    }

    myR() { // método só pode ser acessado através de um objeto instanciado.
        console.log(this.r);
    }

}
//console.log(MyStaticClass.classMyName); // erro (sem declaração static), propriedade não existe. se não instanciar um objeto, não consegue usar a propriendade.
console.log(MyStaticClass.classMyName);
MyStaticClass.myStaticMethod();//erro (sem declaração static), metodo não existe. se não instanciar um objeto, não consegue usar o metodo sem static.
//MyStaticClass.myR(); // Senão instanciar um OBJ, não consegue acessar.


// 15 - Generica Class
title = '========== 15 - Generic Class =========';
console.log(title);

class MyGenericClass<T, U>{
    first: T;
    second: U;
    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    get dadosClasse(): string {
        return `O primeiro é ${this.first} e o segundo é ${this.second}`;
    }
}

const item1 = new MyGenericClass('Michael', 'Stonebridge');
const item2 = new MyGenericClass(35, true);

console.log(item1);
console.log(typeof item1.first);

console.log(item2);
console.log(typeof item2.first);
console.log(typeof item2.second);

// 16 - Parameter Properties
title = '========== 16 - Parameter Properties =========';
console.log(title);

class ParameterClass {
    constructor(
        public itemName: string,
        private qty: number,
        private price: number
    ) { }

    get showQty() {
        return this.qty;
    }

    get showPrice() {
        return this.price;
    }
}
const myparam: ParameterClass = new ParameterClass('Shirt', 42, 55.99);
console.log(myparam.itemName);
///console.log(myparam.qty); // erro, não acessível
console.log('A quantidade do item é: ' + myparam.showQty);
console.log('O preço é: R$' + myparam.showPrice);


// 17 - Class Expressions
title = '========== 17 - Class Expression =========';
console.log(title);
const myGenClass = class <T>{
    constructor(public parametro1: T) {
    };
}

const myPerson = new myGenClass('Michael');

console.log(myPerson.parametro1);

// 18 - Abstract Class
title = '========== 18 - Abstract Class =========';
console.log(title);

abstract class myAbstractClass{
    abstract showName(): void;
}

//const ob1: myAbstractClass = new myAbstractClass(); // erro: não pode criar uma instancia de classe abstrata.

class MinhaClasseExemplo extends myAbstractClass{
    constructor(public myName: string) {
        super();
    };
    
    showName(): void {
        console.log(this.myName);
    }
}

const meuObj1: MinhaClasseExemplo = new MinhaClasseExemplo('Michael');

meuObj1.showName();

// 19 - Relação entre classes
title = '========== 19 - Relação entre classes =========';
console.log(title);

class Dog{
    aname!: string;
}


class Cat{
    aname!: string;
}

const dog: Dog = new Cat(); // valida o interior da classe e não  o nome.

console.log(dog);

