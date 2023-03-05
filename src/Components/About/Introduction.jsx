import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://dhananjay-dhoke-portfolio.netlify.app/static/media/58-removebg-preview.0859e2d98b954e73a4c8.png"
                //https://avatars.githubusercontent.com/u/97526535?v=4
                //https://drive.google.com/file/d/1iyAl7Pn0UfvR5pqHqXT1s7f-yPjDt5UR/view?usp=sharing
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different"> Dhananjay Dhoke</span> from{" "}
                <span className="different"> Nagpur,Maharashtra</span>. I have
                completed my graduation in Bachelor of Engineering from G.H. Raisoni College of Engineering, Nagpur
              </h4>
              <h4>
                Some of my interests apart form Coding :
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                playing Cricket{" "}
                
              </h4> */}
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gardening{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
