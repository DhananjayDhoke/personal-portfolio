import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import data from "../../projectData";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        {data.map((elem) => {
          return (
            <>
              <div className="projects_container">
                <div className="project">
                  <div className="project_videocontainer">
                    <div data-aos="fade-right">
                      <img src={elem.src} alt={elem.name} />
                    </div>
                  </div>
                  <div className="project_information" data-aos="fade-right">
                    <h2>{elem.name}</h2>
                    <p>{elem.des}</p>
                    <div>
                      <FaReact />
                      <SiHtml5 />
                      <IoLogoJavascript />
                      <SiNodedotjs />
                      <SiExpress />
                      <SiMongodb />
                    </div>
                    <div>
                      <a href={elem.live} target="_blank" rel="noreferrer">
                        <span type="button" className="btn btn--outline onbt">
                          See this Live
                        </span>
                      </a>
                      <a href={elem.git} target="_blank" rel="noreferrer">
                        <span type="button" className="btn btn--outline">
                          View Code
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
