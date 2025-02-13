import styles from './Testimonials.module.css'
import imageDaniel from '../assets/Testimonials/image-daniel.jpg'
import imageJeanette from '../assets/Testimonials/image-jeanette.jpg'
import imageJonathan from '../assets/Testimonials/image-jonathan.jpg'
import imageKira from '../assets/Testimonials/image-kira.jpg'
import imagePatrick from '../assets/Testimonials/image-patrick.jpg'
import MainTestimonials from '../components/Testimonials/MainTestimonials/MainTestimonials'
import SecondaryTestimonials from '../components/Testimonials/SecondaryTestimonials/SecondaryTestimonials'
// import CreateTestimonialItem from './components/CreateTestimonialItem/CreateTestimonialItem'

const mainTestimonialsData = [
    {
        name: "Daniel Clifford",
        title: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
        paragraph: "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
        imageSrc: imageDaniel,
        verified: true        
    },
    {
        name: "Jonathan Walters",
        title:"The team was very supportive and kept me motivated",
        paragraph:"“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
        imageSrc: imageJonathan,
        verified: true,
    },
    {
        name: "Jeanette Harmon",
        title:"An overall wonderful and rewarding experience",
        paragraph:"“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
        imageSrc: imageJeanette,
        verified: true, 
    },
    {
        name: "Patrick Abrams",
        title: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
        paragraph: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
        imageSrc: imagePatrick,
        verified: true       
    }
]
const secondaryTestimonialsData = [
    {
        name: "Kira Whittle",
        title: "Such a life-changing experience. Highly recommended!",
        paragraph: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
        imageSrc: imageKira,
        verified: true
    }
]

function Testimonials() {

  return (
    <>
    <div className={styles.outerBox}>
      <div className={styles.mainBox}>
        <MainTestimonials data={mainTestimonialsData}></MainTestimonials>
        <SecondaryTestimonials data={secondaryTestimonialsData}></SecondaryTestimonials>
      </div>
    </div>
    </>
  )
}

export default Testimonials