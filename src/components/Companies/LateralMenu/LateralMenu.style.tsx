import styled from "styled-components";

const StyleLateralMenu = styled.div`
  width: 100%;
  padding: 20px;
  border-left: solid;
  border-color: rgb(227, 227, 227);

  .side-search-bar {
    display: flex;
  }

  & .MuiOutlinedInput-root {
    border-radius: 6px 0px 0px 6px;
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

  & .MuiTouchRipple-root {
    /* background-color: #1976d2; */
  }
`;

export default StyleLateralMenu;
