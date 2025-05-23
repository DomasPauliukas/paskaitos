
function CarsItem (props) {

    const { brand, model, engine, price, imageUrl, mileage, color, otherColor } = props.data

    let enginePrice = 0

    if (engine === 'electric') {
        enginePrice = 10000
    } else if (engine === 'hybrid') {
        enginePrice = 7500
    } else if (engine === 'diesel') {
        enginePrice = 5000
    }

    let colorPrice = 0

    if (color === 'special blue') {
        colorPrice = 500
    } else if (color ===  'other') {
        colorPrice = 3000
    }

    let discountPersentage = 0

    if (mileage > 400000) {
        discountPersentage = 50
    } else if (mileage > 100000) {
        discountPersentage = 30
    } else if (mileage > 50000) {
        discountPersentage = 20
    } else if (mileage > 20000) {
        discountPersentage = 15
    } else {
        discountPersentage = 10
    }

    const priceWithoutPvm = (price + enginePrice + colorPrice) * (100 - discountPersentage) / 100

    const pvmSum = priceWithoutPvm * 0.21

    return (
        <div style={{border: '1px solid black', width: '30%', padding:'20px'}}>
            <h3>Car price:</h3>
            <p>{brand} ({model})</p>
            <ol>
                <li>Initial price: {price} EUR</li>
                <li>Extra conditions:</li>
                <ol>
                   <li>Engine type - {engine}. (+ {enginePrice} EUR.)</li>
                   <li>Color - {color === 'other' ? otherColor : color}. (+ {colorPrice} EUR.)</li>
                   <li>Price increase: {enginePrice + colorPrice} EUR.</li>
                </ol>
                <li>Discount for mileage:</li>
                <ol>
                    <li>Car Mileage - {mileage} km.</li>
                    <li>Discount - {discountPersentage}%</li>
                </ol>
                <li>Final Price without PVM: {priceWithoutPvm} EUR.</li>
                <li>PVM: {pvmSum.toFixed(2)}</li>
                <li>Final Price: {pvmSum + priceWithoutPvm}</li>
            </ol>

            <img style={{width: '200px'}} src={imageUrl} alt="" />
        </div>
    )
}
export default CarsItem