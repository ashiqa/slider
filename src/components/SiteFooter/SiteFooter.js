import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Footer = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${themeGet('fontSizes.1', '13')}px;
  font-weight: ${themeGet('fontWeights.3', '400')};
  color: ${themeGet('colorsdarkRegular', '#77798C')};
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  a {
    color: ${themeGet('colors.primary', '#6c3a1f')};
  }
`;


const SiteFooter = ({ children, style }) => {
  return (
    <>
      <Footer style={style}>{children}</Footer>
    </>
  );
};

export default SiteFooter;
