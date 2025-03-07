import { useCart } from "./ShoppingCartPageProvider"
import ShoppingProductItem from "./ShoppingProductItem"

const ShoppingProductList: React.FC = () => {
    const { productsData, selectedCategory, categoryChanger } = useCart()

const filteredProducts = selectedCategory
? productsData.filter(product => product.category === selectedCategory)
: productsData

    return (
       <div>
            <h1>Products:</h1>
            <div className="formControl">
                <label htmlFor="category">Select Category: </label>
             <select name="category" id="category" value={selectedCategory || ""} onChange={() => categoryChanger(event?.target.value)}>
                <option value="">--select category--</option>
                {[...new Set(productsData.map((product) => product.category))].map((category, index) => (
                <option key={index} value={category}>{category}</option>
                ))}
             </select>
            </div>


         {selectedCategory && (
               <div style={{display:"flex", flexWrap:"wrap", columnGap:"20px"}}>
               <h2 style={{width:'100%'}}>{selectedCategory}</h2>
                {filteredProducts.map((product) => (

                  <ShoppingProductItem key={product.id} product={product}/>
                ))}
               </div>
         )}

                
       </div>
    )
}
export default ShoppingProductList













// import ShoppingProductItem from "./ShoppingProductItem"

// const ShoppingProductList: React.FC = ({onCategory, productsData, productCategory, filteredProducts, onAddToCart}) => {
    
//     return (
//         <>
//     <h2>Products</h2>

//     <div className="formControl">
//             <label htmlFor="category">Select Category: </label>
//         <select name="category" id="category" onChange={() => onCategory(event)}>
//             <option value="">--select category--</option>
//             {[...new Set(productsData.map((product) => product.category))].map((category, index) => (
//             <option key={index} value={category}>{category}</option>
//             ))}
//         </select>
//     </div>

// {productCategory && (
//    <div style={{display:"flex", flexWrap:"wrap", columnGap:"20px"}}>
//        <h3 style={{width:"100%"}}>{productCategory}:</h3>
//        {filteredProducts.map((product, index) => (
//         <ShoppingProductItem
//         key={index}
//         product={product}
//         onAddToCart={onAddToCart}
//         />
//        ))}
//    </div>
// )}
//         </>
//     )
// }
// export default ShoppingProductList