//  ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']


// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

let data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(data)

// issikelti tik skaicius :

let test1 = data.filter(function(num){
    return typeof num === "number"
})
console.log(test1)


let test2 = data.filter(function(num){
    return typeof num === 'string'
})
console.log(test2)


// 3.1. Gauti tik teigiamus skaičius.

let filteredData1 = data.filter(function(num){
    return num > 0
    
})
console.log(filteredData1)

// 3.2. Gauti tik neigiamus skaičius.

let filteredData2 = data.filter(num => num < 0)
console.log(filteredData2)

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.

let filteredData3 = data.filter(function(num){
    return num % 2 === 0
})
console.log(filteredData3)

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.

let filteredData4 = data.filter(function(num){
    return num % 3 === 0
})
console.log(filteredData4)

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.

let filteredData5 = data.filter(num => num % 5 === 0)
console.log(filteredData5)

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.

let filteredData6 = data.filter(function(num){
    return num % 11 === 0
})
console.log(filteredData6)

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.

let filteredData7 = data.filter((num) => num % 31 === 0)
console.log(filteredData7)

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.

let filteredData8 = data.filter(function(num){
    return num % 2 === 0 && num % 3 === 0
})
console.log(filteredData8)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.

let filteredData9 = data.filter(function(num){
    return num % 3 === 0 && num % 7 === 0
})
console.log(filteredData9)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.

let filteredData10 = data.filter(function(num){
    return num % 5 === 0 && num % 9 === 0
})
console.log(filteredData10)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.

let filteredData11 = data.filter(function(num){
    return num % 5 === 0 && num % 11 === 0
})
console.log(filteredData11)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.

let filteredData12 = data.filter(function(num){
    return num % 2 === 0 && num % 8 === 0 && num % 12 === 0
})
console.log(filteredData12)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.

let filteredData13 = data.filter(function(num){
    return num % 2 === 0 || num % 3 === 0
})
console.log(filteredData13)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.

let filteredData14 = data.filter(function(num){
    return num % 3 === 0 || num % 5 === 0
})
console.log(filteredData14)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.

let filteredData15 = data.filter(function(num){
    return num % 5 === 0 || num % 6 === 0
})
console.log(filteredData15)

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.

let filteredData16 = data.filter(function(num){
    return num % 7 === 0 || num % 8 === 0
})
console.log(filteredData16)

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.

let filteredData17 = data.filter(function(num){
    return num % 9 === 0 || num % 13 === 0
})
console.log(filteredData17)

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.

let filteredData18 = data.filter(function(num){
    return num % 2 === 0 || num % 3 === 0 || num % 5 === 0
})
console.log(filteredData18)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.

let filteredData19 = data.filter(function(num){
    return num % 5 === 0 || num % 7 === 0 || num % 9 === 0
})
console.log(filteredData19)

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.

let filteredData20 = data.filter(function(num){
    return num % 7 === 0 || num % 8 === 0 || num % 11 === 0
})
console.log(filteredData20)

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.

let filteredData21 = data.filter(function(num){
    return num % 9 === 0 || num % 12 === 0 || num % 13 === 0
})
console.log(filteredData21)


// 3.22. Gauti tik skaičius, kurie yra didesni už 100.

let filteredData22 = data.filter(num => num > 100)
console.log(filteredData22)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.

let filteredData23 = data.filter(num => num > 555)
console.log(filteredData23)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.

let filteredData24 = data.filter(num => num >= 888)
console.log(filteredData24)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.

let filteredData25 = data.filter(num => num >= 6789)
console.log(filteredData25)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.

let filteredData26 = data.filter(num => num < 50)
console.log(filteredData26)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.

let filteredData27 = data.filter(num => num < 1000)
console.log(filteredData27)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.

let filteredData28 = data.filter(num => num <= -1)
console.log(filteredData28)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.

let filteredData29 = data.filter(num => num <= -5564)
console.log(filteredData29)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.

let filteredData30 = data.filter(num => num > 500 && num < 1000)
console.log(filteredData30)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.

let filteredData31 = data.filter(num => num > 0 && num < 100)
console.log(filteredData31)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.

let filteredData32 = data.filter(num => num > -50 && num < 0)
console.log(filteredData32)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.

let filteredData33 = data.filter(num => num > -100 && num <= 0)
console.log(filteredData33)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.

let filteredData34 = data.filter(num => num >= 0 && num < 55)
console.log(filteredData34)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.

let filteredData35 = data.filter(num => num >= 444 && num <= 654)
console.log(filteredData35)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.

let filteredData36 = data.filter(num => num > 0 && num % 2 === 0)
console.log(filteredData36)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.

let filteredData37 = data.filter(num => num > 0 && num % 3 === 0)
console.log(filteredData37)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.

let filteredData38 = data.filter(num => num < 0 && num % 4 === 0)
console.log(filteredData38)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.

let filteredData39 = data.filter(num => num < 0 && num % 111 === 0)
console.log(filteredData39)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.

