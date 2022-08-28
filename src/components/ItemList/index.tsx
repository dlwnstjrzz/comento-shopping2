import styled from "styled-components";
import { Item } from "./Item";
import { itemInfo } from "mocks/itemInfo";
import { HashTagItemsContextStore } from "context/HashTagProvider";
import { useContext } from "react";

export function ItemList() {
  const { hashTagTitle } = useContext(HashTagItemsContextStore);
  return (
    <ItemListWrapper>
      {itemInfo[hashTagTitle].map((el: { imgUrl: string; description: string; title: string }) => {
        return <Item imgUrl={el.imgUrl} description={el.description} title={el.title} />;
      })}
    </ItemListWrapper>
  );
}

const ItemListWrapper = styled.div`
  margin-top: 43px;
`;
