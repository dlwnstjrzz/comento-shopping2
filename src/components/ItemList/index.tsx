import styled from "styled-components";
import { Item } from "./Item";
import { itemInfo } from "mocks/itemInfo";
import { HashTagItemsContextStore } from "context/HashTagProvider";
import { useContext, useEffect, useState } from "react";
import { getProductByHashTag } from "utils/utils";
import { useNavigate } from "react-router-dom";

interface IitemInfo {
  imgUrl: string;
  description: string;
  title: string;
  id: number;
}

export function ItemList() {
  const { hashTagTitle } = useContext(HashTagItemsContextStore);
  const navigate = useNavigate();
  const [itemList, setItemList] = useState(getProductByHashTag(hashTagTitle, itemInfo));

  useEffect(() => {
    setItemList(getProductByHashTag(hashTagTitle, itemInfo));
  }, [hashTagTitle]);
  //질문 product가 왜 불린인가
  return (
    <ItemListWrapper>
      {itemList.map((product: IitemInfo) => {
        return (
          <Item
            onClick={() => navigate(`product/${product.id}`)}
            key={product.id}
            imgUrl={product.imgUrl}
            description={product.description}
            title={product.title}
          />
        );
      })}
    </ItemListWrapper>
  );
}

const ItemListWrapper = styled.div`
  margin-top: 43px;
`;
