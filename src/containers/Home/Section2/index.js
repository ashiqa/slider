import React from "react";
import Svg from "./Icons/Svg";
import { Section, Wrapper, Policy, H1, P, A } from "../section.styled";

function Slider2() {
  return (
    <Section>
      <Policy>
        <Wrapper>
          <Svg />
        </Wrapper>
        <H1>Tracking Realtime</H1>
        <P>Track how far your order is and get realtime ETA to delivery</P>

        <A to="/store">Skip...</A>
      </Policy>
    </Section>
  );
}
export default Slider2;
