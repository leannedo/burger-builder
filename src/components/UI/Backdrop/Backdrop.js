import React from "react";
import classes from './Backdrop.module.css';

const backdrop = (props) => (
    <div onClick={props.clicked} className={classes.Backdrop}/>
);

export default backdrop;

