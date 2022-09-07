import styled from "styled-components";
import { HashTagItem } from "./HashTagItem";
import { useContext } from "react";
import { HashTagItemsContextStore } from "context/HashTagProvider";

const HashTags = ["#겨울 방한템", "#따순머그컵"];

export function HashTagItems() {
  const { setHashTagTitle } = useContext(HashTagItemsContextStore);
  const onClickTag = (title: string) => {
    setHashTagTitle(title);
  };
  return (
    <HashTagItemWrapper>
      {HashTags.map((el, idx) => {
        return <HashTagItem key={idx} onClick={() => onClickTag(el)} title={el} />;
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
