import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelect } from "react-supabase";

interface PropsType {
  onClick?: () => void;
}

const Filter = ({ onClick }: PropsType) => {
  const navigate = useNavigate();

  const [urlSearchParams] = useSearchParams();
  const searchParams = Object.fromEntries(Array.from(urlSearchParams));

  const [{ data: tags, error, fetching }] = useSelect("Tag");

  const handleChange = (event: any) => {
    event.preventDefault();
    const newQueryParams = { ...searchParams, theme: event.target.value };
    const queryString = new URLSearchParams(newQueryParams).toString();
    navigate(`/companies?${queryString}`);
    onClick && onClick();
  };

  return (
    <>
      {/* To do : Créer un composant loader et un cas d'erreur */}
      {fetching && <>Chargement ...</>}
      {error && <>{error.message}</>}
      <FormControl fullWidth>
        <InputLabel>Thématique</InputLabel>
        <Select id="select-theme" onChange={handleChange}>
          <MenuItem value="">
            <em>Aucune</em>
          </MenuItem>
          {tags?.map((tag) => (
            <MenuItem value={tag.tagKey}>{tag.tag}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Filter;
