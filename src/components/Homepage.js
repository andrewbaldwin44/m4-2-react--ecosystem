import React from "react";
import styled from "styled-components";

import ListingGrid from './ListingGrid';

const StyledInfo = styled.p`
  padding-left: var(--document-padding);
  font-size: 18px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

function Homepage({items}) {
  return (
    <div>
      <StyledInfo>
        Fruit emporium sells the finest fruits from this world and beyond.
      </StyledInfo>
      <StyledInfo><Bold>Browse items:</Bold></StyledInfo>
      <ListingGrid items={items}/>
    </div>
  )
}

export default Homepage;
export {StyledInfo, Bold};
