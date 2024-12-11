// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

// Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.

let data = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

console.log(data)

// 1.1. Pašalinti pirmą masyvo narį.

data.shift()
console.log(data)

// 1.2. Pašalinti paskutinį masyvo narį.

data.pop()
console.log(data)

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.

let middleNumber = data[Math.round((data.length - 1) / 2)]
console.log(middleNumber)

if (data.indexOf(middleNumber) === data.lastIndexOf(middleNumber)){

    console.log(data.indexOf(middleNumber))
}

data.splice(10,1)
console.log(data)

// 1.4. Pašalinti priešpaskutinį masyvo narį.

data.splice(-2,1)
console.log(data)

// 1.5. Pašalinti antrą masyvo narį.

data.splice(1,1)
console.log(data)

// 1.6. Pašalinti 7 ir 8 masyvo narius.

data.splice(6,2)
console.log(data)

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.

data.splice(-6,3)
console.log(data)

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.

data.splice(2,1,888)
console.log(data)

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.

data.splice(9,1,33,789,6543)
console.log(data)

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.

data.splice(-1,1,321,654,987)
console.log(data)

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.

data.splice(1,0,11)
console.log(data)

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.

data.splice(13,0,1)
console.log(data)

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.

data.splice(-1,0,-1)
console.log(data)

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.

data.unshift(1,2,3)
console.log(data)

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.

data.push(-333,-321,-312)
console.log(data)

// 1.16. Į masyvo vidurį pridėti skaičių 0.

let middleNumber2 = data[Math.round(data.length) / 2]
console.log(middleNumber2)
console.log(data.indexOf(33))

data.splice(13,0,0)
console.log(data)

// 1.17. Pašalinti pirmą masyvo narį.

data.shift()
console.log(data)

// 1.18. Pašalinti paskutinį masyvo narį.

data.pop()
console.log(data)

// 1.19. Į masyvo pradžią pridėti žodį "start".

data.unshift('start')
console.log(data)

// 1.20. Į masyvo pabaigą pridėti žodį "end".

data.push('end')
console.log(data)



//  ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']