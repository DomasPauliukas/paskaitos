// Naudojant https://party-wedding.glitch.me/v1/party – pasiimkite informaciją iš šio puslapio ir naudodami skirtingus array metodus, transformuokite duomenis bei išveskite true/false ekrane – ar "Kristupas Lapeika" yra VIP, ar ne?

const textWrap = document.querySelector('#text')
const output = document.createElement('p')
textWrap.append(output)

const form = document.querySelector('#formText')
const button = document.querySelector('#checkButton')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const checkName = event.target.elements.name.value

    name(checkName)
})

async function name (checkName) {
 try{

    const res = await fetch(`https://party-wedding.glitch.me/v1/party`)
    const data = await res.json()
    
    let isVIP = false
    let nameFound = false

    data.forEach(person => {
        const name = person.name
        const vipStatus = person.VIP

        if (name === checkName){
            nameFound = true
            
            if (vipStatus){
            isVIP = true
        }}
    })
    if(!nameFound){
        output.textContent = 'There is no such name in the list'
        } else if (isVIP) {
        output.textContent = `${checkName} is a VIP`
        } else {
        output.textContent = `${checkName} is NOT a VIP`
        }

 } catch (err) {
    output.textContent = 'Something went wrong...'
 }
}


