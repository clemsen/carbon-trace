import styled from "styled-components";

const StyleCompanyItem = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  padding: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  border-radius: 5px;
  font-size: 20px;

  .company-items-title {
    font-weight: bold;
  }

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
    height: 60px;
    margin-right: 40px;
  }
`;

export default StyleCompanyItem;
