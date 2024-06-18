import React from "react";
import {Link} from "react-router-dom";
import ContactForm from "../component/ContactForm.jsx";

const addContact = () => {
 
  return (
    <div className="container">
      <h1 className="text-center mt-3">Add a New Contact</h1>
            <ContactForm onSubmit={false} initialContact={""} />

        </div>
  );
};

export default addContact;
