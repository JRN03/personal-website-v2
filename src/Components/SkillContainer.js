import {IoIosArrowDropright} from 'react-icons/io';

const SkillContainer = ({id,title,open,content,toggleOpen}) => {
    return (
        <div className={open ? "container open":"container"}>
            <div onClick={() => toggleOpen(id)} className="label">
                <h2>{title}</h2>
                <IoIosArrowDropright/>
            </div>
            <div className="skills">
                {content.map((skill) => (<p className="skill font2">{skill.name}</p>))}
            </div>
        </div>
    )
}

export default SkillContainer
