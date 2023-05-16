import React, {useState,useEffect} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";
import classes from './AddContact.module.css'


const AddContact = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [error, setError] = useState();

    const addContactHandler = (event) => {
        event.preventDefault();
    if (enteredUsername.trim().length === 0 ||  !enteredEmail.includes('@')){
        setError ({
            title:'Invalid Inputs',
            message: 'Please enter a valid name and email.',
        });
        return;
    }

    props.onAddContacts(enteredUsername, enteredEmail);
    setEnteredEmail('');
    setEnteredUsername('');
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
      };
    
    const userEmailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        };
    const errorHandler = () => {
        setError(null);
        };

    return (
        <div>
            <header className={classes.header}>
                <h1>Contact Form</h1>
            </header>
            {error && (
                <Error title = {error.title} message = {error.message} onConfirm = {errorHandler}/>
            )}
            <div className={classes.marg}>
            <Card className = {classes.input}>
                <form onSubmit = {addContactHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}  maxLength={50}/>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={enteredEmail} onChange={userEmailChangeHandler}/>
                    <Button type = "submit">Submit</Button>
                </form>
            </Card>
            </div>
        </div>
    );

};
export default AddContact;