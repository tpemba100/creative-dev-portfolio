import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        <Link
          to="/"
          // className="custom-link">
          className="link link-nav"
        >
          Tsering Pemba
        </Link>
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
