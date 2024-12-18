UŽDUOTIS:
1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
2. Prie objekto pridėti:
2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent dvi veiklos šalys).
2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
2.9. Property „contacts", kuris turės:
      2.9.1. „phone"
      2.9.2. „email"
      2.9.3. „address", kuris turės:
          2.9.3.1. „country"
          2.9.3.2. „city"
          2.9.3.3. „street"
          2.9.3.4. „apartment"
5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
6. Sukurti funkcijas, kurios:
       6.1. Pakeičia NVO statusą į true.
       6.2. Pakeičia NVO statusą į false.
       6.3. Keičia NVO statusą iš true į false ir iš false į true.
7. Sukurti funkcijas, kurios grąžina:
       7.1. Šalis, kuriose veikia įmonė į vieną string'ą.
       7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
8. Sukurti funkcijas, kurios prideda:
       8.1. Naują veiklos šalį prie šalių masyvo.
       8.2. Naują veiklos rūšį prie veiklų masyvo.
9. Sukurti funkcijas, kurios pašalina:
       9.1. Veiklos šalį iš šalių masyvo.
       9.2. Veiklos rūšį iš veiklų masyvo.

**************************************************** 1 BUDAS *********

       let companyObj = {
        'company name': 'Dell',
        opened: 2000,
        companyCode: 987654321,
        employees: 200,
        ceo: 'Domas Pauliukas',
        nvo: true,
        workingLocations: ['Lietuva', 'Latvija', 'Estija'],
        activityAreas: ['marketing', 'science', 'new-tech'],
        contacts: {
          phone: 861422278,
          email: 'domas0319@gmail.com',
          address: {
            country: 'Lietuva',
            city: 'Vilnius',
            street: 'Skroblu st.',
            apartment: 14,
            },
         },
        getAdress: function(){
          return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}`
        },
        isNVO: function (){
          return this.nvo = true
        },
        isNotNVO: function (){
          return this.nvo = false
        },
        changeNVO: function (){
          if (this.nvo === true){
            return this.nvo = false
          } else {
            return this.nvo = true
          }
        },
        locations: function (){
          return `imone veikia siose salyse: ${this.workingLocations.toString()}`
        },
        areas: function (){
          return `imone dirba siose srityse: ${this.activityAreas.toString()}`
        },
        addCountry: function (country){
          this.workingLocations.push(country)
          return this.workingLocations
        },
        addActivity: function (activity){
          this.activityAreas.push(activity)
          return this.activityAreas
        },
        removeCountry: function (country){
          for (let i = 0 ; i < this.workingLocations.length ; i++){
            if (this.workingLocations[i] === country){
              this.workingLocations.splice(i, 1)
              return this.workingLocations
            }
          }
        },
        removeActivity: function (activity) {
          for (let i = 0; i < this.activityAreas.length; i++) {
            if (this.activityAreas[i] === activity) {
              this.activityAreas.splice(i, 1)
              return this.activityAreas
            }
          }
        },  
      }
      
      console.log(companyObj)
      console.log(companyObj.getAdress())
      console.log(companyObj.isNVO())
      console.log(companyObj.isNotNVO())
      console.log(companyObj.changeNVO())
      console.log(companyObj.locations())
      console.log(companyObj.areas())
      console.log(companyObj.addCountry())
      console.log(companyObj.addActivity())
      console.log(companyObj.removeCountry())
      console.log(companyObj.removeActivity())

********************************************************* 2 BUDAS **********

let company2Obj = {}

company2Obj['company name'] = 'Topocentras'
company2Obj.opened = 1995
company2Obj.companyCode = 123456789
company2Obj.employees = 830
company2Obj.ceo = 'Domas Pauliukas'
company2Obj.nvo = true
company2Obj.workingLocations = ['Estija', 'Bulgarija', 'Kroatija', 'Lietuva']
company2Obj.activityAreas = ['Marketing', 'Sales', 'Technology']
let contactsObj = {
  phone: 861546885,
  email: 'domas0319@gmail.com',
  address: {
    country: 'Lietuva',
    city: 'Vilnius',
    street: 'Skroblu st',
    apartment: 14,
  },
}
company2Obj.contacts = contactsObj

let getAddress = function () {
  return `${contactsObj.address.street} ${contactsObj.address.apartment}, ${contactsObj.address.city}, ${contactsObj.address.country}.`
}
let isNVO = function () {
  return company2Obj.nvo = true
}
let isNotNVO = function () {
  return company2Obj.nvo = false
}
let changeNVO = function () {
  if (company2Obj.nvo === true){
    return company2Obj.nvo = false
  }
  if (company2Obj.nvo === false) {
    return company2Obj.nvo = true
  }
}
let allLocations = function () {
 let countriesString = company2Obj.workingLocations.join(', ')
 return `imone veikia siose salyse: ${countriesString}`
}
let allAreas = function () {
  let activitiesString = company2Obj.activityAreas.join(', ')
  return `imone atlieka sias sritis: ${activitiesString}`
}
let addCountry = function (country) {
  return company2Obj.workingLocations.push(country)
}
let addActivity = function (activity) {
  return company2Obj.activityAreas.push(activity)
}
let removeCountry = function (country){
  company2Obj.workingLocations = company2Obj.workingLocations.filter(num => num !== country)
}
let removeActivity = function (activity) {
  company2Obj.activityAreas = company2Obj.activityAreas.filter(num => num !== activity)
}
console.log(getAddress())
console.log(isNVO())
console.log(isNotNVO())
console.log(changeNVO())
console.log(allLocations())
console.log(allAreas())
addCountry('Germany')
addActivity('Advertising')
removeCountry('Estija')
removeActivity('Marketing')

console.log(company2Obj)