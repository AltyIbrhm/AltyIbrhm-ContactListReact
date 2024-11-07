import React, { useContext } from "react";
import { Contact } from "./Contact.jsx";

import { Context } from "../store/appContext.js";

export const ContactList = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <ul>
                {store.contacts.map(contact => {
                    return (
                        <li key={contact.id} className="d-flex">
                            <Contact
                                name={contact.name}
                                phone={contact.phone}
                                email={contact.email}
                                address={contact.address}
                                id={contact.id}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

