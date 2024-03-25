import React from 'react';
import classes from '../UI/Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <p>Гераськин Алексей</p>
            <p className={classes.year}>2024 год</p>
            <p>React JS</p>
        </div>
    );
};

export default Footer;