import { Button, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import { useRef } from "react";
import LateralMenu from "../LateralMenu";
import StyleContact from "./Contact.style";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID || "",
        process.env.REACT_APP_TEMPLATE_ID || "",
        form.current || "",
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
  };

  return (
    <StyleContact>
      <form ref={form} onSubmit={sendEmail} className="contact-section">
        <h2 className="form-label">Votre Email</h2>
        <TextField
          label="Votre Email"
          variant="outlined"
          name="contact_email"
          required
        />

        <h2 className="form-label">Votre Message</h2>
        <TextField
          label="Votre Message"
          variant="outlined"
          name="contact_message"
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
