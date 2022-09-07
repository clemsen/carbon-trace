import { Button, TextField } from "@mui/material";
import StyleSearchBar from "./SearchBar.style";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PropsType {
  label?: string;
}

const SearchBar = ({ label }: PropsType) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const onChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/companies?search=${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyleSearchBar>
        <TextField
          label={label || "Recherche"}
          variant="outlined"
          value={search}
          onChange={onChangeSearch}
        />
        <Button className="search-button" variant="contained" type="submit">
          <SearchIcon />
        </Button>
      </StyleSearchBar>
    </form>
  );
};

export default SearchBar;
