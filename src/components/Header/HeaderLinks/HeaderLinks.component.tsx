import StyleHeaderLinks, {
  HeaderLink,
  HeaderLinkFilled,
} from "./HeaderLinks.style";

interface PropsType {
  className: string;
}

const HeaderLinks = ({ className }: PropsType) => {
  return (
    <StyleHeaderLinks className={className}>
      <HeaderLink to="/">Accueil</HeaderLink>
      <HeaderLink to="/companies">Entreprises</HeaderLink>
      <HeaderLinkFilled to="/contact">Contactez-nous</HeaderLinkFilled>
    </StyleHeaderLinks>
  );
};

export default HeaderLinks;
