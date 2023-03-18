import React from "react";
import Projects from "../components/Projects/Projects";
import ".././App.css";
// import Square from "../components/threeModel/square";
import { archives } from "../portfolio";

const Archive = () => {
  const handleClick = () => {
    window.open("https://tpemba.myportfolio.com/illustrations", "_blank");
  };
  return (
    <div>
      {/* <Square style={{ width: "100%", height: "50%" }} /> */}
      <Projects projects={archives} />
      <span
        type="button"
        className="btn btn--outline abt-btn"
        onClick={() => handleClick()}
        style={{
          width: "300px",
          marginTop: "4vh",
        }}
      >
        Illustrations
      </span>
    </div>
  );
};

export default Archive;
