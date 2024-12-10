// 1.                Spausdink skaičius

// Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 1 iki 5.


for ( let i = 1 ; i <= 5 ; i++)
    console.log(i)



// 2.                    Susumuok skaičius

// Sukurkite JavaScript programą, kuri suskaičiuoja sumą nuo 1 iki 5 naudojant while ciklą.


let i = 1
let suma = 0
while (i <= 5) {
  suma += i
  i++
}
console.log(suma)



// 3.                Lyginiai skaičiai
 
// Parašykite JavaScript for ciklą, kuris atspausdina visus lyginius skaičius nuo 2 iki 10.


for (let i = 2 ; i <=10 ; i = i + 2)
    console.log(i)



// 4.                   Kiekis cikle

// Sukurkite JavaScript programą, kuri naudojant while ciklą suskaičiuoja, kiek yra skaičių (nuo 1 iki 20), kurie dalijasi iš 3.


let i = 1
let kiekis = 0

while (i <= 20) {
  if (i % 3 === 0) {
    kiekis++
  }
  i++
}
console.log(kiekis)



// 5.                      Didžiausias skaičius

// Parašykite JavaScript programą, kuri randa didžiausią skaičių iš masyvo naudojant for ciklą.


let numbersArr = [-568, 1, 2, 3, 6, 8, 12, 4, 820, 7, -55, 458]
let max = numbersArr[0]

for (let i = 1; i <= numbersArr.length; i++) {
  if (numbersArr[i] > max) {
    max = numbersArr[i]
  }
}
console.log(max)




// 6.                        Daliklis

// Sukurkite JavaScript funkciją, kuri išspausdina visus skaičiaus 15 daliklius.

let dalikliai = ``

for (let i = 1; i <= 15; i++) {
  if (15 % i === 0) {
    dalikliai += `${i}, `
  }
}
console.log(dalikliai)


for (let i = 1; i <= 15; i++) {
  if (15 % i === 0) {
    console.log(i);
  }
}



// 7.                          Skaičių filtravimas

// Sukurkite JavaScript programą, kuri naudojant for ciklą išfiltruoja ir atspausdina visus nelyginius skaičius iš masyvo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Nelyginius skaičius saugokite naujame masyve oddNumbers


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let oddNumbers = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i])
  }
}
console.log(oddNumbers)




8.                      Pirminiai skaičiai

Parašykite JavaScript ciklą, kuris atspausdina visus pirminius skaičius nuo 1 iki 20.


for (let i = 1 ; i <= 20 ; i++)
    if(i % 1 === 0 && i % i === 0 )






9.                      Fibonačio seka

Parašykite JavaScript programą, kuri naudojant for ciklą atspausdina pirmus dešimt Fibonačio sekos skaičius.


