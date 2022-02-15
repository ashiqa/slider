import React from "react";
import Card from "./Card";
import { Swipeable, defineSwipe } from "react-touch";
import "./style.scss";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  const swipe = defineSwipe({ swipeDistance: 50 });

  return (
    <nav className={drawerClasses}>
      <Swipeable config={swipe} onSwipeLeft={(drawerClasses = "side-drawer")}>
        <Card />
      </Swipeable>
    </nav>
  );
};

export default SideDrawer;
