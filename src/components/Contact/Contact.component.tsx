const Contact = () => {
  return (
    <form>
      <label>Votre Email</label>
      <br />
      <input type="text" id="email" name="email" />
      <br />
      <label>Votre Message</label>
      <br />
      <input type="text" id="message" name="message" />
      <br />
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default Contact;
