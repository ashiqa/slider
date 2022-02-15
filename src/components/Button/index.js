import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 40px;
  background: ${({ theme }) => theme.background};
  position: relative;
  margin-bottom: 25px;
  border: hidden;
  outline: none;
  border-radius: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &::-moz-focus-inner {
    border: hidden;
  }
  &:focus {
    outline: none;
    border: hidden;
  }
  box-shadow: -6px -6px 10px ${({ theme }) => theme.boxShadow},
    6px 6px 10px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.primary};
  &:hover {
    opacity: 0.3;
    box-shadow: -6px -6px 10px ${({ theme }) => theme.boxShadow},
      6px 6px 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    opacity: 1;
    box-shadow: inset -4px -4px 8px ${({ theme }) => theme.boxShadow},
      inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.secondaryText};
  }

  span {
    line-height: 30px;
    font-size: 20px;
    font-weight: semibold;
  }
`;
