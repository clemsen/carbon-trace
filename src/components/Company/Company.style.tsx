import styled from "styled-components";

const StyleCompany = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: center;

  .company-section {
    width: 80%;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100% 0%;
  }
`;

export default StyleCompany;
