import styled, { createGlobalStyle } from "styled-components";
import { NAV_BAR_HEIGHT } from "./styleConstants";
import { themeGet } from "@styled-system/theme-get";

const TIMEOUT = 400;

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === "ar" || lang === "he") &&
    `
    font-family: 'Poppins', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle`
  html,
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  body {
    
    height: 100%;
    width: 100%;
    line-height: 1.5;
    padding-bottom: 0;/*55px;*/
    font-family: "Poppins", sans-serif;
    padding-top: 0;/*${NAV_BAR_HEIGHT};*/
    transition: all 0.25s linear;
    background: ${p => p.theme.primary};
    color: ${p => p.theme.text};
    margin: 0;
  }
  
  p,
  label {
    line-height: 1.5em;
  }
  h1,h2,h3,h4,h5,h6  {
    font-family: ${themeGet('fontFamily.1', 'sans-serif')};
    margin: 0;
  }

  p,a,span,button,li,div  {
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    margin: 0;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }
  .search-wrapper.active .input-holder { 
    background: ${p => p.theme.inputBackground};
  }.search-wrapper .input-holder .search-icon span::after{
    
  border: 4px solid ${p => p.theme.secondaryText};;
  }
  .search-wrapper .input-holder .search-icon span::before,
  .search-wrapper .close::before, .search-wrapper .close::after{
    background: ${p => p.theme.secondaryText};
  }


  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .quick-view-overlay{
    background-color: rgba(0,0,0,.5)
  }

  .add-address-modal,
  .add-contact-modal{
    box-shadow: 0 10px 40px rgba(0,0,0,0.16);
    border-radius: 3px !important;
    .innerRndComponent{
      width: 100%;
      padding: 30px;
      height: auto;
      background-color: #f7f8f9;
      border: 0;
      box-sizing: border-box;
    }
  }

  .search-modal-mobile{
    transform: none!important;
    max-width: none!important;
    max-height: none!important;
    top: 0!important;
    left: 0!important;
    background: transparent!important;;
    border-radius: 0!important;
  }

  .reuseModalCloseBtn{
    right: 10px!important;
    background-color: #ffffff!important;
    color: #222222!important;
    border-radius: 15px!important;
    padding: 0 9px!important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }



  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${TIMEOUT}ms;
  }

  .image-item{
    padding: 0 15px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    .image-item{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (max-width: 768px) {
    .image-item{
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
  }

  .rc-table-fixed-header .rc-table-scroll .rc-table-header{
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;

    th {
      padding: 8px 20px;
      }
  }

  .drawer-content-wrapper{
    *:focus {
      outline: none;
    }
  }

  .rc-table-content{
    border: 0;
  }


  .awssld {
  --organic-arrow-thickness: 4px;
  --organic-arrow-height: 40px;
  --slider-height-percentage: 60%;
  --loader-bar-color: #851515;
  --loader-bar-height: 6px;
  --control-button-width: 10%;
  --control-button-height: 25%;
  --control-button-opacity: 0.5;
  --control-button-hover-opacity: 0.75;
  --control-button-background: transparent;
  --transition-bezier: cubic-bezier(0.5, 0.075, 0.25, 0.95);
  --slider-transition-duration: 575ms;
  --organic-arrow-color: #6c3a1f;
  --organic-arrow-border-radius: 0;
  --control-bullet-color: #6c3a1f;
  --control-bullet-active-color: #6c3a1f;
  --content-background-color: #d66029;
}
.awesome-slider {
  --organic-arrow-color: #fff;
}

.awssld__content {
  background: #e3d0b6;
}
.awssld__content > img {
  filter: grayscale(100%) opacity(35%);
  mix-blend-mode: multiply;
}

.awssld__bullets{
  z-index: 5;
  bottom: 20px;
}
.awssld__bullets button{
  background:#6c3a1f;
  height: 3px;
  width: 10px;
  border-radius: 5%;
  margin: 4px;
}

.awssld__bullets .awssld__bullets--active {
  background: #d66029;
  width: 13px;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}
.quick-view-overlay{
  background-color: rgba(0,0,0,.5)
}

.add-address-modal,
.add-contact-modal{
  box-shadow: 0 10px 40px rgba(0,0,0,0.16);
  border-radius: 3px !important;
  .innerRndComponent{
    width: 100%;
    padding: 30px;
    height: auto;
    background-color: #f7f8f9;
    border: 0;
    box-sizing: border-box;
  }
}

.search-modal-mobile{
  transform: none!important;
  max-width: none!important;
  max-height: none!important;
  top: 0!important;
  left: 0!important;
  background: transparent!important;;
  border-radius: 0!important;
}

.reuseModalCloseBtn{
  right: 10px!important;
  background-color: #ffffff!important;
  color: #222222!important;
  border-radius: 15px!important;
  padding: 0 9px!important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}



.page-transition-enter {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}
.page-transition-enter-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
}
.page-transition-exit {
  opacity: 1;
}
.page-transition-exit-active {
  opacity: 0;
  transition: opacity ${TIMEOUT}ms;
}
.loading-indicator-appear,
.loading-indicator-enter {
  opacity: 0;
}
.loading-indicator-appear-active,
.loading-indicator-enter-active {
  opacity: 1;
  transition: opacity ${TIMEOUT}ms;
}

.image-item{
  padding: 0 15px;
}

@media (max-width: 1199px) and (min-width: 991px) {
  .image-item{
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (max-width: 768px) {
  .image-item{
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
}

.rc-table-fixed-header .rc-table-scroll .rc-table-header{
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;

  th {
    padding: 8px 20px;
    }
}

.drawer-content-wrapper{
  *:focus {
    outline: none;
  }
}

.rc-table-content{
  border: 0;
}

`;
