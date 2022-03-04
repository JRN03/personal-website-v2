import Photo from "./grad.JPG";

const About = () => {
    return (
        <section id="about">
            <h1 className="sectionTitle">About me<span className="punctuation">.</span></h1>
            <div>
                <div class="content">
                    <p>
                        Hi. My name is Jonathan Nguyen. I am currently a student at
                        the University of California, Santa Cruz studying Computer Science. I enjoy
                        all things computers: Hardware, Software, Artificial Intelligence, and 
                        more. My passion for coding began in middle school when my design class
                        was assigned an introductory Java course.
                    </p>
                    <br/>
                    <p>
                        I interned at a Digital Support Company, Prelim, which specializes in 
                        building digital applications for Financial Institutions. Here, I was introduced
                        to basic app development concepts such as data mapping from digital applications to PDF's 
                        as well as preparing PDF's. I coded this website on my own using React and CSS. 
                        I am open to positions as a Frontend or Backend developer.
                    </p>
                </div>
                <div className="imageContainer"><img src={Photo} alt="myself"/></div>
            </div>
        </section>
    )
}

export default About