import React from "react";
import classes from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import NavItems from './../NavItems/NavItems';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <p>MENU</p>
        <Logo/>
        <nav>
            <NavItems/>
        </nav>
    </header>
)

export default toolbar;