import React from "react";

function Marquee() {
  return (
    <marquee
      className="text-5xl"
      direction="left"
      behavior="scroll"
      scrollamount="10"
    >
      WEBSITE UNDER DEVELOPMENT, STAY TUNED FOR UPDATES
    </marquee>
  );
}

export default Marquee;
