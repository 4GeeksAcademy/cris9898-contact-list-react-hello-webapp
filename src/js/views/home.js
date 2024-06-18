import React, { useContext, useState } from "react";
import profileImage from "../../img/profile.png";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import EditModal from "../component/EditContact.jsx"


export const Home = () => {
  const { store, actions } = useContext(Context);
  //en el store son los array del flux en el store(arriba del action)
  const navigate = useNavigate();

  const handleEditContact = (contactId) => {
    // Encuentra el contacto por ID en el store
    const contactToEdit = store.contacts.find((contact) => contact.id === contactId);

    // Navega a la ruta de edición con el ID del contacto
    navigate(`/edit-contact/${contactId}`, { state: { contact: contactToEdit } });
  };

  return (
    <div>
      <div className="d-flex justify-content-end m-1">
        <Link to="/add-contact">
          <button className="btn btn-primary">Add Contacts</button>
        </Link>
      </div>

      <div className="container">
        {store.contacts.map((contact) => {
          return (
            
            <div className="card mt-4" key={contact.id}>
              <div className="d-flex">
                <img src={profileImage} className="profilePhoto" />

                <div className="flex-grow-1 ms-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-5">{contact.name}</span>
                    
                    <div className="d-flex">
                    
                        <button
                          className="btn btn-warning"
                          onClick={() => handleEditContact(contact.id)}
                        >
                          <i className="fas fa-pen"></i>
                        </button>
                     
                      <button
                        className="btn btn-danger"
                        onClick={() => actions.deleteContactList(contact.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>

                  <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="ms-3">{contact.address}</span>
                  </div>
                  <div>
                    <i className="fas fa-phone"></i>
                    <span className="ms-3">{contact.phone}</span>
                  </div>
                  <div>
                    <i className="far fa-envelope"></i>
                    <span className="ms-3">{contact.email}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
