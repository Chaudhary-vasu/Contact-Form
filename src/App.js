import React from "react";
import "./App.css";
import AddContact from "./components/ContactForm/AddContact";
import ContactsList from "./components/ContactForm/ContactsList";
import { useState,useEffect } from 'react'

const App = () => {
  
  const [contactslist,setContactsList] = useState([]);
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContactsList(JSON.parse(storedContacts));
    }
  }, []);

  const addContactHandler = (Username, UserEmail) => {
    setContactsList((prevContactsList) => {
      const newContact = { name: Username, email: UserEmail, id: Math.random().toString() };
      const updatedContactsList = [...prevContactsList, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContactsList));
      return updatedContactsList;
    });
  };


  return (
    <React.Fragment>
      <AddContact onAddContacts = {addContactHandler} />
      <ContactsList contacts = {contactslist}/>
    </React.Fragment>
  );
}

export default App;
