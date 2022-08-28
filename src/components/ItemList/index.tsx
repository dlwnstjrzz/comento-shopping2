import styled from "styled-components";
import { Item } from "./Item";
import { itemInfo } from "mocks/itemInfo";

export function ItemList() {
  return (
    <ItemListWrapper>
      {itemInfo.map((el) => {
        return <Item imgUrl={el.imgUrl} description={el.description} title={el.title} />;
      })}
    </ItemListWrapper>
  );
}

const ItemListWrapper = styled.div`
  margin-top: 43px;
`;
