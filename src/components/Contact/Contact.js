import { contact } from "../../portfolio";
import ResumePDF from "../../assets/TseringPemba_Resume.pdf";
import uxPDF from "../../assets/certificates/Coursera_front_end.pdf";
import takeoPDF from "../../assets/certificates/Coursera_ux.pdf";
import jpmPDF from "../../assets/certificates/J.P. Morgan__completion_certificate.pdf";
import frontendCourseraPDF from "../../assets/certificates/Takeo_react.pdf";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact_div">
        <a href={`mailto:${contact.email}`}>
          <span type="button" className="btn btn--outline">
            Email
          </span>
        </a>
        <a href={contact.github}>
          <span type="button" className="btn btn--outline">
            Github
          </span>
        </a>
        <a href={contact.linkedin}>
          <span type="button" className="btn btn--outline">
            Linkedin
          </span>
        </a>
        <a href={ResumePDF} target="_blank" rel="noreferrer">
          <span type="button" className="btn btn--outline">
            Resume
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
