import styled from "styled-components";
import { Header } from "components/Header";
import { ItemList } from "components/ItemList";
import { HashTagItemsContext } from "context/HashTagProvider";

function Home() {
  return (
    <HashTagItemsContext>
      <HomeWrapper>
        <Header />
        <ItemList />
      </HomeWrapper>
    </HashTagItemsContext>
  );
}

const HomeWrapper = styled.div`
  width: 390px;
  // height: 1322px;
  background: ${({ theme: { colors } }) => colors.white};
  margin: auto;
`;

export default Home;
