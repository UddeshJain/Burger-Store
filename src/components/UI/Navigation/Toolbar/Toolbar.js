import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
);

export default toolbar;