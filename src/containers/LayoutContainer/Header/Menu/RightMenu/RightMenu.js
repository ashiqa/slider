import React from "react";
import NavLink from "components/NavLink/NavLink";
import Button from "components/Button/Button";
import Popover from "components/Popover/Popover";
import { OFFER_PAGE, HELP_PAGE } from "constants/navigation";
import { AuthorizedMenu } from "../AuthorizedMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { HelpIcon } from "components/AllSvgIcon";
import { RightMenuBox } from "./RightMenu.style";

export const RightMenu = ({ onLogout, avatar, isAuthenticated, onJoin }) => {
  return (
    <RightMenuBox>
      <NavLink
        className="menu-item"
        href={OFFER_PAGE}
        label="Offer"
        intlId="navlinkOffer"
      />
      <NavLink
        className="menu-item"
        href={HELP_PAGE}
        label="Need Help"
        intlId="navlinkHelp"
        iconClass="menu-icon"
        icon={<HelpIcon />}
      />
      <LanguageSwitcher />

      {!isAuthenticated ? (
        <Button
          onClick={onJoin}
          size="small"
          title="Join"
          style={{ fontSize: 15, color: "#ffffff" }}
          intlButtonId="joinButton"
        />
      ) : (
        <Popover
          direction="right"
          className="user-pages-dropdown"
          handler={<img src={avatar} alt="user" />}
          content={<AuthorizedMenu onLogout={onLogout} />}
        />
      )}
    </RightMenuBox>
  );
};
