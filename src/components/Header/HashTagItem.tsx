import styled from "styled-components";

type ItemProps = {
  title: string;
};

export function HashTagItem({ title }: ItemProps) {
  return (
    <Wrapper>
      <ItemTitle>{title}</ItemTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 144px;
  height: 74px;
  background: ${({ theme: { colors } }) => colors.grey};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemTitle = styled.div`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: ${({ theme: { fontSize } }) => fontSize.Large};
  color: ${({ theme: { colors } }) => colors.white};
`;
