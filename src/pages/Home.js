import About from ".././components/About/About";
import Projects from ".././components/Projects/Projects";
import Contact from ".././components/Contact/Contact";
import ".././App.css";
import ShowRepo from ".././components/Repo/ShowRepo";
import Hero from ".././components/Hero/Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <ShowRepo />
      <Contact />
    </main>
  );
};

export default Home;
