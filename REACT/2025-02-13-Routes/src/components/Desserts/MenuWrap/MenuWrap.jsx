import styles from './MenuWrap.module.css'
import MenuItem from "../MenuItem/MenuItem"


function MenuWrap (props) {
    const {data} = props
    return (

      <div className={styles.menuWrapper}>
        <h1>Desserts</h1>
        <div className={styles.dessertsWrapper}>
            {data.map((item, index) => (
                <MenuItem key={index} data={item}/>
            ))}
        </div>
      </div>
    )
}
export default MenuWrap