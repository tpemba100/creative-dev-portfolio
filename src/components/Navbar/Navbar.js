import { useContext, useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material//WbSunnyRounded";
import MenuIcon from "@mui/icons-material//Menu";
import CloseIcon from "@mui/icons-material//Close";
import { ThemeContext } from "../../contexts/theme";
import { about, projects, contact } from "../../portfolio";
import { Link, useNavigate } from "react-router-dom";
// import ScrollIntoView from "react-scroll-into-view";
import "./Navbar.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const navigate = useNavigate();

  const toggleNavList = () => setShowNavList(!showNavList);

  function handleClick() {
    if (window.location.pathname === "/") {
      console.log("just scrool activate");
    } else {
      navigate("/");

      console.log("NAVIGATE");
    }
  }

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {about ? (
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => {
                toggleNavList();
                handleClick();
              }}
              className="link link--nav"
            >
              About
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => {
                toggleNavList();
                handleClick();
              }}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        <Link to="/archive" className="custom-link">
          <li className="nav__list-item">
            <a onClick={toggleNavList} className="link link--nav">
              Archive
            </a>
          </li>
        </Link>
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      {/* only mobile view */}
      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
