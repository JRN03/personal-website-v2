import Header from "./Components/Header"
import Landing from "./Components/Landing"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer"

//1185
function App() {

  return (
    <div className="App">
      <Header/>
      <Landing/>
      <main>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
