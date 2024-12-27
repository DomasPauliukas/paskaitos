// Sukurkite Book klasę su savybėmis title, author ir year. Pridėkite metodą getSummary(), kuris grąžina santrauką apie knygą.

// Inicializacijos ir naudojimo pavyzdys:

// const book1 = new Book("Book Title", "Author Name", "2023");
// console.log(book1.getSummary()); // "Book Title by Author Name published in 2023"


class Book {
    constructor (title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    getSummary (){
        return `Book ${this.title} by author ${this.author} published in ${this.year}`
    }
}

let book1 = new Book ('Harry Potter', 'J.K. Rowling', 2010)
console.log(book1.getSummary())


// Sukurkite klasę MusicStudent, kuri saugo informaciją apie muzikos mokyklos studentus. Studentas turi name (vardas), instrument (muzikos instrumentas, kurį jis mokosi groti) ir level (lygis, pvz., pradedantysis, pažengęs). Pridėkite metodą practice, kuris didina studento lygį. Pagal nutylėjimas studento lygis turėtų būti "beginner".

// Inicializacijos ir naudojimo pavyzdys:

// const student = new MusicStudent("Anna", "piano");
// student.practice();
// console.log(`${student.name}, ${student.instrument}, ${student.level}`); // "Anna, piano, intermediate"


class MusicStudent {
    constructor(name, instrument, level = 'beginner') {
      this.name = name
      this.instrument = instrument
      this.level = level
    }
    practice() {
      if (this.level === 'beginner'){
      return this.level = 'intermediate'
      } else if (this.level === 'intermediate'){
        return this.level = 'advanced'
      }
    }
  }
  
  let student = new MusicStudent('Anna', 'piano')
  student.practice()
  console.log(student)
  console.log(`${student.name}, ${student.instrument}, ${student.level}`)


// Sukurkite ShoppingCart klasę, kuri gali pridėti prekes (addItem), pašalinti prekes (removeItem) ir apskaičiuoti bendrą kainą (calculateTotal). Prekės yra objektai su savybėmis name ir price.

// Inicializacijos ir naudojimo pavyzdys:

// const cart = new ShoppingCart();
// cart.addItem({ name: "Apple", price: 0.99 });
// cart.addItem({ name: "Bread", price: 1.29 });
// console.log(cart.calculateTotal()); // 2.28
// cart.removeItem("Apple");
// console.log(cart.calculateTotal()); // 1.29

class ShoppingCart {
    constructor() {
        this.items = []
      }
      addItem (obj){
        this.items.push(obj)
      }
      removeItem (removedItem){
        this.items = this.items.filter(item => item.name !== removedItem)
        return this.items
      }
      calculateTotal () {
        let cartSum = 0
        this.items.forEach(itemsCart => {
          cartSum += itemsCart.price
        })
          return cartSum.toFixed(2)
      }
  }
  
  let cart = new ShoppingCart()
  console.log(cart)
  cart.addItem({name:'Apples', price: 1.28})
  cart.addItem({name:'Pears', price: 2.50})
  cart.addItem({name:'Bananas', price: 1.55})
  cart.addItem({name:'Strawberries', price: 9.00})
  console.log(cart.calculateTotal())
  cart.removeItem('Pears')


  Sukurkite MovieTheater klasę, skirtą valdyti kino teatro sėdimų vietų rezervacijoms. Klasė turi turėti šias savybes: rows (eilučių skaičius) ir seatsPerRow (vietų skaičius eilutėje). Vietos turi būti saugomos dvimačiame masyve, kur kiekviena vieta gali būti true (užimta) arba false (laisva). Taip pat klasėje turi būti šie metodai:

  bookSeat(row, seat) - metodas vietos rezervavimui. Jei vieta jau užimta, turi būti grąžinamas pranešimas apie tai.
  
  cancelBooking(row, seat) - metodas rezervacijos atšaukimui. Jei vieta nebuvo rezervuota, turi būti grąžinamas atitinkamas pranešimas.
  
  checkAvailability(row, seat) - metodas, grąžinantis true arba false, priklausomai nuo to, ar vieta yra laisva.
  
  Inicializacijos ir naudojimo pavyzdys:
  
  
  const theater = new MovieTheater(5, 5);
  theater.bookSeat(2, 3);
  console.log(theater.checkAvailability(2, 3)); // false
  theater.cancelBooking(2, 3);
  console.log(theater.checkAvailability(2, 3)); // true






  Jūs turite sukurti dvi klases: Book ir Library. 

Book klasė atstovauja knygą ir turi savybes title (pavadinimas), author (autorius), ir year (išleidimo metai). Gali panaudoti iš pirmos užduoties. 

Library klasė valdo knygų kolekciją ir skolinimo procesą. Ji turi šias funkcijas:

addBook(book): Prideda naują Book objektą į bibliotekos kolekciją.

lendBook(bookTitle, userName): Išduoda knygą vartotojui, jei ji yra prieinama. Saugo informaciją apie skolininką.

returnBook(bookTitle): Grąžina knygą į biblioteką.

listAvailableBooks(): Atspausdina sąrašą visų prieinamų knygų.

Inicializacijos ir naudojimo pavyzdys:


const library = new Library();
library.addBook(new Book("Book1", "Author1", "2020"));
library.addBook(new Book("Book2", "Author2", "2021"));
library.lendBook("Book1", "User1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021"
library.returnBook("Book1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021", "Book1 by Author1 published in 2020"



class Book {
    constructor (title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
}

class Library {
    
}