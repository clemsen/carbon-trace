import styled from "styled-components";

const StyleCompanies = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: center;

  .company-items {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100% 0%;
  }
`;

export default StyleCompanies;
