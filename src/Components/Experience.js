
const Experience = () => {
    return (
        <section id="experience">
            <h1 className = "sectionTitle">My Experience<span className="punctuation">.</span></h1>
            <div>
                <h2>July 2020 - Present</h2>
                <div>
                    <div className="work">
                        <h1 className="font1">Intern</h1>
                        <p className="font2"><span className="punctuation">@ </span>Prelim</p>
                        <a className="contact" href="https://prelim.com/">Visit</a>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                Formatted word documents to provide enough space for digital applications to autofill fields.
                            </li>
                            <li>
                                Developed digital applications in the Prelim Interface, built with React.js and Node.js
                            </li>
                            <li>
                                Mapped data from digital applications to fill out the corresponding PDF's accordingly via Adobe and Prelim interface
                            </li>
                        </ul>
                    </div>
                    <a className="btn2" href="https://prelim.com/">Visit</a>
                </div>
                <h2>November 2021 - Present</h2>
                <div>
                    <div className="work">
                        <h1 className="font1">Tutor</h1>
                        <p className="font2"><span className="punctuation">@ </span>Mathnasium</p>
                        <a className="contact" href="https://www.mathnasium.com/santacruz">Visit</a>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                Guide students in Mathnasium worksheets with socratic questioning to incite metacognitive thinking.
                            </li>
                            <li>
                                Teach students a range of concepts from algebra to calculus.
                            </li>
                            <li>
                                Practice use of team teaching and proactive engagement and disengagement
                            </li>
                        </ul>
                    </div>
                    <a className="btn2" href="https://www.mathnasium.com/santacruz">Visit</a>
                </div>
            </div>
        </section>
    )
}

export default Experience
