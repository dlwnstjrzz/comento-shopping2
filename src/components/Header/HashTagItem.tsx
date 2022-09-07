import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface IitemProps {
  title: string;
  onClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

export function HashTagItem({ title, onClick }: IitemProps) {
  return (
    <Wrapper onClick={onClick}>
      <ItemTitle>{title}</ItemTitle>
    </Wrapper>
  );
}

const Wrapper = styled.button`
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
