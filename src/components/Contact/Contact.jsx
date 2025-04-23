import React from 'react';
import s from "./Contact.module.css";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contactsSlice.js";

const Contact = ({contact}) => {
    const {name, number} = contact;
    const dispatch = useDispatch();
    console.log("contact: ", contact);
    return (
        <>
            <div className={s.card}>
                <div className={s.cardContent}>
                    <div className={s.cardName}>
                        <p>{name}</p>
                    </div>
                    <div className={s.cardNumber}>
                        <p>{number}</p>
                    </div>

                </div>
                <button className={s.button}
                        onClick={() => dispatch(deleteContact(contact.id))}>
                    Delete
                </button>
            </div>
        </>
    );
};

export default Contact;