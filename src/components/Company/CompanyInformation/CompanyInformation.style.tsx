import styled from "styled-components";

const StyleCompanyInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .info {
    margin-bottom: 30px;
  }

  .info-title {
    font-size: 23px;
    margin: 7px;
  }

  .info-detail {
    border: solid;
    border-radius: 5px;
    padding: 5px 20px 5px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 20px;
  }

  .info-characteristic {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .sub-info {
    display: flex;
    gap: 20px;
    font-size: 15px;
  }

  .sub-info-indent {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .info-value {
    min-width: max-content;
  }

  .info-good {
    background-color: #2ace5e21;
  }

  .info-bad {
    background-color: #ce2a2a20;
  }

  @media screen and (max-width: 700px) {
    .info-title {
      font-size: 20px;
    }

    .info-detail {
      font-size: 16px;
    }

    .sub-info {
      font-size: 13px;
    }
  }
`;

export default StyleCompanyInformation;
