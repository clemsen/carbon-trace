import { StyleHeader, StyleHeaderWrapper } from "./Header.style";
import HeaderLinks from "./HeaderLinks";
import SiteTitle from "./SiteTitle";
import HeaderLinksMobile from "./HeaderLinksMobile";

const Header = () => {
  return (
    <StyleHeaderWrapper>
      <StyleHeader className="App-header">
        <SiteTitle />
        <HeaderLinks className="header-links" />
        <HeaderLinksMobile className="header-links-mobile" />
      </StyleHeader>
    </StyleHeaderWrapper>
  );
};

export default Header;
