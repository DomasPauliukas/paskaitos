import AddToCartLogo from '../../../assets/DessertsImages/icon-add-to-cart.svg' 
import styles from './MenuItem.module.css'
function MenuItem (props) {

    const {category, name, price, image} = props.data
    const {desktop} = image
    console.log(desktop)

    return(
        <div className={styles.menuItem}>
            <div className={styles.imageWrapper}>
                <img src={desktop} alt="" />
            </div>
            <div className={styles.addToCart}>
                <img src={AddToCartLogo} alt="" />
                <p>Add to Cart</p>
            </div>
            <div className={styles.dessertInfoWrapper}>
                <p className={styles.dessertCategory}>{category}</p>
                <p className={styles.dessertName}>{name}</p>
                <p className={styles.dessertPrice}>${price.toFixed(2)}</p>
            </div>
        </div>
    )
}
export default MenuItem