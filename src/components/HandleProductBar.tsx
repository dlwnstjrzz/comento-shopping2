import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function HandleProductBar({ title, onClick }) {
  const navigate = useNavigate();
  return <BarWrapper onClick={onClick}>{title}</BarWrapper>;
}

const BarWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGreen};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: ${({ theme: { fontSize } }) => fontSize.Small};
  color: ${({ theme: { colors } }) => colors.black};
  width: 390px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
