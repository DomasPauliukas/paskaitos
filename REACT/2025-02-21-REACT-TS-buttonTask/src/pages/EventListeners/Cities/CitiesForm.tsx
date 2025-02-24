import { useState } from "react"
import { CitiesData } from "./CitiesPage"

export type CitiesForm = {
  onNewCity: (city: CitiesData) => void
}

const CitiesForm: React.FC<CitiesForm> = (props) => {

    const { onNewCity } = props

    const [name, setName] = useState('')
    const [population, setPopulation] = useState('')
    const [continent, setContinent] = useState('')
    const [country, setCountry] = useState('')
    const [touristAttractions, setTouristAttractions] = useState<string[]>([])
    const [isCapital, setIsCapital] = useState(false)


    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}
    const populationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setPopulation(event.target.value)}
    const continentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setContinent(event.target.value)}
    const countryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setCountry(event.target.value)}
    const attractionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {const attractions = event.target.value.split(',').map(attraction => attraction.trim());
        setTouristAttractions(attractions)}
    const capitalHandler = (event: React.ChangeEvent<HTMLInputElement>) => {setIsCapital(event.target.checked)}


    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const newCity: CitiesData = {
            name,
            population: Number(population),
            location: {
                country,
                continent
            },
            touristAttractions,
            isCapital
        }
    
        onNewCity(newCity)
    
        setName('')
        setPopulation('')
        setContinent('')
        setCountry('')
        setTouristAttractions([])
        setIsCapital(false)
        
    }

    return (        
        <form onSubmit={formSubmitHandler}>

        <div>
            <label htmlFor="name">City name: </label>
          <input
            type="text"
            name="name"
            placeholder="City Name"
            value={name}
            onChange={nameHandler}
            required
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
            required
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
            required
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
            required
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
              checked={isCapital}
              onChange={capitalHandler}
            />
          </label>
        </div>
        <button type="submit">Add City</button>
      </form>
    )
}
export default CitiesForm