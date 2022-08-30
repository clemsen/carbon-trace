import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleCompanyItem = styled(Link)`
  text-decoration: none;
  color: #000000;
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  padding: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  border-radius: 5px;
  font-size: 20px;
  min-height: 60px;

  .company-item-information {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .company-item-name-logo {
    display: flexbox;
    align-items: center;
    justify-content: center;
  }

  .company-item-logo {
    width: 60px;
    margin-right: 40px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 70% 30%;
    font-size: 16px;

    .company-item-logo {
      width: 50px;
      margin-right: 20px;
    }
  }
`;

export default StyleCompanyItem;
