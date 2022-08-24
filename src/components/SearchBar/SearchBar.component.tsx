import { Button, TextField } from "@mui/material";
import StyleSearchBar from "./SearchBar.style";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const onChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const searchCompany = () => {
    navigate(`/companies?search=${search}`);
  };

  return (
    <StyleSearchBar>
      <TextField
        label="Recherche"
        variant="outlined"
        value={search}
        onChange={onChangeSearch}
      />
      <Button
        className="lateral-search-button"
        variant="contained"
        onClick={searchCompany}
      >
        <SearchIcon />
      </Button>
    </StyleSearchBar>
  );
};

export default SearchBar;
