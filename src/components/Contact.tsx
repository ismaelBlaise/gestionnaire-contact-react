import ContactProps from "../props/ContactProps";

function Contact({ contact }: ContactProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{contact.name} {contact.firstName}</h2>
      <p>Email : {contact.email}</p>
      <p>Téléphone : {contact.phone}</p>
    </div>
  );
}

export default Contact;
