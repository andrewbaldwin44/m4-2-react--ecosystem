import React from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {Italics} from './ListingGrid';
import {Bold} from './Homepage';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: flex-start;
  margin-left: var(--document-padding);
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: var(--document-padding);
`;

const ItemDescription = styled.div`
  margin-top: -30px;
`;

const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ItemName = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const SellerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ItemImage = styled.img`
  height: 300px;
  width: auto;
  border-radius: 10px;
`;

const AvatarImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  margin-right: 10px;
`;

const Button = styled.button`
  height: 50px;
  width: 200px;
  color: white;
  font-family: inherit;
  font-size: inherit;
  background-color: #304ffe;
  border: none;
  border-radius: 10px;
`;

function ItemDetails({ items, sellers }) {
  const { itemID } = useParams();

  const findItem = (ID) => {
    return items.find(item => item.id === ID);
  }

  const item = findItem(itemID);
  const seller = sellers[item.sellerId];

  return (
    <Item>
      <ItemImage src={item.imageSrc} alt={item.name} />
      <ItemInfo>
        <ItemTitle>
          <ItemName>{item.name}</ItemName>
          <Italics>{item.latinName}</Italics>
        </ItemTitle>
        <ItemDescription>
          <p>{item.description}</p>
          <Italics>Product of <Bold>{item.countryOfOrigin}</Bold></Italics>
        </ItemDescription>
        <Button>
          {item.quantity > 0 ? `$${item.price} - Buy now` : "Sold Out!"}
        </Button>
        <SellerInfo>
          <AvatarImage src={seller.avatarSrc} alt={seller.storeName} />
          <span>Sold by: <Bold>{seller.storeName}</Bold></span>
        </SellerInfo>
      </ItemInfo>
    </Item>
  )
}

export default ItemDetails;
