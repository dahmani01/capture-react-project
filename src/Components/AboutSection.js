import React from "react";
import home1 from "../img/home1.png";
import { SectionLayout, Description, Image, Hide } from "../styles";
const AboutSection = () => {
  return (
    <SectionLayout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="man with a camera." />
      </Image>
    </SectionLayout>
  );
};

export default AboutSection;
