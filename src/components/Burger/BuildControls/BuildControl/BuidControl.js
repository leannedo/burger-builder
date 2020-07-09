import React from "react";
import classes from '../BuildControl/BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;