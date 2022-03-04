import NavLink from "./NavLink"
import Pdf from "./Resume.pdf"

const Header = () => {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      document.getElementById("navbar").className = prevScrollpos > currentScrollPos ? "visible":"hidden";
      prevScrollpos=currentScrollPos;
    }

    return (
        <header id="navbar">
            <g className="logo">
                <svg height={45} width={40}>
                    <polygon points="0,12 20,0 40,12 40,34 20,45 0,34" stroke={"rgb(120, 0, 255)"} fill={"rgb(28, 30, 82)"}/> 
                    <text x="12" y="32" fill="rgb(120, 0, 255)">J</text>
                </svg>
            </g>
            <ul className = "nav-list">
                <NavLink id={"#about"} section={"About"}/>
                <NavLink id={"#experience"} section={"Experience"}/>
                <NavLink id={"#projects"} section={"Projects"}/>
                <NavLink id={"#skills"} section={"Skills"}/>
                <NavLink id={Pdf} section={"Resume"} target="_blank"/>
            </ul>
        </header>
    )
}

export default Header
