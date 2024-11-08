import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Dhananjay Dhoke</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/DhananjayDhoke"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
            title="Github"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:dhananjaydhoke3@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Mail"
            className="link link--icon"
            title="Mail"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918788921998"
            target="_blank"
            rel="noreferrer"
            aria-label="contact"
            className="link link--icon"
            title="Contact"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/dhananjaydhoke/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1ir8x9Q6FCUtLZrW-dvaFvlz3vWsec5w6/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            title="Resume"
          >
            <DescriptionIcon />
          </a>
          {/* <a
            href="https://www.facebook.com/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a> */}
          <a
            href="https://goo.gl/maps/9Be9AnaqMQUNnjWF8"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            title="Location"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
