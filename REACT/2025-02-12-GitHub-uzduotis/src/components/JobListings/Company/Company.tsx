import './Company.css'

type CompanyType = {
    company: string
    isNew: boolean
    featured: boolean
}

const Company: React.FC<CompanyType> = ({company, isNew, featured}) => {

const newSign = isNew && <span className='newTag'>NEW!</span>
const featuredSign = featured && <span className='featuredTag'>FEATURED</span>

    return (
        <div className='companyWrap'>
            <span className='companyName'>{company}</span>
            {newSign}
            {featuredSign}
        </div>
    )
}
export default Company