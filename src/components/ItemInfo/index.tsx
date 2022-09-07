import styled from "styled-components";

interface IitemInfo {
  thumbnail: string;
  title: string;
  price: number;
}

function ItemInfo({ thumbnail, title, price }: IitemInfo) {
  return (
    <ItemWrapper>
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
      <Price>{price}</Price>
    </ItemWrapper>
  );
}

const Price = styled.div``;
const Title = styled.div``;
const Thumbnail = styled.img``;
const ItemWrapper = styled.div`
  background-color: red;
`;
export default ItemInfo;
