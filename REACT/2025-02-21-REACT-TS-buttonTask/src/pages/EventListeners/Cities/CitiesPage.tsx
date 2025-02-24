import { useState } from "react"
import CitiesItem from "./CitiesItem"
import './CitiesPage.css'
import CitiesForm from "./CitiesForm"

export type CitiesData = {
    name: string
    population: number
    location: {
        continent: string
        country: string
    }
    touristAttractions: string[]
    isCapital: boolean

}

const citiesData: CitiesData[] = [
    {
        name: 'Vilnius',
        population: 500000,
        location: {
            continent: 'Europe',
            country: 'Lithuania'
        },
        touristAttractions: ['Žalieji ežerai', 'Gedimino pilis'],
        isCapital: true
    },
    {
        name: 'Kaunas',
        population: 300000,
        location: {
            continent: 'Europe',
            country: 'Lithuania'
        },
        touristAttractions: ['Laisvės alėja', 'Soboras', 'Santaka', 'Milikonių kalnas'],
        isCapital: false
    },
    {
        name: 'Ryga',
        population: 300000,
        location: {
            continent: 'Europe',
            country: 'Latvia'
        },
        touristAttractions: ['Senamiestis', 'Bažnyčia'],
        isCapital: true
    },
    {
        name: 'Panevėžys',
        population: 100000,
        location: {
            continent: 'Europe',
            country: 'Lithuania'
        },
        touristAttractions: ['Senvagė', 'Riverside'],
        isCapital: false
    },
    {
        name: 'Klaipėda',
        population: 200000,
        location: {
            continent: 'Europe',
            country: 'Lithuania'
        },
        touristAttractions: ['Smiltynė', 'Jono kalnelis'],
        isCapital: false
    },
    {
        name: 'Anykščiai',
        population: 20000,
        location: {
            continent: 'Europe',
            country: 'Lithuania'
        },
        touristAttractions: ['Puntuko Akmuo'],
        isCapital: false
    },
    {
        name: 'Biržai',
        population: 12000,
        location: {
            continent: 'Europe',
            country: 'Lithuania'
        },
        touristAttractions: [],
        isCapital: false
    },
]
function CitiesPage () {

const [cities, setCitiesData] = useState(citiesData)


const setNewCityHandler = (newCity: CitiesData) => {
    setCitiesData(prevState => [newCity, ...prevState])
}

    return (
    <>

      <CitiesForm onNewCity={setNewCityHandler}/>

        <div className="citiesWrapper">
            {cities.map((city,index) => (
                <CitiesItem
                key={index}
                data={city}
                fullWidth={cities.length-1 === index && index % 2 === 0}
                />
            ))}
        </div>
    </>
    )
}
 export default CitiesPage