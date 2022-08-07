import styled from "styled-components";

const StyleSearchBar = styled.div`
  display: flex;

  & .MuiOutlinedInput-root {
    border-radius: 6px 0px 0px 6px;
  }

  & .MuiTextField-root {
    width: 100%;
  }

  .lateral-search-button {
    background-color: #2ace5e;
    border-radius: 0px 6px 6px 0px;
    min-width: 30px;
    width: 50px;
    box-shadow: none;
    :hover {
      background-color: #31ba5c;
    }
  }
`;

export default StyleSearchBar;
