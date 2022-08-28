import styled from "styled-components";
import { HashTagItem } from "./HashTagItem";

const HashTags = ["#겨울 방한템", "#따순머그컵", "#나를 위한 선물"];

export function HashTagItems() {
  return (
    <HashTagItemWrapper>
      {HashTags.map((el) => {
        return <HashTagItem title={el} />;
      })}
    </HashTagItemWrapper>
  );
}

const HashTagItemWrapper = styled.div`
  height: 164px;
  border-bottom: solid 8px ${({ theme: { colors } }) => colors.grey5};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
