import React, { useState } from "react";
import Contact from "./components/Contact";
import FormContact from "./components/FormContact";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<{ name: string; firstName: string; email: string; phone: string }[]>([]);

  const addContact = (newContact: { name: string; firstName: string; email: string; phone: string }) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion des Contacts</h1>
      
      <FormContact onAdd={addContact} />
      
      <div className="grid gap-4 mt-4">
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default App;
