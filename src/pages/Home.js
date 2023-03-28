import About from ".././components/About/About";
import Projects from ".././components/Projects/Projects";
import Contact from ".././components/Contact/Contact";
import ".././App.css";
import ShowRepo from ".././components/Repo/ShowRepo";
import Hero from ".././components/Hero/Hero";
import { projects } from "../portfolio";
import { Link } from "react-router-dom";

const Home = () => {
  if (!projects.length) return null;

  return (
    <div>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Link to="/archive" className="custom-link">
        <div style={{ width: "170px", margin: "auto", marginTop: "1rem" }}>
          <span
            type="button"
            className="btn btn--outline"
            style={{ textAlign: "center" }}
          >
            more in Archive
          </span>
        </div>
      </Link>
      <ShowRepo />
      <Contact />
    </div>
  );
};

export default Home;
