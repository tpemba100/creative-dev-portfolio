import About from ".././components/About/About";
import Projects from ".././components/Projects/Projects";
import Contact from ".././components/Contact/Contact";
import ".././App.css";
import Hero from ".././components/Hero/Hero";
import { projects } from "../portfolio";
import Work from "../slides/Work";
import BlockAnimation from "../slides/BlockAnimation.js";

const Home = () => {
  if (!projects.length) return null;

  return (
    <div>
      <Hero />
      <Work />
      {/* <About /> */}
      {/* <Projects projects={projects} /> */}
      <Contact />
    </div>
  );
};

export default Home;
