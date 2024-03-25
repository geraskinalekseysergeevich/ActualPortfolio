import React from 'react';
import classes from '../UI/ViewButton.module.css';

const ViewButton = ({link}) => {
    return (
        <a href={link} target='_blank' rel="noreferrer" className={classes.view_button}>
            <p>посмотреть</p>
        </a>
    );
};

export default ViewButton;