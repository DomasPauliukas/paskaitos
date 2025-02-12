import './KnowledgeItem.css'

function KnowledgeItem ({role, level, languages, tools}) {

    const roleTag = role ? <span>{role}</span> : ''
    const levelTag = level ? <span>{level}</span> : ''

    return (

        <div className='knowledgeItem'>
            
            {roleTag}
            {levelTag}
            {languages.length > 0 && languages.map((language,index) => <span key={index}>{language}</span>)}
            {tools.length > 0 && tools.map((tool, index) => <span key={index}>{tool}</span>)}

        </div>
    )
}

export default KnowledgeItem