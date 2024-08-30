import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import { workDetails } from "../../../portfolio"; // Adjust the path as needed

const Container = styled.div`
  height: 100vh;
  overflow: hidden; /* Hide scrollbars */
  scroll-behavior: smooth; /* Enables smooth scrolling */
`;

const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Work = () => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const scrollDirection = event.deltaY > 0 ? 1 : -1;
      setCurrentSection((prev) => {
        const nextSection = prev + scrollDirection;
        return Math.max(0, Math.min(nextSection, workDetails.length - 1));
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentSection * window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [currentSection]);

  return (
    <Container ref={containerRef}>
      {workDetails.map((section, index) => (
        <Section key={index}>
          <TextContent
            number={section.number}
            projectName={section.projectName}
            projectDesc={section.projectDesc}
            roles={section.roles}
            projectType={section.projectType}
            refreshToggle={false}
          />
        </Section>
      ))}
    </Container>
  );
};

export default Work;

// import React from "react";
// import styled from "styled-components";
// import TextContent from "./TextContent";
// import { workDetails } from "../../../portfolio"; // Make sure this is correctly imported

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   overflow: hidden; /* Ensures no scrollbars */
// `;

// const Work = () => {
//   return (
//     <Container>
//       {workDetails.map((item, index) => (
//         <TextContent
//           key={index}
//           number={item.number}
//           projectName={item.projectName}
//           projectDesc={item.projectDesc}
//           roles={item.roles}
//           projectType={item.projectType}
//           refreshToggle={true} // Set this to true if you want the refresh animation
//         />
//       ))}
//     </Container>
//   );
// };

// export default Work;

// import React, { Component } from "react";
// import styled from "styled-components";
// import vhCheck from "vh-check";
// import TextContent from "./TextContent";
// import ImageContent from "./ImageContent";
// import { workDetails } from "../../../portfolio";

// const Container = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   /* border: 1px dashed red; */
// `;

// class Work extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       vh: 0,
//       slideNumber: 0,
//     };
//     this.pageSplitTimes = 1.3;
//     this.lastScrollTop = 0;
//     this.scrollDirectionDown = true;
//     this.handleScroll = this.handleScroll.bind(this);
//     this.workDetails = workDetails;
//   }

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//     const vhDiff = vhCheck().offset;
//     this.setState({
//       vh: Math.round(
//         (window.document.documentElement.clientHeight + vhDiff) *
//           this.pageSplitTimes
//       ),
//     });
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll(event) {
//     const { body, documentElement } = event.srcElement;
//     const { vh, slideNumber } = this.state;
//     const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
//     if (scrollDistance > this.lastScrollTop) {
//       this.scrollDirectionDown = true;
//     } else {
//       this.scrollDirectionDown = false;
//     }
//     this.lastScrollTop = scrollDistance;
//     // console.log(scrollDistance);

//     if (
//       Math.floor(scrollDistance / vh) !== slideNumber &&
//       slideNumber < this.workDetails.length - 1
//     ) {
//       this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
//     } else if (
//       slideNumber === this.workDetails.length - 1 &&
//       Math.floor(scrollDistance / vh) < slideNumber
//     ) {
//       this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
//     }
//   }

//   changeTextContentBasedOnScroll() {
//     const { slideNumber } = this.state;
//     const refresh = true;
//     return (
//       <TextContent
//         number={this.workDetails[slideNumber].number}
//         projectName={this.workDetails[slideNumber].projectName}
//         projectDesc={this.workDetails[slideNumber].projectDesc}
//         projectType={this.workDetails[slideNumber].projectType}
//         roles={this.workDetails[slideNumber].roles}
//         refreshToggle={refresh}
//       />
//     );
//   }

//   render() {
//     return (
//       <Container className="mobileWorks">
//         {this.changeTextContentBasedOnScroll()}
//         <ImageContent pageSplitTimes={this.pageSplitTimes} />
//       </Container>
//     );
//   }
// }

// export default Work;
