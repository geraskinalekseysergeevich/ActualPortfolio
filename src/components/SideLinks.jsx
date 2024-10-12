import React from 'react';
import whats_app_logo from '../source/links-icons/whats-app.svg';
import telegram_logo from '../source/links-icons/telegram.svg';
import mail_logo from '../source/links-icons/mail.svg';
import classes from '../UI/SideLinks.module.css';

const SideLinks = () => {
    return (
        <div className={classes.side_links}>
            <a href="https://t.me/geraskin_aleksey" rel="noreferrer" target='_blank'><img src={telegram_logo} alt="" /></a>
            <a href="mailto:leha.geraskin.80@gmail.com"><img src={mail_logo} alt="" /></a>
            <a href="https://wa.me/79854806003" rel="noreferrer" target='_blank'><img src={whats_app_logo} alt="" /></a>
        </div>
    );
};

export default SideLinks;