import About from ".././components/About/About";
import Projects from ".././components/Projects/Projects";
import Contact from ".././components/Contact/Contact";
import ".././App.css";
import ShowRepo from ".././components/Repo/ShowRepo";
import Hero from ".././components/Hero/Hero";
import { projects } from "../portfolio";

const Home = () => {
  if (!projects.length) return null;

  return (
    <div>
      <Hero />
      <About />
      <Projects projects={projects} />
      <ShowRepo />
      <Contact />
    </div>
  );
};

export default Home;
