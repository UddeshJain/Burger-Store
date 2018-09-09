import React from 'react';
import burgerLogo from '../../assets/Images/Burger.png';
import classes from './Logo.css';


const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Burger Store"/>
    </div>
);

export default logo;