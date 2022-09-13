import { LogoBar } from "./LogoBar";
import { HashTagItems } from "./HashTagItems";

export function Header() {
  return (
    <div>
      <LogoBar hasBack={false} />
      <HashTagItems />
    </div>
  );
}
