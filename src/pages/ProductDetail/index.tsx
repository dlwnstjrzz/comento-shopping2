import { LogoBar } from "components/Header/LogoBar";
import styled from "styled-components";
import ItemInfo from "components/ItemInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getProductByParams } from "utils/utils";
import { itemInfo } from "mocks/itemInfo";
import { useNavigate } from "react-router-dom";
import HandleProductBar from "components/HandleProductBar";
import { HashTagItemsContextStore } from "context/HashTagProvider";

interface IitemInfo {
  imgUrl: string;
  title: string;
  price: number;
}

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>({});
  const { productList, setProductList } = useContext(HashTagItemsContextStore);
  const navigate = useNavigate();

  useEffect(() => {
    const result = getProductByParams(Number(productId), itemInfo);
    setProduct(result);

    if (localStorage.productList === undefined) {
      localStorage.setItem("productList", JSON.stringify([]));
    } else if (!!product.id) {
      let productLists = JSON.parse(localStorage.getItem("productList"));
      productLists.unshift(product.id);
      const uniqueProductList = Array.from(new Set(productLists));
      localStorage.setItem("productList", JSON.stringify(uniqueProductList));
    }
  }, [productId, productList, product]);

  const onBasketClick = () => {
    navigate("/basket");
    setProductList((prev) => [...prev, product]);
  };

  return (
    <PageWrapper>
      <LogoBar hasBack={true} />
      {product && (
        <ItemInfo thumbnail={product.imgUrl} title={product.title} price={product.price} />
      )}
      <HandleProductBar onClick={onBasketClick} title={"장바구니 담기"} />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 390px;
  background: ${({ theme: { colors } }) => colors.white};
  margin: auto;
`;

export default ProductDetail;
