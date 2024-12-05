console.log('labas')
console.log('')

let name = 'John' //let - iskviecia kintamaji
let pavarde = "Doe" // name, pavarde, miestas, amzius - tai kintamieji
let miestas = `Kaunas`
let amzius = 32
let yraStudentas = true //jei kintamasis daugiau nei vienas zodis, pirma raide mazoji, visi kiti is didziosios

console.log(name, typeof name) // typeof nurodo duomenu tipa
console.log(amzius, typeof amzius)
console.log(yraStudentas,typeof yraStudentas)

amzius = 42

console.log(amzius)

console.log(name + ' ' + pavarde + ' yra is ' + miestas + '.')
console.log(`Sveiki, ${name} ${pavarde} yra is ${miestas}.`)

// Pratimas 1
let names = 'Jonas'
let admin = names
alert (admin)