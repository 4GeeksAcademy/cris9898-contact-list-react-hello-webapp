import React, { useContext, useState, useEffect } from "react";
import { Form, Link, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const contactForm = ({ initialContact, onSubmit }) => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: initialContact.name || "",
        email: initialContact.email || "",
        phone: initialContact.phone || "",
        address: initialContact.address || "",
      });
  function handleChange(event) {
    setContact({ ...contact, [event.target.name]: event.target.value });
  }


  function handleSubmit(event) {
    event.preventDefault();
    
    if (onSubmit == true) {
        actions.editContactList(initialContact.id, contact);
        
    }else{
        actions.addContactList(contact);
    }
    
  }

    return (
        <div className="container">

            <form className="card-body" onSubmit={handleSubmit}>
                <div>
                    <label className="mt-4">Full Name:</label>
                    <input
                        type="text"
                        placeholder="Full Name Here..."
                        className="form-control"
                        name="name"
                        value={contact.name || initialContact.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="mt-4">Email:</label>
                    <input
                        type="text"
                        placeholder="Email Here..."
                        className="form-control"
                        name="email"
                        value={contact.email || initialContact.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="mt-4">Phone Number:</label>
                    <input
                        type="text"
                        placeholder="Phone Number Here..."
                        className="form-control"
                        name="phone"
                        value={contact.phone || initialContact.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="mt-4">Address:</label>
                    <input
                        type="text"
                        placeholder="Your Address Here..."
                        className="form-control"
                        name="address"
                        value={contact.address || initialContact.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-4 ">
                       Create Contact
                    </button>
                </div>
                <div>
                    <Link to="/">Back to Home</Link>
                </div>
            </form>
        </div>
    );
};

export default contactForm;