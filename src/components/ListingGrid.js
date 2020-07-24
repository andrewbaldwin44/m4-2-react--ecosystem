import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const FruitContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
`;

const FruitTile = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  height: 250px;
  width: calc(100% / 3 - 40px);
  border-radius: 8px;
  color: black;
  text-decoration: none;
  box-shadow: 0 0 10px 10px #eeeeee;
  margin: 40px 20px 20px 20px;
`;

const FruitImage = styled.img`
  margin-top: -50px;
  height: 120px;
  width: auto;
  border-radius: 5px;
`;

const FruitName = styled.span`
  font-weight: bold;
  font-size: 20px;
`

const Italics = styled.span`
  font-style: italic;
`;

const Underline = styled.div`
  height: 3px;
  width: 50px;
  background-color: lightgray;
  border-radius: 5px;
`;

function ListingGrid({ items }) {
  return (
    <FruitContainer>
      {items.map(item => {
        return (
          <FruitTile key={item.id} to={`/items/${item.id}`}>
            <FruitImage src={item.imageSrc} />
            <FruitName>{item.name}</FruitName>
            <Underline/>
            <Italics>{item.latinName}</Italics>
          </FruitTile>
        )
      })}
    </FruitContainer>
  )
}

export default ListingGrid;
export {Italics};
