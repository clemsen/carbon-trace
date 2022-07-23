import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleHeaderLinks = styled("div")`
  display: flex;
  gap: 24px;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #000000;

  :hover {
    color: #2ace5e;
  }
`;

export default StyleHeaderLinks;
