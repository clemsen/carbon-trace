import StyleHeader from "./Header.style";
import HeaderLinks from "./HeaderLinks";
import SiteTitle from "./SiteTitle";

const Header = () => {
  return (
    <StyleHeader className="App-header">
      <SiteTitle />
      <HeaderLinks />
    </StyleHeader>
  );
};

export default Header;
