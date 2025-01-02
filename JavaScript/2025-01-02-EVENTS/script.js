// Padarykite, kad paspaudus ant mygtuko išoktų alert su jūsų vardu! (naudoti inline metoda: onclick="")

{/* <button onclick="alert('Domas!')">click</button> */}


// Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį 😊 ).

let button = document.createElement('button')
button.textContent = 'Press'
document.body.append(button)

button.addEventListener('click', () => {
    alert('Domas!!!')
})


// Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.

let button2 = document.createElement('button')
button2.textContent = 'Paspausk'
document.body.append(button2)

let paragraph = document.createElement('p')
document.body.append(paragraph)

button2.addEventListener('click', () => {
    paragraph.textContent = 'Mano vardas Domas. Man 29 metai. As esu is Panevezio'
})


// Sukurkite programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja +1.

let task4 = document.createElement('h1')
document.body.append(task4)

let button4 = document.createElement('button')
button4.textContent = 'Press and get +1'
document.body.append(button4)

let counter = 0
button4.addEventListener('click', () => {
    counter++
    task4.textContent = counter
})


// Sukurkite programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą – išmeta, kad negalima kopijuoti.

let paragraph2 = document.createElement('p')
paragraph2.textContent = 'jksdakdsa jasddk djk dsajksdkj kj dskj dsjkjk dskjkj dskjjk sdjkjk dskjd kjjk sjkdfj gkdjf kgjkjdfkj kgjkfdjkg jdfk jgdkfj d jgjd kfgjdfh ghdfj gdfhg jdjfk gdkjfhgjhdfjk hgjkdfh gjdhfkj gdf gdf gd fdf gdf gdfgwa efsrg rdhdfghd fg dfhdfh rgc  fgdf sfg dfg sgd fdgfsgj ioeiaofw9u otiwuo uwoi ut90wi utoewjgsdvcxoijdvkcijfdkvxcufdkjxvc'
document.body.append(paragraph2)

paragraph2.addEventListener('copy', () => {alert('Negalima kopijuoti!')})


// Sukurkite programą, kur paspaudus ant mygtuko – sugeneruoja random skaičių nuo 1 iki 100 ir jį išveda kaip h1 tekstą.

let button5 = document.createElement('button')
button5.textContent = 'Get random number'
document.body.append(button5)

let task5 = document.createElement('h1')
document.body.append(task5)

button5.addEventListener('click', () => {
    task5.textContent = Math.floor(Math.random()*100)
})


// Sukurkite programą, kurioje du mygtukai – Turiu bent 18 metų ir Mažiau nei 18 metų. Jei paspaudžia ant pirmo mygtuko – išmeta h1 tekstą Alus. Jei antrą paspaudžia – išmeta alert su nepilnametis - nieko neturim.

let button18 = document.createElement('button')
button18.textContent = 'Turiu bent 18 metų'
document.body.append(button18)

let button0 = document.createElement('button')
button0.textContent = 'Mažiau nei 18 metų'
document.body.append(button0)

let task6 = document.createElement('h1')
document.body.append(task6)

button18.addEventListener('click',() => {
    task6.textContent = 'Alus! <3'
})

button0.addEventListener('click', () => {alert('Nepilnametis! Nieko neturim!')})


// Sukurkite programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole’inkite). Ekrane – trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja – iššoka alert("Yay"), jei ne – alert("Nay").


    let randomNum = Math.floor(Math.random()*3+1)
    console.log(randomNum)

let button8 = document.createElement('button')
button8.textContent = 1
document.body.append(button8)

button8.addEventListener('click', () => {
    if (Number(button8.textContent) === randomNum){
        alert ('Yay!')
    } else {
        alert ('Nay!')
    }
})

let button9 = document.createElement('button')
button9.textContent = 2
document.body.append(button9)

button9.addEventListener('click', () => {
    if (Number(button9.textContent) === randomNum){
        alert ('Yay!')
    } else {
        alert ('Nay!')
    }
})

let button10 = document.createElement('button')
button10.textContent = 3
document.body.append(button10)

button10.addEventListener('click', () => {
    if (Number(button10.textContent) === randomNum){
        alert ('Yay!')
    } else {
        alert ('Nay!')
    }
})


// Parašykite programą, kurioje būtų tekstas Nespauskite mygtuko. Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į Neklausote manęs.

document.body.addEventListener('click', () => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
      alert('Neklausote manęs');
    }
  });


//   Sukurkite h1, jam duokite 150vh aukštį ir 150vh line-height. Jame įrašykite Nejudinkite pelytės. Jeigu vartotojas pajudins pelytę – pakeiskite tekstą į Kiek galima neklausyti?!.

let lastTask = document.createElement('h1')
lastTask.textContent = 'Nejudinkite pelytes'
lastTask.style.height = '150vh'
lastTask.style.lineHeight = '150vh'
document.body.append(lastTask)

lastTask.addEventListener('mousemove', () => {
    lastTask.textContent = 'Kiek galima neklausyti?!'
})
