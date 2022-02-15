import React from "react";

const Icon = ({
  style = { marginRight: 5 },
  fill = "#ffffff",
  width = "512px",
  className = "",
  height = "512px",
  viewBox = "0 0 512 512"
}) => {
  return (
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={fill}
        d="m0 58c0-11.046875 8.953125-20 20-20h56v-18c0-11.046875 8.953125-20 20-20s20 8.953125 20 20v18h376c11.046875 0 20 8.953125 20 20s-8.953125 20-20 20h-376v18c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-18h-56c-11.046875 0-20-8.953125-20-20zm492 376h-56v-18c0-11.046875-8.953125-20-20-20s-20 8.953125-20 20v18h-376c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h376v18c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-18h56c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm0-198h-216v-18c0-11.046875-8.953125-20-20-20s-20 8.953125-20 20v18h-216c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h216v18c0 11.046875 8.953125 20 20 20s20-8.953125 20-20v-18h216c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm0 0"
      />
    </svg>
  );
};

export default Icon;
