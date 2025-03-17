
const num1 = 5
const num2 = 2
const answer = getAnswer(num1, num2)

function getAnswer (x, y) {
    return x + y
}

console.log(answer)

const casual = require('casual') // npm i casual

const sentence = casual.sentence
const city = casual.city

console.log(sentence)
console.log(city)


const colors = require('colors') // npm i colors

console.log('Testintam'.green)
console.log('Donald Trump'.america)

const sI = require('systeminformation') // npm i systeminformation

sI.cpu().then(data => {
    const {manufacturer, brand, model} = data

    console.log(`${manufacturer.yellow} brand: ${brand.america}, model: ${model.rainbow} `)
})

// const getCPU = async () => {
//     const data = await sI.cpu()
//     const {manufacturer, brand, model} = data

//     console.log(`${manufacturer.yellow} brand: ${brand.america}, model: ${model.rainbow} `)
// }

// getCPU()