import React from 'react';
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <div>
        <div className={classes.Modal}>{props.children}</div>
        <Backdrop clicked={props.purchaseClosed}/>
    </div>

);

export default modal;