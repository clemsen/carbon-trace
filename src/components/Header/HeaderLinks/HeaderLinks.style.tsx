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
  padding-top: 5px;
  color: #000000;

  :hover {
    color: #2ace5e;
  }
`;

export const HeaderLinkFilled = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;

  padding: 5px;
  background-color: #2ace5e;
  color: #ffffff;

  :hover {
    color: #000000;
  }
`;

export default StyleHeaderLinks;
