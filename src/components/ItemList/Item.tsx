import styled from "styled-components";

type ItemProps = {
  imgUrl: string;
  description: string;
  title: string;
};
export function Item({ imgUrl, description, title }: ItemProps) {
  return (
    <ItemWrapper>
      <ImgWrapper>
        <ItemImg src={imgUrl} />
      </ImgWrapper>
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

const ImgWrapper = styled.div`
  width: 100%;
  height: 204px;
  overflow: hidden;
  position: relative;
`;
const ItemImg = styled.img`
  position: absolute;
  bottom: -30%;
  width: 100%;
`;

const Title = styled.div`
  margin-top: 12px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: ${({ theme: { fontSize } }) => fontSize.Medium};
  color: ${({ theme: { colors } }) => colors.black};
  line-height: 26px;
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  margin-top: 12px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  font-size: ${({ theme: { fontSize } }) => fontSize.Small};
  color: ${({ theme: { colors } }) => colors.black};
  line-height: 21px;
  letter-spacing: -0.01em;
`;
