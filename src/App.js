import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Company from "./components/Company";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Masthead />
      <AboutMe />
      <Skill />
      <Company />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
