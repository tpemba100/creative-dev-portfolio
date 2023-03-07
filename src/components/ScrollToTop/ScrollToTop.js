import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return isVisible ? (
    <div className="scroll-top">
      <a
        // href="#top"
        onClick={handleScroll}
      >
        <ArrowUpwardIcon fontSize="large" />
      </a>
      <div className="text">Go to top</div>
    </div>
  ) : null;
};

export default ScrollToTop;
