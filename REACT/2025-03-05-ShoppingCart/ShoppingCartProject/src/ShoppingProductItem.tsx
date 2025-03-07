import { useCart } from "./ShoppingCartPageProvider";
import { Product } from "./ShoppingCartReducer";

type ShoppingProductItemProps = {
    product: Product 
}

const ShoppingProductItem: React.FC<ShoppingProductItemProps> = ({product}) => {
const { addProduct, cart } = useCart()
const inCart = cart.find(item => item.id === product.id)
const quantityInCart = inCart ? inCart.quantity : 0;
const outOfStock = quantityInCart >= product.stock


    return(

      <div key={product.id} style={{textAlign:"center"}}>
        <img style={{width:"100px", height:"100px", objectFit:"cover"}} src={product.imageUrl} alt={product.name} />
        <h4 style={{margin:"0"}}>{product.name}</h4>
        <p style={{margin:"0"}}>Price: ${product.price}</p>
        {inCart && (
          <p>Already in the cart</p>
        )}
        {outOfStock ? (
          <button disabled>Out of stock</button>
        ) : (
        <button onClick={() => addProduct(product)}>
          {inCart ? 'Increase quantity' : 'Add to cart'}
        </button>
        )}
      </div>
    )
}
export default ShoppingProductItem















// interface ShoppingProductItemProps {
//   onAddtoCart: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   product: {
//     imageUrl: string;
//     name: string;
//     price: number;
//   };
//   index: number;
// }
// const ShoppingProductItem: React.FC<ShoppingProductItemProps> = ({onAddToCart, product, index}) => {
//   return(
//       <>
        //   <div style={{textAlign:"center"}} key={index}>
        //      <img style={{width:"100px", height:"100px", objectFit:"cover"}} src={product.imageUrl} alt={product.name} />
        //      <h4 style={{margin:"0"}}>{product.name}</h4>
        //      <p style={{margin:"0"}}>{product.price} EUR.</p>
        //      <button type="submit" onClick={(event) => onAddToCart(event)} value={JSON.stringify(product)}>add to cart</button>
        //  </div>
//       </>
//   )
// }
// export default ShoppingProductItem