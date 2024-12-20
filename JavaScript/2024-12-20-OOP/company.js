class Company {
    constructor(companyName, opened, companyCode, employees, ceo, nvo, workingLocations, activityAreas) {
      this['company name'] = companyName
      this.opened = opened
      this.companyCode = companyCode
      this.employees = employees
      this.ceo = ceo
      this.nvo = nvo
      this.workingLocations = workingLocations
      this.activityAreas = activityAreas
      this.current = `imone buvo atidaryta: ` + this.opened + ` ir joje siuo metu dirba: ` + this.employees + ` darbuotojai.`
    }
    getAdress() {
      // return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}`
    }
    isNVO() {
      return this.nvo = true
    }
    isNotNVO() {
      return this.nvo = false
    }
    changeNVO() {
      if (this.nvo) {
        return this.nvo = false
      } else {
        return this.nvo = true
      }
    }
    locations() {
      return `imone veikia siose salyse: ${this.workingLocations.join(', ')}`
    }
    areas() {
      return `imone dirba siose srityse: ${this.activityAreas.join(', ')}`
    }
    addCountry(country) {
      this.workingLocations.push(country)
      return this.workingLocations
    }
    addActivity(activity) {
      this.activityAreas.push(activity)
      return this.activityAreas
    }
    removeCountry(country) {
      this.workingLocations = this.workingLocations.filter(num => num !== country)
      return this.workingLocations
    }
    removeActivity(activity) {
      this.activityAreas = this.activityAreas.filter(num => num !== activity)
      return this.activityAreas
    }
  }
  
  let company1 = new Company('Dell', 2000, 123456789, 50, true, true, ['Lithuania', 'Latvia', 'Estonia', 'Sweden'], ['Marketing', 'Science', 'Technologies'])
  console.log(company1)
  console.log(company1.current)

  let company2 = new Company('Topocentras', 1995, 1234789, 288, false, false, ['Lithuania', 'Latvia', 'Germany', 'France'], ['Marketing', 'Advertising', 'Technologies', 'HR'])
  console.log(company2)
  company2.addCountry('Canada')
  console.log(company2.current)
  
  class Organisation extends Company {
    constructor(companyName, opened, companyCode, employees, ceo, nvo, workingLocations, activityAreas, wealth) {
      super(companyName, opened, companyCode, employees, ceo, nvo, workingLocations, activityAreas)
      this.wealth = wealth
  }}
  
  let company3 = new Organisation('Avitela', 2010, 'LT-35211', 12, true, false, 'Lithuania', 'Sales', '855mln. EUR')
  console.log(company3)
  console.log(company3.current)