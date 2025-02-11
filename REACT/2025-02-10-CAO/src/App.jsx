import logo from './assets/Desver_PNG.png'
import './App.css'
import Heroes from './hero'

function App() {

  return (
    <>
        <header>

          <div className="image-wrapper">
            <img src={logo} alt="" />
          </div>

          <nav className='nav-wrapper'>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Company</a>
            <a href="#">Contact</a>
          </nav>

        </header>

        <main>

            <div className='main-header-image'>
              <p>Header Image</p>
            </div>

            <div className='info-wrapper'>

              <div className='info-item'>
                  <h1>About</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil velit eum minima consectetur. Corporis voluptas maxime doloremque sunt beatae, in laudantium iure ipsum vero quod libero est nihil quos.</p>
              </div>
              <div className='info-item'>
                  <h1>Company</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil velit eum minima consectetur. Corporis voluptas maxime doloremque sunt beatae, in laudantium iure ipsum vero quod libero est nihil quos.</p>
              </div>
              <div className='info-item'>
                  <h1>Services</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil velit eum minima consectetur. Corporis voluptas maxime doloremque sunt beatae, in laudantium iure ipsum vero quod libero est nihil quos.</p>
              </div>

            </div>

            <div className='content-wrapper'>
              <div className='text-section'>
              <div className='content'>
                <h2>Content</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam eum obcaecati beatae suscipit delectus iste placeat excepturi velit, inventore rerum dolore a expedita repudiandae, corporis quasi culpa impedit sunt! Optio aspernatur deleniti officia aperiam sunt delectus quas in laboriosam?</p>
              </div>
              <div className='subHeader'>
                <h2>Sub Header</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ipsam nam labore totam distinctio sed rerum minima magnam voluptatem quos consequatur eveniet vero odio architecto reiciendis numquam doloribus nobis quidem nesciunt, quis in perferendis dolorum. Enim non culpa dolorem maxime sapiente obcaecati blanditiis amet soluta, nesciunt voluptas quasi odio deleniti odit ab in repellendus fugit quisquam suscipit est officia quaerat?</p>
              </div>
              </div>

              <div className='navigation-text'>
                  <h2>Navigation</h2>
                  <a href="#">Home</a>
                  <a href="#">Product</a>
                  <a href="#">Company</a>
                  <a href="#">contact</a>
              </div>

            </div>
        </main>

        <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

        <div>
          <h1>

          </h1>
          <h2>

          </h2>
        </div>


  <Heroes title='Hello' subtitle='Blue world' color='blue'></Heroes>

  



    </>
  )
}

export default App
