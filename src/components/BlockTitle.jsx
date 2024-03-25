import React from 'react';
import classes from '../UI/BlockTitle.module.css';
import line from '../source/line-hor.svg';

const BlockTitle = ({title}) => {
    return (
        <div className={classes.block_title}>
            <img src={line} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default BlockTitle;