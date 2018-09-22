import React from 'react';
import classes from './Navigationitems.css';
import NavigationItem from './Navigationitem/Navigationitem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
);

export default navigationItems;