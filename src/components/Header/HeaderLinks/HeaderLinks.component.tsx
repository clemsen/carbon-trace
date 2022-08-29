import StyleHeaderLinks, {
  HeaderLink,
  HeaderLinkFilled,
} from "./HeaderLinks.style";

const HeaderLinks = () => {
  return (
    <StyleHeaderLinks>
      <HeaderLink to="/">Accueil</HeaderLink>
      <HeaderLink to="/companies">Entreprises</HeaderLink>
      <HeaderLinkFilled to="/contact">Contactez-nous</HeaderLinkFilled>
    </StyleHeaderLinks>
  );
};

export default HeaderLinks;
