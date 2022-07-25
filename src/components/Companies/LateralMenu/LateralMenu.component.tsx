import StyleLateralMenu from "./LateralMenu.style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LateralMenu = () => {
  return (
    <StyleLateralMenu>
      <h3>Rechercher une entreprise</h3>
      <div className="side-search-bar">
        <TextField label="Recherche" variant="outlined" />
        <Button variant="contained">Text</Button>
      </div>
    </StyleLateralMenu>
  );
};

export default LateralMenu;
