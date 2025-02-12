import logo from './assets/Desver_PNG.png'
import styles from './App.module.css'
import Heroes from './hero'
import Portfolio from './Portfolio'

function App() {
  console.log(styles.imageWrapper)
  return (
    <>
        <header>

          <div className={styles.imageWrapper}>
            <img src={logo} alt="" />
          </div>

          <nav className={styles.navWrapper}>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Company</a>
            <a href="#">Contact</a>
          </nav>

        </header>

        <main>

            <div className={styles.mainHeaderImage}>
              <p>Header Image</p>
            </div>

            <div className={styles.infoWrapper}>

              <div className={styles.infoItem}>
                  <h1>About</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil velit eum minima consectetur. Corporis voluptas maxime doloremque sunt beatae, in laudantium iure ipsum vero quod libero est nihil quos.</p>
              </div>
              <div className={styles.infoItem}>
                  <h1>Company</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil velit eum minima consectetur. Corporis voluptas maxime doloremque sunt beatae, in laudantium iure ipsum vero quod libero est nihil quos.</p>
              </div>
              <div className={styles.infoItem}>
                  <h1>Services</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil velit eum minima consectetur. Corporis voluptas maxime doloremque sunt beatae, in laudantium iure ipsum vero quod libero est nihil quos.</p>
              </div>

            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.textSection}>
              <div className={styles.content}>
                <h2>Content</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam eum obcaecati beatae suscipit delectus iste placeat excepturi velit, inventore rerum dolore a expedita repudiandae, corporis quasi culpa impedit sunt! Optio aspernatur deleniti officia aperiam sunt delectus quas in laboriosam?</p>
              </div>
              <div className={styles.subHeader}>
                <h2>Sub Header</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ipsam nam labore totam distinctio sed rerum minima magnam voluptatem quos consequatur eveniet vero odio architecto reiciendis numquam doloribus nobis quidem nesciunt, quis in perferendis dolorum. Enim non culpa dolorem maxime sapiente obcaecati blanditiis amet soluta, nesciunt voluptas quasi odio deleniti odit ab in repellendus fugit quisquam suscipit est officia quaerat?</p>
              </div>
              </div>

              <div className={styles.navigationText}>
                  <h2>Navigation</h2>
                  <a href="#">Home</a>
                  <a href="#">Product</a>
                  <a href="#">Company</a>
                  <a href="#">contact</a>
              </div>

            </div>
        </main>

        <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>


  <Heroes title='Hello' subtitle='Blue world' color='red'></Heroes>

  
  <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

    <Portfolio></Portfolio>
    </>
  )
}

export default App
