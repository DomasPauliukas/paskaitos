import Company from '../Company/Company'
import KnowledgeItem from '../KnowledgeItem/KnowledgeItem'
import Location from '../Location/Location'
import LogoItem from '../LogoItem/LogoItem'
import Position from '../Position/Position'
import styles from './JobListingItem.module.css'

function JobListingItem (props) {
    const { company, contract, featured, languages, level, location, logo, new: isNew, position, postedAt, role, tools } = props.data

    return (

        <div className={styles.JobListingItem}>

            <div className={styles.InfoWrapper}>
                <LogoItem logo={logo}/>
              <div className={styles.stats}>
                <Company isNew={isNew} featured={featured} company={company}/>
                <Position position={position}/>
                <Location postedAt={postedAt} contract={contract} location={location}/>
              </div>

            </div>

            <div className={styles.KnowledgeWrapper}>
                <KnowledgeItem 
                role={role} 
                level={level} 
                languages={languages} 
                tools={tools}/>
            </div>
        </div>
    )
}

export default JobListingItem