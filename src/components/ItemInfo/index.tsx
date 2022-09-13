import styled from "styled-components";
import { moneyToWon } from "utils/utils";

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
      <Price>{moneyToWon(price)}</Price>
    </ItemWrapper>
  );
}

const Price = styled.div`
  margin-left: 24px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  font-size: ${({ theme: { fontSize } }) => fontSize.Small};
  color: ${({ theme: { colors } }) => colors.black2};
`;
const Title = styled.div`
  margin-left: 24px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: ${({ theme: { fontSize } }) => fontSize.Medium};
  color: ${({ theme: { colors } }) => colors.black};
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 390px;
  overflow: hidden;
  position: relative;
`;
const ItemWrapper = styled.div`
  height: 465px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;
  cursor: pointer;
`;
export default ItemInfo;
