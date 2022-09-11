import { Button, TextField } from "@mui/material";
import StyleSearchBar from "./SearchBar.style";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface PropsType {
  label?: string;
  onClick?: () => void;
}

const SearchBar = ({ label, onClick }: PropsType) => {
  const navigate = useNavigate();

  const [urlSearchParams] = useSearchParams();
  const searchParams = Object.fromEntries(Array.from(urlSearchParams));

  const [search, setSearch] = useState(searchParams.search ?? "");

  const onChangeSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newQueryParams = { ...searchParams, search };
    const queryString = new URLSearchParams(newQueryParams).toString();
    navigate(`/companies?${queryString}`);
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
        <Button
          className="search-button"
          variant="contained"
          type="submit"
          onClick={onClick}
        >
          <SearchIcon />
        </Button>
      </StyleSearchBar>
    </form>
  );
};

export default SearchBar;
