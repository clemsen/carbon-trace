import { Button, TextField } from "@mui/material";
import LateralMenu from "../LateralMenu";
import StyleContact from "./Contact.style";
import SearchIcon from "@mui/icons-material/Search";

const Contact = () => {
  return (
    <StyleContact>
      <form className="contact-section">
        <h2 className="form-label">Votre Email</h2>
        <TextField
          id="contact-email"
          label="Votre Email"
          variant="outlined"
          name="contact-email"
          required
        />

        <h2 className="form-label">Votre Message</h2>
        <TextField
          id="contact-message"
          label="Votre Message"
          variant="outlined"
          name="contact-message"
          required
          multiline
        />
        <Button
          className="contact-submit-button"
          variant="outlined"
          type="submit"
        >
          Envoyer
        </Button>
      </form>
      <LateralMenu />
    </StyleContact>
  );
};

export default Contact;
