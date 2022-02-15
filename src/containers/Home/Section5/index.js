import React from "react";
import Svg from "./Icons/Svg";
import { Section, Wrapper, Policy, H1, P, A } from "../section.styled";
import { Button } from "../../../components/Button";

function Slider5() {
  return (
    <Section>
      <Policy>
        <Wrapper>
          <Svg />
        </Wrapper>
        <H1>Get Started</H1>
        <P>Signup or login to begin using app.</P>
        <br />
        <Button>
          <span>
            <A to="/store">Login</A>
          </span>
        </Button>
        <P>------------or------------</P>
        <Button>
          <span>
            <A to="/store">Signup</A>
          </span>
        </Button>
      </Policy>
    </Section>
  );
}
export default Slider5;
