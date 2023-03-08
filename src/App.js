import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Archive from "./pages/Archive";
import ViewProject from "./pages/ViewProject/ViewProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={`${themeName} app`}>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/archive" element={<Archive />} />
            <Route exact path="/project" element={<ViewProject />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
