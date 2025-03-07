import ShoppingCart from "./ShoppingCart"
import ShoppingProductList from "./ShoppingProductList"
import { ShoppingPageContextProvider } from "./ShoppingCartPageProvider"

const ShoppingCartPage: React.FC = () => {

    return (
        <div>
            <ShoppingPageContextProvider>

                <ShoppingProductList/>
                <ShoppingCart/>

            </ShoppingPageContextProvider>
        </div>
    )
}
export default ShoppingCartPage





// import axios from "axios"
// import { useEffect, useState } from "react"
// import { API_URL } from "./API_URL"
// import ShoppingCart from "./ShoppingCart"
// import ShoppingProductList from "./ShoppingProductList"
// import { ShoppingPageContextProvider } from "./ShoppingCartPageProvider"

// const ShoppingCartPage: React.FC = () => {

//     const [productsData, setProductsData] = useState([])
//     const [productCategory, setProductCategory] = useState('')
//     const [productToCart, setProductToCart] = useState([])
//     const [totalPrice, setTotalPrice] = useState(0)

//     // useEffect(() => {
//     //     const fetchProducts = async () => {
//     //         const { data } = await axios(`${API_URL}/products`)
//     //         setProductsData(data)        }
//     //     fetchProducts()
//     // }, [])

//     useEffect(() => {
//         let newTotalPrice = 0

//         productToCart.forEach(product => {
//             newTotalPrice += product.price
//         })
//         setTotalPrice(newTotalPrice)

//     }, [productToCart])


//     // const getCategoryHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {setProductCategory(event.target.value)}
//     // const filteredProducts = productsData.filter(product => product.category === productCategory)

//     // const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     //     const product = JSON.parse(event.target.value)
//     //     setProductToCart(prevState => [...prevState, product])}

//     // const deleteAllHandler = () => {setProductToCart([])}    
//     // const deleteOneHandler = (index) => {
//     //     const newCart = [...productToCart]
//     //     newCart.splice(index,1)
//     //     setProductToCart(newCart)
//     // }


//     return (
//         <div>
//             <ShoppingPageContextProvider>

//                 <ShoppingProductList
//                 // onCategory={getCategoryHandler}
//                 // productsData={productsData}
//                 // productCategory={productCategory}
//                 // filteredProducts={filteredProducts}
//                 // onAddToCart={addToCartHandler}
//                 />

//                 <ShoppingCart 
//                 // productToCart={productToCart} 
//                 // totalPrice={totalPrice}
//                 // onDeleteOne={deleteOneHandler}
//                 // onDeleteAll={deleteAllHandler}
//                 />


//             </ShoppingPageContextProvider>
//         </div>
//     )
// }
// export default ShoppingCartPage