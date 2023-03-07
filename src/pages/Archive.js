import React from "react";
import Projects from "../components/Projects/Projects";
import ".././App.css";
// import Square from "../components/threeModel/square";
import { archives } from "../portfolio";

const Archive = () => {
  return (
    <div>
      {/* <Square style={{ width: "100%", height: "50%" }} /> */}
      <Projects projects={archives} />
    </div>
  );
};

export default Archive;
