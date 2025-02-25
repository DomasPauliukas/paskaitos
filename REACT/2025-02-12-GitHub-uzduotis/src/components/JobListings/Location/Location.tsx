import './Location.css'

type LocationProps = {
    postedAt: string
    contract: string
    location: string
}

const Location: React.FC<LocationProps> = ({postedAt, contract, location}) => {
    return (
        <div className='Location'>
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
        </div>
    )
}
export default Location