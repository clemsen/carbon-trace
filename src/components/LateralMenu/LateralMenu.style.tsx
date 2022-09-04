import { IconButton } from "@mui/material";
import styled from "styled-components";

const StyleLateralMenu = styled.div<{ display: boolean }>`
  padding: 20px;
  border-left: solid;
  border-color: rgb(227, 227, 227);
  background-color: #ffffff;

  .searchbar {
    margin-bottom: 20px;
  }

  .hide-button {
    display: none;
  }

  @media screen and (max-width: 700px) {
    display: ${(props) => (props.display ? "auto" : "none")};
    position: fixed;
    height: 100%;
    right: 0;

    .hide-button {
      display: block;
    }
  }
`;

export const ShowLateralMenuButton = styled(IconButton)`
  display: none !important;

  @media screen and (max-width: 700px) {
    display: block !important;
    position: absolute !important;
    top: 125px;
    right: 3px;
  }
`;

export default StyleLateralMenu;
