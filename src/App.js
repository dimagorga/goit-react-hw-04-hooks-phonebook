import { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    ...JSON.parse(localStorage.getItem("contacts")),
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (nextContact) => {
    const sameName = contacts.some(
      (contact) =>
        contact.name.toLocaleLowerCase() ===
        nextContact.name.toLocaleLowerCase()
    );
    if (sameName) {
      alert(`${nextContact.name} is already in contacts`);
    } else {
      setContacts((prevState) => [nextContact, ...prevState]);
    }
  };

  const handleRemove = (id) => {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== id);
    });
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div className="container">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm handleSubmit={addContact} />
      <h2 className="contactsTitle">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contactsList={visibleContacts}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
