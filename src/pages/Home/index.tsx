import styled from "styled-components";
import { Header } from "components/Header";
import { ItemList } from "components/ItemList";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <ItemList />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 390px;
  // height: 1322px;
  background: ${({ theme: { colors } }) => colors.white};
  margin: auto;
`;

export default Home;
