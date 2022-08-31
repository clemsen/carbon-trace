import styled from "styled-components";

const StyleContact = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: center;

  .contact-section {
    width: 80%;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .contact-submit-button {
    margin-top: 10px;
    border-color: rgb(133, 133, 133);
    color: rgb(133, 133, 133);
    :hover {
      border-color: #31ba5c;
      color: #31ba5c;
    }
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100% 0%;
  }
`;

export default StyleContact;
