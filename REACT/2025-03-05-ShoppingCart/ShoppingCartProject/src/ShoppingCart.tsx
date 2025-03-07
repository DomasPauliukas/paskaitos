import ShoppingCartItem from "./ShoppingCartItem"
import { useCart } from "./ShoppingCartPageProvider"

const ShoppingCart: React.FC = () => {
    const { cart, clearCart } = useCart()


    let totalPrice = 0
    cart.forEach(item => {
        totalPrice += item.price * item.quantity
    })

    if (cart.length ===0) {
        return (
            <h2>Cart is empty...</h2>
        )
    }

    return (
        <div>
            <h2>Cart</h2>
            
            <div>
                {cart.map(item => 
                <ShoppingCartItem key={item.id} item={item}/>
                )}
            </div>


            {/* <form onSubmit={handleApplyDiscount}>
            <div className="formControl">
                <label htmlFor="discountForm">Discount code: </label>
                <input type="text" id="discountForm" value={discountCode}/>
            </div>
                <button type="submit">Apply</button>
            </form> */}


            {totalPrice > 0 && (
                <p>Total price: {totalPrice.toFixed(2)} EUR.</p>
            )}
            <button onClick={() => clearCart()}>clear all cart</button>
        </div>
    )
}

export default ShoppingCart
















// const ShoppingCart: React.FC = ({totalPrice, productToCart, onDeleteOne, onDeleteAll}) => {
//     return (
//         <>
//                 <h3>Your cart</h3>
//                 <div>

//                 {productToCart.length === 0 ? (
//                     <p>shopping cart is empty...</p>
//                 ) : (
//                     <ul>
//                         {productToCart.map((product, index) => (
//                         <li key={index}>
//                             {product.name} - price {product.price} eur.
//                             <button onClick={() => onDeleteOne(index)}>x</button>
//                         </li>
//                         ))}
//                     </ul> )}
//                         <h4>{totalPrice ? `Total price: ${totalPrice.toFixed(2)} eur.` : '' }</h4>
//                         {productToCart.length > 0 && (
//                             <button onClick={() => onDeleteAll()}>clear cart</button>
//                         )}
//                 </div>
//         </>
//     )
// }

// export default ShoppingCart