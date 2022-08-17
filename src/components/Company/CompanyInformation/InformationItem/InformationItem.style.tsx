import styled from "styled-components";

const StyleInformationItem = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: -1px;

  > div {
    border: solid;
    border-width: 1px;
    border-color: #cccccc;
    margin-left: -1px;

    padding: 10px;
    text-align: center;
  }

  img {
    width: 16px;
    margin-left: 5px;
  }
`;

export default StyleInformationItem;
