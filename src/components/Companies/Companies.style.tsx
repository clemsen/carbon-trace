import styled from "styled-components";

const StyleCompanies = styled.div`
  width: 100%;
  display: flex;

  .company-items {
    width: 80%;
    padding: 0px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .no-search-result {
      text-align: center;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
      padding: 0px 20px;
    }
  }
`;

export default StyleCompanies;
