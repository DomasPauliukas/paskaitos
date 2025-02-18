import { useState } from "react"
import CarsItem from "./CarsItem"

function CarsPage () {

    const carInfoData = [
        {
           brand: 'VW',
           model: 'Passat',
           engine: 'diesel',
           price: 22000,
           mileage: 85000,
           color: 'blue',
           imageUrl: 'https://motorfy.lv/design/img/upload/car/9781/20240628_184423.webp'
        },
        {
            brand: 'Audi',
            model: 'A3',
            engine: 'petrol',
            price: 38000,
            mileage: 50000,
            color: 'silver',
            imageUrl: 'https://img.autogidas.lt/10_1_7110593/audi-a3-2008-2010.jpg'
         }
    ]

    const [cars, setCars] = useState(carInfoData)

    console.log(cars)

    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [engine, setEngine] = useState('')
    const [price, setPrice] = useState('')
    const [mileage, setMileage] = useState('')
    const [color, setColor] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const BrandNameHandler = (event) => setBrand(event.target.value)
    const ModelNameHandler = (event) => setModel(event.target.value)
    const EngineTypeHandler = (event) => setEngine(event.target.value)
    const InitialPriceHandler = (event) => setPrice(Number(event.target.value))
    const MileageHandler = (event) => setMileage(Number(event.target.value))
    const CarColourHandler = (event) => setColor(event.target.value)
    const CarLinkHandler = (event) => setImageUrl(event.target.value)

    const FormSubmitHandler = (event) => {
        event.preventDefault()

    const newCar = {
        brand,
        model,
        engine,
        price,
        mileage,
        color,
        imageUrl
    }

    setCars((prevState) => [newCar, ...prevState])

    setBrand('')
    setModel('')
    setEngine('')
    setPrice('')
    setMileage('')
    setColor('')
    setImageUrl('')
}

    return (

        <div>
            
        <form onSubmit={FormSubmitHandler}>

            <h2>Fill the form and update a car information</h2>

            <div className="formControl">
                <label htmlFor="brandName">Brand: </label>
                <input type="text" value={brand} name="brandName" onChange={BrandNameHandler} />
            </div>

            <div className="formControl">
            <label htmlFor="modelName">Model: </label>
            <input type="text" name="modelName" value={model} onChange={ModelNameHandler} />
            </div>

            <div className="formControl">
            <label htmlFor="engineType">Engine Type: </label>
            <select name="engineType" id="engineType" value={engine} onChange={EngineTypeHandler}>
                <option value="Electric">Electric</option>
                <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            </div>

            <div className="formControl">
            <label htmlFor="initialPrice">Initial Price: </label>
            <input type="number" name="initialPrice" value={price} onChange={InitialPriceHandler} />
            </div>

            <div className="formControl">
            <label htmlFor="mileage">Mileage: </label>
            <input type="number" name="mileage" value={mileage} onChange={MileageHandler} />
            </div>

            <div className="formControl">
            <label htmlFor="carColour">Colour: </label>
            <select name="carColour" id="carColour" value={color} onChange={CarColourHandler}>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Silver">Silver</option>
                <option value="White">White</option>
                <option value="Special blue">Special blue</option>
                <option value="Other">Other</option>
            </select>
            </div>

            <div className="formControl">
            <label htmlFor="carLink">Image link: </label>
            <input type="text" name="carLink" value={imageUrl} onChange={CarLinkHandler} />
            </div>

            <button type="submit">Add Car</button>

        </form>

        {cars.map((car, index) => (
            <CarsItem
            key={index}
            data={car}
            />

        ))}





        </div>
    )
}

export default CarsPage