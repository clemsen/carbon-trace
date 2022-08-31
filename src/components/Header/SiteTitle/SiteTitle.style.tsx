import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleSiteTitle = styled(Link)`
  text-decoration: none;
  margin-right: 10px;

  h1 {
    color: #2ace5e;
    font-size: 24px;
    font-weight: 900;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 18px;
    }
  }
`;

export default StyleSiteTitle;
