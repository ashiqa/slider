import React from "react";
import { func, string } from "prop-types";
import { Offline, Online } from "react-detect-offline";
import DrawerToggleButton from "../DrawerToggleButton";
import Logo from "../Icons/Logo";
import Toggle from "../../Toggle";
import "./toolbar.scss";

function Toolbar({ drawerClickHandler, theme, toggleTheme }) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <Online>
          <div className="toolbar__logo">
            <a className="app_logo_text" href="/">
              Kiu Delivery
            </a>

            <div className="app_logo">
              <Logo />
            </div>
          </div>
        </Online>
        <Offline className="app_logo"> Offline</Offline>

        <div className="spacer" />
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>

        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

Toolbar.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};
export default Toolbar;
