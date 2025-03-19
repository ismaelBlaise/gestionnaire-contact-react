import React, { useState } from "react";
import ContactProps from "../props/ContactProps";


function FormContact({ onAdd }: { onAdd: (contact: ContactProps["contact"]) => void }) {
  const [contact, setContact] = useState({
    name: "",
    firstName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.name || !contact.firstName || !contact.email || !contact.phone) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    onAdd(contact);
    setContact({ name: "", firstName: "", email: "", phone: "" }); // Réinitialisation du formulaire
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Ajouter un contact</h2>
      <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Nom" className="border p-2 w-full mb-2"/>
      <input type="text" name="firstName" value={contact.firstName} onChange={handleChange} placeholder="Prénom" className="border p-2 w-full mb-2"/>
      <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full mb-2"/>
      <input type="tel" name="phone" value={contact.phone} onChange={handleChange} placeholder="Téléphone" className="border p-2 w-full mb-2"/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Ajouter</button>
    </form>
  );
}

export default FormContact;
