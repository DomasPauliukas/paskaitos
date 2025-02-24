import { useState } from "react"
import CarsItem from "./CarsItem"

const ENGINE_TYPES = [
    {
        label: 'Electric',
        value: 'electric'
    },
    {
        label: 'Diesel',
        value: 'diesel'
    },
    {
        label: 'Petrol',
        value: 'petrol'
    },
    {
        label: 'Hybrid',
        value: 'hybrid'
    }
]

export type CarInfo = {
    brand: string
    model: string
    engine: string
    price: number
    mileage: number
    color: string
    imageUrl: string
    otherColor?: string
}
const CarsPage: React.FC = () => {

    const carInfoData: CarInfo[] = [
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
    const [engine, setEngine] = useState('electric')
    const [price, setPrice] = useState('')
    const [mileage, setMileage] = useState('')
    const [color, setColor] = useState('black')
    const [imageUrl, setImageUrl] = useState('')
    const [otherColor, setOtherColor] = useState('')


    const BrandNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setBrand(event.target.value)
    const ModelNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setModel(event.target.value)
    const EngineTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => setEngine(event.target.value)
    const InitialPriceHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPrice(event.target.value)
    const MileageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setMileage(event.target.value)
    const CarColourHandler = (event: React.ChangeEvent<HTMLSelectElement>) => setColor(event.target.value)
    const CarLinkHandler = (event: React.ChangeEvent<HTMLInputElement>) => setImageUrl(event.target.value)
    const OtherColorHandler = (event: React.ChangeEvent<HTMLInputElement>) => setOtherColor(event.target.value)

    const FormSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()

    const newCar = {
        brand,
        model,
        engine,
        price: Number(price),
        mileage: Number(mileage),
        color,
        imageUrl,
        otherColor
    }

    setCars((prevState) => [newCar, ...prevState])

    setBrand('')
    setModel('')
    setEngine('electric')
    setPrice('')
    setMileage('')
    setColor('black')
    setImageUrl('')
    setOtherColor('')
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
                {ENGINE_TYPES.map(engine => (
                    <option key={engine.value} value={engine.value}>{engine.label}</option>

                ))}
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
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="silver">Silver</option>
                <option value="white">White</option>
                <option value="special blue">Special blue</option>
                <option value="other">Other</option>
            </select>
            </div>

        {color === 'other' && (
            <div className="formControl">
            <label htmlFor="otherColour">Other: </label>
            <input type="color" name="otherColour" value={otherColor} onChange={OtherColorHandler} />
            </div>
        )}


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