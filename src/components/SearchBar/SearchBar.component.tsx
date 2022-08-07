import { Button, TextField } from "@mui/material";
import StyleSearchBar from "./SearchBar.style";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <StyleSearchBar>
      <TextField label="Recherche" variant="outlined" />
      <Button className="lateral-search-button" variant="contained">
        <SearchIcon />
      </Button>
    </StyleSearchBar>
  );
};

export default SearchBar;
