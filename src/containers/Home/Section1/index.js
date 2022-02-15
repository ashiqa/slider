import React from "react";
import Svg from "./Icons/Svg";
import { Section, Wrapper, Policy, H1, P, A } from "../section.styled";

function Slider1() {
  return (
    <Section>
      <Policy>
        <Wrapper>
          <Svg />
        </Wrapper>
        <H1>KIU DELIVERY</H1>
        <P>Delivery to your location in minutes</P>

        <A to="/store">Skip...</A>
      </Policy>
    </Section>
  );
}
export default Slider1;
