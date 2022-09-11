import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
import { useOnClickOutside } from "../../../utils/hooks";
import { HeaderLink, HeaderLinkFilled } from "../HeaderLinks/HeaderLinks.style";
import StyleHeaderLinksMobile from "./HeaderLinksMobile.style";

interface PropsType {
  className: string;
}

const HeaderLinks = ({ className }: PropsType) => {
  const [display, setDisplay] = useState(false);

  const ref: any = useRef();
  useOnClickOutside(ref, () => setDisplay(false));

  return (
    <div className={className}>
      {!display && (
        <div
          onClick={() => {
            setDisplay(true);
          }}
        >
          <MenuIcon />
        </div>
      )}
      {display && (
        <StyleHeaderLinksMobile onClick={() => setDisplay(false)} ref={ref}>
          <HeaderLink to="/">Accueil</HeaderLink>
          <HeaderLink to="/companies">Entreprises</HeaderLink>
          <HeaderLinkFilled to="/contact">Contactez-nous</HeaderLinkFilled>
        </StyleHeaderLinksMobile>
      )}
    </div>
  );
};

export default HeaderLinks;
