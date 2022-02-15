// Toggle.styled.js
import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  padding: 2px 4px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 3rem;
  height: 1.5rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ themeName }) =>
        themeName === "light" ? "translateY(0)" : "translateY(-100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ themeName }) =>
        themeName === "dark" ? "translateY(0)" : "translateY(100px)"};
    }
  }
`;
