import './App.css'
import imageDaniel from './assets/image-daniel.jpg'
import imageJeanette from './assets/image-jeanette.jpg'
import imageJonathan from './assets/image-jonathan.jpg'
import imageKira from './assets/image-kira.jpg'
import imagePatrick from './assets/image-patrick.jpg'
import CreateTestimonialItem from './CreateTestimonialItem'

function App() {

  return (
    <>
    <div className="outer-box">
      <div className="main-box">
        <div className="inner-box1">

        <CreateTestimonialItem
        name="Daniel Clifford"
        title="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
        paragraph="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
        imageSrc={imageDaniel}
        verified="true">
        </CreateTestimonialItem>

        <CreateTestimonialItem
        name="Jonathan Walters"
        title="The team was very supportive and kept me motivated"
        paragraph="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”"
        imageSrc={imageJonathan}
        verified="true">
        </CreateTestimonialItem>

        <CreateTestimonialItem
        name="Jeanette Harmon"
        title="An overall wonderful and rewarding experience"
        paragraph="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”"
        imageSrc={imageJeanette}
        verified="true">
        </CreateTestimonialItem>

        <CreateTestimonialItem
        name="Patrick Abrams"
        title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
        paragraph="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”"
        imageSrc={imagePatrick}
        verified={true}>
        </CreateTestimonialItem>

        </div>

        <div className="inner-box2">

        <CreateTestimonialItem
        name="Kira Whittle"
        title="Such a life-changing experience. Highly recommended!"
        paragraph="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”"
        imageSrc={imageKira}
        verified={true}>
        </CreateTestimonialItem>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
