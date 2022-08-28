import styled from "styled-components";

export function LogoBar() {
  return (
    <LogoBarWrapper>
      <Title>코멘토 쇼핑</Title>
    </LogoBarWrapper>
  );
}

const LogoBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.grey5};
`;

const Title = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: ${({ theme: { fontSize } }) => fontSize.Medium};
  color: ${({ theme: { colors } }) => colors.black};
`;
