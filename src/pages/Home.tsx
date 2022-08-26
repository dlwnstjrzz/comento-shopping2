import CloseIcon from "../components/icons/CloseIcon";
import styled from "styled-components";

function Home() {
  return <HomeWrapper></HomeWrapper>;
}

const HomeWrapper = styled.div`
  width: 390px;
  height: 1322px;
  background: ${({ theme: { colors } }) => colors.white};
  margin: auto;
`;

export default Home;
