import {useState,useEffect} from 'react'
import SkillContainer from "./SkillContainer"
const Skills = () => {

    const skills = [
        {
            name: "Java",
            type: "language"
        },
        {
            name: "Python",
            type: "language"
        },
        {
            name: "Swift",
            type: "language"
        },
        {
            name: "Javascript",
            type: "language"
        },
        {
            name: "HTML",
            type: "language"
        },
        {
            name: "CSS",
            type: "language"
        },
        {
            name: "React",
            type: "Software"
        },
        {
            name: "Bootstrap5",
            type: "Software"
        },
        {
            name: "Github",
            type: "Software"
        },
        {
            name: "Android Studio",
            type: "Software"
        },
        {
            name: "Data Mapping",
            type: "Other"
        },
        {
            name: "Adobe Prepare Tools",
            type: "Other"
        }
    ]

    const [skillContainers,setOpen] = useState(
        [{
            id:1,
            title:"All",
            open:true,
            content: skills.map((skill) => (skill))
        },
        {
            id:2,
            title:"Languages",
            open:false,
            content: skills.filter((skill) => (skill.type == "language"))
        },
        {
            id:3,
            title:"Software",
            open:false,
            content: skills.filter((skill) => (skill.type == "Software"))
        },
        {
            id:4,
            title:"Other",
            open:false,
            content: skills.filter((skill) => (skill.type == "Other"))
        }]
    )

        const open = (id) => {
            setOpen(skillContainers.map((skillContainer) => (
                skillContainer.id == id ? {...skillContainer,open:true}:{...skillContainer,open:false})))
        }

    return (
        <section id="skills">
            <h1 className="sectionTitle">Skills<span className="punctuation">.</span></h1>
            <div>
                {
                    skillContainers.map((skillContainer) => (
                        <SkillContainer 
                        id={skillContainer.id}
                        title={skillContainer.title}
                        open={skillContainer.open}
                        content={skillContainer.content}
                        toggleOpen={open}
                        />))
                }
            </div>
        </section>
    )
}

export default Skills
