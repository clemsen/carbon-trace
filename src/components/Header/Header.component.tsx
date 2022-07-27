import { StyleHeader, StyleHeaderWrapper } from "./Header.style";
import HeaderLinks from "./HeaderLinks";
import SiteTitle from "./SiteTitle";

const Header = () => {
  return (
    <StyleHeaderWrapper>
      <StyleHeader className="App-header">
        <SiteTitle />
        <HeaderLinks />
      </StyleHeader>
    </StyleHeaderWrapper>
  );
};

export default Header;
