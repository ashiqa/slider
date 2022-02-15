import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Section = styled.div`
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: transparent;
`;
export const Wrapper = styled.div`
  height: 240px;
  width: 240px;
  margin: 30px 0;
  position: relative;
  left: -40px;
`;
export const Policy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 460px;
  // height: 600px;
  border-radius: 12px;
  transform: scale(0.8);
`;
export const H1 = styled.h1`
  color: #6c3a1f;
  text-align: center;
  font-size: 36px;
  margin: 0;
`;
export const P = styled.p`
  color: #a28561;
  font-size: 14px;
  margin-top: 0;
  padding: 0 60px;
  text-align: center;
`;
export const SectionButton = styled.button`
  color: white;
  background: #dd794a;
  margin-top: 12px;
  cursor: pointer;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  border-radius: 9px;
  border: none;
  width: 72%;
  padding: 12px 0;
  transition: 150ms ease-out;
  &:hover {
    background: #d66029;
  }
`;
export const A = styled(RouterLink)`
  margin-top: 18px;
  font-size: 14px;
  color: #a28561;
  text-decoration: none;
  &:hover {
    color: #846b4d;
  }
`;
export const Span = styled.span`
  font-family: "Amatic SC", cursive;
  font-weight: 400;
  font-size: 20px;
  position: relative;
  top: -18px;
  left: 3px;
  color: #a28561;
`;
