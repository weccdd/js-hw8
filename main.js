// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User( 1, `vasya`, `vasya22`, `vasya@gmail.com`,`+3806868559054` ),
    new User(18, `anton`, `anton46`, `anton@gmail.com`,`+380686559054` ),
    new User(65, `olga`, `olgaa8898`, `olga@gmail.com`,`+380686829054` ),
    new User(15, `ostap`, `ostap4464`, `ostap@gmail.com`,`+380686829054`),
    new User(8, `vanya`, `vanya136`, `vanya@gmail.com`,`+3806868298854` ),
    new User(2, `petro`, `petro665`, `petro@gmail.com`,`+380686588054`  ),
    new User(74, `pavlo`, `pavlodwd`, `pavlo@gmail.com`,`+3806868282254`),
    new User(12, `danylo`, `danylo84`, `danylo@gmail.com`,`+38068682908`),
    new User(9, `kolia`, `kolia646`, `kolia@gmail.com`,`+380686829338`  ),
    new User(10, `yulia`, `yulia5545`, `yulia@gmail.com`,`+380688290115`)];

console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((x) => x.id % 2 ===0))
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((x1, x2) => x1.id - x2.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
 function Client ( id, name, surname , email, phone, order){
    User.call(this, id, name, surname , email, phone,)
    this.order = order
}
let clients = [
    new Client( 1, `vasya`, `vasya22`, `vasya@gmail.com`,`+3806868559054` , ["apple", "milk", "energy drink", "bear", "ches", "orange"]),
    new Client(18, `anton`, `anton46`, `anton@gmail.com`,`+380686559054` , ["apple", "milk", "energy drink", "bear", "ches", "cola", "fanta"]),
    new Client(65, `olga`, `olgaa8898`, `olga@gmail.com`,`+380686829054` , ["apple", "milk", "energy drink", "bear"]),
    new Client(15, `ostap`, `ostap4464`, `ostap@gmail.com`,`+380686829054`, ["apple", "milk", "energy drink"]),
    new Client(8, `vanya`, `vanya136`, `vanya@gmail.com`,`+3806868298854` , ["apple"]),
    new Client(2, `petro`, `petro665`, `petro@gmail.com`,`+380686588054`  , ["apple", "milk",]),
    new Client(74, `pavlo`, `pavlodwd`, `pavlo@gmail.com`,`+3806868282254`, ["apple", "milk", "energy drink", "bear", "ches"]),
    new Client(12, `danylo`, `danylo84`, `danylo@gmail.com`,`+38068682908`, ["apple", "milk", "energy drink", "bear", "ches", "malone"]),
    new Client(9, `kolia`, `kolia646`, `kolia@gmail.com`,`+380686829338`  , ["apple", "milk", "energy drink", "bear", "ches", "orange", "bread"]),
    new Client(10, `yulia`, `yulia5545`, `yulia@gmail.com`,`+380688290115`, ["apple", "milk", "energy drink",])
];
 // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortResult = clients.sort((x1, x2) => x1.order.length - x2.order.length);
console.log(sortResult);
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, producer, year, maxSpeed, volume ){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = null;


    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    this.info= function (){
        for (const key in this) {
            if (typeof this[key] === 'function'){
                continue;
            }
            console.log(`${key.toUpperCase()}: ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed
    };
    this.changeYear = function (newValue){
        this.year = this.year + newValue
    };
    this.addDriver = function(driver) {
        this.driver = driver;
    };

}
let car1 = new Car("GT-R", "Nissan", 2008, 300, 3.8)
car1.drive();
car1.info();
car1.increaseMaxSpeed(25);
console.log("!!!!!!!NEW SPEED!!!!!!!");
car1.info();
console.log("!!!!!!!NEW YEAR!!!!!!!");
car1.changeYear(2);
car1.info();
console.log("!!!!!!!DRIVER!!!!!!!");
function Driver (name, age, exp) {
    this.name = name;
    this.age = age;
    this.exp = exp;
}
let driver = new Driver("anatoliy", 26, 2);
car1.addDriver("Ім'я: " + `${driver.name}  ` + "Вік: "+ `${driver.age}  ` +"Досвід: "+ `${driver.exp}`);
car1.info();

console.log("!!!!!!!");

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log("!!!!!!!!!!");

class Car1 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = null;
    };
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    info (){
        for (const key in this) {
            if (typeof this[key] === 'function'){
                continue
            }
            console.log(`${key.toUpperCase()}: ${this[key]}`);
        }
    };
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed
    };
    changeYear(newValue){
        this.year = this.year + newValue
    };
    addDriver(driver) {
        this.driver = driver;
    };
}
let car = new Car1("GT-R", "Nissan", 2008, 300, 3.8);
car.drive();
car.info();
car.increaseMaxSpeed(25);
console.log("!!!!!!!NEW SPEED!!!!!!!");
car.info();
console.log("!!!!!!!NEW YEAR!!!!!!!");
car.changeYear(2);
car.info();
console.log("!!!!!!!DRIVER!!!!!!!");
function Driver1 (name, age, exp) {
    this.name = name;
    this.age = age;
    this.exp = exp;
}
let driver1 = new Driver1("anatoliy", 26, 2);
car1.addDriver("Ім'я: " + `${driver.name}  ` + "Вік: "+ `${driver.age}  ` +"Досвід: "+ `${driver.exp}`);
car1.info();
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let cinderella = [
    new Cinderella("olga", 22, 35.5),
    new Cinderella("nastya", 33, 36),
    new Cinderella("anna", 28, 38),
    new Cinderella("katya", 23, 37.5),
    new Cinderella("vika", 21, 36.5),
    new Cinderella("yuliia", 27, 40),
    new Cinderella("olena", 18, 41),
    new Cinderella("oksana", 24, 40),
    new Cinderella("lesya", 32, 39),
    new Cinderella("tanya", 19, 39.5),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince("andriy", 33, 37.5)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderellaSize of cinderella) {
    if (prince.foundShoe === cinderellaSize.footSize){
        console.log(`Принц знайшов свою попелюшку:` + `${cinderellaSize.name}`)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderella.find((cinderella) => cinderella.footSize === prince.foundShoe));
