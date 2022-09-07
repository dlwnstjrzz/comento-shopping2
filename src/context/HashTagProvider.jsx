import { createContext, useState } from "react";

const HashTagItemsContextStore = createContext();

const HashTagItemsContext = (props) => {
  const [hashTagTitle, setHashTagTitle] = useState("#겨울 방한템");

  const HashTagItemsInfo = {
    hashTagTitle,
    setHashTagTitle,
  };

  return (
    <HashTagItemsContextStore.Provider value={HashTagItemsInfo}>
      {props.children}
    </HashTagItemsContextStore.Provider>
  );
};

export { HashTagItemsContext, HashTagItemsContextStore };
