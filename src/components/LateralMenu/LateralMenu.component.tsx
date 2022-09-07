import StyleLateralMenu, { ShowLateralMenuButton } from "./LateralMenu.style";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { KeyboardArrowRight } from "@mui/icons-material";
import FilterTheme from "../FilterTheme";

const LateralMenu = () => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <ShowLateralMenuButton onClick={toggleDisplay}>
        <SearchIcon />
      </ShowLateralMenuButton>
      <StyleLateralMenu {...{ display }}>
        <IconButton className="hide-button" onClick={toggleDisplay}>
          <KeyboardArrowRight />
        </IconButton>
        <h3>Rechercher une entreprise</h3>
        <div className="searchbar">
          <SearchBar />
        </div>
        <FilterTheme />
      </StyleLateralMenu>
    </>
  );
};

export default LateralMenu;
