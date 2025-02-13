import EmptyCartLogo from '../../../assets/DessertsImages/illustration-empty-cart.svg' 
import styles from './ShoppingCartWrap.module.css'

function ShoppingCartWrap () {
    return (
        <div className={styles.ShoppingCartWrap}>
            <div className={styles.ShoppingCartItem}>
                <p className={styles.cartTitle}>Your Cart (0)</p>
                <img className={styles.cartImage} src={EmptyCartLogo} alt="" />
                <p className={styles.cartDescription}>Your added items will appear here</p>
            </div>
        </div>
    )
}
export default ShoppingCartWrap