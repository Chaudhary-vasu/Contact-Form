import React from "react";
import Card from "../UI/Card";
import classes from './ContactsList.module.css'

const ContactsList = (props) => {
    console.log(props.contacts);
    return (
        <Card className = {classes.contact}>
        <ol>
        {props.contacts.length > 0 ? (
          props.contacts.map((contact) => (
            <li key={contact.id}>
              &nbsp; &nbsp; Name - {contact.name} <br /> &nbsp; &nbsp; Email - {contact.email}
              <hr />
            </li>
          ))
        ) : (
          <h2>No data</h2>
        )}
        </ol>
        </Card>
    );
};
export default ContactsList;