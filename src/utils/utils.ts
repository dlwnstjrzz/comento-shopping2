function moneyToWon(money: number) {
  const newMoney = String(Math.floor(money));
  const moneyArr: string[] = Array.from(newMoney);
  const newArr: string[] = [];
  let count = 0;
  for (let i = moneyArr.length - 1; i >= 0; i -= 1) {
    newArr.unshift(moneyArr[i]);
    count += 1;
    if (count === 3 && i !== 0) {
      newArr.unshift(",");
      count = 0;
    }
  }

  return `￦${newArr.join("")}`;
}

interface IitemsInfo {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  price: number;
  hashTag: string;
}

function getProductByHashTag(hashTag: string, itemsInfo: IitemsInfo[]) {
  const filteredItems = itemsInfo.filter((itemInfo) => itemInfo.hashTag === hashTag);
  return filteredItems;
}

function getProductByParams(params: number, itemsInfo: IitemsInfo[]) {
  const filteredItem = itemsInfo.find((itemInfo) => itemInfo.id === params);
  return filteredItem;
}

export { moneyToWon, getProductByHashTag, getProductByParams };
