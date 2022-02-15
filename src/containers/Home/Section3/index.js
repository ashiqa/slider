import React from "react";
import Svg from "./Icons/Svg";
import { Section, Wrapper, Policy, H1, P, A } from "../section.styled";

function Slider3() {
  return (
    <Section>
      <Policy>
        <Wrapper>
          <Svg />
        </Wrapper>
        <H1>Friendly Pricing</H1>
        <P>
          No need to worry about your order being costly. We have friendly
          prices to suit your needs.
        </P>

        <A to="/store">Skip...</A>
      </Policy>
    </Section>
  );
}
export default Slider3;
