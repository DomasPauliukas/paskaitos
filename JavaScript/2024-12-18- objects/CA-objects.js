// Parašykite funkciją createPerson, kuri sukuria objektą su savybėmis: name, lastname ir age. Funkcija turi priimti šias savybes kaip argumentus ir grąžinti sukurtą objektą.

// Rezultatas:

// console.log(createPerson("Jonas", "Jonaitis", 30)); // { name: "Jonas", lastname: "Jonaitis", age: 30 }

let createPerson = function (name, lastname, age){
    return {
        name,
        lastname,
        age,
    }
}

console.log(createPerson('Jonas', 'Jonaitis', 30))



// Sukurkite funkciją printCarInfo, kuri atspausdina visą automobilio informaciją. Automobilis yra objektas su savybėmis: brand (markė), model (modelis), ir year (metai). Funkcija turi grąžinti eilutę su visomis automobilio savybėmis.

// Rezultatas:

// console.log(printCarInfo({ brand: "Toyota", model: "Corolla", year: 2020 })); // "Brand: Toyota, Model: Corolla, Year: 2020"
 
let carObj = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    printCarInfo: function (){
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    }
}
console.log(carObj.printCarInfo())


// Sukurkite funkciją printEmployeeInfo, kuri priima objektą, kuriame yra darbuotojų vardai kaip raktai ir jų pareigos kaip reikšmės. Funkcija turi atspausdinti kiekvieno darbuotojo vardą ir pareigas.

// Rezultatas

// printEmployeeInfo({ "Jonas": "Engineer", "Petras": "Manager" });
// // "Name: Jonas, Position: Engineer"
// // "Name: Petras, Position: Manager"


