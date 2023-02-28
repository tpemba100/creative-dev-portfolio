import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ShowRepo from "./components/Repo/ShowRepo";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const url = "https://api.github.com/users/tpemba100/repos";
  const [repoList, setRepoList] = useState([]);

  const fetchRepos = async () => {
    try {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setRepoList(data);
      console.log("sucess Repo Fetch");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <ShowRepo repos={repoList} />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
