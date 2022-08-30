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
  box-shadow: 0 1px 3px #a5a5a5;
  padding: 20px;
`;

export { StyleHeader, StyleHeaderWrapper };
