import styled from "styled-components";
import { Link } from "react-router-dom";

// :root{
//   --background-dark: #2d3548;
//   --text-light: rgba(255,255,255,0.6);
//   --text-lighter: rgba(255,255,255,0.9);
//   --spacing-s: 8px;
//   --spacing-m: 16px;
//   --spacing-l: 24px;
//   --spacing-xl: 32px;
//   --spacing-xxl: 56px;
//   --width-container: 1200px;
// }

export const Section = styled.section`
  top: 55px;
  align-items: flex-start;
  /* background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%); */
  min-height: 100%;
  justify-content: center;
  padding: 56px 24px;
  display: flex;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  max-width: 1200px;
  width: 100%;
  @media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Background = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;
`;
export const Content = styled.div`
  left: 0;
  padding: 24px;
  position: absolute;
  top: 16px;
  height: 100%;
`;

export const Preview = styled.div`
  background-color: #00000080;
  color: #ffffff;
  padding: 20px;
  max-width: 250px;
  width: 100%;
  height: 100%;
  @media (min-width: 540px) {
    background-color: #00000080;
    color: #ffffff;
    padding: 20px;
    max-width: 250px;
    width: 100%;
    height: 100%;
  }
`;

export const ProductButton = styled.div`
  background-color: #2a265f;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
`;
export const ProductLinkCard = styled(Link)`
  list-style: none;
  position: relative;
  border-radius: 24px;
  margin: 0 auto;
  width: 100%;
  height: 10rem;
`;
export const H6 = styled.h6`
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
export const H4 = styled.h4`
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
export const A = styled.a`
  color: #ffffff;
  display: inline-block;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;
`;
