import styled from "styled-components";

const StyleHeader = styled("div")`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 2% 0px 2%;
`;

const StyleHeaderWrapper = styled("div")`
  background-color: #ffffff;
  position: sticky;
  top: 0;
  box-shadow: 0 1px 3px #a5a5a5;
  padding: 20px;
  z-index: 100;

  .header-links-mobile {
    display: none;
  }

  @media screen and (max-width: 700px) {
    .header-links {
      display: none;
    }
    .header-links-mobile {
      display: block;
    }
  }
`;

export { StyleHeader, StyleHeaderWrapper };
