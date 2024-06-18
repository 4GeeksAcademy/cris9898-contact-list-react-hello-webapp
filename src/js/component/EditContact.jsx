import React from "react";
import { useLocation, Link } from "react-router-dom";
import ContactForm from "./ContactForm.jsx";

const EditContact = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <>
      <h1 className="text-center mt-3">Edit Contact</h1>
      <ContactForm initialContact={contact} onSubmit={true} />
      
    </>
  );
};

export default EditContact;