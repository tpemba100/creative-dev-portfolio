import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ShowRepo from "./components/Repo/ShowRepo";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <ShowRepo />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
