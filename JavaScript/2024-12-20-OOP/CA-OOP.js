// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą turnOn – kuris alert’ins vrooom. Sukurkite du objektus ir patikrinkite ar veikia tesingai 🚗. 

*** KLASE ***

class Car {
    constructor () {
        this.brand = brand
        this.model = model
        this.engine = engine
    }
    turnON () {
        alert('vroooooom...')
    }
}

let car1 = new Car ('Audi', 'A5', '2.4')
console.log(car1)

let car2 = new Car ('BMW', 'X5', '3.0')
console.log(car2)

*** ***
function Car (brand, model, engine){
    this.brand = brand
    this.model = model
    this.engine = engine

    this.turnON = function () {
    alert('vroooooom...')
  }
}

let car1 = new Car('Audi', 'A5', '2.4')
console.log(car1)
car1.turnON()

let car2 = new Car('BMW', 'X5', '3.0')
console.log(car2)



// Pakoreguokite šį car konstruktorių.

// Pridėkite papildomą property basePrice ir metodą getPrice. 

// basePrice propertį įsirašys sukuriant objektą, tačiau getPrice, priklausomai nuo variklio, išmes kokia yra galutinė kaina. 

// Jei variklis electric – kaina bus +10,000

// Jei diesel +5,000

// Jei petrol – kaina tokia kokia ir basePrice

function Car(brand, model, basePrice, engine) {
    this.brand = brand
    this.model = model
    this.engine = engine
    this.basePrice = basePrice
  
    this.turnON = function () {
      alert('vroooooom...')
    }
    this.getPrice = function (){
      if (this.engine === 'electric') {
        return `galutine kaina: ${this.basePrice} + 10 000 EUR`
      }
      if (this.engine === 'diesel') {
        return `galutine kaina: ${this.basePrice} + 5 000 EUR`
      } else {
        return `galutine kaina: ` + this.basePrice
      }
    }
  }
  
  let car1 = new Car('Audi', 'A5', 32000, 'electric')
  console.log(car1)
  console.log(car1.getPrice())
  
  let car2 = new Car('BMW', 'X5', 17500, 'diesel')
  console.log(car2)
  console.log(car2.getPrice())


// Sukurkite klasę BankAccount, kuri turi savybes ownerName ir balance. Klasė taip pat turėtų turėti metodus deposit(amount) ir withdraw(amount), kurie atitinkamai didina arba mažina balance.

// Rezultatas:

// const account = new BankAccount("Jonas");
// account.deposit(100);
// account.withdraw(30);
// console.log(account.balance); // 70


class BankAccount {
    constructor(name, balance) {
      this.ownerName = name
      this.balance = balance
    }
  
    deposit (deposit = 0) {
        this.balance = deposit + this.balance
        return this.balance
      }
    withdraw (withdraw = 0) {
        this.balance = this.balance - withdraw
        return this.balance
      }
  
  }
  
  let owner1 = new BankAccount ('Jonas', 5000)
  console.log(owner1)
  owner1.deposit()
  owner1.withdraw()


// Sukurkite bazinę klasę Vehicle su savybėmis brand ir model. Taip pat sukurkite išvestines klases Car ir Bicycle. Car turi papildomą savybę engineType, o Bicycle - hasEngine. Kiekviena klasė turėtų turėti metodą information, kuris atspausdina visą turimą informaciją apie transporto priemonę.

// Klasių inicializavimo pavyzdys:


// const car = new Car("Toyota", "Corolla", "Petrol");
// console.log(car.information()); // "Brand: Toyota, Model: Corolla, Engine Type: Petrol"

// const bicycle = new Bicycle("Trek", "Marlin", true);
// console.log(bicycle.information()); // "Brand: Trek, Model: Marlin, Has Engine: true"

class Vehicle {
    constructor(brand, model) {
      this.brand = brand
      this.model = model
      this.information = `Brand: ${this.brand}, Model: ${this.model}`
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, model, engineType) {
      super(brand, model)
      this.engineType = engineType
      this.information = this.information + `, Engine Type: ${this.engineType}`
    }
  }
  class Bicycle extends Vehicle {
    constructor(brand, model, hasEngine) {
      super(brand, model)
      this.hasEngine = hasEngine
      this.information = this.information + `, Has Engine: ${this.hasEngine}`
  
    }
  }
  
  let car = new Car('Toyota', 'Corolla', 'Petrol')
  console.log(car)
  console.log(car.information)
  
  let bicycle = new Bicycle('Trek', 'Marlin', true)
  console.log(bicycle)
  console.log(bicycle.information)