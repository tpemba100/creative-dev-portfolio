import React, { Component } from "react";
import styled from "styled-components";
import vhCheck from "vh-check";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
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
        // FastRetailing
        projectDesc: "A community non-profit organization based in NY",
        projectType: "WEBSITE",
        roles: ["Design lead", "Admin"],
      },
      {
        number: "02",
        // projectName: 'LASHIC',
        projectName: "SPEAK PEAK",
        projectDesc: "A mobile app that helps you learn a new language faster.",
        projectType: "APP DESIGN, CASE STUDY",
        roles: ["UX Design", "UX Research"],
      },
      {
        number: "03",
        // projectName: "Eyep",
        projectName: "Book Space",
        projectDesc:
          "Web app that helps you maintain and share your book lists.",
        projectType: "FULL STACK WEB APP",
        roles: ["UI/UX Designer", "React Developer", "Node Dev"],
      },
      {
        number: "04",
        projectName: "The Ghost Clan",
        projectDesc: "Branding of a upcoming music group, based in NYC.",
        projectType: "BRANDING",
        roles: ["Graphic Design"],
      },
      {
        number: "05",
        projectName: "Illustration",
        projectDesc: "Illustration, logo and visual for single Design",
        projectType: "VISUAL DESIGN",
        roles: ["Illustrator", "Branding", "Logo Design"],
      },
      {
        number: "06",
        projectName: "Creative Coding",
        projectDesc: "Visual programming, creative coding, data visualization",
        projectType: "CREATIVE CODING",
        roles: ["Creative Coder", "Visual Programmer", "Interactive Design"],
      },
      {
        number: "",
        projectName: "",
        projectDesc: "",
        projectType: "",
        roles: [""],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState({
      vh: Math.round(
        (window.document.documentElement.clientHeight + vhDiff) *
          this.pageSplitTimes
      ),
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (
      Math.floor(scrollDistance / vh) !== slideNumber &&
      slideNumber < this.workDetails.length - 1
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (
      slideNumber === this.workDetails.length - 1 &&
      Math.floor(scrollDistance / vh) < slideNumber
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container className="mobileWorks">
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
