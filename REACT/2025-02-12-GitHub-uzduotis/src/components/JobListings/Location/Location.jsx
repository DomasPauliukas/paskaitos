import './Location.css'

function Location ({postedAt, contract, location}) {
    return (
        <div className='Location'>
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
        </div>
    )
}
export default Location