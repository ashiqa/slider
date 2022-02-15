import React, { useState } from "react";
import "./style.scss";
import MenuBar2 from "./MenuBar2";

function BottomNav() {
  const [active, setActive] = useState("events");
  return (
    <div
      className="App"
      style={{
        backgroundColor:
          active === "events"
            ? "#5B37B7"
            : active === "search"
            ? "#BE3099"
            : active === "featured"
            ? "#E39A28"
            : "#1194AA",
        transition: "all 50ms linear"
      }}
    >
      <MenuBar2 active={active} setActive={setActive} />
    </div>
  );
}

export default BottomNav;
