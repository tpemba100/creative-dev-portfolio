import React, { useState, useEffect } from "react";
import TextContent from "./TextContent";

const Work = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  //   const pageSplitTimes = 1.4;
  const pageSplitTimes = 0.9;

  const workDetails = [
    {
      number: "",
      projectName: "",
      projectDesc: "",
      projectType: "",
      roles: [""],
    },
    {
      number: "01",
      projectName: "Hyolmo Society",
      projectDesc: "A community non-profit organization based in NY",
      projectType: "WEBSITE",
      roles: ["Design lead", "Admin"],
    },
    {
      number: "02",
      projectName: "SPEAK PEAK",
      projectDesc: "A mobile app that helps you learn a new language faster.",
      projectType: "APP DESIGN, CASE STUDY",
      roles: ["UX Design", "UX Research"],
    },
    {
      number: "03",
      projectName: "Eyep",
      projectDesc:
        "Single purpose website to show your IP address and location.",
      projectType: "WEB APP",
      roles: ["UI Designer", "Front-end Developer"],
    },
    {
      number: "04",
      projectName: "Tesla app",
      projectDesc: "iOS app concept to control Tesla cars remotely.",
      projectType: "iOS APP CONCEPT",
      roles: ["UI Designer"],
    },
    {
      number: "05",
      projectName: "WhatsMyFood",
      projectDesc:
        "iOS app to remember your fav food at each restaurant you eat.",
      projectType: "iOS APP",
      roles: ["UI Designer", "Front-end Developer"],
    },
    {
      number: "06",
      projectName: "Voistrap",
      projectDesc:
        "Web app project to give workplace insights using indoor localization, voice and schedule.",
      projectType: "iOS APP",
      roles: ["UI Designer", "Full Stack Developer"],
    },
    {
      number: "",
      projectName: "",
      projectDesc: "",
      projectType: "",
      roles: [""],
    },
  ];

  const scrollDistance = window.scrollY;
  useEffect(() => {
    console.log(scrollDistance);
    const handleScroll = () => {
      const vh = Math.round(window.innerHeight * pageSplitTimes);
      const scrollDistance = window.scrollY;
      const newSlideNumber = Math.floor(scrollDistance / vh);
      if (
        newSlideNumber !== slideNumber &&
        slideNumber < workDetails.length - 1
      ) {
        setSlideNumber(newSlideNumber);
      } else if (
        slideNumber === workDetails.length - 1 &&
        newSlideNumber < slideNumber
      ) {
        setSlideNumber(newSlideNumber);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slideNumber, pageSplitTimes, workDetails.length, scrollDistance]);

  return (
    <div>
      <TextContent
        style={{ display: "flex", flexFlow: "row nowrap", height: "100vh" }}
        number={workDetails[slideNumber].number}
        projectName={workDetails[slideNumber].projectName}
        projectDesc={workDetails[slideNumber].projectDesc}
        projectType={workDetails[slideNumber].projectType}
        roles={workDetails[slideNumber].roles}
        refreshToggle={true} // Assuming this is always true
      />
      <div style={{ height: "600vh" }}></div>
    </div>
  );
};

export default Work;
