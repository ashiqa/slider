import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { StyledAwesomeSlider } from "./fullpage.styled";

const AutoplaySlider = withAutoplay(StyledAwesomeSlider);

function Home() {
  const sections = [
    <Section1 />,
    <Section2 />,
    <Section3 />,
    <Section4 />,
    <Section5 />
  ];
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
    >
      {sections.map(section => (
        <div key={section}>{section}</div>
      ))}
    </AutoplaySlider>
  );
}
export default Home;
