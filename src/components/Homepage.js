import React from "react";

import ListingGrid from './ListingGrid';

const Homepage = ({items}) => {
  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <ListingGrid items={items}/>
    </div>
  )
}

export default Homepage;
