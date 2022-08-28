import styled from "styled-components";

type ItemProps = {
  imgUrl: string;
  description: string;
  title: string;
};
export function Item({ imgUrl, description, title }: ItemProps) {
  return (
    <ItemWrapper>
      <ItemImg src={imgUrl} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 204px;
  background-image: url("https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg");
`;

const Title = styled.div`
  margin-top: 12px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.Large};
  font-size: ${({ theme: { fontSize } }) => fontSize.Large};
  color: ${({ theme: { colors } }) => colors.black};
`;

const Description = styled.p`
  margin-top: 12px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  font-size: ${({ theme: { fontSize } }) => fontSize.Small};
  color: ${({ theme: { colors } }) => colors.black};
`;
