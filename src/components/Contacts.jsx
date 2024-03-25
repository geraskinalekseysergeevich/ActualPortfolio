import React from 'react';
import BlockTitle from './BlockTitle';
import classes from '../UI/Contacts.module.css';

const Contacts = ({contactsRef}) => {
    return (
        <div ref={contactsRef} className={classes.contacts}>
            <BlockTitle title={'контакты'}/>
            <p>Email: leha.geraskin.80@gmail.com</p>
            <p>Telegram: @geraskin_aleksey</p>
            <p>WhatsApp: +79854806003</p>
        </div>
    );
};

export default Contacts;