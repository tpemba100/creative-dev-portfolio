import React, { useState, useEffect } from "react";
import styled from "styled-components";
import githubImg from "../../../assets/Images/Social/git.svg";
import mailImg from "../../../assets/Images/Social/mail.svg";
import dribbbleImg from "../../../assets/Images/Social/dribbble.svg";
import linkedInImg from "../../../assets/Images/Social/linkedin.svg";
import SocialLogo from "./SocialLogo";
import device from "../../../assets/breakpoints";
import { contact } from "../../../portfolio";
const Container = styled.section`
  height: 80vh; /* Since pageSplitTime is 1.4 */
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ContactTitle = styled.div.attrs(({ scrollPercent }) => ({
  style: {
    transform: `translateX(${scrollPercent * 8}%)`,
  },
}))`
  transition: transform 0.5s ease-out;
  font-family: "AvenirHeavy";
  font-size: 200px;
  position: absolute;
  color: #eee;
  top: 12%;
  left: -70%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SocialMediaIcons = styled.div`
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0); /* Fully transparent white */
`;

const Contact = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { body, documentElement } = document;
      const sd = Math.max(body.scrollTop, documentElement.scrollTop);
      const sp =
        (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
        100;
      const minlimit =
        (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
      if (sp >= minlimit && sp <= 100) {
        setScrollPercent(sp - minlimit);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
      <SocialMediaIcons>
        <SocialLogo
          imgURL={githubImg}
          alternate="Github"
          redirectURL={contact.github}
        />
        <SocialLogo
          imgURL={mailImg}
          alternate="Mail"
          redirectURL="mailto:tpemba.96@gmail.com"
        />

        <SocialLogo
          imgURL={dribbbleImg}
          alternate="Dribbble"
          redirectURL="https://dribbble.com"
        />
        <SocialLogo
          imgURL={linkedInImg}
          alternate="Linkedin"
          redirectURL={contact.linkedin}
        />
      </SocialMediaIcons>
    </Container>
  );
};

export default Contact;
