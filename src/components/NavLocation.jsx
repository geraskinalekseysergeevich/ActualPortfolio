import React from 'react';
import line from '../source/line-vert.svg';
import classes from '../UI/NavLocation.module.css';

const NavLocation = ({currentSection}) => {
    return (
        <div className={classes.nav_location}>
            {currentSection !== 'главная' &&
                <img src={line} alt="" />
            }
            <p>{currentSection}</p>
            {currentSection !== 'контакты' &&
                <img src={line} alt="" />
            }
            
        </div>
    );
};

export default NavLocation;