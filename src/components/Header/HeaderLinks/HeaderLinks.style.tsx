import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleHeaderLinks = styled("div")`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 700px) {
    gap: 12px;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  padding-top: 5px;
  color: #000000;

  @media screen and (max-width: 700px) {
    font-size: 12px;
  }

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

  @media screen and (max-width: 700px) {
    font-size: 12px;
  }

  :hover {
    color: #000000;
  }
`;

export default StyleHeaderLinks;
