import React from "react";

import { StyledInfo, Bold } from './Homepage';

const About = () => {
  return (
    <div>
      <StyledInfo>
        Fruit emporium is founded on a very simple principle:
        <Bold> Fruit is good.</Bold>
      </StyledInfo>
      <StyledInfo>
        We carry the finest selection of produce from around the world, from tart
        citrus to sweet cherries. Our sellers are world-class, and your fruit is
        guaranteed to be worthy of auction in Asian markets.
      </StyledInfo>
    </div>
  )
}

export default About;
