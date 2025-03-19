import Contact from "./components/Contact";

const contacts = [
  { name: "Dupont", firstName: "Alice", email: "alice@gmail.com", phone: "123456789" },
  { name: "Martin", firstName: "Bob", email: "bob@gmail.com", phone: "987654321" },
  { name: "Lemoine", firstName: "Claire", email: "claire@gmail.com", phone: "567890123" }
];

function App() {
  return (    
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des Contacts</h1>
      <div className="grid gap-4">
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
