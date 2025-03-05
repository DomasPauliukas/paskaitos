import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "./API_URl"

const ShoppingCartPage: React.FC = () => {

    const [productsData, setProductsData] = useState([])
    const [productCategory, setProductCategory] = useState('')
    const [productToCart, setProductToCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios(`${API_URL}/products`)
            setProductsData(data)        }
        fetchProducts()
    }, [])

    useEffect(() => {
        let newTotalPrice = 0

        productToCart.forEach(product => {
            newTotalPrice += product.price
        })
        setTotalPrice(newTotalPrice)

    }, [productToCart])


    const getCategoryHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {setProductCategory(event.target.value)}
    const filteredProducts = productsData.filter(product => product.category === productCategory)

    const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const product = JSON.parse(event.target.value)
        setProductToCart(prevState => [...prevState, product])}

    const deleteAllHandler = () => {setProductToCart([])}    
    const deleteOneHandler = (index) => {
        const newCart = [...productToCart]
        newCart.splice(index,1)
        setProductToCart(newCart)
    }


    return (
        <div>
            <h2>Products</h2>

                 <div className="formControl">
                    <label htmlFor="category">Select Category: </label>
                    <select name="category" id="category" onChange={getCategoryHandler}>
                        <option value="">--select category--</option>
                        {[...new Set(productsData.map((product) => product.category))].map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                    ))}
                    </select>
                 </div>

                {productCategory && (
                    <div style={{display:"flex", flexWrap:"wrap", columnGap:"20px"}}>
                        <h3 style={{width:"100%"}}>{productCategory}:</h3>
                        {filteredProducts.map((product, index) => (
                            <div style={{textAlign:"center"}} key={index}>
                                <img style={{width:"100px", height:"100px", objectFit:"cover"}} src={product.imageUrl} alt={product.name} />
                                <h4 style={{margin:"0"}}>{product.name}</h4>
                                <p style={{margin:"0"}}>{product.price} EUR.</p>
                                <button type="submit" onClick={addToCartHandler} value={JSON.stringify(product)}>add to cart</button>
                            </div>
                        ))}
                    </div>
                )}

                <h3>Your cart</h3>
                <div>

                {productToCart.length === 0 ? (
                    <p>shopping cart is empty...</p>
                ) : (
                    <ul>
                        {productToCart.map((product, index) => (
                        <li key={index}>
                            {product.name} - price {product.price} eur.
                            <button onClick={() => deleteOneHandler(index)}>x</button>
                        </li>
                        ))}
                    </ul> )}
                        <h4>{totalPrice ? `Total price: ${totalPrice.toFixed(2)} eur.` : '' }</h4>
                        {productToCart.length > 0 && (
                            <button onClick={deleteAllHandler}>clear cart</button>
                        )}
                </div>
        </div>
    )
}
export default ShoppingCartPage

