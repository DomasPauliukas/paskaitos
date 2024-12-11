//  ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:

let data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(data)
// 2.1. Gauti pirmą masyvo narį.

let newData = data.slice(0,1)
console.log(newData)

// 2.2. Gauti paskutinį masyvo narį.

let newData2 = data.slice(-1)
console.log(newData2)

// 2.3. Gauti antrą masyvo narį.

let newData3 = data.slice(1,2)
console.log(newData3)

// 2.4. Gauti priešpaskutinį masyvo narį.

let newData4 = data.slice(-2,-1)
console.log(newData4)

// 2.5. Gauti aštuntą masyvo narį.

let newData5 = data.slice(7,8)
console.log(newData5)

// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.

let newData6 = data.slice(-9,-8)
console.log(newData6)

// 2.7. Gauti vidurinį masyvo narį.

let middleNumber = data[Math.round((data.length - 1) / 2)]
console.log(middleNumber)
console.log(data.indexOf(0))

let newData7 = data.slice(13,14)
console.log(newData7)

// 2.8. Gauti pirmus tris masyvo narius.

let newData8 = data.slice(0, 3)
console.log(newData8)

// 2.9. Gauti paskutinius tris masyvo narius.

let newData9 = data.slice(-3)
console.log(newData9)

// 2.10. Gauti pirmus 10 masyvo narius.

let newData10 = data.slice(0, 10)
console.log(newData10)

// 2.11. Gauti paskutinius 10 masyvo narius.

let newData11 = data.slice(-10)
console.log(newData11)

// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).

let newData12 = data.slice(2, 8)
console.log(newData12)

// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).

let newData13 = data.slice(-9, -4)
console.log(newData13)

// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).

let newData14 = data.slice(10,19)
console.log(newData14)

// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).

let newData15 = data.slice(-17,-8)
console.log(newData15)

// 2.16. Gauti visus masyvo narius išskyrus pirmą.

let newData16 = data.slice(1)
console.log(newData16)

// 2.17. Gauti visus masyvo narius išskyrus paskutinį.

let newData17 = data.slice(0,-1)
console.log(newData17)

// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.

let newData18 = data.slice(5)
console.log(newData18)

// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.

let newData19 = data.slice(0, -5)
console.log(newData19)

// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).

let newData20 = data.slice(0,13)
console.log(newData20)

// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).

let newData21 = data.slice(14)
console.log(newData21)

// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.

let newData22 = data.slice(1,-1)
console.log(newData22)

// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.

let newData23 = data.slice(5,-3)
console.log(newData23)

// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.

let newData24 = data.slice(1, -8)
console.log(newData24)

// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.

let newData25 = data.slice(7,-1)
console.log(newData25)

// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.

let newData26 = data.slice(9,-12)
console.log(newData26)

// 2.27. Gauti 9 narius skaičiuojant nuo 11.

let newData27 = data.slice(10,19)
console.log(newData27)

// 2.28. Gauti 12 narių skaičiuojant nuo 8.

let newData28 = data.slice(7,19)
console.log(newData28)

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

let newData29One = data.slice(0,5)
let newData29Two = data.slice(-6)
let newData29 = `${newData29One} ${newData29Two}`
console.log(newData29)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.

let newData30One = data.slice(2,5)
let newData30Two = data.slice(14,17)
let newData30 = `${newData30One},${newData30Two}`
console.log(newData30)

let testing = newData30.slice(0)
console.log(testing)