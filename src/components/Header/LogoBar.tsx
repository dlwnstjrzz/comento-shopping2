import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LeftArrow from "components/icons/LeftArrowIcon";

export function LogoBar({ hasBack }) {
  const navigate = useNavigate();
  return (
    <LogoBarWrapper>
      {hasBack && (
        <IconStyled>
          <LeftArrow onClick={() => navigate(-1)} />
        </IconStyled>
      )}
      <Title onClick={() => navigate("/")}>코멘토 쇼핑</Title>
    </LogoBarWrapper>
  );
}

const LogoBarWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 66px;
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.grey5};
`;

const Title = styled.p`
  cursor: pointer;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: ${({ theme: { fontSize } }) => fontSize.Medium};
  color: ${({ theme: { colors } }) => colors.black};
`;
const IconStyled = styled.div`
  position: absolute;
  left: 15px;
  top: 23px;
  cursor: pointer;
`;
