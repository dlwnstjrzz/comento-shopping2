import { LogoBar } from "components/Header/LogoBar";
import styled from "styled-components";
import ItemInfo from "components/ItemInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductByParams } from "utils/utils";
import { itemInfo } from "mocks/itemInfo";

interface IitemInfo {
  imgUrl: string;
  title: string;
  price: number;
}

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const result = getProductByParams(Number(productId), itemInfo);
    setProduct(result);
  }, [productId]);

  return (
    <PageWrapper>
      <LogoBar />
      {product && (
        <ItemInfo thumbnail={product.imgUrl} title={product.title} price={product.price} />
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 390px;
  height: 1322px;
  background: ${({ theme: { colors } }) => colors.white};
  margin: auto;
`;

export default ProductDetail;
