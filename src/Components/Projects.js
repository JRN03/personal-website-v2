import Card from "./Card"
import {FaGamepad} from 'react-icons/fa';
import {FaSnapchatGhost} from 'react-icons/fa';
import {FaCode} from 'react-icons/fa';
import {FaShareNodes} from 'react-icons/fa'

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="sectionTitle">Projects</h1>
            <div>
                <Card title="Graph Visualizer" icon = {<FaShareNodes className="faLogo lg"/>} 
                description="Allows for custom inputs of nodes and links for quick visualization of graphs and data relations.
                            implements a breadth first search algorithm and animation. Accepts uploads of JSON files for nodes and
                            links"
                link="https://jrn03.github.io/Graph-Visualization/"
                languages="React.js, CSS, "/>

                <Card title="BYOM" icon = {<FaSnapchatGhost className="faLogo lg"/>} 
                description="Bring Your Own Memories: IOS app built during Snapchat Developer Challenge via Snapchat OAuth;
                             Allows users to use custom stickers within Snapchat, exploring a wide range
                             of spontaneous activities."
                link="https://github.com/JRN03/BYOM.git"
                languages="Swift"/>

                <Card title="Snake" icon = {<FaGamepad className="faLogo"/>} 
                description="Classic Snake game with a range of difficulties."
                link="https://jrn03.github.io/Snake-repo/"
                languages="HTML, CSS, Javascript"/>

                <Card title="Pokemon Battles" icon = {<FaGamepad className="faLogo"/>} 
                description="Remake of the classic Nintendo DS pokemon games. User Interface Created with 
                             Java's Swing libraries. Animations were created with the Java Timer library."
                link="https://github.com/JRN03/pokemon-repo.git"
                languages="Java"/>

                <Card title="Sorting Algorithm" icon = {<FaCode className="faLogo lg"/>}  
                description="Basic Insertion and Selection sort algorithms coded in both Java and Python"
                link=""
                languages="Java, Python"/>

                <Card title="Binary Search" icon = {<FaCode className="faLogo lg"/>}  
                description="Simple Binary Search Algorithm built in Java"
                link=""
                languages="Java"/>

                <Card title="Online Groceries" icon = {<FaCode className="faLogo lg"/>}  
                description="Digital shopping simulator. Created with emphasis on objects and 
                             hierarchy to practice polymorphism"
                link=""
                languages="Java, Python"/>

            </div>
        </section>
    )
}

export default Projects

