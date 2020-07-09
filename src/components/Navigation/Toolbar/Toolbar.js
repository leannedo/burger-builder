import React from "react";
import classes from './Toolbar.module.css';
import Logo from "../../Logo/Logo";

const toolbar = () => (
    <header className={classes.Toolbar}>
        <p>MENU</p>
        <Logo/>
        <nav>
            ...
        </nav>
    </header>
)

export default toolbar;