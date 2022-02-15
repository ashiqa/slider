import React from "react";
import NavLink from "../../components/NavLink";
import StoreNavWrapper, { StoreNavLinks } from "./StoreNav.styled";
import { Tabs, Tab, TabPanel } from "react-tabs";
import { HandBags } from "../AllSvgIcon";

function StoreNav({ className }) {
  const items = [
    { link: "one", label: "one", icon: HandBags },
    { link: "two", label: "two", icon: HandBags },
    { link: "three", label: "three", icon: HandBags },
    { link: "four", label: "four", icon: HandBags },
    { link: "five", label: "five", icon: HandBags },
    { link: "six", label: "six", icon: HandBags },
    { link: "seven", label: "seven", icon: HandBags }
  ];
  return (
    <Tabs>
      <StoreNavWrapper className={className}>
        <StoreNavLinks>
          {items.map((item, index) => (
            <Tab>
              <NavLink
                className="store-nav-link"
                href={item.link}
                label={item.label}
                icon={item.icon}
                key={index}
              />
            </Tab>
          ))}
        </StoreNavLinks>
      </StoreNavWrapper>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
}
export default StoreNav;
