import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <p data-aos="fade-right">
          Socializing and Connecting is really important, which leads to great
          ideas and major breakthroughs. If you have any ground breaking idea or
          have some interesting work, then I can help you with bringing that
          idea to life as developing awesome web apps happens to be my key
          skill. So, just don't wait or hesitate, connect with me and we can
          start working on that great idea of yours.
        </p>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/dhananjaydhoke/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/DhananjayDhoke"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="mailto:dhananjaydhoke3@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          {/* <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="twitter" />
          </a> */}
          <a href="tel:+918788921998" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
      </div>
    </>
  );
};
