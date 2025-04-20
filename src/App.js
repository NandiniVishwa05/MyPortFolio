import { useEffect } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Footer from "./Pages/Footer";
import NavBar from "./Pages/NavBar";
import Project from "./Pages/Project";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false, // animation should run every time
    });
    const handleLoad = () => {
      AOS.refresh();
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <>
      <header> <NavBar /> </header>
      <main>
        <section id="about" data-aos="fade-right"><About /></section>
        <section id="education" data-aos="fade-left"><Education /></section>
        <section id="skills" data-aos="fade-right"><Skills /></section>
        <section id="projects" data-aos="fade-left"><Project /></section>
        <section id="services" data-aos="fade-right"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer><Footer /></footer>
    </>
  );
}

export default App;
