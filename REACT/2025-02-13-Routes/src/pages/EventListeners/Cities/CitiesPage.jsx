import { useState } from "react"
import CitiesItem from "./CitiesItem"
import './CitiesPage.css'


const citiesData = [
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
const [name, setName] = useState('')
const [population, setPopulation] = useState('')
const [continent, setContinent] = useState('')
const [country, setCountry] = useState('')
const [touristAttractions, setTouristAttractions] = useState([])
const [isCapital, setIsCapital] = useState(false)



const nameHandler = (event) => {setName(event.target.value)}
const populationHandler = (event) => {setPopulation(event.target.value)}
const continentHandler = (event) => {setContinent(event.target.value)}
const countryHandler = (event) => {setCountry(event.target.value)}
const attractionHandler = (event) => {const attractions = event.target.value.split(',').map(attraction => attraction.trim());
    setTouristAttractions(attractions)}
const capitalHandler = (event) => {setIsCapital(event.target.checked)}


const formSubmitHandler = (event) => {
    event.preventDefault()

    const newCity = {
        name,
        population,
        location: {
            continent,
            country,
        },
        touristAttractions,
        isCapital,

    }
    
    setCitiesData(prevState => [newCity, ...prevState])
    console.log(touristAttractions)
    setName('')
    setPopulation('')
    setContinent('')
    setCountry('')
    setTouristAttractions([])
    setIsCapital(false)
    
    
}

    return (
    <>
        <form onSubmit={formSubmitHandler}>
        <div>
            <label htmlFor="name">City name: </label>
          <input
            type="text"
            name="name"
            placeholder="City Name"
            value={name}
            onChange={nameHandler}
            // required
          />
        </div>
        <div>
            <label htmlFor="population">Population: </label>
          <input
            type="number"
            name="population"
            placeholder="Population"
            value={population}
            onChange={populationHandler}
            // required
          />
        </div>
        <div>
            <label htmlFor="continent">Continent: </label>
          <input
            type="text"
            name="continent"
            placeholder="Continent"
            value={continent}
            onChange={continentHandler}
            // required
          />
        </div>
        <div>
            <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={countryHandler}
            // required
          />
        </div>
        <div>
            <label htmlFor="touristAttractions">Tourist attractions: </label>
          <input
            type="text"
            name="touristAttractions"
            placeholder="Tourist Attractions"
            value={touristAttractions}
            onChange={attractionHandler}
            required
          />
        </div>
        <div>
          <label>
            Capital City:
            <input
              type="checkbox"
              name="isCapital"
              value={isCapital}
              onChange={capitalHandler}
            />
          </label>
        </div>
        <button type="submit">Add City</button>
      </form>

        



        <div className="citiesWrapper">
            {cities.map((city,index) => (
                <CitiesItem
                key={index}
                data={city}
                />
            ))}
        </div>
    </>
    )
}
 export default CitiesPage