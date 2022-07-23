import StyleHeaderLinks, { HeaderLink } from "./HeaderLinks.style";

const HeaderLinks = () => {
  return (
    <StyleHeaderLinks>
      <HeaderLink to="/">Accueil</HeaderLink>
      <HeaderLink to="/companies">Entreprises</HeaderLink>
    </StyleHeaderLinks>
  );
};

export default HeaderLinks;