let filteredData40 = data.filter(num => num > 500 && num % 2 === 0)
console.log(filteredData40)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.

let filteredData41 = data.filter(num => num > 1000 && num % 3 === 0)
console.log(filteredData41)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.

let filteredData42 = data.filter(num => num < 1000 && num % 9 === 0)
console.log(filteredData42)

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.

let filteredData43 = data.filter(num => num < 500 && num % 2 === 0)
console.log(filteredData43)

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.

let filteredData44 = data.filter(num => num >= 33 && num % 3 === 0)
console.log(filteredData44)

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.

let filteredData45 = data.filter(num => num >= 444 && num % 12 === 0)
console.log(filteredData45)

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.

let filteredData46 = data.filter(num => num <= 155 && num % 5 === 0)
console.log(filteredData46)

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.

let filteredData47 = data.filter(num => num <= -333 && num % 9 === 0)
console.log(filteredData47)

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.

let filteredData48 = data.filter(num => num > 100 && num < 500 && num % 5 === 0)
console.log(filteredData48)

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.

let filteredData49 = data.filter(num => num >= 888 && num < 1000 && num % 2 === 0)
console.log(filteredData49)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.

let filteredData50 = data.filter(num => num >= -333 && num <= 888 && num % 3 === 0 && num != 0)
console.log(filteredData50)






// 3.51. Gauti tik skaičius.

let filteredData51 = data.filter(function(num){
    return typeof num === 'number'
})
console.log(filteredData51)

// 3.52. Gauti tik tekstus (string).

let filteredData52 = data.filter(num => typeof num === 'string')
console.log(filteredData52)

data = filteredData52

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.

let filteredData53 = data.filter(num => num.length > 5)
console.log(filteredData53)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.

let filteredData54 = data.filter(num => num.length <= 5)
console.log(filteredData54)

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.

let filteredData55 = data.filter(num => num.length < 7)
console.log(filteredData55)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.

let filteredData56 = data.filter(function(num){
    return num.includes('t')
})
console.log(filteredData56)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.

let filteredData57 = data.filter(function(num){
    return num.includes('y')
})
console.log(filteredData57)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.

let filteredData58 = data.filter(function(num){
    return num.includes('e') || num.includes('a')
})
console.log(filteredData58)

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.

let filteredData59 = data.filter(function(num){
    return num.includes('t') && num.includes('i')
})
console.log(filteredData59)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.

let filteredData60 = data.filter(function(num){
    return num.includes('t') && !num.includes('k')
})
console.log(filteredData60)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.

let filteredData61 = data.filter(function(num){
    return num.includes('a') && !num.includes('s')
})
console.log(filteredData61)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.



// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.

let filteredData63 = data.filter(function(num){
    return num.includes('st')
})
console.log(filteredData63)

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.

let filteredData64 = data.filter(function(num){
    return num.includes('nd')
})
console.log(filteredData64)

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.

let filteredData65 = data.filter(function(num){
    return !num.includes('s')
})
console.log(filteredData65)

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.

let filteredData66 = data.filter(function(num){
    return !num.includes('t')
})
console.log(filteredData66)

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.

let filteredData67 = data.filter(function(num){
    return !num.includes('r') && !num.includes('l')
})
console.log(filteredData67)

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.

let filteredData68 = data.filter(function(num){
    return Number(num.at(0))
})
console.log(filteredData68)

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.

let filteredData69 = data.filter(function(num){
    return num.at(0) === 's'
})
console.log(filteredData69)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.

let filteredData70 = data.filter(function(num){
    return num.at(0) === 'o'
})
console.log(filteredData70)

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.

let filteredData71 = data.filter(function(num){
    return num.at(-1) === 'd'
})
console.log(filteredData71)

// 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.

let filteredData72 = data.filter(function(num){
    return num.at(-1) === 's'
})
console.log(filteredData72)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.


let filteredData73 = data.filter(function(num){
    return num.length > 4 && num.includes('o')
})
console.log(filteredData73)

// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.

let filteredData74 = data.filter(function(num){
    return num.length >= 4 && num.includes('a')
})
console.log(filteredData74)

// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.

let filteredData75 = data.filter(function(num){
    num.length % 2 === 0
    return
})
console.log(filteredData75)

// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.

let filteredData76 = data.filter(function(num){
   return num.length % 2 !== 0 && num.includes('s')
})
console.log(filteredData76)

// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.

let filteredData77 = data.filter(num => num.at(2).includes('a'))
console.log(filteredData77)

// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.

let filteredData78 = data.filter(function(num){
    return num.length > 3 && num.at(3).includes('l')
})
console.log(filteredData78)

// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.

let filteredData79 = data.filter(function(num){
    return num.length > 4 && !num.at(4).includes('t')
})
console.log(filteredData79)

// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.

let filteredData80 = data.filter(function(num){
    return num.length < 6 && !num.at(0).includes('e') && isNaN(Number(num.at(0)))
})
console.log(filteredData80)