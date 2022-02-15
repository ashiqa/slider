import React from "react";
import Svg from "./Icons/Svg";
import {
  Section,
  Wrapper,
  Policy,
  H1,
  P,
  A,
  Span,
  SectionButton
} from "../section.styled";

function Slider4() {
  return (
    <Section>
      <Policy>
        <Wrapper>
          <Svg />
        </Wrapper>
        <H1>
          Enable Location<Span>(secure)</Span>
        </H1>
        <P>
          Your private data will remain secure and safe to be used only on Kiu
          Delivery.
        </P>
        <SectionButton>Sure, Accept</SectionButton>
        <A to="/store">Enable later</A>
      </Policy>
    </Section>
  );
}
export default Slider4;
