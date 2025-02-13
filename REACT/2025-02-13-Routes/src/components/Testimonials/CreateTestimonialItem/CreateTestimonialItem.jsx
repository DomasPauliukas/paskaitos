import './CreateTestimonialItem.css'

function CreateTestimonialItem (props) {

const { name, title, paragraph, imageSrc, verified } = props.data
    
if (!name || !paragraph) {
  return 
}

const verifiedText = verified ? 'Verified Graduate' : 'Not Verified'

let personPhoto = ''
if (imageSrc) {
  personPhoto = <img src={imageSrc} alt="" />
}

let titleText = title ? <section><h2>{title}</h2></section> : ''
// let titleText = title && <section><h2>{title}</h2></section>
// sitas budas tinka, jei title yra tada vykdo toliau koda po &&, jei nera - isveda undefined, t.y nebus nieko.
return (

    <div className="item">

        <header className="testimonialHeader">
            {personPhoto}

           <div className="initials">
             <span> {name} </span>
             <span> {verifiedText} </span>
           </div>
      </header>

       <main>
          {titleText}
          {/* vietoj kintamojo, galima rasyti tiesiai cia visa logika {} skliaustuose */}
          {/* {title ? 
          (<section><h2>{title}</h2></section>)
           : ('')} */}
          <section>
            <p>{paragraph}</p>
          </section>
      </main>
    </div>
)
}

export default CreateTestimonialItem