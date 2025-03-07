import { useCart } from "./ShoppingCartPageProvider"
import { CartProduct } from "./ShoppingCartReducer"

type ShoppingCartItemProps = {
    item: CartProduct
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({item}) => {
    const { updateQuantity, removeProduct } = useCart()
    const totalItemPrice = item.price * item.quantity
    return (
        <div>
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: {item.price} eur x {item.quantity} = {totalItemPrice.toFixed(2)} eur.</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+1</button>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-1</button>
                <button onClick={() => removeProduct(item.id)}>remove from cart</button>
            </div>
        </div>
    )
}
export default ShoppingCartItem