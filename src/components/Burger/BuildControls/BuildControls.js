import React from "react";
import BuildControl from "./BuildControl/BuidControl";
import classes from "./BuildControls.module.css";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Meat", type: "meat"},
    {label: "Cheese", type: "cheese"},
    {label: "Bacon", type: "bacon"}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disableInfo[ctrl.type]}/>
            ))}
        <button
            className={classes}
            disabled={!props.purchasable}
            onClick={props.purchased}>ORDER NOW</button>
    </div>
);

export default buildControls;