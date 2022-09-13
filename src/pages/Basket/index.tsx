import HandleProductBar from "components/HandleProductBar";
import styled from "styled-components";
import { HashTagItemsContextStore } from "context/HashTagProvider";
import { LogoBar } from "components/Header/LogoBar";
import { useContext, useEffect, useState } from "react";
import { getProductByParams } from "utils/utils";
import { itemInfo } from "mocks/itemInfo";

function Basket() {
  const { productList } = useContext(HashTagItemsContextStore);
  const [basketProducts, setBasketProducts] = useState([]);

  useEffect(() => {
    const productIds = JSON.parse(localStorage.getItem("productList"));
    const productsArr = productIds.reduce((acc, cur) => {
      return [...acc, getProductByParams(Number(cur), itemInfo)];
    }, []);
    setBasketProducts(productsArr);
  }, [productList]);

  return (
    <PageWrapper>
      <LogoBar hasBack={true} />
      <HandleProductBar onClick={() => console.log(1)} title={"주문하기"} />
      {basketProducts.map((product) => {
        return (
          <ItemDetail>
            <Thumbnail />
            <Title>{product.title}</Title>
            <Price>{product.price}</Price>
          </ItemDetail>
        );
      })}
    </PageWrapper>
  );
}

const Title = styled.p``;
const Price = styled.div``;
const Thumbnail = styled.img``;
const ItemDetail = styled.div`
  width: 368px;
  height: 126px;
`;
const PageWrapper = styled.div`
  width: 390px;
  background: ${({ theme: { colors } }) => colors.white};
  margin: auto;
`;
export default Basket;
