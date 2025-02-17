import { useState } from "react"

function CitiesForm (props) {

    const { onNewCity } = props

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