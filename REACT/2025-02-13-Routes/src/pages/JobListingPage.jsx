import './JobListingPage.css'

import PhotosnapLogo from '../assets/JobListing/photosnap.svg'
import ManageLogo from '../assets/JobListing/manage.svg'
import AccountLogo from '../assets/JobListing/account.svg'
import MyHomeLogo from '../assets/JobListing/myhome.svg'
import LoopStudiosLogo from '../assets/JobListing/loop-studios.svg'
import FaceItLogo from '../assets/JobListing/faceit.svg'
import ShortlyLogo from '../assets/JobListing/shortly.svg'
import InsureLogo from '../assets/JobListing/insure.svg'
import EyecamLogo from '../assets/JobListing/eyecam-co.svg'
import AirFilterLogo from '../assets/JobListing/the-air-filter-company.svg'

import Header from "../components/JobListings/Header/Header"
import JobListingItem from '../components/JobListings/JobListingItem/JobListingItem'




const JobListingData = [
    {
      id: 1,
      company: "Photosnap",
      logo: PhotosnapLogo,
      new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: []
    },
    {
      id: 2,
      company: "Manage",
      logo: ManageLogo,
      new: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"]
    },
    {
      id: 3,
      company: "Account",
      logo: AccountLogo,
      new: true,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"]
    },
    {
      id: 4,
      company: "MyHome",
      logo: MyHomeLogo,
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
      tools: []
    },
    {
      id: 5,
      company: "Loop Studios",
      logo: LoopStudiosLogo,
      new: false,
      featured: false,
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Ruby"],
      tools: ["Sass"]
    },
    {
      id: 6,
      company: "FaceIt",
      logo: FaceItLogo,
      new: false,
      featured: false,
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      languages: ["Ruby"],
      tools: ["RoR"]
    },
    {
      id: 7,
      company: "Shortly",
      logo: ShortlyLogo,
      new: false,
      featured: false,
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"]
    },
    {
      id: 8,
      company: "Insure",
      logo: InsureLogo,
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"]
    },
    {
      id: 9,
      company: "Eyecam Co.",
      logo: EyecamLogo,
      new: false,
      featured: false,
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"]
    },
    {
      id: 10,
      company: "The Air Filter Company",
      logo: AirFilterLogo,
      new: false,
      featured: false,
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"]
    }
  ]

function JobListingPage () {
    return (
        <>
            <Header></Header>

          <div className='JobListingWrapper'>
            {JobListingData.map((item,index) => (
              <JobListingItem key={index} data={item}/>
            ))}
          </div>

        </>
    )
}
export default JobListingPage