import styled from "styled-components";

const StyleHeader = styled("div")`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 70px 0px 70px;
`;

const StyleHeaderWrapper = styled("div")`
  width: 100%;
  background-color: #ffffff;
  position: sticky;
  box-shadow: 0 1px 3px #a5a5a5;
  padding: 20px;
  margin-bottom: 20px;
`;

export { StyleHeader, StyleHeaderWrapper };
