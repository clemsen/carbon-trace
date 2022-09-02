import { Button, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import LateralMenu from "../LateralMenu";
import StyleContact from "./Contact.style";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    setEmail("");
    setMessage("");
  };

  return (
    <StyleContact>
      <form ref={form} onSubmit={sendEmail} className="contact-section">
        <h2 className="form-label">Votre Email</h2>
        <TextField
          label="Votre Email"
          variant="outlined"
          name="contact_email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <h2 className="form-label">Votre Message</h2>
        <TextField
          label="Votre Message"
          variant="outlined"
          name="contact_message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
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
